import React from "react";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { ContainerScroll } from "./ui/container-scroll-animation";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const, // Type assertion ekledik
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <div className="mx-auto max-w-5xl px-6">
                  <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                    <TextEffect
                      preset="fade-in-blur"
                      speedSegment={0.3}
                      as="h1"
                      className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16"
                    >
                      Intelligent AI Agents — Automate Everything
                    </TextEffect>
                    <TextEffect
                      per="line"
                      preset="fade-in-blur"
                      speedSegment={0.3}
                      delay={0.5}
                      as="p"
                      className="mt-8 max-w-2xl text-pretty text-lg"
                    >
                      Build intelligent AI agents that can automate complex
                      tasks, integrate with any API, and work autonomously to
                      solve your business challenges.
                    </TextEffect>
                  </div>
                </div>
              </>
            }
          >
            <Image
              src={`/ms.png`}
              alt="AI Agent Platform"
              height={720}
              width={1400}
              className="rounded-2xl object-cover w-full h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
      </main>
    </>
  );
}
