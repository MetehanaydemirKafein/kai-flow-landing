"use client";
import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Zap, Pointer, Layout } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const IntegrationsSection = dynamic(
  () => import("@/components/integrations-6")
);
const ContentSection = dynamic(() => import("@/components/content-2"));
const CommunitySection = dynamic(() => import("@/components/community"));
const ContributorsSection = dynamic(() => import("@/components/contributors"));
const demoData = {
  badge: "KAI Flow Features",
  heading: "Intelligent AI Workflow Automation Platform",
  description:
    "Build, deploy, and manage AI agents with powerful automation capabilities.",
  tabs: [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Chat",
      content: {
        badge: "AI Communication",
        title: "Natural language interactions with your AI agents.",
        description:
          "Enable seamless conversations with your AI agents through natural language processing. Build intelligent chatbots that understand context and provide meaningful responses.",
        buttonText: "Try Chat",
        imageSrc: "/chat.png",
        imageAlt: "AI Chat Interface",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Export",
      content: {
        badge: "Data Export",
        title: "Export your data in multiple formats.",
        description:
          "Seamlessly export your workflow data, results, and configurations in various formats including JSON, CSV, and XML. Maintain full control over your data.",
        buttonText: "Export Data",
        imageSrc: "/export.png",
        imageAlt: "Data Export",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "RAG",
      content: {
        badge: "Retrieval Augmented",
        title: "Enhance AI with your knowledge base.",
        description:
          "Implement Retrieval Augmented Generation to connect your AI agents with external knowledge sources. Create more accurate and contextual responses.",
        buttonText: "Setup RAG",
        imageSrc: "/rag.png",
        imageAlt: "RAG Implementation",
      },
    },
    {
      value: "tab-4",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Low Code",
      content: {
        badge: "Visual Builder",
        title: "Build workflows without coding.",
        description:
          "Create complex AI workflows using our intuitive drag-and-drop interface. No coding required - just connect nodes and deploy your automation.",
        buttonText: "Start Building",
        imageSrc: "/low-code.png",
        imageAlt: "Visual Workflow Builder",
      },
    },
  ],
};
export default function Home() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div>
      <WavyBackground className="max-w-6xl mx-auto pb-40 pt-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl lg:text-8xl text-white font-extrabold inter-var text-center bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
            KAI Flow
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl text-white/90 font-semibold inter-var text-center mt-4 mb-2">
            Next-Gen AI Workflow Automation
          </h2>
          <p className="text-base md:text-xl mt-6 text-white/80 font-light inter-var text-center max-w-3xl leading-relaxed">
            Transform your business with intelligent AI agents that automate
            complex workflows, seamlessly integrate with any API, and work
            autonomously 24/7 to solve your most challenging operational tasks.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <a
            href="https://github.com/kafein-product-space/KAI-Fusion"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2 min-w-[160px] justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <button
            onClick={() => {
              setShowComingSoon(true);
              setTimeout(() => setShowComingSoon(false), 2000);
            }}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2 min-w-[160px] justify-center cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <span className="transition-all duration-300">
              {showComingSoon ? "Coming Soon" : "Live Demo"}
            </span>
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <video
            className="rounded-lg shadow-2xl shadow-white/20 max-w-full h-full w-full pointer-events-none border border-white/10"
            autoPlay
            muted
            loop
          >
            <source src="/videos/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </WavyBackground>
      <Feature108 {...demoData} />
      <IntegrationsSection />
      <ContentSection />
      <CommunitySection />
      <ContributorsSection />
    </div>
  );
}
