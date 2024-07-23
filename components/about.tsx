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
        <h2 className="absolute top-30 left-10 max-w-80 text-left text-balance text-3xl font-semibold tracking-[-0.015em]">
          I am a freelance full-stack developer
        </h2>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px] relative">
        <Image
          src="/brain.png"
          width={450}
          height={300}
          alt="linear demo image"
          className="absolute top-[60px] -right-10 md:-right-[40%] lg:-right-[0%] object-contain rounded-2xl opacity-90"
        />
        <h2 className="absolute top-30 left-10 max-w-80 text-left text-balance text-3xl tracking-[-0.015em] text-white">
          Currently learning, <strong>supervised machine learning</strong>
        </h2>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px] relative">
        <Image
          src="/world.png"
          width={450}
          height={300}
          alt="linear demo image"
          className="absolute top-[60px] -right-10 md:-right-[40%] lg:-right-[0%] object-contain rounded-2xl opacity-40"
        />
        <h2 className="absolute top-30 left-10 max-w-80 text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
          I&apos;m flexible with communication across different time zones.
        </h2>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-pink-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] justify-center items-center flex">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Skills, Tools
          </h2>
        </div>
        <div className="flex flex-wrap sm:justify-center pt-2 gap-6">
          <Image src="/html.png" width={50} height={50} alt="linear demo image" />
          <Image src="/css.png" width={50} height={50} alt="linear demo image" />
          <Image src="/react.png" width={50} height={50} alt="linear demo image" />
          <Image src="/node.png" width={50} height={50} alt="linear demo image" />
          <Image src="/spring.png" width={50} height={50} alt="linear demo image" />
          <Image src="/mongo.png" width={50} height={50} alt="linear demo image" />
          <Image src="/python.png" width={50} height={50} alt="linear demo image" />
          <Image src="/java.png" width={50} height={50} alt="linear demo image" />
          <Image src="/js.png" width={50} height={50} alt="linear demo image" />
          <Image src="/tailwind.png" width={50} height={50} alt="linear demo image" />
          <Image src="/php.png" width={50} height={50} alt="linear demo image" />
          <Image src="/next.png" width={50} height={50} alt="linear demo image" />
          <Image src="/sql.png" width={50} height={50} alt="linear demo image" />
          <Image src="/rest.png" width={50} height={50} alt="linear demo image" />
          <Image src="/github.png" width={50} height={50} alt="linear demo image" />
          <Image src="/c.png" width={50} height={50} alt="linear demo image" />
          <Image src="/c++.png" width={50} height={50} alt="linear demo image" />
          <Image src="/linux.png" width={50} height={50} alt="linear demo image" />
          <Image src="/framer.png" width={50} height={50} alt="linear demo image" />
        </div>
      </WobbleCard>
    </div>
  );
}

export default WobbleCardDemo;
