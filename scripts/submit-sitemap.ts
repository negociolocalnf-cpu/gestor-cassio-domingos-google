/**
 * Submete o sitemap.xml ao Google Search Console via API oficial.
 *
 * NOTA: O antigo "ping" do Google (google.com/ping?sitemap=...) foi
 * descontinuado em junho/2023 e não funciona mais. A forma correta de
 * forçar o Google a reprocessar o sitemap é a API sitemaps.submit do
 * Search Console, usada abaixo através do connector gateway da Lovable.
 *
 * Pré-requisitos (já configurados ao conectar o Google Search Console):
 *   - LOVABLE_API_KEY
 *   - GOOGLE_SEARCH_CONSOLE_API_KEY
 *   - O site precisa estar VERIFICADO na conta conectada.
 *
 * Uso:  bun run scripts/submit-sitemap.ts
 */

const SITE_URL = "https://gestor-cassio-domingos-google.lovable.app/";
const SITEMAP_URL = `${SITE_URL}sitemap.xml`;

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
const GSC_KEY = process.env.GOOGLE_SEARCH_CONSOLE_API_KEY;

if (!LOVABLE_API_KEY || !GSC_KEY) {
  console.warn(
    "⚠️  Pulando submissão do sitemap: faltam LOVABLE_API_KEY e/ou GOOGLE_SEARCH_CONSOLE_API_KEY.\n" +
      "   Conecte o Google Search Console no projeto para habilitar.",
  );
  process.exit(0);
}

const headers = {
  Authorization: `Bearer ${LOVABLE_API_KEY}`,
  "X-Connection-Api-Key": GSC_KEY,
  "Content-Type": "application/json",
};

async function submitSitemap() {
  const encodedSite = encodeURIComponent(SITE_URL);
  const encodedSitemap = encodeURIComponent(SITEMAP_URL);
  const url = `${GATEWAY}/webmasters/v3/sites/${encodedSite}/sitemaps/${encodedSitemap}`;

  const res = await fetch(url, { method: "PUT", headers });

  if (res.status === 200 || res.status === 204) {
    console.log(`✅ Sitemap submetido com sucesso: ${SITEMAP_URL}`);
    return;
  }

  const body = await res.text();
  if (res.status === 403) {
    console.warn(
      "⚠️  403: o site ainda não está verificado nesta conta do Google Search Console.\n" +
        "   Verifique a propriedade no Search Console e publique o site (a meta tag\n" +
        "   de verificação já está no index.html) antes de reenviar o sitemap.",
    );
  } else {
    console.warn(`⚠️  Não foi possível submeter o sitemap (${res.status}): ${body}`);
  }
  // Nunca quebra o build — apenas avisa.
}

submitSitemap();
