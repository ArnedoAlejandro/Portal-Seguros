import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "inicio", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "companias", label: "Compañías" },
  { id: "servicios", label: "Servicios" },
  { id: "contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => goTo("inicio")}
            className="text-white text-lg font-extrabold tracking-tight"
            aria-label="Ir al inicio"
          >
            Asesor de Seguros
          </button>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => goTo(item.id)}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Redes Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>

            {/* WhatsApp Desktop: MISMO handler + href de fallback VÁLIDO */}
            <a
              href="https://api.whatsapp.com/send?phone=5493548569580"                // fallback si JS bloquea window.open
              // onClick={openWhatsApp}        // intenta deep/web/api en orden
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
          </div>

          {/* Hamburguesa */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {!open ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Panel móvil */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => goTo(item.id)}
                    className="block w-full text-left text-white/90 hover:text-white px-2 py-2 rounded-md hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-3 h-px bg-white/10" />

            <div className="mt-3 grid grid-cols-3 gap-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-white/90 hover:text-white bg-white/10 rounded-md py-2 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-white/90 hover:text-white bg-white/10 rounded-md py-2 transition-colors"
              >
                Instagram
              </a>

              {/* WhatsApp Mobile: mismo handler + fallback */}
              <a
                href="https://api.whatsapp.com/send?phone=5493548569580"
                // onClick={openWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-white/90 hover:text-white bg-white/10 rounded-md py-2 transition-colors"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
