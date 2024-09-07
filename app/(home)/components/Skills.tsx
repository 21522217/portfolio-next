"use client"

import React from "react";

import CustomTitle from "./CustomTitle";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiJavascript,
  SiGit,
  SiSvelte,
  SiNodedotjs,
} from "react-icons/si";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Skills = () => {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "NextJS",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "PostgreSQL",
      Icon: SiPostgresql,
    },
    {
      text: "Supabase",
      Icon: SiSupabase,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Svelte",
      Icon: SiSvelte,
    },
    {
      text: "NodeJS",
      Icon: SiNodedotjs,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <CustomTitle
        text="Skills"
        className="flex flex-col justify-center items-center -rotate-6"
      />
      <HoverEffect items={skills}/>
    </div>
  );
};

export default Skills;
