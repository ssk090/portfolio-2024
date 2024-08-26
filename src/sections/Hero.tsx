import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Image src={memojiImage} alt="Memoji Computer" width={100} />
          <div className="bg-slate-950 border border-gray-800 px-4 py-2 rounded-3xl text-white/90 text-sm inline-flex items-center gap-4">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Coding in VS Code</div>
          </div>
        </div>
        <div className="">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Hey 👋 I am Shivananda Sai
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            An Enthusiastic Frontend Development Professional
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold ">Lets Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
