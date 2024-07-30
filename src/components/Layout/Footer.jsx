import React from "react";
import { Link } from "react-router-dom";

import BackgroundImage from "assets/images/background/footer.png";
import TelegramActiveIcon from "assets/images/contacts/telegram-active.png";
import TelegramHoverIcon from "assets/images/contacts/telegram-hover.png";
import TwitterActiveIcon from "assets/images/contacts/twitter-active.png";
import TwitterHoverIcon from "assets/images/contacts/twitter-hover.png";
import BarsikActiveIcon from "assets/images/contacts/barsik-active.png";
import BarsikHoverIcon from "assets/images/contacts/barsik-hover.png";

const Icon = ({ active, hover, path = "" }) => {
  return (
    <Link to={path} target="_blank" className="flex relative cursor-pointer">
      <img
        src={active}
        className="absolute top-0 left-0 hover:opacity-0 transition duration-500"
        alt="active icon"
      />
      <img src={hover} alt="active icon" />
    </Link>
  );
};

const Footer = () => {
  return (
    <div className="relative">
      <img
        src={BackgroundImage}
        className="footer background image absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative flex flex-col items-center px-5 py-20 lg:pt-[100px] lg:pb-[106px]">
        <h4 className="font-montserrat font-black text-[40px] text-white uppercase mb-[50px] lg:mb-[90px]">
          Follow US
        </h4>
        <ul className="flex flex-wrap justify-center items-center gap-[50px] lg:gap-[140px]">
          <li className="order-2 lg:order-1">
            <Icon
              active={TelegramActiveIcon}
              hover={TelegramHoverIcon}
              path="https://twitter.com"
            />
          </li>
          <li className="order-3 lg:order-2">
            <Icon
              active={TwitterActiveIcon}
              hover={TwitterHoverIcon}
              path="https://twitter.com"
            />
          </li>
          <li className="w-full lg:w-auto flex justify-center order-1 lg:order-3">
            <Icon
              active={BarsikActiveIcon}
              hover={BarsikHoverIcon}
              path="https://twitter.com"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
