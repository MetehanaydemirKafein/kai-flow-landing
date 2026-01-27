import { Cpu, Zap } from "lucide-react";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section id="content" className="py-16 md:py-32 bg-black">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        {/* Başlık */}
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
          More than automation — a full visual backend platform
        </h2>

        {/* İçerik bloğu */}
        <div className="relative">
          {/* Sol yazı bölümü */}
          <div className="relative z-10 space-y-4 md:w-1/2">
            <p className="text-white/80">
              Our platform isn't just about drag-and-drop workflows.{" "}
              <span className="text-white font-medium">
                It’s a full-stack automation ecosystem
              </span>{" "}
              — connecting APIs, databases, logic, and LLMs.
            </p>
            <p className="text-white/80">
              Whether you're automating tasks, building internal tools, or
              powering your product’s backend — the system scales with your
              ideas.
            </p>

            {/* Özellikler */}
            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className="text-sm font-medium text-white">Realtime Triggers</h3>
                </div>
                <p className="text-white/70 text-sm">
                  Instantly respond to events from webhooks, cron jobs, or
                  external APIs.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="text-sm font-medium text-white">Modular Logic</h3>
                </div>
                <p className="text-white/70 text-sm">
                  Build complex flows with conditions, loops, and custom
                  functions — no vendor lock-in.
                </p>
              </div>
            </div>
          </div>

          {/* Sağdaki görsel */}
          <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
            <div
              aria-hidden
              className="bg-linear-to-l z-1 to-black absolute inset-0 hidden from-transparent to-55% md:block"
            ></div>
            <div className="border-white/20 relative rounded-2xl border border-dotted p-2">
              <Image
                src="/cds.png"
                className="hidden rounded-[12px] dark:block"
                alt="workflow builder dark"
                width={1207}
                height={929}
              />
              <Image
                src="/cds.png"
                className="rounded-[12px] shadow dark:hidden"
                alt="workflow builder light"
                width={1207}
                height={929}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
