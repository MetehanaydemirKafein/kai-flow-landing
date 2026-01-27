import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        {/* Başlık ve açıklama */}
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-semibold">
            Automate Anything Visually — Code Optional
          </h2>
          <p className="max-w-sm sm:ml-auto">
            Drag, connect, and deploy workflows with zero boilerplate. Build
            fast with AI-assisted logic and deep app integrations.
          </p>
        </div>

        {/* Ortadaki görsel */}
        <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
          <div className="aspect-88/36 relative">
            <div className="bg-linear-to-t z-1 from-background absolute inset-0 to-transparent" />
            <Image
              src="/dbs.png"
              className="absolute inset-0 z-10"
              alt="workflow illustration"
              width={2797}
              height={1137}
            />
            <Image
              src="/dbs.png"
              className="hidden dark:block"
              alt="workflow illustration dark"
              width={2797}
              height={1137}
            />
            <Image
              src="/dbs.png"
              className="dark:hidden"
              alt="workflow illustration light"
              width={2797}
              height={1137}
            />
          </div>
        </div>

        {/* Özellik kutucukları */}
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Instant Workflows</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Launch and run automated flows with just a few clicks — no setup
              needed.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Scalable Logic</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Design complex workflows using logic, conditions, branches, and
              triggers.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4" />
              <h3 className="text-sm font-medium">Secure by Design</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Role-based access, data encryption, and audit logs keep your flows
              safe.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">AI Powered</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Use AI Agents to suggest, generate, or auto-complete workflow
              logic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
