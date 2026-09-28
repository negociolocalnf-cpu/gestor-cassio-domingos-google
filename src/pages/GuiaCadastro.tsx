import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  CheckCircle2,
  ClipboardList,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Star,
  XCircle,
} from "lucide-react";
import DarkModeToggle from "@/components/DarkModeToggle";
import LanguageToggle from "@/components/LanguageToggle";

const WA = "https://wa.me/5522981605225";

/* ───────── CONTEÚDO ───────── */
const passos = [
  {
    icon: ClipboardList,
    title: "Reúna as informações da empresa",
    desc: "Antes de abrir o cadastro, tenha em mãos: o nome da empresa exatamente como aparece na fachada, a categoria principal (ex.: “despachante”, “academia”), o endereço completo ou a região atendida, telefone, site e os horários de funcionamento. Faltando qualquer um desses, o cadastro trava no meio.",
    dica: "Use o mesmo telefone e o mesmo endereço em todos os lugares da internet — site, Instagram, recibos. Inconsistência confunde o Google.",
  },
  {
    icon: Search,
    title: "Entre no perfil da empresa, não no seu e-mail pessoal",
    desc: "Acesse business.google.com e faça login com a conta Google que representa a empresa. Se ainda não existe uma, crie uma conta só para isso (ex.: contato@suaempresa.com.br). Quem usa a conta pessoal depois perde o acesso ao perfil ao trocar de funcionário ou vender o negócio.",
    dica: "Guarde esse login em local seguro. É a chave do perfil — sem ele, não dá para recuperar depois.",
  },
  {
    icon: MapPin,
    title: "Comece o cadastro e escolha a categoria certa",
    desc: "Clique em “Gerenciar agora” ou “Adicionar sua empresa”, informe nome e categoria. A categoria principal é a mais importante de todo o cadastro: é ela que decide em quais buscas sua empresa aparece. Escolha a mais específica que descreve o que você faz, e não a mais ampla.",
    dica: "Se não existir a categoria exata do seu negócio, escolha a mais próxima do serviço principal e complemente as outras nas opções de serviços.",
  },
  {
    icon: MapPin,
    title: "Defina o endereço ou a área de atendimento",
    desc: "Empresa com porta aberta (loja, clínica, escritório): informe o endereço real. Quem atende na casa do cliente (encanador, personal, contador): escolha “Área de atendimento”, defina cidades e bairros e marque para ocultar o endereço — assim ele não fica público, mas você continua aparecendo nas buscas daquelas regiões.",
    dica: "Nunca use endereço de caixa postal, coworking sem sala ou endereço de parente. É a causa número um de perfil suspenso.",
  },
  {
    icon: Phone,
    title: "Confirme telefone e site",
    desc: "Informe o telefone que atende de verdade (de preferência o WhatsApp comercial) e o endereço do site. Se você ainda não tem site, pode usar um perfil de rede social ou uma página simples enquanto decide — o importante é que o contato funcione.",
    dica: "Teste o número: se ele demora a atender ou cai em caixa postal, o Google entende isso como sinal ruim para o cliente.",
  },
  {
    icon: ShieldCheck,
    title: "Verifique o perfil com o Google",
    desc: "Sem verificação, o perfil não aparece nas buscas. O Google oferece o método disponível para o seu caso: gravação de vídeo do estabelecimento, ligação, mensagem de texto, cartão postal ou busca simples. O tempo varia de poucos minutos a até 14 dias quando é cartão postal.",
    dica: "Faça a verificação com o dono ou responsável no local. Vídeo e ligação são os caminhos mais rápidos quando disponíveis.",
  },
  {
    icon: ClipboardList,
    title: "Complete tudo: descrição, serviços e horários",
    desc: "Escreva a descrição dizendo o que você faz, para quem e em qual cidade (o campo aceita até 750 caracteres). Cadastre cada serviço com nome e explicação, preencha os atributos que se aplicam (acessibilidade, pagamento por cartão, atendimento em horário estendido) e revise os horários, incluindo os de feriado.",
    dica: "Perfis completos recebem mais visualizações que perfis incompletos. Trate a descrição como uma apresentação de 30 segundos.",
  },
  {
    icon: Camera,
    title: "Suba fotos reais da empresa",
    desc: "Fachada (para o cliente te achar), interior, equipe em ação, produtos e entregas. Comece com pelo menos 8 a 10 fotos boas, de dia e sem tremer, e defina a fachada como foto de capa. Fotos antigas ou de banco de imagens passam desconfiança.",
    dica: "Adicione fotos novas todo mês. Perfil com foto recente é lido como empresa ativa.",
  },
  {
    icon: Star,
    title: "Comece a receber avaliações",
    desc: "Peça o depoimento de clientes que já atenderam bem — de preferência por WhatsApp, com o link direto do seu perfil. Responda todas as avaliações, inclusive as negativas, com calma e solução. Nunca compre avaliações nem peça a familiares em massa: o Google detecta e remove.",
    dica: "Peça com o cliente ainda satisfeito, logo após a entrega. Pedido no dia seguinte tem muito mais resposta.",
  },
  {
    icon: Clock,
    title: "Mantenha o perfil vivo",
    desc: "Publique novidades e promoções na aba “Novidades”, responda às perguntas que os clientes fazem no perfil, ajuste horários em feriados e confira mensalmente se o perfil continua ativo e sem avisos. Perfil abandonado perde espaço para o concorrente ativo.",
    dica: "Reserve 15 minutos por semana. É o que separa quem aparece de quem some do mapa.",
  },
];

const erros = [
  "Colocar palavra-chave no nome (“Melhor Despachante de Nova Friburgo”) — o nome precisa ser o real da empresa.",
  "Escolher categoria genérica demais e não aparecer nas buscas certas.",
  "Usar endereço falso, de caixa postal ou de terceiros.",
  "Deixar o perfil sem fotos, sem descrição ou sem serviços.",
  "Cadastrar dois perfis para a mesma empresa.",
  "Ignorar avaliações negativas ou nunca responder nenhuma.",
  "Publicar o telefone de um jeito no site e de outro no perfil.",
];

const checklist = [
  "Nome real da empresa, sem palavras extras",
  "Categoria principal escolhida com cuidado",
  "Endereço real ou área de atendimento definida",
  "Telefone que atende de verdade",
  "Perfil verificado com o Google",
  "Descrição preenchida com serviço e cidade",
  "Pelo menos 8 fotos reais publicadas",
  "Horários conferidos, inclusive feriados",
  "Link de avaliação enviado a 5 clientes",
];

/* ───────── CABEÇALHO ───────── */
const Header = () => (
  <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-lg">
    <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3.5 lg:px-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-secondary">
        <ArrowLeft className="h-4 w-4" /> Voltar ao início
      </Link>
      <div className="flex items-center gap-3">
        <LanguageToggle scrolled />
        <DarkModeToggle scrolled />
      </div>
    </div>
  </header>
);

/* ───────── CHECKLIST INTERATIVO ───────── */
const Checklist = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [marcados, setMarcados] = useState<boolean[]>(() => Array(checklist.length).fill(false));
  const feitos = marcados.filter(Boolean).length;
  const pct = Math.round((feitos / checklist.length) * 100);

  return (
    <section ref={ref} className="rounded-2xl border border-border bg-card p-7" style={{ boxShadow: "var(--card-shadow)" }}>
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-xl font-bold text-foreground">Checklist do cadastro</h2>
        <span className="shrink-0 font-display text-sm font-bold text-secondary">{feitos}/{checklist.length}</span>
      </div>
      <p className="mt-1.5 text-sm text-muted-foreground">Marque conforme for fazendo. Dá para voltar aqui depois.</p>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: "var(--cta-gradient)" }}
        />
      </div>

      <ul className="mt-5 space-y-2.5">
        {checklist.map((item, i) => (
          <li key={item}>
            <button
              type="button"
              onClick={() => setMarcados((atual) => atual.map((v, j) => (j === i ? !v : v)))}
              aria-pressed={marcados[i]}
              className="flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-muted/60"
            >
              <CheckCircle2
                className={`mt-0.5 h-5 w-5 shrink-0 transition-colors ${
                  marcados[i] ? "text-secondary" : "text-muted-foreground/40"
                }`}
              />
              <span
                className={`text-sm leading-relaxed transition-colors ${
                  marcados[i] ? "text-muted-foreground line-through" : "text-foreground"
                }`}
              >
                {item}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

/* ───────── PÁGINA ───────── */
const GuiaCadastro = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Abertura */}
      <section className="px-5 py-16 lg:px-8" style={{ background: "var(--hero-gradient)" }}>
        <div className="mx-auto max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary"
          >
            Guia gratuito · 7 minutos de leitura
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 font-display text-3xl font-bold leading-tight text-primary-foreground md:text-5xl"
          >
            Como cadastrar sua empresa no Google
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/60 md:text-lg"
          >
            O cadastro é gratuito e pode ser feito por qualquer dono de negócio. É ele que faz a empresa
            aparecer no mapa e na lista de profissionais perto de quem procura o seu serviço. Abaixo está o
            passo a passo completo, com o que o Google pede em cada etapa e os erros que fazem o perfil sumir.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="https://business.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-secondary-foreground"
            style={{ background: "var(--cta-gradient)" }}
          >
            Começar o cadastro <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </section>

      {/* Por que importa */}
      <section className="border-b border-border px-5 py-14 lg:px-8">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            { icon: Search, t: "Aparece onde a busca acontece", d: "Quem procura “perto de mim” vê o perfil antes de qualquer site." },
            { icon: MapPin, t: "É o seu endereço digital", d: "Mapa, horários, fotos e rota: tudo junto na primeira tela do Google." },
            { icon: Star, t: "Vende pela reputação", d: "Avaliações de clientes pesam mais que qualquer anúncio." },
          ].map((b, i) => (
            <motion.div
              key={b.t}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
              className="rounded-2xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <b.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground">{b.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Passo a passo */}
      <section ref={ref} className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">Passo a passo</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
            Dez etapas para o perfil ficar no ar
          </h2>

          <div className="mt-10 space-y-5">
            {passos.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-border bg-card p-7"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <p.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Etapa {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-foreground md:text-xl">{p.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground md:text-base">{p.desc}</p>
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-3 rounded-xl bg-secondary/5 border border-secondary/20 px-4 py-3">
                  <span className="mt-0.5 shrink-0 font-display text-xs font-bold uppercase tracking-widest text-secondary">
                    Dica
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/80">{p.dica}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Erros */}
      <section className="bg-muted/50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">Atenção</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
            O que faz o perfil ser suspenso ou desaparecer
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            O Googlesuspende perfis que parecem falsos ou que tentam ganhar posição de forma artificial. Cada item abaixo
            é um motivo real de bloqueio.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {erros.map((e) => (
              <li
                key={e}
                className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5"
              >
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                <span className="text-sm leading-relaxed text-foreground/85">{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Checklist */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Checklist />
        </div>
      </section>

      {/* CTA final */}
      <section className="px-5 py-16 lg:px-8" style={{ background: "var(--hero-gradient)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
            Fez tudo e a empresa ainda não aparece?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/60">
            Perfil verificado é só o começo. A posição no mapa depende de categoria, avaliações, fotos e
            constância. Se quiser, eu olho o seu perfil e digo exatamente o que está travando — sem custo.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-9 py-4 text-base font-bold text-secondary-foreground"
            style={{ background: "var(--cta-gradient)" }}
          >
            <MessageCircle className="h-5 w-5" /> Falar com o Cássio no WhatsApp
          </a>
          <p className="mt-4 text-sm text-primary-foreground/40">
            Atendimento a empresas de Nova Friburgo e região.
          </p>
        </div>
      </section>

      <footer className="border-t border-border bg-card py-8 px-5 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cássio Domingos ·{" "}
          <Link to="/" className="text-secondary hover:underline">
            Voltar ao início
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default GuiaCadastro;
