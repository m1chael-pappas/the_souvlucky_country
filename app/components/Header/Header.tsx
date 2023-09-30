import React from "react";
import styles from "./Header.module.css";
import LogoSVG from "../ui/LogoSVG";

const Header: React.FC = () => {
  return (
    <header
      className={`flex items-center justify-between px-6 py-4 ${styles.header}`}
      style={{ background: "linear-gradient(to right, white, blue 90%)" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 flex items-center justify-start">
          <div className="placeholder-icon">
            <LogoSVG />
          </div>
        </div>
        <nav className="flex-1 flex items-center justify-end space-x-4 pr-6 text-sky-300">
          <a href="#">Home</a>
          <a href="#">Story</a>
          <a href="#">Menu</a>
          <a href="#">Reservation</a>
          <a href="#">Location&Hours</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
