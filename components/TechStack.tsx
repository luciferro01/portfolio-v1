import Image from "next/image";
import React from "react";
import OrbitingCircles from "./ui/orbiting-circles";

const TechStack = () => {
  const techStacks = [
    {
      title: "Languages",
      items: [
        {
          src: "https://img.shields.io/badge/Java-000?style=for-the-badge&logo=openjdk",
          alt: "Java",
        },
        {
          src: "https://img.shields.io/badge/Kotlin-000?style=for-the-badge&logo=kotlin",
          alt: "Kotlin",
        },
        {
          src: "https://img.shields.io/badge/Dart-000?style=for-the-badge&logo=dart",
          alt: "Dart",
        },
        {
          src: "https://img.shields.io/badge/JavaScript-000?style=for-the-badge&logo=javascript",
          alt: "JavaScript",
        },
        {
          src: "https://img.shields.io/badge/TypeScript-000?style=for-the-badge&logo=typescript",
          alt: "TypeScript",
        },
      ],
    },
    {
      title: "Frameworks",
      items: [
        {
          src: "https://img.shields.io/badge/Flutter-000?style=for-the-badge&logo=flutter&logoColor=blue",
          alt: "Flutter",
        },
        {
          src: "https://img.shields.io/badge/Jetpack_Compose-000?style=for-the-badge&logo=jetpackcompose",
          alt: "Jetpack Compose",
        },
        {
          src: "https://img.shields.io/badge/React_Native-000?style=for-the-badge&logo=react",
          alt: "React Native",
        },
        {
          src: "https://img.shields.io/badge/Android-000?style=for-the-badge&logo=android",
          alt: "Android",
        },
        {
          src: "https://img.shields.io/badge/Spring_Boot-000?style=for-the-badge&logo=springboot",
          alt: "Spring Boot",
        },
        {
          src: "https://img.shields.io/badge/-NextJS-000?style=for-the-badge&logo=next.js",
          alt: "NextJS",
        },
      ],
    },
    {
      title: "Backend",
      items: [
        {
          src: "https://img.shields.io/badge/Spring_Boot-000?style=for-the-badge&logo=springboot",
          alt: "Spring Boot",
        },
        {
          src: "https://img.shields.io/badge/Node.js-000?style=for-the-badge&logo=node.js",
          alt: "Node.js",
        },
        {
          src: "https://img.shields.io/badge/Bun.js-000?style=for-the-badge&logo=bun",
          alt: "Bun.js",
        },
      ],
    },
    {
      title: "Database",
      items: [
        {
          src: "https://img.shields.io/badge/PostgreSQL-000?style=for-the-badge&logo=postgresql",
          alt: "PostgreSQL",
        },
        {
          src: "https://img.shields.io/badge/MySQL-000?style=for-the-badge&logo=mysql",
          alt: "MySQL",
        },
        {
          src: "https://img.shields.io/badge/MongoDB-000?style=for-the-badge&logo=mongodb",
          alt: "MongoDB",
        },
        {
          src: "https://img.shields.io/badge/Redis-000?style=for-the-badge&logo=redis",
          alt: "Redis",
        },
        {
          src: "https://img.shields.io/badge/Firebase-000?style=for-the-badge&logo=firebase",
          alt: "Firebase",
        },
        {
          src: "https://img.shields.io/badge/Appwrite-000?style=for-the-badge&logo=appwrite",
          alt: "Appwrite",
        },
        {
          src: "https://img.shields.io/badge/Supabase-000?style=for-the-badge&logo=supabase",
          alt: "Supabase",
        },
      ],
    },
    {
      title: "Tools & Technologies",
      items: [
        {
          src: "https://img.shields.io/badge/AWS-000?style=for-the-badge&logo=amazonwebservices",
          alt: "AWS",
        },
        {
          src: "https://img.shields.io/badge/Docker-000?style=for-the-badge&logo=docker",
          alt: "Docker",
        },
        {
          src: "https://img.shields.io/badge/Git-000?style=for-the-badge&logo=git",
          alt: "Git",
        },
        {
          src: "https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github",
          alt: "GitHub",
        },
      ],
    },
  ];

  return (
    <div className="py-20 mt-auto" id="tech-stack">
      <h1 className="heading">
        My <span className="text-purple">Tech Stack</span>
      </h1>
      <div className="z-10 w-full h-max tech-stack flex flex-col md:flex-row justify-center items-center text-zinc-100 opacity-95 mt-20 sm:mt-52 md:mt-20">
        {/* <div className="w-6/12 flex justify-center items-center">
        <Image
          src="/tech-stack-image.svg"
          alt=""
          className="hidden md:flex w-full select-none pointer-events-none"
          draggable="false"
          width={50}
          height={50}
        />
      </div> */}
        <div className="md:w-6/12 h-96 flex justify-center items-center relative">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Tech 🧑‍💻
          </span>
          {/* Orbiting Circles */}
          <OrbitingCircles
            className="h-[34px] w-[34px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={80}
          >
            <Image
              src={"/firebase.svg"}
              alt="Firebase"
              width={25}
              height={25}
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[40px] w-[40px] border-none bg-transparent"
            duration={20}
            delay={10}
            radius={80}
          >
            <Image
              src={"/appwrite.svg"}
              alt="Appwrite"
              width={20}
              height={20}
            />
          </OrbitingCircles>

          {/* Outer Circles (reverse) */}
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            reverse
            radius={160}
            duration={20}
          >
            <Image
              src={"/flutter.svg"}
              alt="Flutter 🔥"
              width={30}
              height={30}
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            reverse
            radius={160}
            duration={20}
            delay={40}
          >
            <Image
              src={"/next-logo.svg"}
              alt="Next Js"
              width={35}
              height={35}
            />
          </OrbitingCircles>
        </div>

        <div className="w-full px-2 text-center flex flex-col mt-32 sm:mt-0 md:px-0 md:w-6/12">
          {/* <p className="flex justify-center text-3xl font-semibold">
            TECH STACK
          </p> */}
          {techStacks.map((stack, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center mt-4"
            >
              <p className="text-xl mt-4 md:mt-1">{stack.title}</p>
              <div className="flex flex-row flex-wrap justify-center">
                {stack.items.map((item, i) => (
                  <Image
                    key={i}
                    src={item.src}
                    alt={item.alt}
                    className="m-2 w-28 h-8 md:m-3 select-none transition-all ease-in-out hover:scale-110"
                    style={{ width: "auto" }}
                    // objectFit="contain"
                    draggable="false"
                    width={40}
                    height={45}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
