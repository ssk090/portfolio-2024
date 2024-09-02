import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Shivflix",
    position:
      "React, Hooks, Redux Toolkit, Material UI, Alan AI, TMBD API, Netlify",
    text: "Built a Netflix-like platform with IMDb features for movie and TV show info and ratings. Utilized Alan AI for voice control and used React, Hooks, and Redux Toolkit for a seamless and interactive user experience",
    link: "https://shivflix.netlify.app/",
  },
  {
    name: "Image to Text",
    position: "NextJs, Cloudflare, Hono",
    text: "Image to text generation. Upload your image and it will generate instagram post captions related to the picture you uploaded. Utilized Cloudflare and Hono for APIs",
    link: "https://c053d302.frontend-nextjs-dto.pages.dev/",
  },
  {
    name: "Web3 Wallet",
    position: "NextJs",
    text: "Built a web3 wallet for users. It also generates mnemonics for users to use for their wallet. Utilized NextJs for the frontend",
    link: "https://mnemonic-generator-murex.vercel.app/",
  },
  // {
  //   name: "Olivia Green",
  //   position: "Head of Design @ GreenLeaf",
  //   text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
  //   avatar: memojiAvatar2,
  // },
  // {
  //   name: "Daniel White",
  //   position: "CEO @ InnovateCo",
  //   text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
  //   avatar: memojiAvatar3,
  // },
  // {
  //   name: "Emily Carter",
  //   position: "Product Manager @ GlobalTech",
  //   text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
  //   avatar: memojiAvatar4,
  // },
  // {
  //   name: "Michael Brown",
  //   position: "Director of IT @ MegaCorp",
  //   text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
  //   avatar: memojiAvatar5,
  // },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences"
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
            {[
              ...new Array(2).fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {testimonials.map((testimonial) => (
                    <Card
                      key={testimonial.name}
                      className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center">
                        {/* <div className="size-14 bg-gray-800 rounded-full inline-flex items-center justify-center flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}  
                            className="max-h-full"
                          />
                        </div> */}
                        <div className="">
                          <div className="flex justify-between items-center">
                            <div className="font-semibold">
                              {testimonial.name}
                            </div>
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base">
                        {testimonial.text}
                      </p>
                      <a
                        href={testimonial.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                          <span>Visit</span>
                          <ArrowUpRight className="size-5" />
                        </button>
                      </a>
                    </Card>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};
