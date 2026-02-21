import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Mission", href: "#mission" },
    { label: "Source Code", href: "#source-code" },
    { label: "Quantum Purring", href: "#quantum" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-panel border-b border-border/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center group-hover:border-primary/80 transition-colors">
            <span className="text-primary font-mono text-xs font-bold">M</span>
          </div>
          <span className="font-mono text-sm tracking-widest text-foreground/90 uppercase">
            Meow-niverse
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#source-code"
            className="font-mono text-xs tracking-wider border border-primary/30 text-primary px-4 py-2 rounded hover:bg-primary/10 transition-all"
          >
            ./compile
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
