"use client";
import Image from "next/image";
import { projects } from "@/data";
import { toast } from "react-toastify";

const ResponsiveProjects = () => {
  return (
    <section className="py-12">
      <h2 className="heading pb-16 pt-10">
        My Recent{" "}
        <span className="text-purple">Projects</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-6 px-1">
        {projects.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-[#101223]/80 via-[#23243a]/60 to-[#101223]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg flex flex-col h-full"
            style={{ backgroundClip: "padding-box" }}
          >
            <div className="relative w-full h-32 sm:h-40 md:h-44 rounded-t-2xl overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-col flex-grow p-4">
              <h2 className="font-bold text-base md:text-lg text-white mb-1">
                {item.title}
              </h2>
              <p className="text-gray-300 text-xs md:text-sm mb-2 line-clamp-8">
                {item.des}
              </p>
              <div className="flex flex-wrap gap-1 mt-auto">
                {item.iconLists.map((icon, idx) => (
                  <Image
                    key={idx}
                    src={icon}
                    alt="icon"
                    width={30}
                    height={18}
                    className="rounded-lg bg-black p-0.5"
                  />
                ))}
              </div>
              {item.link && (
                <a
                  href={item.link && item.link !== "#" ? item.link : undefined}
                  target={item.link && item.link !== "#" ? "_blank" : undefined}
                  rel={item.link && item.link !== "#" ? "noopener noreferrer" : undefined}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-white text-xs bg-white/10 hover:bg-white/20 border border-purple-400/30 shadow-[0_2px_12px_rgba(128,0,128,0.10)] backdrop-blur-lg transition-all duration-300"
                  style={{
                    letterSpacing: "0.07em",
                    backdropFilter: "blur(8px)",
                    cursor: item.link && item.link !== "#" ? "pointer" : "not-allowed",
                  }}
                  onClick={e => {
                    if (!item.link || item.link === "#") {
                      e.preventDefault();
                      toast.info(
                        item.id === 1
                          ? "This project is private and not publicly accessible."
                          : "This project link has been removed by academy."
                      );
                    }
                  }}
                >
                  <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 bg-clip-text text-transparent font-bold">
                    View Project
                  </span>
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block"
                  >
                    <path
                      d="M14 5l7 7-7 7M21 12H3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResponsiveProjects;