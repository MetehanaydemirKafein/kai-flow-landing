const members = [
  {
    name: "Baha Kızıl",
    role: "AI Engineer",
    avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
    position: "Engineer",
  },
  {
    name: "Doganay Balaban",
    role: "Frontend Dev",
    avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
    position: "Engineer",
  },
  {
    name: "Mehmet Metehan Aydemir",
    role: "AI Engineer",
    avatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
    position: "Leadership",
  },
  {
    name: "Ali Kemal Çalak",
    role: "Backend Dev",
    avatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
    position: "Engineer",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-12 md:py-32 bg-black">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl text-white">
          Our team
        </h2>

        <div>
          <h3 className="mb-6 text-lg font-medium text-white">Leadership</h3>
          <div className="grid grid-cols-2 gap-4 border-t border-white/20 py-6 md:grid-cols-4">
            {members
              .filter((member) => member.position === "Leadership")
              .map((member, index) => (
                <div key={index}>
                  <div className="bg-white/5 size-20 rounded-full border border-white/20 p-0.5 shadow shadow-white/5">
                    <img
                      className="aspect-square rounded-full object-cover"
                      src={member.avatar}
                      alt={member.name}
                      height="460"
                      width="460"
                      loading="lazy"
                    />
                  </div>
                  <span className="mt-2 block text-sm text-white">
                    {member.name}
                  </span>
                  <span className="text-white/70 block text-xs">
                    {member.role}
                  </span>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-6 text-lg font-medium text-white">Engineering</h3>
          <div
            data-rounded="full"
            className="grid grid-cols-2 gap-4 border-t border-white/20 py-6 md:grid-cols-4"
          >
            {members
              .filter((member) => member.position === "Engineer")
              .map((member, index) => (
                <div key={index}>
                  <div className="bg-white/5 size-20 rounded-full border border-white/20 p-0.5 shadow shadow-white/5">
                    <img
                      className="aspect-square rounded-full object-cover"
                      src={member.avatar}
                      alt={member.name}
                      height="460"
                      width="460"
                      loading="lazy"
                    />
                  </div>
                  <span className="mt-2 block text-sm text-white">
                    {member.name}
                  </span>
                  <span className="text-white/70 block text-xs">
                    {member.role}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
