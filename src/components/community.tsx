import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import Image from "next/image";

const communityItems = [
  {
    title: "Discord Community",
    description:
      "Join our active community for real-time discussions, support, and collaboration.",
    icon: (
      <Image src={"/discord.svg"} alt="discordicon" width={50} height={50} />
    ),
    stats: "",
    bgColor: "bg-indigo-600/20 border-indigo-500/30",
    href: "#",
  },
  {
    title: "X Updates",
    description:
      "Follow us for the latest updates, tips, and AI workflow best practices.",
    icon: <Image src={"/X.svg"} alt="discordicon" width={40} height={40} />,
    stats: "",
    bgColor: "bg-blue-600/20 border-blue-500/30",
    href: "#",
  },
  {
    title: "YouTube Tutorials",
    description:
      "Watch comprehensive tutorials and learn advanced workflow automation techniques.",
    icon: <Youtube className="w-8 h-8" />,
    stats: "",
    bgColor: "bg-red-600/20 border-red-500/30",
    href: "#",
  },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-16 md:py-32 bg-black">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Connect with fellow AI enthusiasts, get support, and stay updated
            with the latest features and tutorials.
          </p>
        </div>

        {/* Community Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {communityItems.map((item, index) => (
            <div
              key={index}
              className={`relative group p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${item.bgColor}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-white">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                <span className="text-white/60 text-sm font-medium mb-4">
                  {item.stats}
                </span>
                <Link
                  href={item.href}
                  className="text-white/90 hover:text-white text-sm font-medium underline underline-offset-4 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Join the Community?
          </h3>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Start building amazing AI workflows with our supportive community of
            developers and creators.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-3"
            >
              <Image
                src={"/discord.svg"}
                alt="discordicon"
                width={20}
                height={20}
              />
              Join Discord Community
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
