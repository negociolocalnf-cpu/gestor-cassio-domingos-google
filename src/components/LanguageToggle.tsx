import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { Lang } from "@/i18n/translations";

const options: { code: Lang; label: string; flag: string }[] = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

const LanguageToggle = ({ scrolled }: { scrolled: boolean }) => {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = options.find((o) => o.code === lang)!;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Idioma / Language"
        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors ${
          scrolled
            ? "border-border text-foreground hover:bg-muted"
            : "border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
        }`}
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase">{current.code}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-card py-1 shadow-lg">
          {options.map((o) => (
            <button
              key={o.code}
              onClick={() => {
                setLang(o.code);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between px-4 py-2.5 text-sm text-card-foreground transition-colors hover:bg-muted"
            >
              <span className="flex items-center gap-2">
                <span>{o.flag}</span>
                {o.label}
              </span>
              {lang === o.code && <Check className="h-4 w-4 text-secondary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
