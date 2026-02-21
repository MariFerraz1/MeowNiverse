const cppCode = `#include <iostream>
#include <string>

extern "C" float calculate_dilation(float speed);

class AstroCat {
public:
    std::string name;
    float velocity; // Fraksi dari kecepatan cahaya (0.0 - 1.0)

    AstroCat(std::string n, float v) : name(n), velocity(v) {}

    void launch() {
        std::cout << "--- Meluncurkan " << name
                  << " ke Meow-niverse ---" << std::endl;
        float dilation = calculate_dilation(velocity);
        std::cout << "Kecepatan: " << velocity << "c" << std::endl;
        std::cout << "Dilatasi Waktu (Faktor Einstein): "
                  << dilation << "x" << std::endl;
        std::cout << "Kucing ini menua lebih lambat "
                  << "dari kucing bumi!" << std::endl;
    }
};

int main() {
    AstroCat mimi("Meow-bert Einstein", 0.85f);
    mimi.launch();
    return 0;
}`;

const asmCode = `; Menghitung faktor dilatasi waktu Einstein
; Lorentz Factor: γ = 1 / √(1 - v²)

section .text
global calculate_dilation

calculate_dilation:
    ; Input: xmm0 = velocity (v)
    ; Rumus disederhanakan: 1 / (1 - v)

    movss xmm1, [one]       ; Muat angka 1.0
    subss xmm1, xmm0        ; 1.0 - v
    movss xmm2, [one]       ; Muat angka 1.0 lagi
    divss xmm2, xmm1        ; 1.0 / (1.0 - v)
    movss xmm0, xmm2        ; Kembalikan hasil di xmm0
    ret

section .data
    one dd 1.0`;

const compileSteps = [
  { cmd: "nasm -f elf64 physics.asm -o physics.o", desc: "Kompilasi Assembly" },
  { cmd: "g++ main.cpp physics.o -o astrocat", desc: "Link dengan C++" },
  { cmd: "./astrocat", desc: "Jalankan simulasi" },
];

const CodeBlock = ({
  title,
  filename,
  language,
  code,
}: {
  title: string;
  filename: string;
  language: string;
  code: string;
}) => (
  <div className="glass-panel overflow-hidden">
    <div className="flex items-center justify-between px-5 py-3 border-b border-border/30">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
        </div>
        <span className="font-mono text-xs text-muted-foreground">{filename}</span>
      </div>
      <span className="font-mono text-[10px] tracking-wider text-muted-foreground/50 uppercase">
        {language}
      </span>
    </div>
    <div className="p-5 overflow-x-auto">
      <pre className="font-mono text-xs md:text-sm leading-relaxed text-foreground/85 whitespace-pre">
        {code}
      </pre>
    </div>
  </div>
);

const SourceCodeSection = () => {
  return (
    <section id="source-code" className="relative py-32">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-primary/70 uppercase mb-4">
            // Source Code
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mesin Fisika Kucing
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            C++ menangani logika objek AstroCat, sementara Assembly x86-64
            mengoptimalkan kalkulasi faktor Lorentz untuk dilatasi waktu
            relativistik.
          </p>
        </div>

        {/* Code blocks */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <CodeBlock
            title="C++ Logic"
            filename="main.cpp"
            language="C++"
            code={cppCode}
          />
          <CodeBlock
            title="Assembly Optimization"
            filename="physics.asm"
            language="x86-64 ASM"
            code={asmCode}
          />
        </div>

        {/* Compile steps */}
        <div className="glass-panel p-6 max-w-2xl">
          <p className="font-mono text-xs text-muted-foreground/60 mb-4 tracking-wider uppercase">
            // Kompilasi & Jalankan
          </p>
          <div className="space-y-3">
            {compileSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="font-mono text-xs text-primary/50 mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <code className="font-mono text-sm text-primary">{step.cmd}</code>
                  <p className="font-mono text-xs text-muted-foreground/50 mt-0.5">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SourceCodeSection;
