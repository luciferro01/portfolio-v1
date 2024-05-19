"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const Footer = () => {
  return (
    <div className="flex w-screen h-min justify-center items-center">
      <HeroHighlight className="h-min">
        {/* <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="inline-block"
        > */}
        <p>
          🖌️ & <span className="text-purple font-bold">{"</>"}</span> by{"  "}
          {/* <Highlight> */}
          <Link
            href={"https://github.com/luciferro01"}
            className="text-lg text-white underline underline-offset-2 decoration-green-400 font-bold"
            target="blank"
          >
            Mohil Bansal
          </Link>
          {/* </Highlight> */}
        </p>
        {/* </motion.h1> */}
      </HeroHighlight>
    </div>
    // <div className="flex justify-center w-screen -translate-x-10 sm:-translate-x-20 ">
    //   <HeroHighlight>
    //     <GlobeDemo />
    //     <p>Hello</p>
    //   </HeroHighlight>
    // </div>
  );
};

export default Footer;
