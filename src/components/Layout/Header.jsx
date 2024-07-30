import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "assets/images/logo.png";
import MenuIcon from "assets/images/icons/menu.svg";
import CheckStatus from "./CheckStatus";
import MobileMenu from "./MobileMenu";

const links = [
  { label: "Play", path: "/#play" },
  { label: "How does it works?", path: "/#howtoworks" },
  { label: "Audit", path: "/#audit" },
  { label: "Burning room", path: "/burning" },
  { label: "Buy Barsik", path: "/" },
];

const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="absolute lg:relative top-2.5 lg:top-0 left-5 lg:left-auto right-5 lg:right-auto h-[60px] lg:h-[100px] flex items-center justify-between font-montserrat lg:px-[100px] z-10">
        <Link to="/" className="flex-shrink-0">
          <img
            src={Logo}
            className="w-[60px] lg:w-[70px] border-2 border-dark-900 rounded-full shadow-4"
            alt="Barsik"
          />
        </Link>
        <div className="flex items-center gap-10 2xl:gap-20">
          <div className="hidden lg:block w-[300px]">
            <CheckStatus />
          </div>
          <ul className="hidden lg:flex gap-10 2xl:gap-20 items-center text-white text-lg">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="text-white hover:text-main-400 relative group transition whitespace-nowrap"
                >
                  <span className="inline-block pb-0 group-hover:pb-2 transition">
                    {link.label}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition w-full h-1 -rotate-2 bg-main-500 rounded-full absolute left-0 -bottom-2" />
                </Link>
              </li>
            ))}
          </ul>
          <button className="block lg:hidden" onClick={() => setOpened(true)}>
            <img src={MenuIcon} alt="menu" />
          </button>
        </div>
      </div>
      <MobileMenu open={opened} onClose={() => setOpened(false)} />
    </>
  );
};

export default Header;
