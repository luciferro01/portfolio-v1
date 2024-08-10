import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative pb-20 pt-10 sm:pt-20 w-full h-[60vh] md:min-h-screen snap-y"
      id="home"
    >
      {/* Creating a Spotlight */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background Grid */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.3] bg-grid-black/[0.08] absolute flex items-center justify-center top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center sm:justify-between relative my-20 z-10 w-full">
        <div className="flex flex-col-reverse w-[80vw] md:max-w-[80vw] md:flex-row items-center justify-end sm:justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col md:pl-20 my-10 sm:space-y-5">
            <p className="text-[28px] sm:text-5xl">Nice to Meet you! 👋</p>

            <p className="text-[35px] sm:text-5xl">
              {"I'm "}
              <span className="font-bold text-purple underline underline-offset-4 decoration-green-500 hover:duration-300 hover:decoration-red-500 hover:ease-linear">
                Mohil Bansal
              </span>
            </p>
            <div className="text-center md:text-left my-7 md:my-0">
              <Link href="https://drive.google.com/uc?export=download&id=1n8xj56Wy8lfFPpMxSnf5DOqDRQZFyzms">
                <MagicButton
                  title="Download Resume"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </Link>
            </div>
          </div>
          <Image
            src="/mohil_animated.png"
            alt="Mohil's Image"
            className="rounded-full md:h-[20%] md:w-[30%]"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
