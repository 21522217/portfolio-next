"use client";

import React from "react";

import Link from "next/link";

import { MovingBorderButton } from "@/components/ui/moving-border";
import CustomTitle from "./CustomTitle";

const Hero = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-3xl lg:text-7xl font-bold ">
          Nice to meet you 👋
          <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Khiem Hanzo Tran"}
          </span>
        </h1>
        <p className="w-full lg: text-lg text-gray-300">
          {
            "I'm a passionate software developer from Vietnam has the capability to build web/mobile applications with modern UI that users love."
          }
        </p>
        <Link href={"mailto:someone@gmail.com"} className="inline-block group">
          <CustomTitle text="Contact Me 📮" className=""/>
        </Link>
      </div>
      <div className="relative flex items-center justify-center h-screen">
        <div className="relative w-80 h-80 rotate-[-30deg]">
          <div className="absolute inset-0 flex flex-col justify-between items-center space-y-4 transform -translate-y-8">
            <div className="flex gap-4 transform translate-x-10">
              <div className="w-32 h-32 rounded-2xl bg-green-500 shadow-lg"></div>
              <div className="w-32 h-32 rounded-full bg-indigo-500 shadow-lg"></div>
            </div>
            <div className="flex gap-4 transform -translate-x-10">
              <div className="w-32 h-32 rounded-2xl bg-indigo-500 shadow-lg"></div>
              <div className="w-32 h-32 rounded-full bg-green-500 shadow-lg"></div>
            </div>
          </div>
          <div className="glow-ball absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
        </div>

        <div className="absolute top-96 left-3">
          <MovingBorderButton borderRadius="0.5rem" className="p-3 font-semibold">
            <p>🛎️ Available for Work</p>
          </MovingBorderButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
