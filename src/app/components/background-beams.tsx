import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { FlipWords } from "./ui/flip-words"; // Import the FlipWords component
import { BackgroundLines } from "./ui/background-lines";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <div className="h-screen flex items-center justify-center">
      <BackgroundBeamsWithCollision className="flex flex-col items-center justify-center text-center h-full w-full">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          {/* Text Layer */}
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            Welcome,{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="relative bg-clip-text bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-2 pl-2 pb-4">
                <span>I am Umar Shaikh.</span>
              </div>
            </div>
          </h2>

          {/* FlipWords for rotating words like 'Software Engineer', 'Coder', etc. */}
          <div className="relative z-20 mt-2">
            <FlipWords
              words={["Software Engineer", "Coder", "Developer", "Tech Enthusiast"]}
              duration={3000}
              className="text-2xl md:text-3xl lg:text-5xl font-medium text-black dark:text-white"
            />
          </div>
        </BackgroundLines>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
