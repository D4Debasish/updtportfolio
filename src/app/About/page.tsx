"use client";
import { title } from "process";
import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiPostgresql,
  SiTailwindcss,
  SiMongodb,
  SiRedis,
} from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "AS this portfolio is about my technical skills, this section is about me and the things I like to do",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Debasish Das Biswas",
    },
    {
      fieldName: "Age",
      fieldValue: "23",
    },
    {
      fieldName: "Phone",
      fieldValue: "6000478573",
    },
    {
      fieldName: "E-mail",
      fieldValue: "ddebu168@gmail.com",
    },
    {
      fieldName: "Sports",
      fieldValue: "Table_Tenis, Football",
    },
    {
      fieldName: "Video_Game",
      fieldValue: "Valorant, FIFA",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Bengali",
    },
  ],
};

// experience

const experience = {
  title: "My Experience",
  description:
    "Here are the companies I have worked for as an Intern to learn and gain knowledge about the industry standard work. ",
  items: [
    {
      comapny: "TrueCircle.in",
      position: "Front-end developer intern",
      times: "06/2023-09/2023",
    },
    {
      comapny: "Doordarshan,Guwahati",
      position: "System Engineer intern",
      times: "08/2022-09/2022",
    },
  ],
};

// education

const education = {
  title: "My Education qualification",
  description:
    "Here is my education qualification, and it's true to the best of my knowledge and based on the certifications.",
  items: [
    {
      institute: "Jorhat Institute of Science & Technology",
      course: "Bachelors of Technology(B.Tech)",
      subject: "Electronics & Communication Engineering",
      grade: "8.04 CGPA/10",
      times: "2019-2023",
    },
    {
      institute: "Concept jr College",
      course: "H.S (10+2)",
      subject: "Science",
      grade: "78.2%",
      times: "2016-2018",
    },
    {
      institute: "Saint Roberts High School",
      course: "H.S.L.C (Boards)",
      subject: "NCERT",
      times: "2016",
      grade: "83%",
    },
  ],
};
// skills

const skills = {
  title: "My Skills",
  description:
    "These are the technologies I have learned during the course of time and on the way to learn more",
  skillList: [
    {
      icon: <FaReact />,
      name: "ReactJs",
    },
    {
      icon: <RiNextjsFill />,
      name: "NextJs",
    },

    {
      icon: <IoLogoJavascript />,
      name: "JS",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCss",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiRedis />,
      name: "Redis",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
    >
      <div className="conatiner mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row  gap-[60px]"
        >
          <TabsList className=" flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* contents ....................................*/}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className=" text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="flex flex-col gap-4 xl:gap-12">
                    {experience.items.map((item, key) => {
                      return (
                        <li
                          key={key}
                          className="  bg-gray-800 h-[180px] xl:h-[180px] py-6 rounded-[25px]  flex  flex-col justify-start px-10 items-center xl:items-start"
                        >
                          <span className="text-accent text-sm xl:text-sm mb-2">
                            {item.times}
                          </span>
                          <h3 className="text-xl xl:sm font-bold max-w-[350px] min-h-[60px] text-center xl:text-left ">
                            {item.position}
                          </h3>
                          <div className=" flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-white"></span>
                            <p className="text-white/60">{item.comapny}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education...................................................*/}
            <TabsContent value="education" className="w-full xl:mx-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className=" text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="flex flex-col gap-4 xl:gap-8">
                    {education.items.map((item, key) => (
                      <li
                        key={key}
                        className="bg-gray-800 py-4 xl:py-6 rounded-[25px] flex flex-col justify-start px-6 xl:px-10 items-center xl:items-start"
                        style={{ minHeight: "180px", maxHeight: "230px" }} // Adjust min-height and max-height for smaller devices
                      >
                        <span className="text-accent text-sm xl:text-sm mb-2">
                          {item.times}
                        </span>
                        <h3 className="text-xl xl:sm font-bold max-w-[350px] min-h-[60px] text-center xl:text-left">
                          {item.institute}
                        </h3>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-white"></span>
                            <p className="text-white/60">{item.course}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-white"></span>
                            <p className="text-white/60">
                              {item.subject} | {item.grade}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*Skills.........................................................*/}
            <TabsContent value="skills" className="w-full h-full xl:px-[130px]">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className=" text-white/60">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-3 gap-[30px] sm:grid-cols-3 md:grid-cols-4 xl:gap-[60px] mt-[50px] xl:mt-0 ">
                  {skills.skillList.map((skill, key) => {
                    return (
                      <li key={key}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/*ABout............................................................*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left  xl:px-[110px]"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 px-3 pt-6 gap-y-6 xl:gap-y-10 xl:grid-cols-2 max-w-[720px] mx-auto xl:mx-0  mt-6 xl:mt-0 bg-gray-800 rounded-xl">
                  {about.info.map((item, key) => {
                    return (
                      <li
                        key={key}
                        className=" flex items-center justify-center xl:justify-start gap-1"
                      >
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-[13px]">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
