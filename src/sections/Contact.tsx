import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-slate-600 to-sky-700 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16  items-center">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">Hiring?</h2>
              <p className="text-sm md:text-base mt-2">
                I am Shivananda, a Software Engineer with almost 4 years of
                experience in the industry. I am passionate about building
                innovative solutions that solve real-world problems. I am
                excited to bring my skills and experience to your team.
              </p>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1_PZA-7CuhFyxN__9sIswfBleBh_Rxdbq/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                  <span className="font-semibold">Check out my CV</span>
                  <ArrowUpRight className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
