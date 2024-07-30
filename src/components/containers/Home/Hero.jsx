import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "assets/images/background/hero.png";
import BarsikImage from "assets/images/barsik.png";
import WaveImage from "assets/images/wave.png";
import ShrimpPlayground from "assets/images/playground/shrimp.png";
import DolphinPlayground from "assets/images/playground/dolphin.png";
import WhalePlayground from "assets/images/playground/whale.png";
import ArrowIcon from "assets/images/icons/arrow.svg";

const Playground = ({ name, amount, image, path }) => {
  return (
    <div className="relative w-full max-w-[410px] p-2.5 pb-[110px] lg:p-0">
      <div className="block lg:hidden absolute top-0 left-0 w-full h-full rounded-[15px] bg-white opacity-10" />
      <div className="mb-[30px] lg:relative group">
        <img
          src={image}
          className="rounded-[10px] border-2 border-dark-900 drop-shadow-10"
        />
        <div className="hidden lg:block absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition rounded-[10px]" />
        <Link
          to={`/play${path}`}
          className="absolute flex items-center justify-between lg:justify-center gap-7 rounded-[10px] drop-shadow-4 bg-gradient-to-br from-main-200 hover:from-main-250 active:from-main-800 to-main-400 hover:to-main-300 active:to-main-900 px-10 py-2.5 border-2 border-dark-900 transition-all top-auto lg:top-1/2 bottom-2.5 lg:bottom-auto left-2.5 lg:left-1/2 right-2.5 lg:right-auto lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <span className="text-[40px] leading-[46px] text-dark-900">Play</span>
          <img src={ArrowIcon} className="arrow" />
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-white text-[45px] lg:text-[50px]">
          10x <span className="text-main-400">{name}</span> BARSIK
        </p>
        <div className="font-montserrat text-dark-500 text-xl">
          ( <span className="font-bold text-[23px]">{amount}</span> )
          <span className="ml-2">BARSIK to enter</span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const playgrounds = [
    {
      name: "Shrimp",
      amount: "1 000",
      image: ShrimpPlayground,
      path: "/shrimp",
    },
    {
      name: "Dolphin",
      amount: "10 000",
      image: DolphinPlayground,
      path: "/dolphin",
    },
    {
      name: "Whale",
      amount: "100 000",
      image: WhalePlayground,
      path: "/whale",
    },
  ];

  return (
    <div className="relative px-5 py-[90px] lg:pt-[100px] pb-[88px]">
      <img
        src={BackgroundImage}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-[30px] lg:mb-0">
          <img src={BarsikImage} className="w-[189px] lg:w-max" />
          <div className="-mt-20 lg:mt-0 mb-0 lg:mb-24">
            <h1 className="flex flex-col lg:flex-row items-center gap-[30px] leading-[0.5] drop-shadow-10 mb-[30px]">
              <span className="text-[220px] lg:text-[330px] bg-gradient-to-br from-main-200 to-main-400 bg-clip-text text-transparent mb-2.5 lg:mb-0">
                10X
              </span>
              <span className="text-main-400 text-[136px] lg:text-[216px]">
                Barsik
              </span>
            </h1>
            <div className="flex flex-col lg:flex-row font-montserrat text-white text-2xl lg:text-[44px] text-center">
              <span className="mr-0 lg:mr-3">The easiest way to</span>
              <p>
                <span className="font-bold text-main-400">10X</span> your Barsik
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-montserrat font-black text-white text-[30px] lg:text-[40px] uppercase mb-[5px] lg:mb-[30px] drop-shadow-4 text-center">
            Choose your <span className="text-main-400">Barsik</span> Table
          </h3>
          <img
            src={WaveImage}
            className="w-[320px] lg:w-max max-w-max mb-10 lg:mb-[60px]"
            alt="wave"
          />
          <ul className="flex flex-col lg:flex-row items-end gap-[30px]">
            {playgrounds.map((item, i) => (
              <li key={i} className={i % 2 === 1 ? `lg:mb-[236px]` : `lg:mb-0`}>
                <Playground {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
