"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import Image from "next/image";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div>
        <h1 className="heading pt-14">
          My{" "}
          <span className="text-purple">approach</span>
        </h1>
      </div>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black-100 w-full gap-4 mx-auto px-8">
        <Card
          title="Planning and Design"
          icon={<Image src="/first.png" alt="Planning and Design Icon" width={100} height={100} />}
          des="I start by collaborating with stakeholders to understand project requirements and define the scope. Then, I design the system architecture, selecting the tech stack and planning the database, API, and data flow. Finally, I create wireframes and prototypes to ensure a great user experience."
          backgroundColor="bg-gradient-to-r from-black to-blue"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-black"
          />
        </Card>
        <Card
          title="Development"
          icon={<Image src="/second.png" alt="Development Icon" width={100} height={100} />}
          des="I develop the front-end using modern frameworks to create a responsive and interactive user interface. On the back-end, I set up the server, develop APIs, and implement business logic. I also manage the database, ensuring efficient data handling and security."
          backgroundColor="bg-gradient-to-r from-black to-blue"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Testing and Deployment"
          icon={<Image src="/third.png" alt="Testing and Deployment Icon" width={100} height={100} />}
          des="I test the app thoroughly to make sure everything works well. Then, I deploy it using automated tools and a hosting service. After it's live, I keep an eye on it, fixing any issues and updating it as needed."
          backgroundColor="bg-gradient-to-r from-black to-blue"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  des,
  backgroundColor,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
  backgroundColor: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl ${backgroundColor}`}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default CanvasRevealEffectDemo;
