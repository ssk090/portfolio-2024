"use client";

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { handleScroll } from "@/utils";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [localTime, setLocalTime] = useState("-");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const timeString = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
      setLocalTime(`${timeString} GMT (+5:30)`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update time every minute

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldspin="true"
          spinduration="6s"
        >
          <SparkleIcon
            className="size-8 text-white/20"
            shouldspin="true"
            spinduration="10s"
          />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldspin="true"
          spinduration="6s"
        >
          <SparkleIcon className="size-5 text-white/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 bg-yellow-300 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldspin="true"
          spinduration="6s"
        >
          <SparkleIcon className="size-10 text-white/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="38s"
          shouldspin="true"
          spinduration="6s"
        >
          <StarIcon
            className="size-28 text-white"
            shouldspin="true"
            spinduration="10s"
          />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="40s"
          shouldspin="true"
          spinduration="6s"
        >
          <StarIcon className="size-12 text-white" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="42s"
          shouldspin="true"
          spinduration="6s"
        >
          <StarIcon className="size-8 text-white" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="44s">
          <div className="size-3 bg-yellow-300 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="46s"
          shouldspin="true"
          spinduration="6s"
        >
          <SparkleIcon
            className="size-14 text-white/20"
            shouldspin="true"
            spinduration="10s"
          />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="48s">
          <div className="size-3 bg-yellow-300 rounded-full"></div>
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Image src={memojiImage} alt="Memoji Computer" width={100} />
          <div className="bg-[#0f0f0f] border border-gray-800 px-4 py-2 rounded-3xl text-white/90 text-sm inline-flex items-center gap-4">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">{localTime}</div>
          </div>
        </div>
        <div className="">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Hey 👋 I am Shivananda
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            An Enthusiastic Frontend Development Professional
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#work" onClick={handleScroll} style={{ zIndex: 10 }}>
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Career Evolution</span>
              <ArrowDown className="size-4" />
            </button>
          </a>
          <a href="#contact" onClick={handleScroll} style={{ zIndex: 10 }}>
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
              <span>👋</span>
              <span className="font-semibold ">Lets Connect</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
