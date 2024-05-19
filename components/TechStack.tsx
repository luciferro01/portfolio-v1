import React from "react";
import { GlobeDemo } from "./ui/GlobeDemo";

const TechStack = () => {
  return (
    <div className="flex flex-col w-screen h-screen text-center justify-ceter pt-[8rem] md:pt-20 ">
      <span className="-rotate-2 w-full underline underline-offset-4 decoration-purple text-2xl sm:text-3xl">
        Tech Stack
      </span>
      <div className="flex flex-col sm:flex-row items-center justify-between pt-20 md:pt-30 ">
        <GlobeDemo otherClassName={"hidden sm:block"} />
        <p>Hello </p>
      </div>
    </div>
  );
};

export default TechStack;
