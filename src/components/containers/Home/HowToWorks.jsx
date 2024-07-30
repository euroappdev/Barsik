import React from "react";
import BackgroundImage from "assets/images/background/how-to-works.png";
import DesktopStep1Image from "assets/images/howtoworks/desktop-step-1.png";
import DesktopStep2Image from "assets/images/howtoworks/desktop-step-2.png";
import MobileStep1Image from "assets/images/howtoworks/mobile-step-1.png";
import MobileStep2Image from "assets/images/howtoworks/mobile-step-2.png";
import ArrowImage from "assets/images/howtoworks/arrow.png";

const HowToWorks = () => {
  return (
    <div className="relative flex py-20 lg:py-[100px] px-5">
      <img
        src={BackgroundImage}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="w-full max-w-[1290px] mx-auto flex flex-col items-center relative z-10">
        <h3 className="font-black font-montserrat text-[40px] lg:text-[56px] bg-gradient-to-br from-main-200 to-main-400 drop-shadow-4 bg-clip-text text-transparent text-center uppercase mb-10 lg:mb-20">
          How does it work?
        </h3>
        <div className="grid gap-10 lg:gap-0">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-24">
            <img src={DesktopStep1Image} className="hidden lg:block" />
            <img src={MobileStep1Image} className="block lg:hidden" />
            <div className="w-full max-w-[440px] flex flex-col items-center lg:items-start lg:mb-48 relative">
              <h1 className="font-montserrat font-black text-[120px] bg-gradient-to-br from-main-200 to-main-400 drop-shadow-10 bg-clip-text text-transparent mb-2.5">
                1
              </h1>
              <p className="font-montserrat text-2xl lg:text-[26px] text-white text-center lg:text-left">
                In every table,{" "}
                <span className="font-extrabold text-main-400">11 people</span>{" "}
                send the same amount of BARSIK to the{" "}
                <span className="font-extrabold text-main-400">
                  “10x BARSIK”
                </span>{" "}
                app.
              </p>
              <img
                src={ArrowImage}
                className="hidden lg:block absolute -left-5 -bottom-2 translate-y-full -translate-x-full"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-24">
            <div className="flex flex-col items-center lg:items-start w-full max-w-[456px]">
              <h1 className="font-montserrat font-black text-[120px] bg-gradient-to-br from-main-200 to-main-400 drop-shadow-10 bg-clip-text text-transparent mb-2.5">
                2
              </h1>
              <p className="font-montserrat text-2xl lg:text-[26px] text-white text-center lg:text-left">
                The app then choses one winner at random. <br />
                <br />
                <span className="font-extrabold text-main-400">10/11</span> of
                the pot goes to the winner.{" "}
                <span className="font-extrabold text-main-400">10x</span> their
                initial investments. <br />
                <br />
                <span className="font-extrabold text-main-400">1/11</span> is burnt
              </p>
            </div>
            <img src={DesktopStep2Image} className="hidden lg:block" />
            <img src={MobileStep2Image} className="block lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToWorks;
