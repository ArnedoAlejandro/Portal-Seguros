import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export type Item = {
  id: string;
  title: string;
  desc: string;
  image: string;
  to?: string;
};

export type InsuranceContent = {
  headline: string;
  resume?: string;             // breve descripción opcional
  covers: string[];            // Qué cubre (base)
  optional?: string[];         // Adicionales/Endosos
  excludes?: string[];         // Exclusiones típicas
  requirements?: string[];     // Requisitos de contratación
  documents?: string[];        // Documentación habitual
  claimSteps?: string[];       // Pasos ante siniestro
  faqs?: { q: string; a: string }[];
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  legal?: string;              // disclaimer/regulatorio
};

export default function InsuranceModal({
  item,
  content,
  open,
  onClose,
}: {
  item: Item | null;
  content: Record<string, InsuranceContent>;
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const data = item ? content[item.id] : null;

  // Bloquear scroll y cerrar con ESC
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => closeRef.current?.focus(), 0);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open, onClose]);

  if (!open || !item || !data) return null;

  // Simple acordeón accesible con <details>
  const Section = ({
    title,
    children,
    defaultOpen = false,
  }: {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
  }) => (
    <details
      className="group rounded-xl border border-gray-200/80 bg-white/70 open:bg-white open:shadow-sm"
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary className="cursor-pointer list-none select-none px-4 py-3 flex items-center justify-between gap-3">
        <span className="font-semibold text-[#2A3B8F]">{title}</span>
        <span className="text-gray-500 group-open:rotate-180 transition-transform">▾</span>
      </summary>
      <div className="px-4 pb-4 text-sm text-gray-700">{children}</div>
    </details>
  );

  const List = ({ items }: { items?: string[] }) =>
    items && items.length ? (
      <ul className="space-y-1">
        {items.map((t, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[#2A3B8F]" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    ) : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" onClick={onClose} />

      {/* Panel (bottom-sheet en mobile, centrado en desktop) */}
      <div className="absolute inset-0 flex items-end sm:items-center justify-center p-0 sm:p-6">
        <div className="relative w-full sm:max-w-3xl bg-white rounded-t-2xl sm:rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-start gap-3 p-5 border-b border-gray-100">
            <div className="shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
              <img src={item.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 id="modal-title" className="text-lg font-semibold text-[#2A3B8F]">
                {data.headline}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
            <button
              ref={closeRef}
              onClick={onClose}
              className="ml-2 rounded-full p-2 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2A3B8F]"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-6 space-y-3">
            {data.resume && (
              <p className="text-sm text-gray-700 bg-[#F4F7FB] rounded-lg p-3">{data.resume}</p>
            )}

            <Section title="¿Qué cubre?" defaultOpen>
              <List items={data.covers} />
            </Section>

            {data.optional?.length ? (
              <Section title="Opcionales / Endosos">
                <List items={data.optional} />
              </Section>
            ) : null}

            {data.excludes?.length ? (
              <Section title="No cubre (exclusiones típicas)">
                <List items={data.excludes} />
              </Section>
            ) : null}

            {data.requirements?.length ? (
              <Section title="Requisitos de contratación">
                <List items={data.requirements} />
              </Section>
            ) : null}

            {data.documents?.length ? (
              <Section title="Documentación necesaria">
                <List items={data.documents} />
              </Section>
            ) : null}

            {data.claimSteps?.length ? (
              <Section title="¿Qué hago ante un siniestro?">
                <List items={data.claimSteps} />
              </Section>
            ) : null}

            {data.faqs?.length ? (
              <Section title="Preguntas frecuentes">
                <div className="space-y-3">
                  {data.faqs.map((f, i) => (
                    <div key={i}>
                      <p className="font-medium text-[#2A3B8F]">{f.q}</p>
                      <p className="text-sm text-gray-700 mt-0.5">{f.a}</p>
                    </div>
                  ))}
                </div>
              </Section>
            ) : null}

            {/* CTAs */}
            {(data.primaryCta || data.secondaryCta) && (
              <div className="pt-2 flex flex-wrap gap-3">
                {data.primaryCta && (
                  <Link
                    to={data.primaryCta.to}
                    className="inline-flex items-center justify-center rounded-xl bg-[#2A3B8F] text-white px-4 py-2.5 text-sm font-semibold shadow hover:opacity-90"
                  >
                    {data.primaryCta.label}
                  </Link>
                )}
                {data.secondaryCta && (
                  <Link
                    to={data.secondaryCta.to}
                    className="inline-flex items-center justify-center rounded-xl border border-[#2A3B8F] text-[#2A3B8F] px-4 py-2.5 text-sm font-semibold hover:bg-[#2A3B8F]/5"
                  >
                    {data.secondaryCta.label}
                  </Link>
                )}
              </div>
            )}

            {/* Legal */}
            {data.legal && (
              <p className="text-[12px] text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                {data.legal}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}