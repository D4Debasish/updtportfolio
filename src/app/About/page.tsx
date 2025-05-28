'use client'
import { title } from 'process'
import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaPython, FaAws, FaJenkins } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiNextjsFill } from 'react-icons/ri'
import { SiPostgresql, SiTailwindcss, SiMongodb, SiRedis, SiDjango } from 'react-icons/si'

const about = {
    title: 'About Me',
    description: 'AS this portfolio is about my technical skills, this section is about me and the things I like to do',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Debasish Das Biswas',
        },
        {
            fieldName: 'Age',
            fieldValue: '23',
        },
        {
            fieldName: 'Phone',
            fieldValue: '6000478573',
        },
        {
            fieldName: 'E-mail',
            fieldValue: 'ddebu168@gmail.com',
        },
        {
            fieldName: 'Sports',
            fieldValue: 'Table_Tenis, Chess',
        },
        {
            fieldName: 'Video_Game',
            fieldValue: 'Valorant, FIFA',
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'Indian',
        },
        {
            fieldName: 'Lang',
            fieldValue: 'English, Hindi, Bengali',
        },
    ],
}

// experience

const experience = {
    title: 'My Experience',
    description: 'Here are the companies I have worked for to learn and gain knowledge about the industry standard work. ',
    items: [
        {
            comapny: 'Slikk,Bengaluru',
            position: 'Software Developer',
            times: '05/2024 - Present',
            role: `
            - Developed a Progressive Web App (PWA) dashboard using TypeScript, React, Tailwind CSS, Redux Toolkit, and Workbox to manage internal operations such as order flow, catalog management, and configuration settings.
            - Integrated AWS services extensively to streamline infrastructure and enhance scalability, ensuring efficient cloud resource management.
            - Developed and deployed AWS Chalice-based Lambda functions to act as secure API proxies, streamlining integration with third-party communication services and improving workflow efficiency.
            - Created APIs using Flask to support testing and validation of internal system data.
            - Utilized BeautifulSoup for web scraping, extracting necessary data from websites for internal processing.
            - Built a Picker mobile application using React Native, Expo, and Redux Toolkit to enable field agents to efficiently select and deploy products, significantly enhancing operational effectiveness.
  `,
        },
        {
            comapny: 'TrueCircle.in,Guwahati',
            position: 'Front-end developer intern',
            times: '06/2023-09/2023',
            role: 'I worked on frontend projects mostly focused on developing features on their portal with utilizing and understanding API networks with managing state through Redux Toolkit',
        },
        {
            comapny: 'Doordarshan,Guwahati,',
            position: 'System Engineer intern',
            times: '08/2022-09/2022',
            role: 'Worked as System Engineer Intern mainly undernstanding satellite and the communication between them. ',
        },
    ],
}

// education

const education = {
    title: 'My Education qualification',
    description: "Here is my education qualification, and it's true to the best of my knowledge and based on the certifications.",
    items: [
        {
            institute: 'Jorhat Institute of Science & Technology',
            course: 'Bachelors of Technology(B.Tech)',
            subject: 'Electronics & Communication Engineering',
            grade: '8.04 CGPA/10',
            times: '2019-2023',
        },
        {
            institute: 'Concept jr College',
            course: 'H.S (10+2)',
            subject: 'Science',
            grade: '78.2%',
            times: '2016-2018',
        },
        {
            institute: 'Saint Roberts High School',
            course: 'H.S.L.C (Boards)',
            subject: 'NCERT',
            times: '2016',
            grade: '83%',
        },
    ],
}
// skills

const skills = {
    title: 'My Skills',
    description: 'These are the technologies I have learned during the course of time and on the way to learn more',
    skillList: [
        {
            icon: <FaReact />,
            name: 'ReactJs',
        },
        {
            icon: <RiNextjsFill />,
            name: 'NextJs',
        },

        {
            icon: <IoLogoJavascript />,
            name: 'JS',
        },
        {
            icon: <SiTailwindcss />,
            name: 'TailwindCss',
        },
        {
            icon: <FaHtml5 />,
            name: 'HTML',
        },
        {
            icon: <FaCss3 />,
            name: 'CSS',
        },
        {
            icon: <FaNodeJs />,
            name: 'NodeJs',
        },
        {
            icon: <SiMongodb />,
            name: 'MongoDB',
        },
        {
            icon: <SiPostgresql />,
            name: 'PostgreSQL',
        },
        {
            icon: <SiRedis />,
            name: 'Redis',
        },
        {
            icon: <FaPython />,
            name: 'Python',
        },
        {
            icon: <SiDjango />,
            name: 'Django',
        },
        {
            icon: <FaJenkins />,
            name: 'Django',
        },
        {
            icon: <FaAws />,
            name: 'AWS',
        },
    ],
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
        >
            <div className="conatiner mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row  gap-[60px]">
                    <TabsList className=" flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    {/* contents ....................................*/}
                    <div className="min-h-[70vh] w-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-8 text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px] xl:w-[800px] overflow-auto scrollbar-none">
                                    <ul className="flex flex-col gap-6 xl:gap-10">
                                        {experience.items.map((item, key) => (
                                            <li
                                                key={key}
                                                className="bg-gray-800 rounded-2xl px-6 xl:px-10 py-6 flex flex-col justify-start items-center xl:items-start min-h-[250px]"
                                            >
                                                <span className="text-accent text-sm mb-2">{item.times}</span>
                                                <h3 className="text-lg xl:text-xl font-bold text-center xl:text-left mt-2 max-w-[390px]">
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3 overflow-auto scrollbar-none">
                                                    <span className="hidden xl:block w-1.5 h-1.5 rounded-full bg-white mt-5"></span>
                                                    <p className="text-white/80 text-sm xl:text-base">
                                                        {item.comapny}
                                                        <span className="block text-white/60 text-xs xl:text-sm mt-1">{item.role}</span>
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value="education" className="w-full xl:mx-8">
                            <div className="flex flex-col gap-8 text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px] xl:w-[750px] overflow-auto scrollbar-none">
                                    <ul className="flex flex-col gap-6 xl:gap-8">
                                        {education.items.map((item, key) => (
                                            <li
                                                key={key}
                                                className="bg-gray-800 rounded-2xl px-6 xl:px-10 py-6 flex flex-col justify-start items-center xl:items-start min-h-[200px]"
                                            >
                                                <span className="text-accent text-sm mb-2">{item.times}</span>
                                                <h3 className="text-lg xl:text-xl font-bold text-center xl:text-left max-w-[590px]">
                                                    {item.institute}
                                                </h3>
                                                <div className="flex flex-col gap-2 mt-3">
                                                    <div className="flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                                                        <p className="text-white/60 text-sm xl:text-base">{item.course}</p>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                                                        <p className="text-white/60 text-sm xl:text-base">
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

                        {/* Skills */}
                        <TabsContent value="skills" className="w-full h-full xl:px-[130px]">
                            <div className="flex flex-col gap-8">
                                <div className="text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="text-white/60">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-6 xl:gap-10 mt-10">
                                    {skills.skillList.map((skill, key) => (
                                        <li key={key}>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <div className="text-6xl transition-all duration-300 hover:text-accent">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left xl:px-[110px]">
                            <div className="flex flex-col gap-8">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 px-4 pt-6 bg-gray-800 rounded-2xl max-w-[720px] mx-auto xl:mx-0">
                                    {about.info.map((item, key) => (
                                        <li key={key} className="flex items-center justify-center xl:justify-start gap-2">
                                            <span className="text-white/60 font-medium">{item.fieldName}:</span>
                                            <span className="text-sm text-white/90">{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default About
