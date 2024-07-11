import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import ModelViewer from "@/components/ModelViewer";
import { FloatingNav } from "@/components/ui/floatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
       <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome/>},
       ]} />
         <div className="flex flex-col sm:flex-row w-full">
          <Hero  />
          <div className="hidden sm:block">
            <ModelViewer />
          </div>
        </div>
        <Grid />
      </div>
    </main>
  );
}
