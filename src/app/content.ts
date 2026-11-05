export type Stage = "intro" | "notice" | "weigh" | "focus" | "insight" | "complete";
export type Topic = { id: string; label: string };

export const TOPICS: Topic[] = [
  { id: "work", label: "Work" },
  { id: "relationships", label: "Relationships" },
  { id: "money", label: "Money" },
  { id: "family", label: "Family" },
  { id: "future", label: "Future" },
  { id: "myself", label: "Myself" },
  { id: "health", label: "Health" },
  { id: "studies", label: "Studies" },
  { id: "loneliness", label: "Loneliness" },
  { id: "life-changes", label: "Life changes" },
  { id: "else", label: "Something else" },
];

export type Reason = { id: string; label: string; insight: [string, string] };
const TOPIC_REASONS: Record<string, Reason[]> = {
  "work": [
    {"id": "next", "label": "Uncertainty about what comes next", "insight": ["Maybe it's not the work itself.", "Maybe it is the uncertainty around where your work is headed."]},
    {"id": "figured", "label": "Pressure to do well", "insight": ["Maybe it's not the work itself.", "Maybe it is the pressure to keep proving that you are doing enough."]},
    {"id": "control", "label": "Having little say in decisions", "insight": ["Maybe it's not the work itself.", "Maybe it is having to carry decisions you had little room to shape."]},
    {"id": "toomuch", "label": "Too much to do", "insight": ["Maybe it's not the work itself.", "Maybe it is how much you are being asked to hold at once."]},
    {"id": "unsure", "label": "I'm not sure", "insight": ["Maybe it's not the work itself.", "You do not need to name the hardest part before you can be gentle with yourself."]},
  ],
  "relationships": [
    {"id": "next", "label": "Not knowing where we stand", "insight": ["Maybe it's not the relationship itself.", "Maybe it is the uncertainty about where you stand with someone."]},
    {"id": "figured", "label": "Feeling unheard or misunderstood", "insight": ["Maybe it's not the relationship itself.", "Maybe it is wanting your experience to be heard and understood."]},
    {"id": "control", "label": "Conflict or difficult conversations", "insight": ["Maybe it's not the relationship itself.", "Maybe it is the tension around things that feel hard to say."]},
    {"id": "toomuch", "label": "Giving more than I have room for", "insight": ["Maybe it's not the relationship itself.", "Maybe it is how much of yourself you have been giving."]},
    {"id": "unsure", "label": "I'm not sure", "insight": ["Maybe it's not the relationship itself.", "You do not need to name the hardest part before you can be gentle with yourself."]},
  ],
  "money": [
    {"id": "next", "label": "Worrying about future security", "insight": ["Maybe it's not the money itself.", "Maybe it is not knowing whether you will have enough later."]},
    {"id": "figured", "label": "Pressure to be further ahead", "insight": ["Maybe it's not the money itself.", "Maybe it is the pressure to already have your finances sorted."]},
    {"id": "control", "label": "Feeling unable to change my money situation", "insight": ["Maybe it's not the money itself.", "Maybe it is feeling that your options are narrower than you need."]},
    {"id": "toomuch", "label": "Bills, debt, or supporting others", "insight": ["Maybe it's not the money itself.", "Maybe it is how many needs are asking for the same limited resources."]},
    {"id": "unsure", "label": "I'm not sure", "insight": ["Maybe it's not the money itself.", "You do not need to name the hardest part before you can be gentle with yourself."]},
  ],
  "family": [
    {"id": "next", "label": "Worrying about someone in my family", "insight": ["Maybe it's not your family itself.", "Maybe it is the uncertainty around someone you care about."]},
    {"id": "figured", "label": "Expectations I struggle to meet", "insight": ["Maybe it's not your family itself.", "Maybe it is the pressure to meet expectations that feel heavy."]},
    {"id": "control", "label": "Conflict or boundaries", "insight": ["Maybe it's not your family itself.", "Maybe it is trying to stay connected while protecting your own space."]},
    {"id": "toomuch", "label": "Feeling responsible for everyone", "insight": ["Maybe it's not your family itself.", "Maybe it is carrying more responsibility than one person can comfortably hold."]},
    {"id": "unsure", "label": "I'm not sure", "insight": ["Maybe it's not your family itself.", "You do not need to name the hardest part before you can be gentle with yourself."]},
  ],
  "future": [
    {"id": "next", "label": "Not knowing what comes next", "insight": ["Maybe it's not the future itself.", "Maybe it is the uncertainty around what comes next."]},
    {"id": "figured", "label": "Pressure to have a plan", "insight": ["Maybe it's not the future itself.", "Maybe it is the belief that you should already know the whole way."]},
    {"id": "control", "label": "Facing decisions I cannot control", "insight": ["Maybe it's not the future itself.", "Maybe it is wanting steadier ground while outcomes remain uncertain."]},
    {"id": "toomuch", "label": "Too many possible directions", "insight": ["Maybe it's not the future itself.", "Maybe it is trying to hold every possible direction in your mind at once."]},
    {"id": "unsure", "label": "I'm not sure", "insight": ["Maybe it's not the future itself.", "You do not need to name the hardest part before you can be gentle with yourself."]},
  ],
  "myself": [
    {"id": "next", "label": "Not knowing what I need", "insight": ["Maybe it's not you.", "Maybe it is needing space to hear what matters to you."]},
    {"id": "figured", "label": "Being hard on myself", "insight": ["Maybe it's not you.", "Maybe it is the pressure of the way you have been speaking to yourself."]},
    {"id": "control", "label": "Feeling disconnected from myself", "insight": ["Maybe it's not you.", "Maybe it is having had little room to feel like yourself lately."]},
    {"id": "toomuch", "label": "Feeling emotionally worn out", "insight": ["Maybe it's not you.", "Maybe it is how much you have been holding without enough rest."]},
    {"id": "unsure", "label": "I'm not sure", "insight": ["Maybe it's not you.", "You do not need to name the hardest part before you can be gentle with yourself."]},
  ],
  "health": [
    {"id": "next", "label": "Uncertainty about symptoms or what comes next", "insight": ["Maybe it's not only your health.", "Maybe it is the uncertainty you are carrying around your health."]},
    {"id": "figured", "label": "Pressure to feel better quickly", "insight": ["Maybe it's not only your health.", "Maybe it is the pressure to recover on a timeline that feels difficult."]},
    {"id": "control", "label": "Feeling limited in daily life", "insight": ["Maybe it's not only your health.", "Maybe it is how much your daily choices have felt constrained."]},
    {"id": "toomuch", "label": "Managing care, appointments, or costs", "insight": ["Maybe it's not only your health.", "Maybe it is all the practical work involved in caring for your health."]},
    {"id": "unsure", "label": "I'm not sure", "insight": ["Maybe it's not only your health.", "You do not need to name the hardest part before you can be gentle with yourself."]},
  ],
  "studies": [
    {"id": "next", "label": "Uncertainty about my direction", "insight": ["Maybe it's not only your studies.", "Maybe it is wanting clarity about where your learning is taking you."]},
    {"id": "figured", "label": "Pressure around grades or expectations", "insight": ["Maybe it's not only your studies.", "Maybe it is the pressure to turn your effort into the results others expect."]},
    {"id": "control", "label": "Struggling with the learning environment", "insight": ["Maybe it's not only your studies.", "Maybe it is how difficult it has felt to learn in the setting you are in."]},
    {"id": "toomuch", "label": "Exams, deadlines, or workload", "insight": ["Maybe it's not only your studies.", "Maybe it is how many demands have gathered around the same moment."]},
    {"id": "unsure", "label": "I'm not sure", "insight": ["Maybe it's not only your studies.", "You do not need to name the hardest part before you can be gentle with yourself."]},
  ],
  "loneliness": [
    {"id": "next", "label": "Not knowing how to reach out", "insight": ["Maybe it's not only being alone.", "Maybe it is wanting connection while not knowing where to begin."]},
    {"id": "figured", "label": "Feeling unseen or misunderstood", "insight": ["Maybe it's not only being alone.", "Maybe it is wanting to feel known, rather than simply being around people."]},
    {"id": "control", "label": "Finding it hard to build connections", "insight": ["Maybe it's not only being alone.", "Maybe it is how much effort finding connection has been taking."]},
    {"id": "toomuch", "label": "Having no one to share things with", "insight": ["Maybe it's not only being alone.", "Maybe it is carrying experiences without enough room to share them."]},
    {"id": "unsure", "label": "I'm not sure", "insight": ["Maybe it's not only being alone.", "You do not need to name the hardest part before you can be gentle with yourself."]},
  ],
  "life-changes": [
    {"id": "next", "label": "Not knowing what comes next", "insight": ["Maybe it's not only the change itself.", "Maybe it is the uncertainty that comes with unfamiliar ground."]},
    {"id": "figured", "label": "Pressure to adjust quickly", "insight": ["Maybe it's not only the change itself.", "Maybe it is the expectation that you should already feel settled."]},
    {"id": "control", "label": "Losing familiar routines or support", "insight": ["Maybe it's not only the change itself.", "Maybe it is missing the things that used to help you feel grounded."]},
    {"id": "toomuch", "label": "Too many changes at once", "insight": ["Maybe it's not only the change itself.", "Maybe it is having to adjust to several things before you have had time to catch your breath."]},
    {"id": "unsure", "label": "I'm not sure", "insight": ["Maybe it's not only the change itself.", "You do not need to name the hardest part before you can be gentle with yourself."]},
  ],
  "else": [
    {"id": "next", "label": "Not knowing what comes next", "insight": ["Maybe it's not this on its own.", "Maybe it is not knowing what comes next."]},
    {"id": "figured", "label": "Feeling like I should have it figured out", "insight": ["Maybe it's not this on its own.", "Maybe it is the pressure to already have it figured out."]},
    {"id": "control", "label": "Feeling out of control", "insight": ["Maybe it's not this on its own.", "Maybe it is the part you cannot control."]},
    {"id": "toomuch", "label": "There is just too much to think about", "insight": ["Maybe it's not this on its own.", "Maybe it is everything you are trying to hold at once."]},
    {"id": "unsure", "label": "I'm not sure", "insight": ["Maybe it's not this on its own.", "You do not need to name the hardest part before you can be gentle with yourself."]},
  ],
};

export function getReasons(topicId: string): Reason[] {
  return Object.hasOwn(TOPIC_REASONS, topicId) ? TOPIC_REASONS[topicId] : TOPIC_REASONS.else;
}

export function buildInsight(topicId: string, reasonId: string): [string, string] {
  return getReasons(topicId).find(({ id }) => id === reasonId)?.insight ?? [
    "Maybe it's not this on its own.",
    "Maybe it's everything sitting quietly underneath it.",
  ];
}
