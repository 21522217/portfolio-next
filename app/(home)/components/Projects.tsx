import React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";

import CustomTitle from "./CustomTitle";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import {
  SiNextdotjs,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "Spotify Clone Basics",
      tech: [SiTailwindcss, SiNextdotjs, SiSupabase, SiTypescript, SiStripe],
      link: "https://spotify-clone-green-psi.vercel.app/",
      cover: "/project-spotify-clone.png",
      background: "bg-green-400",
    },
    {
      title: "Spotify Clone Basics",
      tech: [SiTailwindcss, SiNextdotjs, SiSupabase, SiTypescript],
      link: "https://spotify-clone-green-psi.vercel.app/",
      cover: "/project-spotify-clone.png",
      background: "bg-violet-400",
    },
    {
      title: "Spotify Clone Basics",
      tech: [SiTailwindcss, SiNextdotjs, SiSupabase, SiTypescript],
      link: "https://spotify-clone-green-psi.vercel.app/",
      cover: "/project-spotify-clone.png",
      background: "bg-blue-400",
    },
    {
      title: "Spotify Clone Basics",
      tech: [SiTailwindcss, SiNextdotjs, SiSupabase, SiTypescript],
      link: "https://spotify-clone-green-psi.vercel.app/",
      cover: "/project-spotify-clone.png",
      background: "bg-cyan-400",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <CustomTitle
        text="Projects 📚"
        className="flex flex-col justify-center items-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-x-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-extrabold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, idx) => {
                        return <Icon key={idx} className="w-8 h-8" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
