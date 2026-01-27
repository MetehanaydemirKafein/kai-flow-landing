import { OpenAI, Gemini, Claude } from "@/components/logos";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function IntegrationsSection() {
  return (
    <section id="integrations">
      <div className="bg-black py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          {/* Kartlar kutusu */}
          <div className="mx-auto max-w-md px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 px-6 pb-12 pt-3 shadow-xl">
              <Integration
                icon={<OpenAI />}
                name="OpenAI GPT"
                description="Generate, complete, or embed using OpenAI's GPT-4/3.5 models."
              />
              <Integration
                icon={<Gemini />}
                name="Gemini"
                description="Google’s powerful multimodal LLM for reasoning and generation."
              />
              <Integration
                icon={<Claude />}
                name="Anthropic Claude"
                description="Anthropic’s conversational LLM with strong safety alignment."
              />
            </div>
          </div>

          {/* Başlık ve CTA */}
          <div className="mx-auto mt-6 max-w-lg space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl text-white">
              Integrate with leading LLMs
            </h2>
            <p className="text-white/70">
              Plug in your favorite large language models to power workflows,
              decisions, and automations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const Integration = ({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-dashed border-white/10 py-3 last:border-b-0">
      <div className="bg-white/5 border-white/10 flex size-12 items-center justify-center rounded-lg border">
        {icon}
      </div>
      <div className="space-y-0.5">
        <h3 className="text-sm font-medium text-white">{name}</h3>
        <p className="text-white/70 line-clamp-1 text-sm">
          {description}
        </p>
      </div>
      <Button variant="outline" size="icon" aria-label="Add integration" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
        <Plus className="size-4" />
      </Button>
    </div>
  );
};
