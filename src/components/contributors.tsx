"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

interface Stargazer {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

const Contributors = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [stargazers, setStargazers] = useState<Stargazer[]>([]);
  const [totalStars, setTotalStars] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contribRes, repoRes] = await Promise.all([
          fetch("https://api.github.com/repos/kafein-product-space/KAI-Fusion/contributors", {
            next: { revalidate: 0 }
          }),
          fetch("https://api.github.com/repos/kafein-product-space/KAI-Fusion", {
            next: { revalidate: 0 }
          }),
        ]);

        if (!contribRes.ok) throw new Error(`HTTP error! status: ${contribRes.status}`);
        if (!repoRes.ok) throw new Error(`HTTP error! status: ${repoRes.status}`);

        const contribData = await contribRes.json();
        const repoData = await repoRes.json();
        const stars = repoData.stargazers_count ?? 0;

        setContributors(contribData);
        setTotalStars(stars);

        // Fetch last page of stargazers to get the most recent ones
        const perPage = 30;
        const lastPage = Math.max(1, Math.ceil(stars / perPage));
        const starRes = await fetch(
          `https://api.github.com/repos/kafein-product-space/KAI-Fusion/stargazers?per_page=${perPage}&page=${lastPage}`,
          {
            next: { revalidate: 0 }
          }
        );
        if (starRes.ok) {
          const starData: Stargazer[] = await starRes.json();
          setStargazers(starData.slice(-10).reverse());
        }

        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section id="contributors" className="bg-black py-16 md:py-20 relative flex items-center overflow-hidden scroll-mt-16">
        <div className="container z-10 mx-auto">
          <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-white">
              Our Contributors
            </h2>
            <p className="text-center mt-5 opacity-75 text-white/70">
              Loading...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="contributors" className="bg-black py-16 md:py-20 relative flex items-center overflow-hidden scroll-mt-16">
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
    <section id="contributors" className="bg-black py-16 md:py-20 relative overflow-hidden scroll-mt-16">
      <div className="container z-10 mx-auto">
        {/* Contributors */}
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
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
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

        {/* Stargazers */}
        {stargazers.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center max-w-[540px] mx-auto mt-24"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-yellow-300 font-medium">
                  {totalStars > 0 ? `${totalStars} Stars` : "Stargazers"}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-white">
                Recent Stargazers
              </h2>
              <p className="text-center mt-5 opacity-75 text-white/70">
                Thanks to everyone who starred the project
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 max-w-6xl mx-auto"
            >
              {stargazers.map((user, index) => (
                <motion.a
                  key={user.id}
                  href={user.html_url}
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
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-yellow-500/5 hover:border-yellow-500/20 transition-all duration-300 group"
                >
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <Image
                      src={user.avatar_url}
                      alt={user.login}
                      fill
                      className="rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1 truncate">
                    {user.login}
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-yellow-400/60">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-xs">Starred</span>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center mt-10"
            >
              <a
                href="https://github.com/kafein-product-space/KAI-Fusion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-yellow-300 hover:border-yellow-500/30 hover:bg-yellow-500/5 transition-all duration-300 text-sm font-medium"
              >
                <Star className="w-4 h-4" />
                Star on GitHub
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Contributors;
