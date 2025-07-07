import React from "react";
import { SkillsInfo } from "../../data";
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Skills</h2>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-3 md:mt-4 text-sm sm:text-base md:text-lg font-medium md:font-semibold max-w-3xl mx-auto">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* Skills Categories */}
      <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 py-6 md:py-10 justify-center">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-4 sm:px-6 md:px-8 py-6 md:py-8 w-full sm:w-[48%] lg:w-[45%] xl:w-[30%] rounded-xl md:rounded-2xl border border-white 
            shadow-[0_0_15px_1px_rgba(130,69,236,0.3)] hover:shadow-[0_0_25px_2px_rgba(130,69,236,0.4)] transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400 mb-3 md:mb-4 text-center">
              {category.title}
            </h3>

            {/* Skill Items */}
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={800}
              scale={1.03}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-1 sm:space-x-2 bg-transparent border border-gray-700 rounded-xl sm:rounded-2xl py-1 sm:py-2 px-1 sm:px-2 text-center hover:bg-gray-800 transition-colors duration-200"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                    />
                    <span className="text-xs sm:text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;