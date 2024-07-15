"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";


export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src=""
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
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
          I'm flexible with communication across different time zones.
        </h2>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Skills/ Tools
          </h2>
         
        </div>
        <div className="flex pt-2 gap-5">
        <Image
          src="/html.png"
          width={50}
          height={50}
          alt="linear demo image"
        />

        <Image
          src="/css.png"
          width={50}
          height={50}
          alt="linear demo image"
        />
        </div>
      </WobbleCard>
    </div>
  );
}

export default WobbleCardDemo;
