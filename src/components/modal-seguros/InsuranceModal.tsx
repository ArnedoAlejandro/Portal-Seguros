import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
export type Item = {
  id: string;
  title: string;
  desc: string;
  image: string;
  to?: string;
};

export type InsuranceContent = {
  headline: string;
  bullets: string[];
  details?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
};

export default function InsuranceModal({
  item,
  content,
  open,
  onClose,
}: {
  /** Ítem seleccionado (o null si cerrado) */
  item: Item | null;
  /** Contenido por id (ej: { auto: {...}, hogar: {...} }) */
  content: Record<string, InsuranceContent>;
  /** Controla visibilidad */
  open: boolean;
  /** Cerrar modal */
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
        onClick={onClose}
      />

      {/* Panel (bottom-sheet en mobile, centrado en desktop) */}
      <div className="absolute inset-0 flex items-end sm:items-center justify-center p-0 sm:p-6">
        <div className="relative w-full sm:max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-xl overflow-hidden">
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
          <div className="p-5 sm:p-6">
            <ul className="space-y-2 text-sm text-gray-700">
              {data.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[#2A3B8F]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {data.details && (
              <p className="mt-4 text-sm text-gray-600">{data.details}</p>
            )}

            {/* CTAs */}
            <div className="mt-5 flex flex-wrap gap-3">
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
              <button
                onClick={onClose}
                className="ml-auto text-sm text-gray-500 hover:text-gray-700"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}