function BackgroundDefault({ className }: { className?: string }) {
  return <div className={className || "bg-[#f6f6f6] h-[812px] overflow-clip relative w-[375px]"} data-name="Background/Default" />;
}

function Group() {
  return (
    <div className="absolute contents left-[80px] top-[49px]">
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Bold',sans-serif] leading-[40px] left-[80px] not-italic text-[36px] text-white top-[49px] whitespace-nowrap">Background</p>
    </div>
  );
}

function Head() {
  return (
    <div className="absolute bg-[#00c4b3] h-[138px] left-0 overflow-clip top-0 w-[1200px]" data-name="Head">
      <Group />
    </div>
  );
}

function BackgroundGradientExtended() {
  return (
    <div className="absolute bg-[#f6f6f6] h-[812px] left-[630px] overflow-clip top-[288px] w-[375px]" data-name="Background/Gradient/Extended">
      <div className="absolute h-[584px] left-0 top-0 w-[375px]" data-name="Background/Gradient/Extended">
        <div className="absolute bg-gradient-to-b from-[#dbf0ee] from-[41.338%] inset-0 to-[84.385%] to-[rgba(219,240,238,0)] via-[84.375%] via-[rgba(228,239,251,0)]" />
      </div>
    </div>
  );
}

export default function Background() {
  return (
    <div className="bg-white relative size-full" data-name="Background">
      <BackgroundDefault className="absolute bg-[#f6f6f6] h-[812px] left-[195px] top-[288px] w-[375px]" />
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Medium',sans-serif] leading-[30px] left-[630px] not-italic text-[#00c4b3] text-[24px] top-[218px] whitespace-nowrap">Gradient / Extended</p>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Medium',sans-serif] leading-[30px] left-[195px] not-italic text-[#00c4b3] text-[24px] top-[218px] whitespace-nowrap">Default</p>
      <Head />
      <BackgroundGradientExtended />
    </div>
  );
}