const theories = [
  {
    id: "01",
    title: "Dilatasi Waktu Kucing",
    formula: "γ = 1 / √(1 - v²/c²)",
    description:
      "Pada kecepatan 0.85c, waktu bagi kucing astronaut melambat. Satu tahun di luar angkasa setara dengan beberapa tahun di Bumi. Kucing kembali lebih muda dari pemiliknya.",
  },
  {
    id: "02",
    title: "Paradoks Kucing Schrödinger",
    formula: "|ψ⟩ = α|hidup⟩ + β|tidur⟩",
    description:
      "Dalam mekanika kuantum, kucing bisa berada dalam superposisi hidup dan tidur secara bersamaan, sampai kotak dibuka dan keadaan runtuh menjadi satu.",
  },
  {
    id: "03",
    title: "E = mc² (Energi Mendengkur)",
    formula: "E = m·purr²",
    description:
      "Energi yang dihasilkan dari dengkuran kucing sebanding dengan massa dikalikan frekuensi dengkuran kuadrat. Frekuensi optimal: 25-150 Hz.",
  },
  {
    id: "04",
    title: "Gravitasi Kotak Kardus",
    formula: "F = G·(m₁·m₂) / r²",
    description:
      "Kucing secara alami tertarik ke kotak kardus dengan gaya yang berbanding terbalik dengan kuadrat jarak. Fenomena ini dikenal sebagai 'Hukum Gravitasi Kardus'.",
  },
];

const QuantumSection = () => {
  return (
    <section id="quantum" className="relative py-32">
      <div className="absolute inset-0 nebula-glow opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-primary/70 uppercase mb-4">
            // Quantum Purring
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Teori Kuantum Kucing
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Mengeksplorasi titik temu antara fisika teoritis dan perilaku kucing.
            Terinspirasi oleh pemikiran Einstein dan Schrödinger.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {theories.map((t) => (
            <article key={t.id} className="glass-panel p-8 group hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-muted-foreground/40">
                  {t.id}
                </span>
                <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary/70 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t.title}
              </h3>
              <code className="inline-block font-mono text-sm text-accent mb-4">
                {t.formula}
              </code>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuantumSection;
