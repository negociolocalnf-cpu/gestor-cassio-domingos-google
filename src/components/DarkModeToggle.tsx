import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const DarkModeToggle = ({ scrolled }: { scrolled: boolean }) => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Alternar tema"
      className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
        scrolled
          ? "text-muted-foreground hover:bg-muted"
          : "text-primary-foreground/70 hover:bg-primary-foreground/10"
      }`}
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

export default DarkModeToggle;
