import { inject, track } from "@vercel/analytics";

// O medidor só roda no site publicado — na prévia ele fica desligado
// para não contar acessos de teste.
const ativo = () => import.meta.env.PROD;

let ligado = false;

/** Liga o contador de visitas do site. */
export const initAnalytics = () => {
  if (ligado || !ativo()) return;
  ligado = true;
  inject();
};

/** Registra uma ação importante: clique no WhatsApp, abertura do guia etc. */
export const trackEvent = (name: string, props?: Record<string, string>) => {
  if (!ativo()) return;
  try {
    track(name, props);
  } catch {
    /* se o medidor falhar, o site continua funcionando normalmente */
  }
};
