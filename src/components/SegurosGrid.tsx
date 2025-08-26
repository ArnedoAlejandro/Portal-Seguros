import { useState } from "react";


import { caucion, comercio, hogar, moto, auto, accidentePersonales } from "../assets";
import InsuranceModal, { type InsuranceContent } from "./modal-seguros/InsuranceModal";

export type Item = {
  id: string;
  title: string;
  desc: string;
  image: string;
  to?: string;
};

const items: Item[] = [
  { id: "auto",     title: "Auto",     desc: "Asegurá tu auto y manejá tranquilo",                 image: auto,                  to: "/seguros/auto" },
  { id: "hogar",    title: "Hogar",    desc: "Tu casa siempre protegida",                          image: hogar,                  to: "/seguros/hogar" },
  { id: "moto",     title: "Moto",     desc: "Protegé a vos y a tu moto en todo momento",          image: moto,  to: "/seguros/moto" },
  { id: "ap",       title: "Accidentes Personales", desc: "Tranquilidad para independientes y profesionales", image: accidentePersonales, to: "/seguros/accidentes-personales" },
  { id: "comercio", title: "Integral de Comercio",  desc: "Protegé tu mercadería y tu lugar de trabajo",      image: comercio, to: "/seguros/comercio" },
 { id: "caucion", title: "Seguro de Caución", desc: "Garantizá contratos y obligaciones con respaldo asegurador", image: caucion, to: "/seguros/caucion" },

];

const INSURANCE_CONTENT: Record<string, InsuranceContent> = {
  auto: {
    headline: "Seguro de Auto",
    resume:
      "Protegé tu vehículo y tu responsabilidad frente a terceros. Planes desde RC obligatoria hasta Todo Riesgo con franquicia.",
    covers: [
      "Responsabilidad Civil (RC) obligatoria según Ley de Tránsito.",
      "Daños parciales por robo/ hurto / incendio (según plan).",
      "Destrucción total por accidente o incendio (según condiciones del plan).",
      "Cristales, cerraduras y granizo (con o sin franquicia, según plan).",
      "Asistencia mecánica y remolque 24/7 en todo el país (topes por km)."
    ],
    optional: [
      "Cobertura de llantas y neumáticos por daños accidentales.",
      "Auto sustituto por días (según siniestro y plan).",
      "Extensión de cobertura a países limítrofes.",
      "Reposición a nuevo por X meses (0 km / usados, según compañía)."
    ],
    excludes: [
      "Conducción bajo alcohol/drogas o sin licencia habilitante.",
      "Uso en competencias, pruebas de velocidad o remunerado no declarado.",
      "Siniestros fuera del territorio cubierto o con póliza impaga."
    ],
    requirements: [
      "Cédula verde/azul y licencia vigente del conductor.",
      "Inspección previa con fotos (según compañía/plan).",
      "Declaración de estado y accesorios (alarma, rastreo, etc.)."
    ],
    documents: [
      "DNI y licencia del conductor habitual.",
      "Cédula del vehículo y comprobante de titularidad.",
      "Inspección previa (fotos o taller asignado)."
    ],
    claimSteps: [
      "Priorizar tu seguridad y la de terceros; pedir auxilio si corresponde.",
      "Tomar fotos y datos (lugar, hora, terceros, testigos, patente).",
      "Denunciar el siniestro a la aseguradora y al productor lo antes posible (ideal dentro de 72 h).",
      "Completar formulario de reclamo/denuncia y aportar documentación que pidan.",
      "Seguir las indicaciones de peritaje, derivación a taller y pago de franquicia si aplica."
    ],
    faqs: [
      {
        q: "¿Qué significa 'franquicia'?",
        a: "Es el valor a tu cargo en un siniestro de Todo Riesgo. Cuanto mayor la franquicia, menor suele ser la prima."
      },
      {
        q: "¿Granizo está siempre cubierto?",
        a: "Depende del plan. Puede estar incluido, con tope o ser opcional con franquicia. Lo definimos según tu zona y uso."
      }
    ],
    primaryCta: { label: "Cotizar Auto", to: "/cotizar?tipo=auto" },
    secondaryCta: { label: "Ver coberturas", to: "/seguros/auto" },
    legal:
      "Coberturas y alcances sujetos a condiciones generales y particulares de póliza de cada compañía. Vigencia en República Argentina. Ante la SSN podés consultar tu aseguradora en www.argentina.gob.ar/ssn."
  },

  hogar: {
    headline: "Seguro de Hogar",
    resume:
      "Protección integral para tu vivienda y su contenido, con asistencia y responsabilidad civil linderos.",
    covers: [
      "Incendio edificio y contenido (hogar propio o alquilado).",
      "Robo/daño de contenido y electrodomésticos (según suma y topes).",
      "Daños por agua e impacto de granizo/árboles (según plan).",
      "Responsabilidad Civil linderos.",
      "Asistencia al hogar (cerrajería, plomería, electricidad)."
    ],
    optional: [
      "Electrodomésticos fuera del hogar (portátiles, notebooks).",
      "Todo Riesgo Objetos (bicicletas, cámaras, instrumentos).",
      "Granizo para techos delicados o patios vidriados (según inspección)."
    ],
    excludes: [
      "Viviendas deshabitadas por períodos prolongados sin declaración.",
      "Daños por falta de mantenimiento o desgaste normal.",
      "Hechos intencionales o fraude."
    ],
    requirements: [
      "Domicilio claro y tipo de vivienda.",
      "Medidas de seguridad básicas (cerraduras, rejas según zona).",
      "Declaración de sumas aseguradas realistas (edificio/contenido)."
    ],
    documents: [
      "DNI del titular.",
      "Comprobante de domicilio.",
      "Listado orientativo de contenido de mayor valor."
    ],
    claimSteps: [
      "Mitigar daños si es seguro hacerlo (cortar agua/luz).",
      "Sacar fotos y conservar comprobantes de reparación/compra.",
      "Denunciar a la aseguradora dentro de 72 h y completar formulario.",
      "Aportar presupuestos y/o facturas si corresponden.",
      "Coordinar peritaje y reposición/indemnización según condiciones."
    ],
    faqs: [
      { q: "¿Qué suma aseguro para contenido?", a: "Recomendamos un listado con valores de reposición a nuevo para evitar infraseguro." },
      { q: "¿Cubre mascotas?", a: "La RC linderos puede contemplar daños a terceros por tu mascota. Consultar límites y condiciones." }
    ],
    primaryCta: { label: "Cotizar Hogar", to: "/cotizar?tipo=hogar" },
    secondaryCta: { label: "Ver coberturas", to: "/seguros/hogar" },
    legal:
      "Las coberturas pueden requerir inspección y medidas de seguridad. Condiciones sujetas a póliza. SSN: consultar aseguradoras habilitadas."
  },

  moto: {
    headline: "Seguro de Moto",
    resume:
      "Planes desde RC obligatoria hasta coberturas con robo/ incendio y daños parciales.",
    covers: [
      "Responsabilidad Civil obligatoria (Ley).",
      "Robo e incendio total o parcial (según plan).",
      "Asistencia y remolque (topes por km)."
    ],
    optional: [
      "Cobertura de indumentaria y casco por accidente.",
      "Granizo y daños parciales (según compañía/modelo)."
    ],
    excludes: [
      "Conducción sin casco o sin licencia habilitante.",
      "Uso en competencias o delivery no declarado.",
      "Modificaciones no declaradas."
    ],
    requirements: [
      "Titularidad y licencia vigente.",
      "Inspección fotográfica según compañía."
    ],
    documents: [
      "DNI, cédula de la moto, licencia.",
      "Fotos para inspección previa."
    ],
    claimSteps: [
      "Priorizar tu seguridad, registrar datos y fotos.",
      "Denunciar dentro de 72 h y seguir indicaciones del productor.",
      "Presentar comprobantes y peritaje si aplica."
    ],
    faqs: [
      { q: "¿Puedo asegurar una moto antigua?", a: "Depende del año y estado. Consultamos compañías que acepten ese rango." }
    ],
    primaryCta: { label: "Cotizar Moto", to: "/cotizar?tipo=moto" },
    secondaryCta: { label: "Ver coberturas", to: "/seguros/moto" },
    legal: "Sujetos a evaluación de riesgo y condiciones de póliza. Ámbito: Argentina."
  },

  ap: {
    headline: "Accidentes Personales",
    resume:
      "Cobertura de accidentes 24 hs (dentro y fuera del trabajo) con gastos médicos, rentas y capital por invalidez o fallecimiento por accidente.",
    covers: [
      "Gastos médicos y farmacéuticos por accidente (topes).",
      "Renta diaria por internación/IT (según plan).",
      "Invalidez permanente y fallecimiento por accidente."
    ],
    optional: [
      "Traslado sanitario y asistencia al viajero.",
      "Prótesis y ortopedia (con topes)."
    ],
    excludes: [
      "Enfermedades (no accidentales) salvo endosos específicos.",
      "Deportes de alto riesgo no declarados.",
      "Hechos intencionales."
    ],
    requirements: [
      "Declaración de actividad (profesión/oficio).",
      "Edad de ingreso dentro del rango de la compañía."
    ],
    documents: [
      "DNI, CUIL y declaración de salud (según suma)."
    ],
    claimSteps: [
      "Atención médica inmediata y conservación de estudios/comprobantes.",
      "Denunciar el accidente lo antes posible (ideal 72 h).",
      "Presentar historia clínica y formularios provistos por la aseguradora."
    ],
    faqs: [
      { q: "¿Cubre enfermedades?", a: "No, es una póliza orientada a accidentes. Podemos ver combinaciones con Salud/VIDA." }
    ],
    primaryCta: { label: "Cotizar AP", to: "/cotizar?tipo=ap" },
    secondaryCta: { label: "Ver coberturas", to: "/seguros/accidentes-personales" },
    legal: "Condiciones y límites según póliza. Ver restricciones por actividad/edad."
  },

  comercio: {
    headline: "Integral de Comercio",
    resume:
      "Protección para tu local, mercadería y responsabilidad frente a clientes y vecinos.",
    covers: [
      "Incendio edificio y contenido/mercadería.",
      "Robo con violencia (según medidas de seguridad).",
      "Daños por agua, rotura de vidrios/cartelería.",
      "Responsabilidad Civil hacia clientes y linderos."
    ],
    optional: [
      "Pérdida de beneficios por interrupción del negocio.",
      "Equipos electrónicos y POS.",
      "RC productos elaborados."
    ],
    excludes: [
      "Falta de mantenimiento, instalaciones eléctricas en mal estado.",
      "Dinero en efectivo no declarado o fuera de caja fuerte.",
      "Locales desocupados por períodos prolongados no informados."
    ],
    requirements: [
      "Medidas de seguridad (cerraduras, rejas/alarma según zona).",
      "Declaración de rubro y mercadería."
    ],
    documents: [
      "DNI y constancia de CUIT.",
      "Habilitación municipal (si aplica).",
      "Listado orientativo de equipamiento/stock."
    ],
    claimSteps: [
      "Proteger bienes y notificar a la policía si corresponde (robos).",
      "Tomar fotos y guardar comprobantes.",
      "Denunciar dentro de 72 h y coordinar peritaje."
    ],
    faqs: [
      { q: "¿Puedo asegurar stock variable?", a: "Sí, definimos suma con base y cláusula de ajuste estacional si hace falta." }
    ],
    primaryCta: { label: "Cotizar Comercio", to: "/cotizar?tipo=comercio" },
    secondaryCta: { label: "Ver coberturas", to: "/seguros/comercio" },
    legal: "Coberturas sujetas a inspección y medidas de seguridad. Póliza y condiciones aplican."
  },

  caucion: {
  headline: "Seguro de Caución",
  resume:
    "Respaldo financiero que garantiza el cumplimiento de obligaciones contractuales frente a terceros, aportando confianza y seguridad en tus operaciones.",
  covers: [
    "Garantía de cumplimiento de contratos de obra y servicios.",
    "Garantía aduanera para importaciones y exportaciones.",
    "Garantías judiciales requeridas por tribunales.",
    "Garantías de anticipo financiero o acopio."
  ],
  optional: [
    "Extensión de cobertura a obligaciones accesorias.",
    "Renovaciones automáticas según condiciones contractuales."
  ],
  excludes: [
    "Cobertura de riesgos no contractuales.",
    "Obligaciones personales sin respaldo documental."
  ],
  requirements: [
    "Documentación legal y fiscal del solicitante.",
    "Contrato u obligación a garantizar.",
    "Evaluación crediticia y patrimonial del tomador."
  ],
  documents: [
    "DNI y CUIT/CUIL.",
    "Estados contables actualizados.",
    "Copia del contrato o pliego licitatorio."
  ],
  claimSteps: [
    "Notificación de incumplimiento por parte del asegurado.",
    "Presentación de documentación probatoria del contrato.",
    "Evaluación de la aseguradora y pago según condiciones."
  ],
  faqs: [
    { q: "¿Qué cubre un seguro de caución?", a: "Garantiza al acreedor que el tomador cumplirá con sus obligaciones contractuales o legales." },
    { q: "¿En qué casos se solicita?", a: "Es común en licitaciones públicas, contratos de obra, operaciones aduaneras y procesos judiciales." }
  ],
  primaryCta: { label: "Solicitar Caución", to: "/cotizar?tipo=caucion" },
  secondaryCta: { label: "Ver coberturas", to: "/seguros/caucion" },
  legal:
    "El seguro de caución no reemplaza el cumplimiento de la obligación principal, sino que actúa como garantía frente al beneficiario en caso de incumplimiento."
}
};
export default function SegurosGrid() {
  const [selected, setSelected] = useState<Item | null>(null);

  return (
    <section className="bg-[#F8FAFC]" id="servicios">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#2A3B8F]">
          Conocé más sobre mis servicios de seguros
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
      className="group relative text-left rounded-2xl cursor-pointer bg-white border border-gray-100 shadow-[0_8px_24px_rgba(17,24,39,0.06)] hover:shadow-[0_10px_28px_rgba(17,24,39,0.10)] transition-shadow duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2442DB]"
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
            className="  w-full h-full object-fit "
            loading="lazy"
            draggable={false}
          />
          {/* <div className="absolute -left-4 bottom-4 w-10 h-10 bg-[#2A3B8F] rounded-full rounded-bl-2xl shadow-lg" /> */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
        </div>
      </div>
    </button>
  );
}
