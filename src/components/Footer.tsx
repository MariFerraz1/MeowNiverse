const Footer = () => (
  <footer className="relative border-t border-border/30 py-16">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-mono text-sm text-foreground/70 tracking-wider mb-2">
            THE MEOW-NIVERSE EXPLORER
          </p>
          <p className="text-sm text-muted-foreground/50 max-w-md">
            Sebuah eksperimen visual dan komputasional yang menggabungkan
            astrofisika relativistik dengan kucing astronaut.
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-xs text-muted-foreground/30">
            Compiled with g++ & nasm
          </p>
          <p className="font-mono text-xs text-muted-foreground/30 mt-1">
            Terinspirasi oleh A. Einstein & E. Schrödinger
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
