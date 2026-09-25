import svgPaths from "./svg-phufksthov";

function Group() {
  return (
    <div className="absolute contents left-[80px] top-[49px]">
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Bold',sans-serif] leading-[40px] left-[80px] not-italic text-[#f6f6f6] text-[36px] top-[49px] whitespace-nowrap">Shapes</p>
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

export default function Shapes() {
  return (
    <div className="bg-[#fbfbfb] relative size-full" data-name="Shapes">
      <Head />
      <div className="absolute h-[40px] left-[140px] top-[558px] w-[100px]" data-name="Shapes/Fill/50px">
        <div className="absolute bg-[#cdd8e1] inset-0" data-name="Shapes/Fill/50px" />
      </div>
      <div className="absolute left-[140px] size-[40px] top-[302px]" data-name="Shapes/Fill/Circle">
        <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
          <circle cx="20" cy="20" fill="#CDD8E1" id="Shapes/Fill/Circle" r="20" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Medium',sans-serif] leading-[30px] left-[140px] not-italic text-[#00c4b3] text-[24px] top-[218px] whitespace-nowrap">Shapes</p>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Medium',sans-serif] leading-[24px] left-[140px] not-italic text-[20px] text-black top-[374px] w-[197px]">Circle</p>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Medium',sans-serif] leading-[24px] left-[621px] not-italic text-[20px] text-black top-[374px] whitespace-nowrap">Rounded square</p>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Medium',sans-serif] leading-[24px] left-[620px] not-italic text-[20px] text-black top-[630px] whitespace-nowrap">Rounded Rectangle</p>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Medium',sans-serif] leading-[24px] left-[140px] not-italic text-[20px] text-black top-[630px] w-[197px]">Rectangles</p>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Book',sans-serif] leading-[22px] left-[140px] not-italic text-[16px] text-black top-[406px] w-[433px]">{`Circles are primarily used as a control for components like a toggle switch. Because of their unique shape, their visual prominence is high and should be used only where a high visual prominence is desired. `}</p>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Book',sans-serif] leading-[22px] left-[621px] not-italic text-[16px] text-black top-[406px] w-[433px]">Rounded square are used for avatars.</p>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Book',sans-serif] leading-[22px] left-[621px] not-italic text-[16px] text-black top-[662px] w-[420px]">Rounded rectangles are used for actionable items like buttons, dialogs, cards, and inputs. Rounded rectangles use margin to give space between them and other elements and are never set edge to edge. Their shape is given by fill, stroke, or shadows.</p>
      <div className="absolute h-[40px] left-[621px] rounded-[8px] top-[558px] w-[100px]" data-name="Shapes/Fill/50px">
        <div className="absolute bg-[#cdd8e1] inset-0 rounded-[8px]" data-name="Shapes/Fill/50px" />
      </div>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Medium',sans-serif] leading-[10px] left-[660px] not-italic text-[#00c4b3] text-[10px] top-[540px] whitespace-nowrap">8 px</p>
      <div className="absolute h-[40px] left-[769px] rounded-[24px] top-[558px] w-[100px]" data-name="Shapes/Fill/50px">
        <div className="absolute bg-[#cdd8e1] inset-0 rounded-[824px]" data-name="Shapes/Fill/50px" />
      </div>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Medium',sans-serif] leading-[10px] left-[805px] not-italic text-[#00c4b3] text-[10px] top-[540px] whitespace-nowrap">24 px</p>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Book',sans-serif] leading-[22px] left-[140px] not-italic text-[16px] text-black top-[662px] w-[409px]">Rectangles divide space. Their fill color is what creates this division. Rectangles divide headers, side bars, body, banners, and footers. They run edge to edge with little to no margin. Rectangles with sharp corners should never be used for actions, avatars, or metadata.</p>
      <div className="absolute left-[621px] size-[40px] top-[302px]" data-name="Avatar/Provider">
        <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
          <path d={svgPaths.p3b4afe80} fill="#CDD8E1" id="Vector 746" />
        </svg>
      </div>
    </div>
  );
}