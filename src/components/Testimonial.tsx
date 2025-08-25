// src/components/Testimoniales.tsx


type Testimonial = {
  id: number;
  nombre: string;
  texto: string;
  rol?: string;
  image?: string; // /images/cliente1.jpg (opcional)
  rating?: number; // 1–5
  fuente?: string; // "Google Reviews", "WhatsApp", etc.
  fecha?: string; // "Mar 2025"
  ubicacion?: string; // "Córdoba, AR"
};

const TESTIMONIOS: Testimonial[] = [
  {
    id: 1,
    nombre: "María G.",
    rol: "Comerciante",
    texto:
      "Alejandro me asesoró con claridad para asegurar mi local. Siempre disponible para resolver dudas con claridad.",
    rating: 5,
    fuente: "Google Reviews",
    fecha: "Mar 2023",
    ubicacion: "Córdoba, AR",
  },
  {
    id: 2,
    nombre: "Carlos R.",
    rol: "Empleado público",
    texto:
      "Conseguí un seguro de auto más económico y con mejores coberturas. Destaco su transparencia y compromiso.",
    rating: 5,
    fuente: "Google Reviews",
    fecha: "Ene 2024",
    ubicacion: "Río Cuarto, AR",
  },
  {
    id: 3,
    nombre: "Valentina P.",
    rol: "Profesional independiente",
    texto:
      "Contraté un seguro de accidentes personales. Alejandro me explicó todo el alcance de la póliza de manera simple .",
    rating: 5,
    fuente: "Google Reviews",
    fecha: "Dic 2024",
    ubicacion: "Córdoba, AR",
  },
  {
    id: 4,
    nombre: "Martín L.",
    rol: "Padre de familia",
    texto:
      "El seguro de hogar fue fundamental para sentirnos tranquilos. Excelente atención y respuesta rápida ante consultas.",
    rating: 5,
    fuente: "Google Reviews",
    fecha: "Nov 2025",
    ubicacion: "Mendiolaza, AR",
  },
  {
    id: 5,
    nombre: "Lucía D.",
    rol: "Dueña de PyME",
    texto:
      "Me ayudó a proteger mi empresa con un integral de comercio. Denota confianza y el respaldo de trabajar con un broker.",
    rating: 5,
    fuente: "Google Reviews",
    fecha: "Sep 2025",
    ubicacion: "Villa María, AR",
  },
  {
    id: 6,
    nombre: "Sergio T.",
    rol: "Empresario de transporte",
    texto:
      "Contraté un seguro de flota de vehículos con el asesoramiento de Alejandro. Me brindó respaldo y soluciones a medida.",
    rating: 5,
    fuente: "Google Reviews",
    fecha: "Ago 2025",
    ubicacion: "Córdoba, AR",
  },
];

// ——— Helpers UI ———
function Stars({ value = 5 }: { value?: number }) {
  // redondeo a medias (4.5)
  const v = Math.max(0, Math.min(5, value));
  const full = Math.floor(v);
  const half = v - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  const Icon = ({ type }: { type: "full" | "half" | "empty" }) => {
    if (type === "full")
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          className="fill-[#F5B301]"
        >
          <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      );
    if (type === "half")
      return (
        <svg width="18" height="18" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#F5B301" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
            fill="url(#half)"
            stroke="#F5B301"
          />
        </svg>
      );
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        className="stroke-[#F5B301]"
      >
        <path
          d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
          fill="none"
          strokeWidth="1.2"
        />
      </svg>
    );
  };

  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`Valoración ${v} de 5`}
    >
      {Array.from({ length: full }).map((_, i) => (
        <Icon key={`f${i}`} type="full" />
      ))}
      {Array.from({ length: half }).map((_, i) => (
        <Icon key={`h${i}`} type="half" />
      ))}
      {Array.from({ length: empty }).map((_, i) => (
        <Icon key={`e${i}`} type="empty" />
      ))}
    </div>
  );
}

function Avatar({ name, src }: { name: string; src?: string }) {
  if (src)
    return (
      <img
        src={src}
        alt={name}
        className="w-10 h-10 rounded-full object-cover border border-[#2A3B8F]/15"
        loading="lazy"
        draggable={false}
      />
    );
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return (
    <div className="w-10 h-10 rounded-full grid place-items-center bg-[#E8EEFF] text-[#1F2A66] font-semibold border border-[#2A3B8F]/10">
      {initials}
    </div>
  );
}

// ——— Componente principal ———
export default function Testimoniales() {
  const ratings = TESTIMONIOS.map((t) => t.rating ?? 5);
  const avg =
    Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 10) / 10;

  return (
    <section id="testimoniales" className="bg-[#F7F9FE] py-16" >
      <div className="max-w-6xl mx-auto px-5">
        {/* encabezado con rating */}
        <header className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F2A66]">
            Testimoniales de Clientes
          </h2>
       
          <p className="mt-2 text-[#1F2A66]/70 text-sm md:text-base">
            Experiencias reales de personas y empresas que confiaron en mi
            asesoramiento.
          </p>
        </header>

        {/* grid desktop / carrusel mobile */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TESTIMONIOS.map((t) => (
            <article
              key={t.id}
              className="snap-center relative bg-white rounded-2xl border border-[#E6ECFF]
                        shadow-[0_8px_24px_rgba(31,42,102,0.06)] hover:shadow-[0_16px_32px_rgba(31,42,102,0.12)]
                        transition-all p-6 flex flex-col"
            >
              {/* borde/acento */}
              <span className="absolute inset-x-6 -top-px h-[2px]  rounded-full" />

              {/* comillas decorativas */}
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="absolute right-6 top-6 text-[#E8EEFF]"
                aria-hidden
              >
                <path
                  d="M7.17 6C4.88 6 3 7.88 3 10.17c0 2.29 1.88 4.17 4.17 4.17.23 0 .45-.02.67-.06-.46 1.2-1.57 2.09-2.87 2.09v1.67c2.75 0 5-2.24 5-5V6H7.17Zm9.66 0C14.54 6 12.66 7.88 12.66 10.17c0 2.29 1.88 4.17 4.17 4.17.23 0 .45-.02.67-.06-.46 1.2-1.57 2.09-2.87 2.09v1.67c2.75 0 5-2.24 5-5V6h-3.5Z"
                  className="fill-current"
                />
              </svg>

              {/* estrellas */}
              <div className="mb-3">
                <Stars value={t.rating ?? 5} />
              </div>

              {/* texto */}
              <p className="text-gray-700 leading-relaxed">“{t.texto}”</p>

              {/* footer: persona */}
              <div className="mt-5 flex items-center gap-3">
                <Avatar name={t.nombre} src={t.image} />
                <div className="min-w-0">
                  <p className="text-[#1F2A66] font-semibold flex items-center gap-2">
                    {t.nombre}
                  </p>
                  <p className="mt-2 text-sm text-[#1F2A66]/70 truncate">
                    {t.rol ?? "Cliente"}
                    {t.ubicacion ? ` • ${t.ubicacion}` : ""}
                  </p>
                </div>
              </div>
              <div className="flex justify-between  mt-3 text-xs text-[#1F2A66]/50">
                <p>{t.fecha ?? ""}</p>
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-[#E9F7EF] px-2 py-[2px]
                                text-[11px] font-medium text-[#1F7A4D] border border-[#1F7A4D]/15"
                  title="Reseña verificada"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M12 0 1.605 4.5v6c0 6.63 4.92 12.84 10.395 13.5C17.475 23.34 22.395 17.13 22.395 10.5v-6L12 0Zm-1.2 17.1-4.5-4.5 1.695-1.695 2.805 2.79 5.7-5.7L18 9.69l-7.2 7.41Z" />
                  </svg>
                  Verificado
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* JSON-LD para SEO (AggregateRating) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Arnedo Alejandro – Productor Asesor de Seguros",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: avg,
              reviewCount: TESTIMONIOS.length,
              bestRating: 5,
              worstRating: 1,
            },
          }),
        }}
      />
    </section>
  );
}
