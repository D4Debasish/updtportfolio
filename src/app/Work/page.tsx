"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import WorkSlider from "@/components/WorkSlider";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "RecipeAPP",
    description:
      "A responsive food recipe web application with diverse recipes of foods with favorite section, allowing user to save and access their preferred recipes.",
    stack: [
      { name: "React" },
      { name: "Material_UI" },
      { name: "Axios" },
      { name: "Rapid_API" },
    ],
    image: "/assets/work/recipe.png",
    live: "https://debs-recipe-react-js-material-ui-rapid-ap-i.vercel.app/",
    github:
      "https://github.com/D4Debasish/Debs_Recipe-ReactJs-Material-Ui-Rapid-ApI-",
  },
  {
    num: "02",
    category: "Frontend",
    title: "itract_app",
    description:
      "A static frontend web application created to implement my understanding for styling of components",
    stack: [{ name: "NEXT" }, { name: "Tailwind" }, { name: "Shadcn/ui" }],
    image: "/assets/work/itrr.png",
    live: "https://itractio.vercel.app/",
    github: "https://github.com/D4Debasish/itractio",
  },
  {
    num: "03",
    category: "Frontend",
    title: "SkillSim",
    description:
      "A frontend web application made after completing the design in Figma",
    stack: [
      { name: "React" },
      { name: "Material_UI" },
      { name: "Tailwind_Css" },
    ],
    image: "/assets/work/sklsim.png",
    live: "https://skillsim-new-eo75.vercel.app/",
    github: "https://github.com/D4Debasish/skillsimNew",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "Deploy_IT",
    description:
      "A full stack deploying web application where the user can paste their GitHub URL and the project will be deployed",
    stack: [
      { name: "Next" },
      { name: "Node" },
      { name: "Express" },
      { name: "Docker" },
      { name: "AWS" },
    ],
    image: "/assets/work/deploy.png",
    live: "",
    github: "https://github.com/D4Debasish/Deployit",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Disease_Tracker",
    description:
      "A disease tracking responsive web application where the user gets detailed information about the disease worldwide",
    stack: [
      { name: "React" },
      { name: "React_Leaflet" },
      { name: "MUI" },
      { name: "diesae_API" },
    ],
    image: "/assets/work/c19.png",
    live: "https://ctrack-nine.vercel.app/",
    github: "https://github.com/D4Debasish/Ctrack",
  },
  {
    num: "06",
    category: "Fullstack",
    title: "Day_Task",
    description:
      "A Task tracker application to schedule and maintain daily routine",
    stack: [
      { name: "React" },
      { name: "Node" },
      { name: "Express" },
      { name: "PostgreSQL" },
    ],
    image: "/assets/work/dtask.png",
    live: "",
    github:
      "https://github.com/D4Debasish/DayTask--React-Node-PostgreSQL-Express-Shadcn-ui",
  },
  {
    num: "07",
    category: "Frontend",
    title: "Movie_APP",
    description:
      "A web application to search for all the latest movies worldwide.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/assets/work/movie.png",
    live: "https://movie-app-vanilla-js-one.vercel.app/",
    github: "https://github.com/D4Debasish/Movie-App-VanillaJS-",
  },
  {
    num: "08",
    category: "Backend",
    title: "VideoStream",
    description:
      "A videostreaming Backend where the user can signup, login/logout, change password, add videos to watch later with maintaining security and created a Docker image for it  ",
    stack: [
      { name: "Node" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "JWT" },
      { name: "Docker" },
    ],
    image: "/assets/work/bkcnd.png",
    live: "",
    github: "https://github.com/D4Debasish/backendProject",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: SwiperInstance) => {
    const currentIndex: number = swiper.activeIndex;
    const currentProject = projects[currentIndex];
    setProject(currentProject);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="conatiner  xl:mx-40 mx-6">
        <div className="flex flex-col xl:flex-row xl:gap-[70px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[25px]">
              <div className="xl:text-8xl text-4xl leading-none font-extrabold  text-outline ">
                {project.num}
              </div>
              <h2 className="xl:text-[42px] text-[30px] font-bold leading-none text-white/80 group-hover:text-accent transition-all duration-500">
                {project.title}
              </h2>{" "}
              <p className="text-white/60">{project.category}</p>
              <p className="text-white/60  ">{project.description}</p>
              {/*stack.......................*/}
              <ul className="flex gap-4 w-[30%] mt-6">
                {project.stack.map((item, key) => {
                  return (
                    <li key={key} className="text-sm text-accent xl:text-xl">
                      {item.name}
                      {key !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/*Linksss.......................*/}
              <div className="links mt-5 flex flex-row gap-9">
                {/*Deployed.......................*/}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={500}>
                    <Tooltip>
                      <TooltipTrigger className="xl:w-[70px] xl:h-[70px] w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Live Link</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/*Github.......................*/}

                <Link href={project.github}>
                  <TooltipProvider delayDuration={500}>
                    <Tooltip>
                      <TooltipTrigger className="xl:w-[70px] xl:h-[70px] w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Github</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[490px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className=" h-[400px] relative group flex justify-center items-center bg-transparent ">
                      {/*  overlay...*/}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/*  image...*/}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className=" xl:object-contain object-cover "
                          fill
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* buttons.............. */}
              <WorkSlider />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
