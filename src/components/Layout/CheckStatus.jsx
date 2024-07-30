import React, { useState } from "react";
import SearchIcon from "assets/images/icons/search.svg";

const CheckStatus = () => {
  const [address, setAddress] = useState("");
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        className="font-montserrat w-full relative border border-dark-200 focus-within:border-white rounded-[10px] shadow-4 overflow-hidden group"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-main-200 to-main-400 opacity-10 group-hover:opacity-20 group-focus-within:!opacity-40 transition" />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full h-12 bg-transparent relative pl-5 pr-16 text-base text-white placeholder:text-dark-200 group-hover:placeholder:text-white group-focus-within:placeholder:text-white outline-none"
          placeholder={
            active || hover ? `Paste your wallet address` : `Check your status`
          }
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        />
        <img
          src={SearchIcon}
          className="absolute top-1/2 right-5 -translate-y-1/2 opacity-40 group-hover:opacity-60 group-focus-within:!opacity-100"
          alt="Search"
        />
      </div>
    </>
  );
};

export default CheckStatus;
