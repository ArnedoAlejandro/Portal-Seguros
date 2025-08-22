
import { zurich, laSegunda, sanCristobal, federacionPatronal } from "../assets";

type Compania = {
  id: string;
  nombre: string;
  logo: string;
  url?: string;
  alt?: string;
  caption?: string; // opcional: texto breve debajo del logo
};

const COMPANIAS: Compania[] = [
  { id: "comp1", nombre: "San Cristóbal",        logo: sanCristobal,        url: "https://www.sancristobal.com.ar/institucional/", alt: "San Cristóbal Seguros",        caption: "Coberturas para personas y empresas" },
  { id: "comp2", nombre: "Federación Patronal",  logo: federacionPatronal,  url: "https://www.fedpat.com.ar/",                    alt: "Federación Patronal Seguros",  caption: "Amplia red y trayectoria" },
  { id: "comp3", nombre: "Zurich",               logo: zurich,              url: "https://www.zurich.com.ar/",                    alt: "Zurich Argentina",             caption: "Presencia internacional" },
  { id: "comp4", nombre: "La Segunda",           logo: laSegunda,           url: "https://www.lasegunda.com.ar/home",            alt: "La Segunda Seguros",           caption: "Atención en todo el país" },
];

type Props = {
  titulo?: string;
  subtitulo?: string;
  companias?: Compania[];
  // Chips de confianza (texto corto): si no pasás nada, usa defaults
  chips?: string[];
  // CTA inferior
  ctaLabel?: string;
  ctaHref?: string;
  // Nota legal/regulatoria
  note?: string;
};

export default function Companias({
  titulo = "Compañías con las que trabajo",
  subtitulo = "Aliados que respaldan cada póliza con solidez y trayectoria.",
  companias = COMPANIAS,
  // chips = ["Atención en todo el país", "Siniestros 24/7", "Múltiples compañías", "Asesor registrado SSN"],
}: Props) {
  return (
    <section className="w-full bg-[#F7F9FE] py-14" id="companias">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <header className="text-center mb-7 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F2A66]">{titulo}</h2>
          <p className="mt-2 text-sm md:text-base text-[#1F2A66]/70">{subtitulo}</p>

          {/* Trust chips */}
          {/* {chips?.length ? (
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {chips.map((t, i) => (
                <li
                  key={i}
                  className="text-xs md:text-sm px-3 py-1 rounded-full bg-white border border-[#E6ECFF] text-[#1F2A66]/80 shadow-sm"
                >
                  {t}
                </li>
              ))}
            </ul>
          ) : null} */}
        </header>

        {/* Mobile: carrusel con scroll-snap */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-md:flex-col">
            {companias.map((c) => (
              <TarjetaLogo key={c.id} data={c} className="min-w-[78%] snap-center" showCaption />
            ))}
          </div>
        </div>

        {/* Desktop / Tablet: grilla 4 columnas */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {companias.map((c) => (
            <TarjetaLogo key={c.id} data={c} showCaption />
          ))}
        </div>
    
      </div>
    </section>
  );
}

function TarjetaLogo({
  data,
  className = "",
  showCaption = false,
}: {
  data: Compania;
  className?: string;
  showCaption?: boolean;
}) {
  const card =
    "group relative bg-white rounded-2xl border border-[#E6ECFF] shadow-[0_4px_18px_rgba(31,42,102,0.06)] hover:shadow-[0_8px_24px_rgba(31,42,102,0.10)] transition-all duration-300";
  const inner =
    "grid place-items-center h-28 md:h-32 px-6";

  const logo = (
    <img
      src={data.logo}
      alt={data.alt ?? data.nombre}
      loading="lazy"
      className="max-h-12 md:max-h-14 w-auto object-contain select-none grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      draggable={false}
    />
  );

  const block = (
    <div className={`${card} ${className}`}>
      <div className={inner}>
        {logo}
      </div>
      {/* Caption opcional */}
      {showCaption && data.caption ? (
        <div className="px-4 pb-3 -mt-3">
          <p className="text-center text-[11px] text-[#1F2A66]/60">{data.caption}</p>
        </div>
      ) : null}
      {/* línea sutil inferior */}
      <span className="pointer-events-none absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#1F2A66]/15 to-transparent" />
    </div>
  );

  return data.url ? (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ir al sitio de ${data.nombre}`}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2647D8] rounded-2xl"
      title={data.nombre}
    >
      {block}
    </a>
  ) : (
    <div
      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2647D8] rounded-2xl"
      title={data.nombre}
      aria-label={data.nombre}
      role="img"
    >
      {block}
    </div>
  );
}
