"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

const Contributors = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/kafein-product-space/KAI-Fusion/contributors"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setContributors(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching contributors:", error);
        setError("Contributors yüklenirken bir hata oluştu");
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  if (loading) {
    return (
      <section id="contributors" className="bg-black my-20 relative">
        <div className="container z-10 mx-auto">
          <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-white">
              Our Contributors
            </h2>
            <p className="text-center mt-5 opacity-75 text-white/70">
              Contributors yükleniyor...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="contributors" className="bg-black my-20 relative">
        <div className="container z-10 mx-auto">
          <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-white">
              Our Contributors
            </h2>
            <p className="text-center mt-5 opacity-75 text-red-400">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contributors" className="bg-black my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-white">
            Our Contributors
          </h2>
          <p className="text-center mt-5 opacity-75 text-white/70">
            Meet the amazing people who make KAI Flow possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 max-w-6xl mx-auto"
        >
          {contributors.map((contributor, index) => (
            <motion.a
              key={contributor.id}
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  fill
                  className="rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1 truncate">
                {contributor.login}
              </h3>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contributors;
