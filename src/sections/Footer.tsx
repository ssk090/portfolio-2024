import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/ssk090",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/shivanandasai/",
  },
  {
    title: "Twitter",
    href: "https://x.com/shivananda_ssk",
  },
  {
    title: "Peerlist",
    href: "https://peerlist.io/shivanandasai",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-slate-600/80 to-sky-700/80 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-20"></div>
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; 2024. Made with ❤️ by Shivananda
          </div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 hover:cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
      <p className="text-xs text-white/20 flex items-center justify-center">
        :wq!
      </p>
    </footer>
  );
};
