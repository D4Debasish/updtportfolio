import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { TbCircleLetterD } from "react-icons/tb";

const Header = () => {
  return (
    <div className=" py-5, xl:py-12 text-white  ">
      <div className="conatiner mx-auto flex justify-between xl:justify-around  items-center">
        <Link href="/">
          <h1 className="text-8xl font-semibold">
            {" "}
            <TbCircleLetterD />{" "}
          </h1>
          <h1 className="mx-4">^_____^</h1>
        </Link>
        <div className="hidden xl:flex ">
          <Nav />
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
