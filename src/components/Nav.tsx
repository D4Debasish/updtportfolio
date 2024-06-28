"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/About",
    },
    {
      name: "Work",
      path: "/Work",
    },
    {
      name: "Contact",
      path: "/Contact",
    },
  ];
  const pathname = usePathname();
  return (
    <div className="container flex items-center p-3 gap-5">
      {links.map((link, key) => (
        <Link
          href={link.path}
          key={key}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent "
          } hover:text-accent transition-all `}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
