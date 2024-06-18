//import React from "react";
import NavButton from "./NavButton";
import icon from "../img/icon.png";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="flex justify-center mb-[25px]">
        <div className="w-2/4 flex justify-between items-center p-2.5 border-b-2 border-b-amber-400">
          <div>
            <Link to="/" >
              <img src={icon} alt="logo" className="w-[50px]" />
            </Link>
          </div>

          <div className="flex gap-5">
            <NavButton titulo="On Sale" link="/onsale" />
            <NavButton titulo="Carrito" link="/*" />
            <NavButton titulo="Favoritos" link="/*" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
