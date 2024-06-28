"use client";

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { useTypewriter } from "react-simple-typewriter";
import Stats from "@/components/Stats";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Debasish", "A Software Dev"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 30,
  });
  return (
    <section className="h-full mx-auto ">
      <div className="conatiner mx-auto h-full">
        <div className="flex flex-col gap-14 xl:gap-1 xl:flex-row items-center justify-around  ">
          <div className="text-lg max-w-lg flex flex-col text-center xl:text-left order-2 xl:order-none ">
            <h1 className="text-3xl">Hey, Im</h1>
            <h1 className="text-[40px]  text-accent">
              <span className=" inline-block w-auto whitespace-nowrap overflow-hidden ">
                {text}{" "}
              </span>
            </h1>
            <p className="text-[14px] items-center mt-4 max-w-[500px]">
              Results-driven Software Developer with proficiency in React, Next,
              Node, Express. Love to build stuff and learn about technologies
              through documentations or by any means.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 mt-5 ">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a
                  href="/assets/resume/rsme.pdf"
                  download="Debasish"
                  className="no-underline font-bold text-xl"
                >
                  Resume
                </a>
                <a
                  href="/assets/resume/rsme.pdf"
                  download="Debasish"
                  className="no-underline font-bold text-xl"
                >
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
            <div className="mt-16">
              <Stats />
            </div>
          </div>
          {/*   images .................................*/}
          <div className="order-1 xl:order-none mb-60 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/*status...*/}
    </section>
  );
}
