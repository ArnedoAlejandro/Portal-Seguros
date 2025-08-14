import { useState } from "react";
import cobertura from "../assets/coberturas.png";
import InsuranceModal, { type InsuranceContent } from "./modal-seguros/InsuranceModal";

export type Item = {
  id: string;
  title: string;
  desc: string;
  image: string;
  to?: string;
};

const items: Item[] = [
  { id: "auto",     title: "Auto",     desc: "Asegurá tu auto y manejá tranquilo",                 image: cobertura,                  to: "/seguros/auto" },
  { id: "hogar",    title: "Hogar",    desc: "Tu casa siempre protegida",                          image: cobertura,                  to: "/seguros/hogar" },
  { id: "moto",     title: "Moto",     desc: "Protegé a vos y a tu moto en todo momento",          image: "/images/seguro-moto.jpg",  to: "/seguros/moto" },
  { id: "ap",       title: "Accidentes Personales", desc: "Tranquilidad para independientes y profesionales", image: "/images/seguro-ap.jpg", to: "/seguros/accidentes-personales" },
  { id: "comercio", title: "Integral de Comercio",  desc: "Protegé tu mercadería y tu lugar de trabajo",      image: "/images/seguro-comercio.jpg", to: "/seguros/comercio" },
  { id: "retiro",   title: "Seguro de Retiro",      desc: "Planificá tus ahorros e inversiones",              image: "/images/seguro-retiro.jpg", to: "/seguros/retiro" },
];

const INSURANCE_CONTENT: Record<string, InsuranceContent> = {
  auto: {
    headline: "Seguro de Auto",
    bullets: [
      "RC obligatoria + coberturas contra terceros.",
      "Todo Riesgo con o sin franquicia.",
      "Reposición de cristales y cerraduras.",
      "Asistencia 24/7 y grúa en todo el país."
    ],
    details: "Cotizá en múltiples compañías para obtener el mejor precio y respaldo.",
    primaryCta: { label: "Cotizar Auto", to: "/cotizar?tipo=auto" },
    secondaryCta: { label: "Ver coberturas", to: "/seguros/auto" }
  },
  hogar: {
    headline: "Seguro de Hogar",
    bullets: [
      "Incendio, robo, daños por agua.",
      "Electrodomésticos y equipos electrónicos.",
      "Responsabilidad civil linderos.",
      "Servicio de asistencia al hogar."
    ],
    details: "Protegé tu hogar con planes flexibles y suma de asegurada ajustable.",
    primaryCta: { label: "Cotizar Hogar", to: "/cotizar?tipo=hogar" },
    secondaryCta: { label: "Ver coberturas", to: "/seguros/hogar" }
  },
  moto: {
    headline: "Seguro de Moto",
    bullets: [
      "RC + robo/incendio",
      "Coberturas parciales o completas",
      "Asistencia al viajero",
      "Reposición de casco/indumentaria*"
    ],
    details: "Opciones pensadas para uso diario y touring. *Según plan.",
    primaryCta: { label: "Cotizar Moto", to: "/cotizar?tipo=moto" },
    secondaryCta: { label: "Ver coberturas", to: "/seguros/moto" }
  },
  ap: {
    headline: "Accidentes Personales",
    bullets: [
      "Cobertura 24 hs dentro/fuera del trabajo",
      "Rentas diarias por internación",
      "Gastos médicos y farmacéuticos",
      "Asistencia inmediata"
    ],
    details: "Especial para independientes y profesionales que necesitan continuidad de ingresos.",
    primaryCta: { label: "Cotizar AP", to: "/cotizar?tipo=ap" },
    secondaryCta: { label: "Ver coberturas", to: "/seguros/accidentes-personales" }
  },
  comercio: {
    headline: "Integral de Comercio",
    bullets: [
      "Incendio y robo de contenido",
      "Daños por agua y vandalismo",
      "RC hacia clientes",
      "Cobertura de cristales y cartelería"
    ],
    details: "Protegé tu mercadería, equipamiento y responsabilidad frente a terceros.",
    primaryCta: { label: "Cotizar Comercio", to: "/cotizar?tipo=comercio" },
    secondaryCta: { label: "Ver coberturas", to: "/seguros/comercio" }
  },
  retiro: {
    headline: "Seguro de Retiro",
    bullets: [
      "Ahorro programado con interés compuesto",
      "Beneficios impositivos* (*según normativa)",
      "Aportes flexibles y rescates parciales",
      "Designación de beneficiarios"
    ],
    details: "Planificá tu futuro con capitalización a largo plazo.",
    primaryCta: { label: "Cotizar Retiro", to: "/cotizar?tipo=retiro" },
    secondaryCta: { label: "Ver coberturas", to: "/seguros/retiro" }
  }
};

export default function SegurosGrid() {
  const [selected, setSelected] = useState<Item | null>(null);

  return (
    <section className="bg-[#F4F7FB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#2A3B8F]">
          Conocé más sobre nuestros seguros
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <Card key={it.id} item={it} onOpen={() => setSelected(it)} />
          ))}
        </div>
      </div>

      {/* Modal separada */}
      <InsuranceModal
        item={selected}
        content={INSURANCE_CONTENT}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}

function Card({ item, onOpen }: { item: Item; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative text-left rounded-2xl bg-white border border-gray-100 shadow-[0_8px_24px_rgba(17,24,39,0.06)] hover:shadow-[0_10px_28px_rgba(17,24,39,0.10)] transition-shadow duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2442DB]"
      aria-label={`Abrir información de ${item.title}`}
    >
      <div className="grid grid-cols-[1fr_42%] min-h-[170px]">
        {/* Texto */}
        <div className="p-6 pr-3 flex flex-col justify-center">
          <h3 className="text-[#2442DB] font-semibold text-lg">{item.title}</h3>
          <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-[#2442DB] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Ver más →
          </span>
        </div>

        {/* Imagen */}
        <div className="relative">
          <img
            src={item.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            draggable={false}
          />
          <div className="absolute -left-4 bottom-4 w-10 h-10 bg-[#2A3B8F] rounded-full rounded-bl-2xl shadow-lg" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
        </div>
      </div>
    </button>
  );
}
