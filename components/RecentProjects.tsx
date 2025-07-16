"use client";
import Image from 'next/image';
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const CARD_HEIGHT = "h-[590px]"; // You can adjust this value as needed

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading pt-14">
        My recent{" "}
        <span className="text-purple">projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className={`flex items-stretch justify-center sm:w-96 w-full h-auto sm:h-[590px] mt-10`}
          >
            <PinContainer
              title="GitHub"
              href={item.link}
              className={`flex flex-col w-full ${CARD_HEIGHT}`}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-full overflow-hidden h-48 mb-10">
                <Image
                  src={item.img}
                  alt="cover"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>

              <div className="flex flex-col flex-grow justify-start">
                <h1 className="font-bold lg:text-2xl md:text-xl text-base">
                  {item.title}
                </h1>
                <p
                  className="lg:text-sm lg:font-normal font-light text-sm"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>
              </div>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.3] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon" width={24} height={24} />
                    </div>
                  ))}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
