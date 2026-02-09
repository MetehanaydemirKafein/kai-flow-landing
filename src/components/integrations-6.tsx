import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Integration = {
  icon?: string;
  name: string;
  label?: string;
  color?: string;
  invert?: boolean;
};

const repeat = <T,>(arr: T[], times: number): T[] =>
  Array.from({ length: times }, () => arr).flat();

// Row 1: Tools, Connectors, File Formats & Services
const row1Base: Integration[] = [
  { icon: "/icons/cohere.svg", name: "Cohere Reranker" },
  { icon: "/icons/tavily-nonbrand.svg", name: "Tavily Search" },
  { icon: "/icons/openai.svg", name: "OpenAI", invert: true },
  { icon: "/icons/python.svg", name: "Python" },
  { icon: "/icons/javascript.svg", name: "JavaScript" },
  { icon: "/icons/webhook.svg", name: "Webhook" },
  { icon: "/icons/box.svg", name: "Vector Store" },
  { icon: "/icons/search.svg", name: "Web Scraper" },
  { icon: "/icons/link.svg", name: "HTTP Client" },
  { icon: "/icons/bot.svg", name: "Agent" },
  { icon: "/icons/database.svg", name: "Buffer Memory" },
  { icon: "/icons/postgresql.svg", name: "PostgreSQL" },
  { icon: "/icons/pdf.svg", name: "PDF" },
  { icon: "/icons/word.svg", name: "Word" },
  { icon: "/icons/excel.svg", name: "Excel" },
  { icon: "/icons/csv.svg", name: "CSV" },
  { icon: "/icons/json.svg", name: "JSON" },
  { icon: "/icons/xml.svg", name: "XML" },
  { icon: "/icons/google-drive.svg", name: "Google Drive" },
  { icon: "/icons/ms-office.svg", name: "Microsoft Office" },
  { icon: "/icons/github.svg", name: "Github" },
];

// Row 2: OpenRouter Top AI Models (one per model family, company logos)
const row2Base: Integration[] = [
  { icon: "/icons/claude.svg", name: "Claude" },
  { icon: "/icons/openai.svg", name: "GPT", invert: true },
  { icon: "/icons/gemini.svg", name: "Gemini" },
  { icon: "/icons/deepseek.svg", name: "DeepSeek" },
  { icon: "/icons/llama.svg", name: "Llama" },
  { icon: "/icons/mistral.svg", name: "Mistral" },
  { icon: "/icons/qwen.svg", name: "Qwen" },
  { icon: "/icons/cohere.svg", name: "Command R" },
  { icon: "/icons/grok.svg", name: "Grok" },
  { icon: "/icons/microsoft.svg", name: "Phi" },
  { icon: "/icons/gemma.svg", name: "Gemma" },
  { icon: "/icons/amazon.svg", name: "Nova" },
  { icon: "/icons/databricks.svg", name: "DBRX" },
  { icon: "/icons/yi.svg", name: "Yi" },
  { icon: "/icons/zhipu.svg", name: "GLM" },
  { icon: "/icons/stepfun.svg", name: "Step" },
];

export default function IntegrationsSection() {
  const row1 = repeat(row1Base, 2);
  const row2 = repeat(row2Base, 2);

  return (
    <section
      id="integrations"
      className="relative w-full py-20 md:py-28 lg:py-32 bg-slate-950 flex items-center justify-center overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-full mx-auto w-full px-0 relative z-10">
        {/* Header */}
        <header className="flex flex-col mb-14 lg:mb-20 gap-y-5 items-center text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-2">
            <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-sm text-violet-300 font-medium tracking-wide">
              Ecosystem
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-tight">
            Powering workflows across{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              your entire stack
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/50 whitespace-nowrap">
            From LLMs to databases, from messaging to analytics — connect
            everything your AI needs
          </p>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white">
                500+
              </span>
              <span className="text-xs text-white/40 uppercase tracking-widest">
                AI Integrations
              </span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white">
                50+
              </span>
              <span className="text-xs text-white/40 uppercase tracking-widest">
                Categories
              </span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white">
                99.9%
              </span>
              <span className="text-xs text-white/40 uppercase tracking-widest">
                Uptime
              </span>
            </div>
          </div>
        </header>

        {/* 2-Row Marquee */}
        <div className="overflow-hidden mb-16 lg:mb-20 space-y-3 md:space-y-4">
          {/* Row 1 - Tools & Connectors (scroll left) */}
          <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max gap-3 md:gap-4 animate-scroll-left">
              {row1.map((integration, index) => (
                <IntegrationCard
                  key={`row1-${index}`}
                  {...integration}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Row 2 - OpenRouter AI Models (scroll right) */}
          <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max gap-3 md:gap-4 animate-scroll-right">
              {row2.map((integration, index) => (
                <IntegrationCard
                  key={`row2-${index}`}
                  {...integration}
                  index={index + 5}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 px-4">
          <Button
            asChild
            size="lg"
            className="relative bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold rounded-xl px-8 py-6 text-base shadow-lg shadow-violet-600/25 transition-all hover:shadow-xl hover:shadow-violet-500/30 hover:scale-105"
          >
            <Link href="#integrations">Explore all integrations</Link>
          </Button>
          <p className="text-sm text-white/30">
            No credit card required to get started
          </p>
        </div>
      </div>
    </section>
  );
}

const accentColors = [
  "group-hover:border-blue-500/60 group-hover:shadow-blue-500/15",
  "group-hover:border-violet-500/60 group-hover:shadow-violet-500/15",
  "group-hover:border-purple-500/60 group-hover:shadow-purple-500/15",
  "group-hover:border-cyan-500/60 group-hover:shadow-cyan-500/15",
  "group-hover:border-pink-500/60 group-hover:shadow-pink-500/15",
  "group-hover:border-emerald-500/60 group-hover:shadow-emerald-500/15",
  "group-hover:border-amber-500/60 group-hover:shadow-amber-500/15",
  "group-hover:border-rose-500/60 group-hover:shadow-rose-500/15",
];

const IntegrationCard = ({
  icon,
  name,
  label,
  color,
  invert,
  index,
}: Integration & { index: number }) => {
  const colorClass = accentColors[index % accentColors.length];

  return (
    <div className="group relative flex flex-col items-center gap-2">
      <div
        className={`flex h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 md:p-4 transition-all duration-300 hover:scale-110 hover:bg-white/[0.07] ${colorClass} hover:shadow-lg cursor-pointer`}
      >
        {icon ? (
          <Image
            src={icon}
            alt={name}
            width={40}
            height={40}
            className={`w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity ${invert ? "invert" : ""}`}
            unoptimized
          />
        ) : (
          <span
            className="font-bold text-[10px] md:text-xs lg:text-sm tracking-tight leading-none text-center opacity-80 group-hover:opacity-100 transition-opacity"
            style={{ color: color || "#a78bfa" }}
          >
            {label}
          </span>
        )}
      </div>
      <span className="text-[10px] md:text-xs text-white/25 group-hover:text-white/60 transition-colors duration-300 font-medium truncate max-w-[96px] text-center">
        {name}
      </span>
    </div>
  );
};
