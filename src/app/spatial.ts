import type { Topic } from "./content";

export type TopicPosition = { nx: number; ny: number };
export type TopicPositions = Record<string, TopicPosition>;
export type TopicBounds = { mx: number; my: number; minY?: number; maxY?: number };

/** Initial topic positions are normalized to the field's width and height. */
export function createInitialPositions(topics: Topic[]): TopicPositions {
  const count = topics.length;
  if (count === 0) return {};

  const radius = count <= 2 ? 24 / 100 : 32 / 100;
  return Object.fromEntries(topics.map(({ id }, index) => {
    const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
    const variedRadius = radius + (index % 2 === 0 ? 2 / 100 : -2 / 100);
    return [id, {
      nx: Math.cos(angle) * variedRadius,
      ny: Math.sin(angle) * variedRadius * 86 / 100,
    }];
  }));
}

/** Keep positions for retained topics and place only topics added since last visit. */
export function reconcileTopicPositions(
  topics: Topic[],
  current: TopicPositions
): TopicPositions {
  const initial = createInitialPositions(topics);
  return Object.fromEntries(topics.map(({ id }) => [id, current[id] ?? initial[id]]));
}

/** Return the closest selected topic; ties follow the stable topic order. */
export function findClosestTopic<T extends Topic>(
  topics: T[],
  positions: TopicPositions
): T | null {
  let closest: T | null = null;
  let closestDistance = Infinity;
  for (const topic of topics) {
    const position = positions[topic.id] ?? { nx: 0, ny: 0 };
    const distance = Math.hypot(position.nx, position.ny);
    if (distance < closestDistance) {
      closest = topic;
      closestDistance = distance;
    }
  }
  return closest;
}

export function getTopicBounds(
  fieldWidth: number,
  fieldHeight: number,
  chipWidth: number,
  chipHeight: number,
  padding = 8,
  centerY = fieldHeight / 2
): TopicBounds {
  if (fieldWidth <= 0 || fieldHeight <= 0) return { mx: 0, my: 0 };
  return {
    mx: Math.max(0, 1 / 2 - (chipWidth / 2 + padding) / fieldWidth),
    my: Math.max(0, (Math.min(centerY, fieldHeight - centerY) - chipHeight / 2 - padding) / fieldHeight),
    minY: -Math.max(0, (centerY - chipHeight / 2 - padding) / fieldHeight),
    maxY: Math.max(0, (fieldHeight - centerY - chipHeight / 2 - padding) / fieldHeight),
  };
}

export function clampPosition(position: TopicPosition, bounds: TopicBounds): TopicPosition {
  const nx = Number.isFinite(position.nx) ? position.nx : 0;
  const ny = Number.isFinite(position.ny) ? position.ny : 0;
  const mx = Math.max(0, bounds.mx);
  const my = Math.max(0, bounds.my);
  return {
    nx: Math.max(-mx, Math.min(mx, nx)),
    ny: Math.max(bounds.minY ?? -my, Math.min(bounds.maxY ?? my, ny)),
  };
}

export function compactTopicRows(topics: Topic[], fieldWidth: number, measure: (id: string) => number): Topic[][] {
  const regular = topics.filter(({ id }) => id !== "else");
  if (topics.length < 9) {
    return Array.from({ length: Math.ceil(regular.length / 2) }, (_, i) => regular.slice(i * 2, i * 2 + 2));
  }
  const rows: Topic[][] = [];
  const ordered = [...regular].sort((a, b) => measure(b.id) - measure(a.id));
  for (const topic of ordered) {
    const row = rows.find(items => items.reduce((sum, item) => sum + measure(item.id), 0)
      + items.length * 8 + measure(topic.id) <= fieldWidth - 16);
    if (row) row.push(topic);
    else rows.push([topic]);
  }
  return rows;
}

export function compactFieldHeight(rowCount: number): number {
  const upper = Math.ceil(rowCount / 2), lower = rowCount - upper;
  const groupHeight = (count: number) => count * 50 + Math.max(0, count - 1) * 8;
  return groupHeight(upper) + groupHeight(lower) + 154;
}

export function compactAnchorY(rowCount: number): number {
  const upper = Math.ceil(rowCount / 2);
  return upper * 50 + Math.max(0, upper - 1) * 8 + 52;
}

/** Measured rows keep 8px gaps; dense layouts reserve the anchor and caption. */
export function createCompactPositions(
  topics: Topic[],
  fieldWidth: number,
  measureChipWidth: (id: string) => number,
  fieldHeight?: number
): TopicPositions {
  if (fieldWidth <= 0 || topics.length < 4) return {};

  const custom = topics.find(({ id }) => id === "else");
  const rows = compactTopicRows(topics, fieldWidth, measureChipWidth);

  const rowCount = rows.length + (custom ? 1 : 0);
  const presets: Record<number, number[]> = {
    1: [0.5],
    2: [0.3, 0.75],
    3: [0.16, 0.32, 0.78],
    4: [0.14, 0.28, 0.72, 0.86],
  };
  const yFractions = (topics.length < 9 ? presets[rowCount] : undefined) ?? Array.from(
    { length: rowCount },
    (_, index) => {
      const upperRows = Math.ceil(rowCount / 2);
      const height = fieldHeight ?? compactFieldHeight(rowCount);
      const anchorY = compactAnchorY(rowCount);
      const centerY = index < upperRows
        ? 33 + index * 58
        : anchorY + 93 + (index - upperRows) * 58;
      return (centerY - anchorY) / height + 0.5;
    }
  );

  const next: TopicPositions = {};
  rows.forEach((row, rowIndex) => {
    const widths = row.map(({ id }) => Math.max(0, measureChipWidth(id)));
    const gap = 8;
    const totalWidth = widths.reduce((sum, width) => sum + width, 0) + (row.length - 1) * gap;
    let left = (fieldWidth - totalWidth) / 2;
    row.forEach((topic, index) => {
      const centerX = left + widths[index] / 2;
      next[topic.id] = {
        nx: centerX / fieldWidth - 0.5,
        ny: yFractions[rowIndex] - 0.5,
      };
      left += widths[index] + gap;
    });
  });

  if (custom) {
    const rowIndex = rows.length;
    next[custom.id] = { nx: 0, ny: yFractions[rowIndex] - 0.5 };
  }
  return next;
}
