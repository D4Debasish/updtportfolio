"use client";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNav = () => {
  const pathname = usePathname();
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

  return (
    <Sheet>
      <SheetTrigger>
        <GiHamburgerMenu />
      </SheetTrigger>
      <SheetContent className="bg-black ">
        <SheetHeader className="flex flex-col gap-7">
          {links.map((links, key) => (
            <SheetTitle
              className={`bg-gray-800 text-accent  mt-16 rounded-lg ${
                links.path === pathname && " bg-gray-400"
              }  hover:bg-gray-400 transition-all`}
              key={key}
            >
              <Link
                href={links.path}
                key={key}
                className={`${
                  links.path === pathname && "text-yellow-400  bg-gray-400 "
                } hover:bg-gray-400  transition-all font-extrabold`}
              >
                <h1 className="">{links.name}</h1>
              </Link>
            </SheetTitle>
          ))}
          <br />
          <br />
          <h6 className=" mt-96">
            @All rights reserved <br /> Made by Debasish Das Biswas
          </h6>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
