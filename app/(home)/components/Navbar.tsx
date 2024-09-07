import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

interface INAvbar {
  className?: string;
}

const Navbar: React.FC<INAvbar> = ({ className }) => {
  const socials = [
    {
      link: "https://github.com/21522217",
      label: "Github",
      Icon: SiGithub,
    },
    {
      link: "https://www.linkedin.com/in/khiem-hanzo-tran/",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "",
      label: "X",
      Icon: SiX,
    },
  ];

  return (
    <nav
      className={cn(
        "py-10 justify justify-between items-center hidden sm:flex cursor-default animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-400 -rotate-2">
        Khiem Hanzo Tran 🥷
      </h1>

      <div className="flex flex-row gap-5">   
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon
                size={25}
                className="hover:scale-125 hover:text-green-500 transition-all"
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
