import React from "react";
import {
  FaGithub,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import Link from "next/link";
import path from "path";

const Socials = () => {
  const icons = [
    {
      name: <FaGithub />,
      path: "https://github.com/D4Debasish",
    },
    {
      name: <FaLinkedin />,
      path: "https://www.linkedin.com/in/debasish-das-biswas-240a831a0/",
    },
    {
      name: <FaTwitterSquare />,
      path: "https://x.com/DEBASISHDa64669",
    },
    {
      name: <FaInstagramSquare />,
      path: "https://www.instagram.com/deb___77/?hl=en",
    },
  ];
  return (
    <div className="flex gap-2">
      {icons.map((icons, keys) => (
        <Link
          href={icons.path}
          key={keys}
          className="border border-accent rounded-full flex justify-center items-center text-accent
        text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
        >
          {icons.name}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
