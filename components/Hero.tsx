import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/magicButton'
import { TiArrowRightThick } from "react-icons/ti";

const Hero = () => {
  return (
    <div>
      <div>

        <Spotlight className='top-200 h-[60vh] w-[30vw]' fill="blue"/>
        <Spotlight className='-top28 -left-40 h-[80vh] w-[50vw]' fill="white"/>

      </div>
      
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        
      </div>

       <div className='flex justify-left relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]
          flex flex-col items-left justify-center'>
            
          

          <TextGenerateEffect 
            className='pt-[80px] mr-10 text-left text-[40px] md:text-3xl lg:text-5xl'
            words="Delivering comprehensive solutions with precision and passion"
            />

          <p className=" left-[-2] mb-4 text-sm md:text-lg lg:text-[18px] pt-4">
            Hi! I&apos;m Omin, a fullstack Developer and AI enthusiast based in Sri Lanka.
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
