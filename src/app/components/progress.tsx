"use client"

import React, { useState, useEffect, useRef } from "react";

interface Skill {
  name: string;
  percentage: number;
}

export function Proggress() {
  const skills: Skill[] = [
    { name: "Python", percentage: 60 },
    { name: "Java", percentage: 75 },
    { name: "C/C++", percentage: 70 },
    { name: "HTML/CSS/JS", percentage: 85 },
    { name: "Problem Solving", percentage: 75 }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
    });

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <div ref={progressRef} className="w-full max-w-full md:max-w-lg">
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-sm md:text-lg font-semibold text-black dark:text-white mb-2">
            {skill.name}
          </h3>
          <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-3 md:h-4">
            <div
              className={`bg-indigo-500 h-3 md:h-4 rounded-full transition-all duration-1000 ease-in-out`}
              style={{
                width: isVisible ? `${skill.percentage}%` : "0%",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
