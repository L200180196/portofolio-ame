// image
import Image from "next/image";

// component
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* Text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
          h-full container mx-auto">
          {/* Title */}
          <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className="h1">
            Hello Tech !! <br /> I`m{" "}
            <span className="text-accent">Amartya Maulana</span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden'
           className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Passionate and Enthusiast Full-Stack Developer, having an experience of 
            building Web and some other cool libraries and frameworks and Cross Platform
            Mobile Apps With Flutter.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden'
            className="hidden xl:flex">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* Image */}
      <div className="xl:w-3/4 w-full xl:h-full h-3/5 absolute xl:bottom-0 xl:right-0 top-0 ">
        {/* BG Image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full 
        h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* Particle */}
        <ParticlesContainer />
      </div>     
    </div>
  );
};

export default Home;
