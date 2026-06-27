export default function Network() {
  const links = [
    { name: "SPOTIFY", url: "https://open.spotify.com/artist/1GM9nGfwFjiwZtgIWO3sh2" },
    { name: "SOUNDCLOUD", url: "https://soundcloud.com/gwizztheslayer" },
    { name: "YOUTUBE", url: "https://www.youtube.com/@gwizztheslayer" },
    { name: "INSTAGRAM", url: "https://www.instagram.com/gwizztheslayer" },
    { name: "TIKTOK", url: "https://www.tiktok.com/@gwizztheslayer" },
    { name: "X / TWITTER", url: "https://x.com/gwizz_theslayer" },
  ];

  return (
    <section id="network" className="py-24 px-6 border-t border-toxic/30 bg-void">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-4">
        {links.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="border border-toxic/20 p-6 flex flex-col justify-between items-center hover:bg-toxic hover:text-void transition-colors group">
            <span className="font-bold tracking-widest text-sm mb-2">{link.name}</span>
            <span className="text-toxic group-hover:text-void">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}