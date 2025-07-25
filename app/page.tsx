import Hero from "@/components/Hero";
import ModelViewer from "@/components/ModelViewer";
import { FloatingNav } from "@/components/ui/floatingNav";
import About from "@/components/about";
import Contact from "@/components/Contact";
import Footer from "@/components/ui/Footer";
import Mail3D from "@/components/Mail3D";
import Approach from "@/components/Approach";
import ProfileSection from "@/components/ProfileSection";
import ResponsiveProjects from "@/components/ResponsiveProjects";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.06] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        
      </div>

       <FloatingNav navItems={[
        {name: 'Home', link: '/'},
        {name: 'Profile', link: '#about'},
        {name: 'Projects', link: '#projects'},
        {name: 'Approach', link: '#approch'},
        {name: 'Contact', link: '#contact'}

       ]} />
         <div className="flex flex-col justify-center sm:flex-row w-full  pb-6">
          <Hero  />
          <div className="hidden sm:block mr-20">
            <ModelViewer />            
          </div>
        </div>

        <div id="about">
        <ProfileSection />    
        </div>    
        <About />
        
        
        <div id="projects">
          <ResponsiveProjects />
        </div>

     
       <div id="approch">
        <Approach />
       </div>
       
       <div className="flex justify-center">
        <div id="contact">          
            <Contact />
          </div>
        
        <div className="hidden sm:block mr-20">
            <Mail3D />            
          </div>

        </div>
         
          <Footer />
    
      </div>
    </main>
  );
}
