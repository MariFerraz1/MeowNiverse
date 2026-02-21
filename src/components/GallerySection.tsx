import moonCat from "@/assets/moon-cat.jpg";
import stationCat from "@/assets/station-cat.jpg";
import heroCat from "@/assets/hero-cat.jpg";

const images = [
  {
    src: heroCat,
    alt: "Tuxedo cat floating in deep space nebula with NASA helmet",
    caption: "Subjek #001 — Misi Deep Space",
    tag: "EVA",
  },
  {
    src: moonCat,
    alt: "Ginger cat in space suit on lunar surface",
    caption: "Subjek #002 — Eksplorasi Lunar",
    tag: "MOON",
  },
  {
    src: stationCat,
    alt: "Black cat floating inside space station near Earth window",
    caption: "Subjek #003 — Stasiun Orbital",
    tag: "ISS",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-primary/70 uppercase mb-4">
            // Mission Log
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galeri Misi
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Dokumentasi visual dari subjek-subjek uji coba Meow-niverse.
            Setiap kucing dilengkapi dengan sensor fisika untuk mengukur
            dilatasi waktu secara real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="glass-panel overflow-hidden group">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <span className="absolute top-4 right-4 font-mono text-[10px] tracking-widest text-primary/60 border border-primary/20 px-2 py-0.5 rounded bg-background/40 backdrop-blur-sm">
                  {img.tag}
                </span>
              </div>
              <div className="p-5">
                <p className="font-mono text-sm text-foreground/80">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
