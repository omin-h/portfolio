"use client"
import React from "react";

const ProfileSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-2 sm:px-4 md:px-0">
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
        <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
          An information technology undergraduate with hands-on experience across the full software development lifecycle. Skilled in data structures, algorithms, and database concepts, with a strong foundation in cloud-based environments. I am eager to contribute creative ideas through an internship focused on impactful, enterprise-grade projects, while learning from experienced professionals in software engineering.
        </p>
        <div className="bg-black-200/60 bg-opacity-60 rounded-xl shadow-2xl p-6 text-left mx-auto
          backdrop-blur-md border border-gray-700/40
          glassy-gradient">
          <h3 className="text-xl font-semibold text-pink-400 mb-4">Education</h3>
          <ul className="space-y-8">
            <li>
              <div className="flex flex-wrap items-center mb-2">
                <span className="font-bold text-white">BSc (Hons) in Information Technology, Specializing in Information Technology</span>
                <span className="ml-3 px-2 py-1 text-xs rounded-full bg-pink-500 text-white">Ongoing</span>
              </div>
              <span className="text-gray-300 block mb-2">Sri Lanka Institute of Information Technology | 02/2022 - present</span>
              <div className="w-full bg-gray-700 rounded-full h-2.5 glassy-bar">
                <div className="bg-pink-400 h-2.5 rounded-full transition-all duration-700" style={{ width: "60%" }}></div>
              </div>
            </li>
            <li>
              <div className="flex flex-wrap items-center mb-2">
                <span className="font-bold text-white">Physical Science and Information Technology</span>
                <span className="ml-3 px-2 py-1 text-xs rounded-full bg-green-500 text-white">Completed</span>
              </div>
              <span className="text-gray-300 block mb-2">Sivali Central College, Ratnapura | 01/2007 - 11/2020</span>
              <div className="w-full bg-gray-700 rounded-full h-2.5 glassy-bar">
                <div className="bg-green-400 h-2.5 rounded-full transition-all duration-700" style={{ width: "100%" }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .glassy-gradient {
          background: linear-gradient(135deg, rgba(40,40,50,0.7) 0%, rgba(80,80,120,0.4) 100%);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        .glassy-bar {
          background: linear-gradient(90deg, rgba(80,80,120,0.3) 0%, rgba(40,40,50,0.7) 100%);
        }
      `}</style>
    </section>
  );
};

export default ProfileSection;