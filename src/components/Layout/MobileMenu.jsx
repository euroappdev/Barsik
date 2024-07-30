import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckStatus from "./CheckStatus";
import Logo from "assets/images/logo.png";
import CloseIcon from "assets/images/icons/close.svg";

const NavItem = (props) => {
  const navigate = useNavigate();
  const [collpased, setCollapsed] = useState(true);

  const handleClick = (item) => {
    if (item.children) {
      setCollapsed(!collpased);
      return;
    }
    navigate(item.path);
    props.onClose();
    setCollapsed(true);
  };

  return (
    <li>
      <span
        onClick={() => handleClick(props)}
        className="flex items-center h-12 text-2xl px-5 hover:bg-[#FFFFFF1A] rounded-[10px]"
      >
        {props.label}
      </span>
      {!collpased && props.children && (
        <ul className="grid gap-5 mt-5">
          {props.children.map((item, i) => (
            <li key={i}>
              <span
                onClick={() => handleClick(item)}
                className="flex items-center h-12 text-2xl pl-[50px] pr-5 hover:bg-[#FFFFFF1A] rounded-[10px]"
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const links = [
  {
    label: "Play",
    children: [
      { label: "Shrimp table", path: "/play/shrimp" },
      { label: "Dolphin table", path: "/play/dolphin" },
      { label: "Whale table", path: "/play/whale" },
    ],
  },
  { label: "How does it works?", path: "/#howtoworks" },
  { label: "Audit", path: "/#audit" },
  { label: "Burning room", path: "/burning" },
  { label: "Buy Barsik", path: "/" },
];

const MobileMenu = ({ open, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = open ? `hidden` : `auto`;
  }, [open]);

  return (
    <div
      className={`${
        open ? `` : `pointer-events-none`
      } block lg:hidden font-montserrat fixed top-0 left-0 right-0 bottom-0 z-50 text-white`}
    >
      <div
        className={`bg-black ${
          open ? `opacity-60` : `opacity-0`
        } w-full h-full transition`}
        onClick={onClose}
      />
      <div
        className={`absolute left-0 right-0 grid gap-5 rounded-t-[20px] bg-dark-800 border-2 border-dark-900 px-4 pt-5 pb-10 duration-500 ${
          open ? `bottom-0` : `-bottom-[1000px]`
        } transition-all`}
      >
        <div className="relative flex gap-7">
          <img
            src={Logo}
            className="w-[60px] h-[60px] shadow-4 rounded-full border-2 border-dark-900"
            alt=""
          />
          <div className="flex items-center gap-2.5 font-main leading-[0.5]">
            <span className="text-[58px] bg-gradient-to-br from-main-200 to-main-400 bg-clip-text text-transparent">
              10X
            </span>
            <span className="text-[50px] text-main-400">Barsik</span>
          </div>
          <button onClick={onClose}>
            <img src={CloseIcon} alt="Close" />
          </button>
        </div>
        <div>
          <CheckStatus />
        </div>
        <ul className="grid gap-5">
          {links.map((link, i) => (
            <NavItem {...link} key={i} onClose={onClose} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
