import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/magicButton'
import { TiArrowRightThick } from "react-icons/ti";

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>

        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
        <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw] ' fill="purple"/>
        <Spotlight className='-top28 -left80 h-[80vh] w-[50vw]' fill="blue"/>
        <Spotlight className='-top28 -left-40 h-[80vh] w-[50vw]' fill="white"/>

      </div>
      
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        
      </div>

       <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]
          flex flex-col items-center justify-center'>
            
          

          <TextGenerateEffect 
            className='relative top-[-50px] text-center text-[40px] md:text-5xl lg:text-6xl'
            words="Hello world!, I'm Omin dhsh hghfdh fdhdrhdhd hd hdf hfdh d djdg jd"
            />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Omin, a fullstack Developer based in Sri Lanka.
          </p>

          <a href='#about'>
            <MagicButton 
            icon={<TiArrowRightThick />} 
            position={"right"}
            />
             </a>

          </div>
          
        </div>


    </div>
  )
}

export default Hero
