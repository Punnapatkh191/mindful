import svgPaths from "./svg-3y9ouppiog";
type MoocaProps = {
  className?: string;
  mooca?: "Mooca hugging sunny" | "Happy Mooca with Sunny" | "Sad Mooca" | "Mooca using phone" | "Mooca Thanks!" | "Mooca Wallet (not enough)" | "Mooca Wallet (enough)";
  size?: "L" | "M" | "S" | "XS";
};

export function Mooca({ className, mooca = "Mooca hugging sunny", size = "L" }: MoocaProps) {
  const isHappyMoocaWithSunnyAndIsSOrXsOrM = mooca === "Happy Mooca with Sunny" && ["S", "XS", "M"].includes(size);
  const isHappyMoocaWithSunnyAndL = mooca === "Happy Mooca with Sunny" && size === "L";
  const isHappyMoocaWithSunnyAndM = mooca === "Happy Mooca with Sunny" && size === "M";
  const isHappyMoocaWithSunnyAndS = mooca === "Happy Mooca with Sunny" && size === "S";
  const isHappyMoocaWithSunnyAndXs = mooca === "Happy Mooca with Sunny" && size === "XS";
  const isMoocaHuggingSunnyAndL = mooca === "Mooca hugging sunny" && size === "L";
  const isMoocaHuggingSunnyAndM = mooca === "Mooca hugging sunny" && size === "M";
  const isMoocaHuggingSunnyAndXs = mooca === "Mooca hugging sunny" && size === "XS";
  const isMoocaThanks = mooca === "Mooca Thanks!";
  const isMoocaThanksAndIsMOrS = mooca === "Mooca Thanks!" && ["M", "S"].includes(size);
  const isMoocaThanksAndIsMOrSOrXs = mooca === "Mooca Thanks!" && ["M", "S", "XS"].includes(size);
  const isMoocaThanksAndIsMOrXs = mooca === "Mooca Thanks!" && ["M", "XS"].includes(size);
  const isMoocaThanksAndIsSOrXs = mooca === "Mooca Thanks!" && ["S", "XS"].includes(size);
  const isMoocaThanksAndM = mooca === "Mooca Thanks!" && size === "M";
  const isMoocaThanksAndS = mooca === "Mooca Thanks!" && size === "S";
  const isMoocaThanksAndXs = mooca === "Mooca Thanks!" && size === "XS";
  const isMoocaUsingPhone = mooca === "Mooca using phone";
  const isMoocaUsingPhoneAndIsSOrXs = mooca === "Mooca using phone" && ["S", "XS"].includes(size);
  const isMoocaUsingPhoneAndL = mooca === "Mooca using phone" && size === "L";
  const isMoocaUsingPhoneAndS = mooca === "Mooca using phone" && size === "S";
  const isMoocaUsingPhoneAndXs = mooca === "Mooca using phone" && size === "XS";
  const isMoocaWalletEnoughAndL = mooca === "Mooca Wallet (enough)" && size === "L";
  const isMoocaWalletEnoughAndM = mooca === "Mooca Wallet (enough)" && size === "M";
  const isMoocaWalletEnoughAndS = mooca === "Mooca Wallet (enough)" && size === "S";
  const isMoocaWalletEnoughAndXs = mooca === "Mooca Wallet (enough)" && size === "XS";
  const isMoocaWalletNotEnough = mooca === "Mooca Wallet (not enough)";
  const isMoocaWalletNotEnoughAndL = mooca === "Mooca Wallet (not enough)" && size === "L";
  const isMoocaWalletNotEnoughAndM = mooca === "Mooca Wallet (not enough)" && size === "M";
  const isMoocaWalletNotEnoughAndS = mooca === "Mooca Wallet (not enough)" && size === "S";
  const isMoocaWalletNotEnoughAndXs = mooca === "Mooca Wallet (not enough)" && size === "XS";
  const isSadMooca = mooca === "Sad Mooca";
  const isSadMoocaAndL = mooca === "Sad Mooca" && size === "L";
  const isSadMoocaAndM = mooca === "Sad Mooca" && size === "M";
  const isSadMoocaAndS = mooca === "Sad Mooca" && size === "S";
  const isSadMoocaAndXs = mooca === "Sad Mooca" && size === "XS";
  return (
    <div className={className || `overflow-clip relative ${size === "L" ? "h-[217px] w-[279px]" : size === "M" ? "h-[180px] w-[199px]" : size === "XS" ? "h-[105px] w-[135px]" : "h-[152px] w-[183px]"}`}>
      {(isHappyMoocaWithSunnyAndS || isSadMooca || isHappyMoocaWithSunnyAndXs || isHappyMoocaWithSunnyAndM || isMoocaWalletEnoughAndL || isMoocaWalletNotEnough) && (
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletNotEnoughAndM ? "left-1/2 top-[calc(50%-0.26px)]" : isMoocaWalletNotEnoughAndXs ? "left-[calc(50%-0.24px)] top-[calc(50%+0.24px)]" : isMoocaWalletNotEnoughAndS ? "left-[calc(50%-0.21px)] top-[calc(50%+0.24px)]" : isMoocaWalletNotEnoughAndL ? "left-1/2 top-[calc(50%-0.31px)]" : isMoocaWalletEnoughAndL ? "left-[calc(50%+0.29px)] top-[calc(50%-2.33px)]" : isSadMoocaAndL ? "left-[calc(50%-1.5px)] top-[calc(50%-1.24px)]" : isSadMoocaAndM ? "left-[calc(50%-0.27px)] top-[calc(50%+7.5px)]" : isHappyMoocaWithSunnyAndM ? "left-1/2 top-[calc(50%-0.32px)]" : isSadMoocaAndXs ? "left-[calc(50%+0.23px)] top-[calc(50%-2.85px)]" : isHappyMoocaWithSunnyAndXs ? "left-[calc(50%-0.5px)] top-[calc(50%-0.1px)]" : isSadMoocaAndS ? "left-1/2 top-[calc(50%+0.07px)]" : "left-[calc(50%-0.5px)] top-[calc(50%+0.38px)]"}`}>
          {(isHappyMoocaWithSunnyAndS || isSadMooca || isHappyMoocaWithSunnyAndXs || isHappyMoocaWithSunnyAndM) && (
            <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isSadMoocaAndL ? "left-[calc(50%-1.5px)] top-[calc(50%-1.24px)]" : isSadMoocaAndM ? "left-[calc(50%-0.27px)] top-[calc(50%+7.5px)]" : isHappyMoocaWithSunnyAndM ? "left-[calc(50%-9.3px)] top-[calc(50%-46.94px)]" : isSadMoocaAndXs ? "left-[calc(50%+0.23px)] top-[calc(50%-2.85px)]" : isHappyMoocaWithSunnyAndXs ? "left-[calc(50%-6.89px)] top-[calc(50%-32.17px)]" : isSadMoocaAndS ? "left-1/2 top-[calc(50%+0.07px)]" : "left-[calc(50%-9.25px)] top-[calc(50%-43.53px)]"}`} data-name="Group">
              {isSadMooca && (
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[126.061px] left-[calc(50%+29.65px)] top-[calc(50%-24.58px)] w-[192.369px]" : isSadMoocaAndM ? "h-[96.964px] left-[calc(50%+23.69px)] top-[calc(50%-10.45px)] w-[147.967px]" : isSadMoocaAndXs ? "h-[64.231px] left-[calc(50%+16.1px)] top-[calc(50%-14.74px)] w-[98.017px]" : "h-[89.411px] left-[calc(50%+22.09px)] top-[calc(50%-16.48px)] w-[136.441px]"}`} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "126.061" : isSadMoocaAndM ? "96.9643" : isSadMoocaAndXs ? "64.2312" : "89.4107"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 192.369 126.061" : isSadMoocaAndM ? "0 0 147.967 96.9643" : isSadMoocaAndXs ? "0 0 98.0167 64.2312" : "0 0 136.441 89.4107"} width={isSadMoocaAndL ? "192.369" : isSadMoocaAndM ? "147.967" : isSadMoocaAndXs ? "98.0167" : "136.441"}>
                    <path d={isSadMoocaAndL ? svgPaths.pde54770 : isSadMoocaAndM ? svgPaths.p3263aa70 : isSadMoocaAndXs ? svgPaths.p1dd36200 : svgPaths.p3d4d1600} fill="#CBCFE9" id="Vector" />
                  </svg>
                </div>
              )}
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "contents left-[calc(50%-1.5px)] top-[calc(50%-1.24px)]" : isSadMoocaAndM ? "contents left-[calc(50%-0.27px)] top-[calc(50%+7.5px)]" : isHappyMoocaWithSunnyAndM ? "h-[51.993px] left-[calc(50%-9.3px)] top-[calc(50%-49.05px)] w-[58.242px]" : isSadMoocaAndXs ? "contents left-[calc(50%+0.23px)] top-[calc(50%-2.85px)]" : isHappyMoocaWithSunnyAndXs ? "h-[35.762px] left-[calc(50%-6.89px)] top-[calc(50%-33.62px)] w-[40.06px]" : isSadMoocaAndS ? "contents left-1/2 top-[calc(50%+0.07px)]" : "h-[48.967px] left-[calc(50%-9.25px)] top-[calc(50%-45.52px)] w-[54.852px]"}`} data-name="Group">
                {isSadMooca && (
                  <>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[68.666px] left-[calc(50%+30.42px)] top-[calc(50%+70.73px)] w-[67.39px]" : isSadMoocaAndM ? "h-[52.817px] left-[calc(50%+24.28px)] top-[calc(50%+62.86px)] w-[51.835px]" : isSadMoocaAndXs ? "h-[34.987px] left-[calc(50%+16.5px)] top-[calc(50%+33.82px)] w-[34.337px]" : "h-[48.703px] left-[calc(50%+22.64px)] top-[calc(50%+51.12px)] w-[47.797px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "68.6664" : isSadMoocaAndM ? "52.8173" : isSadMoocaAndXs ? "34.9873" : "48.7028"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 67.3897 68.6664" : isSadMoocaAndM ? "0 0 51.8353 52.8173" : isSadMoocaAndXs ? "0 0 34.3368 34.9873" : "0 0 47.7973 48.7028"} width={isSadMoocaAndL ? "67.3897" : isSadMoocaAndM ? "51.8353" : isSadMoocaAndXs ? "34.3368" : "47.7973"}>
                        <g id="Group">
                          <path d={isSadMoocaAndL ? svgPaths.p2cfac300 : isSadMoocaAndM ? svgPaths.pc699a00 : isSadMoocaAndXs ? svgPaths.pafb2380 : svgPaths.p312e4c80} fill="#E3E4F3" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[10.527px] left-[calc(50%+19.73px)] top-[calc(50%+87.04px)] w-[13.547px]" : isSadMoocaAndM ? "h-[8.097px] left-[calc(50%+16.06px)] top-[calc(50%+75.41px)] w-[10.42px]" : isSadMoocaAndXs ? "h-[5.364px] left-[calc(50%+11.05px)] top-[calc(50%+42.13px)] w-[6.902px]" : "h-[7.467px] left-[calc(50%+15.06px)] top-[calc(50%+62.69px)] w-[9.608px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "10.5273" : isSadMoocaAndM ? "8.09749" : isSadMoocaAndXs ? "5.36394" : "7.46669"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 13.5467 10.5273" : isSadMoocaAndM ? "0 0 10.4199 8.09749" : isSadMoocaAndXs ? "0 0 6.90237 5.36394" : "0 0 9.6082 7.46669"} width={isSadMoocaAndL ? "13.5467" : isSadMoocaAndM ? "10.4199" : isSadMoocaAndXs ? "6.90237" : "9.6082"}>
                        <g id="Group">
                          <path d={isSadMoocaAndL ? svgPaths.p36ace000 : isSadMoocaAndM ? svgPaths.p3634b00 : isSadMoocaAndXs ? svgPaths.p2c63f600 : svgPaths.p2df63a80} fill="#B5BBDF" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[10.527px] left-[calc(50%+42.57px)] top-[calc(50%+87.04px)] w-[13.547px]" : isSadMoocaAndM ? "h-[8.097px] left-[calc(50%+33.62px)] top-[calc(50%+75.41px)] w-[10.42px]" : isSadMoocaAndXs ? "h-[5.364px] left-[calc(50%+22.68px)] top-[calc(50%+42.13px)] w-[6.902px]" : "h-[7.467px] left-[calc(50%+31.25px)] top-[calc(50%+62.69px)] w-[9.608px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "10.5273" : isSadMoocaAndM ? "8.09749" : isSadMoocaAndXs ? "5.36394" : "7.46669"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 13.5467 10.5273" : isSadMoocaAndM ? "0 0 10.4199 8.09749" : isSadMoocaAndXs ? "0 0 6.90239 5.36394" : "0 0 9.60823 7.46669"} width={isSadMoocaAndL ? "13.5467" : isSadMoocaAndM ? "10.4199" : isSadMoocaAndXs ? "6.90239" : "9.60823"}>
                        <g id="Group">
                          <path d={isSadMoocaAndL ? svgPaths.p346e2b00 : isSadMoocaAndM ? svgPaths.p3cac9300 : isSadMoocaAndXs ? svgPaths.pc121000 : svgPaths.p18f78100} fill="#B5BBDF" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[26.695px] left-[calc(50%+22.47px)] top-[calc(50%+63.78px)] w-[56.426px]" : isSadMoocaAndM ? "h-[20.533px] left-[calc(50%+18.17px)] top-[calc(50%+57.51px)] w-[43.402px]" : isSadMoocaAndXs ? "h-[13.602px] left-[calc(50%+12.45px)] top-[calc(50%+30.28px)] w-[28.75px]" : "h-[18.934px] left-[calc(50%+17px)] top-[calc(50%+46.19px)] w-[40.021px]"}`} data-name="Vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "26.6945" : isSadMoocaAndM ? "20.5331" : isSadMoocaAndXs ? "13.6015" : "18.9335"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 56.4259 26.6945" : isSadMoocaAndM ? "0 0 43.4021 20.5331" : isSadMoocaAndXs ? "0 0 28.7504 13.6015" : "0 0 40.021 18.9335"} width={isSadMoocaAndL ? "56.4259" : isSadMoocaAndM ? "43.4021" : isSadMoocaAndXs ? "28.7504" : "40.021"}>
                        <path d={isSadMoocaAndL ? svgPaths.p20486b80 : isSadMoocaAndM ? svgPaths.p68c4680 : isSadMoocaAndXs ? svgPaths.p7a68080 : svgPaths.p755cd00} fill="#B5BBDF" id="Vector" />
                      </svg>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isSadMoocaAndL ? "left-[calc(50%+30.54px)] top-[calc(50%+70.75px)]" : isSadMoocaAndM ? "left-[calc(50%+24.37px)] top-[calc(50%+62.88px)]" : isSadMoocaAndXs ? "left-[calc(50%+16.55px)] top-[calc(50%+33.83px)]" : "left-[calc(50%+22.72px)] top-[calc(50%+51.14px)]"}`} data-name="Group">
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[70.518px] left-[calc(50%+30.54px)] top-[calc(50%+70.75px)] w-[71.211px]" : isSadMoocaAndM ? "h-[54.242px] left-[calc(50%+24.37px)] top-[calc(50%+62.88px)] w-[54.774px]" : isSadMoocaAndXs ? "h-[35.931px] left-[calc(50%+16.55px)] top-[calc(50%+33.83px)] w-[36.284px]" : "h-[50.016px] left-[calc(50%+22.72px)] top-[calc(50%+51.14px)] w-[50.507px]"}`} data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "70.5181" : isSadMoocaAndM ? "54.2416" : isSadMoocaAndXs ? "35.9308" : "50.0162"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 71.2105 70.5181" : isSadMoocaAndM ? "0 0 54.7742 54.2416" : isSadMoocaAndXs ? "0 0 36.2836 35.9308" : "0 0 50.5073 50.0162"} width={isSadMoocaAndL ? "71.2105" : isSadMoocaAndM ? "54.7742" : isSadMoocaAndXs ? "36.2836" : "50.5073"}>
                          <g id="Group">
                            <path d={isSadMoocaAndL ? svgPaths.p119adb00 : isSadMoocaAndM ? svgPaths.p1171f500 : isSadMoocaAndXs ? svgPaths.p2436da40 : svgPaths.p13b8fa80} fill="#B5BBDF" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isSadMoocaAndL ? "left-[calc(50%+2.46px)] top-[calc(50%+61.95px)]" : isSadMoocaAndM ? "left-[calc(50%+2.77px)] top-[calc(50%+56.11px)]" : isSadMoocaAndXs ? "left-[calc(50%+2.25px)] top-[calc(50%+29.35px)]" : "left-[calc(50%+2.8px)] top-[calc(50%+44.9px)]"}`} data-name="Group">
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[35.621px] left-[calc(50%+2.46px)] top-[calc(50%+61.95px)] w-[21.997px]" : isSadMoocaAndM ? "h-[27.399px] left-[calc(50%+2.77px)] top-[calc(50%+56.11px)] w-[16.92px]" : isSadMoocaAndXs ? "h-[18.15px] left-[calc(50%+2.25px)] top-[calc(50%+29.35px)] w-[11.208px]" : "h-[25.265px] left-[calc(50%+2.8px)] top-[calc(50%+44.9px)] w-[15.602px]"}`} data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "35.6214" : isSadMoocaAndM ? "27.3995" : isSadMoocaAndXs ? "18.15" : "25.2651"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 21.9973 35.6214" : isSadMoocaAndM ? "0 0 16.92 27.3995" : isSadMoocaAndXs ? "0 0 11.2082 18.15" : "0 0 15.602 25.2651"} width={isSadMoocaAndL ? "21.9973" : isSadMoocaAndM ? "16.92" : isSadMoocaAndXs ? "11.2082" : "15.602"}>
                          <g id="Group">
                            <path d={isSadMoocaAndL ? svgPaths.p3d51c880 : isSadMoocaAndM ? svgPaths.p2b9efa20 : isSadMoocaAndXs ? svgPaths.p2d8f1000 : svgPaths.p13430c0} fill="#E3E4F3" id="Vector" />
                            <g id="Group_2">
                              <path d={isSadMoocaAndL ? svgPaths.p27595d80 : isSadMoocaAndM ? svgPaths.p30c35d70 : isSadMoocaAndXs ? svgPaths.p3e4d85b0 : svgPaths.p37e3ccf0} fill="#B5BBDF" id="Vector_2" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isSadMoocaAndL ? "left-[calc(50%+35.42px)] top-[calc(50%+61.13px)]" : isSadMoocaAndM ? "left-[calc(50%+28.12px)] top-[calc(50%+55.48px)]" : isSadMoocaAndXs ? "left-[calc(50%+19.04px)] top-[calc(50%+28.93px)]" : "left-[calc(50%+26.18px)] top-[calc(50%+44.31px)]"}`} data-name="Group">
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[34.405px] left-[calc(50%+35.42px)] top-[calc(50%+61.13px)] w-[21.862px]" : isSadMoocaAndM ? "h-[26.464px] left-[calc(50%+28.12px)] top-[calc(50%+55.48px)] w-[16.816px]" : isSadMoocaAndXs ? "h-[17.53px] left-[calc(50%+19.04px)] top-[calc(50%+28.93px)] w-[11.139px]" : "h-[24.402px] left-[calc(50%+26.18px)] top-[calc(50%+44.31px)] w-[15.506px]"}`} data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "34.4047" : isSadMoocaAndM ? "26.4637" : isSadMoocaAndXs ? "17.5301" : "24.4022"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 21.8618 34.4047" : isSadMoocaAndM ? "0 0 16.8158 26.4637" : isSadMoocaAndXs ? "0 0 11.1391 17.5301" : "0 0 15.5059 24.4022"} width={isSadMoocaAndL ? "21.8618" : isSadMoocaAndM ? "16.8158" : isSadMoocaAndXs ? "11.1391" : "15.5059"}>
                          <g id="Group">
                            <path d={isSadMoocaAndL ? svgPaths.p1f23c400 : isSadMoocaAndM ? svgPaths.p1091c500 : isSadMoocaAndXs ? svgPaths.p3ef20200 : svgPaths.p1e7e9100} fill="#E3E4F3" id="Vector" />
                            <g id="Group_2">
                              <path d={isSadMoocaAndL ? svgPaths.pcba8780 : isSadMoocaAndM ? svgPaths.p209ef5f0 : isSadMoocaAndXs ? svgPaths.p5ca6b80 : svgPaths.p1ed77a00} fill="#B5BBDF" id="Vector_2" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[49.447px] left-[calc(50%+31.45px)] top-[calc(50%+52.58px)] w-[94.735px]" : isSadMoocaAndM ? "h-[38.034px] left-[calc(50%+25.07px)] top-[calc(50%+48.9px)] w-[72.869px]" : isSadMoocaAndXs ? "h-[25.195px] left-[calc(50%+17.02px)] top-[calc(50%+25.1px)] w-[48.27px]" : "h-[35.071px] left-[calc(50%+23.37px)] top-[calc(50%+38.25px)] w-[67.192px]"}`} data-name="Vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "49.4473" : isSadMoocaAndM ? "38.0342" : isSadMoocaAndXs ? "25.1946" : "35.0713"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 94.7345 49.4473" : isSadMoocaAndM ? "0 0 72.8686 38.0342" : isSadMoocaAndXs ? "0 0 48.2697 25.1946" : "0 0 67.1921 35.0713"} width={isSadMoocaAndL ? "94.7345" : isSadMoocaAndM ? "72.8686" : isSadMoocaAndXs ? "48.2697" : "67.1921"}>
                        <path d={isSadMoocaAndL ? svgPaths.p3ef090f0 : isSadMoocaAndM ? svgPaths.p27865c00 : isSadMoocaAndXs ? svgPaths.pe84cf80 : svgPaths.p6983000} fill="#E8A523" id="Vector" />
                      </svg>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[32.944px] left-[calc(50%+30.59px)] top-[calc(50%+53.44px)] w-[84.544px]" : isSadMoocaAndM ? "h-[25.34px] left-[calc(50%+24.41px)] top-[calc(50%+49.56px)] w-[65.031px]" : isSadMoocaAndXs ? "h-[16.786px] left-[calc(50%+16.58px)] top-[calc(50%+25.01px)] w-[43.076px]" : "h-[23.366px] left-[calc(50%+22.76px)] top-[calc(50%+38.86px)] w-[59.965px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "32.9445" : isSadMoocaAndM ? "25.3402" : isSadMoocaAndXs ? "16.7858" : "23.3661"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 84.5445 32.9445" : isSadMoocaAndM ? "0 0 65.0309 25.3402" : isSadMoocaAndXs ? "0 0 43.0765 16.7858" : "0 0 59.9646 23.3661"} width={isSadMoocaAndL ? "84.5445" : isSadMoocaAndM ? "65.0309" : isSadMoocaAndXs ? "43.0765" : "59.9646"}>
                        <g id="Group">
                          <g id="Group_2">
                            <path d={isSadMoocaAndL ? svgPaths.p12e8500 : isSadMoocaAndM ? svgPaths.pbcccdc0 : isSadMoocaAndXs ? svgPaths.pd0f5000 : svgPaths.p32a75040} fill="white" id="Vector" />
                            <path d={isSadMoocaAndL ? svgPaths.p1ac0df00 : isSadMoocaAndM ? svgPaths.p135b2620 : isSadMoocaAndXs ? svgPaths.p2f545300 : svgPaths.p395c4200} fill="white" id="Vector_2" />
                            <path d={isSadMoocaAndL ? svgPaths.p2654c600 : isSadMoocaAndM ? svgPaths.p30296900 : isSadMoocaAndXs ? svgPaths.p20ac5000 : svgPaths.p7a51d00} fill="white" id="Vector_3" />
                            <path d={isSadMoocaAndL ? svgPaths.p3c22af00 : isSadMoocaAndM ? svgPaths.p19389a00 : isSadMoocaAndXs ? svgPaths.p95af300 : svgPaths.p284dcd00} fill="white" id="Vector_4" />
                            <path d={isSadMoocaAndL ? svgPaths.p1d415000 : isSadMoocaAndM ? svgPaths.p1ccd4300 : isSadMoocaAndXs ? svgPaths.p3fd88e70 : svgPaths.p9015280} fill="white" id="Vector_5" />
                          </g>
                          <path d={isSadMoocaAndL ? svgPaths.p6c33e00 : isSadMoocaAndM ? svgPaths.p26680a00 : isSadMoocaAndXs ? svgPaths.p24966a80 : svgPaths.p2ebc8200} fill="white" id="Vector_6" />
                          <path d={isSadMoocaAndL ? svgPaths.p933e300 : isSadMoocaAndM ? svgPaths.p154b6680 : isSadMoocaAndXs ? svgPaths.p226b5500 : svgPaths.p31950900} fill="white" id="Vector_7" />
                          <path d={isSadMoocaAndL ? svgPaths.p2fa75980 : isSadMoocaAndM ? svgPaths.pd1da5c0 : isSadMoocaAndXs ? svgPaths.p3829a300 : svgPaths.p18c1a380} fill="white" id="Vector_8" />
                        </g>
                      </svg>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[70.083px] left-[calc(50%+29.77px)] top-[calc(50%+2.3px)] w-[191.765px]" : isSadMoocaAndM ? "h-[53.907px] left-[calc(50%+23.78px)] top-[calc(50%+9.99px)] w-[147.503px]" : isSadMoocaAndXs ? "h-[35.709px] left-[calc(50%+16.17px)] top-[calc(50%-0.84px)] w-[97.709px]" : "h-[49.707px] left-[calc(50%+22.17px)] top-[calc(50%+2.29px)] w-[136.013px]"}`} data-name="Vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "70.0826" : isSadMoocaAndM ? "53.9067" : isSadMoocaAndXs ? "35.7089" : "49.7073"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 191.765 70.0826" : isSadMoocaAndM ? "0 0 147.503 53.9067" : isSadMoocaAndXs ? "0 0 97.7093 35.7089" : "0 0 136.013 49.7073"} width={isSadMoocaAndL ? "191.765" : isSadMoocaAndM ? "147.503" : isSadMoocaAndXs ? "97.7093" : "136.013"}>
                        <path d={isSadMoocaAndL ? svgPaths.p3831ab80 : isSadMoocaAndM ? svgPaths.p240cef72 : isSadMoocaAndXs ? svgPaths.p2c29b600 : svgPaths.p15e9ea00} fill="#B5BBDF" id="Vector" />
                      </svg>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isSadMoocaAndL ? "left-[calc(50%+29.9px)] top-[calc(50%-24.31px)]" : isSadMoocaAndM ? "left-[calc(50%+23.88px)] top-[calc(50%-11.24px)]" : isSadMoocaAndXs ? "left-[calc(50%+16.23px)] top-[calc(50%-14.9px)]" : "left-[calc(50%+22.27px)] top-[calc(50%-17.28px)]"}`} data-name="Group">
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[127.952px] left-[calc(50%+29.9px)] top-[calc(50%-24.31px)] w-[195.207px]" : isSadMoocaAndM ? "h-[98.419px] left-[calc(50%+23.88px)] top-[calc(50%-11.24px)] w-[150.151px]" : isSadMoocaAndXs ? "h-[65.195px] left-[calc(50%+16.23px)] top-[calc(50%-14.9px)] w-[99.463px]" : "h-[90.752px] left-[calc(50%+22.27px)] top-[calc(50%-17.28px)] w-[138.454px]"}`} data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "127.952" : isSadMoocaAndM ? "98.4194" : isSadMoocaAndXs ? "65.195" : "90.7525"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 195.207 127.952" : isSadMoocaAndM ? "0 0 150.151 98.4194" : isSadMoocaAndXs ? "0 0 99.4632 65.195" : "0 0 138.454 90.7525"} width={isSadMoocaAndL ? "195.207" : isSadMoocaAndM ? "150.151" : isSadMoocaAndXs ? "99.4632" : "138.454"}>
                          <g id="Group">
                            <path d={isSadMoocaAndL ? svgPaths.pfbf7600 : isSadMoocaAndM ? svgPaths.p32461500 : isSadMoocaAndXs ? svgPaths.p26852200 : svgPaths.p16e72f00} fill="#B5BBDF" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isSadMoocaAndL ? "left-[calc(50%-68.54px)] top-[calc(50%-46.54px)]" : isSadMoocaAndM ? "left-[calc(50%-51.84px)] top-[calc(50%-27.34px)]" : isSadMoocaAndXs ? "left-[calc(50%-33.93px)] top-[calc(50%-25.93px)]" : "left-[calc(50%-47.55px)] top-[calc(50%-32.05px)]"}`} data-name="Group">
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[25.75px] left-[calc(50%-63.67px)] top-[calc(50%-84.25px)] w-[76.467px]" : isSadMoocaAndM ? "h-[19.807px] left-[calc(50%-48.09px)] top-[calc(50%-56.35px)] w-[58.817px]" : isSadMoocaAndXs ? "h-[13.121px] left-[calc(50%-31.45px)] top-[calc(50%-45.15px)] w-[38.962px]" : "h-[18.264px] left-[calc(50%-44.1px)] top-[calc(50%-58.8px)] w-[54.235px]"}`} data-name="Group">
                        <div className={`absolute ${isSadMoocaAndL ? "inset-[-3.3%_-1.11%]" : isSadMoocaAndM ? "inset-[-4.29%_-1.45%]" : isSadMoocaAndXs ? "inset-[-6.48%_-2.18%]" : "inset-[-4.66%_-1.57%]"}`}>
                          <svg className="block size-full" fill="none" height={isSadMoocaAndL ? "27.4509" : isSadMoocaAndM ? "21.5073" : isSadMoocaAndXs ? "14.8213" : "19.9646"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 78.1679 27.4509" : isSadMoocaAndM ? "0 0 60.5186 21.5073" : isSadMoocaAndXs ? "0 0 40.6633 14.8213" : "0 0 55.9362 19.9646"} width={isSadMoocaAndL ? "78.1679" : isSadMoocaAndM ? "60.5186" : isSadMoocaAndXs ? "40.6633" : "55.9362"}>
                            <g id="Group">
                              <path d={isSadMoocaAndL ? svgPaths.p4c668c0 : isSadMoocaAndM ? svgPaths.pbf98200 : isSadMoocaAndXs ? svgPaths.p10b1ed80 : svgPaths.p8072ae0} id="Vector" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                              <path d={isSadMoocaAndL ? svgPaths.p34853c00 : isSadMoocaAndM ? svgPaths.p15647e40 : isSadMoocaAndXs ? svgPaths.p1a233800 : svgPaths.p20ac18e0} id="Vector_2" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                              <path d={isSadMoocaAndL ? svgPaths.p384e9ca0 : isSadMoocaAndM ? svgPaths.p2f431700 : isSadMoocaAndXs ? svgPaths.p3519c500 : svgPaths.p37077900} id="Vector_3" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                              <path d={isSadMoocaAndL ? svgPaths.p2093a000 : isSadMoocaAndM ? svgPaths.p31258880 : isSadMoocaAndXs ? svgPaths.p125d0900 : svgPaths.p35f8f100} id="Vector_4" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                              <path d={isSadMoocaAndL ? svgPaths.p2d99d9c0 : isSadMoocaAndM ? svgPaths.p21d78c58 : isSadMoocaAndXs ? svgPaths.p3a296a40 : svgPaths.p36dc9ef0} id="Vector_5" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[17.208px] left-[calc(50%-19.37px)] top-[calc(50%-61.65px)] w-[19.271px]" : isSadMoocaAndM ? "h-[13.236px] left-[calc(50%-14.02px)] top-[calc(50%-38.96px)] w-[14.823px]" : isSadMoocaAndXs ? "h-[8.768px] left-[calc(50%-8.88px)] top-[calc(50%-33.63px)] w-[9.819px]" : "h-[12.205px] left-[calc(50%-12.68px)] top-[calc(50%-42.77px)] w-[13.668px]"}`} data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "17.2077" : isSadMoocaAndM ? "13.2359" : isSadMoocaAndXs ? "8.76776" : "12.2049"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 19.2705 17.2077" : isSadMoocaAndM ? "0 0 14.8226 13.2359" : isSadMoocaAndXs ? "0 0 9.81882 8.76776" : "0 0 13.668 12.2049"} width={isSadMoocaAndL ? "19.2705" : isSadMoocaAndM ? "14.8226" : isSadMoocaAndXs ? "9.81882" : "13.668"}>
                          <g id="Group">
                            <path d={isSadMoocaAndL ? svgPaths.p1fe62b00 : isSadMoocaAndM ? svgPaths.pa63e600 : isSadMoocaAndXs ? svgPaths.p4af9300 : svgPaths.pff07cf0} fill="#FEED53" id="Vector" />
                          </g>
                        </svg>
                      </div>
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[16.924px] left-[calc(50%-19.92px)] top-[calc(50%-61.59px)] w-[20.212px]" : isSadMoocaAndM ? "h-[13.018px] left-[calc(50%-14.44px)] top-[calc(50%-38.92px)] w-[15.547px]" : isSadMoocaAndXs ? "h-[8.623px] left-[calc(50%-9.16px)] top-[calc(50%-33.6px)] w-[10.299px]" : "h-[12.004px] left-[calc(50%-13.07px)] top-[calc(50%-42.73px)] w-[14.336px]"}`} data-name="Vector">
                        <div className={`absolute ${isSadMoocaAndL ? "inset-[-4.62%_-3.87%]" : isSadMoocaAndM ? "inset-[-6%_-5.03%]" : isSadMoocaAndXs ? "inset-[-9.06%_-7.59%]" : "inset-[-6.51%_-5.45%]"}`}>
                          <svg className="block size-full" fill="none" height={isSadMoocaAndL ? "18.4875" : isSadMoocaAndM ? "14.5811" : isSadMoocaAndXs ? "10.1865" : "13.567"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 21.7754 18.4875" : isSadMoocaAndM ? "0 0 17.1102 14.5811" : isSadMoocaAndXs ? "0 0 11.8618 10.1865" : "0 0 15.899 13.567"} width={isSadMoocaAndL ? "21.7754" : isSadMoocaAndM ? "17.1102" : isSadMoocaAndXs ? "11.8618" : "15.899"}>
                            <path d={isSadMoocaAndL ? svgPaths.p3c7680 : isSadMoocaAndM ? svgPaths.p3d5c3280 : isSadMoocaAndXs ? svgPaths.paf42c00 : svgPaths.p337f2100} id="Vector" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5629" />
                          </svg>
                        </div>
                      </div>
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "left-[calc(50%-68.54px)] size-[123.924px] top-[calc(50%-46.54px)]" : isSadMoocaAndM ? "left-[calc(50%-51.84px)] size-[95.321px] top-[calc(50%-27.34px)]" : isSadMoocaAndXs ? "left-[calc(50%-33.93px)] size-[63.143px] top-[calc(50%-25.93px)]" : "left-[calc(50%-47.55px)] size-[87.895px] top-[calc(50%-32.05px)]"}`} data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "123.924" : isSadMoocaAndM ? "95.3208" : isSadMoocaAndXs ? "63.1425" : "87.8953"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 123.924 123.924" : isSadMoocaAndM ? "0 0 95.3208 95.3208" : isSadMoocaAndXs ? "0 0 63.1425 63.1425" : "0 0 87.8953 87.8953"} width={isSadMoocaAndL ? "123.924" : isSadMoocaAndM ? "95.3208" : isSadMoocaAndXs ? "63.1425" : "87.8953"}>
                          <g id="Group">
                            <path d={isSadMoocaAndL ? svgPaths.p3b231af0 : isSadMoocaAndM ? svgPaths.p23dc0400 : isSadMoocaAndXs ? svgPaths.p3470f40 : svgPaths.p45eae80} fill="#FEED53" id="Vector" />
                            <g id="Group_2">
                              <path d={isSadMoocaAndL ? svgPaths.p3c30fd80 : isSadMoocaAndM ? svgPaths.p24261ff0 : isSadMoocaAndXs ? svgPaths.p26fbc400 : svgPaths.p3c3db870} fill="#E8A523" id="Vector_2" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[4.788px] left-[calc(50%-59.45px)] top-[calc(50%-71.9px)] w-[9.345px]" : isSadMoocaAndM ? "h-[3.683px] left-[calc(50%-44.85px)] top-[calc(50%-46.84px)] w-[7.188px]" : isSadMoocaAndXs ? "h-[2.439px] left-[calc(50%-29.3px)] top-[calc(50%-38.85px)] w-[4.762px]" : "h-[3.396px] left-[calc(50%-41.1px)] top-[calc(50%-50.04px)] w-[6.628px]"}`} data-name="Vector">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "4.78775" : isSadMoocaAndM ? "3.68267" : isSadMoocaAndXs ? "2.43948" : "3.39579"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 9.34535 4.78775" : isSadMoocaAndM ? "0 0 7.18832 3.68267" : isSadMoocaAndXs ? "0 0 4.76169 2.43948" : "0 0 6.62835 3.39579"} width={isSadMoocaAndL ? "9.34535" : isSadMoocaAndM ? "7.18832" : isSadMoocaAndXs ? "4.76169" : "6.62835"}>
                          <path d={isSadMoocaAndL ? svgPaths.p1dd58500 : isSadMoocaAndM ? svgPaths.p37014b20 : isSadMoocaAndXs ? svgPaths.p1e1fd280 : svgPaths.p1fd78c00} fill="#DFA23B" id="Vector" />
                        </svg>
                      </div>
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "left-[calc(50%-79.52px)] size-[13.146px] top-[calc(50%-72.16px)]" : isSadMoocaAndM ? "left-[calc(50%-60.29px)] size-[10.111px] top-[calc(50%-47.05px)]" : isSadMoocaAndXs ? "left-[calc(50%-39.52px)] size-[6.698px] top-[calc(50%-38.98px)]" : "left-[calc(50%-55.34px)] size-[9.324px] top-[calc(50%-50.23px)]"}`} data-name="Vector">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "13.1456" : isSadMoocaAndM ? "10.1114" : isSadMoocaAndXs ? "6.698" : "9.32372"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 13.1456 13.1456" : isSadMoocaAndM ? "0 0 10.1114 10.1114" : isSadMoocaAndXs ? "0 0 6.698 6.698" : "0 0 9.32372 9.32372"} width={isSadMoocaAndL ? "13.1456" : isSadMoocaAndM ? "10.1114" : isSadMoocaAndXs ? "6.698" : "9.32372"}>
                          <path d={isSadMoocaAndL ? svgPaths.p389663f0 : isSadMoocaAndM ? svgPaths.p9b03b00 : isSadMoocaAndXs ? svgPaths.p2ffdd200 : svgPaths.p283ba900} fill="#FDC05C" id="Vector" />
                        </svg>
                      </div>
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "left-[calc(50%-42.01px)] size-[13.146px] top-[calc(50%-68.69px)]" : isSadMoocaAndM ? "left-[calc(50%-31.43px)] size-[10.111px] top-[calc(50%-44.38px)]" : isSadMoocaAndXs ? "left-[calc(50%-20.41px)] size-[6.698px] top-[calc(50%-37.22px)]" : "left-[calc(50%-28.74px)] size-[9.324px] top-[calc(50%-47.77px)]"}`} data-name="Vector">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "13.1456" : isSadMoocaAndM ? "10.1114" : isSadMoocaAndXs ? "6.698" : "9.32372"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 13.1456 13.1456" : isSadMoocaAndM ? "0 0 10.1114 10.1114" : isSadMoocaAndXs ? "0 0 6.698 6.698" : "0 0 9.32372 9.32372"} width={isSadMoocaAndL ? "13.1456" : isSadMoocaAndM ? "10.1114" : isSadMoocaAndXs ? "6.698" : "9.32372"}>
                          <path d={isSadMoocaAndL ? svgPaths.p2c7c6b80 : isSadMoocaAndM ? svgPaths.p1b87c100 : isSadMoocaAndXs ? svgPaths.peda7f00 : svgPaths.p10c6e480} fill="#FDC05C" id="Vector" />
                        </svg>
                      </div>
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isSadMoocaAndL ? "left-[calc(50%-82.65px)] top-[calc(50%-53.66px)]" : isSadMoocaAndM ? "left-[calc(50%-62.69px)] top-[calc(50%-32.82px)]" : isSadMoocaAndXs ? "left-[calc(50%-41.12px)] top-[calc(50%-29.56px)]" : "left-[calc(50%-57.56px)] top-[calc(50%-37.1px)]"}`} data-name="Group">
                        <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[15.082px] left-[calc(50%-82.65px)] top-[calc(50%-53.66px)] w-[26.433px]" : isSadMoocaAndM ? "h-[11.601px] left-[calc(50%-62.69px)] top-[calc(50%-32.82px)] w-[20.332px]" : isSadMoocaAndXs ? "h-[7.685px] left-[calc(50%-41.12px)] top-[calc(50%-29.56px)] w-[13.468px]" : "h-[10.697px] left-[calc(50%-57.56px)] top-[calc(50%-37.1px)] w-[18.748px]"}`} data-name="Group">
                          <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "15.0818" : isSadMoocaAndM ? "11.6008" : isSadMoocaAndXs ? "7.68458" : "10.6971"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 26.4334 15.0818" : isSadMoocaAndM ? "0 0 20.3322 11.6008" : isSadMoocaAndXs ? "0 0 13.4685 7.68458" : "0 0 18.7484 10.6971"} width={isSadMoocaAndL ? "26.4334" : isSadMoocaAndM ? "20.3322" : isSadMoocaAndXs ? "13.4685" : "18.7484"}>
                            <g id="Group">
                              <path d={isSadMoocaAndL ? svgPaths.pdbfe200 : isSadMoocaAndM ? svgPaths.p246f67b0 : isSadMoocaAndXs ? svgPaths.p16ea4b40 : svgPaths.p34cc6e00} fill="#E8A523" id="Vector" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[6.996px] left-[calc(50%-59.85px)] top-[calc(50%-76.95px)] w-[19.902px]" : isSadMoocaAndM ? "h-[5.382px] left-[calc(50%-45.16px)] top-[calc(50%-50.73px)] w-[15.308px]" : isSadMoocaAndXs ? "h-[3.565px] left-[calc(50%-29.5px)] top-[calc(50%-41.42px)] w-[10.139px]" : "h-[4.962px] left-[calc(50%-41.39px)] top-[calc(50%-53.62px)] w-[14.116px]"}`} data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "6.99618" : isSadMoocaAndM ? "5.38175" : isSadMoocaAndXs ? "3.56541" : "4.96222"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 19.9016 6.99618" : isSadMoocaAndM ? "0 0 15.3079 5.38175" : isSadMoocaAndXs ? "0 0 10.1397 3.56541" : "0 0 14.1163 4.96222"} width={isSadMoocaAndL ? "19.9016" : isSadMoocaAndM ? "15.3079" : isSadMoocaAndXs ? "10.1397" : "14.1163"}>
                          <g id="Group">
                            <path d={isSadMoocaAndL ? svgPaths.p3a1cab80 : isSadMoocaAndM ? svgPaths.p1d2a980 : isSadMoocaAndXs ? svgPaths.p10ccf200 : svgPaths.p11495e00} fill="#E8A523" id="Vector" />
                            <path d={isSadMoocaAndL ? svgPaths.p36b14680 : isSadMoocaAndM ? svgPaths.p395aca80 : isSadMoocaAndXs ? svgPaths.p2165ae00 : svgPaths.p64a7100} fill="#E8A523" id="Vector_2" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[20.385px] left-[calc(50%+6.07px)] top-[calc(50%+4.64px)] w-[99.091px]" : isSadMoocaAndM ? "h-[15.68px] left-[calc(50%+5.55px)] top-[calc(50%+12.03px)] w-[76.22px]" : isSadMoocaAndXs ? "h-[10.387px] left-[calc(50%+4.09px)] top-[calc(50%+0.15px)] w-[50.489px]" : "h-[14.458px] left-[calc(50%+5.37px)] top-[calc(50%+4.25px)] w-[70.281px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "20.3847" : isSadMoocaAndM ? "15.6797" : isSadMoocaAndXs ? "10.3865" : "14.4582"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 99.0907 20.3847" : isSadMoocaAndM ? "0 0 76.2195 15.6797" : isSadMoocaAndXs ? "0 0 50.489 10.3865" : "0 0 70.2807 14.4582"} width={isSadMoocaAndL ? "99.0907" : isSadMoocaAndM ? "76.2195" : isSadMoocaAndXs ? "50.489" : "70.2807"}>
                        <g id="Group">
                          <path d={isSadMoocaAndL ? svgPaths.p252e5280 : isSadMoocaAndM ? svgPaths.pf081500 : isSadMoocaAndXs ? svgPaths.p235c0500 : svgPaths.p2ec7b900} fill="#9FA9D6" id="Vector" />
                          <path d={isSadMoocaAndL ? svgPaths.p1184c600 : isSadMoocaAndM ? svgPaths.p22e0ee00 : isSadMoocaAndXs ? svgPaths.p1f058b70 : svgPaths.p1ef62b80} fill="#9FA9D6" id="Vector_2" />
                        </g>
                      </svg>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isSadMoocaAndL ? "left-[calc(50%+3.75px)] top-[calc(50%-7.51px)]" : isSadMoocaAndM ? "left-[calc(50%+3.76px)] top-[calc(50%+2.68px)]" : isSadMoocaAndXs ? "left-[calc(50%+2.91px)] top-[calc(50%-6.04px)]" : "left-[calc(50%+3.72px)] top-[calc(50%-4.37px)]"}`} data-name="Group">
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[9.745px] left-[calc(50%+3.75px)] top-[calc(50%-7.51px)] w-[27.676px]" : isSadMoocaAndM ? "h-[7.496px] left-[calc(50%+3.76px)] top-[calc(50%+2.68px)] w-[21.288px]" : isSadMoocaAndXs ? "h-[4.965px] left-[calc(50%+2.91px)] top-[calc(50%-6.04px)] w-[14.102px]" : "h-[6.912px] left-[calc(50%+3.72px)] top-[calc(50%-4.37px)] w-[19.63px]"}`} data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "9.74529" : isSadMoocaAndM ? "7.49595" : isSadMoocaAndXs ? "4.96548" : "6.91202"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 27.676 9.74529" : isSadMoocaAndM ? "0 0 21.288 7.49595" : isSadMoocaAndXs ? "0 0 14.1016 4.96548" : "0 0 19.6297 6.91202"} width={isSadMoocaAndL ? "27.676" : isSadMoocaAndM ? "21.288" : isSadMoocaAndXs ? "14.1016" : "19.6297"}>
                          <g id="Group">
                            <path d={isSadMoocaAndL ? svgPaths.p3c180372 : isSadMoocaAndM ? svgPaths.p15b94880 : isSadMoocaAndXs ? svgPaths.p2e534500 : svgPaths.p15c92000} fill="#1E56A4" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[18.152px] left-[calc(50%+30.16px)] top-[calc(50%+0.39px)] w-[8.596px]" : isSadMoocaAndM ? "h-[13.963px] left-[calc(50%+24.08px)] top-[calc(50%+8.76px)] w-[6.612px]" : isSadMoocaAndXs ? "h-[9.249px] left-[calc(50%+16.36px)] top-[calc(50%-2.02px)] w-[4.38px]" : "h-[12.875px] left-[calc(50%+22.45px)] top-[calc(50%+1.23px)] w-[6.097px]"}`} data-name="Vector">
                      <div className={`absolute ${isSadMoocaAndL ? "inset-[-3.59%_-7.57%]" : isSadMoocaAndM ? "inset-[-4.66%_-9.85%]" : isSadMoocaAndXs ? "inset-[-7.04%_-14.87%_-7.04%_-14.86%]" : "inset-[-5.06%_-10.68%]"}`}>
                        <svg className="block size-full" fill="none" height={isSadMoocaAndL ? "19.4546" : isSadMoocaAndM ? "15.2648" : isSadMoocaAndXs ? "10.5514" : "14.1771"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 9.89762 19.4546" : isSadMoocaAndM ? "0 0 7.91366 15.2648" : isSadMoocaAndXs ? "0 0 5.68173 10.5514" : "0 0 7.39862 14.1771"} width={isSadMoocaAndL ? "9.89762" : isSadMoocaAndM ? "7.91366" : isSadMoocaAndXs ? "5.68173" : "7.39862"}>
                          <g id="Vector">
                            <path d={isSadMoocaAndL ? svgPaths.p1f9ea380 : isSadMoocaAndM ? svgPaths.p344ac6c0 : isSadMoocaAndXs ? svgPaths.pf5c5880 : svgPaths.p324c2c80} fill="white" />
                            <path d={isSadMoocaAndL ? svgPaths.p1f9ea380 : isSadMoocaAndM ? svgPaths.p344ac6c0 : isSadMoocaAndXs ? svgPaths.pf5c5880 : svgPaths.p324c2c80} stroke="#1E56A4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.3021" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[9.648px] left-[calc(50%+30.17px)] top-[calc(50%-12.5px)] w-[9.797px]" : isSadMoocaAndM ? "h-[7.421px] left-[calc(50%+24.08px)] top-[calc(50%-1.16px)] w-[7.536px]" : isSadMoocaAndXs ? "h-[4.916px] left-[calc(50%+16.37px)] top-[calc(50%-8.59px)] w-[4.992px]" : "h-[6.843px] left-[calc(50%+22.46px)] top-[calc(50%-7.91px)] w-[6.949px]"}`} data-name="Vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "9.64817" : isSadMoocaAndM ? "7.42125" : isSadMoocaAndXs ? "4.91599" : "6.84313"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 9.79722 9.64817" : isSadMoocaAndM ? "0 0 7.53589 7.42125" : isSadMoocaAndXs ? "0 0 4.99193 4.91599" : "0 0 6.94885 6.84313"} width={isSadMoocaAndL ? "9.79722" : isSadMoocaAndM ? "7.53589" : isSadMoocaAndXs ? "4.99193" : "6.94885"}>
                        <path d={isSadMoocaAndL ? svgPaths.p223c5ec0 : isSadMoocaAndM ? svgPaths.p4939bc0 : isSadMoocaAndXs ? svgPaths.p37db6770 : svgPaths.p3427bc0} fill="#2359A8" id="Vector" />
                      </svg>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSadMoocaAndL ? "h-[10.148px] left-[calc(50%-19.64px)] top-[calc(50%-11.97px)] w-[10.14px]" : isSadMoocaAndM ? "h-[7.806px] left-[calc(50%-14.23px)] top-[calc(50%-0.75px)] w-[7.799px]" : isSadMoocaAndXs ? "h-[5.171px] left-[calc(50%-9.02px)] top-[calc(50%-8.31px)] w-[5.166px]" : "h-[7.198px] left-[calc(50%-12.87px)] top-[calc(50%-7.53px)] w-[7.192px]"}`} data-name="Vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isSadMoocaAndL ? "10.1482" : isSadMoocaAndM ? "7.80588" : isSadMoocaAndXs ? "5.17078" : "7.1978"} preserveAspectRatio="none" viewBox={isSadMoocaAndL ? "0 0 10.1397 10.1482" : isSadMoocaAndM ? "0 0 7.79933 7.80588" : isSadMoocaAndXs ? "0 0 5.16644 5.17078" : "0 0 7.19176 7.1978"} width={isSadMoocaAndL ? "10.1397" : isSadMoocaAndM ? "7.79933" : isSadMoocaAndXs ? "5.16644" : "7.19176"}>
                        <path d={isSadMoocaAndL ? svgPaths.p2608100 : isSadMoocaAndM ? svgPaths.p20000000 : isSadMoocaAndXs ? svgPaths.p1da93172 : svgPaths.p14155500} fill="#2359A8" id="Vector" />
                      </svg>
                    </div>
                  </>
                )}
                {isHappyMoocaWithSunnyAndIsSOrXsOrM && (
                  <svg className="absolute block inset-0 size-full" fill="none" height={isHappyMoocaWithSunnyAndM ? "51.9931" : isHappyMoocaWithSunnyAndXs ? "35.762" : "48.967"} preserveAspectRatio="none" viewBox={isHappyMoocaWithSunnyAndM ? "0 0 58.2421 51.9931" : isHappyMoocaWithSunnyAndXs ? "0 0 40.0602 35.762" : "0 0 54.8523 48.967"} width={isHappyMoocaWithSunnyAndM ? "58.2421" : isHappyMoocaWithSunnyAndXs ? "40.0602" : "54.8523"}>
                    <g id="Group">
                      <path d={isHappyMoocaWithSunnyAndM ? svgPaths.paf38f0 : isHappyMoocaWithSunnyAndXs ? svgPaths.p2e63a00 : svgPaths.p1a8f5d80} fill="#FDDED5" id="Vector" />
                    </g>
                  </svg>
                )}
              </div>
              {isHappyMoocaWithSunnyAndIsSOrXsOrM && (
                <>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isHappyMoocaWithSunnyAndM ? "h-[41.581px] left-[calc(50%-8.02px)] top-[calc(50%-43.84px)] w-[45.259px]" : isHappyMoocaWithSunnyAndXs ? "h-[28.6px] left-[calc(50%-6.01px)] top-[calc(50%-30.04px)] w-[31.13px]" : "h-[39.161px] left-[calc(50%-8.05px)] top-[calc(50%-40.61px)] w-[42.625px]"}`} data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isHappyMoocaWithSunnyAndM ? "41.5812" : isHappyMoocaWithSunnyAndXs ? "28.6004" : "39.161"} preserveAspectRatio="none" viewBox={isHappyMoocaWithSunnyAndM ? "0 0 45.2594 41.5812" : isHappyMoocaWithSunnyAndXs ? "0 0 31.1304 28.6004" : "0 0 42.6252 39.161"} width={isHappyMoocaWithSunnyAndM ? "45.2594" : isHappyMoocaWithSunnyAndXs ? "31.1304" : "42.6252"}>
                      <g id="Group">
                        <path d={isHappyMoocaWithSunnyAndM ? svgPaths.pb40f600 : isHappyMoocaWithSunnyAndXs ? svgPaths.p2c9ec900 : svgPaths.p1ba12a40} fill="#FEF6A7" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isHappyMoocaWithSunnyAndM ? "h-[37.394px] left-[calc(50%-5.24px)] top-[calc(50%-37.54px)] w-[33.249px]" : isHappyMoocaWithSunnyAndXs ? "h-[25.72px] left-[calc(50%-4.1px)] top-[calc(50%-25.7px)] w-[22.869px]" : "h-[35.217px] left-[calc(50%-5.43px)] top-[calc(50%-34.67px)] w-[31.314px]"}`} data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isHappyMoocaWithSunnyAndM ? "37.3935" : isHappyMoocaWithSunnyAndXs ? "25.7201" : "35.2171"} preserveAspectRatio="none" viewBox={isHappyMoocaWithSunnyAndM ? "0 0 33.249 37.3935" : isHappyMoocaWithSunnyAndXs ? "0 0 22.8694 25.7201" : "0 0 31.3139 35.2171"} width={isHappyMoocaWithSunnyAndM ? "33.249" : isHappyMoocaWithSunnyAndXs ? "22.8694" : "31.3139"}>
                      <g id="Group">
                        <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p202a2c70 : isHappyMoocaWithSunnyAndXs ? svgPaths.p1c731180 : svgPaths.p39e73300} fill="#B1E0E7" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </>
              )}
            </div>
          )}
          {(isMoocaWalletEnoughAndL || isMoocaWalletNotEnough) && (
            <>
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[12.576px] left-1/2 top-[calc(50%+59.33px)] w-[191px]" : isMoocaWalletNotEnoughAndXs ? "h-[7.935px] left-[calc(50%-0.24px)] top-[calc(50%+37.84px)] w-[120.513px]" : isMoocaWalletNotEnoughAndS ? "h-[10.441px] left-[calc(50%-0.21px)] top-[calc(50%+49.72px)] w-[158.576px]" : isMoocaWalletNotEnoughAndL ? "h-[16px] left-1/2 top-[calc(50%+75.5px)] w-[243px]" : "h-[15.804px] left-[calc(50%+2.74px)] top-[calc(50%+77.94px)] w-[270.698px]"}`} data-name="_x3C_Path_x3E__1_">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "12.5761" : isMoocaWalletNotEnoughAndXs ? "7.93503" : isMoocaWalletNotEnoughAndS ? "10.4412" : isMoocaWalletNotEnoughAndL ? "16" : "15.8043"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 191 12.5761" : isMoocaWalletNotEnoughAndXs ? "0 0 120.513 7.93503" : isMoocaWalletNotEnoughAndS ? "0 0 158.576 10.4412" : isMoocaWalletNotEnoughAndL ? "0 0 243 16" : "0 0 270.698 15.8043"} width={isMoocaWalletNotEnoughAndM ? "191" : isMoocaWalletNotEnoughAndXs ? "120.513" : isMoocaWalletNotEnoughAndS ? "158.576" : isMoocaWalletNotEnoughAndL ? "243" : "270.698"}>
                  <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1f557c00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p3e4cfd00 : isMoocaWalletNotEnoughAndS ? svgPaths.pe0fab00 : isMoocaWalletNotEnoughAndL ? svgPaths.p1ff99f00 : svgPaths.p2b4b080} fill="#EAEBF5" id="_x3C_Path_x3E__1_" />
                </svg>
              </div>
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "contents left-[calc(50%-32.52px)] top-[calc(50%+37.47px)]" : isMoocaWalletNotEnoughAndXs ? "contents left-[calc(50%-20.76px)] top-[calc(50%+24.05px)]" : isMoocaWalletNotEnoughAndS ? "contents left-[calc(50%-27.21px)] top-[calc(50%+31.57px)]" : isMoocaWalletNotEnoughAndL ? "contents left-[calc(50%-41.37px)] top-[calc(50%+47.69px)]" : "h-[123.957px] left-[calc(50%+88.01px)] top-[calc(50%+14.22px)] w-[97.714px]"}`} data-name="Group">
                {isMoocaWalletNotEnough && (
                  <>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletNotEnoughAndM ? "left-[calc(50%-15.05px)] top-[calc(50%+45.07px)]" : isMoocaWalletNotEnoughAndXs ? "left-[calc(50%-9.74px)] top-[calc(50%+28.84px)]" : isMoocaWalletNotEnoughAndS ? "left-[calc(50%-12.71px)] top-[calc(50%+37.87px)]" : "left-[calc(50%-19.15px)] top-[calc(50%+57.35px)]"}`} data-name="Group">
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[13.959px] left-[calc(50%-19.98px)] top-[calc(50%+51.96px)] w-[58.979px]" : isMoocaWalletNotEnoughAndXs ? "h-[8.807px] left-[calc(50%-12.85px)] top-[calc(50%+33.19px)] w-[37.214px]" : isMoocaWalletNotEnoughAndS ? "h-[11.589px] left-[calc(50%-16.81px)] top-[calc(50%+43.6px)] w-[48.967px]" : "h-[17.759px] left-[calc(50%-25.42px)] top-[calc(50%+66.12px)] w-[75.037px]"}`} data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "13.9587" : isMoocaWalletNotEnoughAndXs ? "8.80707" : isMoocaWalletNotEnoughAndS ? "11.5889" : "17.7589"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 58.9789 13.9587" : isMoocaWalletNotEnoughAndXs ? "0 0 37.2132 8.80707" : isMoocaWalletNotEnoughAndS ? "0 0 48.967 11.5889" : "0 0 75.0366 17.7589"} width={isMoocaWalletNotEnoughAndM ? "58.9789" : isMoocaWalletNotEnoughAndXs ? "37.2132" : isMoocaWalletNotEnoughAndS ? "48.967" : "75.0366"}>
                          <g id="Group">
                            <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p247c2df0 : isMoocaWalletNotEnoughAndXs ? svgPaths.pa614b00 : isMoocaWalletNotEnoughAndS ? svgPaths.p2ec10e80 : svgPaths.p2896fd00} fill="#E8B022" id="Vector" />
                            <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p12e4c900 : isMoocaWalletNotEnoughAndXs ? svgPaths.p29b0dc80 : isMoocaWalletNotEnoughAndS ? svgPaths.p1e06e880 : svgPaths.p2ff0f00} fill="white" id="Vector_2" opacity="0.2" />
                            <g id="Group_2">
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p4a31e80 : isMoocaWalletNotEnoughAndXs ? svgPaths.p3e11a800 : isMoocaWalletNotEnoughAndS ? svgPaths.p16259b80 : svgPaths.pbcaa00} fill="white" id="Vector_3" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p2c5f0900 : isMoocaWalletNotEnoughAndXs ? svgPaths.p1287d600 : isMoocaWalletNotEnoughAndS ? svgPaths.p3df8b240 : svgPaths.p35c42480} fill="white" id="Vector_4" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.pef50300 : isMoocaWalletNotEnoughAndXs ? svgPaths.peebea00 : isMoocaWalletNotEnoughAndS ? svgPaths.p53b8400 : svgPaths.p38c6ff00} fill="white" id="Vector_5" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1b3a9900 : isMoocaWalletNotEnoughAndXs ? svgPaths.p38557a80 : isMoocaWalletNotEnoughAndS ? svgPaths.p21e78300 : svgPaths.p22709e80} fill="white" id="Vector_6" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p11c19d00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p8439000 : isMoocaWalletNotEnoughAndS ? svgPaths.p316b2400 : svgPaths.p10e12200} fill="white" id="Vector_7" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.pc3a2500 : isMoocaWalletNotEnoughAndXs ? svgPaths.p3f828500 : isMoocaWalletNotEnoughAndS ? svgPaths.pbfbc880 : svgPaths.p3d955240} fill="white" id="Vector_8" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p2ea16680 : isMoocaWalletNotEnoughAndXs ? svgPaths.pdec1180 : isMoocaWalletNotEnoughAndS ? svgPaths.p249f6680 : svgPaths.p12164400} fill="white" id="Vector_9" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p12471900 : isMoocaWalletNotEnoughAndXs ? svgPaths.p26ca1400 : isMoocaWalletNotEnoughAndS ? svgPaths.p23d44180 : svgPaths.p1f65d200} fill="white" id="Vector_10" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p355d7a80 : isMoocaWalletNotEnoughAndXs ? svgPaths.p23e4e600 : isMoocaWalletNotEnoughAndS ? svgPaths.p3729b280 : svgPaths.pf759500} fill="white" id="Vector_11" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p2f11100 : isMoocaWalletNotEnoughAndXs ? svgPaths.p18b60500 : isMoocaWalletNotEnoughAndS ? svgPaths.p3cd84300 : svgPaths.p12e11800} fill="white" id="Vector_12" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p3e0eba00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p2022b400 : isMoocaWalletNotEnoughAndS ? svgPaths.p2185100 : svgPaths.p12693700} fill="white" id="Vector_13" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1f193880 : isMoocaWalletNotEnoughAndXs ? svgPaths.pd46e600 : isMoocaWalletNotEnoughAndS ? svgPaths.p957e000 : svgPaths.p3e27bc00} fill="white" id="Vector_14" opacity="0.2" />
                            </g>
                            <path d={isMoocaWalletNotEnoughAndM ? svgPaths.pa6c1c00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p2cd74080 : isMoocaWalletNotEnoughAndS ? svgPaths.p1e13d400 : svgPaths.pb34a080} fill="white" id="Vector_15" opacity="0.2" />
                            <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p6e2c8b0 : isMoocaWalletNotEnoughAndXs ? svgPaths.p189e7000 : isMoocaWalletNotEnoughAndS ? svgPaths.p3f9f4980 : svgPaths.p20d8300} fill="white" id="Vector_16" opacity="0.2" />
                          </g>
                        </svg>
                      </div>
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[13.959px] left-[calc(50%-10.12px)] top-[calc(50%+38.17px)] w-[58.979px]" : isMoocaWalletNotEnoughAndXs ? "h-[8.807px] left-[calc(50%-6.63px)] top-[calc(50%+24.49px)] w-[37.214px]" : isMoocaWalletNotEnoughAndS ? "h-[11.589px] left-[calc(50%-8.61px)] top-[calc(50%+32.15px)] w-[48.967px]" : "h-[17.759px] left-[calc(50%-12.87px)] top-[calc(50%+48.57px)] w-[75.037px]"}`} data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "13.9587" : isMoocaWalletNotEnoughAndXs ? "8.80707" : isMoocaWalletNotEnoughAndS ? "11.5889" : "17.7591"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 58.9789 13.9587" : isMoocaWalletNotEnoughAndXs ? "0 0 37.2132 8.80707" : isMoocaWalletNotEnoughAndS ? "0 0 48.967 11.5889" : "0 0 75.0365 17.7591"} width={isMoocaWalletNotEnoughAndM ? "58.9789" : isMoocaWalletNotEnoughAndXs ? "37.2132" : isMoocaWalletNotEnoughAndS ? "48.967" : "75.0365"}>
                          <g id="Group">
                            <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1a0a4280 : isMoocaWalletNotEnoughAndXs ? svgPaths.p21267880 : isMoocaWalletNotEnoughAndS ? svgPaths.p7316440 : svgPaths.p1d0e7700} fill="#E8B022" id="Vector" />
                            <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p2d512c80 : isMoocaWalletNotEnoughAndXs ? svgPaths.p2cd9800 : isMoocaWalletNotEnoughAndS ? svgPaths.p3ce24000 : svgPaths.p19148f80} fill="white" id="Vector_2" opacity="0.2" />
                            <g id="Group_2">
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.pa724800 : isMoocaWalletNotEnoughAndXs ? svgPaths.p198ff000 : isMoocaWalletNotEnoughAndS ? svgPaths.p249f2d80 : svgPaths.p34900f00} fill="white" id="Vector_3" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p304c9d80 : isMoocaWalletNotEnoughAndXs ? svgPaths.p24259580 : isMoocaWalletNotEnoughAndS ? svgPaths.p3de11a00 : svgPaths.p5e10b80} fill="white" id="Vector_4" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p3c452880 : isMoocaWalletNotEnoughAndXs ? svgPaths.p26462100 : isMoocaWalletNotEnoughAndS ? svgPaths.p37254c70 : svgPaths.p20654300} fill="white" id="Vector_5" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p2900f5b0 : isMoocaWalletNotEnoughAndXs ? svgPaths.p261c000 : isMoocaWalletNotEnoughAndS ? svgPaths.p25f1500 : svgPaths.peec2980} fill="white" id="Vector_6" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p346ed580 : isMoocaWalletNotEnoughAndXs ? svgPaths.p1d7b7c80 : isMoocaWalletNotEnoughAndS ? svgPaths.p289d9d00 : svgPaths.p1d5990b2} fill="white" id="Vector_7" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p2870d400 : isMoocaWalletNotEnoughAndXs ? svgPaths.pccb0e00 : isMoocaWalletNotEnoughAndS ? svgPaths.p271a4300 : svgPaths.p3172ac80} fill="white" id="Vector_8" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p13e5f680 : isMoocaWalletNotEnoughAndXs ? svgPaths.p384b6300 : isMoocaWalletNotEnoughAndS ? svgPaths.p15cf5700 : svgPaths.p1d0ddc00} fill="white" id="Vector_9" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p3a395f80 : isMoocaWalletNotEnoughAndXs ? svgPaths.p388ff500 : isMoocaWalletNotEnoughAndS ? svgPaths.p2ff4e6f0 : svgPaths.p5a08500} fill="white" id="Vector_10" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p32e61880 : isMoocaWalletNotEnoughAndXs ? svgPaths.p1b788280 : isMoocaWalletNotEnoughAndS ? svgPaths.p19b255f0 : svgPaths.p23420180} fill="white" id="Vector_11" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.peadfe00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p254a6800 : isMoocaWalletNotEnoughAndS ? svgPaths.p8d9a980 : svgPaths.p3267d000} fill="white" id="Vector_12" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1b772600 : isMoocaWalletNotEnoughAndXs ? svgPaths.p13fc5400 : isMoocaWalletNotEnoughAndS ? svgPaths.p1d41cc00 : svgPaths.p71d1000} fill="white" id="Vector_13" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p2be8b6c0 : isMoocaWalletNotEnoughAndXs ? svgPaths.pe76a600 : isMoocaWalletNotEnoughAndS ? svgPaths.p1a907a00 : svgPaths.p2d50800} fill="white" id="Vector_14" opacity="0.2" />
                            </g>
                            <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p231aa900 : isMoocaWalletNotEnoughAndXs ? svgPaths.p355a3c00 : isMoocaWalletNotEnoughAndS ? svgPaths.p1e13d400 : svgPaths.pa3b83f0} fill="white" id="Vector_15" opacity="0.2" />
                            <path d={isMoocaWalletNotEnoughAndM ? svgPaths.pe9cdf0 : isMoocaWalletNotEnoughAndXs ? svgPaths.p1ab30500 : isMoocaWalletNotEnoughAndS ? svgPaths.p25d9f500 : svgPaths.p19f73480} fill="white" id="Vector_16" opacity="0.2" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center ${isMoocaWalletNotEnoughAndM ? "h-[60.027px] left-[calc(50%-54.54px)] top-[calc(50%+37.47px)] w-[59.744px]" : isMoocaWalletNotEnoughAndXs ? "h-[37.874px] left-[calc(50%-34.65px)] top-[calc(50%+24.05px)] w-[37.697px]" : isMoocaWalletNotEnoughAndS ? "h-[49.837px] left-[calc(50%-45.49px)] top-[calc(50%+31.57px)] w-[49.602px]" : "h-[76.37px] left-[calc(50%-69.38px)] top-[calc(50%+47.69px)] w-[76.009px]"}`}>
                      <div className="flex-none rotate-[11.92deg]">
                        <div className={`relative ${isMoocaWalletNotEnoughAndM ? "h-[50.723px] w-[50.357px]" : isMoocaWalletNotEnoughAndXs ? "h-[32.004px] w-[31.773px]" : isMoocaWalletNotEnoughAndS ? "h-[42.112px] w-[41.808px]" : "h-[64.533px] w-[64.065px]"}`} data-name="Group">
                          <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "50.7232" : isMoocaWalletNotEnoughAndXs ? "32.004" : isMoocaWalletNotEnoughAndS ? "42.1124" : "64.5328"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 50.3566 50.7232" : isMoocaWalletNotEnoughAndXs ? "0 0 31.7734 32.004" : isMoocaWalletNotEnoughAndS ? "0 0 41.808 42.1124" : "0 0 64.0654 64.5328"} width={isMoocaWalletNotEnoughAndM ? "50.3566" : isMoocaWalletNotEnoughAndXs ? "31.7734" : isMoocaWalletNotEnoughAndS ? "41.808" : "64.0654"}>
                            <g id="Group">
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1a3df180 : isMoocaWalletNotEnoughAndXs ? svgPaths.p367dee80 : isMoocaWalletNotEnoughAndS ? svgPaths.p384de580 : svgPaths.p8047a00} fill="#E8B022" id="Vector" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p263b9e80 : isMoocaWalletNotEnoughAndXs ? svgPaths.p2b89edf0 : isMoocaWalletNotEnoughAndS ? svgPaths.p18448600 : svgPaths.p3ef8a380} fill="white" id="Vector_2" opacity="0.2" />
                              <g id="Group_2">
                                <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1debe100 : isMoocaWalletNotEnoughAndXs ? svgPaths.p5529200 : isMoocaWalletNotEnoughAndS ? svgPaths.p33d7c080 : svgPaths.p5cdd800} fill="white" id="Vector_3" opacity="0.2" />
                                <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1fb0a900 : isMoocaWalletNotEnoughAndXs ? svgPaths.p78dbf80 : isMoocaWalletNotEnoughAndS ? svgPaths.pbe67980 : svgPaths.p3af1b680} fill="white" id="Vector_4" opacity="0.2" />
                                <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p809f100 : isMoocaWalletNotEnoughAndXs ? svgPaths.p19d64280 : isMoocaWalletNotEnoughAndS ? svgPaths.p18c58980 : svgPaths.p211aba00} fill="white" id="Vector_5" opacity="0.2" />
                                <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1314bdc0 : isMoocaWalletNotEnoughAndXs ? svgPaths.p33415980 : isMoocaWalletNotEnoughAndS ? svgPaths.p2c825b00 : svgPaths.p34282400} fill="white" id="Vector_6" opacity="0.2" />
                                <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1002fe00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p980f280 : isMoocaWalletNotEnoughAndS ? svgPaths.p21b690c0 : svgPaths.p3c444f80} fill="white" id="Vector_7" opacity="0.2" />
                                <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p521e800 : isMoocaWalletNotEnoughAndXs ? svgPaths.p29bcd400 : isMoocaWalletNotEnoughAndS ? svgPaths.p20b6bd00 : svgPaths.p29f33e00} fill="white" id="Vector_8" opacity="0.2" />
                                <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p36aa8900 : isMoocaWalletNotEnoughAndXs ? svgPaths.p12e0a980 : isMoocaWalletNotEnoughAndS ? svgPaths.p30737f00 : svgPaths.p3fae8500} fill="white" id="Vector_9" opacity="0.2" />
                                <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p9b58e00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p18b99f80 : isMoocaWalletNotEnoughAndS ? svgPaths.p11ec1900 : svgPaths.pb25df70} fill="white" id="Vector_10" opacity="0.2" />
                                <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p3c562c71 : isMoocaWalletNotEnoughAndXs ? svgPaths.p27fa8600 : isMoocaWalletNotEnoughAndS ? svgPaths.p125ba880 : svgPaths.p2a0923c0} fill="white" id="Vector_11" opacity="0.2" />
                                <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p352a8080 : isMoocaWalletNotEnoughAndXs ? svgPaths.p348d4d00 : isMoocaWalletNotEnoughAndS ? svgPaths.p38f752c0 : svgPaths.p380eaf00} fill="white" id="Vector_12" opacity="0.2" />
                                <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1f15b600 : isMoocaWalletNotEnoughAndXs ? svgPaths.p304a6900 : isMoocaWalletNotEnoughAndS ? svgPaths.p35800980 : svgPaths.p6d90800} fill="white" id="Vector_13" opacity="0.2" />
                                <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p3cfc8d00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p317520f0 : isMoocaWalletNotEnoughAndS ? svgPaths.p305de000 : svgPaths.p3cc3ae00} fill="white" id="Vector_14" opacity="0.2" />
                              </g>
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p3b7bfd00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p3cb19f00 : isMoocaWalletNotEnoughAndS ? svgPaths.p27de7600 : svgPaths.pa2bb800} fill="white" id="Vector_15" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p175d8a00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p25cc4100 : isMoocaWalletNotEnoughAndS ? svgPaths.paed0480 : svgPaths.p1c9fea80} fill="white" id="Vector_16" opacity="0.2" />
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p3418b600 : isMoocaWalletNotEnoughAndXs ? svgPaths.p1380df80 : isMoocaWalletNotEnoughAndS ? svgPaths.p418aa00 : svgPaths.p26e17880} fill="white" id="Vector_17" opacity="0.2" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {isMoocaWalletEnoughAndL && (
                  <svg className="absolute block inset-0 size-full" fill="none" height="123.957" preserveAspectRatio="none" viewBox="0 0 97.7142 123.957" width="97.7142">
                    <g id="Group">
                      <g id="Group_2">
                        <path d={svgPaths.p3c61d200} fill="#E8B022" id="Vector" />
                        <path d={svgPaths.p3ad7f600} fill="white" id="Vector_2" opacity="0.2" />
                        <g id="Group_3">
                          <path d={svgPaths.p5441e80} fill="white" id="Vector_3" opacity="0.2" />
                          <path d={svgPaths.p10de7a00} fill="white" id="Vector_4" opacity="0.2" />
                          <path d={svgPaths.pe513600} fill="white" id="Vector_5" opacity="0.2" />
                          <path d={svgPaths.p388a3d80} fill="white" id="Vector_6" opacity="0.2" />
                          <path d={svgPaths.p18844a80} fill="white" id="Vector_7" opacity="0.2" />
                          <path d={svgPaths.pfc90000} fill="white" id="Vector_8" opacity="0.2" />
                          <path d={svgPaths.p3f28cf00} fill="white" id="Vector_9" opacity="0.2" />
                          <path d={svgPaths.p2d6b2400} fill="white" id="Vector_10" opacity="0.2" />
                          <path d={svgPaths.p2cc75b0} fill="white" id="Vector_11" opacity="0.2" />
                          <path d={svgPaths.p1ac77900} fill="white" id="Vector_12" opacity="0.2" />
                          <path d={svgPaths.p1e38b880} fill="white" id="Vector_13" opacity="0.2" />
                          <path d={svgPaths.p1ac34e00} fill="white" id="Vector_14" opacity="0.2" />
                        </g>
                        <path d={svgPaths.p3a5b8f00} fill="white" id="Vector_15" opacity="0.2" />
                        <path d={svgPaths.p3078af80} fill="white" id="Vector_16" opacity="0.2" />
                      </g>
                      <g id="Group_4">
                        <path d={svgPaths.p23640a00} fill="#E8B022" id="Vector_17" />
                        <path d={svgPaths.p1d737900} fill="white" id="Vector_18" opacity="0.2" />
                        <g id="Group_5">
                          <path d={svgPaths.p21ddf700} fill="white" id="Vector_19" opacity="0.2" />
                          <path d={svgPaths.p32c8df00} fill="white" id="Vector_20" opacity="0.2" />
                          <path d={svgPaths.p1d4e3100} fill="white" id="Vector_21" opacity="0.2" />
                          <path d={svgPaths.p6144d80} fill="white" id="Vector_22" opacity="0.2" />
                          <path d={svgPaths.p2f72f030} fill="white" id="Vector_23" opacity="0.2" />
                          <path d={svgPaths.p1fadea80} fill="white" id="Vector_24" opacity="0.2" />
                          <path d={svgPaths.p24c6a000} fill="white" id="Vector_25" opacity="0.2" />
                          <path d={svgPaths.p26080900} fill="white" id="Vector_26" opacity="0.2" />
                          <path d={svgPaths.p25c62f80} fill="white" id="Vector_27" opacity="0.2" />
                          <path d={svgPaths.p1ba513c0} fill="white" id="Vector_28" opacity="0.2" />
                          <path d={svgPaths.p16bd8100} fill="white" id="Vector_29" opacity="0.2" />
                          <path d={svgPaths.p1a7b6100} fill="white" id="Vector_30" opacity="0.2" />
                        </g>
                        <path d={svgPaths.p8b2ce00} fill="white" id="Vector_31" opacity="0.2" />
                        <path d={svgPaths.p2e6be200} fill="white" id="Vector_32" opacity="0.2" />
                      </g>
                      <g id="Group_6">
                        <path d={svgPaths.p2cb47a80} fill="#E8B022" id="Vector_33" />
                        <path d={svgPaths.p111d7380} fill="white" id="Vector_34" opacity="0.2" />
                        <g id="Group_7">
                          <path d={svgPaths.pc0e8e00} fill="white" id="Vector_35" opacity="0.2" />
                          <path d={svgPaths.p359f4000} fill="white" id="Vector_36" opacity="0.2" />
                          <path d={svgPaths.pf060700} fill="white" id="Vector_37" opacity="0.2" />
                          <path d={svgPaths.p4aec600} fill="white" id="Vector_38" opacity="0.2" />
                          <path d={svgPaths.pee62100} fill="white" id="Vector_39" opacity="0.2" />
                          <path d={svgPaths.p33f07500} fill="white" id="Vector_40" opacity="0.2" />
                          <path d={svgPaths.p1c73b80} fill="white" id="Vector_41" opacity="0.2" />
                          <path d={svgPaths.p5aacd00} fill="white" id="Vector_42" opacity="0.2" />
                          <path d={svgPaths.pcf29d00} fill="white" id="Vector_43" opacity="0.2" />
                          <path d={svgPaths.p1d4f4300} fill="white" id="Vector_44" opacity="0.2" />
                          <path d={svgPaths.p101d8f00} fill="white" id="Vector_45" opacity="0.2" />
                          <path d={svgPaths.p2abddb00} fill="white" id="Vector_46" opacity="0.2" />
                        </g>
                        <path d={svgPaths.p359ec080} fill="white" id="Vector_47" opacity="0.2" />
                        <path d={svgPaths.p835c00} fill="white" id="Vector_48" opacity="0.2" />
                      </g>
                      <g id="Group_8">
                        <path d={svgPaths.pd997300} fill="#E8B022" id="Vector_49" />
                        <path d={svgPaths.p19487b00} fill="white" id="Vector_50" opacity="0.2" />
                        <g id="Group_9">
                          <path d={svgPaths.p2959bb00} fill="white" id="Vector_51" opacity="0.2" />
                          <path d={svgPaths.p19d6e080} fill="white" id="Vector_52" opacity="0.2" />
                          <path d={svgPaths.p3eee8b00} fill="white" id="Vector_53" opacity="0.2" />
                          <path d={svgPaths.p874c80} fill="white" id="Vector_54" opacity="0.2" />
                          <path d={svgPaths.p19276940} fill="white" id="Vector_55" opacity="0.2" />
                          <path d={svgPaths.p1abeed00} fill="white" id="Vector_56" opacity="0.2" />
                          <path d={svgPaths.p7dfaef0} fill="white" id="Vector_57" opacity="0.2" />
                          <path d={svgPaths.p134afd80} fill="white" id="Vector_58" opacity="0.2" />
                          <path d={svgPaths.p39192700} fill="white" id="Vector_59" opacity="0.2" />
                          <path d={svgPaths.p13c07b00} fill="white" id="Vector_60" opacity="0.2" />
                          <path d={svgPaths.pa9c2580} fill="white" id="Vector_61" opacity="0.2" />
                          <path d={svgPaths.p37a17f80} fill="white" id="Vector_62" opacity="0.2" />
                        </g>
                        <path d={svgPaths.p37a55100} fill="white" id="Vector_63" opacity="0.2" />
                        <path d={svgPaths.p283ef300} fill="white" id="Vector_64" opacity="0.2" />
                      </g>
                      <g id="Group_10">
                        <path d={svgPaths.p17be4e72} fill="#E8B022" id="Vector_65" />
                        <path d={svgPaths.p3c9e2e00} fill="white" id="Vector_66" opacity="0.2" />
                        <g id="Group_11">
                          <path d={svgPaths.p3490ae00} fill="white" id="Vector_67" opacity="0.2" />
                          <path d={svgPaths.p18864800} fill="white" id="Vector_68" opacity="0.2" />
                          <path d={svgPaths.pb3840} fill="white" id="Vector_69" opacity="0.2" />
                          <path d={svgPaths.p24593280} fill="white" id="Vector_70" opacity="0.2" />
                          <path d={svgPaths.p6b35e00} fill="white" id="Vector_71" opacity="0.2" />
                          <path d={svgPaths.p73013b2} fill="white" id="Vector_72" opacity="0.2" />
                          <path d={svgPaths.p1bf18400} fill="white" id="Vector_73" opacity="0.2" />
                          <path d={svgPaths.p18f0fd00} fill="white" id="Vector_74" opacity="0.2" />
                          <path d={svgPaths.p302a5500} fill="white" id="Vector_75" opacity="0.2" />
                          <path d={svgPaths.p1432fdc0} fill="white" id="Vector_76" opacity="0.2" />
                          <path d={svgPaths.p14df5672} fill="white" id="Vector_77" opacity="0.2" />
                          <path d={svgPaths.p2f798b00} fill="white" id="Vector_78" opacity="0.2" />
                        </g>
                        <path d={svgPaths.p6cf4f00} fill="white" id="Vector_79" opacity="0.2" />
                        <path d={svgPaths.p23019a80} fill="white" id="Vector_80" opacity="0.2" />
                      </g>
                      <path d={svgPaths.p863b900} fill="white" id="Vector_81" opacity="0.2" />
                      <path d={svgPaths.p2f6c7780} fill="white" id="Vector_82" opacity="0.2" />
                      <g id="Group_12">
                        <path d={svgPaths.p19860d00} fill="#E8B022" id="Vector_83" />
                        <path d={svgPaths.p33a24ff2} fill="white" id="Vector_84" opacity="0.2" />
                        <g id="Group_13">
                          <path d={svgPaths.p1e08a800} fill="white" id="Vector_85" opacity="0.2" />
                          <path d={svgPaths.p2e631f0} fill="white" id="Vector_86" opacity="0.2" />
                          <path d={svgPaths.pa06f200} fill="white" id="Vector_87" opacity="0.2" />
                          <path d={svgPaths.p1cda3c00} fill="white" id="Vector_88" opacity="0.2" />
                          <path d={svgPaths.p27df5780} fill="white" id="Vector_89" opacity="0.2" />
                          <path d={svgPaths.p1bc17100} fill="white" id="Vector_90" opacity="0.2" />
                          <path d={svgPaths.p1bf81880} fill="white" id="Vector_91" opacity="0.2" />
                          <path d={svgPaths.p24caa900} fill="white" id="Vector_92" opacity="0.2" />
                          <path d={svgPaths.p3ecce580} fill="white" id="Vector_93" opacity="0.2" />
                          <path d={svgPaths.p1c19dc00} fill="white" id="Vector_94" opacity="0.2" />
                          <path d={svgPaths.pe590c00} fill="white" id="Vector_95" opacity="0.2" />
                          <path d={svgPaths.p1dd30400} fill="white" id="Vector_96" opacity="0.2" />
                        </g>
                        <path d={svgPaths.p12937680} fill="white" id="Vector_97" opacity="0.2" />
                        <path d={svgPaths.p5db600} fill="white" id="Vector_98" opacity="0.2" />
                      </g>
                    </g>
                  </svg>
                )}
              </div>
            </>
          )}
          {(isHappyMoocaWithSunnyAndS || isHappyMoocaWithSunnyAndXs || isHappyMoocaWithSunnyAndM || isMoocaWalletEnoughAndL) && (
            <>
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletEnoughAndL ? "left-[calc(50%-67.39px)] top-[calc(50%+30.73px)]" : isHappyMoocaWithSunnyAndM ? "left-[calc(50%+26.73px)] top-[calc(50%+4.87px)]" : isHappyMoocaWithSunnyAndXs ? "left-[calc(50%+17.89px)] top-[calc(50%+3.47px)]" : "left-[calc(50%+24.68px)] top-[calc(50%+5.27px)]"}`} data-name="Group">
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndL ? "contents left-[calc(50%-37.98px)] top-[calc(50%+41px)]" : isHappyMoocaWithSunnyAndM ? "h-[45.062px] left-[calc(50%+25.15px)] top-[calc(50%+50.9px)] w-[46.414px]" : isHappyMoocaWithSunnyAndXs ? "h-[30.995px] left-[calc(50%+16.8px)] top-[calc(50%+35.13px)] w-[31.924px]" : "h-[42.44px] left-[calc(50%+23.19px)] top-[calc(50%+48.62px)] w-[43.712px]"}`} data-name="Group">
                  {isHappyMoocaWithSunnyAndIsSOrXsOrM && (
                    <svg className="absolute block inset-0 size-full" fill="none" height={isHappyMoocaWithSunnyAndM ? "45.0622" : isHappyMoocaWithSunnyAndXs ? "30.9948" : "42.4395"} preserveAspectRatio="none" viewBox={isHappyMoocaWithSunnyAndM ? "0 0 46.4139 45.0622" : isHappyMoocaWithSunnyAndXs ? "0 0 31.9245 30.9948" : "0 0 43.7125 42.4395"} width={isHappyMoocaWithSunnyAndM ? "46.4139" : isHappyMoocaWithSunnyAndXs ? "31.9245" : "43.7125"}>
                      <g id="Group">
                        <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p29d1a500 : isHappyMoocaWithSunnyAndXs ? svgPaths.p3424ec00 : svgPaths.p2674d000} fill="white" id="Vector" />
                      </g>
                    </svg>
                  )}
                  {isMoocaWalletEnoughAndL && (
                    <>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17.759px] left-[calc(50%-36.54px)] top-[calc(50%+67.32px)] w-[75.037px]" data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height="17.7589" preserveAspectRatio="none" viewBox="0 0 75.0366 17.7589" width="75.0366">
                          <g id="Group">
                            <path d={svgPaths.p2896fd00} fill="#E8B022" id="Vector" />
                            <path d={svgPaths.p2ff0f00} fill="white" id="Vector_2" opacity="0.2" />
                            <g id="Group_2">
                              <path d={svgPaths.pbcaa00} fill="white" id="Vector_3" opacity="0.2" />
                              <path d={svgPaths.p35c42480} fill="white" id="Vector_4" opacity="0.2" />
                              <path d={svgPaths.p38c6ff00} fill="white" id="Vector_5" opacity="0.2" />
                              <path d={svgPaths.p22709e80} fill="white" id="Vector_6" opacity="0.2" />
                              <path d={svgPaths.p10e12200} fill="white" id="Vector_7" opacity="0.2" />
                              <path d={svgPaths.p3d955240} fill="white" id="Vector_8" opacity="0.2" />
                              <path d={svgPaths.p12164400} fill="white" id="Vector_9" opacity="0.2" />
                              <path d={svgPaths.p1f65d200} fill="white" id="Vector_10" opacity="0.2" />
                              <path d={svgPaths.pf759500} fill="white" id="Vector_11" opacity="0.2" />
                              <path d={svgPaths.p12e11800} fill="white" id="Vector_12" opacity="0.2" />
                              <path d={svgPaths.p12693700} fill="white" id="Vector_13" opacity="0.2" />
                              <path d={svgPaths.p3e27bc00} fill="white" id="Vector_14" opacity="0.2" />
                            </g>
                            <path d={svgPaths.pb34a080} fill="white" id="Vector_15" opacity="0.2" />
                            <path d={svgPaths.p20d8300} fill="white" id="Vector_16" opacity="0.2" />
                          </g>
                        </svg>
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17.759px] left-[calc(50%-34.8px)] top-[calc(50%+49.77px)] w-[75.037px]" data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height="17.7591" preserveAspectRatio="none" viewBox="0 0 75.0365 17.7591" width="75.0365">
                          <g id="Group">
                            <path d={svgPaths.p1d0e7700} fill="#E8B022" id="Vector" />
                            <path d={svgPaths.p19148f80} fill="white" id="Vector_2" opacity="0.2" />
                            <g id="Group_2">
                              <path d={svgPaths.p34900f00} fill="white" id="Vector_3" opacity="0.2" />
                              <path d={svgPaths.p5e10b80} fill="white" id="Vector_4" opacity="0.2" />
                              <path d={svgPaths.p20654300} fill="white" id="Vector_5" opacity="0.2" />
                              <path d={svgPaths.peec2980} fill="white" id="Vector_6" opacity="0.2" />
                              <path d={svgPaths.p1d5990b2} fill="white" id="Vector_7" opacity="0.2" />
                              <path d={svgPaths.p3172ac80} fill="white" id="Vector_8" opacity="0.2" />
                              <path d={svgPaths.p1d0ddc00} fill="white" id="Vector_9" opacity="0.2" />
                              <path d={svgPaths.p5a08500} fill="white" id="Vector_10" opacity="0.2" />
                              <path d={svgPaths.p23420180} fill="white" id="Vector_11" opacity="0.2" />
                              <path d={svgPaths.p3267d000} fill="white" id="Vector_12" opacity="0.2" />
                              <path d={svgPaths.p71d1000} fill="white" id="Vector_13" opacity="0.2" />
                              <path d={svgPaths.p2d50800} fill="white" id="Vector_14" opacity="0.2" />
                            </g>
                            <path d={svgPaths.pa3b83f0} fill="white" id="Vector_15" opacity="0.2" />
                            <path d={svgPaths.p19f73480} fill="white" id="Vector_16" opacity="0.2" />
                          </g>
                        </svg>
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17.752px] left-[calc(50%-41.16px)] top-[calc(50%+32.23px)] w-[75.036px]" data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height="17.752" preserveAspectRatio="none" viewBox="0 0 75.0357 17.752" width="75.0357">
                          <g id="Group">
                            <path d={svgPaths.p2effe680} fill="#E8B022" id="Vector" />
                            <path d={svgPaths.p3ee1be12} fill="white" id="Vector_2" opacity="0.2" />
                            <g id="Group_2">
                              <path d={svgPaths.p4d36180} fill="white" id="Vector_3" opacity="0.2" />
                              <path d={svgPaths.p31f6c400} fill="white" id="Vector_4" opacity="0.2" />
                              <path d={svgPaths.p23efa600} fill="white" id="Vector_5" opacity="0.2" />
                              <path d={svgPaths.p20039100} fill="white" id="Vector_6" opacity="0.2" />
                              <path d={svgPaths.p167ad000} fill="white" id="Vector_7" opacity="0.2" />
                              <path d={svgPaths.pdd9f300} fill="white" id="Vector_8" opacity="0.2" />
                              <path d={svgPaths.p1a2bd900} fill="white" id="Vector_9" opacity="0.2" />
                              <path d={svgPaths.p3846ee00} fill="white" id="Vector_10" opacity="0.2" />
                              <path d={svgPaths.p2fe7c180} fill="white" id="Vector_11" opacity="0.2" />
                              <path d={svgPaths.p1a779780} fill="white" id="Vector_12" opacity="0.2" />
                              <path d={svgPaths.p24e86c00} fill="white" id="Vector_13" opacity="0.2" />
                              <path d={svgPaths.p1ad647c0} fill="white" id="Vector_14" opacity="0.2" />
                            </g>
                            <path d={svgPaths.p38a8b100} fill="white" id="Vector_15" opacity="0.2" />
                            <path d={svgPaths.p35efae80} fill="white" id="Vector_16" opacity="0.2" />
                          </g>
                        </svg>
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17.752px] left-[calc(50%-36.54px)] top-[calc(50%+14.68px)] w-[75.037px]" data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height="17.7521" preserveAspectRatio="none" viewBox="0 0 75.0366 17.7521" width="75.0366">
                          <g id="Group">
                            <path d={svgPaths.p15ee4400} fill="#E8B022" id="Vector" />
                            <path d={svgPaths.p706eb80} fill="white" id="Vector_2" opacity="0.2" />
                            <g id="Group_2">
                              <path d={svgPaths.p308cfc80} fill="white" id="Vector_3" opacity="0.2" />
                              <path d={svgPaths.pd500e00} fill="white" id="Vector_4" opacity="0.2" />
                              <path d={svgPaths.p28e80800} fill="white" id="Vector_5" opacity="0.2" />
                              <path d={svgPaths.p283b8a40} fill="white" id="Vector_6" opacity="0.2" />
                              <path d={svgPaths.p5307f00} fill="white" id="Vector_7" opacity="0.2" />
                              <path d={svgPaths.p1d7f1700} fill="white" id="Vector_8" opacity="0.2" />
                              <path d={svgPaths.p2a49fc00} fill="white" id="Vector_9" opacity="0.2" />
                              <path d={svgPaths.p365e3280} fill="white" id="Vector_10" opacity="0.2" />
                              <path d={svgPaths.p1dc60200} fill="white" id="Vector_11" opacity="0.2" />
                              <path d={svgPaths.pcf80100} fill="white" id="Vector_12" opacity="0.2" />
                              <path d={svgPaths.p115fe400} fill="white" id="Vector_13" opacity="0.2" />
                              <path d={svgPaths.p212c2d70} fill="white" id="Vector_14" opacity="0.2" />
                            </g>
                            <path d={svgPaths.p2535ab00} fill="white" id="Vector_15" opacity="0.2" />
                            <path d={svgPaths.p16d41380} fill="white" id="Vector_16" opacity="0.2" />
                          </g>
                        </svg>
                      </div>
                    </>
                  )}
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndL ? "h-[28.989px] left-[calc(50%-77.13px)] top-[calc(50%-5.36px)] w-[76.439px]" : isHappyMoocaWithSunnyAndM ? "h-[7.206px] left-[calc(50%+25.35px)] top-[calc(50%+60.71px)] w-[26.093px]" : isHappyMoocaWithSunnyAndXs ? "h-[4.957px] left-[calc(50%+16.94px)] top-[calc(50%+41.88px)] w-[17.947px]" : "h-[6.787px] left-[calc(50%+23.37px)] top-[calc(50%+57.86px)] w-[24.572px]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndL ? "28.9894" : isHappyMoocaWithSunnyAndM ? "7.20609" : isHappyMoocaWithSunnyAndXs ? "4.9565" : "6.78667"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndL ? "0 0 76.439 28.9894" : isHappyMoocaWithSunnyAndM ? "0 0 26.0927 7.20609" : isHappyMoocaWithSunnyAndXs ? "0 0 17.9471 4.9565" : "0 0 24.5721 6.78667"} width={isMoocaWalletEnoughAndL ? "76.439" : isHappyMoocaWithSunnyAndM ? "26.0927" : isHappyMoocaWithSunnyAndXs ? "17.9471" : "24.5721"}>
                    <g id="Group">
                      <path d={isMoocaWalletEnoughAndL ? svgPaths.p1c29200 : isHappyMoocaWithSunnyAndM ? svgPaths.paa00600 : isHappyMoocaWithSunnyAndXs ? svgPaths.p2f97c600 : svgPaths.p1aa89ec0} fill={isMoocaWalletEnoughAndL ? "#E8B022" : "#D2DEED"} id="Vector" />
                      <path d={isMoocaWalletEnoughAndL ? svgPaths.p1d2ab00 : isHappyMoocaWithSunnyAndM ? svgPaths.p33b31ef0 : isHappyMoocaWithSunnyAndXs ? svgPaths.p3fbbbd00 : svgPaths.p2f5ff580} fill={isMoocaWalletEnoughAndL ? "white" : "#D2DEED"} id="Vector_2" opacity={isMoocaWalletEnoughAndL ? "0.2" : undefined} />
                      {isMoocaWalletEnoughAndL && (
                        <>
                          <g id="Group_2">
                            <path d={svgPaths.p14f06800} fill="white" id="Vector_3" opacity="0.2" />
                            <path d={svgPaths.p2c5bb480} fill="white" id="Vector_4" opacity="0.2" />
                            <path d={svgPaths.pce66cf0} fill="white" id="Vector_5" opacity="0.2" />
                            <path d={svgPaths.p1b68aec0} fill="white" id="Vector_6" opacity="0.2" />
                            <path d={svgPaths.p16945500} fill="white" id="Vector_7" opacity="0.2" />
                            <path d={svgPaths.p3fc03780} fill="white" id="Vector_8" opacity="0.2" />
                            <path d={svgPaths.p8f10a00} fill="white" id="Vector_9" opacity="0.2" />
                            <path d={svgPaths.p3502f680} fill="white" id="Vector_10" opacity="0.2" />
                            <path d={svgPaths.p1fe15500} fill="white" id="Vector_11" opacity="0.2" />
                            <path d={svgPaths.p1f77c2f2} fill="white" id="Vector_12" opacity="0.2" />
                            <path d={svgPaths.p1d158880} fill="white" id="Vector_13" opacity="0.2" />
                            <path d={svgPaths.p25838580} fill="white" id="Vector_14" opacity="0.2" />
                          </g>
                          <path d={svgPaths.p2d4b3800} fill="white" id="Vector_15" opacity="0.2" />
                          <path d={svgPaths.p33203b00} fill="white" id="Vector_16" opacity="0.2" />
                          <path d={svgPaths.pb100cc0} fill="white" id="Vector_17" opacity="0.2" />
                        </>
                      )}
                    </g>
                  </svg>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndL ? "h-[64.533px] left-[calc(50%-105.47px)] top-[calc(50%+43.94px)] w-[64.066px]" : isHappyMoocaWithSunnyAndM ? "contents left-[calc(50%+25.16px)] top-[calc(50%+50.91px)]" : isHappyMoocaWithSunnyAndXs ? "contents left-[calc(50%+16.81px)] top-[calc(50%+35.13px)]" : "contents left-[calc(50%+23.19px)] top-[calc(50%+48.62px)]"}`} data-name="Group">
                  {isHappyMoocaWithSunnyAndIsSOrXsOrM && (
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isHappyMoocaWithSunnyAndM ? "h-[47.009px] left-[calc(50%+25.16px)] top-[calc(50%+50.91px)] w-[48.712px]" : isHappyMoocaWithSunnyAndXs ? "h-[32.334px] left-[calc(50%+16.81px)] top-[calc(50%+35.13px)] w-[33.505px]" : "h-[44.273px] left-[calc(50%+23.19px)] top-[calc(50%+48.62px)] w-[45.876px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isHappyMoocaWithSunnyAndM ? "47.0093" : isHappyMoocaWithSunnyAndXs ? "32.334" : "44.2732"} preserveAspectRatio="none" viewBox={isHappyMoocaWithSunnyAndM ? "0 0 48.7116 47.0093" : isHappyMoocaWithSunnyAndXs ? "0 0 33.5049 32.334" : "0 0 45.8765 44.2732"} width={isHappyMoocaWithSunnyAndM ? "48.7116" : isHappyMoocaWithSunnyAndXs ? "33.5049" : "45.8765"}>
                        <g id="Group">
                          <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p1577e8f0 : isHappyMoocaWithSunnyAndXs ? svgPaths.p9ed9e00 : svgPaths.p3422d700} fill="#D2DEED" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  )}
                  {isMoocaWalletEnoughAndL && (
                    <svg className="absolute block inset-0 size-full" fill="none" height="64.5328" preserveAspectRatio="none" viewBox="0 0 64.0654 64.5328" width="64.0654">
                      <g id="Group">
                        <path d={svgPaths.p8047a00} fill="#E8B022" id="Vector" />
                        <path d={svgPaths.p3ef8a380} fill="white" id="Vector_2" opacity="0.2" />
                        <g id="Group_2">
                          <path d={svgPaths.p5cdd800} fill="white" id="Vector_3" opacity="0.2" />
                          <path d={svgPaths.p3af1b680} fill="white" id="Vector_4" opacity="0.2" />
                          <path d={svgPaths.p211aba00} fill="white" id="Vector_5" opacity="0.2" />
                          <path d={svgPaths.p34282400} fill="white" id="Vector_6" opacity="0.2" />
                          <path d={svgPaths.p3c444f80} fill="white" id="Vector_7" opacity="0.2" />
                          <path d={svgPaths.p29f33e00} fill="white" id="Vector_8" opacity="0.2" />
                          <path d={svgPaths.p3fae8500} fill="white" id="Vector_9" opacity="0.2" />
                          <path d={svgPaths.pb25df70} fill="white" id="Vector_10" opacity="0.2" />
                          <path d={svgPaths.p2a0923c0} fill="white" id="Vector_11" opacity="0.2" />
                          <path d={svgPaths.p380eaf00} fill="white" id="Vector_12" opacity="0.2" />
                          <path d={svgPaths.p6d90800} fill="white" id="Vector_13" opacity="0.2" />
                          <path d={svgPaths.p3cc3ae00} fill="white" id="Vector_14" opacity="0.2" />
                        </g>
                        <path d={svgPaths.pa2bb800} fill="white" id="Vector_15" opacity="0.2" />
                        <path d={svgPaths.p1c9fea80} fill="white" id="Vector_16" opacity="0.2" />
                        <path d={svgPaths.p26e17880} fill="white" id="Vector_17" opacity="0.2" />
                      </g>
                    </svg>
                  )}
                </div>
                {isHappyMoocaWithSunnyAndIsSOrXsOrM && (
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isHappyMoocaWithSunnyAndM ? "h-[4.751px] left-[calc(50%+1.67px)] top-[calc(50%+29.06px)] w-[9.747px]" : isHappyMoocaWithSunnyAndXs ? "h-[3.268px] left-[calc(50%+0.65px)] top-[calc(50%+20.11px)] w-[6.704px]" : "h-[4.475px] left-[calc(50%+1.08px)] top-[calc(50%+28.05px)] w-[9.18px]"}`} data-name="Group">
                    <div className={`absolute ${isHappyMoocaWithSunnyAndM ? "inset-[-11.15%_-5.44%_-11.16%_-5.44%]" : isHappyMoocaWithSunnyAndXs ? "inset-[-16.22%_-7.91%]" : "inset-[-11.84%_-5.77%]"}`}>
                      <svg className="block size-full" fill="none" height={isHappyMoocaWithSunnyAndM ? "5.81139" : isHappyMoocaWithSunnyAndXs ? "4.32811" : "5.53484"} preserveAspectRatio="none" viewBox={isHappyMoocaWithSunnyAndM ? "0 0 10.8071 5.81139" : isHappyMoocaWithSunnyAndXs ? "0 0 7.76424 4.32811" : "0 0 10.2397 5.53484"} width={isHappyMoocaWithSunnyAndM ? "10.8071" : isHappyMoocaWithSunnyAndXs ? "7.76424" : "10.2397"}>
                        <g id="Group">
                          <path d={isHappyMoocaWithSunnyAndM ? svgPaths.pe81ee00 : isHappyMoocaWithSunnyAndXs ? svgPaths.p34fb3780 : svgPaths.pfef7400} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.0599" />
                        </g>
                      </svg>
                    </div>
                  </div>
                )}
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndL ? "h-[70.38px] left-[calc(50%-58.45px)] top-[calc(50%+41px)] w-[40.439px]" : isHappyMoocaWithSunnyAndM ? "h-[2.151px] left-[calc(50%+38.82px)] top-[calc(50%+23.54px)] w-[18.036px]" : isHappyMoocaWithSunnyAndXs ? "h-[1.48px] left-[calc(50%+26.2px)] top-[calc(50%+16.31px)] w-[12.405px]" : "h-[2.026px] left-[calc(50%+36.06px)] top-[calc(50%+22.85px)] w-[16.986px]"}`} data-name="Vector">
                  {isHappyMoocaWithSunnyAndIsSOrXsOrM && (
                    <div className={`absolute ${isHappyMoocaWithSunnyAndM ? "inset-[-24.64%_-2.94%]" : isHappyMoocaWithSunnyAndXs ? "inset-[-35.83%_-4.27%_-35.82%_-4.27%]" : "inset-[-26.17%_-3.12%_-26.16%_-3.12%]"}`}>
                      <svg className="block size-full" fill="none" height={isHappyMoocaWithSunnyAndM ? "3.21105" : isHappyMoocaWithSunnyAndXs ? "2.53955" : "3.08586"} preserveAspectRatio="none" viewBox={isHappyMoocaWithSunnyAndM ? "0 0 19.0959 3.21105" : isHappyMoocaWithSunnyAndXs ? "0 0 13.4655 2.53955" : "0 0 18.0462 3.08586"} width={isHappyMoocaWithSunnyAndM ? "19.0959" : isHappyMoocaWithSunnyAndXs ? "13.4655" : "18.0462"}>
                        <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p223fa900 : isHappyMoocaWithSunnyAndXs ? svgPaths.p69d7280 : svgPaths.p1ef656c0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.0599" />
                      </svg>
                    </div>
                  )}
                  {isMoocaWalletEnoughAndL && (
                    <svg className="absolute block inset-0 size-full" fill="none" height="70.3796" preserveAspectRatio="none" viewBox="0 0 40.4388 70.3796" width="40.4388">
                      <path d={svgPaths.p1a925e00} fill="white" id="Vector" opacity="0.2" />
                    </svg>
                  )}
                </div>
                {isHappyMoocaWithSunnyAndIsSOrXsOrM && (
                  <>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isHappyMoocaWithSunnyAndM ? "h-[18.71px] left-[calc(50%+21.94px)] top-[calc(50%+39.56px)] w-[39.525px]" : isHappyMoocaWithSunnyAndXs ? "h-[12.869px] left-[calc(50%+14.59px)] top-[calc(50%+27.33px)] w-[27.186px]" : "h-[17.621px] left-[calc(50%+20.16px)] top-[calc(50%+37.94px)] w-[37.225px]"}`} data-name="Vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isHappyMoocaWithSunnyAndM ? "18.7095" : isHappyMoocaWithSunnyAndXs ? "12.8688" : "17.6206"} preserveAspectRatio="none" viewBox={isHappyMoocaWithSunnyAndM ? "0 0 39.5254 18.7095" : isHappyMoocaWithSunnyAndXs ? "0 0 27.1865 12.8688" : "0 0 37.225 17.6206"} width={isHappyMoocaWithSunnyAndM ? "39.5254" : isHappyMoocaWithSunnyAndXs ? "27.1865" : "37.225"}>
                        <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p3a9a9480 : isHappyMoocaWithSunnyAndXs ? svgPaths.p3afb01f0 : svgPaths.p2ee60600} fill="#D2DEED" id="Vector" />
                      </svg>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isHappyMoocaWithSunnyAndM ? "h-[14.331px] left-[calc(50%+45.92px)] top-[calc(50%+42.89px)] w-[4.912px]" : isHappyMoocaWithSunnyAndXs ? "h-[9.857px] left-[calc(50%+31.09px)] top-[calc(50%+29.62px)] w-[3.379px]" : "h-[13.497px] left-[calc(50%+42.75px)] top-[calc(50%+41.07px)] w-[4.626px]"}`} data-name="Vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isHappyMoocaWithSunnyAndM ? "14.3308" : isHappyMoocaWithSunnyAndXs ? "9.85705" : "13.4967"} preserveAspectRatio="none" viewBox={isHappyMoocaWithSunnyAndM ? "0 0 4.91189 14.3308" : isHappyMoocaWithSunnyAndXs ? "0 0 3.3785 9.85705" : "0 0 4.626 13.4967"} width={isHappyMoocaWithSunnyAndM ? "4.91189" : isHappyMoocaWithSunnyAndXs ? "3.3785" : "4.626"}>
                        <path d={isHappyMoocaWithSunnyAndM ? svgPaths.pc77a580 : isHappyMoocaWithSunnyAndXs ? svgPaths.pdaf9d80 : svgPaths.p2afc9300} fill="#D2DEED" id="Vector" />
                      </svg>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isHappyMoocaWithSunnyAndM ? "h-[36.683px] left-[calc(50%+26.02px)] top-[calc(50%+34.24px)] w-[65.038px]" : isHappyMoocaWithSunnyAndXs ? "h-[25.231px] left-[calc(50%+17.4px)] top-[calc(50%+23.67px)] w-[44.734px]" : "h-[34.548px] left-[calc(50%+24.01px)] top-[calc(50%+32.93px)] w-[61.252px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isHappyMoocaWithSunnyAndM ? "36.6828" : isHappyMoocaWithSunnyAndXs ? "25.2313" : "34.5478"} preserveAspectRatio="none" viewBox={isHappyMoocaWithSunnyAndM ? "0 0 65.0378 36.6828" : isHappyMoocaWithSunnyAndXs ? "0 0 44.7344 25.2313" : "0 0 61.2524 34.5478"} width={isHappyMoocaWithSunnyAndM ? "65.0378" : isHappyMoocaWithSunnyAndXs ? "44.7344" : "61.2524"}>
                        <g id="Group">
                          <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p28296180 : isHappyMoocaWithSunnyAndXs ? svgPaths.p611c400 : svgPaths.p29c53780} fill="#E8A523" id="Vector" />
                          <g id="Group_2">
                            <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p18c16500 : isHappyMoocaWithSunnyAndXs ? svgPaths.p33d72d80 : svgPaths.p169628e0} fill="white" id="Vector_2" />
                            <path d={isHappyMoocaWithSunnyAndM ? svgPaths.pbff4600 : isHappyMoocaWithSunnyAndXs ? svgPaths.p31348d00 : svgPaths.p2187a80} fill="white" id="Vector_3" />
                            <g id="Group_3">
                              <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p7e8af00 : isHappyMoocaWithSunnyAndXs ? svgPaths.p1cef7d00 : svgPaths.p11a11200} fill="white" id="Vector_4" />
                              <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p3f882700 : isHappyMoocaWithSunnyAndXs ? svgPaths.p7af2270 : svgPaths.p164daa00} fill="white" id="Vector_5" />
                              <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p357b0a00 : isHappyMoocaWithSunnyAndXs ? svgPaths.p6598c00 : svgPaths.p1e8a4900} fill="white" id="Vector_6" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isHappyMoocaWithSunnyAndM ? "h-[86.29px] left-[calc(50%+26.73px)] top-[calc(50%-21.52px)] w-[135.538px]" : isHappyMoocaWithSunnyAndXs ? "h-[59.352px] left-[calc(50%+17.89px)] top-[calc(50%-14.68px)] w-[93.226px]" : "h-[81.268px] left-[calc(50%+24.68px)] top-[calc(50%-19.59px)] w-[127.649px]"}`} data-name="Group">
                      <div className={`absolute ${isHappyMoocaWithSunnyAndM ? "inset-[-2.32%_-1.48%]" : isHappyMoocaWithSunnyAndXs ? "inset-[-2.53%_-1.61%]" : "inset-[-2.21%_-1.41%]"}`}>
                        <svg className="block size-full" fill="none" height={isHappyMoocaWithSunnyAndM ? "90.2902" : isHappyMoocaWithSunnyAndXs ? "62.3523" : "84.8679"} preserveAspectRatio="none" viewBox={isHappyMoocaWithSunnyAndM ? "0 0 139.538 90.2902" : isHappyMoocaWithSunnyAndXs ? "0 0 96.2259 62.3523" : "0 0 131.249 84.8679"} width={isHappyMoocaWithSunnyAndM ? "139.538" : isHappyMoocaWithSunnyAndXs ? "96.2259" : "131.249"}>
                          <g id="Group">
                            <g id="Vector">
                              <mask fill="black" height={isHappyMoocaWithSunnyAndM ? "91" : isHappyMoocaWithSunnyAndXs ? "63" : "86"} id={isHappyMoocaWithSunnyAndM ? "path-1-outside-1_0_4139" : isHappyMoocaWithSunnyAndXs ? "path-1-outside-1_0_4681" : "path-1-outside-1_0_5094"} maskUnits="userSpaceOnUse" width={isHappyMoocaWithSunnyAndM ? "140" : isHappyMoocaWithSunnyAndXs ? "97" : "132"} x={isHappyMoocaWithSunnyAndM ? "9.53674e-07" : isHappyMoocaWithSunnyAndXs ? "-0.499999" : "-0.199999"} y={isHappyMoocaWithSunnyAndM ? "0" : isHappyMoocaWithSunnyAndXs ? "-0.5" : "-0.2"}>
                                <rect fill="white" height={isHappyMoocaWithSunnyAndM ? "91" : isHappyMoocaWithSunnyAndXs ? "63" : "86"} width={isHappyMoocaWithSunnyAndM ? "140" : isHappyMoocaWithSunnyAndXs ? "97" : "132"} x={isHappyMoocaWithSunnyAndM ? "9.53674e-07" : isHappyMoocaWithSunnyAndXs ? "-0.499999" : "-0.199999"} y={isHappyMoocaWithSunnyAndXs ? "-0.5" : isHappyMoocaWithSunnyAndS ? "-0.2" : undefined} />
                                <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p39758600 : isHappyMoocaWithSunnyAndXs ? svgPaths.p2c4d2300 : svgPaths.p1395e380} />
                              </mask>
                              <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p39758600 : isHappyMoocaWithSunnyAndXs ? svgPaths.p2c4d2300 : svgPaths.p1395e380} fill="white" />
                              <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p39758600 : isHappyMoocaWithSunnyAndXs ? svgPaths.p2c4d2300 : svgPaths.p1395e380} mask={isHappyMoocaWithSunnyAndM ? "url(#path-1-outside-1_0_4139)" : isHappyMoocaWithSunnyAndXs ? "url(#path-1-outside-1_0_4681)" : "url(#path-1-outside-1_0_5094)"} stroke="#D2DEED" strokeWidth={isHappyMoocaWithSunnyAndM ? "4" : isHappyMoocaWithSunnyAndXs ? "3" : "3.6"} />
                            </g>
                            <g id="Group_2">
                              <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p26a7e100 : isHappyMoocaWithSunnyAndXs ? svgPaths.p1a95500 : svgPaths.p3ea0cb00} fill="#FDDED5" id="Vector_2" />
                              <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p36902e00 : isHappyMoocaWithSunnyAndXs ? svgPaths.p154b8580 : svgPaths.p3448f000} fill="#FDDED5" id="Vector_3" />
                            </g>
                            <g id="Group_3">
                              <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p3163c480 : isHappyMoocaWithSunnyAndXs ? svgPaths.p17af00 : svgPaths.p29efe500} id="Vector_4" stroke="#2359A8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isHappyMoocaWithSunnyAndXs ? "1.5" : "1.8"} />
                            </g>
                            <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p301544d0 : isHappyMoocaWithSunnyAndXs ? svgPaths.p4f2dc00 : svgPaths.p1a4d8e20} id="Vector_5" stroke="#2359A8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isHappyMoocaWithSunnyAndXs ? "1.5" : "1.8"} />
                            <path d={isHappyMoocaWithSunnyAndM ? svgPaths.pbda6780 : isHappyMoocaWithSunnyAndXs ? svgPaths.p3a005e40 : svgPaths.p3eaf3000} id="Vector_6" stroke="#2359A8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isHappyMoocaWithSunnyAndXs ? "1.5" : "1.8"} />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isHappyMoocaWithSunnyAndM ? "left-[calc(50%-1.13px)] top-[calc(50%+31.11px)]" : isHappyMoocaWithSunnyAndXs ? "left-[calc(50%-1.28px)] top-[calc(50%+21.52px)]" : "left-[calc(50%-1.57px)] top-[calc(50%+29.98px)]"}`} data-name="Group">
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isHappyMoocaWithSunnyAndM ? "left-[calc(50%-1.13px)] top-[calc(50%+31.11px)]" : isHappyMoocaWithSunnyAndXs ? "left-[calc(50%-1.28px)] top-[calc(50%+21.52px)]" : "left-[calc(50%-1.57px)] top-[calc(50%+29.98px)]"}`} data-name="Group">
                        <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isHappyMoocaWithSunnyAndM ? "h-[28.421px] left-[calc(50%-1.13px)] top-[calc(50%+31.11px)] w-[28.073px]" : isHappyMoocaWithSunnyAndXs ? "h-[19.549px] left-[calc(50%-1.28px)] top-[calc(50%+21.52px)] w-[19.309px]" : "h-[26.767px] left-[calc(50%-1.57px)] top-[calc(50%+29.98px)] w-[26.439px]"}`} data-name="Group">
                          <svg className="absolute block inset-0 size-full" fill="none" height={isHappyMoocaWithSunnyAndM ? "28.421" : isHappyMoocaWithSunnyAndXs ? "19.5486" : "26.7669"} preserveAspectRatio="none" viewBox={isHappyMoocaWithSunnyAndM ? "0 0 28.0728 28.421" : isHappyMoocaWithSunnyAndXs ? "0 0 19.3091 19.5486" : "0 0 26.4389 26.7669"} width={isHappyMoocaWithSunnyAndM ? "28.0728" : isHappyMoocaWithSunnyAndXs ? "19.3091" : "26.4389"}>
                            <g id="Group">
                              <path d={isHappyMoocaWithSunnyAndM ? svgPaths.pc93ba80 : isHappyMoocaWithSunnyAndXs ? svgPaths.p2e5de940 : svgPaths.p4cdc880} fill="white" id="Vector" />
                              <g id="Group_2">
                                <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p321bad00 : isHappyMoocaWithSunnyAndXs ? svgPaths.p3b332880 : svgPaths.p28b7eb00} fill="#D2DEED" id="Vector_2" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isHappyMoocaWithSunnyAndM ? "left-[calc(50%+56.97px)] top-[calc(50%+31.11px)]" : isHappyMoocaWithSunnyAndXs ? "left-[calc(50%+38.69px)] top-[calc(50%+21.52px)]" : "left-[calc(50%+53.15px)] top-[calc(50%+29.98px)]"}`} data-name="Group">
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isHappyMoocaWithSunnyAndM ? "left-[calc(50%+56.97px)] top-[calc(50%+31.11px)]" : isHappyMoocaWithSunnyAndXs ? "left-[calc(50%+38.69px)] top-[calc(50%+21.52px)]" : "left-[calc(50%+53.15px)] top-[calc(50%+29.98px)]"}`} data-name="Group">
                        <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center ${isHappyMoocaWithSunnyAndM ? "h-[28.421px] left-[calc(50%+56.97px)] top-[calc(50%+31.11px)] w-[28.073px]" : isHappyMoocaWithSunnyAndXs ? "h-[19.549px] left-[calc(50%+38.69px)] top-[calc(50%+21.52px)] w-[19.309px]" : "h-[26.767px] left-[calc(50%+53.15px)] top-[calc(50%+29.98px)] w-[26.439px]"}`}>
                          <div className="-scale-y-100 flex-none rotate-180">
                            <div className={`relative ${isHappyMoocaWithSunnyAndM ? "h-[28.421px] w-[28.073px]" : isHappyMoocaWithSunnyAndXs ? "h-[19.549px] w-[19.309px]" : "h-[26.767px] w-[26.439px]"}`} data-name="Group">
                              <svg className="absolute block inset-0 size-full" fill="none" height={isHappyMoocaWithSunnyAndM ? "28.421" : isHappyMoocaWithSunnyAndXs ? "19.5486" : "26.7669"} preserveAspectRatio="none" viewBox={isHappyMoocaWithSunnyAndM ? "0 0 28.0728 28.421" : isHappyMoocaWithSunnyAndXs ? "0 0 19.3091 19.5486" : "0 0 26.4389 26.7669"} width={isHappyMoocaWithSunnyAndM ? "28.0728" : isHappyMoocaWithSunnyAndXs ? "19.3091" : "26.4389"}>
                                <g id="Group">
                                  <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p2029fa00 : isHappyMoocaWithSunnyAndXs ? svgPaths.p16df6700 : svgPaths.p3bf55680} fill="white" id="Vector" />
                                  <g id="Group_2">
                                    <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p21590900 : isHappyMoocaWithSunnyAndXs ? svgPaths.p516ef00 : svgPaths.p28c72300} fill="#D2DEED" id="Vector_2" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {isMoocaWalletEnoughAndL && (
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-89.19px)] top-[calc(50%+43.38px)]" data-name="Group">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[75.873px] left-[calc(50%-85.37px)] top-[calc(50%+43.37px)] w-[56.844px]" data-name="Vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="75.8734" preserveAspectRatio="none" viewBox="0 0 56.844 75.8734" width="56.844">
                        <path d={svgPaths.p24745500} fill="#E8B022" id="Vector" />
                      </svg>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[75.881px] left-[calc(50%-75.83px)] top-[calc(50%+43.38px)] w-[37.766px]" data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height="75.8808" preserveAspectRatio="none" viewBox="0 0 37.766 75.8808" width="37.766">
                        <g id="Group">
                          <path d={svgPaths.p32a62f00} fill="#E8B022" id="Vector" />
                          <path d={svgPaths.pad61cc0} fill="white" id="Vector_2" opacity="0.2" />
                          <g id="Group_2">
                            <path d={svgPaths.p17fe4900} fill="white" id="Vector_3" opacity="0.2" />
                            <path d={svgPaths.p24e50000} fill="white" id="Vector_4" opacity="0.2" />
                            <path d={svgPaths.p3514bd80} fill="white" id="Vector_5" opacity="0.2" />
                            <path d={svgPaths.p22c93980} fill="white" id="Vector_6" opacity="0.2" />
                            <path d={svgPaths.p322c9b00} fill="white" id="Vector_7" opacity="0.2" />
                            <path d={svgPaths.p3a722080} fill="white" id="Vector_8" opacity="0.2" />
                            <path d={svgPaths.p2c46e780} fill="white" id="Vector_9" opacity="0.2" />
                            <path d={svgPaths.p1b7e3780} fill="white" id="Vector_10" opacity="0.2" />
                            <path d={svgPaths.pf7ab770} fill="white" id="Vector_11" opacity="0.2" />
                            <path d={svgPaths.p2a118c70} fill="white" id="Vector_12" opacity="0.2" />
                            <path d={svgPaths.p36e1ac32} fill="white" id="Vector_13" opacity="0.2" />
                            <path d={svgPaths.p3643f500} fill="white" id="Vector_14" opacity="0.2" />
                          </g>
                          <path d={svgPaths.p22308c80} fill="white" id="Vector_15" opacity="0.2" />
                          <path d={svgPaths.p1058dc00} fill="white" id="Vector_16" opacity="0.2" />
                          <path d={svgPaths.p19e4be00} fill="white" id="Vector_17" opacity="0.2" />
                          <path d={svgPaths.p370a70c0} fill="white" id="Vector_18" opacity="0.2" />
                          <path d={svgPaths.p1b48ec00} fill="white" id="Vector_19" opacity="0.2" />
                          <path d={svgPaths.p37ed1900} fill="white" id="Vector_20" opacity="0.2" />
                          <path d={svgPaths.p2ff70500} fill="white" id="Vector_21" opacity="0.2" />
                          <path d={svgPaths.pb92ee00} fill="white" id="Vector_22" opacity="0.2" />
                        </g>
                      </svg>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-93.01px)] top-[calc(50%+43.37px)]" data-name="Group">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[75.874px] left-[calc(50%-93.01px)] top-[calc(50%+43.37px)] w-[56.859px]" data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height="75.8736" preserveAspectRatio="none" viewBox="0 0 56.8586 75.8736" width="56.8586">
                          <g id="Group">
                            <path d={svgPaths.p125edf70} fill="#E8B022" id="Vector" />
                            <path d={svgPaths.p2f09a640} fill="white" id="Vector_2" opacity="0.2" />
                            <path d={svgPaths.p2c913400} fill="white" id="Vector_3" opacity="0.2" />
                            <path d={svgPaths.p25fef700} fill="white" id="Vector_4" opacity="0.2" />
                            <path d={svgPaths.p3b2fccf0} fill="white" id="Vector_5" opacity="0.2" />
                          </g>
                        </svg>
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-92.99px)] top-[calc(50%+43.37px)]" data-name="Group">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[44.809px] left-[calc(50%-92.99px)] top-[calc(50%+43.37px)] w-[20.307px]" data-name="Group">
                          <svg className="absolute block inset-0 size-full" fill="none" height="44.8092" preserveAspectRatio="none" viewBox="0 0 20.3069 44.8092" width="20.3069">
                            <g id="Group" opacity="0.2">
                              <path d={svgPaths.p270e5300} fill="white" id="Vector" opacity="0.2" />
                            </g>
                          </svg>
                        </div>
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[43.727px] left-[calc(50%-93.4px)] top-[calc(50%+42.83px)] w-[19.49px]" data-name="Group">
                          <svg className="absolute block inset-0 size-full" fill="none" height="43.7272" preserveAspectRatio="none" viewBox="0 0 19.4902 43.7272" width="19.4902">
                            <g id="Group">
                              <path d={svgPaths.p10633500} fill="#E8B022" id="Vector" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[69.472px] left-[calc(50%-91.68px)] top-[calc(50%+40.17px)] w-[54.198px]" data-name="Vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="69.4721" preserveAspectRatio="none" viewBox="0 0 54.1983 69.4721" width="54.1983">
                        <path d={svgPaths.p3bf07c00} fill="white" id="Vector" opacity="0.1" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndL ? "h-[148.522px] left-[calc(50%+14.39px)] top-[calc(50%+1.94px)] w-[88.174px]" : isHappyMoocaWithSunnyAndM ? "h-[82.303px] left-[calc(50%-52.9px)] top-[calc(50%+31.5px)] w-[83.199px]" : isHappyMoocaWithSunnyAndXs ? "h-[56.61px] left-[calc(50%-36.89px)] top-[calc(50%+21.78px)] w-[57.226px]" : "h-[77.513px] left-[calc(50%-50.32px)] top-[calc(50%+30.34px)] w-[78.353px]"}`} data-name="Group">
                {isHappyMoocaWithSunnyAndIsSOrXsOrM && (
                  <div className={`absolute ${isHappyMoocaWithSunnyAndM ? "inset-[0_-0.69%_0_-0.68%]" : isHappyMoocaWithSunnyAndXs ? "inset-[0_-1.07%_0_-1.06%]" : "inset-[0_-0.74%_0_-0.73%]"}`}>
                    <svg className="block size-full" fill="none" height={isHappyMoocaWithSunnyAndM ? "82.303" : isHappyMoocaWithSunnyAndXs ? "56.61" : "77.5128"} preserveAspectRatio="none" viewBox={isHappyMoocaWithSunnyAndM ? "0 0 84.3348 82.303" : isHappyMoocaWithSunnyAndXs ? "0 0 58.4444 56.61" : "0 0 79.5068 77.5128"} width={isHappyMoocaWithSunnyAndM ? "84.3348" : isHappyMoocaWithSunnyAndXs ? "58.4444" : "79.5068"}>
                      <g id="Group">
                        <g id="Group_2">
                          <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p341fb5e0 : isHappyMoocaWithSunnyAndXs ? svgPaths.p2562d73e : svgPaths.p1b9c6bd6} id="Vector" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                          <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p29050c00 : isHappyMoocaWithSunnyAndXs ? svgPaths.p39a7be60 : svgPaths.p860f5c0} id="Vector_2" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                          <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p5d12e00 : isHappyMoocaWithSunnyAndXs ? svgPaths.p29383b00 : svgPaths.p5ccb3c0} id="Vector_3" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                          <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p177edc48 : isHappyMoocaWithSunnyAndXs ? svgPaths.p25936980 : svgPaths.p357c3c00} id="Vector_4" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                          <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p3bc9b80 : isHappyMoocaWithSunnyAndXs ? svgPaths.p15aa5100 : svgPaths.p2b6efb80} id="Vector_5" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                        </g>
                        <g id="Group 2866">
                          <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p3737e900 : isHappyMoocaWithSunnyAndXs ? svgPaths.p139edd80 : svgPaths.p3c03e410} fill="#FEED53" id="Vector_6" />
                          <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p33df1600 : isHappyMoocaWithSunnyAndXs ? svgPaths.p1a514200 : svgPaths.p13920440} id="Vector_7" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.401" />
                        </g>
                        <g id="Group 2867">
                          <path d={isHappyMoocaWithSunnyAndM ? svgPaths.pc2a100 : isHappyMoocaWithSunnyAndXs ? svgPaths.p13910480 : svgPaths.p38eb4700} fill="#FEED53" id="Vector_8" />
                          <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p6d1dfc0 : isHappyMoocaWithSunnyAndXs ? svgPaths.p3e3c2600 : svgPaths.p9f93300} id="Vector_9" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.401" />
                        </g>
                        <g id="Group_3">
                          <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p34f77680 : isHappyMoocaWithSunnyAndXs ? svgPaths.p32157480 : svgPaths.p35180df0} fill="#FEED53" id="Vector_10" stroke="#E8A523" strokeWidth={mooca === "Happy Mooca with Sunny" && ["S", "M"].includes(size) ? "1.5" : undefined} />
                        </g>
                        <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p20a2db80 : isHappyMoocaWithSunnyAndXs ? svgPaths.p8f8f4f2 : svgPaths.p1a259000} fill="#E8A523" id="Vector_11" />
                        <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p2570ba00 : isHappyMoocaWithSunnyAndXs ? svgPaths.p147a7280 : svgPaths.p2d6d5380} fill="#E8A523" id="Vector_12" />
                        <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p117b3dc0 : isHappyMoocaWithSunnyAndXs ? svgPaths.p2aa5bb00 : svgPaths.p2b8569f0} fill="#E8A523" id="Vector_13" />
                        <g id="Group_4">
                          <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p11a73400 : isHappyMoocaWithSunnyAndXs ? svgPaths.p2312f800 : svgPaths.p13ab8800} fill="#FDC05C" id="Vector_14" />
                          <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p98ce280 : isHappyMoocaWithSunnyAndXs ? svgPaths.p3bd028d0 : svgPaths.p29631a00} fill="#FDC05C" id="Vector_15" />
                        </g>
                        <path d={isHappyMoocaWithSunnyAndM ? svgPaths.p714bb80 : isHappyMoocaWithSunnyAndXs ? svgPaths.pcb6b500 : svgPaths.pe841500} fill="#2359A8" id="Vector_16" />
                      </g>
                    </svg>
                  </div>
                )}
                {isMoocaWalletEnoughAndL && (
                  <svg className="absolute block inset-0 size-full" fill="none" height="148.522" preserveAspectRatio="none" viewBox="0 0 88.1737 148.522" width="88.1737">
                    <g id="Group">
                      <g id="Group_2">
                        <path d={svgPaths.p18aec100} fill="#E8B022" id="Vector" />
                        <path d={svgPaths.p3cc66f00} fill="white" id="Vector_2" opacity="0.2" />
                        <g id="Group_3">
                          <path d={svgPaths.p23105200} fill="white" id="Vector_3" opacity="0.2" />
                          <path d={svgPaths.p2661e1f0} fill="white" id="Vector_4" opacity="0.2" />
                          <path d={svgPaths.p160d7500} fill="white" id="Vector_5" opacity="0.2" />
                          <path d={svgPaths.p27a9fa80} fill="white" id="Vector_6" opacity="0.2" />
                          <path d={svgPaths.p3827b900} fill="white" id="Vector_7" opacity="0.2" />
                          <path d={svgPaths.p343d1000} fill="white" id="Vector_8" opacity="0.2" />
                          <path d={svgPaths.p22eb400} fill="white" id="Vector_9" opacity="0.2" />
                          <path d={svgPaths.p26f8e200} fill="white" id="Vector_10" opacity="0.2" />
                          <path d={svgPaths.p20062cb0} fill="white" id="Vector_11" opacity="0.2" />
                          <path d={svgPaths.p1b1d0d00} fill="white" id="Vector_12" opacity="0.2" />
                          <path d={svgPaths.p3d304980} fill="white" id="Vector_13" opacity="0.2" />
                          <path d={svgPaths.p11466b00} fill="white" id="Vector_14" opacity="0.2" />
                        </g>
                        <path d={svgPaths.p167ad300} fill="white" id="Vector_15" opacity="0.2" />
                        <path d={svgPaths.p1aa63500} fill="white" id="Vector_16" opacity="0.2" />
                      </g>
                      <g id="Group_4">
                        <path d={svgPaths.p2362b200} fill="#E8B022" id="Vector_17" />
                        <path d={svgPaths.p39408800} fill="white" id="Vector_18" opacity="0.2" />
                        <g id="Group_5">
                          <path d={svgPaths.p2136da30} fill="white" id="Vector_19" opacity="0.2" />
                          <path d={svgPaths.p16909280} fill="white" id="Vector_20" opacity="0.2" />
                          <path d={svgPaths.p7a48800} fill="white" id="Vector_21" opacity="0.2" />
                          <path d={svgPaths.p2bd1d00} fill="white" id="Vector_22" opacity="0.2" />
                          <path d={svgPaths.p2686b000} fill="white" id="Vector_23" opacity="0.2" />
                          <path d={svgPaths.p256a4d00} fill="white" id="Vector_24" opacity="0.2" />
                          <path d={svgPaths.p18c66700} fill="white" id="Vector_25" opacity="0.2" />
                          <path d={svgPaths.p31071300} fill="white" id="Vector_26" opacity="0.2" />
                          <path d={svgPaths.pac3e500} fill="white" id="Vector_27" opacity="0.2" />
                          <path d={svgPaths.p3d341580} fill="white" id="Vector_28" opacity="0.2" />
                          <path d={svgPaths.p23b06a00} fill="white" id="Vector_29" opacity="0.2" />
                          <path d={svgPaths.p3ca1bb00} fill="white" id="Vector_30" opacity="0.2" />
                        </g>
                        <path d={svgPaths.p158ecc00} fill="white" id="Vector_31" opacity="0.2" />
                        <path d={svgPaths.pe549a00} fill="white" id="Vector_32" opacity="0.2" />
                      </g>
                      <g id="Group_6">
                        <path d={svgPaths.p1f13f700} fill="#E8B022" id="Vector_33" />
                        <path d={svgPaths.pc4edd00} fill="white" id="Vector_34" opacity="0.2" />
                        <g id="Group_7">
                          <path d={svgPaths.p9d38e00} fill="white" id="Vector_35" opacity="0.2" />
                          <path d={svgPaths.p2766f030} fill="white" id="Vector_36" opacity="0.2" />
                          <path d={svgPaths.p305dee00} fill="white" id="Vector_37" opacity="0.2" />
                          <path d={svgPaths.p6481880} fill="white" id="Vector_38" opacity="0.2" />
                          <path d={svgPaths.p39639c40} fill="white" id="Vector_39" opacity="0.2" />
                          <path d={svgPaths.p3b523600} fill="white" id="Vector_40" opacity="0.2" />
                          <path d={svgPaths.p37b33e00} fill="white" id="Vector_41" opacity="0.2" />
                          <path d={svgPaths.p309ac780} fill="white" id="Vector_42" opacity="0.2" />
                          <path d={svgPaths.p1d3c2d00} fill="white" id="Vector_43" opacity="0.2" />
                          <path d={svgPaths.p1a0bd100} fill="white" id="Vector_44" opacity="0.2" />
                          <path d={svgPaths.p11f00280} fill="white" id="Vector_45" opacity="0.2" />
                          <path d={svgPaths.p22182200} fill="white" id="Vector_46" opacity="0.2" />
                        </g>
                        <path d={svgPaths.pcaa2f00} fill="white" id="Vector_47" opacity="0.2" />
                        <path d={svgPaths.p33adb900} fill="white" id="Vector_48" opacity="0.2" />
                      </g>
                      <g id="Group_8">
                        <path d={svgPaths.p3d169900} fill="#E8B022" id="Vector_49" />
                        <path d={svgPaths.p35a78f80} fill="white" id="Vector_50" opacity="0.2" />
                        <g id="Group_9">
                          <path d={svgPaths.pbabd400} fill="white" id="Vector_51" opacity="0.2" />
                          <path d={svgPaths.pe30e180} fill="white" id="Vector_52" opacity="0.2" />
                          <path d={svgPaths.p26f93c00} fill="white" id="Vector_53" opacity="0.2" />
                          <path d={svgPaths.p386ecc80} fill="white" id="Vector_54" opacity="0.2" />
                          <path d={svgPaths.p1669da80} fill="white" id="Vector_55" opacity="0.2" />
                          <path d={svgPaths.p361cd700} fill="white" id="Vector_56" opacity="0.2" />
                          <path d={svgPaths.p2616cd00} fill="white" id="Vector_57" opacity="0.2" />
                          <path d={svgPaths.p36ccd880} fill="white" id="Vector_58" opacity="0.2" />
                          <path d={svgPaths.p1ccee9e0} fill="white" id="Vector_59" opacity="0.2" />
                          <path d={svgPaths.pd448400} fill="white" id="Vector_60" opacity="0.2" />
                          <path d={svgPaths.p103fe010} fill="white" id="Vector_61" opacity="0.2" />
                          <path d={svgPaths.p364acf00} fill="white" id="Vector_62" opacity="0.2" />
                        </g>
                        <path d={svgPaths.p1242baf0} fill="white" id="Vector_63" opacity="0.2" />
                        <path d={svgPaths.p3e292400} fill="white" id="Vector_64" opacity="0.2" />
                      </g>
                      <g id="Group_10">
                        <path d={svgPaths.p23a88f00} fill="#E8B022" id="Vector_65" />
                        <path d={svgPaths.pefd4020} fill="white" id="Vector_66" opacity="0.2" />
                        <g id="Group_11">
                          <path d={svgPaths.p26a82f00} fill="white" id="Vector_67" opacity="0.2" />
                          <path d={svgPaths.p20845080} fill="white" id="Vector_68" opacity="0.2" />
                          <path d={svgPaths.pd4c3000} fill="white" id="Vector_69" opacity="0.2" />
                          <path d={svgPaths.pb8c700} fill="white" id="Vector_70" opacity="0.2" />
                          <path d={svgPaths.p22f6b800} fill="white" id="Vector_71" opacity="0.2" />
                          <path d={svgPaths.p20a0bc00} fill="white" id="Vector_72" opacity="0.2" />
                          <path d={svgPaths.p2599d700} fill="white" id="Vector_73" opacity="0.2" />
                          <path d={svgPaths.p15a00200} fill="white" id="Vector_74" opacity="0.2" />
                          <path d={svgPaths.p171e6900} fill="white" id="Vector_75" opacity="0.2" />
                          <path d={svgPaths.p12e6ab00} fill="white" id="Vector_76" opacity="0.2" />
                          <path d={svgPaths.pe388c80} fill="white" id="Vector_77" opacity="0.2" />
                          <path d={svgPaths.pc94a00} fill="white" id="Vector_78" opacity="0.2" />
                        </g>
                        <path d={svgPaths.p3beb6800} fill="white" id="Vector_79" opacity="0.2" />
                        <path d={svgPaths.p26b0b880} fill="white" id="Vector_80" opacity="0.2" />
                      </g>
                      <g id="Group_12">
                        <path d={svgPaths.p3e3e5700} fill="#E8B022" id="Vector_81" />
                        <path d={svgPaths.p10b38680} fill="white" id="Vector_82" opacity="0.2" />
                        <g id="Group_13">
                          <path d={svgPaths.p10272e00} fill="white" id="Vector_83" opacity="0.2" />
                          <path d={svgPaths.p361a0200} fill="white" id="Vector_84" opacity="0.2" />
                          <path d={svgPaths.pe11d880} fill="white" id="Vector_85" opacity="0.2" />
                          <path d={svgPaths.p3755f00} fill="white" id="Vector_86" opacity="0.2" />
                          <path d={svgPaths.p9b29a00} fill="white" id="Vector_87" opacity="0.2" />
                          <path d={svgPaths.pe9ea100} fill="white" id="Vector_88" opacity="0.2" />
                          <path d={svgPaths.p28202600} fill="white" id="Vector_89" opacity="0.2" />
                          <path d={svgPaths.pa671280} fill="white" id="Vector_90" opacity="0.2" />
                          <path d={svgPaths.p2201ac80} fill="white" id="Vector_91" opacity="0.2" />
                          <path d={svgPaths.p3e121500} fill="white" id="Vector_92" opacity="0.2" />
                          <path d={svgPaths.pdfa5080} fill="white" id="Vector_93" opacity="0.2" />
                          <path d={svgPaths.p20a05c00} fill="white" id="Vector_94" opacity="0.2" />
                        </g>
                        <path d={svgPaths.p169d1540} fill="white" id="Vector_95" opacity="0.2" />
                        <path d={svgPaths.p16431b80} fill="white" id="Vector_96" opacity="0.2" />
                      </g>
                      <g id="Group_14">
                        <path d={svgPaths.p11ac9800} fill="#E8B022" id="Vector_97" />
                        <path d={svgPaths.p36ca600} fill="white" id="Vector_98" opacity="0.2" />
                        <g id="Group_15">
                          <path d={svgPaths.p2f437080} fill="white" id="Vector_99" opacity="0.2" />
                          <path d={svgPaths.p85c9680} fill="white" id="Vector_100" opacity="0.2" />
                          <path d={svgPaths.p2383c100} fill="white" id="Vector_101" opacity="0.2" />
                          <path d={svgPaths.p318bd3b0} fill="white" id="Vector_102" opacity="0.2" />
                          <path d={svgPaths.p2c2c5e80} fill="white" id="Vector_103" opacity="0.2" />
                          <path d={svgPaths.p23d16500} fill="white" id="Vector_104" opacity="0.2" />
                          <path d={svgPaths.pba48000} fill="white" id="Vector_105" opacity="0.2" />
                          <path d={svgPaths.p15f51800} fill="white" id="Vector_106" opacity="0.2" />
                          <path d={svgPaths.p3dd6bbc0} fill="white" id="Vector_107" opacity="0.2" />
                          <path d={svgPaths.p2927cf0} fill="white" id="Vector_108" opacity="0.2" />
                          <path d={svgPaths.p2631cb00} fill="white" id="Vector_109" opacity="0.2" />
                          <path d={svgPaths.p8bef400} fill="white" id="Vector_110" opacity="0.2" />
                        </g>
                        <path d={svgPaths.p12334000} fill="white" id="Vector_111" opacity="0.2" />
                        <path d={svgPaths.p5ec3d80} fill="white" id="Vector_112" opacity="0.2" />
                      </g>
                      <path d={svgPaths.p1468d900} fill="white" id="Vector_113" opacity="0.2" />
                      <g id="Group_16">
                        <path d={svgPaths.p388d7000} fill="white" id="Vector_114" opacity="0.2" />
                        <path d={svgPaths.p244de600} fill="white" id="Vector_115" opacity="0.2" />
                        <path d={svgPaths.p2ba76c00} fill="white" id="Vector_116" opacity="0.2" />
                        <path d={svgPaths.p2b205800} fill="white" id="Vector_117" opacity="0.2" />
                        <path d={svgPaths.p2a87f800} fill="white" id="Vector_118" opacity="0.2" />
                        <path d={svgPaths.p18416080} fill="white" id="Vector_119" opacity="0.2" />
                        <path d={svgPaths.p22b4dd00} fill="white" id="Vector_120" opacity="0.2" />
                        <path d={svgPaths.p39f3d0f0} fill="white" id="Vector_121" opacity="0.2" />
                      </g>
                    </g>
                  </svg>
                )}
              </div>
            </>
          )}
          {isMoocaWalletNotEnough && (
            <>
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletNotEnoughAndM ? "left-[calc(50%+4.32px)] top-[calc(50%-2.65px)]" : isMoocaWalletNotEnoughAndXs ? "left-[calc(50%+2.48px)] top-[calc(50%-1.27px)]" : isMoocaWalletNotEnoughAndS ? "left-[calc(50%+3.38px)] top-[calc(50%-1.75px)]" : "left-[calc(50%+5.5px)] top-[calc(50%-3.36px)]"}`}>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletNotEnoughAndM ? "left-[calc(50%+4.32px)] top-[calc(50%-2.65px)]" : isMoocaWalletNotEnoughAndXs ? "left-[calc(50%+2.48px)] top-[calc(50%-1.27px)]" : isMoocaWalletNotEnoughAndS ? "left-[calc(50%+3.38px)] top-[calc(50%-1.75px)]" : "left-[calc(50%+5.5px)] top-[calc(50%-3.36px)]"}`} data-name="Group">
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[46.22px] left-[calc(50%+4.81px)] top-[calc(50%+39.15px)] w-[46.11px]" : isMoocaWalletNotEnoughAndXs ? "h-[29.163px] left-[calc(50%+2.79px)] top-[calc(50%+25.11px)] w-[29.094px]" : isMoocaWalletNotEnoughAndS ? "h-[38.374px] left-[calc(50%+3.78px)] top-[calc(50%+32.96px)] w-[38.283px]" : "h-[58.804px] left-[calc(50%+6.12px)] top-[calc(50%+49.82px)] w-[58.664px]"}`} data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "46.2202" : isMoocaWalletNotEnoughAndXs ? "29.1631" : isMoocaWalletNotEnoughAndS ? "38.3739" : "58.8037"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 46.1103 46.2202" : isMoocaWalletNotEnoughAndXs ? "0 0 29.0937 29.1631" : isMoocaWalletNotEnoughAndS ? "0 0 38.2826 38.3739" : "0 0 58.6638 58.8037"} width={isMoocaWalletNotEnoughAndM ? "46.1103" : isMoocaWalletNotEnoughAndXs ? "29.0937" : isMoocaWalletNotEnoughAndS ? "38.2826" : "58.6638"}>
                      <g id="Group">
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p2bde2e00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p12aac600 : isMoocaWalletNotEnoughAndS ? svgPaths.p3ffd6800 : svgPaths.p210933e0} fill="#E3E4F3" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[7.091px] left-[calc(50%+4.73px)] top-[calc(50%+50.12px)] w-[25.635px]" : isMoocaWalletNotEnoughAndXs ? "h-[4.474px] left-[calc(50%+2.74px)] top-[calc(50%+32.03px)] w-[16.175px]" : isMoocaWalletNotEnoughAndS ? "h-[5.887px] left-[calc(50%+3.72px)] top-[calc(50%+42.07px)] w-[21.283px]" : "h-[9.021px] left-[calc(50%+6.02px)] top-[calc(50%+63.78px)] w-[32.614px]"}`} data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "7.09059" : isMoocaWalletNotEnoughAndXs ? "4.47388" : isMoocaWalletNotEnoughAndS ? "5.8869" : "9.02102"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 25.635 7.09059" : isMoocaWalletNotEnoughAndXs ? "0 0 16.1749 4.47388" : isMoocaWalletNotEnoughAndS ? "0 0 21.2826 5.8869" : "0 0 32.614 9.02102"} width={isMoocaWalletNotEnoughAndM ? "25.635" : isMoocaWalletNotEnoughAndXs ? "16.1749" : isMoocaWalletNotEnoughAndS ? "21.2826" : "32.614"}>
                      <g id="Group">
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p5bec400 : isMoocaWalletNotEnoughAndXs ? svgPaths.p19fd4200 : isMoocaWalletNotEnoughAndS ? svgPaths.p9a28e80 : svgPaths.p3c998680} fill="#B5BBDF" id="Vector" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p9dd2700 : isMoocaWalletNotEnoughAndXs ? svgPaths.p18018100 : isMoocaWalletNotEnoughAndS ? svgPaths.p27980500 : svgPaths.p401e600} fill="#B5BBDF" id="Vector_2" />
                      </g>
                    </svg>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[18.409px] left-[calc(50%+1.17px)] top-[calc(50%+35.08px)] w-[38.821px]" : isMoocaWalletNotEnoughAndXs ? "h-[11.616px] left-[calc(50%+0.5px)] top-[calc(50%+22.54px)] w-[24.495px]" : isMoocaWalletNotEnoughAndS ? "h-[15.284px] left-[calc(50%+0.76px)] top-[calc(50%+29.59px)] w-[32.231px]" : "h-[23.421px] left-[calc(50%+1.49px)] top-[calc(50%+44.65px)] w-[49.391px]"}`} data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "18.4094" : isMoocaWalletNotEnoughAndXs ? "11.6156" : isMoocaWalletNotEnoughAndS ? "15.2843" : "23.4214"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 38.8215 18.4094" : isMoocaWalletNotEnoughAndXs ? "0 0 24.4948 11.6156" : isMoocaWalletNotEnoughAndS ? "0 0 32.2312 15.2843" : "0 0 49.3907 23.4214"} width={isMoocaWalletNotEnoughAndM ? "38.8215" : isMoocaWalletNotEnoughAndXs ? "24.4948" : isMoocaWalletNotEnoughAndS ? "32.2312" : "49.3907"}>
                      <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1bce1cd0 : isMoocaWalletNotEnoughAndXs ? svgPaths.p3c09df80 : isMoocaWalletNotEnoughAndS ? svgPaths.p34f310c0 : svgPaths.p1effb070} fill="#B5BBDF" id="Vector" />
                    </svg>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletNotEnoughAndM ? "left-[calc(50%+4.8px)] top-[calc(50%+39.12px)]" : isMoocaWalletNotEnoughAndXs ? "left-[calc(50%+2.78px)] top-[calc(50%+25.09px)]" : isMoocaWalletNotEnoughAndS ? "left-[calc(50%+3.77px)] top-[calc(50%+32.94px)]" : "left-[calc(50%+6.11px)] top-[calc(50%+49.79px)]"}`} data-name="Group">
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[47.136px] left-[calc(50%+4.8px)] top-[calc(50%+39.12px)] w-[48.325px]" : isMoocaWalletNotEnoughAndXs ? "h-[29.741px] left-[calc(50%+2.78px)] top-[calc(50%+25.09px)] w-[30.491px]" : isMoocaWalletNotEnoughAndS ? "h-[39.134px] left-[calc(50%+3.77px)] top-[calc(50%+32.94px)] w-[40.122px]" : "h-[59.969px] left-[calc(50%+6.11px)] top-[calc(50%+49.79px)] w-[61.482px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "47.1357" : isMoocaWalletNotEnoughAndXs ? "29.7408" : isMoocaWalletNotEnoughAndS ? "39.134" : "59.9685"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 48.3255 47.1357" : isMoocaWalletNotEnoughAndXs ? "0 0 30.4914 29.7408" : isMoocaWalletNotEnoughAndS ? "0 0 40.1218 39.134" : "0 0 61.4821 59.9685"} width={isMoocaWalletNotEnoughAndM ? "48.3255" : isMoocaWalletNotEnoughAndXs ? "30.4914" : isMoocaWalletNotEnoughAndS ? "40.1218" : "61.4821"}>
                        <g id="Group">
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p34cef700 : isMoocaWalletNotEnoughAndXs ? svgPaths.p2ae30800 : isMoocaWalletNotEnoughAndS ? svgPaths.p2a5fe300 : svgPaths.p1eaad400} fill="#B5BBDF" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletNotEnoughAndM ? "left-[calc(50%-13.76px)] top-[calc(50%+32.58px)]" : isMoocaWalletNotEnoughAndXs ? "left-[calc(50%-8.92px)] top-[calc(50%+20.96px)]" : isMoocaWalletNotEnoughAndS ? "left-[calc(50%-11.63px)] top-[calc(50%+27.5px)]" : "left-[calc(50%-17.5px)] top-[calc(50%+41.46px)]"}`} data-name="Group">
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[24.037px] left-[calc(50%-13.76px)] top-[calc(50%+32.58px)] w-[15.803px]" : isMoocaWalletNotEnoughAndXs ? "h-[15.166px] left-[calc(50%-8.92px)] top-[calc(50%+20.96px)] w-[9.971px]" : isMoocaWalletNotEnoughAndS ? "h-[19.956px] left-[calc(50%-11.63px)] top-[calc(50%+27.5px)] w-[13.12px]" : "h-[30.581px] left-[calc(50%-17.5px)] top-[calc(50%+41.46px)] w-[20.105px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "24.0369" : isMoocaWalletNotEnoughAndXs ? "15.1664" : isMoocaWalletNotEnoughAndS ? "19.9565" : "30.581"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 15.8026 24.0369" : isMoocaWalletNotEnoughAndXs ? "0 0 9.97083 15.1664" : isMoocaWalletNotEnoughAndS ? "0 0 13.12 19.9565" : "0 0 20.1049 30.581"} width={isMoocaWalletNotEnoughAndM ? "15.8026" : isMoocaWalletNotEnoughAndXs ? "9.97083" : isMoocaWalletNotEnoughAndS ? "13.12" : "20.1049"}>
                        <g id="Group">
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1e80d380 : isMoocaWalletNotEnoughAndXs ? svgPaths.p2c4c5c00 : isMoocaWalletNotEnoughAndS ? svgPaths.p2529cef0 : svgPaths.p3cee8b70} fill="#E3E4F3" id="Vector" />
                          <g id="Group_2">
                            <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p2f66100 : isMoocaWalletNotEnoughAndXs ? svgPaths.p67f3b00 : isMoocaWalletNotEnoughAndS ? svgPaths.p3d8e7c00 : svgPaths.p1e9be180} fill="#B5BBDF" id="Vector_2" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletNotEnoughAndM ? "left-[calc(50%+16.6px)] top-[calc(50%+33.21px)]" : isMoocaWalletNotEnoughAndXs ? "left-[calc(50%+10.23px)] top-[calc(50%+21.36px)]" : isMoocaWalletNotEnoughAndS ? "left-[calc(50%+13.57px)] top-[calc(50%+28.03px)]" : "left-[calc(50%+21.12px)] top-[calc(50%+42.26px)]"}`} data-name="Group">
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[23.254px] left-[calc(50%+16.6px)] top-[calc(50%+33.21px)] w-[15.766px]" : isMoocaWalletNotEnoughAndXs ? "h-[14.672px] left-[calc(50%+10.23px)] top-[calc(50%+21.36px)] w-[9.948px]" : isMoocaWalletNotEnoughAndS ? "h-[19.306px] left-[calc(50%+13.57px)] top-[calc(50%+28.03px)] w-[13.09px]" : "h-[29.585px] left-[calc(50%+21.12px)] top-[calc(50%+42.26px)] w-[20.058px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "23.254" : isMoocaWalletNotEnoughAndXs ? "14.6723" : isMoocaWalletNotEnoughAndS ? "19.3064" : "29.5849"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 15.7661 23.254" : isMoocaWalletNotEnoughAndXs ? "0 0 9.94776 14.6723" : isMoocaWalletNotEnoughAndS ? "0 0 13.0896 19.3064" : "0 0 20.0584 29.5849"} width={isMoocaWalletNotEnoughAndM ? "15.7661" : isMoocaWalletNotEnoughAndXs ? "9.94776" : isMoocaWalletNotEnoughAndS ? "13.0896" : "20.0584"}>
                        <g id="Group">
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1ed5900 : isMoocaWalletNotEnoughAndXs ? svgPaths.p1e49b400 : isMoocaWalletNotEnoughAndS ? svgPaths.p2bb5d480 : svgPaths.p36aec100} fill="#E3E4F3" id="Vector" />
                          <g id="Group_2">
                            <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p2d850800 : isMoocaWalletNotEnoughAndXs ? svgPaths.p3639f200 : isMoocaWalletNotEnoughAndS ? svgPaths.p1a246b00 : svgPaths.pd6cecc0} fill="#B5BBDF" id="Vector_2" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[30.135px] left-[calc(50%+5.35px)] top-[calc(50%+26.3px)] w-[58.656px]" : isMoocaWalletNotEnoughAndXs ? "h-[19.014px] left-[calc(50%+3.14px)] top-[calc(50%+17px)] w-[37.009px]" : isMoocaWalletNotEnoughAndS ? "h-[25.019px] left-[calc(50%+4.23px)] top-[calc(50%+22.29px)] w-[48.699px]" : "h-[38.339px] left-[calc(50%+6.81px)] top-[calc(50%+33.47px)] w-[74.625px]"}`} data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "30.1349" : isMoocaWalletNotEnoughAndXs ? "19.0139" : isMoocaWalletNotEnoughAndS ? "25.0192" : "38.3392"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 58.6559 30.1349" : isMoocaWalletNotEnoughAndXs ? "0 0 37.0095 19.0139" : isMoocaWalletNotEnoughAndS ? "0 0 48.6985 25.0192" : "0 0 74.625 38.3392"} width={isMoocaWalletNotEnoughAndM ? "58.6559" : isMoocaWalletNotEnoughAndXs ? "37.0095" : isMoocaWalletNotEnoughAndS ? "48.6985" : "74.625"}>
                      <g id="Group">
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p20426c00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p30a4f200 : isMoocaWalletNotEnoughAndS ? svgPaths.p2ed3be00 : svgPaths.p3803c780} fill="#0055B8" id="Vector" />
                        <g id="Group_2">
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p2d100e00 : isMoocaWalletNotEnoughAndXs ? svgPaths.pe5f8c00 : isMoocaWalletNotEnoughAndS ? svgPaths.p11f36200 : svgPaths.pdec5680} fill="white" id="Vector_2" />
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1b429780 : isMoocaWalletNotEnoughAndXs ? svgPaths.p391bbc80 : isMoocaWalletNotEnoughAndS ? svgPaths.p1f6dc600 : svgPaths.p27baa180} fill="white" id="Vector_3" />
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p56a9f00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p344ea400 : isMoocaWalletNotEnoughAndS ? svgPaths.p1ab27680 : svgPaths.p20af2600} fill="white" id="Vector_4" />
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1f97c000 : isMoocaWalletNotEnoughAndXs ? svgPaths.p1168c000 : isMoocaWalletNotEnoughAndS ? svgPaths.p195b6a80 : svgPaths.p2e1c0a00} fill="white" id="Vector_5" />
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p2f992580 : isMoocaWalletNotEnoughAndXs ? svgPaths.p2fafa680 : isMoocaWalletNotEnoughAndS ? svgPaths.pa9000f2 : svgPaths.pa3c2380} fill="white" id="Vector_6" />
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p17002300 : isMoocaWalletNotEnoughAndXs ? svgPaths.p9014c00 : isMoocaWalletNotEnoughAndS ? svgPaths.p2a04ab00 : svgPaths.p373e8000} fill="white" id="Vector_7" />
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p4231400 : isMoocaWalletNotEnoughAndXs ? svgPaths.p13873dc0 : isMoocaWalletNotEnoughAndS ? svgPaths.p29048d80 : svgPaths.p6052700} fill="white" id="Vector_8" />
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p50a3800 : isMoocaWalletNotEnoughAndXs ? svgPaths.p21b4e1f0 : isMoocaWalletNotEnoughAndS ? svgPaths.p58e4e38 : svgPaths.p1aaef300} fill="white" id="Vector_9" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[84.759px] left-[calc(50%+3.53px)] top-[calc(50%-25.02px)] w-[133.029px]" : isMoocaWalletNotEnoughAndXs ? "h-[53.479px] left-[calc(50%+1.98px)] top-[calc(50%-15.38px)] w-[83.936px]" : isMoocaWalletNotEnoughAndS ? "h-[70.37px] left-[calc(50%+2.71px)] top-[calc(50%-20.32px)] w-[110.446px]" : "h-[107.835px] left-[calc(50%+4.49px)] top-[calc(50%-31.82px)] w-[169.246px]"}`} data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "84.7589" : isMoocaWalletNotEnoughAndXs ? "53.4794" : isMoocaWalletNotEnoughAndS ? "70.3703" : "107.835"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 133.029 84.7589" : isMoocaWalletNotEnoughAndXs ? "0 0 83.9358 53.4794" : isMoocaWalletNotEnoughAndS ? "0 0 110.446 70.3703" : "0 0 169.246 107.835"} width={isMoocaWalletNotEnoughAndM ? "133.029" : isMoocaWalletNotEnoughAndXs ? "83.9358" : isMoocaWalletNotEnoughAndS ? "110.446" : "169.246"}>
                      <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p25bc9c00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p17f2d980 : isMoocaWalletNotEnoughAndS ? svgPaths.p1a498f00 : svgPaths.p1aa2e600} fill="#CBCFE9" id="Vector" />
                    </svg>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[13.9px] left-[calc(50%+1.96px)] top-[calc(50%-4.33px)] w-[67.662px]" : isMoocaWalletNotEnoughAndXs ? "h-[8.77px] left-[calc(50%+1px)] top-[calc(50%-2.33px)] w-[42.693px]" : isMoocaWalletNotEnoughAndS ? "h-[11.54px] left-[calc(50%+1.42px)] top-[calc(50%-3.14px)] w-[56.177px]" : "h-[17.684px] left-[calc(50%+2.5px)] top-[calc(50%-5.5px)] w-[86.083px]"}`} data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "13.8996" : isMoocaWalletNotEnoughAndXs ? "8.77033" : isMoocaWalletNotEnoughAndS ? "11.5402" : "17.6838"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 67.662 13.8996" : isMoocaWalletNotEnoughAndXs ? "0 0 42.6928 8.77033" : isMoocaWalletNotEnoughAndS ? "0 0 56.1764 11.5402" : "0 0 86.083 17.6838"} width={isMoocaWalletNotEnoughAndM ? "67.662" : isMoocaWalletNotEnoughAndXs ? "42.6928" : isMoocaWalletNotEnoughAndS ? "56.1764" : "86.083"}>
                      <g id="Group">
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p237fa780 : isMoocaWalletNotEnoughAndXs ? svgPaths.p719a880 : isMoocaWalletNotEnoughAndS ? svgPaths.p36665300 : svgPaths.p364c300} fill="#9FA9D6" id="Vector" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p3c8da780 : isMoocaWalletNotEnoughAndXs ? svgPaths.p33c6ff80 : isMoocaWalletNotEnoughAndS ? svgPaths.p3405e900 : svgPaths.p2e09f200} fill="#9FA9D6" id="Vector_2" />
                      </g>
                    </svg>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[48.416px] left-[calc(50%+4.32px)] top-[calc(50%-6.85px)] w-[133.022px]" : isMoocaWalletNotEnoughAndXs ? "h-[30.549px] left-[calc(50%+2.49px)] top-[calc(50%-3.92px)] w-[83.931px]" : isMoocaWalletNotEnoughAndS ? "h-[40.197px] left-[calc(50%+3.38px)] top-[calc(50%-5.23px)] w-[110.44px]" : "h-[61.597px] left-[calc(50%+5.5px)] top-[calc(50%-8.7px)] w-[169.237px]"}`} data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "48.416" : isMoocaWalletNotEnoughAndXs ? "30.5485" : isMoocaWalletNotEnoughAndS ? "40.1969" : "61.5973"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 133.022 48.416" : isMoocaWalletNotEnoughAndXs ? "0 0 83.9313 30.5485" : isMoocaWalletNotEnoughAndS ? "0 0 110.44 40.1969" : "0 0 169.237 61.5973"} width={isMoocaWalletNotEnoughAndM ? "133.022" : isMoocaWalletNotEnoughAndXs ? "83.9313" : isMoocaWalletNotEnoughAndS ? "110.44" : "169.237"}>
                      <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1eb20500 : isMoocaWalletNotEnoughAndXs ? svgPaths.pcb13880 : isMoocaWalletNotEnoughAndS ? svgPaths.p189df180 : svgPaths.pb628d00} fill="#B5BBDF" id="Vector" />
                    </svg>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletNotEnoughAndM ? "left-[calc(50%+4.32px)] top-[calc(50%-25.03px)]" : isMoocaWalletNotEnoughAndXs ? "left-[calc(50%+2.48px)] top-[calc(50%-15.39px)]" : isMoocaWalletNotEnoughAndS ? "left-[calc(50%+3.38px)] top-[calc(50%-20.32px)]" : "left-[calc(50%+5.5px)] top-[calc(50%-31.83px)]"}`} data-name="Group">
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[85.948px] left-[calc(50%+4.32px)] top-[calc(50%-25.03px)] w-[135.192px]" : isMoocaWalletNotEnoughAndXs ? "h-[54.23px] left-[calc(50%+2.48px)] top-[calc(50%-15.39px)] w-[85.3px]" : isMoocaWalletNotEnoughAndS ? "h-[71.357px] left-[calc(50%+3.38px)] top-[calc(50%-20.32px)] w-[112.242px]" : "h-[109.347px] left-[calc(50%+5.5px)] top-[calc(50%-31.83px)] w-[171.998px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "85.9476" : isMoocaWalletNotEnoughAndXs ? "54.2295" : isMoocaWalletNotEnoughAndS ? "71.3573" : "109.347"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 135.192 85.9476" : isMoocaWalletNotEnoughAndXs ? "0 0 85.3005 54.2295" : isMoocaWalletNotEnoughAndS ? "0 0 112.242 71.3573" : "0 0 171.998 109.347"} width={isMoocaWalletNotEnoughAndM ? "135.192" : isMoocaWalletNotEnoughAndXs ? "85.3005" : isMoocaWalletNotEnoughAndS ? "112.242" : "171.998"}>
                        <g id="Group">
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p3b9c4780 : isMoocaWalletNotEnoughAndXs ? svgPaths.p364dd200 : isMoocaWalletNotEnoughAndS ? svgPaths.p30f33500 : svgPaths.p2b0b8b80} fill="#B5BBDF" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[6.558px] left-[calc(50%+18.97px)] top-[calc(50%-15.74px)] w-[6.58px]" : isMoocaWalletNotEnoughAndXs ? "h-[4.138px] left-[calc(50%+11.73px)] top-[calc(50%-9.53px)] w-[4.152px]" : isMoocaWalletNotEnoughAndS ? "h-[5.445px] left-[calc(50%+15.54px)] top-[calc(50%-12.61px)] w-[5.463px]" : "h-[8.343px] left-[calc(50%+24.14px)] top-[calc(50%-20.01px)] w-[8.372px]"}`} data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "6.55804" : isMoocaWalletNotEnoughAndXs ? "4.13786" : isMoocaWalletNotEnoughAndS ? "5.44475" : "8.34347"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 6.58036 6.55804" : isMoocaWalletNotEnoughAndXs ? "0 0 4.15194 4.13786" : isMoocaWalletNotEnoughAndS ? "0 0 5.46329 5.44475" : "0 0 8.37187 8.34347"} width={isMoocaWalletNotEnoughAndM ? "6.58036" : isMoocaWalletNotEnoughAndXs ? "4.15194" : isMoocaWalletNotEnoughAndS ? "5.46329" : "8.37187"}>
                      <path d={isMoocaWalletNotEnoughAndM ? svgPaths.pf45d3e0 : isMoocaWalletNotEnoughAndXs ? svgPaths.p22e902a0 : isMoocaWalletNotEnoughAndS ? svgPaths.p1639c170 : svgPaths.p3340ea98} fill="#1E56A4" id="Vector" />
                    </svg>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[6.872px] left-[calc(50%-15.79px)] top-[calc(50%-15.99px)] w-[6.827px]" : isMoocaWalletNotEnoughAndXs ? "h-[4.336px] left-[calc(50%-10.21px)] top-[calc(50%-9.68px)] w-[4.308px]" : isMoocaWalletNotEnoughAndS ? "h-[5.705px] left-[calc(50%-13.32px)] top-[calc(50%-12.82px)] w-[5.668px]" : "h-[8.742px] left-[calc(50%-20.09px)] top-[calc(50%-20.33px)] w-[8.686px]"}`} data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "6.87152" : isMoocaWalletNotEnoughAndXs ? "4.33566" : isMoocaWalletNotEnoughAndS ? "5.70502" : "8.74231"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 6.8271 6.87152" : isMoocaWalletNotEnoughAndXs ? "0 0 4.30762 4.33566" : isMoocaWalletNotEnoughAndS ? "0 0 5.66814 5.70502" : "0 0 8.68578 8.74231"} width={isMoocaWalletNotEnoughAndM ? "6.8271" : isMoocaWalletNotEnoughAndXs ? "4.30762" : isMoocaWalletNotEnoughAndS ? "5.66814" : "8.68578"}>
                      <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1abf06f0 : isMoocaWalletNotEnoughAndXs ? svgPaths.p1c9ecf60 : isMoocaWalletNotEnoughAndS ? svgPaths.p2fbbbe00 : svgPaths.p1d188a80} fill="#1E56A4" id="Vector" />
                    </svg>
                  </div>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute overflow-clip ${isMoocaWalletNotEnoughAndM ? "h-[5.502px] left-[calc(50%+0.65px)] top-[calc(50%-22.96px)] w-[50.816px]" : isMoocaWalletNotEnoughAndXs ? "h-[3.472px] left-[calc(50%+0.17px)] top-[calc(50%-14.08px)] w-[32.063px]" : isMoocaWalletNotEnoughAndS ? "h-[4.568px] left-[calc(50%+0.33px)] top-[calc(50%-18.61px)] w-[42.189px]" : "h-[7px] left-[calc(50%+0.83px)] top-[calc(50%-29.2px)] w-[64.651px]"}`} data-name="Frame">
                  <div className={`absolute contents ${isMoocaWalletNotEnoughAndM ? "inset-[0.34%_0.01%_-0.04%_80.52%]" : isMoocaWalletNotEnoughAndXs ? "inset-[0.35%_0_-0.06%_80.53%]" : isMoocaWalletNotEnoughAndS ? "inset-[0.34%_0.01%_-0.05%_80.52%]" : "inset-[0.33%_0.01%_-0.03%_80.52%]"}`} data-name="Group">
                    <div className={`absolute ${isMoocaWalletNotEnoughAndM ? "inset-[0.34%_0.01%_-0.04%_80.52%]" : isMoocaWalletNotEnoughAndXs ? "inset-[0.35%_0_-0.06%_80.53%]" : isMoocaWalletNotEnoughAndS ? "inset-[0.34%_0.01%_-0.05%_80.52%]" : "inset-[0.33%_0.01%_-0.03%_80.52%]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "5.48586" : isMoocaWalletNotEnoughAndXs ? "3.46136" : isMoocaWalletNotEnoughAndS ? "4.55459" : "6.97939"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 9.89466 5.48586" : isMoocaWalletNotEnoughAndXs ? "0 0 6.24314 3.46136" : isMoocaWalletNotEnoughAndS ? "0 0 8.21496 4.55459" : "0 0 12.5885 6.97939"} width={isMoocaWalletNotEnoughAndM ? "9.89466" : isMoocaWalletNotEnoughAndXs ? "6.24314" : isMoocaWalletNotEnoughAndS ? "8.21496" : "12.5885"}>
                        <g id="Group">
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p15bac900 : isMoocaWalletNotEnoughAndXs ? svgPaths.p1fb42480 : isMoocaWalletNotEnoughAndS ? svgPaths.pae76300 : svgPaths.p387b6700} fill="#1D56A3" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className={`absolute contents ${isMoocaWalletNotEnoughAndM ? "inset-[0.34%_80.53%_-0.04%_0]" : isMoocaWalletNotEnoughAndXs ? "inset-[0.35%_80.52%_-0.06%_0.01%]" : isMoocaWalletNotEnoughAndS ? "inset-[0.34%_80.52%_-0.05%_0.01%]" : "inset-[0.33%_80.53%_-0.03%_0]"}`} style={{ containerType: "size" }} data-name="Group">
                    <div className={`absolute flex items-center justify-center ${isMoocaWalletNotEnoughAndM ? "inset-[0.34%_80.53%_-0.04%_0]" : isMoocaWalletNotEnoughAndXs ? "inset-[0.35%_80.52%_-0.06%_0.01%]" : isMoocaWalletNotEnoughAndS ? "inset-[0.34%_80.52%_-0.05%_0.01%]" : "inset-[0.33%_80.53%_-0.03%_0]"}`} style={{ containerType: "size" }}>
                      <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                        <div className="relative size-full" data-name="Group">
                          <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "5.48586" : isMoocaWalletNotEnoughAndXs ? "3.46136" : isMoocaWalletNotEnoughAndS ? "4.55459" : "6.97939"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 9.89466 5.48586" : isMoocaWalletNotEnoughAndXs ? "0 0 6.24314 3.46136" : isMoocaWalletNotEnoughAndS ? "0 0 8.21496 4.55459" : "0 0 12.5885 6.97939"} width={isMoocaWalletNotEnoughAndM ? "9.89466" : isMoocaWalletNotEnoughAndXs ? "6.24314" : isMoocaWalletNotEnoughAndS ? "8.21496" : "12.5885"}>
                            <g id="Group">
                              <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p15bac900 : isMoocaWalletNotEnoughAndXs ? svgPaths.p1fb42480 : isMoocaWalletNotEnoughAndS ? svgPaths.pae76300 : svgPaths.p387b6700} fill="#1D56A3" id="Vector" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute overflow-clip ${isMoocaWalletNotEnoughAndM ? "h-[11.979px] left-[calc(50%+3.63px)] top-[calc(50%-6.99px)] w-[19.053px]" : isMoocaWalletNotEnoughAndXs ? "h-[7.558px] left-[calc(50%+2.05px)] top-[calc(50%-4px)] w-[12.022px]" : isMoocaWalletNotEnoughAndS ? "h-[9.945px] left-[calc(50%+2.8px)] top-[calc(50%-5.35px)] w-[15.818px]" : "h-[15.24px] left-[calc(50%+4.62px)] top-[calc(50%-8.88px)] w-[24.24px]"}`} data-name="Frame">
                  <div className={`absolute contents ${isMoocaWalletNotEnoughAndM ? "inset-[-0.04%_0.04%_0.05%_74.68%]" : isMoocaWalletNotEnoughAndXs ? "inset-[-0.05%_0.05%_0.06%_74.67%]" : isMoocaWalletNotEnoughAndS ? "inset-[-0.04%_0.03%_0.05%_74.69%]" : "inset-[-0.04%_0.05%_0.05%_74.67%]"}`} data-name="Group">
                    <div className={`absolute ${isMoocaWalletNotEnoughAndM ? "inset-[-0.04%_0.04%_0.05%_74.68%]" : isMoocaWalletNotEnoughAndXs ? "inset-[-0.05%_0.05%_0.06%_74.67%]" : isMoocaWalletNotEnoughAndS ? "inset-[-0.04%_0.03%_0.05%_74.69%]" : "inset-[-0.04%_0.05%_0.05%_74.67%]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "11.9779" : isMoocaWalletNotEnoughAndXs ? "7.55758" : isMoocaWalletNotEnoughAndS ? "9.94455" : "15.2389"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 4.81612 11.9779" : isMoocaWalletNotEnoughAndXs ? "0 0 3.03878 7.55758" : isMoocaWalletNotEnoughAndS ? "0 0 3.99854 9.94455" : "0 0 6.12732 15.2389"} width={isMoocaWalletNotEnoughAndM ? "4.81612" : isMoocaWalletNotEnoughAndXs ? "3.03878" : isMoocaWalletNotEnoughAndS ? "3.99854" : "6.12732"}>
                        <g id="Group">
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p33edf000 : isMoocaWalletNotEnoughAndXs ? svgPaths.p952db80 : isMoocaWalletNotEnoughAndS ? svgPaths.p14c59480 : svgPaths.p2af3e900} fill="#1E56A4" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className={`absolute contents ${isMoocaWalletNotEnoughAndM ? "inset-[47.93%_14.58%_33.11%_0]" : isMoocaWalletNotEnoughAndXs ? "inset-[47.92%_14.59%_33.12%_-0.02%]" : isMoocaWalletNotEnoughAndS ? "inset-[47.92%_14.58%_33.11%_0]" : "inset-[47.93%_14.57%_33.11%_0.01%]"}`} data-name="Group">
                    <div className={`absolute ${isMoocaWalletNotEnoughAndM ? "inset-[47.93%_14.58%_33.11%_0]" : isMoocaWalletNotEnoughAndXs ? "inset-[47.92%_14.59%_33.12%_-0.02%]" : isMoocaWalletNotEnoughAndS ? "inset-[47.92%_14.58%_33.11%_0]" : "inset-[47.93%_14.57%_33.11%_0.01%]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "2.27177" : isMoocaWalletNotEnoughAndXs ? "1.43339" : isMoocaWalletNotEnoughAndS ? "1.88612" : "2.89026"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 16.2752 2.27177" : isMoocaWalletNotEnoughAndXs ? "0 0 10.269 1.43339" : isMoocaWalletNotEnoughAndS ? "0 0 13.5124 1.88612" : "0 0 20.7062 2.89026"} width={isMoocaWalletNotEnoughAndM ? "16.2752" : isMoocaWalletNotEnoughAndXs ? "10.269" : isMoocaWalletNotEnoughAndS ? "13.5124" : "20.7062"}>
                        <g id="Group">
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p324eed80 : isMoocaWalletNotEnoughAndXs ? svgPaths.p6388a00 : isMoocaWalletNotEnoughAndS ? svgPaths.p4539100 : svgPaths.p1c119300} fill="#1E56A4" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletNotEnoughAndM ? "left-[calc(50%+61.35px)] top-[calc(50%+28.22px)]" : isMoocaWalletNotEnoughAndXs ? "left-[calc(50%+38.46px)] top-[calc(50%+18.21px)]" : isMoocaWalletNotEnoughAndS ? "left-[calc(50%+50.72px)] top-[calc(50%+23.89px)]" : "left-[calc(50%+78.05px)] top-[calc(50%+35.92px)]"}`} data-name="Group">
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[57.102px] left-[calc(50%+56.72px)] top-[calc(50%+30.64px)] w-[47.992px]" : isMoocaWalletNotEnoughAndXs ? "h-[36.029px] left-[calc(50%+35.54px)] top-[calc(50%+19.74px)] w-[30.281px]" : isMoocaWalletNotEnoughAndS ? "h-[47.408px] left-[calc(50%+46.88px)] top-[calc(50%+25.9px)] w-[39.845px]" : "h-[72.648px] left-[calc(50%+72.16px)] top-[calc(50%+39px)] w-[61.058px]"}`} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "57.102" : isMoocaWalletNotEnoughAndXs ? "36.0291" : isMoocaWalletNotEnoughAndS ? "47.4084" : "72.6481"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 47.9924 57.102" : isMoocaWalletNotEnoughAndXs ? "0 0 30.2813 36.0291" : isMoocaWalletNotEnoughAndS ? "0 0 39.8452 47.4084" : "0 0 61.0584 72.6481"} width={isMoocaWalletNotEnoughAndM ? "47.9924" : isMoocaWalletNotEnoughAndXs ? "30.2813" : isMoocaWalletNotEnoughAndS ? "39.8452" : "61.0584"}>
                    <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p6a10780 : isMoocaWalletNotEnoughAndXs ? svgPaths.p28eceb00 : isMoocaWalletNotEnoughAndS ? svgPaths.p34023780 : svgPaths.p31620200} fill="#E8B022" id="Vector" />
                  </svg>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[58.133px] left-[calc(50%+54.34px)] top-[calc(50%+30.13px)] w-[43.274px]" : isMoocaWalletNotEnoughAndXs ? "h-[36.679px] left-[calc(50%+34.05px)] top-[calc(50%+19.42px)] w-[27.305px]" : isMoocaWalletNotEnoughAndS ? "h-[48.264px] left-[calc(50%+44.91px)] top-[calc(50%+25.47px)] w-[35.928px]" : "h-[73.959px] left-[calc(50%+69.14px)] top-[calc(50%+38.35px)] w-[55.056px]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "58.1325" : isMoocaWalletNotEnoughAndXs ? "36.6792" : isMoocaWalletNotEnoughAndS ? "48.2641" : "73.9591"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 43.2741 58.1325" : isMoocaWalletNotEnoughAndXs ? "0 0 27.3045 36.6792" : isMoocaWalletNotEnoughAndS ? "0 0 35.9283 48.2641" : "0 0 55.0562 73.9591"} width={isMoocaWalletNotEnoughAndM ? "43.2741" : isMoocaWalletNotEnoughAndXs ? "27.3045" : isMoocaWalletNotEnoughAndS ? "35.9283" : "55.0562"}>
                    <g id="Group">
                      <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1a23b700 : isMoocaWalletNotEnoughAndXs ? svgPaths.p56c5bf0 : isMoocaWalletNotEnoughAndS ? svgPaths.p38808b00 : svgPaths.pa274180} fill="#E8B022" id="Vector" />
                      <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p19100d00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p3e898880 : isMoocaWalletNotEnoughAndS ? svgPaths.p38921600 : svgPaths.p2fcbf70} fill="white" id="Vector_2" opacity="0.2" />
                      <g id="Group_2">
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p3bb294f0 : isMoocaWalletNotEnoughAndXs ? svgPaths.p307ae500 : isMoocaWalletNotEnoughAndS ? svgPaths.p1170c700 : svgPaths.p1bd4d00} fill="white" id="Vector_3" opacity="0.2" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p27f59180 : isMoocaWalletNotEnoughAndXs ? svgPaths.p566dd80 : isMoocaWalletNotEnoughAndS ? svgPaths.p3a222900 : svgPaths.pffd8c00} fill="white" id="Vector_4" opacity="0.2" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p3c80f2c0 : isMoocaWalletNotEnoughAndXs ? svgPaths.p2d782100 : isMoocaWalletNotEnoughAndS ? svgPaths.p1b3ebe80 : svgPaths.p366e5740} fill="white" id="Vector_5" opacity="0.2" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.pb885b80 : isMoocaWalletNotEnoughAndXs ? svgPaths.p32526e80 : isMoocaWalletNotEnoughAndS ? svgPaths.p8f05400 : svgPaths.p1e85780} fill="white" id="Vector_6" opacity="0.2" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.pbed5480 : isMoocaWalletNotEnoughAndXs ? svgPaths.p38f6480 : isMoocaWalletNotEnoughAndS ? svgPaths.p1cebbf80 : svgPaths.p14156c00} fill="white" id="Vector_7" opacity="0.2" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p157a4f80 : isMoocaWalletNotEnoughAndXs ? svgPaths.p24bd5200 : isMoocaWalletNotEnoughAndS ? svgPaths.p3af6b100 : svgPaths.p2364d640} fill="white" id="Vector_8" opacity="0.2" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.pfcdcf00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p34d7ea00 : isMoocaWalletNotEnoughAndS ? svgPaths.p1a09e00 : svgPaths.p3f9e7e00} fill="white" id="Vector_9" opacity="0.2" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p2e1f1800 : isMoocaWalletNotEnoughAndXs ? svgPaths.p7ed6900 : isMoocaWalletNotEnoughAndS ? svgPaths.p38358f80 : svgPaths.p84c9b80} fill="white" id="Vector_10" opacity="0.2" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1b51d380 : isMoocaWalletNotEnoughAndXs ? svgPaths.p1acc9200 : isMoocaWalletNotEnoughAndS ? svgPaths.p2cabd580 : svgPaths.p25892d00} fill="white" id="Vector_11" opacity="0.2" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p2fec7980 : isMoocaWalletNotEnoughAndXs ? svgPaths.p14cd0f00 : isMoocaWalletNotEnoughAndS ? svgPaths.p28d46300 : svgPaths.p659d80} fill="white" id="Vector_12" opacity="0.2" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p34398f80 : isMoocaWalletNotEnoughAndXs ? svgPaths.p34648140 : isMoocaWalletNotEnoughAndS ? svgPaths.p1d128580 : svgPaths.p33711200} fill="white" id="Vector_13" opacity="0.2" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p32b7ac00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p1d06a3b0 : isMoocaWalletNotEnoughAndS ? svgPaths.p5d39c40 : svgPaths.pc926680} fill="white" id="Vector_14" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p16435e00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p6985300 : isMoocaWalletNotEnoughAndS ? svgPaths.p381a900 : svgPaths.p2c8b2780} fill="white" id="Vector_15" opacity="0.2" />
                      <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p3776ef00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p10d07a80 : isMoocaWalletNotEnoughAndS ? svgPaths.p117d2600 : svgPaths.p35274900} fill="white" id="Vector_16" opacity="0.2" />
                      <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p3d516480 : isMoocaWalletNotEnoughAndXs ? svgPaths.p37b64d00 : isMoocaWalletNotEnoughAndS ? svgPaths.p26017a00 : svgPaths.p25f83d80} fill="white" id="Vector_17" opacity="0.2" />
                      <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p32e80c80 : isMoocaWalletNotEnoughAndXs ? svgPaths.p3a773600 : isMoocaWalletNotEnoughAndS ? svgPaths.pce479c0 : svgPaths.p101da040} fill="white" id="Vector_18" opacity="0.2" />
                      <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p4ba6400 : isMoocaWalletNotEnoughAndXs ? svgPaths.p214eef70 : isMoocaWalletNotEnoughAndS ? svgPaths.p3b404100 : svgPaths.p2a142080} fill="white" id="Vector_19" opacity="0.2" />
                      <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p2e01ab80 : isMoocaWalletNotEnoughAndXs ? svgPaths.p7c34e00 : isMoocaWalletNotEnoughAndS ? svgPaths.p34f4de80 : svgPaths.p1d612700} fill="white" id="Vector_20" opacity="0.2" />
                      <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p388a2700 : isMoocaWalletNotEnoughAndXs ? svgPaths.p11190a00 : isMoocaWalletNotEnoughAndS ? svgPaths.p17a3df40 : svgPaths.p22d8b80} fill="white" id="Vector_21" opacity="0.2" />
                      <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p2a59dd00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p36d44a00 : isMoocaWalletNotEnoughAndS ? svgPaths.p222a6500 : svgPaths.p80e4d80} fill="white" id="Vector_22" opacity="0.2" />
                    </g>
                  </svg>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletNotEnoughAndM ? "left-[calc(50%+62.11px)] top-[calc(50%+28px)]" : isMoocaWalletNotEnoughAndXs ? "left-[calc(50%+38.95px)] top-[calc(50%+18.07px)]" : isMoocaWalletNotEnoughAndS ? "left-[calc(50%+51.35px)] top-[calc(50%+23.7px)]" : "left-[calc(50%+79.02px)] top-[calc(50%+35.63px)]"}`} data-name="Group">
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[61.511px] left-[calc(50%+62.11px)] top-[calc(50%+28px)] w-[55.753px]" : isMoocaWalletNotEnoughAndXs ? "h-[38.811px] left-[calc(50%+38.95px)] top-[calc(50%+18.07px)] w-[35.178px]" : isMoocaWalletNotEnoughAndS ? "h-[51.069px] left-[calc(50%+51.35px)] top-[calc(50%+23.7px)] w-[46.288px]" : "h-[78.258px] left-[calc(50%+79.02px)] top-[calc(50%+35.63px)] w-[70.931px]"}`} data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "61.5112" : isMoocaWalletNotEnoughAndXs ? "38.8111" : isMoocaWalletNotEnoughAndS ? "51.0692" : "78.2578"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 55.7527 61.5112" : isMoocaWalletNotEnoughAndXs ? "0 0 35.1777 38.8111" : isMoocaWalletNotEnoughAndS ? "0 0 46.2882 51.0692" : "0 0 70.9314 78.2578"} width={isMoocaWalletNotEnoughAndM ? "55.7527" : isMoocaWalletNotEnoughAndXs ? "35.1777" : isMoocaWalletNotEnoughAndS ? "46.2882" : "70.9314"}>
                      <g id="Group">
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p35fc1800 : isMoocaWalletNotEnoughAndXs ? svgPaths.p35368c00 : isMoocaWalletNotEnoughAndS ? svgPaths.pd5d0a80 : svgPaths.p245e9800} fill="#E8B022" id="Vector" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p26712b80 : isMoocaWalletNotEnoughAndXs ? svgPaths.p21e65e70 : isMoocaWalletNotEnoughAndS ? svgPaths.p3dcc6e00 : svgPaths.p2bb5a980} fill="white" id="Vector_2" opacity="0.2" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p22e55380 : isMoocaWalletNotEnoughAndXs ? svgPaths.p8ffb700 : isMoocaWalletNotEnoughAndS ? svgPaths.p262f5a00 : svgPaths.p145f0200} fill="white" id="Vector_3" opacity="0.2" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p9f76480 : isMoocaWalletNotEnoughAndXs ? svgPaths.p2e5f2900 : isMoocaWalletNotEnoughAndS ? svgPaths.p30e4480 : svgPaths.p29583a00} fill="white" id="Vector_4" opacity="0.2" />
                        <path d={isMoocaWalletNotEnoughAndM ? svgPaths.pb4a1c00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p39e718f2 : isMoocaWalletNotEnoughAndS ? svgPaths.p18657700 : svgPaths.p25c86580} fill="white" id="Vector_5" opacity="0.2" />
                      </g>
                    </svg>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletNotEnoughAndM ? "left-[calc(50%+62.89px)] top-[calc(50%+27.53px)]" : isMoocaWalletNotEnoughAndXs ? "left-[calc(50%+39.44px)] top-[calc(50%+17.78px)]" : isMoocaWalletNotEnoughAndS ? "left-[calc(50%+52px)] top-[calc(50%+23.31px)]" : "left-[calc(50%+80.01px)] top-[calc(50%+35.04px)]"}`} data-name="Group">
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[31.945px] left-[calc(50%+63.37px)] top-[calc(50%+27.53px)] w-[20.365px]" : isMoocaWalletNotEnoughAndXs ? "h-[20.156px] left-[calc(50%+39.74px)] top-[calc(50%+17.78px)] w-[12.85px]" : isMoocaWalletNotEnoughAndS ? "h-[26.522px] left-[calc(50%+52.4px)] top-[calc(50%+23.31px)] w-[16.908px]" : "h-[40.642px] left-[calc(50%+80.62px)] top-[calc(50%+35.04px)] w-[25.91px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "31.9447" : isMoocaWalletNotEnoughAndXs ? "20.1558" : isMoocaWalletNotEnoughAndS ? "26.5218" : "40.6417"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 20.3654 31.9447" : isMoocaWalletNotEnoughAndXs ? "0 0 12.8497 20.1558" : isMoocaWalletNotEnoughAndS ? "0 0 16.9082 26.5218" : "0 0 25.9098 40.6417"} width={isMoocaWalletNotEnoughAndM ? "20.3654" : isMoocaWalletNotEnoughAndXs ? "12.8497" : isMoocaWalletNotEnoughAndS ? "16.9082" : "25.9098"}>
                        <g id="Group" opacity="0.2">
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p17ecba00 : isMoocaWalletNotEnoughAndXs ? svgPaths.p3bbd2c20 : isMoocaWalletNotEnoughAndS ? svgPaths.p307cbb80 : svgPaths.p10be47f0} fill="white" id="Vector" opacity="0.2" />
                        </g>
                      </svg>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[31.248px] left-[calc(50%+62.41px)] top-[calc(50%+27.18px)] w-[20.363px]" : isMoocaWalletNotEnoughAndXs ? "h-[19.716px] left-[calc(50%+39.14px)] top-[calc(50%+17.55px)] w-[12.848px]" : isMoocaWalletNotEnoughAndS ? "h-[25.943px] left-[calc(50%+51.6px)] top-[calc(50%+23.02px)] w-[16.906px]" : "h-[39.755px] left-[calc(50%+79.4px)] top-[calc(50%+34.59px)] w-[25.907px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "31.2479" : isMoocaWalletNotEnoughAndXs ? "19.7162" : isMoocaWalletNotEnoughAndS ? "25.9433" : "39.7552"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 20.3629 31.2479" : isMoocaWalletNotEnoughAndXs ? "0 0 12.8482 19.7162" : isMoocaWalletNotEnoughAndS ? "0 0 16.9061 25.9433" : "0 0 25.9067 39.7552"} width={isMoocaWalletNotEnoughAndM ? "20.3629" : isMoocaWalletNotEnoughAndXs ? "12.8482" : isMoocaWalletNotEnoughAndS ? "16.9061" : "25.9067"}>
                        <g id="Group">
                          <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p37e53400 : isMoocaWalletNotEnoughAndXs ? svgPaths.p32614900 : isMoocaWalletNotEnoughAndS ? svgPaths.p2a2cd100 : svgPaths.p21387800} fill="#E8B022" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletNotEnoughAndM ? "h-[23.077px] left-[calc(50%+62.07px)] top-[calc(50%+10.97px)] w-[43.906px]" : isMoocaWalletNotEnoughAndXs ? "h-[14.561px] left-[calc(50%+38.92px)] top-[calc(50%+7.33px)] w-[27.703px]" : isMoocaWalletNotEnoughAndS ? "h-[19.16px] left-[calc(50%+51.32px)] top-[calc(50%+9.57px)] w-[36.453px]" : "h-[29.36px] left-[calc(50%+78.97px)] top-[calc(50%+13.97px)] w-[55.86px]"}`} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletNotEnoughAndM ? "23.0772" : isMoocaWalletNotEnoughAndXs ? "14.5608" : isMoocaWalletNotEnoughAndS ? "19.1596" : "29.3599"} preserveAspectRatio="none" viewBox={isMoocaWalletNotEnoughAndM ? "0 0 43.9062 23.0772" : isMoocaWalletNotEnoughAndXs ? "0 0 27.703 14.5608" : isMoocaWalletNotEnoughAndS ? "0 0 36.4527 19.1596" : "0 0 55.8597 29.3599"} width={isMoocaWalletNotEnoughAndM ? "43.9062" : isMoocaWalletNotEnoughAndXs ? "27.703" : isMoocaWalletNotEnoughAndS ? "36.4527" : "55.8597"}>
                    <path d={isMoocaWalletNotEnoughAndM ? svgPaths.p1fdd1b80 : isMoocaWalletNotEnoughAndXs ? svgPaths.p35b54000 : isMoocaWalletNotEnoughAndS ? svgPaths.pa8d0d70 : svgPaths.p2a5f9900} fill="white" id="Vector" opacity="0.1" />
                  </svg>
                </div>
              </div>
            </>
          )}
          {isMoocaWalletEnoughAndL && (
            <>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+72.94px)] top-[calc(50%+41.91px)]" data-name="Group">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[72.648px] left-[calc(50%+67.04px)] top-[calc(50%+44.99px)] w-[61.058px]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="72.6481" preserveAspectRatio="none" viewBox="0 0 61.0584 72.6481" width="61.0584">
                    <path d={svgPaths.p31620200} fill="#E8B022" id="Vector" />
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[73.959px] left-[calc(50%+64.03px)] top-[calc(50%+44.35px)] w-[55.056px]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height="73.9591" preserveAspectRatio="none" viewBox="0 0 55.0562 73.9591" width="55.0562">
                    <g id="Group">
                      <path d={svgPaths.pa274180} fill="#E8B022" id="Vector" />
                      <path d={svgPaths.p2fcbf70} fill="white" id="Vector_2" opacity="0.2" />
                      <g id="Group_2">
                        <path d={svgPaths.p1bd4d00} fill="white" id="Vector_3" opacity="0.2" />
                        <path d={svgPaths.pffd8c00} fill="white" id="Vector_4" opacity="0.2" />
                        <path d={svgPaths.p366e5740} fill="white" id="Vector_5" opacity="0.2" />
                        <path d={svgPaths.p1e85780} fill="white" id="Vector_6" opacity="0.2" />
                        <path d={svgPaths.p14156c00} fill="white" id="Vector_7" opacity="0.2" />
                        <path d={svgPaths.p2364d640} fill="white" id="Vector_8" opacity="0.2" />
                        <path d={svgPaths.p3f9e7e00} fill="white" id="Vector_9" opacity="0.2" />
                        <path d={svgPaths.p84c9b80} fill="white" id="Vector_10" opacity="0.2" />
                        <path d={svgPaths.p25892d00} fill="white" id="Vector_11" opacity="0.2" />
                        <path d={svgPaths.p659d80} fill="white" id="Vector_12" opacity="0.2" />
                        <path d={svgPaths.p33711200} fill="white" id="Vector_13" opacity="0.2" />
                        <path d={svgPaths.pc926680} fill="white" id="Vector_14" opacity="0.2" />
                      </g>
                      <path d={svgPaths.p2c8b2780} fill="white" id="Vector_15" opacity="0.2" />
                      <path d={svgPaths.p35274900} fill="white" id="Vector_16" opacity="0.2" />
                      <path d={svgPaths.p25f83d80} fill="white" id="Vector_17" opacity="0.2" />
                      <path d={svgPaths.p101da040} fill="white" id="Vector_18" opacity="0.2" />
                      <path d={svgPaths.p2a142080} fill="white" id="Vector_19" opacity="0.2" />
                      <path d={svgPaths.p1d612700} fill="white" id="Vector_20" opacity="0.2" />
                      <path d={svgPaths.p22d8b80} fill="white" id="Vector_21" opacity="0.2" />
                      <path d={svgPaths.p80e4d80} fill="white" id="Vector_22" opacity="0.2" />
                    </g>
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+73.91px)] top-[calc(50%+41.63px)]" data-name="Group">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[78.258px] left-[calc(50%+73.91px)] top-[calc(50%+41.63px)] w-[70.931px]" data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height="78.2578" preserveAspectRatio="none" viewBox="0 0 70.9314 78.2578" width="70.9314">
                      <g id="Group">
                        <path d={svgPaths.p245e9800} fill="#E8B022" id="Vector" />
                        <path d={svgPaths.p2bb5a980} fill="white" id="Vector_2" opacity="0.2" />
                        <path d={svgPaths.p145f0200} fill="white" id="Vector_3" opacity="0.2" />
                        <path d={svgPaths.p29583a00} fill="white" id="Vector_4" opacity="0.2" />
                        <path d={svgPaths.p25c86580} fill="white" id="Vector_5" opacity="0.2" />
                      </g>
                    </svg>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+74.9px)] top-[calc(50%+41.03px)]" data-name="Group">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[40.642px] left-[calc(50%+75.51px)] top-[calc(50%+41.04px)] w-[25.91px]" data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height="40.6417" preserveAspectRatio="none" viewBox="0 0 25.9098 40.6417" width="25.9098">
                        <g id="Group" opacity="0.2">
                          <path d={svgPaths.p10be47f0} fill="white" id="Vector" opacity="0.2" />
                        </g>
                      </svg>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[39.755px] left-[calc(50%+74.29px)] top-[calc(50%+40.59px)] w-[25.907px]" data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height="39.7552" preserveAspectRatio="none" viewBox="0 0 25.9067 39.7552" width="25.9067">
                        <g id="Group">
                          <path d={svgPaths.p21387800} fill="#E8B022" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[29.36px] left-[calc(50%+73.85px)] top-[calc(50%+19.97px)] w-[55.86px]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="29.3599" preserveAspectRatio="none" viewBox="0 0 55.8597 29.3599" width="55.8597">
                    <path d={svgPaths.p2a5f9900} fill="white" id="Vector" opacity="0.1" />
                  </svg>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[62.47px] left-[calc(50%+5.1px)] top-[calc(50%+31.56px)] w-[65.374px]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="62.4704" preserveAspectRatio="none" viewBox="0 0 65.3744 62.4704" width="65.3744">
                  <path d={svgPaths.p29034d00} fill="white" id="Vector" opacity="0.15" />
                </svg>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+2.55px)] top-[calc(50%-4.32px)]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[172.363px] left-[calc(50%+2.55px)] top-[calc(50%-4.32px)] w-[174.101px]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height="172.363" preserveAspectRatio="none" viewBox="0 0 174.101 172.363" width="174.101">
                    <g id="Group">
                      <g id="Group_2">
                        <path d={svgPaths.p137f8300} fill="white" id="Vector" />
                        <g id="Group_3">
                          <path d={svgPaths.p320cac00} fill="#D2DEED" id="Vector_2" />
                        </g>
                      </g>
                      <path d={svgPaths.pb1b4c00} fill="#D2DEED" id="Vector_3" />
                      <g id="Group_4">
                        <path d={svgPaths.p820dd00} fill="#D2DEED" id="Vector_4" />
                      </g>
                      <g id="Group_5">
                        <path d={svgPaths.p3aa72470} fill="#D2DEED" id="Vector_5" />
                      </g>
                      <g id="Group_6">
                        <path d={svgPaths.p36b8e0c0} fill="white" id="Vector_6" />
                        <g id="Group_7">
                          <path d={svgPaths.p33d00940} fill="#D2DEED" id="Vector_7" />
                        </g>
                      </g>
                      <g id="Group_8">
                        <path d={svgPaths.p1f4a9c80} fill="#EFF2F8" id="Vector_8" />
                        <path d={svgPaths.p32ef68f0} fill="#EFF2F8" id="Vector_9" />
                      </g>
                      <path d={svgPaths.p319fdc00} fill="#D2DEED" id="Vector_10" />
                    </g>
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[6.105px] left-[calc(50%+40.38px)] top-[calc(50%-36.35px)] w-[12.582px]" data-name="Vector">
                  <div className="absolute inset-[-4.09%_-1.99%]">
                    <svg className="block size-full" fill="none" height="6.60543" preserveAspectRatio="none" viewBox="0 0 13.0819 6.60543" width="13.0819">
                      <path d={svgPaths.p1cad9280} fill="#2359A8" id="Vector" stroke="#2359A8" strokeWidth="0.5" />
                    </svg>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[6.103px] left-[calc(50%-6.66px)] top-[calc(50%-34.27px)] w-[12.582px]" data-name="Vector">
                  <div className="absolute inset-[-4.1%_-1.99%]">
                    <svg className="block size-full" fill="none" height="6.60293" preserveAspectRatio="none" viewBox="0 0 13.0819 6.60293" width="13.0819">
                      <path d={svgPaths.p34c486f0} fill="#2359A8" id="Vector" stroke="#2359A8" strokeWidth="0.5" />
                    </svg>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.647px] left-[calc(50%+17.89px)] top-[calc(50%-20.83px)] w-[11.866px]" data-name="Vector">
                  <div className="absolute inset-[-6.17%_-8.43%_-6.01%_-8.43%]">
                    <svg className="block size-full" fill="none" height="18.6746" preserveAspectRatio="none" viewBox="0 0 13.8663 18.6746" width="13.8663">
                      <path d={svgPaths.p173e5980} id="Vector" stroke="#2359A8" strokeMiterlimit="10" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute contents h-[38.36px] left-[calc(50%+7.31px)] top-[calc(50%+30.89px)] w-[69.299px]">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[38.36px] items-center justify-center left-[calc(50%+7.31px)] top-[calc(50%+30.89px)] w-[69.299px]">
                    <div className="flex-none rotate-[-3.15deg]">
                      <div className="h-[34.701px] relative w-[67.493px]" data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height="34.701" preserveAspectRatio="none" viewBox="0 0 67.4932 34.701" width="67.4932">
                          <g id="Group">
                            <path d={svgPaths.p221ccc00} fill="#0055B8" id="Vector" />
                            <g id="Group_2">
                              <path d={svgPaths.p30836380} fill="white" id="Vector_2" />
                              <path d={svgPaths.p27a85700} fill="white" id="Vector_3" />
                              <path d={svgPaths.p2d6f4000} fill="white" id="Vector_4" />
                              <path d={svgPaths.p1c712300} fill="white" id="Vector_5" />
                              <path d={svgPaths.p197c2c00} fill="white" id="Vector_6" />
                              <path d={svgPaths.p181cdf80} fill="white" id="Vector_7" />
                              <path d={svgPaths.p382e6370} fill="white" id="Vector_8" />
                              <path d={svgPaths.p18c10280} fill="white" id="Vector_9" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[46.091px] items-center justify-center left-[calc(50%-21.4px)] top-[calc(50%+33.93px)] w-[49.272px]">
                  <div className="flex-none rotate-[22.52deg]">
                    <div className="h-[33.547px] relative w-[39.43px]" data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height="33.5474" preserveAspectRatio="none" viewBox="0 0 39.4303 33.5474" width="39.4303">
                        <g id="Group">
                          <path d={svgPaths.p12f9ae00} fill="white" id="Vector" />
                          <g id="Group_2">
                            <path d={svgPaths.p1e837700} fill="#D2DEED" id="Vector_2" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+33.75px)] top-[calc(50%+18.82px)]" data-name="Group">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+33.75px)] top-[calc(50%+18.82px)]" data-name="Group">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[29.115px] left-[calc(50%+33.75px)] top-[calc(50%+18.82px)] w-[21.93px]" data-name="Group">
                      <div className="absolute inset-[-2.58%_-3.42%]">
                        <svg className="block size-full" fill="none" height="30.6151" preserveAspectRatio="none" viewBox="0 0 23.4297 30.6151" width="23.4297">
                          <g id="Group">
                            <path d={svgPaths.p4fe4d00} fill="white" id="Vector" stroke="#D2DEED" strokeMiterlimit="10" strokeWidth="1.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+21.3px)] top-[calc(50%+5.41px)]" data-name="Group">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18.604px] left-[calc(50%-3.23px)] top-[calc(50%-51.99px)] w-[18.597px]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height="18.6036" preserveAspectRatio="none" viewBox="0 0 18.5966 18.6036" width="18.5966">
                    <g id="Group">
                      <path d={svgPaths.p3da13e00} fill="white" id="Vector" />
                      <path d={svgPaths.p3da13e00} fill="white" id="Vector_2" opacity="0.7" />
                    </g>
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-71.6px)] size-[15.804px] top-[calc(50%+17.4px)]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height="15.8043" preserveAspectRatio="none" viewBox="0 0 15.8043 15.8043" width="15.8043">
                    <g id="Group">
                      <path d={svgPaths.p76246a0} fill="white" id="Vector" />
                      <path d={svgPaths.p76246a0} fill="white" id="Vector_2" opacity="0.7" />
                    </g>
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+103.8px)] size-[12.6px] top-[calc(50%-34.2px)]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height="12.6002" preserveAspectRatio="none" viewBox="0 0 12.6002 12.6002" width="12.6002">
                    <g id="Group">
                      <path d={svgPaths.p2a623980} fill="white" id="Vector" />
                      <path d={svgPaths.p2a623980} fill="white" id="Vector_2" opacity="0.7" />
                    </g>
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+112.8px)] size-[18.604px] top-[calc(50%+40.8px)]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height="18.6036" preserveAspectRatio="none" viewBox="0 0 18.6036 18.6036" width="18.6036">
                    <g id="Group">
                      <path d={svgPaths.p6b51180} fill="white" id="Vector" />
                      <path d={svgPaths.p6b51180} fill="white" id="Vector_2" opacity="0.7" />
                    </g>
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-34.2px)] size-[18.604px] top-[calc(50%+62.8px)]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height="18.6036" preserveAspectRatio="none" viewBox="0 0 18.6036 18.6036" width="18.6036">
                    <g id="Group">
                      <path d={svgPaths.p1d80a380} fill="white" id="Vector" />
                      <path d={svgPaths.p1d80a380} fill="white" id="Vector_2" opacity="0.7" />
                    </g>
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+60.15px)] size-[15.295px] top-[calc(50%+9.15px)]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height="15.2948" preserveAspectRatio="none" viewBox="0 0 15.2948 15.2948" width="15.2948">
                    <g id="Group">
                      <path d={svgPaths.p27c11600} fill="white" id="Vector" />
                      <path d={svgPaths.p27c11600} fill="white" id="Vector_2" opacity="0.7" />
                    </g>
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      {["Mooca using phone", "Mooca Thanks!"].includes(mooca) && (
        <div className={`absolute overflow-clip ${isMoocaUsingPhoneAndXs ? "h-[95px] left-[9px] top-[5px] w-[117px]" : isMoocaUsingPhoneAndS ? "h-[132px] left-[10px] top-[10px] w-[163px]" : isMoocaThanksAndXs ? "-translate-x-1/2 -translate-y-1/2 h-[97.919px] left-[calc(50%+0.32px)] top-[calc(50%+0.46px)] w-[91.643px]" : isMoocaThanksAndS ? "-translate-x-1/2 -translate-y-1/2 h-[146px] left-[calc(50%-0.18px)] top-1/2 w-[136.643px]" : isMoocaThanksAndM ? "-translate-x-1/2 -translate-y-1/2 h-[167.751px] left-1/2 top-[calc(50%-0.12px)] w-[157px]" : mooca === "Mooca Thanks!" && size === "L" ? "-translate-x-1/2 -translate-y-1/2 h-[194.463px] left-[calc(50%+0.5px)] top-[calc(50%-0.27px)] w-[182px]" : isMoocaUsingPhoneAndL ? "h-[190px] left-[23px] top-[14px] w-[234px]" : "h-[153px] left-[6px] top-[14px] w-[187px]"}`} data-name="Frame">
          {isMoocaUsingPhone && (
            <>
              <div className="absolute inset-[76.98%_50.47%_0.33%_38.14%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "21.5537" : isMoocaUsingPhoneAndS ? "29.9483" : isMoocaUsingPhoneAndL ? "43.1073" : "34.7128"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 13.3294 21.5537" : isMoocaUsingPhoneAndS ? "0 0 18.5701 29.9483" : isMoocaUsingPhoneAndL ? "0 0 26.6589 43.1073" : "0 0 21.3043 34.7128"} width={isMoocaUsingPhoneAndXs ? "13.3294" : isMoocaUsingPhoneAndS ? "18.5701" : isMoocaUsingPhoneAndL ? "26.6589" : "21.3043"}>
                  <path d={isMoocaUsingPhoneAndXs ? svgPaths.p145f8080 : isMoocaUsingPhoneAndS ? svgPaths.p10021500 : isMoocaUsingPhoneAndL ? svgPaths.p63dcc00 : svgPaths.p3228a180} fill="white" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[77.07%_34.83%_0.33%_53.76%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "21.4686" : isMoocaUsingPhoneAndS ? "29.83" : isMoocaUsingPhoneAndL ? "42.9371" : "34.5757"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 13.3416 21.4686" : isMoocaUsingPhoneAndS ? "0 0 18.5871 29.83" : isMoocaUsingPhoneAndL ? "0 0 26.6833 42.9371" : "0 0 21.3238 34.5757"} width={isMoocaUsingPhoneAndXs ? "13.3416" : isMoocaUsingPhoneAndS ? "18.5871" : isMoocaUsingPhoneAndL ? "26.6833" : "21.3238"}>
                  <path d={isMoocaUsingPhoneAndXs ? svgPaths.p1c7b0680 : isMoocaUsingPhoneAndS ? svgPaths.p34adb000 : isMoocaUsingPhoneAndL ? svgPaths.p2f777900 : svgPaths.p2574ab00} fill="white" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[65.97%_34.18%_10.62%_37.53%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "22.2456" : isMoocaUsingPhoneAndS ? "30.9097" : isMoocaUsingPhoneAndL ? "44.4913" : "35.8272"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 33.104 22.2456" : isMoocaUsingPhoneAndS ? "0 0 46.1192 30.9097" : isMoocaUsingPhoneAndL ? "0 0 66.208 44.4913" : "0 0 52.9098 35.8272"} width={isMoocaUsingPhoneAndXs ? "33.104" : isMoocaUsingPhoneAndS ? "46.1192" : isMoocaUsingPhoneAndL ? "66.208" : "52.9098"}>
                  <path d={isMoocaUsingPhoneAndXs ? svgPaths.p2294c700 : isMoocaUsingPhoneAndS ? svgPaths.p37ff3100 : isMoocaUsingPhoneAndL ? svgPaths.p330e3a80 : svgPaths.p19a19b60} fill="white" id="Vector" />
                </svg>
              </div>
            </>
          )}
          <div className={`absolute ${isMoocaThanksAndXs ? "contents inset-[-7.76%_-0.01%_0_-13.31%]" : isMoocaThanksAndS ? "contents inset-[-7.76%_-0.01%_0_-13.3%]" : mooca === "Mooca Thanks!" && ["L", "M"].includes(size) ? "contents inset-[-7.76%_0_0_-13.31%]" : "inset-[87.45%_40.24%_7.14%_43.83%]"}`} data-name="Group">
            {isMoocaUsingPhone && (
              <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "5.13675" : isMoocaUsingPhoneAndS ? "7.13737" : isMoocaUsingPhoneAndL ? "10.2735" : "8.27286"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 18.6292 5.13675" : isMoocaUsingPhoneAndS ? "0 0 25.9542 7.13737" : isMoocaUsingPhoneAndL ? "0 0 37.2609 10.2735" : "0 0 29.7767 8.27286"} width={isMoocaUsingPhoneAndXs ? "18.6292" : isMoocaUsingPhoneAndS ? "25.9542" : isMoocaUsingPhoneAndL ? "37.2609" : "29.7767"}>
                <g id="Group">
                  <path d={isMoocaUsingPhoneAndXs ? svgPaths.p5092400 : isMoocaUsingPhoneAndS ? svgPaths.p3a31bcc0 : isMoocaUsingPhoneAndL ? svgPaths.p2b026100 : svgPaths.p1d39a780} fill="#D2DEED" id="Vector" />
                  <path d={isMoocaUsingPhoneAndXs ? svgPaths.p3e7376f0 : isMoocaUsingPhoneAndS ? svgPaths.p1e16cf80 : isMoocaUsingPhoneAndL ? svgPaths.p1fbc7980 : svgPaths.p15da7600} fill="#D2DEED" id="Vector_2" />
                </g>
              </svg>
            )}
            {isMoocaThanks && (
              <>
                <div className="absolute inset-[66.87%_32.06%_0_32.24%]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaThanksAndXs ? "32.4432" : isMoocaThanksAndS ? "48.3739" : isMoocaThanksAndM ? "55.5805" : "64.4309"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 32.7149 32.4432" : isMoocaThanksAndS ? "0 0 48.7791 48.3739" : isMoocaThanksAndM ? "0 0 56.0461 55.5805" : "0 0 64.9706 64.4309"} width={isMoocaThanksAndXs ? "32.7149" : isMoocaThanksAndS ? "48.7791" : isMoocaThanksAndM ? "56.0461" : "64.9706"}>
                    <g id="Group">
                      <path d={isMoocaThanksAndXs ? svgPaths.p3caee600 : isMoocaThanksAndS ? svgPaths.p37e7a400 : isMoocaThanksAndM ? svgPaths.p2ad4f500 : svgPaths.p362901c0} fill="white" id="Vector" />
                      <g id="Group_2">
                        <path d={isMoocaThanksAndXs ? svgPaths.p3501f180 : isMoocaThanksAndS ? svgPaths.pa42d000 : isMoocaThanksAndM ? svgPaths.p26133600 : svgPaths.p1e4433f0} fill="#D2DEED" id="Vector_2" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className={`absolute ${isMoocaThanksAndXs ? "inset-[88.61%_50.56%_6.96%_42.31%]" : isMoocaThanksAndIsMOrS ? "inset-[88.61%_50.56%_6.96%_42.32%]" : "inset-[88.61%_50.57%_6.96%_42.31%]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaThanksAndXs ? "4.33817" : isMoocaThanksAndS ? "6.46836" : isMoocaThanksAndM ? "7.432" : "8.61544"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 6.52553 4.33817" : isMoocaThanksAndS ? "0 0 9.72978 6.46836" : isMoocaThanksAndM ? "0 0 11.1793 7.432" : "0 0 12.9594 8.61544"} width={isMoocaThanksAndXs ? "6.52553" : isMoocaThanksAndS ? "9.72978" : isMoocaThanksAndM ? "11.1793" : "12.9594"}>
                    <g id="Group">
                      <path d={isMoocaThanksAndXs ? svgPaths.p7dbfc80 : isMoocaThanksAndS ? svgPaths.p3c066400 : isMoocaThanksAndM ? svgPaths.p26640200 : svgPaths.p36602f00} fill="#D2DEED" id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className={`absolute contents ${isMoocaThanksAndS ? "inset-[-7.76%_42.74%_41.72%_-13.3%]" : "inset-[-7.76%_42.74%_41.72%_-13.31%]"}`} style={{ containerType: "size" }} data-name="Group">
                  <div className={`absolute flex items-center justify-center ${isMoocaThanksAndXs ? "inset-[-0.4%_67.23%_79.15%_-2.53%]" : "inset-[-0.4%_67.23%_79.16%_-2.53%]"}`} style={{ containerType: "size" }}>
                    <div className={`flex-none rotate-[-23.75deg] ${isMoocaThanksAndXs ? "h-[hypot(11.0867cqw,39.1761cqh)] w-[hypot(88.9133cqw,-60.8239cqh)]" : isMoocaThanksAndS ? "h-[hypot(11.0862cqw,39.1747cqh)] w-[hypot(88.9138cqw,-60.8253cqh)]" : isMoocaThanksAndM ? "h-[hypot(11.0864cqw,39.1753cqh)] w-[hypot(88.9136cqw,-60.8247cqh)]" : "h-[hypot(11.0868cqw,39.1763cqh)] w-[hypot(88.9132cqw,-60.8237cqh)]"}`}>
                      <div className="relative size-full" data-name="Group">
                        <div className={`absolute ${isMoocaThanksAndIsMOrS ? "inset-[-4.25%_-1.21%_-4.25%_-1.2%]" : "inset-[-4.25%_-1.2%]"}`}>
                          <svg className="block size-full" fill="none" height={isMoocaThanksAndXs ? "9.66208" : isMoocaThanksAndS ? "14.4058" : isMoocaThanksAndM ? "16.552" : "19.1876"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 32.1802 9.66208" : isMoocaThanksAndS ? "0 0 47.9808 14.4058" : isMoocaThanksAndM ? "0 0 55.1286 16.552" : "0 0 63.9042 19.1876"} width={isMoocaThanksAndXs ? "32.1802" : isMoocaThanksAndS ? "47.9808" : isMoocaThanksAndM ? "55.1286" : "63.9042"}>
                            <g id="Group">
                              <path d={isMoocaThanksAndXs ? svgPaths.p36528980 : isMoocaThanksAndS ? svgPaths.p2cd52e00 : isMoocaThanksAndM ? svgPaths.p33b4b900 : svgPaths.p3618e3f0} id="Vector" stroke="#DFA23B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.756971" : isMoocaThanksAndS ? "1.12867" : isMoocaThanksAndM ? "1.29682" : "1.50331"} />
                              <path d={isMoocaThanksAndXs ? svgPaths.p30bd2300 : isMoocaThanksAndS ? svgPaths.p38a6a900 : isMoocaThanksAndM ? svgPaths.pbf8e000 : svgPaths.pb019260} id="Vector_2" stroke="#DFA23B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.756971" : isMoocaThanksAndS ? "1.12867" : isMoocaThanksAndM ? "1.29682" : "1.50331"} />
                              <path d={isMoocaThanksAndXs ? svgPaths.p3129ca40 : isMoocaThanksAndS ? svgPaths.p118d7400 : isMoocaThanksAndM ? svgPaths.p14a75640 : svgPaths.p33a56780} id="Vector_3" stroke="#DFA23B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.756971" : isMoocaThanksAndS ? "1.12867" : isMoocaThanksAndM ? "1.29682" : "1.50331"} />
                              <path d={isMoocaThanksAndXs ? svgPaths.p3d3b9900 : isMoocaThanksAndS ? svgPaths.p3cfc0f00 : isMoocaThanksAndM ? svgPaths.p2cff0e40 : svgPaths.p12fe2700} id="Vector_4" stroke="#DFA23B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.756971" : isMoocaThanksAndS ? "1.12867" : isMoocaThanksAndM ? "1.29682" : "1.50331"} />
                              <path d={isMoocaThanksAndXs ? svgPaths.p2fc2d120 : isMoocaThanksAndS ? svgPaths.p337bdb00 : isMoocaThanksAndM ? svgPaths.p1763e80 : svgPaths.pd49ead0} id="Vector_5" stroke="#DFA23B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.756971" : isMoocaThanksAndS ? "1.12867" : isMoocaThanksAndM ? "1.29682" : "1.50331"} />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`absolute flex items-center justify-center ${isMoocaThanksAndS ? "inset-[-7.76%_42.74%_41.72%_-13.3%]" : "inset-[-7.76%_42.74%_41.72%_-13.31%]"}`} style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(30.5552cqw,69.4448cqh)] rotate-[-23.75deg] w-[hypot(69.4448cqw,-30.5552cqh)]">
                      <div className="relative size-full" data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaThanksAndXs ? "49.0638" : isMoocaThanksAndS ? "73.1558" : isMoocaThanksAndM ? "84.0544" : "97.4388"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 49.0638 49.0638" : isMoocaThanksAndS ? "0 0 73.1558 73.1558" : isMoocaThanksAndM ? "0 0 84.0544 84.0544" : "0 0 97.4388 97.4388"} width={isMoocaThanksAndXs ? "49.0638" : isMoocaThanksAndS ? "73.1558" : isMoocaThanksAndM ? "84.0544" : "97.4388"}>
                          <g id="Group">
                            <path d={isMoocaThanksAndXs ? svgPaths.p267edb80 : isMoocaThanksAndS ? svgPaths.p2d7f9f00 : isMoocaThanksAndM ? svgPaths.p331fef70 : svgPaths.p18a425f0} fill="#FEED53" id="Vector" />
                            <g id="Group_2">
                              <path d={isMoocaThanksAndXs ? svgPaths.p1c6c4200 : isMoocaThanksAndS ? svgPaths.p34592500 : isMoocaThanksAndM ? svgPaths.p15396100 : svgPaths.p224b6100} fill="#DFA23B" id="Vector_2" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className={`absolute flex items-center justify-center ${isMoocaThanksAndS ? "inset-[8.97%_72.51%_75.98%_5.45%]" : isMoocaThanksAndIsMOrXs ? "inset-[8.97%_72.51%_75.98%_5.44%]" : "inset-[8.97%_72.52%_75.98%_5.44%]"}`} style={{ containerType: "size" }}>
                    <div className={`flex-none rotate-[-23.75deg] ${isMoocaThanksAndXs ? "h-[hypot(15.7961cqw,49.2131cqh)] w-[hypot(84.2039cqw,-50.7869cqh)]" : isMoocaThanksAndS ? "h-[hypot(15.7952cqw,49.2113cqh)] w-[hypot(84.2048cqw,-50.7887cqh)]" : isMoocaThanksAndM ? "h-[hypot(15.7937cqw,49.2085cqh)] w-[hypot(84.2063cqw,-50.7915cqh)]" : "h-[hypot(15.7935cqw,49.2081cqh)] w-[hypot(84.2065cqw,-50.7919cqh)]"}`}>
                      <div className="relative size-full" data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaThanksAndXs ? "7.92425" : isMoocaThanksAndS ? "11.8157" : isMoocaThanksAndM ? "13.5746" : "15.7362"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 18.5868 7.92425" : isMoocaThanksAndS ? "0 0 27.7139 11.8157" : isMoocaThanksAndM ? "0 0 31.8444 13.5746" : "0 0 36.9159 15.7362"} width={isMoocaThanksAndXs ? "18.5868" : isMoocaThanksAndS ? "27.7139" : isMoocaThanksAndM ? "31.8444" : "36.9159"}>
                          <g id="Group">
                            <path d={isMoocaThanksAndXs ? svgPaths.p20635200 : isMoocaThanksAndS ? svgPaths.p15742680 : isMoocaThanksAndM ? svgPaths.p28fd9380 : svgPaths.p7663a00} fill="#DFA23B" id="Vector" />
                            <path d={isMoocaThanksAndXs ? svgPaths.p1420f680 : isMoocaThanksAndS ? svgPaths.p234dd900 : isMoocaThanksAndM ? svgPaths.p3d81a080 : svgPaths.p19c49580} fill="#FDC05C" id="Vector_2" />
                            <path d={isMoocaThanksAndXs ? svgPaths.p32a88180 : isMoocaThanksAndS ? svgPaths.p1895d00 : isMoocaThanksAndM ? svgPaths.p23db6800 : svgPaths.p3face900} fill="#FDC05C" id="Vector_3" />
                            <g id="Group_2">
                              <path d={isMoocaThanksAndXs ? svgPaths.p1dc49800 : isMoocaThanksAndS ? svgPaths.p364fc780 : isMoocaThanksAndM ? svgPaths.p26793880 : svgPaths.p2e6effc0} fill="#DFA23B" id="Vector_4" />
                            </g>
                            <g id="Group_3">
                              <path d={isMoocaThanksAndXs ? svgPaths.p34a08300 : isMoocaThanksAndS ? svgPaths.p290c0a00 : isMoocaThanksAndM ? svgPaths.p127d3900 : svgPaths.p2eda4400} fill="#DFA23B" id="Vector_5" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`absolute ${isMoocaThanksAndXs ? "inset-[8.04%_-0.01%_32.13%_0.02%]" : isMoocaThanksAndS ? "inset-[8.04%_-0.01%_32.13%_0.01%]" : "inset-[8.04%_0_32.13%_0.01%]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaThanksAndXs ? "58.587" : isMoocaThanksAndS ? "87.3553" : isMoocaThanksAndM ? "100.369" : "116.352"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 91.6385 58.587" : isMoocaThanksAndS ? "0 0 136.636 87.3553" : isMoocaThanksAndM ? "0 0 156.992 100.369" : "0 0 181.991 116.352"} width={isMoocaThanksAndXs ? "91.6385" : isMoocaThanksAndS ? "136.636" : isMoocaThanksAndM ? "156.992" : "181.991"}>
                    <g id="Group">
                      <path d={isMoocaThanksAndXs ? svgPaths.pf48e100 : isMoocaThanksAndS ? svgPaths.p92818f0 : isMoocaThanksAndM ? svgPaths.p273bbd80 : svgPaths.p14c65880} fill="white" id="Vector" />
                      <g id="Group_2">
                        <path d={isMoocaThanksAndXs ? svgPaths.p320cf300 : isMoocaThanksAndS ? svgPaths.p14525500 : isMoocaThanksAndM ? svgPaths.p2f997e40 : svgPaths.p1a181e80} fill="#D2DEED" id="Vector_2" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className={`absolute contents ${isMoocaThanksAndXs ? "inset-[62.98%_24.68%_22.9%_27.86%]" : "inset-[62.98%_24.68%_22.9%_27.87%]"}`} data-name="Group">
                  <div className={`absolute contents ${isMoocaThanksAndXs ? "inset-[62.98%_24.68%_22.9%_27.86%]" : "inset-[62.98%_24.68%_22.9%_27.87%]"}`} data-name="Group">
                    <div className={`absolute ${isMoocaThanksAndXs ? "inset-[62.98%_24.68%_22.9%_27.86%]" : "inset-[62.98%_24.68%_22.9%_27.87%]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaThanksAndXs ? "13.8262" : isMoocaThanksAndS ? "20.6154" : isMoocaThanksAndM ? "23.6866" : "27.4584"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 43.4892 13.8262" : isMoocaThanksAndS ? "0 0 64.8439 20.6154" : isMoocaThanksAndM ? "0 0 74.5041 23.6866" : "0 0 86.3679 27.4584"} width={isMoocaThanksAndXs ? "43.4892" : isMoocaThanksAndS ? "64.8439" : isMoocaThanksAndM ? "74.5041" : "86.3679"}>
                        <g id="Group">
                          <path d={isMoocaThanksAndXs ? svgPaths.p32207880 : isMoocaThanksAndS ? svgPaths.p2a27d300 : isMoocaThanksAndM ? svgPaths.p2a00db00 : svgPaths.p20f32380} fill="#DFA23B" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-[67.47%_28.17%_26.41%_30.31%]" data-name="Group">
                  <div className="absolute inset-[-4.52%_-0.71%]">
                    <svg className="block size-full" fill="none" height={isMoocaThanksAndXs ? "6.53081" : isMoocaThanksAndS ? "9.73782" : isMoocaThanksAndM ? "11.1883" : "12.9699"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 38.5894 6.53081" : isMoocaThanksAndS ? "0 0 57.5396 9.73782" : isMoocaThanksAndM ? "0 0 66.1132 11.1883" : "0 0 76.6418 12.9699"} width={isMoocaThanksAndXs ? "38.5894" : isMoocaThanksAndS ? "57.5396" : isMoocaThanksAndM ? "66.1132" : "76.6418"}>
                      <g id="Group">
                        <path d={isMoocaThanksAndXs ? svgPaths.pebb900 : isMoocaThanksAndS ? svgPaths.p10580b80 : isMoocaThanksAndM ? svgPaths.p32f0c8c0 : svgPaths.p33fd9140} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.541189" : isMoocaThanksAndS ? "0.806932" : isMoocaThanksAndM ? "0.927147" : "1.07478"} />
                        <path d={isMoocaThanksAndXs ? svgPaths.p3ab48200 : isMoocaThanksAndS ? svgPaths.p1033700 : isMoocaThanksAndM ? svgPaths.pfb06f80 : svgPaths.p31feabe0} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.541189" : isMoocaThanksAndS ? "0.806932" : isMoocaThanksAndM ? "0.927147" : "1.07478"} />
                        <path d={isMoocaThanksAndXs ? svgPaths.p22c14180 : isMoocaThanksAndS ? svgPaths.p2bd881e0 : isMoocaThanksAndM ? svgPaths.p3b82d780 : svgPaths.p28a7e6d0} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.541189" : isMoocaThanksAndS ? "0.806932" : isMoocaThanksAndM ? "0.927147" : "1.07478"} />
                        <path d={isMoocaThanksAndXs ? svgPaths.p454af00 : isMoocaThanksAndS ? svgPaths.pa458000 : isMoocaThanksAndM ? svgPaths.p2870dd00 : svgPaths.p50c1780} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.541189" : isMoocaThanksAndS ? "0.806932" : isMoocaThanksAndM ? "0.927147" : "1.07478"} />
                        <path d={isMoocaThanksAndXs ? svgPaths.p334e1580 : isMoocaThanksAndS ? svgPaths.p1d7d600 : isMoocaThanksAndM ? svgPaths.p3aa90b80 : svgPaths.p38148200} id="Vector_5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.541189" : isMoocaThanksAndS ? "0.806932" : isMoocaThanksAndM ? "0.927147" : "1.07478"} />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className={`absolute ${isMoocaThanksAndIsMOrSOrXs ? "inset-[33.78%_0.25%_32.72%_1.38%]" : "inset-[33.77%_0.25%_32.72%_1.37%]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaThanksAndXs ? "32.809" : isMoocaThanksAndS ? "48.9194" : isMoocaThanksAndM ? "56.2073" : "65.1575"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 90.1513 32.809" : isMoocaThanksAndS ? "0 0 134.419 48.9194" : isMoocaThanksAndM ? "0 0 154.444 56.2073" : "0 0 179.037 65.1575"} width={isMoocaThanksAndXs ? "90.1513" : isMoocaThanksAndS ? "134.419" : isMoocaThanksAndM ? "154.444" : "179.037"}>
                    <g id="Group">
                      <path d={isMoocaThanksAndXs ? svgPaths.pffbda00 : isMoocaThanksAndS ? svgPaths.p22001780 : isMoocaThanksAndM ? svgPaths.p2b556dc0 : svgPaths.p28c54900} fill="#D2DEED" id="Vector" />
                      <path d={isMoocaThanksAndXs ? svgPaths.p304c2500 : isMoocaThanksAndS ? svgPaths.paac9940 : isMoocaThanksAndM ? svgPaths.p4170b80 : svgPaths.p9d69f00} fill="#D2DEED" id="Vector_2" />
                      <path d={isMoocaThanksAndXs ? svgPaths.pc0f4d00 : isMoocaThanksAndS ? svgPaths.p55d2200 : isMoocaThanksAndM ? svgPaths.p1841c980 : svgPaths.p31473200} fill="#D2DEED" id="Vector_3" />
                    </g>
                  </svg>
                </div>
                <div className="absolute inset-[34.71%_24.97%_55.8%_60.68%]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaThanksAndXs ? "9.28786" : isMoocaThanksAndS ? "13.8486" : isMoocaThanksAndM ? "15.9117" : "18.4453"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 13.1454 9.28786" : isMoocaThanksAndS ? "0 0 19.6019 13.8486" : isMoocaThanksAndM ? "0 0 22.5234 15.9117" : "0 0 26.1089 18.4453"} width={isMoocaThanksAndXs ? "13.1454" : isMoocaThanksAndS ? "19.6019" : isMoocaThanksAndM ? "22.5234" : "26.1089"}>
                    <g id="Group">
                      <path d={isMoocaThanksAndXs ? svgPaths.p38b2b300 : isMoocaThanksAndS ? svgPaths.p3d725b00 : isMoocaThanksAndM ? svgPaths.p1c2351e0 : svgPaths.p2d492d00} fill="#EFF2F8" id="Vector" />
                      <path d={isMoocaThanksAndXs ? svgPaths.p36872c80 : isMoocaThanksAndS ? svgPaths.pec89780 : isMoocaThanksAndM ? svgPaths.p1b238d00 : svgPaths.p136bb700} fill="#EFF2F8" id="Vector_2" />
                      <path d={isMoocaThanksAndXs ? svgPaths.p57c5b80 : isMoocaThanksAndS ? svgPaths.p6054a70 : isMoocaThanksAndM ? svgPaths.p1e24ce00 : svgPaths.p3c019a00} fill="#EFF2F8" id="Vector_3" />
                      <path d={isMoocaThanksAndXs ? svgPaths.p1168bd00 : isMoocaThanksAndS ? svgPaths.p1fc07780 : isMoocaThanksAndM ? svgPaths.p4562d00 : svgPaths.p147a97c0} fill="#EFF2F8" id="Vector_4" />
                    </g>
                  </svg>
                </div>
                <div className={`absolute ${isMoocaThanksAndIsSOrXs ? "inset-[34.87%_60.67%_54.88%_24.99%]" : "inset-[34.86%_60.67%_54.88%_24.99%]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaThanksAndXs ? "10.0379" : isMoocaThanksAndS ? "14.9667" : isMoocaThanksAndM ? "17.1964" : "19.9347"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 13.1404 10.0379" : isMoocaThanksAndS ? "0 0 19.594 14.9667" : isMoocaThanksAndM ? "0 0 22.5145 17.1964" : "0 0 26.1011 19.9347"} width={isMoocaThanksAndXs ? "13.1404" : isMoocaThanksAndS ? "19.594" : isMoocaThanksAndM ? "22.5145" : "26.1011"}>
                    <g id="Group">
                      <path d={isMoocaThanksAndXs ? svgPaths.p2f27b680 : isMoocaThanksAndS ? svgPaths.p3c78dc80 : isMoocaThanksAndM ? svgPaths.p11adcd00 : svgPaths.p16790c00} fill="#EFF2F8" id="Vector" />
                      <path d={isMoocaThanksAndXs ? svgPaths.p36ea3000 : isMoocaThanksAndS ? svgPaths.p14ba8700 : isMoocaThanksAndM ? svgPaths.pb3d0c80 : svgPaths.p37e82000} fill="#EFF2F8" id="Vector_2" />
                      <path d={isMoocaThanksAndXs ? svgPaths.p4203400 : isMoocaThanksAndS ? svgPaths.p17d98880 : isMoocaThanksAndM ? svgPaths.p3a167d00 : svgPaths.pfabcb00} fill="#EFF2F8" id="Vector_3" />
                      <path d={isMoocaThanksAndXs ? svgPaths.p27abf400 : isMoocaThanksAndS ? svgPaths.p20678e00 : isMoocaThanksAndM ? svgPaths.p10736500 : svgPaths.p3c4b3c40} fill="#EFF2F8" id="Vector_4" />
                    </g>
                  </svg>
                </div>
                <div className={`absolute ${isMoocaThanksAndXs ? "inset-[64.48%_50.74%_17.28%_33.51%]" : "inset-[64.48%_50.73%_17.28%_33.51%]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaThanksAndXs ? "17.8677" : isMoocaThanksAndS ? "26.6414" : isMoocaThanksAndM ? "30.6103" : "35.4846"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 14.4401 17.8677" : isMoocaThanksAndS ? "0 0 21.5306 26.6414" : isMoocaThanksAndM ? "0 0 24.7382 30.6103" : "0 0 28.6774 35.4846"} width={isMoocaThanksAndXs ? "14.4401" : isMoocaThanksAndS ? "21.5306" : isMoocaThanksAndM ? "24.7382" : "28.6774"}>
                    <g id="Group">
                      <path d={isMoocaThanksAndXs ? svgPaths.p304ffb80 : isMoocaThanksAndS ? svgPaths.pe0bee80 : isMoocaThanksAndM ? svgPaths.p3f497180 : svgPaths.p20a34100} fill="white" id="Vector" />
                      <g id="Group_2">
                        <path d={isMoocaThanksAndXs ? svgPaths.p8a3f900 : isMoocaThanksAndS ? svgPaths.p11bc31f0 : isMoocaThanksAndM ? svgPaths.p218f0600 : svgPaths.p13471000} fill="#D2DEED" id="Vector_2" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className={`absolute ${isMoocaThanksAndIsMOrS ? "inset-[64.56%_36.18%_17.31%_47.98%]" : "inset-[64.56%_36.19%_17.31%_47.98%]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaThanksAndXs ? "17.7496" : isMoocaThanksAndS ? "26.4653" : isMoocaThanksAndM ? "30.408" : "35.25"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 14.5137 17.7496" : isMoocaThanksAndS ? "0 0 21.6405 26.4653" : isMoocaThanksAndM ? "0 0 24.8644 30.408" : "0 0 28.8237 35.25"} width={isMoocaThanksAndXs ? "14.5137" : isMoocaThanksAndS ? "21.6405" : isMoocaThanksAndM ? "24.8644" : "28.8237"}>
                    <g id="Group">
                      <path d={isMoocaThanksAndXs ? svgPaths.p26bcac00 : isMoocaThanksAndS ? svgPaths.p17a1d780 : isMoocaThanksAndM ? svgPaths.p2ce69500 : svgPaths.p2ba48140} fill="white" id="Vector" />
                      <g id="Group_2">
                        <path d={isMoocaThanksAndXs ? svgPaths.p34944200 : isMoocaThanksAndS ? svgPaths.p8430780 : isMoocaThanksAndM ? svgPaths.p2c92dc00 : svgPaths.p1a4ea380} fill="#D2DEED" id="Vector_2" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className={`absolute contents ${isMoocaThanksAndIsSOrXs ? "inset-[84.87%_32.25%_3.7%_53.69%]" : "inset-[84.86%_32.25%_3.7%_53.69%]"}`} data-name="Group">
                  <div className="absolute inset-[86.29%_32.25%_3.7%_58.32%]" data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaThanksAndXs ? "9.80355" : isMoocaThanksAndS ? "14.6174" : isMoocaThanksAndM ? "16.7951" : "19.4695"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 8.63986 9.80355" : isMoocaThanksAndS ? "0 0 12.8823 14.6174" : isMoocaThanksAndM ? "0 0 14.8015 16.7951" : "0 0 17.1584 19.4695"} width={isMoocaThanksAndXs ? "8.63986" : isMoocaThanksAndS ? "12.8823" : isMoocaThanksAndM ? "14.8015" : "17.1584"}>
                      <g id="Group">
                        <path d={isMoocaThanksAndXs ? svgPaths.p1a87fb80 : isMoocaThanksAndS ? svgPaths.pa1c0600 : isMoocaThanksAndM ? svgPaths.p2ac00280 : svgPaths.p160496c0} fill="#D2DEED" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className={`absolute ${isMoocaThanksAndIsSOrXs ? "inset-[84.87%_33.88%_6.01%_53.69%]" : "inset-[84.86%_33.88%_6.01%_53.69%]"}`} data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaThanksAndXs ? "8.93104" : isMoocaThanksAndS ? "13.3165" : isMoocaThanksAndM ? "15.3003" : "17.7367"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 11.3935 8.93104" : isMoocaThanksAndS ? "0 0 16.9881 13.3165" : isMoocaThanksAndM ? "0 0 19.5189 15.3003" : "0 0 22.627 17.7367"} width={isMoocaThanksAndXs ? "11.3935" : isMoocaThanksAndS ? "16.9881" : isMoocaThanksAndM ? "19.5189" : "22.627"}>
                      <g id="Group">
                        <path d={isMoocaThanksAndXs ? svgPaths.p26345800 : isMoocaThanksAndS ? svgPaths.p3fce2d68 : isMoocaThanksAndM ? svgPaths.p1153cb00 : svgPaths.p16941680} fill="white" id="Vector" />
                        <g id="Group_2">
                          <path d={isMoocaThanksAndXs ? svgPaths.p122cc7f0 : isMoocaThanksAndS ? svgPaths.p1829fd00 : isMoocaThanksAndM ? svgPaths.p2420bf00 : svgPaths.p375b3400} fill="#D2DEED" id="Vector_2" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className={`absolute contents ${isMoocaThanksAndS ? "inset-[72.54%_27.35%_13.46%_61.62%]" : isMoocaThanksAndIsMOrXs ? "inset-[72.54%_27.35%_13.46%_61.61%]" : "inset-[72.54%_27.36%_13.46%_61.61%]"}`} data-name="Group">
                  <div className={`absolute ${isMoocaThanksAndS ? "inset-[72.54%_27.35%_13.46%_61.62%]" : isMoocaThanksAndIsMOrXs ? "inset-[72.54%_27.35%_13.46%_61.61%]" : "inset-[72.54%_27.36%_13.46%_61.61%]"}`} data-name="Group">
                    <div className="absolute inset-[0_0_-1.97%_0]">
                      <svg className="block size-full" fill="none" height={isMoocaThanksAndXs ? "13.9808" : isMoocaThanksAndS ? "20.8456" : isMoocaThanksAndM ? "23.9515" : "27.7648"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 10.1118 13.9808" : isMoocaThanksAndS ? "0 0 15.077 20.8456" : isMoocaThanksAndM ? "0 0 17.3231 23.9515" : "0 0 20.0816 27.7648"} width={isMoocaThanksAndXs ? "10.1118" : isMoocaThanksAndS ? "15.077" : isMoocaThanksAndM ? "17.3231" : "20.0816"}>
                        <g id="Group">
                          <g id="Group_2">
                            <path d={isMoocaThanksAndXs ? svgPaths.p1a953b40 : isMoocaThanksAndS ? svgPaths.pe479800 : isMoocaThanksAndM ? svgPaths.p336fdc00 : svgPaths.p207fed60} id="Vector" stroke="#DFA23B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.541189" : isMoocaThanksAndS ? "0.806932" : isMoocaThanksAndM ? "0.927147" : "1.07478"} />
                            <path d={isMoocaThanksAndXs ? svgPaths.p855dd80 : isMoocaThanksAndS ? svgPaths.pd0458c0 : isMoocaThanksAndM ? svgPaths.p6f60e78 : svgPaths.pab0ae0} id="Vector_2" stroke="#DFA23B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.541189" : isMoocaThanksAndS ? "0.806932" : isMoocaThanksAndM ? "0.927147" : "1.07478"} />
                            <path d={isMoocaThanksAndXs ? svgPaths.p33079b00 : isMoocaThanksAndS ? svgPaths.p28780000 : isMoocaThanksAndM ? svgPaths.p3dd87580 : svgPaths.p2a38b4c0} id="Vector_3" stroke="#DFA23B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.541189" : isMoocaThanksAndS ? "0.806932" : isMoocaThanksAndM ? "0.927147" : "1.07478"} />
                            <path d={isMoocaThanksAndXs ? svgPaths.p2ea17a80 : isMoocaThanksAndS ? svgPaths.p3a5b580 : isMoocaThanksAndM ? svgPaths.p186e3fc0 : svgPaths.p11f79d80} id="Vector_4" stroke="#DFA23B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.541189" : isMoocaThanksAndS ? "0.806932" : isMoocaThanksAndM ? "0.927147" : "1.07478"} />
                            <path d={isMoocaThanksAndXs ? svgPaths.pf345900 : isMoocaThanksAndS ? svgPaths.p6b7c700 : isMoocaThanksAndM ? svgPaths.p60ee800 : svgPaths.p3ff0e680} id="Vector_5" stroke="#DFA23B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.541189" : isMoocaThanksAndS ? "0.806932" : isMoocaThanksAndM ? "0.927147" : "1.07478"} />
                            <path d={isMoocaThanksAndXs ? svgPaths.p1eb51790 : isMoocaThanksAndS ? svgPaths.p2aef3240 : isMoocaThanksAndM ? svgPaths.p5cc2900 : svgPaths.p37a32300} id="Vector_6" stroke="#DFA23B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.541189" : isMoocaThanksAndS ? "0.806932" : isMoocaThanksAndM ? "0.927147" : "1.07478"} />
                          </g>
                          <path d={isMoocaThanksAndXs ? svgPaths.p239b5180 : isMoocaThanksAndS ? svgPaths.p25a0ae00 : isMoocaThanksAndM ? svgPaths.p12c90f80 : svgPaths.p20b0c8c0} fill="#DFA23B" id="Vector_7" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className={`absolute ${isMoocaThanksAndIsMOrS ? "inset-[75.87%_29.37%_16.86%_64.03%]" : "inset-[75.87%_29.38%_16.86%_64.03%]"}`} data-name="Group">
                    <div className={`absolute ${isMoocaThanksAndIsMOrSOrXs ? "inset-[-3.8%_-4.48%]" : "inset-[-3.8%_-4.47%_-3.8%_-4.48%]"}`}>
                      <svg className="block size-full" fill="none" height={isMoocaThanksAndXs ? "7.65886" : isMoocaThanksAndS ? "11.4197" : isMoocaThanksAndM ? "13.121" : "15.2104"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 6.58491 7.65886" : isMoocaThanksAndS ? "0 0 9.81956 11.4197" : isMoocaThanksAndM ? "0 0 11.2835 13.121" : "0 0 13.0808 15.2104"} width={isMoocaThanksAndXs ? "6.58491" : isMoocaThanksAndS ? "9.81956" : isMoocaThanksAndM ? "11.2835" : "13.0808"}>
                        <g id="Group">
                          <path d={isMoocaThanksAndXs ? svgPaths.p2eb8e800 : isMoocaThanksAndS ? svgPaths.p3a88caa0 : isMoocaThanksAndM ? svgPaths.p395e0280 : svgPaths.pc4ced80} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.541189" : isMoocaThanksAndS ? "0.806932" : isMoocaThanksAndM ? "0.927147" : "1.07478"} />
                          <path d={isMoocaThanksAndXs ? svgPaths.p9190900 : isMoocaThanksAndS ? svgPaths.p1d57a280 : isMoocaThanksAndM ? svgPaths.p1c717300 : svgPaths.p3ce79e00} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.541189" : isMoocaThanksAndS ? "0.806932" : isMoocaThanksAndM ? "0.927147" : "1.07478"} />
                          <path d={isMoocaThanksAndXs ? svgPaths.p121eb080 : isMoocaThanksAndS ? svgPaths.p2085c620 : isMoocaThanksAndM ? svgPaths.p297c5580 : svgPaths.p32e4f180} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "0.541189" : isMoocaThanksAndS ? "0.806932" : isMoocaThanksAndM ? "0.927147" : "1.07478"} />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={`absolute ${isMoocaThanksAndIsMOrS ? "inset-[28.52%_33.27%_69.23%_60.58%]" : "inset-[28.52%_33.28%_69.23%_60.58%]"}`} data-name="Vector">
                  <div className="absolute inset-[-28.98%_-11.34%_-28.99%_-11.34%]">
                    <svg className="block size-full" fill="none" height={isMoocaThanksAndXs ? "3.47904" : isMoocaThanksAndS ? "5.18737" : isMoocaThanksAndM ? "5.96017" : "6.90924"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 6.9088 3.47904" : isMoocaThanksAndS ? "0 0 10.3013 5.18737" : isMoocaThanksAndM ? "0 0 11.8359 5.96017" : "0 0 13.7206 6.90924"} width={isMoocaThanksAndXs ? "6.9088" : isMoocaThanksAndS ? "10.3013" : isMoocaThanksAndM ? "11.8359" : "13.7206"}>
                      <path d={isMoocaThanksAndXs ? svgPaths.p27198ca0 : isMoocaThanksAndS ? svgPaths.p8024400 : isMoocaThanksAndM ? svgPaths.p17e50e00 : svgPaths.p15e7e400} id="Vector" stroke="#2359A8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "1.27651" : isMoocaThanksAndS ? "1.90332" : isMoocaThanksAndM ? "2.18687" : "2.5351"} />
                    </svg>
                  </div>
                </div>
                <div className={`absolute ${isMoocaThanksAndIsMOrSOrXs ? "inset-[29.64%_60.41%_68.11%_33.44%]" : "inset-[29.64%_60.42%_68.11%_33.44%]"}`} data-name="Vector">
                  <div className="absolute inset-[-28.98%_-11.34%_-28.99%_-11.34%]">
                    <svg className="block size-full" fill="none" height={isMoocaThanksAndXs ? "3.47904" : isMoocaThanksAndS ? "5.18737" : isMoocaThanksAndM ? "5.96017" : "6.90924"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 6.9088 3.47904" : isMoocaThanksAndS ? "0 0 10.3013 5.18737" : isMoocaThanksAndM ? "0 0 11.8359 5.96017" : "0 0 13.7206 6.90924"} width={isMoocaThanksAndXs ? "6.9088" : isMoocaThanksAndS ? "10.3013" : isMoocaThanksAndM ? "11.8359" : "13.7206"}>
                      <path d={isMoocaThanksAndXs ? svgPaths.p3a259000 : isMoocaThanksAndS ? svgPaths.p8024400 : isMoocaThanksAndM ? svgPaths.p30ccf500 : svgPaths.p15e7e400} id="Vector" stroke="#2359A8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "1.27651" : isMoocaThanksAndS ? "1.90332" : isMoocaThanksAndM ? "2.18687" : "2.5351"} />
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>
          {isMoocaUsingPhone && (
            <div className="absolute inset-[67.32%_36.71%_18.63%_37.53%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "13.342" : isMoocaUsingPhoneAndS ? "18.5384" : isMoocaUsingPhoneAndL ? "26.684" : "21.4876"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 30.1451 13.342" : isMoocaUsingPhoneAndS ? "0 0 41.997 18.5384" : isMoocaUsingPhoneAndL ? "0 0 60.2901 26.684" : "0 0 48.1806 21.4876"} width={isMoocaUsingPhoneAndXs ? "30.1451" : isMoocaUsingPhoneAndS ? "41.997" : isMoocaUsingPhoneAndL ? "60.2901" : "48.1806"}>
                <path d={isMoocaUsingPhoneAndXs ? svgPaths.p34fb0680 : isMoocaUsingPhoneAndS ? svgPaths.p3e9f5880 : isMoocaUsingPhoneAndL ? svgPaths.p3c8bcd00 : svgPaths.p3a153100} fill="#D2DEED" id="Vector" />
              </svg>
            </div>
          )}
          <div className={`absolute ${isMoocaThanks ? "inset-[33.37%_44.28%_61.59%_45.69%]" : "contents inset-[62.57%_31.15%_-0.01%_35.05%]"}`} data-name="Group">
            {isMoocaUsingPhone && (
              <div className="absolute inset-[62.57%_31.15%_-0.01%_35.05%]" data-name="Group">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "35.5641" : isMoocaUsingPhoneAndS ? "49.4154" : isMoocaUsingPhoneAndL ? "71.1283" : "57.277"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 39.5533 35.5641" : isMoocaUsingPhoneAndS ? "0 0 55.1042 49.4154" : isMoocaUsingPhoneAndL ? "0 0 79.1067 71.1283" : "0 0 63.2177 57.277"} width={isMoocaUsingPhoneAndXs ? "39.5533" : isMoocaUsingPhoneAndS ? "55.1042" : isMoocaUsingPhoneAndL ? "79.1067" : "63.2177"}>
                  <g id="Group">
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.p2fb2ab80 : isMoocaUsingPhoneAndS ? svgPaths.p230ba900 : isMoocaUsingPhoneAndL ? svgPaths.p190d6300 : svgPaths.p40c8b70} fill="#D2DEED" id="Vector" />
                  </g>
                </svg>
              </div>
            )}
            {isMoocaThanks && (
              <div className={`absolute ${isMoocaThanksAndXs ? "inset-[-12.16%_-6.53%]" : isMoocaThanksAndS ? "inset-[-11.55%_-6.2%]" : isMoocaThanksAndM ? "inset-[-11.83%_-6.35%]" : "inset-[-11.22%_-6.03%]"}`}>
                <svg className="block size-full" fill="none" height={isMoocaThanksAndXs ? "6.13583" : isMoocaThanksAndS ? "9.05949" : isMoocaThanksAndM ? "10.4559" : "12.0024"} preserveAspectRatio="none" viewBox={isMoocaThanksAndXs ? "0 0 10.3908 6.13583" : isMoocaThanksAndS ? "0 0 15.4038 9.05949" : isMoocaThanksAndM ? "0 0 17.7453 10.4559" : "0 0 20.4526 12.0024"} width={isMoocaThanksAndXs ? "10.3908" : isMoocaThanksAndS ? "15.4038" : isMoocaThanksAndM ? "17.7453" : "20.4526"}>
                  <g id="Group">
                    <path d={isMoocaThanksAndXs ? svgPaths.p1df97080 : isMoocaThanksAndS ? svgPaths.p2dde8e80 : isMoocaThanksAndM ? svgPaths.p19991c00 : svgPaths.p3388cf00} id="Vector" stroke="#2359A8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth={isMoocaThanksAndXs ? "1.2" : isMoocaThanksAndS ? "1.7" : isMoocaThanksAndM ? "2" : "2.2"} />
                  </g>
                </svg>
              </div>
            )}
          </div>
          {isMoocaUsingPhone && (
            <>
              <div className="absolute inset-[72.26%_52.61%_17.87%_38.26%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "9.38065" : isMoocaUsingPhoneAndS ? "13.0342" : isMoocaUsingPhoneAndL ? "18.7613" : "15.1078"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 10.6838 9.38065" : isMoocaUsingPhoneAndS ? "0 0 14.8842 13.0342" : isMoocaUsingPhoneAndL ? "0 0 21.3675 18.7613" : "0 0 17.0758 15.1078"} width={isMoocaUsingPhoneAndXs ? "10.6838" : isMoocaUsingPhoneAndS ? "14.8842" : isMoocaUsingPhoneAndL ? "21.3675" : "17.0758"}>
                  <path d={isMoocaUsingPhoneAndXs ? svgPaths.p3088fa00 : isMoocaUsingPhoneAndS ? svgPaths.p9888880 : isMoocaUsingPhoneAndL ? svgPaths.p13417880 : svgPaths.p31c1b00} fill="#D2DEED" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[69.2%_56.16%_20.31%_35.55%]" data-name="Group">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "9.97092" : isMoocaUsingPhoneAndS ? "13.8543" : isMoocaUsingPhoneAndL ? "19.9418" : "16.0584"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 9.70158 9.97092" : isMoocaUsingPhoneAndS ? "0 0 13.5153 13.8543" : isMoocaUsingPhoneAndL ? "0 0 19.4042 19.9418" : "0 0 15.506 16.0584"} width={isMoocaUsingPhoneAndXs ? "9.70158" : isMoocaUsingPhoneAndS ? "13.5153" : isMoocaUsingPhoneAndL ? "19.4042" : "15.506"}>
                  <g id="Group">
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.p221a4880 : isMoocaUsingPhoneAndS ? svgPaths.p218c3780 : isMoocaUsingPhoneAndL ? svgPaths.p8bc1900 : svgPaths.p2cddfc00} fill="#D2DEED" id="Vector" />
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.p292fc100 : isMoocaUsingPhoneAndS ? svgPaths.p35eb8670 : isMoocaUsingPhoneAndL ? svgPaths.p2a9e4f00 : svgPaths.pbd88b00} fill="white" id="Vector_2" />
                  </g>
                </svg>
              </div>
              <div className={`absolute ${isMoocaUsingPhoneAndXs ? "inset-[56.56%_27.96%_18.28%_32.2%]" : "inset-[56.56%_27.96%_18.28%_32.19%]"}`} data-name="Group">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "23.8968" : isMoocaUsingPhoneAndS ? "33.2039" : isMoocaUsingPhoneAndL ? "47.7935" : "38.4864"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 46.6189 23.8968" : isMoocaUsingPhoneAndS ? "0 0 64.9478 33.2039" : isMoocaUsingPhoneAndL ? "0 0 93.2379 47.7935" : "0 0 74.5107 38.4864"} width={isMoocaUsingPhoneAndXs ? "46.6189" : isMoocaUsingPhoneAndS ? "64.9478" : isMoocaUsingPhoneAndL ? "93.2379" : "74.5107"}>
                  <g id="Group">
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.p25ea7500 : isMoocaUsingPhoneAndS ? svgPaths.pd893f00 : isMoocaUsingPhoneAndL ? svgPaths.p28f61e00 : svgPaths.p32ccc480} fill="#2359A8" id="Vector" />
                    <g id="Group_2">
                      <path d={isMoocaUsingPhoneAndXs ? svgPaths.p249e5af0 : isMoocaUsingPhoneAndS ? svgPaths.p36a37140 : isMoocaUsingPhoneAndL ? svgPaths.p3a7f3372 : svgPaths.p1b503500} fill="white" id="Vector_2" />
                      <path d={isMoocaUsingPhoneAndXs ? svgPaths.p21bd5680 : isMoocaUsingPhoneAndS ? svgPaths.p487adf0 : isMoocaUsingPhoneAndL ? svgPaths.p7a2ed00 : svgPaths.p3e2a4700} fill="white" id="Vector_3" />
                      <path d={isMoocaUsingPhoneAndXs ? svgPaths.p96a08f0 : isMoocaUsingPhoneAndS ? svgPaths.p27df1a00 : isMoocaUsingPhoneAndL ? svgPaths.pc931100 : svgPaths.p173c380} fill="white" id="Vector_4" />
                      <path d={isMoocaUsingPhoneAndXs ? svgPaths.p3843c500 : isMoocaUsingPhoneAndS ? svgPaths.p4b07c80 : isMoocaUsingPhoneAndL ? svgPaths.pf316c00 : svgPaths.pc55e800} fill="white" id="Vector_5" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className={`absolute ${isMoocaUsingPhoneAndXs ? "inset-[0.38%_6.17%_34.97%_11.23%]" : "inset-[0.38%_6.18%_34.97%_11.23%]"}`} data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "61.4252" : isMoocaUsingPhoneAndS ? "85.3487" : isMoocaUsingPhoneAndL ? "122.85" : "98.9269"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 96.6346 61.4252" : isMoocaUsingPhoneAndS ? "0 0 134.628 85.3487" : isMoocaUsingPhoneAndL ? "0 0 193.269 122.85" : "0 0 154.45 98.9269"} width={isMoocaUsingPhoneAndXs ? "96.6346" : isMoocaUsingPhoneAndS ? "134.628" : isMoocaUsingPhoneAndL ? "193.269" : "154.45"}>
                  <path d={isMoocaUsingPhoneAndXs ? svgPaths.p350ccb80 : isMoocaUsingPhoneAndS ? svgPaths.p121d3500 : isMoocaUsingPhoneAndL ? svgPaths.pc024a00 : svgPaths.p30cd2000} fill="white" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[48.53%_35.08%_46.45%_60.85%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "4.76512" : isMoocaUsingPhoneAndS ? "6.62101" : isMoocaUsingPhoneAndL ? "9.53023" : "7.67435"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 4.76112 4.76512" : isMoocaUsingPhoneAndS ? "0 0 6.633 6.62101" : isMoocaUsingPhoneAndL ? "0 0 9.52225 9.53023" : "0 0 7.60963 7.67435"} width={isMoocaUsingPhoneAndXs ? "4.76112" : isMoocaUsingPhoneAndS ? "6.633" : isMoocaUsingPhoneAndL ? "9.52225" : "7.60963"}>
                  <path d={isMoocaUsingPhoneAndXs ? svgPaths.p2425c980 : isMoocaUsingPhoneAndS ? svgPaths.p2f108380 : isMoocaUsingPhoneAndL ? svgPaths.p348b2a00 : svgPaths.p35d62700} fill="#2359A8" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[48.31%_56.13%_46.45%_39.63%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "4.97931" : isMoocaUsingPhoneAndS ? "6.91862" : isMoocaUsingPhoneAndL ? "9.95863" : "8.01932"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 4.96081 4.97931" : isMoocaUsingPhoneAndS ? "0 0 6.91121 6.91862" : isMoocaUsingPhoneAndL ? "0 0 9.92162 9.95863" : "0 0 7.92882 8.01932"} width={isMoocaUsingPhoneAndXs ? "4.96081" : isMoocaUsingPhoneAndS ? "6.91121" : isMoocaUsingPhoneAndL ? "9.92162" : "7.92882"}>
                  <path d={isMoocaUsingPhoneAndXs ? svgPaths.p64a6c00 : isMoocaUsingPhoneAndS ? svgPaths.p74b1a80 : isMoocaUsingPhoneAndL ? svgPaths.pde9dba0 : svgPaths.p33cbe600} fill="#2359A8" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[52.36%_26.83%_37.02%_31.17%]" data-name="Group">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "10.0928" : isMoocaUsingPhoneAndS ? "14.0238" : isMoocaUsingPhoneAndL ? "20.1857" : "16.2548"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 49.1456 10.0928" : isMoocaUsingPhoneAndS ? "0 0 68.468 14.0238" : isMoocaUsingPhoneAndL ? "0 0 98.2919 20.1857" : "0 0 78.5497 16.2548"} width={isMoocaUsingPhoneAndXs ? "49.1456" : isMoocaUsingPhoneAndS ? "68.468" : isMoocaUsingPhoneAndL ? "98.2919" : "78.5497"}>
                  <g id="Group">
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.p29188500 : isMoocaUsingPhoneAndS ? svgPaths.p28d76400 : isMoocaUsingPhoneAndL ? svgPaths.pd726472 : svgPaths.p1f5b31f0} fill="#EFF2F8" id="Vector" />
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.p259d6d40 : isMoocaUsingPhoneAndS ? svgPaths.p179e7d00 : isMoocaUsingPhoneAndL ? svgPaths.p22cfcd00 : svgPaths.p3937ca80} fill="#EFF2F8" id="Vector_2" />
                  </g>
                </svg>
              </div>
              <div className={`absolute ${isMoocaUsingPhoneAndIsSOrXs ? "inset-[28.11%_6.19%_34.96%_11.23%]" : "inset-[28.11%_6.18%_34.96%_11.23%]"}`} data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "35.0839" : isMoocaUsingPhoneAndS ? "48.7482" : isMoocaUsingPhoneAndL ? "70.1679" : "56.5036"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 96.6255 35.0839" : isMoocaUsingPhoneAndS ? "0 0 134.615 48.7482" : isMoocaUsingPhoneAndL ? "0 0 193.251 70.1679" : "0 0 154.436 56.5036"} width={isMoocaUsingPhoneAndXs ? "96.6255" : isMoocaUsingPhoneAndS ? "134.615" : isMoocaUsingPhoneAndL ? "193.251" : "154.436"}>
                  <path d={isMoocaUsingPhoneAndXs ? svgPaths.p2b0ad400 : isMoocaUsingPhoneAndS ? svgPaths.p112c180 : isMoocaUsingPhoneAndL ? svgPaths.p19d7c900 : svgPaths.p1b54e200} fill="#D2DEED" id="Vector" />
                </svg>
              </div>
              <div className="absolute contents inset-[0.01%_5.56%_34.58%_10.59%]" data-name="Group">
                <div className="absolute inset-[0.01%_5.56%_34.58%_10.59%]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "62.1393" : isMoocaUsingPhoneAndS ? "86.3409" : isMoocaUsingPhoneAndL ? "124.279" : "100.077"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 98.0981 62.1393" : isMoocaUsingPhoneAndS ? "0 0 136.667 86.3409" : isMoocaUsingPhoneAndL ? "0 0 196.196 124.279" : "0 0 156.789 100.077"} width={isMoocaUsingPhoneAndXs ? "98.0981" : isMoocaUsingPhoneAndS ? "136.667" : isMoocaUsingPhoneAndL ? "196.196" : "156.789"}>
                    <g id="Group">
                      <path d={isMoocaUsingPhoneAndXs ? svgPaths.p25878280 : isMoocaUsingPhoneAndS ? svgPaths.p17777000 : isMoocaUsingPhoneAndL ? svgPaths.pbd3af00 : svgPaths.p29dc1a80} fill="#D2DEED" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[73.07%_35.03%_18.09%_57.01%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "8.39645" : isMoocaUsingPhoneAndS ? "11.6666" : isMoocaUsingPhoneAndL ? "16.7929" : "13.5227"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 9.31519 8.39645" : isMoocaUsingPhoneAndS ? "0 0 12.9776 11.6666" : isMoocaUsingPhoneAndL ? "0 0 18.6304 16.7929" : "0 0 14.8884 13.5227"} width={isMoocaUsingPhoneAndXs ? "9.31519" : isMoocaUsingPhoneAndS ? "12.9776" : isMoocaUsingPhoneAndL ? "18.6304" : "14.8884"}>
                  <path d={isMoocaUsingPhoneAndXs ? svgPaths.p17e6e400 : isMoocaUsingPhoneAndS ? svgPaths.p22f8ec00 : isMoocaUsingPhoneAndL ? svgPaths.p29f58a80 : svgPaths.p37048780} fill="#D2DEED" id="Vector" />
                </svg>
              </div>
              <div className={`absolute contents ${isMoocaUsingPhoneAndIsSOrXs ? "inset-[1.96%_74.16%_85.79%_4.11%]" : "inset-[1.96%_74.17%_85.79%_4.11%]"}`} data-name="Group">
                <div className={`absolute contents ${isMoocaUsingPhoneAndIsSOrXs ? "inset-[1.96%_74.16%_85.79%_4.11%]" : "inset-[1.96%_74.17%_85.79%_4.11%]"}`} data-name="Group">
                  <div className={`absolute ${isMoocaUsingPhoneAndIsSOrXs ? "inset-[1.96%_74.16%_85.79%_4.11%]" : "inset-[1.96%_74.17%_85.79%_4.11%]"}`} data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "11.637" : isMoocaUsingPhoneAndS ? "16.1693" : isMoocaUsingPhoneAndL ? "23.274" : "18.7417"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 25.4212 11.637" : isMoocaUsingPhoneAndS ? "0 0 35.4158 16.1693" : isMoocaUsingPhoneAndL ? "0 0 50.8423 23.274" : "0 0 40.6304 18.7417"} width={isMoocaUsingPhoneAndXs ? "25.4212" : isMoocaUsingPhoneAndS ? "35.4158" : isMoocaUsingPhoneAndL ? "50.8423" : "40.6304"}>
                      <path d={isMoocaUsingPhoneAndXs ? svgPaths.p2043e800 : isMoocaUsingPhoneAndS ? svgPaths.p159e3000 : isMoocaUsingPhoneAndL ? svgPaths.p3d013af0 : svgPaths.p3748c300} fill="#0055B8" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute contents inset-[4.29%_76.47%_89.08%_11.41%]" data-name="Group">
                    <div className="absolute inset-[4.29%_76.66%_93.16%_11.41%]" data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "2.42523" : isMoocaUsingPhoneAndS ? "3.36979" : isMoocaUsingPhoneAndL ? "4.85046" : "3.9059"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 13.9521 2.42523" : isMoocaUsingPhoneAndS ? "0 0 19.4375 3.36979" : isMoocaUsingPhoneAndL ? "0 0 27.9041 4.85046" : "0 0 22.2994 3.9059"} width={isMoocaUsingPhoneAndXs ? "13.9521" : isMoocaUsingPhoneAndS ? "19.4375" : isMoocaUsingPhoneAndL ? "27.9041" : "22.2994"}>
                        <g id="Group">
                          <path d={isMoocaUsingPhoneAndXs ? svgPaths.pf7ce400 : isMoocaUsingPhoneAndS ? svgPaths.p13645020 : isMoocaUsingPhoneAndL ? svgPaths.p2c6a4c00 : svgPaths.p2cd4bf00} fill="white" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <div className="absolute inset-[6.33%_76.47%_92.29%_20.03%]" data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "1.31525" : isMoocaUsingPhoneAndS ? "1.82751" : isMoocaUsingPhoneAndL ? "2.6305" : "2.11824"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 4.09106 1.31525" : isMoocaUsingPhoneAndS ? "0 0 5.69951 1.82751" : isMoocaUsingPhoneAndL ? "0 0 8.18212 2.6305" : "0 0 6.5387 2.11824"} width={isMoocaUsingPhoneAndXs ? "4.09106" : isMoocaUsingPhoneAndS ? "5.69951" : isMoocaUsingPhoneAndL ? "8.18212" : "6.5387"}>
                        <g id="Group">
                          <path d={isMoocaUsingPhoneAndXs ? svgPaths.pdf74100 : isMoocaUsingPhoneAndS ? svgPaths.pd8ae7c0 : isMoocaUsingPhoneAndL ? svgPaths.p14e4c800 : svgPaths.pc8a8f00} fill="white" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <div className="absolute inset-[6.92%_80.73%_91.12%_11.6%]" data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "1.86377" : isMoocaUsingPhoneAndS ? "2.58966" : isMoocaUsingPhoneAndL ? "3.72754" : "3.00165"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 8.97471 1.86377" : isMoocaUsingPhoneAndS ? "0 0 12.5032 2.58966" : isMoocaUsingPhoneAndL ? "0 0 17.9494 3.72754" : "0 0 14.3442 3.00165"} width={isMoocaUsingPhoneAndXs ? "8.97471" : isMoocaUsingPhoneAndS ? "12.5032" : isMoocaUsingPhoneAndL ? "17.9494" : "14.3442"}>
                        <g id="Group">
                          <path d={isMoocaUsingPhoneAndXs ? svgPaths.p1a4cdb00 : isMoocaUsingPhoneAndS ? svgPaths.p13bdc3a0 : isMoocaUsingPhoneAndL ? svgPaths.p19a53700 : svgPaths.p19c2bc00} fill="white" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <div className="absolute inset-[9.28%_82.85%_89.08%_11.79%]" data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "1.55904" : isMoocaUsingPhoneAndS ? "2.16624" : isMoocaUsingPhoneAndL ? "3.11807" : "2.51087"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 6.27424 1.55904" : isMoocaUsingPhoneAndS ? "0 0 8.74104 2.16624" : isMoocaUsingPhoneAndL ? "0 0 12.5485 3.11807" : "0 0 10.0281 2.51087"} width={isMoocaUsingPhoneAndXs ? "6.27424" : isMoocaUsingPhoneAndS ? "8.74104" : isMoocaUsingPhoneAndL ? "12.5485" : "10.0281"}>
                        <g id="Group">
                          <path d={isMoocaUsingPhoneAndXs ? svgPaths.p25256b00 : isMoocaUsingPhoneAndS ? svgPaths.p29cbb370 : isMoocaUsingPhoneAndL ? svgPaths.p2d26b800 : svgPaths.p10dc9280} fill="white" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={`absolute ${isMoocaUsingPhoneAndXs ? "inset-[6.04%_90.09%_87.8%_5.85%]" : "inset-[6.04%_90.1%_87.8%_5.85%]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "5.85505" : isMoocaUsingPhoneAndS ? "8.13542" : isMoocaUsingPhoneAndL ? "11.7101" : "9.42973"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 4.73986 5.85505" : isMoocaUsingPhoneAndS ? "0 0 6.6034 8.13542" : isMoocaUsingPhoneAndL ? "0 0 9.47973 11.7101" : "0 0 7.57568 9.42973"} width={isMoocaUsingPhoneAndXs ? "4.73986" : isMoocaUsingPhoneAndS ? "6.6034" : isMoocaUsingPhoneAndL ? "9.47973" : "7.57568"}>
                    <g id="Group">
                      <path d={isMoocaUsingPhoneAndXs ? svgPaths.p294f5b00 : isMoocaUsingPhoneAndS ? svgPaths.p3ce33f00 : isMoocaUsingPhoneAndL ? svgPaths.p3324db00 : svgPaths.p340a9e80} fill="white" id="Vector" />
                      <path d={isMoocaUsingPhoneAndXs ? svgPaths.p10fe9300 : isMoocaUsingPhoneAndS ? svgPaths.p2ff86900 : isMoocaUsingPhoneAndL ? svgPaths.p2ac3b00 : svgPaths.p2dc87600} fill="white" id="Vector_2" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="absolute contents inset-[55.48%_0_25.64%_79.14%]" data-name="Group">
                <div className="absolute contents inset-[55.48%_0_25.64%_79.14%]" data-name="Group">
                  <div className="absolute inset-[55.48%_0_25.64%_79.14%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "17.9273" : isMoocaUsingPhoneAndS ? "24.9095" : isMoocaUsingPhoneAndL ? "35.8546" : "28.8724"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 24.4108 17.9273" : isMoocaUsingPhoneAndS ? "0 0 34.0082 24.9095" : isMoocaUsingPhoneAndL ? "0 0 48.8216 35.8546" : "0 0 39.0156 28.8724"} width={isMoocaUsingPhoneAndXs ? "24.4108" : isMoocaUsingPhoneAndS ? "34.0082" : isMoocaUsingPhoneAndL ? "48.8216" : "39.0156"}>
                      <path d={isMoocaUsingPhoneAndXs ? svgPaths.p3eac3900 : isMoocaUsingPhoneAndS ? svgPaths.p1ba28780 : isMoocaUsingPhoneAndL ? svgPaths.p5915a70 : svgPaths.p37248100} fill="#E8B022" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute contents inset-[57.75%_2.83%_31.15%_85.7%]" data-name="Group">
                    <div className="absolute inset-[57.75%_3.62%_34.77%_85.7%]" data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "7.10381" : isMoocaUsingPhoneAndS ? "9.87055" : isMoocaUsingPhoneAndL ? "14.2076" : "11.4409"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 12.4968 7.10381" : isMoocaUsingPhoneAndS ? "0 0 17.41 9.87055" : isMoocaUsingPhoneAndL ? "0 0 24.9935 14.2076" : "0 0 19.9735 11.4409"} width={isMoocaUsingPhoneAndXs ? "12.4968" : isMoocaUsingPhoneAndS ? "17.41" : isMoocaUsingPhoneAndL ? "24.9935" : "19.9735"}>
                        <g id="Group">
                          <path d={isMoocaUsingPhoneAndXs ? svgPaths.p22fd8ac0 : isMoocaUsingPhoneAndS ? svgPaths.p16c38600 : isMoocaUsingPhoneAndL ? svgPaths.p26ef9800 : svgPaths.p13453f40} fill="white" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <div className="absolute inset-[59.57%_2.83%_37.87%_93.97%]" data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "2.43755" : isMoocaUsingPhoneAndS ? "3.3869" : isMoocaUsingPhoneAndL ? "4.87505" : "3.92572"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 3.74366 2.43755" : isMoocaUsingPhoneAndS ? "0 0 5.21553 3.3869" : isMoocaUsingPhoneAndL ? "0 0 7.4873 4.87505" : "0 0 5.98344 3.92572"} width={isMoocaUsingPhoneAndXs ? "3.74366" : isMoocaUsingPhoneAndS ? "5.21553" : isMoocaUsingPhoneAndL ? "7.4873" : "5.98344"}>
                        <g id="Group">
                          <path d={isMoocaUsingPhoneAndXs ? svgPaths.p25e6d300 : isMoocaUsingPhoneAndS ? svgPaths.pfd01c00 : isMoocaUsingPhoneAndL ? svgPaths.p1d546080 : svgPaths.p32fc6f80} fill="white" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <div className="absolute inset-[62.04%_6.61%_32.96%_86.49%]" data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "4.75126" : isMoocaUsingPhoneAndS ? "6.60175" : isMoocaUsingPhoneAndL ? "9.50249" : "7.65202"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 8.07745 4.75126" : isMoocaUsingPhoneAndS ? "0 0 11.2532 6.60175" : isMoocaUsingPhoneAndL ? "0 0 16.1549 9.50249" : "0 0 12.9101 7.65202"} width={isMoocaUsingPhoneAndXs ? "8.07745" : isMoocaUsingPhoneAndS ? "11.2532" : isMoocaUsingPhoneAndL ? "16.1549" : "12.9101"}>
                        <g id="Group">
                          <path d={isMoocaUsingPhoneAndXs ? svgPaths.p3ec30780 : isMoocaUsingPhoneAndS ? svgPaths.p1681fe00 : isMoocaUsingPhoneAndL ? svgPaths.p13626000 : svgPaths.p2f5c8200} fill="white" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <div className={`absolute ${isMoocaUsingPhoneAndXs ? "inset-[65.2%_7.87%_31.15%_87.27%]" : "inset-[65.2%_7.87%_31.15%_87.28%]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "3.46957" : isMoocaUsingPhoneAndS ? "4.82088" : isMoocaUsingPhoneAndL ? "6.93913" : "5.58783"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 5.67838 3.46957" : isMoocaUsingPhoneAndS ? "0 0 7.9109 4.82088" : isMoocaUsingPhoneAndL ? "0 0 11.3568 6.93913" : "0 0 9.0757 5.58783"} width={isMoocaUsingPhoneAndXs ? "5.67838" : isMoocaUsingPhoneAndS ? "7.9109" : isMoocaUsingPhoneAndL ? "11.3568" : "9.0757"}>
                        <g id="Group">
                          <path d={isMoocaUsingPhoneAndXs ? svgPaths.p16809970 : isMoocaUsingPhoneAndS ? svgPaths.p8dd0440 : isMoocaUsingPhoneAndL ? svgPaths.p2c6a3540 : svgPaths.pc3fce00} fill="white" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-[66.32%_14.07%_27.12%_81.26%]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "6.22868" : isMoocaUsingPhoneAndS ? "8.65452" : isMoocaUsingPhoneAndL ? "12.4573" : "10.0314"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 5.46191 6.22868" : isMoocaUsingPhoneAndS ? "0 0 7.60863 8.65452" : isMoocaUsingPhoneAndL ? "0 0 10.924 12.4573" : "0 0 8.73001 10.0314"} width={isMoocaUsingPhoneAndXs ? "5.46191" : isMoocaUsingPhoneAndS ? "7.60863" : isMoocaUsingPhoneAndL ? "10.924" : "8.73001"}>
                    <g id="Group">
                      <path d={isMoocaUsingPhoneAndXs ? svgPaths.p28edb8a0 : isMoocaUsingPhoneAndS ? svgPaths.p29d40b80 : isMoocaUsingPhoneAndL ? svgPaths.p31d0e00 : svgPaths.p207a1400} fill="white" id="Vector" />
                      <path d={isMoocaUsingPhoneAndXs ? svgPaths.p47a4f0 : isMoocaUsingPhoneAndS ? svgPaths.p31cc2080 : isMoocaUsingPhoneAndL ? svgPaths.p17c31a00 : svgPaths.p1bd47900} fill="white" id="Vector_2" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className={`absolute ${isMoocaUsingPhoneAndIsSOrXs ? "inset-[35.16%_0.96%_52.8%_82.37%]" : "inset-[35.16%_0.96%_52.79%_82.37%]"}`} data-name="Group">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "11.4417" : isMoocaUsingPhoneAndS ? "15.898" : isMoocaUsingPhoneAndL ? "22.8835" : "18.4273"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 19.4939 11.4417" : isMoocaUsingPhoneAndS ? "0 0 27.1582 15.898" : isMoocaUsingPhoneAndL ? "0 0 38.9878 22.8835" : "0 0 31.1569 18.4273"} width={isMoocaUsingPhoneAndXs ? "19.4939" : isMoocaUsingPhoneAndS ? "27.1582" : isMoocaUsingPhoneAndL ? "38.9878" : "31.1569"}>
                  <g id="Group">
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.p2cf71600 : isMoocaUsingPhoneAndS ? svgPaths.p3d4b8800 : isMoocaUsingPhoneAndL ? svgPaths.p1f02df00 : svgPaths.p2f3f1700} fill="#0055B8" id="Vector" />
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.p2c474a00 : isMoocaUsingPhoneAndS ? svgPaths.p406ad80 : isMoocaUsingPhoneAndL ? svgPaths.p342f6f80 : svgPaths.p3b2d7d00} fill="#0055B8" id="Vector_2" />
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.p17cc9100 : isMoocaUsingPhoneAndS ? svgPaths.p11d87680 : isMoocaUsingPhoneAndL ? svgPaths.p2180b300 : svgPaths.pc20400} fill="white" id="Vector_3" />
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.p24aee200 : isMoocaUsingPhoneAndS ? svgPaths.p287df600 : isMoocaUsingPhoneAndL ? svgPaths.p1507e500 : svgPaths.p1f5ea000} fill="white" id="Vector_4" />
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.p39885780 : isMoocaUsingPhoneAndS ? svgPaths.p329dc700 : isMoocaUsingPhoneAndL ? svgPaths.p2b7fba00 : svgPaths.p16836c80} fill="white" id="Vector_5" />
                  </g>
                </svg>
              </div>
              <div className="absolute contents inset-[51.05%_39.97%_17.24%_45.17%]" data-name="Group">
                <div className="absolute inset-[51.05%_39.97%_17.24%_45.17%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "30.12" : isMoocaUsingPhoneAndS ? "41.8509" : isMoocaUsingPhoneAndL ? "60.2399" : "48.509"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 17.3881 30.12" : isMoocaUsingPhoneAndS ? "0 0 24.2244 41.8509" : isMoocaUsingPhoneAndL ? "0 0 34.7762 60.2399" : "0 0 27.7912 48.509"} width={isMoocaUsingPhoneAndXs ? "17.3881" : isMoocaUsingPhoneAndS ? "24.2244" : isMoocaUsingPhoneAndL ? "34.7762" : "27.7912"}>
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.p3ef180 : isMoocaUsingPhoneAndS ? svgPaths.p1df40b00 : isMoocaUsingPhoneAndL ? svgPaths.p19590d90 : svgPaths.p2a737c00} fill="#E8B022" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[54.14%_50.77%_43.31%_47.16%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "2.42162" : isMoocaUsingPhoneAndS ? "3.36478" : isMoocaUsingPhoneAndL ? "4.84325" : "3.90009"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 2.42757 2.42162" : isMoocaUsingPhoneAndS ? "0 0 3.382 3.36478" : isMoocaUsingPhoneAndL ? "0 0 4.85515 4.84325" : "0 0 3.87997 3.90009"} width={isMoocaUsingPhoneAndXs ? "2.42757" : isMoocaUsingPhoneAndS ? "3.382" : isMoocaUsingPhoneAndL ? "4.85515" : "3.87997"}>
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.p34a303c0 : isMoocaUsingPhoneAndS ? svgPaths.p3445f300 : isMoocaUsingPhoneAndL ? svgPaths.p30c2fa80 : svgPaths.p1ccdd500} fill="#231F20" id="Vector" />
                  </svg>
                </div>
                <div className="absolute contents inset-[63.52%_44.87%_30.75%_49.95%]" data-name="plOGK9_2_">
                  <div className="absolute inset-[63.52%_44.87%_30.75%_49.95%]" data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "5.44729" : isMoocaUsingPhoneAndS ? "7.56886" : isMoocaUsingPhoneAndL ? "10.8945" : "8.77299"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 6.06312 5.44729" : isMoocaUsingPhoneAndS ? "0 0 8.44691 7.56886" : isMoocaUsingPhoneAndL ? "0 0 12.1265 10.8945" : "0 0 9.69193 8.77299"} width={isMoocaUsingPhoneAndXs ? "6.06312" : isMoocaUsingPhoneAndS ? "8.44691" : isMoocaUsingPhoneAndL ? "12.1265" : "9.69193"}>
                      <g id="Group">
                        <path d={isMoocaUsingPhoneAndXs ? svgPaths.p151599a0 : isMoocaUsingPhoneAndS ? svgPaths.pafc0800 : isMoocaUsingPhoneAndL ? svgPaths.p3ffd52f0 : svgPaths.p38dc7780} fill="#CB892A" id="Vector" />
                        <path d={isMoocaUsingPhoneAndXs ? svgPaths.p3d87e800 : isMoocaUsingPhoneAndS ? svgPaths.p1b518500 : isMoocaUsingPhoneAndL ? svgPaths.p15c05880 : svgPaths.p3bed1200} fill="#CB892A" id="Vector_2" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[55.04%_51.53%_44.22%_47.87%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "0.706985" : isMoocaUsingPhoneAndS ? "0.982338" : isMoocaUsingPhoneAndL ? "1.41397" : "1.13861"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 0.708721 0.706985" : isMoocaUsingPhoneAndS ? "0 0 0.987366 0.982338" : isMoocaUsingPhoneAndL ? "0 0 1.41744 1.41397" : "0 0 1.13273 1.13861"} width={isMoocaUsingPhoneAndXs ? "0.708721" : isMoocaUsingPhoneAndS ? "0.987366" : isMoocaUsingPhoneAndL ? "1.41744" : "1.13273"}>
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.pfa76ec0 : isMoocaUsingPhoneAndS ? svgPaths.p23200500 : isMoocaUsingPhoneAndL ? svgPaths.p26314f80 : svgPaths.p3edefe00} fill="#595A5C" id="Vector" />
                  </svg>
                </div>
              </div>
              <div className="absolute contents inset-[65.23%_52.15%_19.99%_35.28%]" data-name="Group">
                <div className="absolute inset-[65.23%_52.15%_19.99%_35.28%]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "14.0419" : isMoocaUsingPhoneAndS ? "19.5108" : isMoocaUsingPhoneAndL ? "28.0838" : "22.6149"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 14.7101 14.0419" : isMoocaUsingPhoneAndS ? "0 0 20.4935 19.5108" : isMoocaUsingPhoneAndL ? "0 0 29.4201 28.0838" : "0 0 23.511 22.6149"} width={isMoocaUsingPhoneAndXs ? "14.7101" : isMoocaUsingPhoneAndS ? "20.4935" : isMoocaUsingPhoneAndL ? "29.4201" : "23.511"}>
                    <g id="Group">
                      <path d={isMoocaUsingPhoneAndXs ? svgPaths.p341ca980 : isMoocaUsingPhoneAndS ? svgPaths.paba9571 : isMoocaUsingPhoneAndL ? svgPaths.peac4f00 : svgPaths.p28af2680} fill="white" id="Vector" />
                      <g id="Group_2">
                        <path d={isMoocaUsingPhoneAndXs ? svgPaths.pd6ecf00 : isMoocaUsingPhoneAndS ? svgPaths.p10d32100 : isMoocaUsingPhoneAndL ? svgPaths.p34351780 : svgPaths.p4f66100} fill="#D2DEED" id="Vector_2" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className={`absolute contents ${isMoocaUsingPhoneAndL ? "inset-[64.95%_31.54%_19.82%_55.87%]" : "inset-[64.95%_31.54%_19.82%_55.88%]"}`} data-name="Group">
                <div className={`absolute ${isMoocaUsingPhoneAndL ? "inset-[64.95%_31.54%_19.82%_55.87%]" : "inset-[64.95%_31.54%_19.82%_55.88%]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "14.4699" : isMoocaUsingPhoneAndS ? "20.1055" : isMoocaUsingPhoneAndL ? "28.9397" : "23.3041"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 14.7238 14.4699" : isMoocaUsingPhoneAndS ? "0 0 20.5127 20.1055" : isMoocaUsingPhoneAndL ? "0 0 29.4476 28.9397" : "0 0 23.5329 23.3041"} width={isMoocaUsingPhoneAndXs ? "14.7238" : isMoocaUsingPhoneAndS ? "20.5127" : isMoocaUsingPhoneAndL ? "29.4476" : "23.5329"}>
                    <g id="Group">
                      <path d={isMoocaUsingPhoneAndXs ? svgPaths.p2c137f80 : isMoocaUsingPhoneAndS ? svgPaths.p2def6400 : isMoocaUsingPhoneAndL ? svgPaths.p34f9cff0 : svgPaths.p29208e00} fill="white" id="Vector" />
                      <g id="Group_2">
                        <path d={isMoocaUsingPhoneAndXs ? svgPaths.p29550200 : isMoocaUsingPhoneAndS ? svgPaths.p26c838c0 : isMoocaUsingPhoneAndL ? svgPaths.p1939a5b0 : svgPaths.p1278c600} fill="#D2DEED" id="Vector_2" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[22.72%_83.34%_65.23%_0]" data-name="Group">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaUsingPhoneAndXs ? "11.4418" : isMoocaUsingPhoneAndS ? "15.8981" : isMoocaUsingPhoneAndL ? "22.8836" : "18.4273"} preserveAspectRatio="none" viewBox={isMoocaUsingPhoneAndXs ? "0 0 19.4898 11.4418" : isMoocaUsingPhoneAndS ? "0 0 27.1525 15.8981" : isMoocaUsingPhoneAndL ? "0 0 38.9796 22.8836" : "0 0 31.1504 18.4273"} width={isMoocaUsingPhoneAndXs ? "19.4898" : isMoocaUsingPhoneAndS ? "27.1525" : isMoocaUsingPhoneAndL ? "38.9796" : "31.1504"}>
                  <g id="Group">
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.p397fafb0 : isMoocaUsingPhoneAndS ? svgPaths.pdb21c80 : isMoocaUsingPhoneAndL ? svgPaths.p3950fb00 : svgPaths.p10b79880} fill="#E8B022" id="Vector" />
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.p3e9fe080 : isMoocaUsingPhoneAndS ? svgPaths.p3f528300 : isMoocaUsingPhoneAndL ? svgPaths.pcfed700 : svgPaths.p145e4500} fill="white" id="Vector_2" />
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.pa021e80 : isMoocaUsingPhoneAndS ? svgPaths.p29de2780 : isMoocaUsingPhoneAndL ? svgPaths.p281e8380 : svgPaths.pb8d2200} fill="white" id="Vector_3" />
                    <path d={isMoocaUsingPhoneAndXs ? svgPaths.p3b29700 : isMoocaUsingPhoneAndS ? svgPaths.p15744100 : isMoocaUsingPhoneAndL ? svgPaths.p20376240 : svgPaths.p3b4a6880} fill="white" id="Vector_4" />
                  </g>
                </svg>
              </div>
            </>
          )}
        </div>
      )}
      {mooca === "Mooca hugging sunny" && (
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaHuggingSunnyAndL ? "left-[calc(50%+12.81px)] top-[calc(50%+6.5px)]" : isMoocaHuggingSunnyAndM ? "left-[calc(50%+6.5px)] top-[calc(50%+5.96px)]" : isMoocaHuggingSunnyAndXs ? "left-[calc(50%-0.35px)] top-[calc(50%+3.74px)]" : "left-[calc(50%+3.8px)] top-[calc(50%+5.53px)]"}`} data-name="Group">
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[135.72px] left-[calc(50%-6.99px)] top-[calc(50%-40.64px)] w-[213.026px]" : isMoocaHuggingSunnyAndM ? "h-[108.523px] left-[calc(50%-9.33px)] top-[calc(50%-31.74px)] w-[170.339px]" : isMoocaHuggingSunnyAndXs ? "h-[64.627px] left-[calc(50%-9.78px)] top-[calc(50%-18.71px)] w-[101.439px]" : "h-[93.807px] left-[calc(50%-9.88px)] top-[calc(50%-27.05px)] w-[147.24px]"}`} data-name="Group">
            <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "135.72" : isMoocaHuggingSunnyAndM ? "108.523" : isMoocaHuggingSunnyAndXs ? "64.6274" : "93.807"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 213.026 135.72" : isMoocaHuggingSunnyAndM ? "0 0 170.339 108.523" : isMoocaHuggingSunnyAndXs ? "0 0 101.439 64.6274" : "0 0 147.24 93.807"} width={isMoocaHuggingSunnyAndL ? "213.026" : isMoocaHuggingSunnyAndM ? "170.339" : isMoocaHuggingSunnyAndXs ? "101.439" : "147.24"}>
              <g id="Group">
                <path d={isMoocaHuggingSunnyAndL ? svgPaths.p237c2480 : isMoocaHuggingSunnyAndM ? svgPaths.p55f3a00 : isMoocaHuggingSunnyAndXs ? svgPaths.p24706c70 : svgPaths.p3a7bdc00} fill="white" id="Vector" />
                <g id="Group_2">
                  <path d={isMoocaHuggingSunnyAndL ? svgPaths.p2dee0000 : isMoocaHuggingSunnyAndM ? svgPaths.p2ee8ed70 : isMoocaHuggingSunnyAndXs ? svgPaths.p19cd6800 : svgPaths.p5f16500} fill="#D2DEED" id="Vector_2" />
                </g>
              </g>
            </svg>
          </div>
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[88.652px] left-[calc(50%+7.98px)] top-[calc(50%+63.31px)] w-[103.064px]" : isMoocaHuggingSunnyAndM ? "h-[70.887px] left-[calc(50%+2.63px)] top-[calc(50%+51.38px)] w-[82.412px]" : isMoocaHuggingSunnyAndXs ? "h-[42.215px] left-[calc(50%-2.65px)] top-[calc(50%+30.79px)] w-[49.077px]" : "h-[61.275px] left-[calc(50%+0.46px)] top-[calc(50%+44.8px)] w-[71.236px]"}`} data-name="Group">
            <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "88.6521" : isMoocaHuggingSunnyAndM ? "70.8874" : isMoocaHuggingSunnyAndXs ? "42.2146" : "61.2747"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 103.064 88.6521" : isMoocaHuggingSunnyAndM ? "0 0 82.4116 70.8874" : isMoocaHuggingSunnyAndXs ? "0 0 49.0775 42.2146" : "0 0 71.2362 61.2747"} width={isMoocaHuggingSunnyAndL ? "103.064" : isMoocaHuggingSunnyAndM ? "82.4116" : isMoocaHuggingSunnyAndXs ? "49.0775" : "71.2362"}>
              <g id="Group">
                <path d={isMoocaHuggingSunnyAndL ? svgPaths.pdcb1480 : isMoocaHuggingSunnyAndM ? svgPaths.p9954a80 : isMoocaHuggingSunnyAndXs ? svgPaths.p2e22ad00 : svgPaths.p47c97f0} fill="white" id="Vector" />
                <g id="Group_2">
                  <path d={isMoocaHuggingSunnyAndL ? svgPaths.p32e12580 : isMoocaHuggingSunnyAndM ? svgPaths.p31d3d800 : isMoocaHuggingSunnyAndXs ? svgPaths.p20d8cf00 : svgPaths.p3436db80} fill="#D2DEED" id="Vector_2" />
                </g>
              </g>
            </svg>
          </div>
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[4.629px] left-[calc(50%+9.66px)] top-[calc(50%-29.8px)] w-[25.13px]" : isMoocaHuggingSunnyAndM ? "h-[3.701px] left-[calc(50%+3.98px)] top-[calc(50%-23.07px)] w-[20.095px]" : isMoocaHuggingSunnyAndXs ? "h-[2.204px] left-[calc(50%-1.85px)] top-[calc(50%-13.55px)] w-[11.967px]" : "h-[3.199px] left-[calc(50%+1.63px)] top-[calc(50%-19.56px)] w-[17.37px]"}`} data-name="Vector">
            <div className={`absolute ${isMoocaHuggingSunnyAndL ? "inset-[-26.89%_-4.95%]" : isMoocaHuggingSunnyAndM ? "inset-[-33.63%_-6.19%]" : isMoocaHuggingSunnyAndXs ? "inset-[-56.47%_-10.4%]" : "inset-[-38.9%_-7.17%]"}`}>
              <svg className="block size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "7.11792" : isMoocaHuggingSunnyAndM ? "6.19039" : isMoocaHuggingSunnyAndXs ? "4.69332" : "5.68849"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 27.6195 7.11792" : isMoocaHuggingSunnyAndM ? "0 0 22.5838 6.19039" : isMoocaHuggingSunnyAndXs ? "0 0 14.4559 4.69332" : "0 0 19.8589 5.68849"} width={isMoocaHuggingSunnyAndL ? "27.6195" : isMoocaHuggingSunnyAndM ? "22.5838" : isMoocaHuggingSunnyAndXs ? "14.4559" : "19.8589"}>
                <path d={isMoocaHuggingSunnyAndL ? svgPaths.p1ec5a8c0 : isMoocaHuggingSunnyAndM ? svgPaths.p1b848500 : isMoocaHuggingSunnyAndXs ? svgPaths.p2c88bf00 : svgPaths.p295f8c00} id="Vector" stroke="#2359A8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.4892" />
              </svg>
            </div>
          </div>
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[10.366px] left-[calc(50%+37.48px)] top-[calc(50%-38.9px)] w-[10.324px]" : isMoocaHuggingSunnyAndM ? "h-[8.289px] left-[calc(50%+26.23px)] top-[calc(50%-30.35px)] w-[8.255px]" : isMoocaHuggingSunnyAndXs ? "h-[4.936px] left-[calc(50%+11.4px)] top-[calc(50%-17.88px)] w-[4.916px]" : "h-[7.165px] left-[calc(50%+20.86px)] top-[calc(50%-25.85px)] w-[7.136px]"}`} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "10.3658" : isMoocaHuggingSunnyAndM ? "8.28866" : isMoocaHuggingSunnyAndXs ? "4.93603" : "7.16467"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 10.324 10.3658" : isMoocaHuggingSunnyAndM ? "0 0 8.25518 8.28866" : isMoocaHuggingSunnyAndXs ? "0 0 4.9161 4.93603" : "0 0 7.13573 7.16467"} width={isMoocaHuggingSunnyAndL ? "10.324" : isMoocaHuggingSunnyAndM ? "8.25518" : isMoocaHuggingSunnyAndXs ? "4.9161" : "7.13573"}>
              <path d={isMoocaHuggingSunnyAndL ? svgPaths.p387f0d40 : isMoocaHuggingSunnyAndM ? svgPaths.p5933e00 : isMoocaHuggingSunnyAndXs ? svgPaths.p30db3a00 : svgPaths.p242edf80} fill="#2359A8" id="Vector" />
            </svg>
          </div>
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[10.827px] left-[calc(50%-17.3px)] top-[calc(50%-39.1px)] w-[10.752px]" : isMoocaHuggingSunnyAndM ? "h-[8.658px] left-[calc(50%-17.57px)] top-[calc(50%-30.51px)] w-[8.598px]" : isMoocaHuggingSunnyAndXs ? "h-[5.156px] left-[calc(50%-14.69px)] top-[calc(50%-17.98px)] w-[5.12px]" : "h-[7.484px] left-[calc(50%-17.01px)] top-[calc(50%-25.99px)] w-[7.432px]"}`} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "10.8272" : isMoocaHuggingSunnyAndM ? "8.65761" : isMoocaHuggingSunnyAndXs ? "5.15575" : "7.4836"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 10.7522 10.8272" : isMoocaHuggingSunnyAndM ? "0 0 8.59764 8.65761" : isMoocaHuggingSunnyAndXs ? "0 0 5.12004 5.15575" : "0 0 7.43175 7.4836"} width={isMoocaHuggingSunnyAndL ? "10.7522" : isMoocaHuggingSunnyAndM ? "8.59764" : isMoocaHuggingSunnyAndXs ? "5.12004" : "7.43175"}>
              <path d={isMoocaHuggingSunnyAndL ? svgPaths.p3aab5d80 : isMoocaHuggingSunnyAndM ? svgPaths.p33912d00 : isMoocaHuggingSunnyAndXs ? svgPaths.p14cf7f80 : svgPaths.p2389ab00} fill="#2359A8" id="Vector" />
            </svg>
          </div>
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[21.913px] left-[calc(50%+10.68px)] top-[calc(50%-20.75px)] w-[106.623px]" : isMoocaHuggingSunnyAndM ? "h-[17.522px] left-[calc(50%+4.79px)] top-[calc(50%-15.83px)] w-[85.257px]" : isMoocaHuggingSunnyAndXs ? "h-[10.436px] left-[calc(50%-1.37px)] top-[calc(50%-9.23px)] w-[50.773px]" : "h-[15.146px] left-[calc(50%+2.33px)] top-[calc(50%-13.3px)] w-[73.696px]"}`} data-name="Group">
            <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "21.9135" : isMoocaHuggingSunnyAndM ? "17.522" : isMoocaHuggingSunnyAndXs ? "10.436" : "15.1464"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 106.623 21.9135" : isMoocaHuggingSunnyAndM ? "0 0 85.2567 17.522" : isMoocaHuggingSunnyAndXs ? "0 0 50.7729 10.436" : "0 0 73.696 15.1464"} width={isMoocaHuggingSunnyAndL ? "106.623" : isMoocaHuggingSunnyAndM ? "85.2567" : isMoocaHuggingSunnyAndXs ? "50.7729" : "73.696"}>
              <g id="Group">
                <path d={isMoocaHuggingSunnyAndL ? svgPaths.p1df40900 : isMoocaHuggingSunnyAndM ? svgPaths.p2cffa500 : isMoocaHuggingSunnyAndXs ? svgPaths.p2d51e080 : svgPaths.p39330380} fill="#EFF2F8" id="Vector" />
                <path d={isMoocaHuggingSunnyAndL ? svgPaths.p204fc300 : isMoocaHuggingSunnyAndM ? svgPaths.p3ab700 : isMoocaHuggingSunnyAndXs ? svgPaths.p16ddef00 : svgPaths.p204dda00} fill="#EFF2F8" id="Vector_2" />
              </g>
            </svg>
          </div>
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[90.673px] left-[calc(50%-6.93px)] top-[calc(50%-15.72px)] w-[209.482px]" : isMoocaHuggingSunnyAndM ? "h-[72.504px] left-[calc(50%-9.28px)] top-[calc(50%-11.81px)] w-[167.505px]" : isMoocaHuggingSunnyAndXs ? "h-[43.177px] left-[calc(50%-9.75px)] top-[calc(50%-6.84px)] w-[99.752px]" : "h-[62.672px] left-[calc(50%-9.84px)] top-[calc(50%-9.83px)] w-[144.79px]"}`} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "90.6733" : isMoocaHuggingSunnyAndM ? "72.5036" : isMoocaHuggingSunnyAndXs ? "43.1771" : "62.6718"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 209.482 90.6733" : isMoocaHuggingSunnyAndM ? "0 0 167.505 72.5036" : isMoocaHuggingSunnyAndXs ? "0 0 99.7519 43.1771" : "0 0 144.79 62.6718"} width={isMoocaHuggingSunnyAndL ? "209.482" : isMoocaHuggingSunnyAndM ? "167.505" : isMoocaHuggingSunnyAndXs ? "99.7519" : "144.79"}>
              <path d={isMoocaHuggingSunnyAndL ? svgPaths.p15c9a600 : isMoocaHuggingSunnyAndM ? svgPaths.pc5455f0 : isMoocaHuggingSunnyAndXs ? svgPaths.pd063100 : svgPaths.p231a5500} fill="#D2DEED" id="Vector" />
            </svg>
          </div>
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[31.279px] left-[calc(50%+26.14px)] top-[calc(50%+53.61px)] w-[6.778px]" : isMoocaHuggingSunnyAndM ? "h-[25.011px] left-[calc(50%+17.16px)] top-[calc(50%+43.62px)] w-[5.42px]" : isMoocaHuggingSunnyAndXs ? "h-[14.895px] left-[calc(50%+5.99px)] top-[calc(50%+26.17px)] w-[3.228px]" : "h-[21.62px] left-[calc(50%+13.02px)] top-[calc(50%+38.09px)] w-[4.685px]"}`} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "31.2793" : isMoocaHuggingSunnyAndM ? "25.0114" : isMoocaHuggingSunnyAndXs ? "14.8947" : "21.6197"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 6.77818 31.2793" : isMoocaHuggingSunnyAndM ? "0 0 5.41992 25.0114" : isMoocaHuggingSunnyAndXs ? "0 0 3.22766 14.8947" : "0 0 4.68495 21.6197"} width={isMoocaHuggingSunnyAndL ? "6.77818" : isMoocaHuggingSunnyAndM ? "5.41992" : isMoocaHuggingSunnyAndXs ? "3.22766" : "4.68495"}>
              <path d={isMoocaHuggingSunnyAndL ? svgPaths.p357b2a00 : isMoocaHuggingSunnyAndM ? svgPaths.p17bc0b00 : isMoocaHuggingSunnyAndXs ? svgPaths.p2a218080 : svgPaths.p30c83f00} fill="#D2DEED" id="Vector" />
            </svg>
          </div>
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[10.508px] left-[calc(50%+5.63px)] top-[calc(50%+87.61px)] w-[13.68px]" : isMoocaHuggingSunnyAndM ? "h-[8.402px] left-[calc(50%+0.76px)] top-[calc(50%+70.81px)] w-[10.939px]" : isMoocaHuggingSunnyAndXs ? "h-[5.004px] left-[calc(50%-3.77px)] top-[calc(50%+42.36px)] w-[6.514px]" : "h-[7.263px] left-[calc(50%-1.16px)] top-[calc(50%+61.59px)] w-[9.455px]"}`} data-name="Group">
            <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "10.508" : isMoocaHuggingSunnyAndM ? "8.40231" : isMoocaHuggingSunnyAndXs ? "5.00372" : "7.26292"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 13.6799 10.508" : isMoocaHuggingSunnyAndM ? "0 0 10.9386 8.40231" : isMoocaHuggingSunnyAndXs ? "0 0 6.51415 5.00372" : "0 0 9.45531 7.26292"} width={isMoocaHuggingSunnyAndL ? "13.6799" : isMoocaHuggingSunnyAndM ? "10.9386" : isMoocaHuggingSunnyAndXs ? "6.51415" : "9.45531"}>
              <g id="Group">
                <path d={isMoocaHuggingSunnyAndL ? svgPaths.p2307ef70 : isMoocaHuggingSunnyAndM ? svgPaths.p39110200 : isMoocaHuggingSunnyAndXs ? svgPaths.p3c3635f2 : svgPaths.p4a5f500} fill="#D2DEED" id="Vector" />
              </g>
            </svg>
          </div>
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[10.508px] left-[calc(50%-17.4px)] top-[calc(50%+87.45px)] w-[13.68px]" : isMoocaHuggingSunnyAndM ? "h-[8.402px] left-[calc(50%-17.66px)] top-[calc(50%+70.69px)] w-[10.939px]" : isMoocaHuggingSunnyAndXs ? "h-[5.004px] left-[calc(50%-14.74px)] top-[calc(50%+42.29px)] w-[6.514px]" : "h-[7.263px] left-[calc(50%-17.08px)] top-[calc(50%+61.48px)] w-[9.455px]"}`} data-name="Group">
            <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "10.5079" : isMoocaHuggingSunnyAndM ? "8.4023" : isMoocaHuggingSunnyAndXs ? "5.00371" : "7.26291"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 13.6799 10.5079" : isMoocaHuggingSunnyAndM ? "0 0 10.9386 8.4023" : isMoocaHuggingSunnyAndXs ? "0 0 6.51415 5.00371" : "0 0 9.45531 7.26291"} width={isMoocaHuggingSunnyAndL ? "13.6799" : isMoocaHuggingSunnyAndM ? "10.9386" : isMoocaHuggingSunnyAndXs ? "6.51415" : "9.45531"}>
              <g id="Group">
                <path d={isMoocaHuggingSunnyAndL ? svgPaths.p32f86700 : isMoocaHuggingSunnyAndM ? svgPaths.p2283e680 : isMoocaHuggingSunnyAndXs ? svgPaths.p12235b00 : svgPaths.p15190200} fill="#D2DEED" id="Vector" />
              </g>
            </svg>
          </div>
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[9.366px] left-[calc(50%+28.54px)] top-[calc(50%+52.05px)] w-[7.668px]" : isMoocaHuggingSunnyAndM ? "h-[7.489px] left-[calc(50%+19.08px)] top-[calc(50%+42.38px)] w-[6.132px]" : isMoocaHuggingSunnyAndXs ? "h-[4.46px] left-[calc(50%+7.14px)] top-[calc(50%+25.43px)] w-[3.652px]" : "h-[6.474px] left-[calc(50%+14.68px)] top-[calc(50%+37.02px)] w-[5.3px]"}`} data-name="Group">
            <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "9.36599" : isMoocaHuggingSunnyAndM ? "7.48918" : isMoocaHuggingSunnyAndXs ? "4.45993" : "6.47361"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 7.66848 9.36599" : isMoocaHuggingSunnyAndM ? "0 0 6.13182 7.48918" : isMoocaHuggingSunnyAndXs ? "0 0 3.6516 4.45993" : "0 0 5.30032 6.47361"} width={isMoocaHuggingSunnyAndL ? "7.66848" : isMoocaHuggingSunnyAndM ? "6.13182" : isMoocaHuggingSunnyAndXs ? "3.6516" : "5.30032"}>
              <g id="Group">
                <path d={isMoocaHuggingSunnyAndL ? svgPaths.p27d3b500 : isMoocaHuggingSunnyAndM ? svgPaths.p6c97500 : isMoocaHuggingSunnyAndXs ? svgPaths.p35ef9a00 : svgPaths.p1ec2800} fill="#D2DEED" id="Vector" />
              </g>
            </svg>
          </div>
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaHuggingSunnyAndL ? "left-[calc(50%+67.87px)] top-[calc(50%+56.9px)]" : isMoocaHuggingSunnyAndM ? "left-[calc(50%+50.53px)] top-[calc(50%+46.25px)]" : isMoocaHuggingSunnyAndXs ? "left-[calc(50%+25.87px)] top-[calc(50%+27.74px)]" : "left-[calc(50%+41.86px)] top-[calc(50%+40.36px)]"}`} data-name="Group">
            <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[23.908px] left-[calc(50%+76.08px)] top-[calc(50%+14.78px)] w-[81.942px]" : isMoocaHuggingSunnyAndM ? "h-[19.117px] left-[calc(50%+57.09px)] top-[calc(50%+12.58px)] w-[65.522px]" : isMoocaHuggingSunnyAndXs ? "h-[11.384px] left-[calc(50%+29.77px)] top-[calc(50%+7.68px)] w-[39.02px]" : "h-[16.524px] left-[calc(50%+47.53px)] top-[calc(50%+11.26px)] w-[56.638px]"}`} data-name="Group">
              <div className={`absolute ${isMoocaHuggingSunnyAndL ? "inset-[-3.56%_-1.04%]" : isMoocaHuggingSunnyAndM ? "inset-[-4.45%_-1.3%]" : isMoocaHuggingSunnyAndXs ? "inset-[-7.47%_-2.18%]" : "inset-[-5.15%_-1.5%]"}`}>
                <svg className="block size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "25.6082" : isMoocaHuggingSunnyAndM ? "20.8173" : isMoocaHuggingSunnyAndXs ? "13.0851" : "18.2252"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 83.643 25.6082" : isMoocaHuggingSunnyAndM ? "0 0 67.2229 20.8173" : isMoocaHuggingSunnyAndXs ? "0 0 40.7212 13.0851" : "0 0 58.3383 18.2252"} width={isMoocaHuggingSunnyAndL ? "83.643" : isMoocaHuggingSunnyAndM ? "67.2229" : isMoocaHuggingSunnyAndXs ? "40.7212" : "58.3383"}>
                  <g id="Group">
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.p18429c00 : isMoocaHuggingSunnyAndM ? svgPaths.p425d00 : isMoocaHuggingSunnyAndXs ? svgPaths.p336178d0 : svgPaths.p35256000} id="Vector" stroke="#DFA23B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.p2e506400 : isMoocaHuggingSunnyAndM ? svgPaths.p3f934580 : isMoocaHuggingSunnyAndXs ? svgPaths.p3aafdc30 : svgPaths.p388b7700} id="Vector_2" stroke="#DFA23B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.p2e6d8780 : isMoocaHuggingSunnyAndM ? svgPaths.pb770940 : isMoocaHuggingSunnyAndXs ? svgPaths.p3918dd00 : svgPaths.p149e22c0} id="Vector_3" stroke="#DFA23B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.pfc65200 : isMoocaHuggingSunnyAndM ? svgPaths.p361f3620 : isMoocaHuggingSunnyAndXs ? svgPaths.p5f42b40 : svgPaths.pdf92ef0} id="Vector_4" stroke="#DFA23B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.p2372a980 : isMoocaHuggingSunnyAndM ? svgPaths.p23eb6280 : isMoocaHuggingSunnyAndXs ? svgPaths.p2e1de00 : svgPaths.p3b793280} id="Vector_5" stroke="#DFA23B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                  </g>
                </svg>
              </div>
            </div>
            <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "left-[calc(50%+74.52px)] size-[129.207px] top-[calc(50%+56.9px)]" : isMoocaHuggingSunnyAndM ? "left-[calc(50%+55.84px)] size-[103.316px] top-[calc(50%+46.25px)]" : isMoocaHuggingSunnyAndXs ? "left-[calc(50%+29.03px)] size-[61.526px] top-[calc(50%+27.74px)]" : "left-[calc(50%+46.46px)] size-[89.305px] top-[calc(50%+40.36px)]"}`} data-name="Group">
              <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "129.207" : isMoocaHuggingSunnyAndM ? "103.316" : isMoocaHuggingSunnyAndXs ? "61.5261" : "89.3054"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 129.207 129.207" : isMoocaHuggingSunnyAndM ? "0 0 103.316 103.316" : isMoocaHuggingSunnyAndXs ? "0 0 61.5261 61.5261" : "0 0 89.3054 89.3054"} width={isMoocaHuggingSunnyAndL ? "129.207" : isMoocaHuggingSunnyAndM ? "103.316" : isMoocaHuggingSunnyAndXs ? "61.5261" : "89.3054"}>
                <g id="Group">
                  <path d={isMoocaHuggingSunnyAndL ? svgPaths.p3849100 : isMoocaHuggingSunnyAndM ? svgPaths.p19809380 : isMoocaHuggingSunnyAndXs ? svgPaths.p5e57400 : svgPaths.p302e3300} fill="#FEED53" id="Vector" />
                  <g id="Group_2">
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.p26695200 : isMoocaHuggingSunnyAndM ? svgPaths.p17cc9600 : isMoocaHuggingSunnyAndXs ? svgPaths.p22902a00 : svgPaths.p2467e7f0} fill="#E8A523" id="Vector_2" />
                  </g>
                </g>
              </svg>
            </div>
            <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[4.596px] left-[calc(50%+65.37px)] top-[calc(50%+23.67px)] w-[4.618px]" : isMoocaHuggingSunnyAndM ? "h-[3.675px] left-[calc(50%+48.53px)] top-[calc(50%+19.68px)] w-[3.693px]" : isMoocaHuggingSunnyAndXs ? "h-[2.188px] left-[calc(50%+24.68px)] top-[calc(50%+11.91px)] w-[2.199px]" : "h-[3.177px] left-[calc(50%+40.13px)] top-[calc(50%+17.4px)] w-[3.192px]"}`} data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "4.59581" : isMoocaHuggingSunnyAndM ? "3.67487" : isMoocaHuggingSunnyAndXs ? "2.18845" : "3.17654"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 4.6179 4.59581" : isMoocaHuggingSunnyAndM ? "0 0 3.69254 3.67487" : isMoocaHuggingSunnyAndXs ? "0 0 2.19897 2.18845" : "0 0 3.19181 3.17654"} width={isMoocaHuggingSunnyAndL ? "4.6179" : isMoocaHuggingSunnyAndM ? "3.69254" : isMoocaHuggingSunnyAndXs ? "2.19897" : "3.19181"}>
                <path d={isMoocaHuggingSunnyAndL ? svgPaths.p2ccaae80 : isMoocaHuggingSunnyAndM ? svgPaths.pd74e800 : isMoocaHuggingSunnyAndXs ? svgPaths.p266dc200 : svgPaths.p49c4380} fill="#E8A523" id="Vector" />
              </svg>
            </div>
            <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[4.596px] left-[calc(50%+85.19px)] top-[calc(50%+25.17px)] w-[4.62px]" : isMoocaHuggingSunnyAndM ? "h-[3.675px] left-[calc(50%+64.37px)] top-[calc(50%+20.89px)] w-[3.694px]" : isMoocaHuggingSunnyAndXs ? "h-[2.188px] left-[calc(50%+34.11px)] top-[calc(50%+12.63px)] w-[2.2px]" : "h-[3.177px] left-[calc(50%+53.83px)] top-[calc(50%+18.44px)] w-[3.193px]"}`} data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "4.59581" : isMoocaHuggingSunnyAndM ? "3.67487" : isMoocaHuggingSunnyAndXs ? "2.18845" : "3.17654"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 4.61954 4.59581" : isMoocaHuggingSunnyAndM ? "0 0 3.69385 3.67487" : isMoocaHuggingSunnyAndXs ? "0 0 2.19975 2.18845" : "0 0 3.19294 3.17654"} width={isMoocaHuggingSunnyAndL ? "4.61954" : isMoocaHuggingSunnyAndM ? "3.69385" : isMoocaHuggingSunnyAndXs ? "2.19975" : "3.19294"}>
                <path d={isMoocaHuggingSunnyAndL ? svgPaths.p3c725a40 : isMoocaHuggingSunnyAndM ? svgPaths.p3cda5e00 : isMoocaHuggingSunnyAndXs ? svgPaths.p234c6580 : svgPaths.p1702fc80} fill="#E8A523" id="Vector" />
              </svg>
            </div>
            <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center ${isMoocaHuggingSunnyAndL ? "left-[calc(50%+55.81px)] size-[18.136px] top-[calc(50%+29.32px)]" : isMoocaHuggingSunnyAndM ? "left-[calc(50%+40.88px)] size-[14.502px] top-[calc(50%+24.21px)]" : isMoocaHuggingSunnyAndXs ? "left-[calc(50%+20.12px)] size-[8.636px] top-[calc(50%+14.61px)]" : "left-[calc(50%+33.52px)] size-[12.535px] top-[calc(50%+21.31px)]"}`}>
              <div className="flex-none rotate-[-67.82deg]">
                <div className={`relative ${isMoocaHuggingSunnyAndL ? "size-[13.912px]" : isMoocaHuggingSunnyAndM ? "size-[11.125px]" : isMoocaHuggingSunnyAndXs ? "size-[6.625px]" : "size-[9.616px]"}`} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "13.9125" : isMoocaHuggingSunnyAndM ? "11.1246" : isMoocaHuggingSunnyAndXs ? "6.62489" : "9.61606"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 13.9125 13.9125" : isMoocaHuggingSunnyAndM ? "0 0 11.1246 11.1246" : isMoocaHuggingSunnyAndXs ? "0 0 6.62489 6.62489" : "0 0 9.61606 9.61606"} width={isMoocaHuggingSunnyAndL ? "13.9125" : isMoocaHuggingSunnyAndM ? "11.1246" : isMoocaHuggingSunnyAndXs ? "6.62489" : "9.61606"}>
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.p7fd800 : isMoocaHuggingSunnyAndM ? svgPaths.p19b68d80 : isMoocaHuggingSunnyAndXs ? svgPaths.p127e8c00 : svgPaths.p31b68400} fill="#FDC05C" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "left-[calc(50%+95.05px)] size-[13.908px] top-[calc(50%+33.67px)]" : isMoocaHuggingSunnyAndM ? "left-[calc(50%+72.26px)] size-[11.121px] top-[calc(50%+27.68px)]" : isMoocaHuggingSunnyAndXs ? "left-[calc(50%+38.81px)] size-[6.623px] top-[calc(50%+16.68px)]" : "left-[calc(50%+60.65px)] size-[9.613px] top-[calc(50%+24.31px)]"}`} data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "13.9082" : isMoocaHuggingSunnyAndM ? "11.1212" : isMoocaHuggingSunnyAndXs ? "6.62287" : "9.61312"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 13.9082 13.9082" : isMoocaHuggingSunnyAndM ? "0 0 11.1212 11.1212" : isMoocaHuggingSunnyAndXs ? "0 0 6.62287 6.62287" : "0 0 9.61312 9.61312"} width={isMoocaHuggingSunnyAndL ? "13.9082" : isMoocaHuggingSunnyAndM ? "11.1212" : isMoocaHuggingSunnyAndXs ? "6.62287" : "9.61312"}>
                <path d={isMoocaHuggingSunnyAndL ? svgPaths.p6d72200 : isMoocaHuggingSunnyAndM ? svgPaths.p28367380 : isMoocaHuggingSunnyAndXs ? svgPaths.p34a5d500 : svgPaths.p20028700} fill="#FDC05C" id="Vector" />
              </svg>
            </div>
            <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaHuggingSunnyAndL ? "left-[calc(50%+51.27px)] top-[calc(50%+65.61px)]" : isMoocaHuggingSunnyAndM ? "left-[calc(50%+37.25px)] top-[calc(50%+53.22px)]" : isMoocaHuggingSunnyAndXs ? "left-[calc(50%+17.96px)] top-[calc(50%+31.89px)]" : "left-[calc(50%+30.38px)] top-[calc(50%+46.39px)]"}`} data-name="Group">
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[17.232px] left-[calc(50%+51.27px)] top-[calc(50%+65.61px)] w-[15.439px]" : isMoocaHuggingSunnyAndM ? "h-[13.779px] left-[calc(50%+37.25px)] top-[calc(50%+53.22px)] w-[12.345px]" : isMoocaHuggingSunnyAndXs ? "h-[8.206px] left-[calc(50%+17.96px)] top-[calc(50%+31.89px)] w-[7.352px]" : "h-[11.91px] left-[calc(50%+30.38px)] top-[calc(50%+46.39px)] w-[10.671px]"}`} data-name="Group">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "17.2319" : isMoocaHuggingSunnyAndM ? "13.7789" : isMoocaHuggingSunnyAndXs ? "8.20556" : "11.9104"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 15.439 17.2319" : isMoocaHuggingSunnyAndM ? "0 0 12.3452 13.7789" : isMoocaHuggingSunnyAndXs ? "0 0 7.3518 8.20556" : "0 0 10.6712 11.9104"} width={isMoocaHuggingSunnyAndL ? "15.439" : isMoocaHuggingSunnyAndM ? "12.3452" : isMoocaHuggingSunnyAndXs ? "7.3518" : "10.6712"}>
                  <g id="Group">
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.p30979e10 : isMoocaHuggingSunnyAndM ? svgPaths.p1b781000 : isMoocaHuggingSunnyAndXs ? svgPaths.p10aa6280 : svgPaths.p3d696100} fill="#E8A523" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
            <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaHuggingSunnyAndL ? "left-[calc(50%+85.34px)] top-[calc(50%+69.71px)]" : isMoocaHuggingSunnyAndM ? "left-[calc(50%+64.5px)] top-[calc(50%+56.5px)]" : isMoocaHuggingSunnyAndXs ? "left-[calc(50%+34.19px)] top-[calc(50%+33.84px)]" : "left-[calc(50%+53.94px)] top-[calc(50%+49.22px)]"}`} data-name="Group">
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[17.436px] left-[calc(50%+85.34px)] top-[calc(50%+69.71px)] w-[21.955px]" : isMoocaHuggingSunnyAndM ? "h-[13.942px] left-[calc(50%+64.5px)] top-[calc(50%+56.5px)] w-[17.556px]" : isMoocaHuggingSunnyAndXs ? "h-[8.303px] left-[calc(50%+34.19px)] top-[calc(50%+33.84px)] w-[10.455px]" : "h-[12.051px] left-[calc(50%+53.94px)] top-[calc(50%+49.22px)] w-[15.175px]"}`} data-name="Group">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "17.4358" : isMoocaHuggingSunnyAndM ? "13.9419" : isMoocaHuggingSunnyAndXs ? "8.30265" : "12.0513"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 21.9551 17.4358" : isMoocaHuggingSunnyAndM ? "0 0 17.5556 13.9419" : isMoocaHuggingSunnyAndXs ? "0 0 10.4546 8.30265" : "0 0 15.1749 12.0513"} width={isMoocaHuggingSunnyAndL ? "21.9551" : isMoocaHuggingSunnyAndM ? "17.5556" : isMoocaHuggingSunnyAndXs ? "10.4546" : "15.1749"}>
                  <g id="Group">
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.pd4447f0 : isMoocaHuggingSunnyAndM ? svgPaths.p394e9f80 : isMoocaHuggingSunnyAndXs ? svgPaths.p64424f0 : svgPaths.p17a1f170} fill="#E8A523" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
            <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaHuggingSunnyAndL ? "left-[calc(50%+73.92px)] top-[calc(50%+28.14px)]" : isMoocaHuggingSunnyAndM ? "left-[calc(50%+55.36px)] top-[calc(50%+23.26px)]" : isMoocaHuggingSunnyAndXs ? "left-[calc(50%+28.74px)] top-[calc(50%+14.04px)]" : "left-[calc(50%+46.04px)] top-[calc(50%+20.49px)]"}`} data-name="Group">
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[4.218px] left-[calc(50%+73.92px)] top-[calc(50%+28.14px)] w-[5.62px]" : isMoocaHuggingSunnyAndM ? "h-[3.373px] left-[calc(50%+55.36px)] top-[calc(50%+23.26px)] w-[4.494px]" : isMoocaHuggingSunnyAndXs ? "h-[2.008px] left-[calc(50%+28.74px)] top-[calc(50%+14.04px)] w-[2.676px]" : "h-[2.915px] left-[calc(50%+46.04px)] top-[calc(50%+20.49px)] w-[3.884px]"}`} data-name="Group">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "4.21771" : isMoocaHuggingSunnyAndM ? "3.37254" : isMoocaHuggingSunnyAndXs ? "2.0084" : "2.91521"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 5.61963 4.21771" : isMoocaHuggingSunnyAndM ? "0 0 4.49354 3.37254" : isMoocaHuggingSunnyAndXs ? "0 0 2.67598 2.0084" : "0 0 3.88419 2.91521"} width={isMoocaHuggingSunnyAndL ? "5.61963" : isMoocaHuggingSunnyAndM ? "4.49354" : isMoocaHuggingSunnyAndXs ? "2.67598" : "3.88419"}>
                  <g id="Group">
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.p3e9f6600 : isMoocaHuggingSunnyAndM ? svgPaths.p3a7f9000 : isMoocaHuggingSunnyAndXs ? svgPaths.p1a6d300 : svgPaths.p33be9300} fill="#E8A523" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
            <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[31.089px] left-[calc(50%+15.17px)] top-[calc(50%+54.62px)] w-[37.106px]" : isMoocaHuggingSunnyAndM ? "h-[24.859px] left-[calc(50%+8.39px)] top-[calc(50%+44.43px)] w-[29.671px]" : isMoocaHuggingSunnyAndXs ? "h-[14.804px] left-[calc(50%+0.77px)] top-[calc(50%+26.65px)] w-[17.669px]" : "h-[21.488px] left-[calc(50%+5.43px)] top-[calc(50%+38.79px)] w-[25.647px]"}`} data-name="Group">
              <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "31.0888" : isMoocaHuggingSunnyAndM ? "24.859" : isMoocaHuggingSunnyAndXs ? "14.804" : "21.488"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 37.1061 31.0888" : isMoocaHuggingSunnyAndM ? "0 0 29.6705 24.859" : isMoocaHuggingSunnyAndXs ? "0 0 17.6693 14.804" : "0 0 25.647 21.488"} width={isMoocaHuggingSunnyAndL ? "37.1061" : isMoocaHuggingSunnyAndM ? "29.6705" : isMoocaHuggingSunnyAndXs ? "17.6693" : "25.647"}>
                <g id="Group">
                  <path d={isMoocaHuggingSunnyAndL ? svgPaths.p36cc6f80 : isMoocaHuggingSunnyAndM ? svgPaths.p385fcc00 : isMoocaHuggingSunnyAndXs ? svgPaths.p3f85c200 : svgPaths.p1be28480} fill="#E8A523" id="Vector" />
                </g>
              </svg>
            </div>
            <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[61.103px] left-[calc(50%+76.58px)] top-[calc(50%+65.27px)] w-[98.579px]" : isMoocaHuggingSunnyAndM ? "h-[48.859px] left-[calc(50%+57.49px)] top-[calc(50%+52.95px)] w-[78.825px]" : isMoocaHuggingSunnyAndXs ? "h-[29.096px] left-[calc(50%+30.01px)] top-[calc(50%+31.73px)] w-[46.942px]" : "h-[42.233px] left-[calc(50%+47.88px)] top-[calc(50%+46.15px)] w-[68.136px]"}`} data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "61.1032" : isMoocaHuggingSunnyAndM ? "48.859" : isMoocaHuggingSunnyAndXs ? "29.0963" : "42.2335"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 98.5788 61.1032" : isMoocaHuggingSunnyAndM ? "0 0 78.825 48.859" : isMoocaHuggingSunnyAndXs ? "0 0 46.9416 29.0963" : "0 0 68.1359 42.2335"} width={isMoocaHuggingSunnyAndL ? "98.5788" : isMoocaHuggingSunnyAndM ? "78.825" : isMoocaHuggingSunnyAndXs ? "46.9416" : "68.1359"}>
                <path d={isMoocaHuggingSunnyAndL ? svgPaths.p2fde5100 : isMoocaHuggingSunnyAndM ? svgPaths.p19243640 : isMoocaHuggingSunnyAndXs ? svgPaths.pcd94e70 : svgPaths.p6504900} fill="#E8A523" id="Vector" />
              </svg>
            </div>
            <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaHuggingSunnyAndL ? "left-[calc(50%+75.21px)] top-[calc(50%+68.04px)]" : isMoocaHuggingSunnyAndM ? "left-[calc(50%+56.4px)] top-[calc(50%+55.16px)]" : isMoocaHuggingSunnyAndXs ? "left-[calc(50%+29.36px)] top-[calc(50%+33.04px)]" : "left-[calc(50%+46.93px)] top-[calc(50%+48.06px)]"}`} data-name="Group">
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[18.283px] left-[calc(50%+113.72px)] top-[calc(50%+79.17px)] w-[15.612px]" : isMoocaHuggingSunnyAndM ? "h-[14.619px] left-[calc(50%+87.19px)] top-[calc(50%+64.06px)] w-[12.481px]" : isMoocaHuggingSunnyAndXs ? "h-[8.706px] left-[calc(50%+47.7px)] top-[calc(50%+38.34px)] w-[7.432px]" : "h-[12.637px] left-[calc(50%+73.55px)] top-[calc(50%+55.76px)] w-[10.788px]"}`} data-name="Group">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "18.2825" : isMoocaHuggingSunnyAndM ? "14.6188" : isMoocaHuggingSunnyAndXs ? "8.70595" : "12.6366"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 15.6116 18.2825" : isMoocaHuggingSunnyAndM ? "0 0 12.4811 14.6188" : isMoocaHuggingSunnyAndXs ? "0 0 7.43196 8.70595" : "0 0 10.7884 12.6366"} width={isMoocaHuggingSunnyAndL ? "15.6116" : isMoocaHuggingSunnyAndM ? "12.4811" : isMoocaHuggingSunnyAndXs ? "7.43196" : "10.7884"}>
                  <g id="Group">
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.p2f88e980 : isMoocaHuggingSunnyAndM ? svgPaths.p359e7470 : isMoocaHuggingSunnyAndXs ? svgPaths.p4c9c070 : svgPaths.pf83e500} fill="white" id="Vector" />
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.pad9e940 : isMoocaHuggingSunnyAndM ? svgPaths.p3915ed00 : isMoocaHuggingSunnyAndXs ? svgPaths.p11e70200 : svgPaths.p3ef78080} fill="white" id="Vector_2" />
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.p237b6200 : isMoocaHuggingSunnyAndM ? svgPaths.p2e6bfc00 : isMoocaHuggingSunnyAndXs ? svgPaths.p263a3c50 : svgPaths.p93d4100} fill="white" id="Vector_3" />
                  </g>
                </svg>
              </div>
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[12.461px] left-[calc(50%+73.82px)] top-[calc(50%+53.99px)] w-[89.845px]" : isMoocaHuggingSunnyAndM ? "h-[9.964px] left-[calc(50%+55.28px)] top-[calc(50%+43.93px)] w-[71.839px]" : isMoocaHuggingSunnyAndXs ? "h-[5.934px] left-[calc(50%+28.7px)] top-[calc(50%+26.35px)] w-[42.78px]" : "h-[8.613px] left-[calc(50%+45.97px)] top-[calc(50%+38.36px)] w-[62.097px]"}`} data-name="Group">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "12.4608" : isMoocaHuggingSunnyAndM ? "9.96435" : isMoocaHuggingSunnyAndXs ? "5.93366" : "8.61298"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 89.8447 12.4608" : isMoocaHuggingSunnyAndM ? "0 0 71.8386 9.96435" : isMoocaHuggingSunnyAndXs ? "0 0 42.7804 5.93366" : "0 0 62.097 8.61298"} width={isMoocaHuggingSunnyAndL ? "89.8447" : isMoocaHuggingSunnyAndM ? "71.8386" : isMoocaHuggingSunnyAndXs ? "42.7804" : "62.097"}>
                  <g id="Group">
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.p27d0a800 : isMoocaHuggingSunnyAndM ? svgPaths.p23f5d100 : isMoocaHuggingSunnyAndXs ? svgPaths.p2c246e00 : svgPaths.p192072c0} fill="white" id="Vector" />
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.p2f83bb80 : isMoocaHuggingSunnyAndM ? svgPaths.p1a356300 : isMoocaHuggingSunnyAndXs ? svgPaths.p1c0ddb80 : svgPaths.p39460180} fill="white" id="Vector_2" />
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.p21527020 : isMoocaHuggingSunnyAndM ? svgPaths.p1ac54140 : isMoocaHuggingSunnyAndXs ? svgPaths.p350a3900 : svgPaths.p3bfa8100} fill="white" id="Vector_3" />
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.p2a79df00 : isMoocaHuggingSunnyAndM ? svgPaths.p3fb90380 : isMoocaHuggingSunnyAndXs ? svgPaths.p174a600 : svgPaths.p16407450} fill="white" id="Vector_4" />
                    <path d={isMoocaHuggingSunnyAndL ? svgPaths.p2b20cc00 : isMoocaHuggingSunnyAndM ? svgPaths.p32edea00 : isMoocaHuggingSunnyAndXs ? svgPaths.p21aac170 : svgPaths.p1cfb1180} fill="white" id="Vector_5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaHuggingSunnyAndL ? "h-[34.361px] left-[calc(50%-9.1px)] top-[calc(50%+47.35px)] w-[44.864px]" : isMoocaHuggingSunnyAndM ? "h-[27.476px] left-[calc(50%-11.02px)] top-[calc(50%+38.62px)] w-[35.873px]" : isMoocaHuggingSunnyAndXs ? "h-[16.362px] left-[calc(50%-10.79px)] top-[calc(50%+23.19px)] w-[21.363px]" : "h-[23.75px] left-[calc(50%-11.34px)] top-[calc(50%+33.76px)] w-[31.009px]"}`} data-name="Group">
            <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaHuggingSunnyAndL ? "34.361" : isMoocaHuggingSunnyAndM ? "27.4755" : isMoocaHuggingSunnyAndXs ? "16.3621" : "23.7497"} preserveAspectRatio="none" viewBox={isMoocaHuggingSunnyAndL ? "0 0 44.8635 34.361" : isMoocaHuggingSunnyAndM ? "0 0 35.8735 27.4755" : isMoocaHuggingSunnyAndXs ? "0 0 21.3633 16.3621" : "0 0 31.0089 23.7497"} width={isMoocaHuggingSunnyAndL ? "44.8635" : isMoocaHuggingSunnyAndM ? "35.8735" : isMoocaHuggingSunnyAndXs ? "21.3633" : "31.0089"}>
              <g id="Group">
                <path d={isMoocaHuggingSunnyAndL ? svgPaths.p33d05000 : isMoocaHuggingSunnyAndM ? svgPaths.p218e2900 : isMoocaHuggingSunnyAndXs ? svgPaths.p2ecce80 : svgPaths.p3951a400} fill="white" id="Vector" />
                <g id="Group_2">
                  <path d={isMoocaHuggingSunnyAndL ? svgPaths.p20c2cff0 : isMoocaHuggingSunnyAndM ? svgPaths.p2467fc00 : isMoocaHuggingSunnyAndXs ? svgPaths.p62ffb00 : svgPaths.p18251100} fill="#D2DEED" id="Vector_2" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      )}
      {(isHappyMoocaWithSunnyAndL || isMoocaWalletEnoughAndM || isMoocaWalletEnoughAndS || isMoocaWalletEnoughAndXs) && (
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[98px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%+0.5px)] w-[126px]" : isMoocaWalletEnoughAndS ? "h-[118px] left-[calc(50%+0.36px)] overflow-clip top-1/2 w-[151.714px]" : isMoocaWalletEnoughAndM ? "h-[151px] left-[calc(50%-0.43px)] overflow-clip top-[calc(50%+2.5px)] w-[194.143px]" : "contents left-[calc(50%-0.29px)] top-1/2"}`} data-name="Mooca">
          {mooca === "Mooca Wallet (enough)" && ["M", "S", "XS"].includes(size) && (
            <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletEnoughAndXs ? "left-[calc(50%+0.13px)] top-[calc(50%-1.05px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%+0.16px)] top-[calc(50%-1.27px)]" : "left-[calc(50%+0.2px)] top-[calc(50%-1.62px)]"}`}>
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[7.137px] left-[calc(50%+0.46px)] top-[calc(50%+15.79px)] w-[122.251px]" : isMoocaWalletEnoughAndS ? "h-[8.594px] left-[calc(50%+0.74px)] top-[calc(50%+22.9px)] w-[147.2px]" : "h-[10.997px] left-[calc(50%+1.03px)] top-[calc(50%+37.84px)] w-[188.366px]"}`} data-name="_x3C_Path_x3E__1_">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "7.13744" : isMoocaWalletEnoughAndS ? "8.59407" : "10.9975"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 122.251 7.13744" : isMoocaWalletEnoughAndS ? "0 0 147.2 8.59407" : "0 0 188.366 10.9975"} width={isMoocaWalletEnoughAndXs ? "122.251" : isMoocaWalletEnoughAndS ? "147.2" : "188.366"}>
                  <path d={isMoocaWalletEnoughAndXs ? svgPaths.p223c5800 : isMoocaWalletEnoughAndS ? svgPaths.p2af1e600 : svgPaths.p3486f00} fill="#EAEBF5" id="_x3C_Path_x3E__1_" />
                </svg>
              </div>
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[55.981px] left-[calc(50%+17.85px)] top-[calc(50%+2.8px)] w-[44.129px]" : isMoocaWalletEnoughAndS ? "h-[67.405px] left-[calc(50%+25.95px)] top-[calc(50%+4.06px)] w-[53.135px]" : "h-[86.256px] left-[calc(50%+42.33px)] top-[calc(50%+6.99px)] w-[67.995px]"}`} data-name="Group">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "55.9808" : isMoocaWalletEnoughAndS ? "67.4054" : "86.2561"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 44.1292 55.9808" : isMoocaWalletEnoughAndS ? "0 0 53.135 67.4054" : "0 0 67.9947 86.2561"} width={isMoocaWalletEnoughAndXs ? "44.1292" : isMoocaWalletEnoughAndS ? "53.135" : "67.9947"}>
                  <g id="Group">
                    <g id="Group_2">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p4d4c100 : isMoocaWalletEnoughAndS ? svgPaths.p32998200 : svgPaths.p2a9af580} fill="#E8B022" id="Vector" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3cd4e980 : isMoocaWalletEnoughAndS ? svgPaths.p2680a500 : svgPaths.p18abec80} fill="white" id="Vector_2" opacity="0.2" />
                      <g id="Group_3">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2fa60100 : isMoocaWalletEnoughAndS ? svgPaths.p33086840 : svgPaths.p33f22380} fill="white" id="Vector_3" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3a7cc900 : isMoocaWalletEnoughAndS ? svgPaths.p3edf1100 : svgPaths.p1df89100} fill="white" id="Vector_4" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p210c4500 : isMoocaWalletEnoughAndS ? svgPaths.p35e68800 : svgPaths.p38a5c380} fill="white" id="Vector_5" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pb0a6800 : isMoocaWalletEnoughAndS ? svgPaths.p3da98900 : svgPaths.p302ed180} fill="white" id="Vector_6" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p12f3dc80 : isMoocaWalletEnoughAndS ? svgPaths.p3f1b2d00 : svgPaths.p376a0800} fill="white" id="Vector_7" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2f5ab700 : isMoocaWalletEnoughAndS ? svgPaths.p24ca2b00 : svgPaths.p27e3be00} fill="white" id="Vector_8" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p14fbb580 : isMoocaWalletEnoughAndS ? svgPaths.p4217e00 : svgPaths.p21789800} fill="white" id="Vector_9" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3af47af1 : isMoocaWalletEnoughAndS ? svgPaths.p2877f80 : svgPaths.p16cf200} fill="white" id="Vector_10" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p192fa000 : isMoocaWalletEnoughAndS ? svgPaths.p149e8ff2 : svgPaths.pbe09c00} fill="white" id="Vector_11" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p10c8f300 : isMoocaWalletEnoughAndS ? svgPaths.pcf19900 : svgPaths.p26c22fc0} fill="white" id="Vector_12" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p25a43700 : isMoocaWalletEnoughAndS ? svgPaths.p279b7900 : svgPaths.p29a3ab80} fill="white" id="Vector_13" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3d282300 : isMoocaWalletEnoughAndS ? svgPaths.p3baaaee0 : svgPaths.p1651f370} fill="white" id="Vector_14" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3bbd5800 : isMoocaWalletEnoughAndS ? svgPaths.p2ab18f0 : svgPaths.p3c662300} fill="white" id="Vector_15" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2eb62400 : isMoocaWalletEnoughAndS ? svgPaths.p16750700 : svgPaths.p5606b80} fill="white" id="Vector_16" opacity="0.2" />
                    </g>
                    <g id="Group_4">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p37b46400 : isMoocaWalletEnoughAndS ? svgPaths.p9b10a0 : svgPaths.p5a4b571} fill="#E8B022" id="Vector_17" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p24e34700 : isMoocaWalletEnoughAndS ? svgPaths.p24926900 : svgPaths.p3ca9fd00} fill="white" id="Vector_18" opacity="0.2" />
                      <g id="Group_5">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p30cced00 : isMoocaWalletEnoughAndS ? svgPaths.p26d14d00 : svgPaths.p3657f0} fill="white" id="Vector_19" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pe7ebf70 : isMoocaWalletEnoughAndS ? svgPaths.p14e70c00 : svgPaths.p2ce98400} fill="white" id="Vector_20" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p25e81a80 : isMoocaWalletEnoughAndS ? svgPaths.p30b68380 : svgPaths.p3f3afd80} fill="white" id="Vector_21" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p82cd880 : isMoocaWalletEnoughAndS ? svgPaths.p21d8d270 : svgPaths.p2dae65c0} fill="white" id="Vector_22" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1286d180 : isMoocaWalletEnoughAndS ? svgPaths.p29409d00 : svgPaths.p57bc600} fill="white" id="Vector_23" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2ea5ed00 : isMoocaWalletEnoughAndS ? svgPaths.p20466770 : svgPaths.p2c41b880} fill="white" id="Vector_24" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1f00c700 : isMoocaWalletEnoughAndS ? svgPaths.p13e1a480 : svgPaths.p1eb4b180} fill="white" id="Vector_25" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1cff6fd0 : isMoocaWalletEnoughAndS ? svgPaths.p2eb26100 : svgPaths.p2ae892c0} fill="white" id="Vector_26" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p17a3cf00 : isMoocaWalletEnoughAndS ? svgPaths.p145a5f2 : svgPaths.p2213830} fill="white" id="Vector_27" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1c7d9df8 : isMoocaWalletEnoughAndS ? svgPaths.p99be900 : svgPaths.p32ecd0f0} fill="white" id="Vector_28" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3a80c100 : isMoocaWalletEnoughAndS ? svgPaths.p2ced9300 : svgPaths.p1a36d250} fill="white" id="Vector_29" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p13eb500 : isMoocaWalletEnoughAndS ? svgPaths.p15d1e800 : svgPaths.p1f7e1500} fill="white" id="Vector_30" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1b73ed00 : isMoocaWalletEnoughAndS ? svgPaths.p14c8cda0 : svgPaths.p1c50c700} fill="white" id="Vector_31" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p17ecd280 : isMoocaWalletEnoughAndS ? svgPaths.pbe60d70 : svgPaths.p3d022c80} fill="white" id="Vector_32" opacity="0.2" />
                    </g>
                    <g id="Group_6">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p85c8140 : isMoocaWalletEnoughAndS ? svgPaths.p1db1e7c0 : svgPaths.p3ddd1380} fill="#E8B022" id="Vector_33" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p279a9000 : isMoocaWalletEnoughAndS ? svgPaths.p2b4d3500 : svgPaths.p2b8f4600} fill="white" id="Vector_34" opacity="0.2" />
                      <g id="Group_7">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p6ad2a00 : isMoocaWalletEnoughAndS ? svgPaths.p2d888700 : svgPaths.p3fb8ed00} fill="white" id="Vector_35" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pdd47c00 : isMoocaWalletEnoughAndS ? svgPaths.p1339e600 : svgPaths.p1e2e5500} fill="white" id="Vector_36" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2d810f00 : isMoocaWalletEnoughAndS ? svgPaths.p3fcfe700 : svgPaths.p3d8ae80} fill="white" id="Vector_37" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3c410900 : isMoocaWalletEnoughAndS ? svgPaths.p3884b070 : svgPaths.p2010080} fill="white" id="Vector_38" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p28d17200 : isMoocaWalletEnoughAndS ? svgPaths.p2f3fce00 : svgPaths.p1e880f00} fill="white" id="Vector_39" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1b764b80 : isMoocaWalletEnoughAndS ? svgPaths.p3f958f00 : svgPaths.pe2ecd00} fill="white" id="Vector_40" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p28face80 : isMoocaWalletEnoughAndS ? svgPaths.p67f54f0 : svgPaths.p13a45f00} fill="white" id="Vector_41" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1b14a900 : isMoocaWalletEnoughAndS ? svgPaths.p3fdaef00 : svgPaths.pafc6340} fill="white" id="Vector_42" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1f649a00 : isMoocaWalletEnoughAndS ? svgPaths.p34135300 : svgPaths.p1bff1aa0} fill="white" id="Vector_43" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p127b3a00 : isMoocaWalletEnoughAndS ? svgPaths.p3646ce80 : svgPaths.p6314680} fill="white" id="Vector_44" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p26dbf000 : isMoocaWalletEnoughAndS ? svgPaths.pedd7a00 : svgPaths.p3e740700} fill="white" id="Vector_45" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p22582d00 : isMoocaWalletEnoughAndS ? svgPaths.p14afab00 : svgPaths.pbadcaf2} fill="white" id="Vector_46" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1c99d480 : isMoocaWalletEnoughAndS ? svgPaths.p2b817e40 : svgPaths.p8c24800} fill="white" id="Vector_47" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p10edc900 : isMoocaWalletEnoughAndS ? svgPaths.p34fe6180 : svgPaths.p1e292400} fill="white" id="Vector_48" opacity="0.2" />
                    </g>
                    <g id="Group_8">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1f7d6d00 : isMoocaWalletEnoughAndS ? svgPaths.p21a26a80 : svgPaths.pb96f00} fill="#E8B022" id="Vector_49" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p37f0c30 : isMoocaWalletEnoughAndS ? svgPaths.p3f22d000 : svgPaths.p3ccb6200} fill="white" id="Vector_50" opacity="0.2" />
                      <g id="Group_9">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p139f5500 : isMoocaWalletEnoughAndS ? svgPaths.p747180 : svgPaths.p14a5d600} fill="white" id="Vector_51" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3323ae00 : isMoocaWalletEnoughAndS ? svgPaths.pbac8e00 : svgPaths.p1275db40} fill="white" id="Vector_52" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p11fae2a0 : isMoocaWalletEnoughAndS ? svgPaths.p3b36b600 : svgPaths.p162cfa10} fill="white" id="Vector_53" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1c69600 : isMoocaWalletEnoughAndS ? svgPaths.p1eea6400 : svgPaths.p28be5180} fill="white" id="Vector_54" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p173b2400 : isMoocaWalletEnoughAndS ? svgPaths.p10bd5400 : svgPaths.pd5d4780} fill="white" id="Vector_55" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3d8cec0 : isMoocaWalletEnoughAndS ? svgPaths.p5879570 : svgPaths.p326deb00} fill="white" id="Vector_56" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1c53ac00 : isMoocaWalletEnoughAndS ? svgPaths.pf45aa00 : svgPaths.p124b1a00} fill="white" id="Vector_57" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p528ca00 : isMoocaWalletEnoughAndS ? svgPaths.p1e20d900 : svgPaths.p645fa80} fill="white" id="Vector_58" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p9683d80 : isMoocaWalletEnoughAndS ? svgPaths.p80b4b00 : svgPaths.pf71aa00} fill="white" id="Vector_59" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p171eb200 : isMoocaWalletEnoughAndS ? svgPaths.pc138480 : svgPaths.p35e47800} fill="white" id="Vector_60" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p127dcd80 : isMoocaWalletEnoughAndS ? svgPaths.p21eab1b0 : svgPaths.p445a00} fill="white" id="Vector_61" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p15b3da80 : isMoocaWalletEnoughAndS ? svgPaths.p1da9c600 : svgPaths.p19c555f0} fill="white" id="Vector_62" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p26826600 : isMoocaWalletEnoughAndS ? svgPaths.p1c94b900 : svgPaths.p26411280} fill="white" id="Vector_63" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p14bbea00 : isMoocaWalletEnoughAndS ? svgPaths.p291a4700 : svgPaths.p1183b600} fill="white" id="Vector_64" opacity="0.2" />
                    </g>
                    <g id="Group_10">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3d747100 : isMoocaWalletEnoughAndS ? svgPaths.p2dadb700 : svgPaths.pde01d80} fill="#E8B022" id="Vector_65" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2bf17a80 : isMoocaWalletEnoughAndS ? svgPaths.p1d900d80 : svgPaths.p2be341c0} fill="white" id="Vector_66" opacity="0.2" />
                      <g id="Group_11">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p11b4cf00 : isMoocaWalletEnoughAndS ? svgPaths.pd845680 : svgPaths.p9509e80} fill="white" id="Vector_67" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p19d82e00 : isMoocaWalletEnoughAndS ? svgPaths.p2453f000 : svgPaths.p21220780} fill="white" id="Vector_68" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2ba79f00 : isMoocaWalletEnoughAndS ? svgPaths.p3a04de00 : svgPaths.p3ca0bb40} fill="white" id="Vector_69" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pe142590 : isMoocaWalletEnoughAndS ? svgPaths.p34630900 : svgPaths.p37323300} fill="white" id="Vector_70" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pc80ca00 : isMoocaWalletEnoughAndS ? svgPaths.p2f80240 : svgPaths.p1ee61500} fill="white" id="Vector_71" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p24298a00 : isMoocaWalletEnoughAndS ? svgPaths.p3199d080 : svgPaths.p2317f280} fill="white" id="Vector_72" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3ebc2f40 : isMoocaWalletEnoughAndS ? svgPaths.p29ef9380 : svgPaths.p16b45e80} fill="white" id="Vector_73" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p30869580 : isMoocaWalletEnoughAndS ? svgPaths.p32faa000 : svgPaths.p1224a580} fill="white" id="Vector_74" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pbb15380 : isMoocaWalletEnoughAndS ? svgPaths.p166260c0 : svgPaths.p372f9c00} fill="white" id="Vector_75" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2bd4f500 : isMoocaWalletEnoughAndS ? svgPaths.p3d2cde00 : svgPaths.p2de36500} fill="white" id="Vector_76" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2c8e94c0 : isMoocaWalletEnoughAndS ? svgPaths.p276af600 : svgPaths.p246d2500} fill="white" id="Vector_77" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p32975a00 : isMoocaWalletEnoughAndS ? svgPaths.p507ab80 : svgPaths.p214d0e00} fill="white" id="Vector_78" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1e75d500 : isMoocaWalletEnoughAndS ? svgPaths.p2911e080 : svgPaths.p3f39cc00} fill="white" id="Vector_79" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p25577d80 : isMoocaWalletEnoughAndS ? svgPaths.pa6f7180 : svgPaths.p8b08b00} fill="white" id="Vector_80" opacity="0.2" />
                    </g>
                    <path d={isMoocaWalletEnoughAndXs ? svgPaths.p195a8a80 : isMoocaWalletEnoughAndS ? svgPaths.p3a8ea100 : svgPaths.p2b46b100} fill="white" id="Vector_81" opacity="0.2" />
                    <path d={isMoocaWalletEnoughAndXs ? svgPaths.p741bc00 : isMoocaWalletEnoughAndS ? svgPaths.p216590c0 : svgPaths.p3652ec72} fill="white" id="Vector_82" opacity="0.2" />
                    <g id="Group_12">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1455b00 : isMoocaWalletEnoughAndS ? svgPaths.p327de400 : svgPaths.p383d1500} fill="#E8B022" id="Vector_83" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2e0df280 : isMoocaWalletEnoughAndS ? svgPaths.p1cbfcb20 : svgPaths.p364f3080} fill="white" id="Vector_84" opacity="0.2" />
                      <g id="Group_13">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1a0d87f0 : isMoocaWalletEnoughAndS ? svgPaths.p36c15100 : svgPaths.p11cd0600} fill="white" id="Vector_85" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.padcb800 : isMoocaWalletEnoughAndS ? svgPaths.p387ed200 : svgPaths.p3c143f00} fill="white" id="Vector_86" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2a384400 : isMoocaWalletEnoughAndS ? svgPaths.p3845e200 : svgPaths.p13f9ba00} fill="white" id="Vector_87" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p29860a00 : isMoocaWalletEnoughAndS ? svgPaths.p1e63f680 : svgPaths.p36a42a00} fill="white" id="Vector_88" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p379ac500 : isMoocaWalletEnoughAndS ? svgPaths.p37c5da00 : svgPaths.p27287b80} fill="white" id="Vector_89" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1dc62e80 : isMoocaWalletEnoughAndS ? svgPaths.p1bb05180 : svgPaths.p39da9280} fill="white" id="Vector_90" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pc07a600 : isMoocaWalletEnoughAndS ? svgPaths.p27d06000 : svgPaths.p2973d300} fill="white" id="Vector_91" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p9328100 : isMoocaWalletEnoughAndS ? svgPaths.p1b4f7300 : svgPaths.p3f65ad40} fill="white" id="Vector_92" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1542d2f0 : isMoocaWalletEnoughAndS ? svgPaths.p27a08880 : svgPaths.p18448940} fill="white" id="Vector_93" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1b93df00 : isMoocaWalletEnoughAndS ? svgPaths.p9065e70 : svgPaths.p1d0dd370} fill="white" id="Vector_94" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1fe61280 : isMoocaWalletEnoughAndS ? svgPaths.p270c6c0 : svgPaths.p24d71200} fill="white" id="Vector_95" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p32c7ef00 : isMoocaWalletEnoughAndS ? svgPaths.p7f16f40 : svgPaths.p1d9aa380} fill="white" id="Vector_96" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3dba1200 : isMoocaWalletEnoughAndS ? svgPaths.p9921180 : svgPaths.p122a6b00} fill="white" id="Vector_97" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p15126580 : isMoocaWalletEnoughAndS ? svgPaths.p36648ec0 : svgPaths.p33a19b00} fill="white" id="Vector_98" opacity="0.2" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletEnoughAndXs ? "left-[calc(50%-13.85px)] top-[calc(50%+6.17px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%-20px)] top-[calc(50%+8.94px)]" : "left-[calc(50%-32.92px)] top-[calc(50%+14.99px)]"}`} data-name="Group">
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletEnoughAndXs ? "left-[calc(50%-7.85px)] top-[calc(50%+8.26px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%-11.3px)] top-[calc(50%+11.98px)]" : "left-[calc(50%-18.68px)] top-[calc(50%+19.96px)]"}`} data-name="Group">
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[8.02px] left-[calc(50%-7.55px)] top-[calc(50%+13.63px)] w-[33.888px]" : isMoocaWalletEnoughAndS ? "h-[9.657px] left-[calc(50%-10.87px)] top-[calc(50%+19.76px)] w-[40.803px]" : "h-[12.358px] left-[calc(50%-17.98px)] top-[calc(50%+32.7px)] w-[52.215px]"}`} data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "8.0202" : isMoocaWalletEnoughAndS ? "9.6569" : "12.3576"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 33.8876 8.0202" : isMoocaWalletEnoughAndS ? "0 0 40.8033 9.6569" : "0 0 52.2144 12.3576"} width={isMoocaWalletEnoughAndXs ? "33.8876" : isMoocaWalletEnoughAndS ? "40.8033" : "52.2144"}>
                      <g id="Group">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p189fd900 : isMoocaWalletEnoughAndS ? svgPaths.p3687780 : svgPaths.pa8e72} fill="#E8B022" id="Vector" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1c876400 : isMoocaWalletEnoughAndS ? svgPaths.pe8b9ef0 : svgPaths.p1509be00} fill="white" id="Vector_2" opacity="0.2" />
                        <g id="Group_2">
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.pa1368a0 : isMoocaWalletEnoughAndS ? svgPaths.p3aa8f500 : svgPaths.p1e00bd00} fill="white" id="Vector_3" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p37d46b00 : isMoocaWalletEnoughAndS ? svgPaths.p3ed10e80 : svgPaths.p8985680} fill="white" id="Vector_4" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p21db9f00 : isMoocaWalletEnoughAndS ? svgPaths.p3ec43d80 : svgPaths.p2bd60200} fill="white" id="Vector_5" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p28996290 : isMoocaWalletEnoughAndS ? svgPaths.p16707300 : svgPaths.p2386d500} fill="white" id="Vector_6" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3b13de00 : isMoocaWalletEnoughAndS ? svgPaths.p2c2a6900 : svgPaths.p1e4deb80} fill="white" id="Vector_7" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.pac93400 : isMoocaWalletEnoughAndS ? svgPaths.p34a6a800 : svgPaths.p257e4700} fill="white" id="Vector_8" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.pd8c300 : isMoocaWalletEnoughAndS ? svgPaths.p348e4500 : svgPaths.pa377692} fill="white" id="Vector_9" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p24f46100 : isMoocaWalletEnoughAndS ? svgPaths.pc91d200 : svgPaths.p17648f20} fill="white" id="Vector_10" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2b04d400 : isMoocaWalletEnoughAndS ? svgPaths.p1a6092d2 : svgPaths.p2e7f21c0} fill="white" id="Vector_11" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p14aafc80 : isMoocaWalletEnoughAndS ? svgPaths.p3bf16300 : svgPaths.p1e48b700} fill="white" id="Vector_12" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3fc67180 : isMoocaWalletEnoughAndS ? svgPaths.p66d2b00 : svgPaths.p3d378480} fill="white" id="Vector_13" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.pe482c00 : isMoocaWalletEnoughAndS ? svgPaths.p21267f80 : svgPaths.p3139b300} fill="white" id="Vector_14" opacity="0.2" />
                        </g>
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p29646290 : isMoocaWalletEnoughAndS ? svgPaths.pd84af00 : svgPaths.p2b2f9500} fill="white" id="Vector_15" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p219fe180 : isMoocaWalletEnoughAndS ? svgPaths.p1f135100 : svgPaths.p28e51d00} fill="white" id="Vector_16" opacity="0.2" />
                      </g>
                    </svg>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[8.02px] left-[calc(50%-7.2px)] top-[calc(50%+10.05px)] w-[33.888px]" : isMoocaWalletEnoughAndS ? "h-[9.657px] left-[calc(50%-10.36px)] top-[calc(50%+14.57px)] w-[40.803px]" : "h-[12.358px] left-[calc(50%-17.14px)] top-[calc(50%+24.21px)] w-[52.215px]"}`} data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "8.02025" : isMoocaWalletEnoughAndS ? "9.65701" : "12.3577"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 33.8876 8.02025" : isMoocaWalletEnoughAndS ? "0 0 40.8033 9.65701" : "0 0 52.2143 12.3577"} width={isMoocaWalletEnoughAndXs ? "33.8876" : isMoocaWalletEnoughAndS ? "40.8033" : "52.2143"}>
                      <g id="Group">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p39d62b00 : isMoocaWalletEnoughAndS ? svgPaths.p3379c00 : svgPaths.p20500580} fill="#E8B022" id="Vector" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p32edae00 : isMoocaWalletEnoughAndS ? svgPaths.p2cf47100 : svgPaths.p380da900} fill="white" id="Vector_2" opacity="0.2" />
                        <g id="Group_2">
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p29aaa380 : isMoocaWalletEnoughAndS ? svgPaths.p19b3c900 : svgPaths.p22496500} fill="white" id="Vector_3" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.pf59e700 : isMoocaWalletEnoughAndS ? svgPaths.p3db77500 : svgPaths.p77adaf0} fill="white" id="Vector_4" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p21b5b900 : isMoocaWalletEnoughAndS ? svgPaths.p919e380 : svgPaths.p3a3a31c0} fill="white" id="Vector_5" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p23dfeb00 : isMoocaWalletEnoughAndS ? svgPaths.pb342b00 : svgPaths.p3ba6f000} fill="white" id="Vector_6" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p27d97a20 : isMoocaWalletEnoughAndS ? svgPaths.pcdd7700 : svgPaths.p1a516b00} fill="white" id="Vector_7" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p20713680 : isMoocaWalletEnoughAndS ? svgPaths.p2a906980 : svgPaths.p3029d200} fill="white" id="Vector_8" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p18bddb00 : isMoocaWalletEnoughAndS ? svgPaths.p50d0c00 : svgPaths.p17f876f0} fill="white" id="Vector_9" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.pe336280 : isMoocaWalletEnoughAndS ? svgPaths.p2570e300 : svgPaths.p32f757f0} fill="white" id="Vector_10" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p257f1d00 : isMoocaWalletEnoughAndS ? svgPaths.p1e317f80 : svgPaths.p15f0100} fill="white" id="Vector_11" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2f0b7180 : isMoocaWalletEnoughAndS ? svgPaths.p2e97cb80 : svgPaths.p2cac8bf0} fill="white" id="Vector_12" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2a1a6c70 : isMoocaWalletEnoughAndS ? svgPaths.p1dc30b00 : svgPaths.p1c919df0} fill="white" id="Vector_13" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3fdb1200 : isMoocaWalletEnoughAndS ? svgPaths.p3706afb0 : svgPaths.p27770200} fill="white" id="Vector_14" opacity="0.2" />
                        </g>
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p30b36400 : isMoocaWalletEnoughAndS ? svgPaths.p3971c80 : svgPaths.pe560a80} fill="white" id="Vector_15" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p15aff1f0 : isMoocaWalletEnoughAndS ? svgPaths.p30273fc0 : svgPaths.p25f13000} fill="white" id="Vector_16" opacity="0.2" />
                      </g>
                    </svg>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[8.017px] left-[calc(50%-8.5px)] top-[calc(50%+6.47px)] w-[33.887px]" : isMoocaWalletEnoughAndS ? "h-[9.653px] left-[calc(50%-12.24px)] top-[calc(50%+9.38px)] w-[40.803px]" : "h-[12.353px] left-[calc(50%-20.22px)] top-[calc(50%+15.71px)] w-[52.214px]"}`} data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "8.01704" : isMoocaWalletEnoughAndS ? "9.65318" : "12.3528"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 33.8873 8.01704" : isMoocaWalletEnoughAndS ? "0 0 40.803 9.65318" : "0 0 52.2138 12.3528"} width={isMoocaWalletEnoughAndXs ? "33.8873" : isMoocaWalletEnoughAndS ? "40.803" : "52.2138"}>
                      <g id="Group">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p321a3c00 : isMoocaWalletEnoughAndS ? svgPaths.p3aeeaa00 : svgPaths.p2450f780} fill="#E8B022" id="Vector" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p4649000 : isMoocaWalletEnoughAndS ? svgPaths.p23470000 : svgPaths.p2ef24980} fill="white" id="Vector_2" opacity="0.2" />
                        <g id="Group_2">
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2a63bf00 : isMoocaWalletEnoughAndS ? svgPaths.p1e347b80 : svgPaths.p36e5ec00} fill="white" id="Vector_3" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p7302c00 : isMoocaWalletEnoughAndS ? svgPaths.p1897ad70 : svgPaths.p6b14b00} fill="white" id="Vector_4" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p13c55f80 : isMoocaWalletEnoughAndS ? svgPaths.p8b10e00 : svgPaths.p24005d00} fill="white" id="Vector_5" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p945c700 : isMoocaWalletEnoughAndS ? svgPaths.p1989d900 : svgPaths.p17db3900} fill="white" id="Vector_6" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p30ebf700 : isMoocaWalletEnoughAndS ? svgPaths.p9ae5b00 : svgPaths.p3f14a900} fill="white" id="Vector_7" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3ec3ad80 : isMoocaWalletEnoughAndS ? svgPaths.p2ab7300 : svgPaths.pc5c9200} fill="white" id="Vector_8" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.pff14480 : isMoocaWalletEnoughAndS ? svgPaths.p246a54c0 : svgPaths.p2edda3f0} fill="white" id="Vector_9" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p87ffc00 : isMoocaWalletEnoughAndS ? svgPaths.p34065300 : svgPaths.p1ec99d00} fill="white" id="Vector_10" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1b862a00 : isMoocaWalletEnoughAndS ? svgPaths.p2433f400 : svgPaths.p2827ac80} fill="white" id="Vector_11" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p12e63b80 : isMoocaWalletEnoughAndS ? svgPaths.p240b7b80 : svgPaths.p145fc300} fill="white" id="Vector_12" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1906ca00 : isMoocaWalletEnoughAndS ? svgPaths.pca9cb00 : svgPaths.p19e64d80} fill="white" id="Vector_13" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p42e7600 : isMoocaWalletEnoughAndS ? svgPaths.p1ab63e80 : svgPaths.p17e46e80} fill="white" id="Vector_14" opacity="0.2" />
                        </g>
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3f69e900 : isMoocaWalletEnoughAndS ? svgPaths.p31e10900 : svgPaths.p9e7ac70} fill="white" id="Vector_15" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2b51b100 : isMoocaWalletEnoughAndS ? svgPaths.p12e8bb80 : svgPaths.p35ce6a80} fill="white" id="Vector_16" opacity="0.2" />
                      </g>
                    </svg>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[8.017px] left-[calc(50%-7.55px)] top-[calc(50%+2.89px)] w-[33.888px]" : isMoocaWalletEnoughAndS ? "h-[9.653px] left-[calc(50%-10.87px)] top-[calc(50%+4.19px)] w-[40.803px]" : "h-[12.353px] left-[calc(50%-17.98px)] top-[calc(50%+7.21px)] w-[52.215px]"}`} data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "8.01714" : isMoocaWalletEnoughAndS ? "9.65322" : "12.3528"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 33.8876 8.01714" : isMoocaWalletEnoughAndS ? "0 0 40.8033 9.65322" : "0 0 52.2144 12.3528"} width={isMoocaWalletEnoughAndXs ? "33.8876" : isMoocaWalletEnoughAndS ? "40.8033" : "52.2144"}>
                      <g id="Group">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p19921080 : isMoocaWalletEnoughAndS ? svgPaths.pc124a80 : svgPaths.p5c67d40} fill="#E8B022" id="Vector" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p36b8ac00 : isMoocaWalletEnoughAndS ? svgPaths.pe72f300 : svgPaths.p3ffa9700} fill="white" id="Vector_2" opacity="0.2" />
                        <g id="Group_2">
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2874eb00 : isMoocaWalletEnoughAndS ? svgPaths.p1e1d980 : svgPaths.p303fee80} fill="white" id="Vector_3" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2da9b900 : isMoocaWalletEnoughAndS ? svgPaths.p3cd53df0 : svgPaths.p202a9f00} fill="white" id="Vector_4" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2d286900 : isMoocaWalletEnoughAndS ? svgPaths.p27344000 : svgPaths.p3148c100} fill="white" id="Vector_5" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.pd24fa00 : isMoocaWalletEnoughAndS ? svgPaths.p79d2f00 : svgPaths.p214a4780} fill="white" id="Vector_6" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p194b8e00 : isMoocaWalletEnoughAndS ? svgPaths.p2c003d00 : svgPaths.p17642900} fill="white" id="Vector_7" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p167a6f80 : isMoocaWalletEnoughAndS ? svgPaths.p342becc0 : svgPaths.p621800} fill="white" id="Vector_8" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p339c1f80 : isMoocaWalletEnoughAndS ? svgPaths.p79d680 : svgPaths.p46af4f0} fill="white" id="Vector_9" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p33c3aa00 : isMoocaWalletEnoughAndS ? svgPaths.p13088600 : svgPaths.p323a2000} fill="white" id="Vector_10" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p4843a00 : isMoocaWalletEnoughAndS ? svgPaths.p29423800 : svgPaths.p2b6fc080} fill="white" id="Vector_11" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2cfa5c00 : isMoocaWalletEnoughAndS ? svgPaths.p30df8000 : svgPaths.p14deaaf0} fill="white" id="Vector_12" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3012c280 : isMoocaWalletEnoughAndS ? svgPaths.p14158800 : svgPaths.p2d43ba00} fill="white" id="Vector_13" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p4fad2c0 : isMoocaWalletEnoughAndS ? svgPaths.p3f9f4700 : svgPaths.p3578b300} fill="white" id="Vector_14" opacity="0.2" />
                        </g>
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p195ea200 : isMoocaWalletEnoughAndS ? svgPaths.p1b548200 : svgPaths.p237eab00} fill="white" id="Vector_15" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p6490300 : isMoocaWalletEnoughAndS ? svgPaths.p2f452e00 : svgPaths.p232dc400} fill="white" id="Vector_16" opacity="0.2" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[13.092px] left-[calc(50%-15.83px)] top-[calc(50%-1.19px)] w-[34.521px]" : isMoocaWalletEnoughAndS ? "h-[15.764px] left-[calc(50%-22.88px)] top-[calc(50%-1.73px)] w-[41.566px]" : "h-[20.172px] left-[calc(50%-37.64px)] top-[calc(50%-2.49px)] w-[53.191px]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "13.092" : isMoocaWalletEnoughAndS ? "15.7638" : "20.1723"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 34.5212 13.092" : isMoocaWalletEnoughAndS ? "0 0 41.5662 15.7638" : "0 0 53.1903 20.1723"} width={isMoocaWalletEnoughAndXs ? "34.5212" : isMoocaWalletEnoughAndS ? "41.5662" : "53.1903"}>
                    <g id="Group">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2a725ba0 : isMoocaWalletEnoughAndS ? svgPaths.pca6600 : svgPaths.p1274d080} fill="#E8B022" id="Vector" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.pa7aeb00 : isMoocaWalletEnoughAndS ? svgPaths.p860a880 : svgPaths.p136a780} fill="white" id="Vector_2" opacity="0.2" />
                      <g id="Group_2">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1fd6dd00 : isMoocaWalletEnoughAndS ? svgPaths.pbe12690 : svgPaths.p8f8d0c0} fill="white" id="Vector_3" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3c6adef0 : isMoocaWalletEnoughAndS ? svgPaths.p3d61da00 : svgPaths.p3fec3080} fill="white" id="Vector_4" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2b94c800 : isMoocaWalletEnoughAndS ? svgPaths.p3c3eac0 : svgPaths.pe6b3e00} fill="white" id="Vector_5" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p29617c00 : isMoocaWalletEnoughAndS ? svgPaths.p3a665400 : svgPaths.p891a5f0} fill="white" id="Vector_6" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p33407e00 : isMoocaWalletEnoughAndS ? svgPaths.p2064670 : svgPaths.paf8e500} fill="white" id="Vector_7" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1cced180 : isMoocaWalletEnoughAndS ? svgPaths.p13f4000 : svgPaths.p2019b80} fill="white" id="Vector_8" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p10db2600 : isMoocaWalletEnoughAndS ? svgPaths.pda17a80 : svgPaths.p11edb680} fill="white" id="Vector_9" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p937d700 : isMoocaWalletEnoughAndS ? svgPaths.p1d6966f0 : svgPaths.p3db48a00} fill="white" id="Vector_10" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p208d3400 : isMoocaWalletEnoughAndS ? svgPaths.p31d00000 : svgPaths.p20550af0} fill="white" id="Vector_11" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p31c67cf0 : isMoocaWalletEnoughAndS ? svgPaths.p32efe900 : svgPaths.p190c0280} fill="white" id="Vector_12" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p314ab380 : isMoocaWalletEnoughAndS ? svgPaths.p37a3180 : svgPaths.pe1d3100} fill="white" id="Vector_13" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p11eeb400 : isMoocaWalletEnoughAndS ? svgPaths.p1f692ff0 : svgPaths.p2b63d080} fill="white" id="Vector_14" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p367efa00 : isMoocaWalletEnoughAndS ? svgPaths.p1bb6a80 : svgPaths.pc6902f0} fill="white" id="Vector_15" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.padeb1c0 : isMoocaWalletEnoughAndS ? svgPaths.p1273f400 : svgPaths.p1f438f00} fill="white" id="Vector_16" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1552d880 : isMoocaWalletEnoughAndS ? svgPaths.p1f050100 : svgPaths.p2612fa00} fill="white" id="Vector_17" opacity="0.2" />
                    </g>
                  </svg>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[29.144px] left-[calc(50%-21.61px)] top-[calc(50%+8.86px)] w-[28.933px]" : isMoocaWalletEnoughAndS ? "h-[35.091px] left-[calc(50%-31.26px)] top-[calc(50%+12.84px)] w-[34.838px]" : "h-[44.905px] left-[calc(50%-51.36px)] top-[calc(50%+21.38px)] w-[44.58px]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "29.1439" : isMoocaWalletEnoughAndS ? "35.0916" : "44.9053"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 28.933 29.1439" : isMoocaWalletEnoughAndS ? "0 0 34.8378 35.0916" : "0 0 44.5801 44.9053"} width={isMoocaWalletEnoughAndXs ? "28.933" : isMoocaWalletEnoughAndS ? "34.8378" : "44.5801"}>
                    <g id="Group">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3c56ddf0 : isMoocaWalletEnoughAndS ? svgPaths.pb164c80 : svgPaths.p15dcb00} fill="#E8B022" id="Vector" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p21cb07f0 : isMoocaWalletEnoughAndS ? svgPaths.p150dd700 : svgPaths.pd6c8580} fill="white" id="Vector_2" opacity="0.2" />
                      <g id="Group_2">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p275fa880 : isMoocaWalletEnoughAndS ? svgPaths.p2cead900 : svgPaths.p3bc69f0} fill="white" id="Vector_3" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p19f14e00 : isMoocaWalletEnoughAndS ? svgPaths.p39fe80 : svgPaths.pc6f7f00} fill="white" id="Vector_4" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pb7ef800 : isMoocaWalletEnoughAndS ? svgPaths.p25521b00 : svgPaths.p152ee600} fill="white" id="Vector_5" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pbd82200 : isMoocaWalletEnoughAndS ? svgPaths.p1c816700 : svgPaths.p24342500} fill="white" id="Vector_6" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1ff49700 : isMoocaWalletEnoughAndS ? svgPaths.p6d64d80 : svgPaths.p1c403c70} fill="white" id="Vector_7" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p293f9280 : isMoocaWalletEnoughAndS ? svgPaths.p51d3500 : svgPaths.p10d97700} fill="white" id="Vector_8" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p38b77000 : isMoocaWalletEnoughAndS ? svgPaths.p1963280 : svgPaths.p37fbd900} fill="white" id="Vector_9" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2ec66980 : isMoocaWalletEnoughAndS ? svgPaths.p2edecb80 : svgPaths.p1a335480} fill="white" id="Vector_10" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p166e2bb0 : isMoocaWalletEnoughAndS ? svgPaths.p1dfc3700 : svgPaths.p14f86100} fill="white" id="Vector_11" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p31999e00 : isMoocaWalletEnoughAndS ? svgPaths.p2f703540 : svgPaths.p36d5e00} fill="white" id="Vector_12" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p130abd80 : isMoocaWalletEnoughAndS ? svgPaths.p3f915d00 : svgPaths.p1f213400} fill="white" id="Vector_13" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p368c4080 : isMoocaWalletEnoughAndS ? svgPaths.p13f01ac1 : svgPaths.p15a99f80} fill="white" id="Vector_14" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p154fa000 : isMoocaWalletEnoughAndS ? svgPaths.p1bfc7a00 : svgPaths.p31584700} fill="white" id="Vector_15" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p13913972 : isMoocaWalletEnoughAndS ? svgPaths.p9bd2d00 : svgPaths.p3c9a5870} fill="white" id="Vector_16" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p129bb800 : isMoocaWalletEnoughAndS ? svgPaths.p2fe7e080 : svgPaths.p2bb8e480} fill="white" id="Vector_17" opacity="0.2" />
                    </g>
                  </svg>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[31.784px] left-[calc(50%-12.02px)] top-[calc(50%+8.26px)] w-[18.263px]" : isMoocaWalletEnoughAndS ? "h-[38.271px] left-[calc(50%-17.35px)] top-[calc(50%+11.98px)] w-[21.99px]" : "h-[48.974px] left-[calc(50%-28.59px)] top-[calc(50%+19.96px)] w-[28.139px]"}`} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "31.7843" : isMoocaWalletEnoughAndS ? "38.2709" : "48.9738"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 18.2627 31.7843" : isMoocaWalletEnoughAndS ? "0 0 21.9897 38.2709" : "0 0 28.1394 48.9738"} width={isMoocaWalletEnoughAndXs ? "18.2627" : isMoocaWalletEnoughAndS ? "21.9897" : "28.1394"}>
                    <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3a190980 : isMoocaWalletEnoughAndS ? svgPaths.p38879c00 : svgPaths.p333c0200} fill="white" id="Vector" opacity="0.2" />
                  </svg>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletEnoughAndXs ? "left-[calc(50%-18.29px)] top-[calc(50%+8.75px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%-26.44px)] top-[calc(50%+12.68px)]" : "left-[calc(50%-43.48px)] top-[calc(50%+21.11px)]"}`} data-name="Group">
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[34.265px] left-[calc(50%-17.51px)] top-[calc(50%+8.74px)] w-[25.671px]" : isMoocaWalletEnoughAndS ? "h-[41.258px] left-[calc(50%-25.31px)] top-[calc(50%+12.68px)] w-[30.911px]" : "h-[52.797px] left-[calc(50%-41.63px)] top-[calc(50%+21.11px)] w-[39.555px]"}`} data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "34.2654" : isMoocaWalletEnoughAndS ? "41.2584" : "52.7967"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 25.6715 34.2654" : isMoocaWalletEnoughAndS ? "0 0 30.9105 41.2584" : "0 0 39.555 52.7967"} width={isMoocaWalletEnoughAndXs ? "25.6715" : isMoocaWalletEnoughAndS ? "30.9105" : "39.555"}>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p39ebc180 : isMoocaWalletEnoughAndS ? svgPaths.p3174eb00 : svgPaths.p3317a600} fill="#E8B022" id="Vector" />
                    </svg>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[34.269px] left-[calc(50%-15.57px)] top-[calc(50%+8.75px)] w-[17.056px]" : isMoocaWalletEnoughAndS ? "h-[41.262px] left-[calc(50%-22.49px)] top-[calc(50%+12.68px)] w-[20.537px]" : "h-[52.802px] left-[calc(50%-37.01px)] top-[calc(50%+21.11px)] w-[26.28px]"}`} data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "34.2688" : isMoocaWalletEnoughAndS ? "41.2623" : "52.8018"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 17.0558 34.2688" : isMoocaWalletEnoughAndS ? "0 0 20.5367 41.2623" : "0 0 26.2795 52.8018"} width={isMoocaWalletEnoughAndXs ? "17.0558" : isMoocaWalletEnoughAndS ? "20.5367" : "26.2795"}>
                      <g id="Group">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1c86ac00 : isMoocaWalletEnoughAndS ? svgPaths.p36a2b7f0 : svgPaths.p27a70a80} fill="#E8B022" id="Vector" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p16a6380 : isMoocaWalletEnoughAndS ? svgPaths.p1735a780 : svgPaths.p18e4d400} fill="white" id="Vector_2" opacity="0.2" />
                        <g id="Group_2">
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2a4b0e00 : isMoocaWalletEnoughAndS ? svgPaths.p2186bd80 : svgPaths.p2784f640} fill="white" id="Vector_3" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p289f4540 : isMoocaWalletEnoughAndS ? svgPaths.p307e0180 : svgPaths.p2a2c30f0} fill="white" id="Vector_4" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p30077700 : isMoocaWalletEnoughAndS ? svgPaths.p20949600 : svgPaths.p103fa280} fill="white" id="Vector_5" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p32a9cd80 : isMoocaWalletEnoughAndS ? svgPaths.p3d2203a0 : svgPaths.p25cf900} fill="white" id="Vector_6" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2ebd8700 : isMoocaWalletEnoughAndS ? svgPaths.pe863100 : svgPaths.p2ba38080} fill="white" id="Vector_7" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2b0a4700 : isMoocaWalletEnoughAndS ? svgPaths.p3135d380 : svgPaths.pc134000} fill="white" id="Vector_8" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1174f80 : isMoocaWalletEnoughAndS ? svgPaths.p2c2dcff0 : svgPaths.pe56a8b2} fill="white" id="Vector_9" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1fabae80 : isMoocaWalletEnoughAndS ? svgPaths.p1aef7bf0 : svgPaths.p15bea800} fill="white" id="Vector_10" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p20290f80 : isMoocaWalletEnoughAndS ? svgPaths.p12e7a500 : svgPaths.p1f0142c0} fill="white" id="Vector_11" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.pcd05f80 : isMoocaWalletEnoughAndS ? svgPaths.pa826280 : svgPaths.p2361c200} fill="white" id="Vector_12" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p372bed40 : isMoocaWalletEnoughAndS ? svgPaths.p221f2600 : svgPaths.p8a3f500} fill="white" id="Vector_13" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p183b9800 : isMoocaWalletEnoughAndS ? svgPaths.p1cd33300 : svgPaths.p3497fc00} fill="white" id="Vector_14" opacity="0.2" />
                        </g>
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2594db00 : isMoocaWalletEnoughAndS ? svgPaths.p2294da60 : svgPaths.pe89da00} fill="white" id="Vector_15" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2dbccd00 : isMoocaWalletEnoughAndS ? svgPaths.p1c171800 : svgPaths.p1657e180} fill="white" id="Vector_16" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p24e5f00 : isMoocaWalletEnoughAndS ? svgPaths.p5d63e00 : svgPaths.p26c6d080} fill="white" id="Vector_17" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3c088b00 : isMoocaWalletEnoughAndS ? svgPaths.p28740080 : svgPaths.p954700} fill="white" id="Vector_18" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p14f83900 : isMoocaWalletEnoughAndS ? svgPaths.p34725d00 : svgPaths.p128d3100} fill="white" id="Vector_19" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p12347180 : isMoocaWalletEnoughAndS ? svgPaths.p16c3f500 : svgPaths.p3c07a800} fill="white" id="Vector_20" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1a713000 : isMoocaWalletEnoughAndS ? svgPaths.p3e1a1d30 : svgPaths.p130958f0} fill="white" id="Vector_21" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2582f900 : isMoocaWalletEnoughAndS ? svgPaths.p32d03e00 : svgPaths.p1555ab80} fill="white" id="Vector_22" opacity="0.2" />
                      </g>
                    </svg>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletEnoughAndXs ? "left-[calc(50%-19.07px)] top-[calc(50%+8.74px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%-27.57px)] top-[calc(50%+12.68px)]" : "left-[calc(50%-45.33px)] top-[calc(50%+21.11px)]"}`} data-name="Group">
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[34.265px] left-[calc(50%-19.07px)] top-[calc(50%+8.74px)] w-[25.678px]" : isMoocaWalletEnoughAndS ? "h-[41.258px] left-[calc(50%-27.57px)] top-[calc(50%+12.68px)] w-[30.919px]" : "h-[52.797px] left-[calc(50%-45.33px)] top-[calc(50%+21.11px)] w-[39.565px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "34.2655" : isMoocaWalletEnoughAndS ? "41.2585" : "52.7968"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 25.6783 34.2655" : isMoocaWalletEnoughAndS ? "0 0 30.9186 41.2585" : "0 0 39.5652 52.7968"} width={isMoocaWalletEnoughAndXs ? "25.6783" : isMoocaWalletEnoughAndS ? "30.9186" : "39.5652"}>
                        <g id="Group">
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2f1e8600 : isMoocaWalletEnoughAndS ? svgPaths.pb540800 : svgPaths.p1de534f0} fill="#E8B022" id="Vector" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p23f35900 : isMoocaWalletEnoughAndS ? svgPaths.p313ed580 : svgPaths.p6b79800} fill="white" id="Vector_2" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2298bfc0 : isMoocaWalletEnoughAndS ? svgPaths.pe99d800 : svgPaths.pc0daa80} fill="white" id="Vector_3" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2f346780 : isMoocaWalletEnoughAndS ? svgPaths.p3ff5e800 : svgPaths.p2be5ed00} fill="white" id="Vector_4" opacity="0.2" />
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p7f6fb00 : isMoocaWalletEnoughAndS ? svgPaths.p30af7f80 : svgPaths.p3e369600} fill="white" id="Vector_5" opacity="0.2" />
                        </g>
                      </svg>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletEnoughAndXs ? "left-[calc(50%-19.07px)] top-[calc(50%+8.74px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%-27.57px)] top-[calc(50%+12.68px)]" : "left-[calc(50%-45.32px)] top-[calc(50%+21.11px)]"}`} data-name="Group">
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[20.236px] left-[calc(50%-19.07px)] top-[calc(50%+8.74px)] w-[9.171px]" : isMoocaWalletEnoughAndS ? "h-[24.366px] left-[calc(50%-27.57px)] top-[calc(50%+12.68px)] w-[11.042px]" : "h-[31.181px] left-[calc(50%-45.32px)] top-[calc(50%+21.11px)] w-[14.131px]"}`} data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "20.2364" : isMoocaWalletEnoughAndS ? "24.3663" : "31.1806"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 9.17109 20.2364" : isMoocaWalletEnoughAndS ? "0 0 11.0426 24.3663" : "0 0 14.1306 31.1806"} width={isMoocaWalletEnoughAndXs ? "9.17109" : isMoocaWalletEnoughAndS ? "11.0426" : "14.1306"}>
                          <g id="Group" opacity="0.2">
                            <path d={isMoocaWalletEnoughAndXs ? svgPaths.p25821200 : isMoocaWalletEnoughAndS ? svgPaths.p1fe5b800 : svgPaths.p2d2f600} fill="white" id="Vector" opacity="0.2" />
                          </g>
                        </svg>
                      </div>
                      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[19.748px] left-[calc(50%-19.15px)] top-[calc(50%+8.63px)] w-[8.802px]" : isMoocaWalletEnoughAndS ? "h-[23.778px] left-[calc(50%-27.69px)] top-[calc(50%+12.52px)] w-[10.598px]" : "h-[30.428px] left-[calc(50%-45.52px)] top-[calc(50%+20.85px)] w-[13.562px]"}`} data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "19.7478" : isMoocaWalletEnoughAndS ? "23.778" : "30.4277"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 8.80223 19.7478" : isMoocaWalletEnoughAndS ? "0 0 10.5985 23.778" : "0 0 13.5623 30.4277"} width={isMoocaWalletEnoughAndXs ? "8.80223" : isMoocaWalletEnoughAndS ? "10.5985" : "13.5623"}>
                          <g id="Group">
                            <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2194f800 : isMoocaWalletEnoughAndS ? svgPaths.p10ad4a00 : svgPaths.p2ba06ac0} fill="#E8B022" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[31.374px] left-[calc(50%-18.8px)] top-[calc(50%+8.09px)] w-[24.477px]" : isMoocaWalletEnoughAndS ? "h-[37.777px] left-[calc(50%-27.18px)] top-[calc(50%+11.73px)] w-[29.472px]" : "h-[48.342px] left-[calc(50%-44.68px)] top-[calc(50%+19.56px)] w-[37.714px]"}`} data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "31.3745" : isMoocaWalletEnoughAndS ? "37.7775" : "48.3423"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 24.4766 31.3745" : isMoocaWalletEnoughAndS ? "0 0 29.4719 37.7775" : "0 0 37.714 48.3423"} width={isMoocaWalletEnoughAndXs ? "24.4766" : isMoocaWalletEnoughAndS ? "29.4719" : "37.714"}>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p37807680 : isMoocaWalletEnoughAndS ? svgPaths.p31d71a80 : svgPaths.p16891c80} fill="white" id="Vector" opacity="0.1" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[67.074px] left-[calc(50%+2.83px)] top-[calc(50%+0.29px)] w-[39.82px]" : isMoocaWalletEnoughAndS ? "h-[80.763px] left-[calc(50%+4.19px)] top-[calc(50%+0.43px)] w-[47.947px]" : "h-[103.349px] left-[calc(50%+6.68px)] top-[calc(50%+1.04px)] w-[61.356px]"}`} data-name="Group">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "67.0743" : isMoocaWalletEnoughAndS ? "80.763" : "103.349"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 39.8206 67.0743" : isMoocaWalletEnoughAndS ? "0 0 47.9471 80.763" : "0 0 61.3559 103.349"} width={isMoocaWalletEnoughAndXs ? "39.8206" : isMoocaWalletEnoughAndS ? "47.9471" : "61.3559"}>
                  <g id="Group">
                    <g id="Group_2">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p21c97d70 : isMoocaWalletEnoughAndS ? svgPaths.p3c7a5100 : svgPaths.p41c6600} fill="#E8B022" id="Vector" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p413ba00 : isMoocaWalletEnoughAndS ? svgPaths.p3ff9300 : svgPaths.pb9f58c0} fill="white" id="Vector_2" opacity="0.2" />
                      <g id="Group_3">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p29242d00 : isMoocaWalletEnoughAndS ? svgPaths.p2eb6a980 : svgPaths.p1cb41f80} fill="white" id="Vector_3" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pa2b1400 : isMoocaWalletEnoughAndS ? svgPaths.p2719b000 : svgPaths.p2bc2dc00} fill="white" id="Vector_4" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p376081f0 : isMoocaWalletEnoughAndS ? svgPaths.p35805980 : svgPaths.p3e111800} fill="white" id="Vector_5" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p32aa8b70 : isMoocaWalletEnoughAndS ? svgPaths.p296235c0 : svgPaths.p3c098200} fill="white" id="Vector_6" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p32f4bb80 : isMoocaWalletEnoughAndS ? svgPaths.p29ca3fc0 : svgPaths.p27c30e00} fill="white" id="Vector_7" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2703ef00 : isMoocaWalletEnoughAndS ? svgPaths.p34a10c00 : svgPaths.p24e60f00} fill="white" id="Vector_8" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2365ce80 : isMoocaWalletEnoughAndS ? svgPaths.p6121d00 : svgPaths.p1e737280} fill="white" id="Vector_9" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pca98600 : isMoocaWalletEnoughAndS ? svgPaths.p3db4ab00 : svgPaths.p8c49100} fill="white" id="Vector_10" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2aa5b580 : isMoocaWalletEnoughAndS ? svgPaths.p2be2aa70 : svgPaths.p20712b00} fill="white" id="Vector_11" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p215e6380 : isMoocaWalletEnoughAndS ? svgPaths.p1ff6a780 : svgPaths.p2f5a3ec0} fill="white" id="Vector_12" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pb30b900 : isMoocaWalletEnoughAndS ? svgPaths.p34274200 : svgPaths.p6b3880} fill="white" id="Vector_13" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1b047a00 : isMoocaWalletEnoughAndS ? svgPaths.p2c7f1700 : svgPaths.p39ed7a00} fill="white" id="Vector_14" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p981bd00 : isMoocaWalletEnoughAndS ? svgPaths.p27bb0000 : svgPaths.p17352b0} fill="white" id="Vector_15" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p5e4e380 : isMoocaWalletEnoughAndS ? svgPaths.p1eef81a0 : svgPaths.p10539500} fill="white" id="Vector_16" opacity="0.2" />
                    </g>
                    <g id="Group_4">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2fdefb00 : isMoocaWalletEnoughAndS ? svgPaths.p74b1b00 : svgPaths.pb3a27b0} fill="#E8B022" id="Vector_17" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2799680 : isMoocaWalletEnoughAndS ? svgPaths.p3c467a80 : svgPaths.p2bcd7c00} fill="white" id="Vector_18" opacity="0.2" />
                      <g id="Group_5">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p686a80 : isMoocaWalletEnoughAndS ? svgPaths.p25667380 : svgPaths.p13418080} fill="white" id="Vector_19" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2f40e400 : isMoocaWalletEnoughAndS ? svgPaths.p393efb00 : svgPaths.p31fa8800} fill="white" id="Vector_20" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3311400 : isMoocaWalletEnoughAndS ? svgPaths.p2fe1e100 : svgPaths.p32f8b880} fill="white" id="Vector_21" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3a297340 : isMoocaWalletEnoughAndS ? svgPaths.p599f400 : svgPaths.p11eb6c00} fill="white" id="Vector_22" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pf665100 : isMoocaWalletEnoughAndS ? svgPaths.p3a60f200 : svgPaths.p159958f0} fill="white" id="Vector_23" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pa6a8200 : isMoocaWalletEnoughAndS ? svgPaths.p7e62980 : svgPaths.p8665f40} fill="white" id="Vector_24" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pa58f00 : isMoocaWalletEnoughAndS ? svgPaths.p393c9a00 : svgPaths.p51afb80} fill="white" id="Vector_25" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p20e1ba00 : isMoocaWalletEnoughAndS ? svgPaths.p4db6480 : svgPaths.p28242270} fill="white" id="Vector_26" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3a8b1080 : isMoocaWalletEnoughAndS ? svgPaths.p3f247600 : svgPaths.p3b153200} fill="white" id="Vector_27" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p22f964c0 : isMoocaWalletEnoughAndS ? svgPaths.p27c79f80 : svgPaths.p32c0800} fill="white" id="Vector_28" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p7aa9400 : isMoocaWalletEnoughAndS ? svgPaths.p29cd6180 : svgPaths.p31e8c100} fill="white" id="Vector_29" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2a945d00 : isMoocaWalletEnoughAndS ? svgPaths.pc88fe80 : svgPaths.p8c95400} fill="white" id="Vector_30" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3ce076f0 : isMoocaWalletEnoughAndS ? svgPaths.p29cd19c0 : svgPaths.p3f985340} fill="white" id="Vector_31" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p92db100 : isMoocaWalletEnoughAndS ? svgPaths.p19d714f0 : svgPaths.p26369100} fill="white" id="Vector_32" opacity="0.2" />
                    </g>
                    <g id="Group_6">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p16264400 : isMoocaWalletEnoughAndS ? svgPaths.p3c0bdc00 : svgPaths.p2bc02980} fill="#E8B022" id="Vector_33" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p29c09900 : isMoocaWalletEnoughAndS ? svgPaths.p5a78180 : svgPaths.p3c59de00} fill="white" id="Vector_34" opacity="0.2" />
                      <g id="Group_7">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3a231400 : isMoocaWalletEnoughAndS ? svgPaths.pe4fb600 : svgPaths.p1032b880} fill="white" id="Vector_35" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2ec1a7f0 : isMoocaWalletEnoughAndS ? svgPaths.p20e17d00 : svgPaths.p3ffdb000} fill="white" id="Vector_36" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pdeb0f00 : isMoocaWalletEnoughAndS ? svgPaths.p28856700 : svgPaths.pf3d9540} fill="white" id="Vector_37" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pc704300 : isMoocaWalletEnoughAndS ? svgPaths.p15b3d2b0 : svgPaths.peff1580} fill="white" id="Vector_38" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2cfc29f0 : isMoocaWalletEnoughAndS ? svgPaths.p669c400 : svgPaths.pac49180} fill="white" id="Vector_39" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1285bb00 : isMoocaWalletEnoughAndS ? svgPaths.p37774980 : svgPaths.p15c40c00} fill="white" id="Vector_40" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p677fa00 : isMoocaWalletEnoughAndS ? svgPaths.p1f361000 : svgPaths.p28abf300} fill="white" id="Vector_41" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p22df2800 : isMoocaWalletEnoughAndS ? svgPaths.p13296400 : svgPaths.p23624900} fill="white" id="Vector_42" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2ef2b280 : isMoocaWalletEnoughAndS ? svgPaths.p3aa69c00 : svgPaths.p1c9f9d00} fill="white" id="Vector_43" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p10074100 : isMoocaWalletEnoughAndS ? svgPaths.p219fee60 : svgPaths.p23c6e780} fill="white" id="Vector_44" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3d60ac00 : isMoocaWalletEnoughAndS ? svgPaths.p94a3a00 : svgPaths.p3d7a9e00} fill="white" id="Vector_45" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p29a24800 : isMoocaWalletEnoughAndS ? svgPaths.p1b2c23c0 : svgPaths.p2f20b00} fill="white" id="Vector_46" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p21b56300 : isMoocaWalletEnoughAndS ? svgPaths.p271a2c80 : svgPaths.p11ac5400} fill="white" id="Vector_47" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p5e1bf00 : isMoocaWalletEnoughAndS ? svgPaths.p1249c180 : svgPaths.p391c2600} fill="white" id="Vector_48" opacity="0.2" />
                    </g>
                    <g id="Group_8">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2d824eb0 : isMoocaWalletEnoughAndS ? svgPaths.p28460000 : svgPaths.p315f59e0} fill="#E8B022" id="Vector_49" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p32b7df00 : isMoocaWalletEnoughAndS ? svgPaths.p9bf6b00 : svgPaths.p21d61800} fill="white" id="Vector_50" opacity="0.2" />
                      <g id="Group_9">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pdab4170 : isMoocaWalletEnoughAndS ? svgPaths.p1cb45c80 : svgPaths.p280ff400} fill="white" id="Vector_51" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p36c98100 : isMoocaWalletEnoughAndS ? svgPaths.p31378cf0 : svgPaths.p1906cc00} fill="white" id="Vector_52" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3a5dc980 : isMoocaWalletEnoughAndS ? svgPaths.p1e24d080 : svgPaths.p3fbdf80} fill="white" id="Vector_53" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p211e9b00 : isMoocaWalletEnoughAndS ? svgPaths.p3c5d4a00 : svgPaths.p2cb91800} fill="white" id="Vector_54" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p363fc470 : isMoocaWalletEnoughAndS ? svgPaths.p347aee00 : svgPaths.p22a0bd40} fill="white" id="Vector_55" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p35ce1a80 : isMoocaWalletEnoughAndS ? svgPaths.p122bf800 : svgPaths.p2ddd7300} fill="white" id="Vector_56" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2cf68080 : isMoocaWalletEnoughAndS ? svgPaths.p3ddea780 : svgPaths.p2d398c80} fill="white" id="Vector_57" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1e81d630 : isMoocaWalletEnoughAndS ? svgPaths.p865d000 : svgPaths.p370a4b80} fill="white" id="Vector_58" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1e7a1400 : isMoocaWalletEnoughAndS ? svgPaths.p9662a00 : svgPaths.p2d5bc000} fill="white" id="Vector_59" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1bcb4000 : isMoocaWalletEnoughAndS ? svgPaths.p29726080 : svgPaths.p397dc300} fill="white" id="Vector_60" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2cea8c00 : isMoocaWalletEnoughAndS ? svgPaths.p6534300 : svgPaths.p3383f240} fill="white" id="Vector_61" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p36584c00 : isMoocaWalletEnoughAndS ? svgPaths.p38d16200 : svgPaths.p2eb5a100} fill="white" id="Vector_62" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p39297c80 : isMoocaWalletEnoughAndS ? svgPaths.p21a11500 : svgPaths.p2c102000} fill="white" id="Vector_63" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2b702180 : isMoocaWalletEnoughAndS ? svgPaths.p26c9b500 : svgPaths.p6774980} fill="white" id="Vector_64" opacity="0.2" />
                    </g>
                    <g id="Group_10">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1aba1580 : isMoocaWalletEnoughAndS ? svgPaths.p1b59cd00 : svgPaths.p283e4800} fill="#E8B022" id="Vector_65" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p21acd100 : isMoocaWalletEnoughAndS ? svgPaths.p1c00cc00 : svgPaths.p12036540} fill="white" id="Vector_66" opacity="0.2" />
                      <g id="Group_11">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p34b13a00 : isMoocaWalletEnoughAndS ? svgPaths.p15aa09c0 : svgPaths.p2712ff00} fill="white" id="Vector_67" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1651dc00 : isMoocaWalletEnoughAndS ? svgPaths.p2e78ff80 : svgPaths.p295d2580} fill="white" id="Vector_68" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1ee62880 : isMoocaWalletEnoughAndS ? svgPaths.p1940a400 : svgPaths.p1b159d00} fill="white" id="Vector_69" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1207b580 : isMoocaWalletEnoughAndS ? svgPaths.p329aab00 : svgPaths.p71f4000} fill="white" id="Vector_70" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pee58ea0 : isMoocaWalletEnoughAndS ? svgPaths.p7a07280 : svgPaths.p3322c900} fill="white" id="Vector_71" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pf289540 : isMoocaWalletEnoughAndS ? svgPaths.p70d0e00 : svgPaths.p11d96900} fill="white" id="Vector_72" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1f76c000 : isMoocaWalletEnoughAndS ? svgPaths.p188c6000 : svgPaths.p39b3ac80} fill="white" id="Vector_73" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p35d65080 : isMoocaWalletEnoughAndS ? svgPaths.p3bae6f00 : svgPaths.p4edfd00} fill="white" id="Vector_74" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2d00a400 : isMoocaWalletEnoughAndS ? svgPaths.p2eef380 : svgPaths.pd959340} fill="white" id="Vector_75" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p699ef00 : isMoocaWalletEnoughAndS ? svgPaths.p320a6580 : svgPaths.p3e3e480} fill="white" id="Vector_76" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2e2af330 : isMoocaWalletEnoughAndS ? svgPaths.pc4c5e00 : svgPaths.p20941c80} fill="white" id="Vector_77" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p67bf580 : isMoocaWalletEnoughAndS ? svgPaths.p130e6d80 : svgPaths.p43c11c0} fill="white" id="Vector_78" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1a32eac0 : isMoocaWalletEnoughAndS ? svgPaths.p11960ec0 : svgPaths.p367fec00} fill="white" id="Vector_79" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1435da00 : isMoocaWalletEnoughAndS ? svgPaths.pf784d00 : svgPaths.p309f7080} fill="white" id="Vector_80" opacity="0.2" />
                    </g>
                    <g id="Group_12">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p5796b80 : isMoocaWalletEnoughAndS ? svgPaths.p36489700 : svgPaths.pb908700} fill="#E8B022" id="Vector_81" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p35094a40 : isMoocaWalletEnoughAndS ? svgPaths.p88a2600 : svgPaths.p39d9ab00} fill="white" id="Vector_82" opacity="0.2" />
                      <g id="Group_13">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1b2c8000 : isMoocaWalletEnoughAndS ? svgPaths.p13b058c0 : svgPaths.p86a6980} fill="white" id="Vector_83" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pcc2d280 : isMoocaWalletEnoughAndS ? svgPaths.p53e1180 : svgPaths.p160e9f00} fill="white" id="Vector_84" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3aa97990 : isMoocaWalletEnoughAndS ? svgPaths.p160b9300 : svgPaths.pc195000} fill="white" id="Vector_85" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2b0ab700 : isMoocaWalletEnoughAndS ? svgPaths.p19446980 : svgPaths.p381cc000} fill="white" id="Vector_86" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pd462980 : isMoocaWalletEnoughAndS ? svgPaths.p3be38900 : svgPaths.p2261de00} fill="white" id="Vector_87" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1e1d900 : isMoocaWalletEnoughAndS ? svgPaths.p24f68380 : svgPaths.p63ae000} fill="white" id="Vector_88" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p101d5ef2 : isMoocaWalletEnoughAndS ? svgPaths.pcf62b00 : svgPaths.p15ee4480} fill="white" id="Vector_89" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p29ae6400 : isMoocaWalletEnoughAndS ? svgPaths.pf4fb4c0 : svgPaths.pe11aac0} fill="white" id="Vector_90" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p22561d00 : isMoocaWalletEnoughAndS ? svgPaths.p218bf880 : svgPaths.pb750c00} fill="white" id="Vector_91" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3ca5f780 : isMoocaWalletEnoughAndS ? svgPaths.p3c554100 : svgPaths.p292e6000} fill="white" id="Vector_92" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2108c580 : isMoocaWalletEnoughAndS ? svgPaths.pbda06f0 : svgPaths.p1aa9d840} fill="white" id="Vector_93" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p34173700 : isMoocaWalletEnoughAndS ? svgPaths.pccffbf0 : svgPaths.p33aef100} fill="white" id="Vector_94" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p22da7700 : isMoocaWalletEnoughAndS ? svgPaths.p3b97a80 : svgPaths.p2de86300} fill="white" id="Vector_95" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p36b92c00 : isMoocaWalletEnoughAndS ? svgPaths.p2a99f000 : svgPaths.pa408100} fill="white" id="Vector_96" opacity="0.2" />
                    </g>
                    <g id="Group_14">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p33bbf200 : isMoocaWalletEnoughAndS ? svgPaths.pc1da480 : svgPaths.p3547300} fill="#E8B022" id="Vector_97" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p26479700 : isMoocaWalletEnoughAndS ? svgPaths.p29c55680 : svgPaths.p62db900} fill="white" id="Vector_98" opacity="0.2" />
                      <g id="Group_15">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p356dc780 : isMoocaWalletEnoughAndS ? svgPaths.pa8c2e70 : svgPaths.p10303400} fill="white" id="Vector_99" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p4865780 : isMoocaWalletEnoughAndS ? svgPaths.p1a6afe00 : svgPaths.p16ac9e40} fill="white" id="Vector_100" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p25be4980 : isMoocaWalletEnoughAndS ? svgPaths.p298a4400 : svgPaths.p1d773080} fill="white" id="Vector_101" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p11335900 : isMoocaWalletEnoughAndS ? svgPaths.p10091c00 : svgPaths.pd5e5c80} fill="white" id="Vector_102" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p14e55e80 : isMoocaWalletEnoughAndS ? svgPaths.p12557100 : svgPaths.p87eae80} fill="white" id="Vector_103" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p20e9a00 : isMoocaWalletEnoughAndS ? svgPaths.p9acf000 : svgPaths.p26f16500} fill="white" id="Vector_104" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p19af2000 : isMoocaWalletEnoughAndS ? svgPaths.pd40ab00 : svgPaths.p26996940} fill="white" id="Vector_105" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2cac0f80 : isMoocaWalletEnoughAndS ? svgPaths.p29ad6200 : svgPaths.p2027cd70} fill="white" id="Vector_106" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p27f9580 : isMoocaWalletEnoughAndS ? svgPaths.p18276600 : svgPaths.pa039a00} fill="white" id="Vector_107" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pbb4300 : isMoocaWalletEnoughAndS ? svgPaths.p4e32000 : svgPaths.p2444bc00} fill="white" id="Vector_108" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1e444980 : isMoocaWalletEnoughAndS ? svgPaths.p4737700 : svgPaths.p84c5480} fill="white" id="Vector_109" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p19661a00 : isMoocaWalletEnoughAndS ? svgPaths.p103ac500 : svgPaths.p12da3c00} fill="white" id="Vector_110" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p290b4f80 : isMoocaWalletEnoughAndS ? svgPaths.p256d3c80 : svgPaths.p37cd3e80} fill="white" id="Vector_111" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1e189c0 : isMoocaWalletEnoughAndS ? svgPaths.p1128c7c0 : svgPaths.p1fa3a480} fill="white" id="Vector_112" opacity="0.2" />
                    </g>
                    <path d={isMoocaWalletEnoughAndXs ? svgPaths.p9e61100 : isMoocaWalletEnoughAndS ? svgPaths.p2d258180 : svgPaths.p38dfffe0} fill="white" id="Vector_113" opacity="0.2" />
                    <g id="Group_16">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1d470400 : isMoocaWalletEnoughAndS ? svgPaths.p8842570 : svgPaths.p8034880} fill="white" id="Vector_114" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.pacd9f00 : isMoocaWalletEnoughAndS ? svgPaths.p12ee2100 : svgPaths.p5c5d180} fill="white" id="Vector_115" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.pa52ef00 : isMoocaWalletEnoughAndS ? svgPaths.p216e1900 : svgPaths.p28e4e200} fill="white" id="Vector_116" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p290e5300 : isMoocaWalletEnoughAndS ? svgPaths.p3383d600 : svgPaths.p2b60d440} fill="white" id="Vector_117" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p21879c80 : isMoocaWalletEnoughAndS ? svgPaths.p39df81c0 : svgPaths.p12c01b00} fill="white" id="Vector_118" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p249fd300 : isMoocaWalletEnoughAndS ? svgPaths.p124e7c80 : svgPaths.p55cdd00} fill="white" id="Vector_119" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p98597f0 : isMoocaWalletEnoughAndS ? svgPaths.pae96000 : svgPaths.p24012980} fill="white" id="Vector_120" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p32f42a00 : isMoocaWalletEnoughAndS ? svgPaths.p32bc8370 : svgPaths.p17b41a00} fill="white" id="Vector_121" opacity="0.2" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletEnoughAndXs ? "left-[calc(50%+14.77px)] top-[calc(50%+8.45px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%+21.5px)] top-[calc(50%+12.25px)]" : "left-[calc(50%+35.03px)] top-[calc(50%+20.4px)]"}`} data-name="Group">
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[32.809px] left-[calc(50%+13.57px)] top-[calc(50%+9.07px)] w-[27.575px]" : isMoocaWalletEnoughAndS ? "h-[39.504px] left-[calc(50%+19.75px)] top-[calc(50%+13.16px)] w-[33.202px]" : "h-[50.552px] left-[calc(50%+32.17px)] top-[calc(50%+21.89px)] w-[42.488px]"}`} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "32.8088" : isMoocaWalletEnoughAndS ? "39.5045" : "50.5523"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 27.5747 32.8088" : isMoocaWalletEnoughAndS ? "0 0 33.2022 39.5045" : "0 0 42.4876 50.5523"} width={isMoocaWalletEnoughAndXs ? "27.5747" : isMoocaWalletEnoughAndS ? "33.2022" : "42.4876"}>
                    <path d={isMoocaWalletEnoughAndXs ? svgPaths.p279f5600 : isMoocaWalletEnoughAndS ? svgPaths.p2df809a0 : svgPaths.p3f67840} fill="#E8B022" id="Vector" />
                  </svg>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[33.401px] left-[calc(50%+12.96px)] top-[calc(50%+8.94px)] w-[24.864px]" : isMoocaWalletEnoughAndS ? "h-[40.217px] left-[calc(50%+18.86px)] top-[calc(50%+12.97px)] w-[29.939px]" : "h-[51.465px] left-[calc(50%+30.71px)] top-[calc(50%+21.58px)] w-[38.311px]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "33.4009" : isMoocaWalletEnoughAndS ? "40.2175" : "51.4646"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 24.8644 33.4009" : isMoocaWalletEnoughAndS ? "0 0 29.9387 40.2175" : "0 0 38.311 51.4646"} width={isMoocaWalletEnoughAndXs ? "24.8644" : isMoocaWalletEnoughAndS ? "29.9387" : "38.311"}>
                    <g id="Group">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p29cb5c00 : isMoocaWalletEnoughAndS ? svgPaths.pabcf900 : svgPaths.p20823300} fill="#E8B022" id="Vector" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1dc39900 : isMoocaWalletEnoughAndS ? svgPaths.p29be5e00 : svgPaths.p39950c80} fill="white" id="Vector_2" opacity="0.2" />
                      <g id="Group_2">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p280bcd80 : isMoocaWalletEnoughAndS ? svgPaths.p13540200 : svgPaths.p1bc31580} fill="white" id="Vector_3" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p28f26f00 : isMoocaWalletEnoughAndS ? svgPaths.p7dc5e3a : svgPaths.p1dfb4880} fill="white" id="Vector_4" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1f8fc000 : isMoocaWalletEnoughAndS ? svgPaths.p2240d300 : svgPaths.p1e94d480} fill="white" id="Vector_5" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2298b300 : isMoocaWalletEnoughAndS ? svgPaths.p1dfcb500 : svgPaths.p885bbf0} fill="white" id="Vector_6" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p38303200 : isMoocaWalletEnoughAndS ? svgPaths.p5016900 : svgPaths.p7212000} fill="white" id="Vector_7" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p39818700 : isMoocaWalletEnoughAndS ? svgPaths.p22216eb0 : svgPaths.p2e1f7800} fill="white" id="Vector_8" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p286e0880 : isMoocaWalletEnoughAndS ? svgPaths.p3f660780 : svgPaths.p10c9fc80} fill="white" id="Vector_9" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p36b47780 : isMoocaWalletEnoughAndS ? svgPaths.pf51de00 : svgPaths.p926580} fill="white" id="Vector_10" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p262aed40 : isMoocaWalletEnoughAndS ? svgPaths.p47e180 : svgPaths.p9493080} fill="white" id="Vector_11" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p17485412 : isMoocaWalletEnoughAndS ? svgPaths.pbbbca00 : svgPaths.p131dfe0} fill="white" id="Vector_12" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pdc79a00 : isMoocaWalletEnoughAndS ? svgPaths.p14763ba0 : svgPaths.p442fe70} fill="white" id="Vector_13" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2a71e000 : isMoocaWalletEnoughAndS ? svgPaths.p23b5af00 : svgPaths.p68e7400} fill="white" id="Vector_14" opacity="0.2" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p28e2ceb0 : isMoocaWalletEnoughAndS ? svgPaths.p3c583980 : svgPaths.pbfc1080} fill="white" id="Vector_15" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p37d8b880 : isMoocaWalletEnoughAndS ? svgPaths.p24b23d80 : svgPaths.p3e686080} fill="white" id="Vector_16" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2e8d6200 : isMoocaWalletEnoughAndS ? svgPaths.p163ca9c0 : svgPaths.p149205f0} fill="white" id="Vector_17" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.pbd55000 : isMoocaWalletEnoughAndS ? svgPaths.p9df0b70 : svgPaths.p3bb45700} fill="white" id="Vector_18" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p11da1400 : isMoocaWalletEnoughAndS ? svgPaths.p15675300 : svgPaths.p18ce3880} fill="white" id="Vector_19" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p255f6800 : isMoocaWalletEnoughAndS ? svgPaths.pa72dec0 : svgPaths.p17186f80} fill="white" id="Vector_20" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p259d7500 : isMoocaWalletEnoughAndS ? svgPaths.p33f15a00 : svgPaths.p3617e300} fill="white" id="Vector_21" opacity="0.2" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p27a5b880 : isMoocaWalletEnoughAndS ? svgPaths.p2f62dd80 : svgPaths.p37516900} fill="white" id="Vector_22" opacity="0.2" />
                    </g>
                  </svg>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletEnoughAndXs ? "left-[calc(50%+14.97px)] top-[calc(50%+8.39px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%+21.78px)] top-[calc(50%+12.16px)]" : "left-[calc(50%+35.5px)] top-[calc(50%+20.26px)]"}`} data-name="Group">
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[35.342px] left-[calc(50%+14.97px)] top-[calc(50%+8.39px)] w-[32.034px]" : isMoocaWalletEnoughAndS ? "h-[42.555px] left-[calc(50%+21.78px)] top-[calc(50%+12.16px)] w-[38.571px]" : "h-[54.456px] left-[calc(50%+35.5px)] top-[calc(50%+20.26px)] w-[49.358px]"}`} data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "35.3422" : isMoocaWalletEnoughAndS ? "42.5549" : "54.4559"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 32.0336 35.3422" : isMoocaWalletEnoughAndS ? "0 0 38.571 42.5549" : "0 0 49.3578 54.4559"} width={isMoocaWalletEnoughAndXs ? "32.0336" : isMoocaWalletEnoughAndS ? "38.571" : "49.3578"}>
                      <g id="Group">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1a45c6c0 : isMoocaWalletEnoughAndS ? svgPaths.p33dc61f0 : svgPaths.pe67b900} fill="#E8B022" id="Vector" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1faf2bf0 : isMoocaWalletEnoughAndS ? svgPaths.pb104400 : svgPaths.p1c4bc680} fill="white" id="Vector_2" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p17ead00 : isMoocaWalletEnoughAndS ? svgPaths.p14b7eac0 : svgPaths.pf6e4500} fill="white" id="Vector_3" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p319a0500 : isMoocaWalletEnoughAndS ? svgPaths.p28b40a80 : svgPaths.p19b5a6c0} fill="white" id="Vector_4" opacity="0.2" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1229e980 : isMoocaWalletEnoughAndS ? svgPaths.p318c2a00 : svgPaths.p20b2f500} fill="white" id="Vector_5" opacity="0.2" />
                      </g>
                    </svg>
                  </div>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletEnoughAndXs ? "left-[calc(50%+15.17px)] top-[calc(50%+8.27px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%+22.08px)] top-[calc(50%+11.99px)]" : "left-[calc(50%+35.98px)] top-[calc(50%+19.98px)]"}`} data-name="Group">
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[18.354px] left-[calc(50%+15.3px)] top-[calc(50%+8.27px)] w-[11.701px]" : isMoocaWalletEnoughAndS ? "h-[22.1px] left-[calc(50%+22.26px)] top-[calc(50%+11.99px)] w-[14.089px]" : "h-[28.281px] left-[calc(50%+36.27px)] top-[calc(50%+19.98px)] w-[18.029px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "18.3544" : isMoocaWalletEnoughAndS ? "22.1001" : "28.2807"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 11.7014 18.3544" : isMoocaWalletEnoughAndS ? "0 0 14.0893 22.1001" : "0 0 18.0294 28.2807"} width={isMoocaWalletEnoughAndXs ? "11.7014" : isMoocaWalletEnoughAndS ? "14.0893" : "18.0294"}>
                        <g id="Group" opacity="0.2">
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1e300f0 : isMoocaWalletEnoughAndS ? svgPaths.p1f719380 : svgPaths.p1d81b800} fill="white" id="Vector" opacity="0.2" />
                        </g>
                      </svg>
                    </div>
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[17.954px] left-[calc(50%+15.05px)] top-[calc(50%+8.18px)] w-[11.7px]" : isMoocaWalletEnoughAndS ? "h-[21.618px] left-[calc(50%+21.9px)] top-[calc(50%+11.85px)] w-[14.088px]" : "h-[27.664px] left-[calc(50%+35.68px)] top-[calc(50%+19.76px)] w-[18.027px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "17.954" : isMoocaWalletEnoughAndS ? "21.6181" : "27.6637"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 11.7 17.954" : isMoocaWalletEnoughAndS ? "0 0 14.0877 21.6181" : "0 0 18.0273 27.6637"} width={isMoocaWalletEnoughAndXs ? "11.7" : isMoocaWalletEnoughAndS ? "14.0877" : "18.0273"}>
                        <g id="Group">
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p243cca00 : isMoocaWalletEnoughAndS ? svgPaths.p194920c0 : svgPaths.p2aa70500} fill="#E8B022" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[13.259px] left-[calc(50%+14.96px)] top-[calc(50%+3.97px)] w-[25.227px]" : isMoocaWalletEnoughAndS ? "h-[15.965px] left-[calc(50%+21.77px)] top-[calc(50%+5.76px)] w-[30.375px]" : "h-[20.43px] left-[calc(50%+35.47px)] top-[calc(50%+9.78px)] w-[38.87px]"}`} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "13.2593" : isMoocaWalletEnoughAndS ? "15.9653" : "20.4302"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 25.227 13.2593" : isMoocaWalletEnoughAndS ? "0 0 30.3753 15.9653" : "0 0 38.8701 20.4302"} width={isMoocaWalletEnoughAndXs ? "25.227" : isMoocaWalletEnoughAndS ? "30.3753" : "38.8701"}>
                    <path d={isMoocaWalletEnoughAndXs ? svgPaths.p37375300 : isMoocaWalletEnoughAndS ? svgPaths.pf224600 : svgPaths.p248b9900} fill="white" id="Vector" opacity="0.1" />
                  </svg>
                </div>
              </div>
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[28.212px] left-[calc(50%+0.94px)] top-[calc(50%+6.33px)] w-[29.524px]" : isMoocaWalletEnoughAndS ? "h-[33.97px] left-[calc(50%+1.44px)] top-[calc(50%+9.18px)] w-[35.549px]" : "h-[43.47px] left-[calc(50%+2.18px)] top-[calc(50%+15.39px)] w-[45.491px]"}`} data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "28.2125" : isMoocaWalletEnoughAndS ? "33.9701" : "43.4702"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 29.5239 28.2125" : isMoocaWalletEnoughAndS ? "0 0 35.5492 33.9701" : "0 0 45.491 43.4702"} width={isMoocaWalletEnoughAndXs ? "29.5239" : isMoocaWalletEnoughAndS ? "35.5492" : "45.491"}>
                  <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2a5c0d80 : isMoocaWalletEnoughAndS ? svgPaths.p11e32c00 : svgPaths.p2b4e6900} fill="white" id="Vector" opacity="0.15" />
                </svg>
              </div>
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletEnoughAndXs ? "left-[calc(50%+0.42px)] top-[calc(50%-0.98px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%+0.68px)] top-[calc(50%-1.42px)]" : "left-[calc(50%+0.94px)] top-[calc(50%-1.99px)]"}`}>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[77.841px] left-[calc(50%+0.42px)] top-[calc(50%-0.98px)] w-[78.626px]" : isMoocaWalletEnoughAndS ? "h-[93.727px] left-[calc(50%+0.68px)] top-[calc(50%-1.42px)] w-[94.672px]" : "h-[119.939px] left-[calc(50%+0.94px)] top-[calc(50%-1.99px)] w-[121.148px]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "77.8415" : isMoocaWalletEnoughAndS ? "93.7275" : "119.939"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 78.6264 77.8415" : isMoocaWalletEnoughAndS ? "0 0 94.6724 93.7275" : "0 0 121.148 119.939"} width={isMoocaWalletEnoughAndXs ? "78.6264" : isMoocaWalletEnoughAndS ? "94.6724" : "121.148"}>
                    <g id="Group">
                      <g id="Group_2">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p22de4310 : isMoocaWalletEnoughAndS ? svgPaths.p11bd9000 : svgPaths.p32ce61e0} fill="white" id="Vector" />
                        <g id="Group_3">
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.pf9faff1 : isMoocaWalletEnoughAndS ? svgPaths.p10cc1b00 : svgPaths.p3afabc00} fill="#D2DEED" id="Vector_2" />
                        </g>
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2fd1c900 : isMoocaWalletEnoughAndS ? svgPaths.p21244100 : svgPaths.p3a2ab700} fill="#D2DEED" id="Vector_3" />
                      <g id="Group_4">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.pbb28300 : isMoocaWalletEnoughAndS ? svgPaths.p1cb2e300 : svgPaths.p38404c00} fill="#D2DEED" id="Vector_4" />
                      </g>
                      <g id="Group_5">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1d010cc0 : isMoocaWalletEnoughAndS ? svgPaths.p26f85c00 : svgPaths.p32cda380} fill="#D2DEED" id="Vector_5" />
                      </g>
                      <g id="Group_6">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2c97e4f0 : isMoocaWalletEnoughAndS ? svgPaths.p92eb600 : svgPaths.p1be4cc00} fill="white" id="Vector_6" />
                        <g id="Group_7">
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3922a000 : isMoocaWalletEnoughAndS ? svgPaths.p2373e380 : svgPaths.pb47970} fill="#D2DEED" id="Vector_7" />
                        </g>
                      </g>
                      <g id="Group_8">
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1cc48700 : isMoocaWalletEnoughAndS ? svgPaths.p3e52ca80 : svgPaths.p2510baf0} fill="#EFF2F8" id="Vector_8" />
                        <path d={isMoocaWalletEnoughAndXs ? svgPaths.p11b82340 : isMoocaWalletEnoughAndS ? svgPaths.p12c89c40 : svgPaths.p11ac0372} fill="#EFF2F8" id="Vector_9" />
                      </g>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p11e98300 : isMoocaWalletEnoughAndS ? svgPaths.pa3e3270 : svgPaths.p299da080} fill="#D2DEED" id="Vector_10" />
                    </g>
                  </svg>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[2.757px] left-[calc(50%+8.13px)] top-[calc(50%-7.52px)] w-[5.682px]" : isMoocaWalletEnoughAndS ? "h-[3.32px] left-[calc(50%+11.87px)] top-[calc(50%-10.9px)] w-[6.842px]" : "h-[4.248px] left-[calc(50%+19.26px)] top-[calc(50%-17.5px)] w-[8.755px]"}`} data-name="Vector">
                  <div className="absolute inset-[-4.09%_-1.99%]">
                    <svg className="block size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "2.9831" : isMoocaWalletEnoughAndS ? "3.59189" : "4.59641"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 5.90798 2.9831" : isMoocaWalletEnoughAndS ? "0 0 7.11368 3.59189" : "0 0 9.1031 4.59641"} width={isMoocaWalletEnoughAndXs ? "5.90798" : isMoocaWalletEnoughAndS ? "7.11368" : "9.1031"}>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1eb71f40 : isMoocaWalletEnoughAndS ? svgPaths.p29579be0 : svgPaths.p3362d100} fill="#2359A8" id="Vector" stroke="#2359A8" strokeWidth={isMoocaWalletEnoughAndXs ? "0.225806" : isMoocaWalletEnoughAndS ? "0.271889" : "0.347926"} />
                    </svg>
                  </div>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[2.756px] left-[calc(50%-1.46px)] top-[calc(50%-7.09px)] w-[5.682px]" : isMoocaWalletEnoughAndS ? "h-[3.319px] left-[calc(50%-2.04px)] top-[calc(50%-10.28px)] w-[6.842px]" : "h-[4.247px] left-[calc(50%-3.52px)] top-[calc(50%-16.49px)] w-[8.755px]"}`} data-name="Vector">
                  <div className="absolute inset-[-4.1%_-1.99%]">
                    <svg className="block size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "2.98197" : isMoocaWalletEnoughAndS ? "3.59053" : "4.59467"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 5.90797 2.98197" : isMoocaWalletEnoughAndS ? "0 0 7.11368 3.59053" : "0 0 9.1031 4.59467"} width={isMoocaWalletEnoughAndXs ? "5.90797" : isMoocaWalletEnoughAndS ? "7.11368" : "9.1031"}>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p211e6600 : isMoocaWalletEnoughAndS ? svgPaths.p2759e680 : svgPaths.p6e0c600} fill="#2359A8" id="Vector" stroke="#2359A8" strokeWidth={isMoocaWalletEnoughAndXs ? "0.225806" : isMoocaWalletEnoughAndS ? "0.271889" : "0.347926"} />
                    </svg>
                  </div>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[7.518px] left-[calc(50%+3.55px)] top-[calc(50%-4.35px)] w-[5.359px]" : isMoocaWalletEnoughAndS ? "h-[9.052px] left-[calc(50%+5.22px)] top-[calc(50%-6.31px)] w-[6.453px]" : "h-[11.584px] left-[calc(50%+8.37px)] top-[calc(50%-9.98px)] w-[8.257px]"}`} data-name="Vector">
                  <div className="absolute inset-[-6.17%_-8.43%_-6.01%_-8.43%]">
                    <svg className="block size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "8.43367" : isMoocaWalletEnoughAndS ? "10.1548" : "12.9947"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 6.26218 8.43367" : isMoocaWalletEnoughAndS ? "0 0 7.54018 10.1548" : "0 0 9.64887 12.9947"} width={isMoocaWalletEnoughAndXs ? "6.26218" : isMoocaWalletEnoughAndS ? "7.54018" : "9.64887"}>
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1ea70a80 : isMoocaWalletEnoughAndS ? svgPaths.p2ee7b180 : svgPaths.p2ecf2bc0} id="Vector" stroke="#2359A8" strokeMiterlimit="10" strokeWidth={isMoocaWalletEnoughAndXs ? "0.903226" : isMoocaWalletEnoughAndS ? "1.08756" : "1.39171"} />
                    </svg>
                  </div>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletEnoughAndXs ? "h-[17.324px] left-[calc(50%+1.39px)] top-[calc(50%+6.2px)] w-[31.297px]" : isMoocaWalletEnoughAndS ? "h-[20.859px] left-[calc(50%+2.09px)] top-[calc(50%+8.98px)] w-[37.684px]" : "h-[26.693px] left-[calc(50%+3.25px)] top-[calc(50%+15.06px)] w-[48.222px]"}`}>
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center ${isMoocaWalletEnoughAndXs ? "h-[17.324px] left-[calc(50%+1.39px)] top-[calc(50%+6.2px)] w-[31.297px]" : isMoocaWalletEnoughAndS ? "h-[20.859px] left-[calc(50%+2.09px)] top-[calc(50%+8.98px)] w-[37.684px]" : "h-[26.693px] left-[calc(50%+3.25px)] top-[calc(50%+15.06px)] w-[48.222px]"}`}>
                    <div className="flex-none rotate-[-3.15deg]">
                      <div className={`relative ${isMoocaWalletEnoughAndXs ? "h-[15.671px] w-[30.481px]" : isMoocaWalletEnoughAndS ? "h-[18.87px] w-[36.701px]" : "h-[24.147px] w-[46.965px]"}`} data-name="Group">
                        <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "15.6714" : isMoocaWalletEnoughAndS ? "18.8697" : "24.1467"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 30.481 15.6714" : isMoocaWalletEnoughAndS ? "0 0 36.7015 18.8697" : "0 0 46.9653 24.1467"} width={isMoocaWalletEnoughAndXs ? "30.481" : isMoocaWalletEnoughAndS ? "36.7015" : "46.9653"}>
                          <g id="Group">
                            <path d={isMoocaWalletEnoughAndXs ? svgPaths.p33edaa80 : isMoocaWalletEnoughAndS ? svgPaths.p2d0a3400 : svgPaths.pa65da00} fill="#0055B8" id="Vector" />
                            <g id="Group_2">
                              <path d={isMoocaWalletEnoughAndXs ? svgPaths.p161075f1 : isMoocaWalletEnoughAndS ? svgPaths.p393094c0 : svgPaths.p10da9300} fill="white" id="Vector_2" />
                              <path d={isMoocaWalletEnoughAndXs ? svgPaths.p226ee70 : isMoocaWalletEnoughAndS ? svgPaths.p26bb5c00 : svgPaths.p241bcd80} fill="white" id="Vector_3" />
                              <path d={isMoocaWalletEnoughAndXs ? svgPaths.p12d50800 : isMoocaWalletEnoughAndS ? svgPaths.p196b1100 : svgPaths.p2f421b00} fill="white" id="Vector_4" />
                              <path d={isMoocaWalletEnoughAndXs ? svgPaths.pbc0d100 : isMoocaWalletEnoughAndS ? svgPaths.p127e5d00 : svgPaths.p32a04f80} fill="white" id="Vector_5" />
                              <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3359200 : isMoocaWalletEnoughAndS ? svgPaths.p2f0df430 : svgPaths.p6c2ab00} fill="white" id="Vector_6" />
                              <path d={isMoocaWalletEnoughAndXs ? svgPaths.p26a37400 : isMoocaWalletEnoughAndS ? svgPaths.p359d7700 : svgPaths.p43dfb00} fill="white" id="Vector_7" />
                              <path d={isMoocaWalletEnoughAndXs ? svgPaths.pfd9eea0 : isMoocaWalletEnoughAndS ? svgPaths.p22518400 : svgPaths.p26793e00} fill="white" id="Vector_8" />
                              <path d={isMoocaWalletEnoughAndXs ? svgPaths.p31fe3f80 : isMoocaWalletEnoughAndS ? svgPaths.p2746280 : svgPaths.p2198f000} fill="white" id="Vector_9" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center ${isMoocaWalletEnoughAndXs ? "h-[20.815px] left-[calc(50%-4.47px)] top-[calc(50%+6.82px)] w-[22.252px]" : isMoocaWalletEnoughAndS ? "h-[25.063px] left-[calc(50%-6.4px)] top-[calc(50%+9.88px)] w-[26.793px]" : "h-[32.073px] left-[calc(50%-10.65px)] top-[calc(50%+16.53px)] w-[34.286px]"}`}>
                  <div className="flex-none rotate-[22.52deg]">
                    <div className={`relative ${isMoocaWalletEnoughAndXs ? "h-[15.15px] w-[17.807px]" : isMoocaWalletEnoughAndS ? "h-[18.242px] w-[21.441px]" : "h-[23.344px] w-[27.438px]"}`} data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "15.1505" : isMoocaWalletEnoughAndS ? "18.2424" : "23.344"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 17.8074 15.1505" : isMoocaWalletEnoughAndS ? "0 0 21.4415 18.2424" : "0 0 27.4377 23.344"} width={isMoocaWalletEnoughAndXs ? "17.8074" : isMoocaWalletEnoughAndS ? "21.4415" : "27.4377"}>
                        <g id="Group">
                          <path d={isMoocaWalletEnoughAndXs ? svgPaths.p3a48b800 : isMoocaWalletEnoughAndS ? svgPaths.p2226f400 : svgPaths.p2fec7f0} fill="white" id="Vector" />
                          <g id="Group_2">
                            <path d={isMoocaWalletEnoughAndXs ? svgPaths.p33203380 : isMoocaWalletEnoughAndS ? svgPaths.pb9a1000 : svgPaths.p28749280} fill="#D2DEED" id="Vector_2" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletEnoughAndXs ? "left-[calc(50%+6.78px)] top-[calc(50%+3.74px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%+9.91px)] top-[calc(50%+5.42px)]" : "left-[calc(50%+16.05px)] top-[calc(50%+9.22px)]"}`} data-name="Group">
                  <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletEnoughAndXs ? "left-[calc(50%+6.78px)] top-[calc(50%+3.74px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%+9.91px)] top-[calc(50%+5.42px)]" : "left-[calc(50%+16.05px)] top-[calc(50%+9.22px)]"}`} data-name="Group">
                    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[13.149px] left-[calc(50%+6.78px)] top-[calc(50%+3.74px)] w-[9.904px]" : isMoocaWalletEnoughAndS ? "h-[15.832px] left-[calc(50%+9.91px)] top-[calc(50%+5.42px)] w-[11.925px]" : "h-[20.26px] left-[calc(50%+16.05px)] top-[calc(50%+9.22px)] w-[15.26px]"}`} data-name="Group">
                      <div className="absolute inset-[-2.58%_-3.42%]">
                        <svg className="block size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "13.8262" : isMoocaWalletEnoughAndS ? "16.6478" : "21.3036"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 10.5812 13.8262" : isMoocaWalletEnoughAndS ? "0 0 12.7406 16.6478" : "0 0 16.3036 21.3036"} width={isMoocaWalletEnoughAndXs ? "10.5812" : isMoocaWalletEnoughAndS ? "12.7406" : "16.3036"}>
                          <g id="Group">
                            <path d={isMoocaWalletEnoughAndXs ? svgPaths.p2a3f1c00 : isMoocaWalletEnoughAndS ? svgPaths.pf14db0 : svgPaths.p25aa2a00} fill="white" id="Vector" stroke="#D2DEED" strokeMiterlimit="10" strokeWidth={isMoocaWalletEnoughAndXs ? "0.677419" : isMoocaWalletEnoughAndS ? "0.815668" : "1.04378"} />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`-translate-x-1/2 -translate-y-1/2 absolute contents ${isMoocaWalletEnoughAndXs ? "left-[calc(50%+4.24px)] top-[calc(50%+1px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%+6.23px)] top-[calc(50%+1.45px)]" : "left-[calc(50%+10.02px)] top-[calc(50%+2.72px)]"}`} data-name="Group">
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "h-[8.402px] left-[calc(50%-0.76px)] top-[calc(50%-10.7px)] w-[8.398px]" : isMoocaWalletEnoughAndS ? "h-[10.116px] left-[calc(50%-1.03px)] top-[calc(50%-15.52px)] w-[10.112px]" : "h-[12.945px] left-[calc(50%-1.86px)] top-[calc(50%-25.07px)] w-[12.941px]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "8.40165" : isMoocaWalletEnoughAndS ? "10.1163" : "12.9454"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 8.39871 8.40165" : isMoocaWalletEnoughAndS ? "0 0 10.1126 10.1163" : "0 0 12.9405 12.9454"} width={isMoocaWalletEnoughAndXs ? "8.39871" : isMoocaWalletEnoughAndS ? "10.1126" : "12.9405"}>
                    <g id="Group">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p138eac00 : isMoocaWalletEnoughAndS ? svgPaths.p353f3e00 : svgPaths.p3e9496f0} fill="white" id="Vector" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p138eac00 : isMoocaWalletEnoughAndS ? svgPaths.p353f3e00 : svgPaths.p3e9496f0} fill="white" id="Vector_2" opacity="0.7" />
                    </g>
                  </svg>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "left-[calc(50%-14.7px)] size-[7.137px] top-[calc(50%+3.45px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%-21.24px)] size-[8.594px] top-[calc(50%+5px)]" : "left-[calc(50%-34.96px)] size-[10.997px] top-[calc(50%+8.53px)]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "7.13746" : isMoocaWalletEnoughAndS ? "8.5941" : "10.9975"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 7.13767 7.13746" : isMoocaWalletEnoughAndS ? "0 0 8.59419 8.5941" : "0 0 10.9975 10.9975"} width={isMoocaWalletEnoughAndXs ? "7.13767" : isMoocaWalletEnoughAndS ? "8.59419" : "10.9975"}>
                    <g id="Group">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p13ce2a00 : isMoocaWalletEnoughAndS ? svgPaths.p1b98ba80 : svgPaths.p4d42f00} fill="white" id="Vector" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p13ce2a00 : isMoocaWalletEnoughAndS ? svgPaths.p1b98ba80 : svgPaths.p4d42f00} fill="white" id="Vector_2" opacity="0.7" />
                    </g>
                  </svg>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "left-[calc(50%+21.07px)] size-[5.69px] top-[calc(50%-7.08px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%+30.62px)] size-[6.852px] top-[calc(50%-10.26px)]" : "left-[calc(50%+49.97px)] size-[8.768px] top-[calc(50%-16.45px)]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "5.69043" : isMoocaWalletEnoughAndS ? "6.85176" : "8.76788"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 5.69065 5.69043" : isMoocaWalletEnoughAndS ? "0 0 6.85184 6.85176" : "0 0 8.76789 8.76788"} width={isMoocaWalletEnoughAndXs ? "5.69065" : isMoocaWalletEnoughAndS ? "6.85184" : "8.76789"}>
                    <g id="Group">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1b0e7d40 : isMoocaWalletEnoughAndS ? svgPaths.p22bf6080 : svgPaths.p22d55000} fill="white" id="Vector" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p1b0e7d40 : isMoocaWalletEnoughAndS ? svgPaths.p22bf6080 : svgPaths.p22d55000} fill="white" id="Vector_2" opacity="0.7" />
                    </g>
                  </svg>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "left-[calc(50%+22.9px)] size-[8.402px] top-[calc(50%+8.22px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%+33.28px)] size-[10.116px] top-[calc(50%+11.92px)]" : "left-[calc(50%+54.33px)] size-[12.945px] top-[calc(50%+19.86px)]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "8.40165" : isMoocaWalletEnoughAndS ? "10.1163" : "12.9454"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 8.40186 8.40165" : isMoocaWalletEnoughAndS ? "0 0 10.1164 10.1163" : "0 0 12.9454 12.9454"} width={isMoocaWalletEnoughAndXs ? "8.40186" : isMoocaWalletEnoughAndS ? "10.1164" : "12.9454"}>
                    <g id="Group">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.pdad9310 : isMoocaWalletEnoughAndS ? svgPaths.p3fdb3200 : svgPaths.p242c0300} fill="white" id="Vector" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.pdad9310 : isMoocaWalletEnoughAndS ? svgPaths.p3fdb3200 : svgPaths.p242c0300} fill="white" id="Vector_2" opacity="0.7" />
                    </g>
                  </svg>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "left-[calc(50%-7.08px)] size-[8.402px] top-[calc(50%+12.71px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%-10.18px)] size-[10.116px] top-[calc(50%+18.42px)]" : "left-[calc(50%-16.85px)] size-[12.945px] top-[calc(50%+30.52px)]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "8.40165" : isMoocaWalletEnoughAndS ? "10.1163" : "12.9454"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 8.40186 8.40165" : isMoocaWalletEnoughAndS ? "0 0 10.1164 10.1163" : "0 0 12.9454 12.9454"} width={isMoocaWalletEnoughAndXs ? "8.40186" : isMoocaWalletEnoughAndS ? "10.1164" : "12.9454"}>
                    <g id="Group">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p13af6f80 : isMoocaWalletEnoughAndS ? svgPaths.p3d6e5080 : svgPaths.p379cac00} fill="white" id="Vector" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p13af6f80 : isMoocaWalletEnoughAndS ? svgPaths.p3d6e5080 : svgPaths.p379cac00} fill="white" id="Vector_2" opacity="0.7" />
                    </g>
                  </svg>
                </div>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isMoocaWalletEnoughAndXs ? "left-[calc(50%+12.17px)] size-[6.907px] top-[calc(50%+1.76px)]" : isMoocaWalletEnoughAndS ? "left-[calc(50%+17.72px)] size-[8.317px] top-[calc(50%+2.56px)]" : "left-[calc(50%+28.83px)] size-[10.643px] top-[calc(50%+4.54px)]"}`} data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height={isMoocaWalletEnoughAndXs ? "6.90733" : isMoocaWalletEnoughAndS ? "8.317" : "10.6429"} preserveAspectRatio="none" viewBox={isMoocaWalletEnoughAndXs ? "0 0 6.90753 6.90733" : isMoocaWalletEnoughAndS ? "0 0 8.31709 8.317" : "0 0 10.6429 10.6429"} width={isMoocaWalletEnoughAndXs ? "6.90753" : isMoocaWalletEnoughAndS ? "8.31709" : "10.6429"}>
                    <g id="Group">
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p166e2a00 : isMoocaWalletEnoughAndS ? svgPaths.p2eab3f00 : svgPaths.p3fcf8c00} fill="white" id="Vector" />
                      <path d={isMoocaWalletEnoughAndXs ? svgPaths.p166e2a00 : isMoocaWalletEnoughAndS ? svgPaths.p2eab3f00 : svgPaths.p3fcf8c00} fill="white" id="Vector_2" opacity="0.7" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          )}
          {isHappyMoocaWithSunnyAndL && (
            <>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-13.79px)] top-[calc(50%-67.7px)]" data-name="Group">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[75.49px] left-[calc(50%-13.79px)] top-[calc(50%-70.75px)] w-[84.563px]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height="75.49" preserveAspectRatio="none" viewBox="0 0 84.5631 75.49" width="84.5631">
                    <g id="Group">
                      <path d={svgPaths.pb838c70} fill="#FDDED5" id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[60.373px] left-[calc(50%-11.94px)] top-[calc(50%-63.2px)] w-[65.713px]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height="60.3726" preserveAspectRatio="none" viewBox="0 0 65.7132 60.3726" width="65.7132">
                    <g id="Group">
                      <path d={svgPaths.p113efa00} fill="#FEF6A7" id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[54.293px] left-[calc(50%-7.9px)] top-[calc(50%-54.04px)] w-[48.275px]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height="54.2925" preserveAspectRatio="none" viewBox="0 0 48.275 54.2925" width="48.275">
                    <g id="Group">
                      <path d={svgPaths.p253f2c80} fill="#B1E0E7" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+38.52px)] top-[calc(50%+7.53px)]" data-name="Group">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[65.427px] left-[calc(50%+36.23px)] top-[calc(50%+74.36px)] w-[67.389px]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height="65.4269" preserveAspectRatio="none" viewBox="0 0 67.3894 65.4269" width="67.3894">
                    <g id="Group">
                      <path d={svgPaths.p13ff5e00} fill="white" id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[10.463px] left-[calc(50%+36.51px)] top-[calc(50%+88.61px)] w-[37.884px]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height="10.4627" preserveAspectRatio="none" viewBox="0 0 37.8841 10.4627" width="37.8841">
                    <g id="Group">
                      <path d={svgPaths.p1ce3a180} fill="#D2DEED" id="Vector" />
                      <path d={svgPaths.p3e4a7f00} fill="#D2DEED" id="Vector_2" />
                    </g>
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+36.24px)] top-[calc(50%+74.37px)]" data-name="Group">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[68.254px] left-[calc(50%+36.24px)] top-[calc(50%+74.37px)] w-[70.725px]" data-name="Group">
                    <svg className="absolute block inset-0 size-full" fill="none" height="68.2539" preserveAspectRatio="none" viewBox="0 0 70.7255 68.2539" width="70.7255">
                      <g id="Group">
                        <path d={svgPaths.p2fdd300} fill="#D2DEED" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[6.899px] left-[calc(50%+2.14px)] top-[calc(50%+42.65px)] w-[14.152px]" data-name="Group">
                  <div className="absolute inset-[-7.68%_-3.75%_-7.68%_-3.74%]">
                    <svg className="block size-full" fill="none" height="7.95865" preserveAspectRatio="none" viewBox="0 0 15.212 7.95865" width="15.212">
                      <g id="Group">
                        <path d={svgPaths.p2e0f3fc0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.0599" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.123px] left-[calc(50%+56.07px)] top-[calc(50%+34.65px)] w-[26.187px]" data-name="Vector">
                  <div className="absolute inset-[-16.97%_-2.02%]">
                    <svg className="block size-full" fill="none" height="4.18316" preserveAspectRatio="none" viewBox="0 0 27.2468 4.18316" width="27.2468">
                      <path d={svgPaths.p1d3ae180} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.0599" />
                    </svg>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[27.165px] left-[calc(50%+31.56px)] top-[calc(50%+57.9px)] w-[57.388px]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="27.1648" preserveAspectRatio="none" viewBox="0 0 57.3879 27.1648" width="57.3879">
                    <path d={svgPaths.p13556900} fill="#D2DEED" id="Vector" />
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.807px] left-[calc(50%+66.38px)] top-[calc(50%+62.74px)] w-[7.132px]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="20.8073" preserveAspectRatio="none" viewBox="0 0 7.13168 20.8073" width="7.13168">
                    <path d={svgPaths.p15dfa400} fill="#D2DEED" id="Vector" />
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[53.261px] left-[calc(50%+37.49px)] top-[calc(50%+50.18px)] w-[94.43px]" data-name="Group">
                  <svg className="absolute block inset-0 size-full" fill="none" height="53.2607" preserveAspectRatio="none" viewBox="0 0 94.4299 53.2607" width="94.4299">
                    <g id="Group">
                      <path d={svgPaths.p3ad8b200} fill="#E8A523" id="Vector" />
                      <g id="Group_2">
                        <path d={svgPaths.p32e90280} fill="white" id="Vector_2" />
                        <path d={svgPaths.p377e5d80} fill="white" id="Vector_3" />
                        <g id="Group_3">
                          <path d={svgPaths.p22d9cb00} fill="white" id="Vector_4" />
                          <path d={svgPaths.p36c97a80} fill="white" id="Vector_5" />
                          <path d={svgPaths.pd49a680} fill="white" id="Vector_6" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[125.287px] left-[calc(50%+38.52px)] top-[calc(50%-30.79px)] w-[196.79px]" data-name="Group">
                  <div className="absolute inset-[-2.23%_-1.42%]">
                    <svg className="block size-full" fill="none" height="130.887" preserveAspectRatio="none" viewBox="0 0 202.391 130.887" width="202.391">
                      <g id="Group">
                        <g id="Vector">
                          <mask fill="black" height="132" id="path-1-outside-1_0_3697" maskUnits="userSpaceOnUse" width="203" x="-0.199999" y="-0.2">
                            <rect fill="white" height="132" width="203" x="-0.199999" y="-0.2" />
                            <path d={svgPaths.p271af400} />
                          </mask>
                          <path d={svgPaths.p271af400} fill="white" />
                          <path d={svgPaths.p271af400} mask="url(#path-1-outside-1_0_3697)" stroke="#D2DEED" strokeWidth="5.6" />
                        </g>
                        <g id="Group_2">
                          <path d={svgPaths.pd3c6c80} fill="#FDDED5" id="Vector_2" />
                          <path d={svgPaths.p33d37280} fill="#FDDED5" id="Vector_3" />
                        </g>
                        <g id="Group_3">
                          <path d={svgPaths.pdf82e80} id="Vector_4" stroke="#2359A8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.5" />
                        </g>
                        <path d={svgPaths.pde3c980} id="Vector_5" stroke="#2359A8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.5" />
                        <path d={svgPaths.p3c522980} id="Vector_6" stroke="#2359A8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.5" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-1.94px)] top-[calc(50%+45.64px)]" data-name="Group">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-1.94px)] top-[calc(50%+45.64px)]" data-name="Group">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[41.265px] left-[calc(50%-1.94px)] top-[calc(50%+45.64px)] w-[40.76px]" data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" height="41.2652" preserveAspectRatio="none" viewBox="0 0 40.7596 41.2652" width="40.7596">
                        <g id="Group">
                          <path d={svgPaths.pb87b400} fill="white" id="Vector" />
                          <g id="Group_2">
                            <path d={svgPaths.p2d4e1000} fill="#D2DEED" id="Vector_2" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+82.42px)] top-[calc(50%+45.64px)]" data-name="Group">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+82.42px)] top-[calc(50%+45.64px)]" data-name="Group">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[41.265px] items-center justify-center left-[calc(50%+82.42px)] top-[calc(50%+45.64px)] w-[40.76px]">
                      <div className="-scale-y-100 flex-none rotate-180">
                        <div className="h-[41.265px] relative w-[40.76px]" data-name="Group">
                          <svg className="absolute block inset-0 size-full" fill="none" height="41.2652" preserveAspectRatio="none" viewBox="0 0 40.7596 41.2652" width="40.7596">
                            <g id="Group">
                              <path d={svgPaths.pe066440} fill="white" id="Vector" />
                              <g id="Group_2">
                                <path d={svgPaths.p12842600} fill="#D2DEED" id="Vector_2" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[119.498px] left-[calc(50%-77.1px)] top-[calc(50%+46.19px)] w-[120.798px]" data-name="Group">
                <div className="absolute inset-[0_-0.42%]">
                  <svg className="block size-full" fill="none" height="119.498" preserveAspectRatio="none" viewBox="0 0 121.813 119.498" width="121.813">
                    <g id="Group">
                      <g id="Group_2">
                        <path d={svgPaths.p28e75480} id="Vector" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                        <path d={svgPaths.pa165de0} id="Vector_2" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                        <path d={svgPaths.p2e885780} id="Vector_3" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                        <path d={svgPaths.p7428a00} id="Vector_4" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                        <path d={svgPaths.p126d3ac0} id="Vector_5" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7005" />
                      </g>
                      <g id="Group 2866">
                        <path d={svgPaths.p29901e00} fill="#FEED53" id="Vector_6" />
                        <path d={svgPaths.p124cce00} id="Vector_7" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.401" />
                      </g>
                      <g id="Group 2867">
                        <path d={svgPaths.pc8ce800} fill="#FEED53" id="Vector_8" />
                        <path d={svgPaths.p3de46900} id="Vector_9" stroke="#E8A523" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.401" />
                      </g>
                      <g id="Group_3">
                        <path d={svgPaths.p7ec6800} fill="#FEED53" id="Vector_10" stroke="#E8A523" strokeWidth="2" />
                      </g>
                      <path d={svgPaths.p27d9b080} fill="#E8A523" id="Vector_11" />
                      <path d={svgPaths.p121245f0} fill="#E8A523" id="Vector_12" />
                      <path d={svgPaths.p2ac08900} fill="#E8A523" id="Vector_13" />
                      <g id="Group_4">
                        <path d={svgPaths.p3cc1adc0} fill="#FDC05C" id="Vector_14" />
                        <path d={svgPaths.p18080500} fill="#FDC05C" id="Vector_15" />
                      </g>
                      <path d={svgPaths.p26da3700} fill="#2359A8" id="Vector_16" />
                    </g>
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[80px] top-[49px]">
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Bold',sans-serif] leading-[40px] left-[80px] not-italic text-[36px] text-white top-[49px] whitespace-nowrap">Mooca</p>
    </div>
  );
}

function Head() {
  return (
    <div className="absolute bg-[#00c4b3] h-[138px] left-0 overflow-clip top-0 w-[1340px]" data-name="Head">
      <Group />
    </div>
  );
}

export default function Mooca1() {
  return (
    <div className="bg-[#f6f6f6] relative size-full" data-name="Mooca">
      <Head />
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Medium',sans-serif] leading-[30px] left-[100px] not-italic text-[#1f77df] text-[24px] top-[208px] whitespace-nowrap">Mooca</p>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Book',sans-serif] leading-[20px] left-[100px] not-italic text-[14px] text-black top-[246px] whitespace-nowrap">{`The ooca's mascot is used as an illustration.`}</p>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Book',sans-serif] leading-[20px] left-[329px] not-italic text-[14px] text-black top-[316px] whitespace-nowrap">L</p>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Book',sans-serif] leading-[20px] left-[606px] not-italic text-[14px] text-black top-[316px] whitespace-nowrap">M</p>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Book',sans-serif] leading-[20px] left-[840px] not-italic text-[14px] text-black top-[316px] whitespace-nowrap">S</p>
      <p className="[word-break:break-word] absolute font-['Gotham_Rounded:Book',sans-serif] leading-[20px] left-[1044px] not-italic text-[14px] text-black top-[316px] whitespace-nowrap">XS</p>
    </div>
  );
}