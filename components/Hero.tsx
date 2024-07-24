import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/magicButton'
import { TiArrowRightThick } from "react-icons/ti";

const Hero = () => {
  return (
    <div>
      <div>

        <Spotlight className='  h-[80vh] w-[50vw]' fill="blue"/>
        <Spotlight className=' -left-40 h-[80vh] w-[50vw]' fill="white"/>

      </div>
      
    
       <div className='flex justify-left lg:ml-20 relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]
          flex flex-col items-left justify-center'>
            
          

          <TextGenerateEffect 
            className='pt-[80px] mr-10 text-left text-[40px] md:text-3xl lg:text-5xl'
            words="Delivering comprehensive solutions with precision and passion"
            />

          <p className=" left-2 mb-4 text-sm md:text-lg lg:text-[23px] pt-4">
            Hi! I&apos;m <strong>Omin Hemapriya</strong>, a fullstack Developer and AI enthusiast based in Sri Lanka.
          </p>
 
          <a href="#projects">
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
