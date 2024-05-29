import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative pb-20 pt-10 sm:pt-20 w-full min-h-screen snap-y"
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
        {/* <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" /> */}
      </div>
      {/* Background Grid */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.08] absolute flex items-center justify-center top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex items-center justify-center sm:justify-between relative my-20 z-10 w-full">
        <div className=" flex flex-col w-[80vw] md:max-w-[80vw] md:flex-row items-center justify-center sm:justify-between space-y-8">
          <div className="flex flex-col md:pl-20 sm:space-y-5">
            <p className="text-[28px] sm:text-5xl">Nice to Meet you! 👋</p>

            <p className="text-[35px] sm:text-5xl">
              {"I'm "}
              <span className="font-bold text-purple underline underline-offset-4 decoration-green-500 hover:duration-300 hover:decoration-red-500 hover:ease-linear">
                Mohil Bansal
              </span>
            </p>
            <div className="hidden sm:block ">
              <Link href="#projects">
                <MagicButton
                  title="Show my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </Link>
            </div>
          </div>
          {/* <Image
            src="/mohil_pic.jpg"
            alt="Mohil's Image"
            className="rounded-full md:h-[20%] md:w-[20%]"
            width={200}
            height={200}
          /> */}
          <div className="rounded-full overflow-hidden w-48 h-48 md:w-96 md:h-96">
            <Image
              src="/mohil_pic.jpg"
              alt="Mohil's Image"
              objectFit="cover"
              width={600}
              height={600}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
