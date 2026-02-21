import heroCat from "@/assets/hero-cat.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Nebula background */}
      <div className="absolute inset-0 nebula-glow" />

      {/* Hero image */}
      <div className="absolute inset-0">
        <img
          src={heroCat}
          alt="Astronaut cat floating in deep space nebula"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="font-mono text-xs tracking-[0.4em] text-primary/80 uppercase mb-6">
          // Initializing Meow-niverse Protocol
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
          <span className="block text-foreground">The</span>
          <span className="block text-glow text-primary mt-2">
            Meow-niverse
          </span>
          <span className="block text-foreground/80 text-3xl md:text-4xl lg:text-5xl mt-4 font-light tracking-wide">
            Explorer
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed mb-10 font-light">
          Simulasi fisika Einstein bertemu dengan keingintahuan kucing.
          Sebuah eksperimen dimana C++ dan Assembly menghitung dilatasi waktu
          untuk kucing astronaut.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#source-code"
            className="font-mono text-sm border border-primary/40 text-primary px-8 py-3 rounded hover:bg-primary/10 hover:border-primary/70 transition-all"
          >
            View Source
          </a>
          <a
            href="#quantum"
            className="font-mono text-sm text-muted-foreground hover:text-foreground px-8 py-3 transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Terminal line */}
        <div className="mt-16 font-mono text-xs text-muted-foreground/50">
          <span className="text-primary/50">$</span> g++ main.cpp physics.o -o
          astrocat && ./astrocat
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-primary/30" />
        <span className="font-mono text-[10px] text-muted-foreground/40 tracking-widest uppercase">
          scroll
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
