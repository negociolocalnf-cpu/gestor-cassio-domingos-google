import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";

const BASE = "https://gestor-cassio-domingos-google.vercel.app";

const META = {
  pt: {
    title: "Cássio Domingos | Gestor Comercial · SEO Local e Google Meu Negócio",
    desc: "Destaque sua empresa no topo do Google sem investir em tráfego pago. Mais de 100 empresas atendidas. Especialista em SEO local e Google Meu Negócio.",
    job: "Gestor Comercial",
    plo: "Método P.L.O. — Posicionamento Local Orgânico",
    nfTitle: "Página não encontrada | Cássio Domingos",
    nfDesc: "Esta página não existe. Volte ao início para conhecer os serviços de SEO local e Google Meu Negócio.",
  },
  en: {
    title: "Cássio Domingos | Sales Manager · Local SEO & Google Business Profile",
    desc: "Get your business to the top of Google without paid ads. Over 100 businesses served. Specialist in local SEO and Google Business Profile.",
    job: "Sales Manager",
    plo: "P.L.O. Method — Organic Local Positioning",
    nfTitle: "Page not found | Cássio Domingos",
    nfDesc: "This page does not exist. Go back home to see local SEO and Google Business Profile services.",
  },
  es: {
    title: "Cássio Domingos | Gestor Comercial · SEO Local y Perfil de Empresa en Google",
    desc: "Destaque su empresa en lo más alto de Google sin invertir en anuncios. Más de 100 empresas atendidas. Especialista en SEO local y Google Business Profile.",
    job: "Gestor Comercial",
    plo: "Método P.L.O. — Posicionamiento Local Orgánico",
    nfTitle: "Página no encontrada | Cássio Domingos",
    nfDesc: "Esta página no existe. Vuelva al inicio para conocer los servicios de SEO local y Google Business Profile.",
  },
} as const;

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const SeoHead = () => {
  const { pathname } = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    const m = META[lang];
    const isHome = pathname === "/";
    const title = isHome ? m.title : m.nfTitle;
    const desc = isHome ? m.desc : m.nfDesc;
    const url = `${BASE}${pathname}`;

    document.title = title;
    setMeta("name", "description", desc);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "robots", isHome ? "index, follow" : "noindex");

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = url;

    // Localize structured data
    const ld = document.head.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
    if (ld) {
      try {
        const data = JSON.parse(ld.textContent || "{}");
        for (const node of data["@graph"] ?? []) {
          if (node["@type"] === "Person") node.jobTitle = m.job;
          if (node["@type"] === "Service") node.name = m.plo;
          if (node["@type"] === "ProfilePage") {
            node.name = `Cássio Domingos | ${m.job}`;
            node.inLanguage = lang === "pt" ? "pt-BR" : lang;
          }
        }
        ld.textContent = JSON.stringify(data);
      } catch {
        /* keep static markup */
      }
    }
  }, [pathname, lang]);

  return null;
};

export default SeoHead;
