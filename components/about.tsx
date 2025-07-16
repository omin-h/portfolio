"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto w-full pt-24 pb-10">
      <WobbleCard containerClassName="col-span-1 min-h-[300px] relative">
        <Image
          src="/dev.png"
          width={450}
          height={300}
          alt="linear demo image"
          className="absolute top-[60px] -right-10 md:-right-[40%] lg:-right-[0%] object-contain rounded-2xl opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-balance">
          <strong className="block text-2xl tracking-[-0.015em] text-white mb-2">
            💻 Full-Stack Mobile & Web Developer
          </strong>
          <span className="text-lg md:text-xl text-white drop-shadow-lg">
            I craft end-to-end digital experiences with clean code, responsive
            design, and scalable architecture.
          </span>
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px] relative">
        <Image
          src="/brain.png"
          width={450}
          height={300}
          alt="linear demo image"
          className="absolute top-[60px] -right-10 md:-right-[40%] lg:-right-[0%] object-contain rounded-2xl opacity-90"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-balance">
          <strong className="block text-2xl tracking-[-0.015em] text-white mb-2">
            🤖 Currently Building a Character AI Chat App
          </strong>
          <span className="text-lg md:text-xl text-white drop-shadow-lg">
            Merging personality with AI to make conversations smarter, fun, and
            more human-like.
          </span>
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px] relative">
        <Image
          src="/world.png"
          width={450}
          height={300}
          alt="linear demo image"
          className="absolute top-[60px] -right-10 md:-right-[40%] lg:-right-[0%] object-contain rounded-2xl opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-balance">
          <strong className="block text-2xl tracking-[-0.015em] text-white mb-2">
            🚀 Always Exploring Emerging Technologies
          </strong>
          <span className="text-lg md:text-xl text-white drop-shadow-lg">
            From AI to cloud-native apps, I love pushing boundaries and building
            with the latest tools.
          </span>
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-pink-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] justify-center items-center flex">
        <div>
          <strong className="block text-2xl md:text-3xl text-white mb-4">
            Skills, Tools
          </strong>
          <div className="flex flex-wrap sm:justify-center pt-2 gap-6">
            <Image src="/html.png" width={50} height={50} alt="html" />
            <Image src="/css.png" width={50} height={50} alt="css" />
            <Image src="/react.png" width={50} height={50} alt="react" />
            <Image src="/node.png" width={50} height={50} alt="node" />
            <Image src="/spring.png" width={50} height={50} alt="spring" />
            <Image src="/mongo.png" width={50} height={50} alt="mongo" />
            <Image src="/python.png" width={50} height={50} alt="python" />
            <Image src="/java.png" width={50} height={50} alt="java" />
            <Image src="/js.png" width={50} height={50} alt="js" />
            <Image src="/tailwind.png" width={50} height={50} alt="tailwind" />
            <Image src="/php.png" width={50} height={50} alt="php" />
            <Image src="/next.png" width={50} height={50} alt="next" />
            <Image src="/sql.png" width={50} height={50} alt="sql" />
            <Image src="/rest.png" width={50} height={50} alt="rest" />
            <Image src="/github.png" width={50} height={50} alt="github" />
            <Image src="/c.png" width={50} height={50} alt="c" />
            <Image src="/c++.png" width={50} height={50} alt="c++" />
            <Image src="/linux.png" width={50} height={50} alt="linux" />
            <Image src="/framer.png" width={50} height={50} alt="framer" />
          </div>
        </div>
      </WobbleCard>
    </div>
  );
}

export default WobbleCardDemo;
