import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { TbBrandNextjs } from "react-icons/tb";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiFlutter,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
          <TbBrandNextjs key={5} />,
          <FaNodeJs key={6} />           
        ],
      },
      {
        title: 'Mobile Development',
        icons: [<SiFlutter key={1} />],
      },
    ],
  },
  {
    title: 'sertificate',
    info: [
      {
        title: 'Full-Stack JavaScript Next JS Developer: Build Job Portal Website - BWA - 2024'
      },
      {
        title: 'Quality Assurance API Automation - Myskill - 2023'
      },
      {
        title: 'Quality Assurance Creating Test Scenario & Test Case - Myskill - 2023'
      },
      {
        title: 'E2E Testing with Cypress - BWA - 2023'
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Sofware Engineer (Flutter)',
        stage: 'Apr 2023 - Okt 2023',
      },
      {
        title: 'Intern Flutter Front-End',
        stage: 'Mar 2021 - Jun 2021',
      },
      {
        title: 'IT Support Helpdesk',
        stage: 'Jan 2017 - Mar 2017',
      },
    ],
  },
  {
    title: 'Studies',
    info: [
      {
        title: 'Computer Science Bachelor - University Muhammadiyah of Surakarta 2022'
      },
      {
        title: 'Computer and Network Engineering - SMK Telkom Banjarbaru 2018'
      },
    ],
  },
];

// Components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
// Framer Motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
//
import CountUp from 'react-countup'

const About = () => {
  const [index, setIndex] = useState(0)
  console.log(index)
  return <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles />
    {/* Avatar */}
    <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden'
      className="hidden xl:flex absolute bottom-0 -left-[370px]">
      <Avatar />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      {/* Text */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 className="h2" variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden'>
          My <span className="text-accent">stories</span> about
          Experience in Technology.
        </motion.h2>
        <motion.p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
        variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden'>
          1 Years ago, I finish my studies in University Muhammadiyah of Surakarta, major of 
          Informatics Engineering. After that i working as a Flutter Developer 6 months contract until finished project.
          Now I`m development personal project to implementation the skills i have. 
        </motion.p>
        {/* Counters */}
        <motion.div variants={fadeIn('right', 0.6)} initial='hidden' animate='show' exit='hidden'>
          <div className="flex flex-1 xl:gap-x-6 mb-5">
            {/* Experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
            after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={1} duration={15}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] xl:max-w-[100px] mb-2">Years of Experience</div>
            </div>
            {/* Projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
            after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={12} duration={15}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] xl:max-w-[100px] mb-2">Finished Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Info */}
      <motion.div className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
      variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden'>
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
            return <div
              key={itemIndex}
              className={`${index === itemIndex && `text-accent after:w-[100%] 
            after:bg-accent after:transition-all after:duration-300`} cursor-pointer capitalize xl:text-lg
              relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}>
              {item.title}
            </div>
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
          items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
            return <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max
              gap-x-2 items-center text-white/60">
              {/* Title */}
              <div className="font-light mb-2 xl:mb-0">
                {item.title}
              </div>
              <div className="hidden md:felx">-</div>
              <div>{item.stage}</div>
              <div className="flex gap-x-4">
                {/* Icons */}
                {item.icons?.map((icon, itemIndex) => {
                  return <div key={itemIndex} className="text-2xl text-white">{icon}</div>
                })}
              </div>
            </div>
          })}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;
