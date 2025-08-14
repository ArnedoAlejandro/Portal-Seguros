import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Imágenes locales
import sliderImg from "../assets/sliderImg.png";
import asesorImg from "../assets/asesorImg.png";
import familiaImg from "../assets/familiaImg.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const SLIDES = [
  {
    title: "Aprovechá hasta 25% Off en el Seguro de tu Auto.",
    subtitle: "",
    btnText: "Contratá online",
    btnTo: "/cotizar?tipo=auto",
    img: sliderImg,
    alt: "Familia sonríe desde un auto",
  },
  {
    title: "Protegé lo que más importa",
    subtitle: "Seguros claros, confiables y a tu medida",
    btnText: "Cotizar ahora",
    btnTo: "/cotizar",
    img: asesorImg,
    alt: "Asesor de seguros atendiendo en oficina",
  },
  {
    title: "Coberturas para cada etapa de tu vida",
    subtitle: "Auto, hogar, salud, vida y PyME",
    btnText: "Ver coberturas",
    btnTo: "/seguros",
    img: familiaImg,
    alt: "Familia en casa con su perro",
  },
];

type Slide = (typeof SLIDES)[number];

export default function SliderHome({
  slides = SLIDES,
  interval = 6000,
  desktopFadePercent = 80,
}: {
  slides?: Slide[];
  interval?: number;
  desktopFadePercent?: number;
}) {
  const hovering = useRef(false);
  const swiperRef = useRef<any>(null);

  const onMouseEnter = () => {
    hovering.current = true;
    swiperRef.current?.autoplay?.stop();
  };
  const onMouseLeave = () => {
    hovering.current = false;
    if (!document.hidden) swiperRef.current?.autoplay?.start();
  };

  useEffect(() => {
    const onVis = () => {
      if (!swiperRef.current) return;
      if (document.hidden) swiperRef.current.autoplay?.stop();
      else if (!hovering.current) swiperRef.current.autoplay?.start();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section
      role="region"
      aria-roledescription="carrusel"
      aria-label="Promociones de seguros"
      className="relative w-full bg-white"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={
        {
          "--fade-pct": `${Math.min(Math.max(desktopFadePercent, 60), 95)}%`,
        } as React.CSSProperties
      }
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        onSwiper={(s) => (swiperRef.current = s)}
        loop
        speed={600}
        autoplay={
          reduced ? false : { delay: interval, disableOnInteraction: false }
        }
        navigation={{ enabled: true }}
        pagination={{ clickable: true }}
        className="w-full min-h-[420px] md:min-h-[480px] lg:min-h-[520px]"
      >
        {slides.map((slide, idx) => {
          const eager = idx === 0;
          return (
            <SwiperSlide key={idx}>
              {/* DESKTOP/TABLET ≥ lg */}
              <div className="hidden lg:grid grid-cols-2 min-h-[520px]">
                <div className="flex items-center bg-white">
                  <div className="w-full max-w-5xl mx-auto px-8 xl:px-12 py-16">
                    <h1 className="text-[#2A3B8F] text-4xl xl:text-5xl font-extrabold leading-tight">
                      {slide.title}
                    </h1>
                    {slide.subtitle && (
                      <p className="mt-3 text-lg text-[#1F2A66]/80">
                        {slide.subtitle}
                      </p>
                    )}
                    {slide.btnText && slide.btnTo && (
                      <Link
                        to={slide.btnTo}
                        className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-[#1F2A66] px-6 py-2.5 text-[#1F2A66] font-semibold hover:bg-[#1F2A66] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F2A66]"
                      >
                        {slide.btnText}
                      </Link>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="
                      absolute inset-0 w-full h-full object-cover
                      [mask-image:linear-gradient(to_left,black_var(--fade-pct),transparent_100%)]
                      [mask-repeat:no-repeat] [mask-size:100%_100%]
                    "
                    style={{
                      WebkitMaskImage: `linear-gradient(to left, rgba(0,0,0,1) var(--fade-pct), rgba(0,0,0,0) 100%)`,
                    }}
                    draggable={false}
                    loading={eager ? "eager" : "lazy"}
                    fetchpriority={eager ? "high" : "auto"}
                    decoding="async"
                  />
               
                </div>
              </div>

              {/* MOBILE < lg: imagen de fondo + overlay + CONTENIDO EN EL BORDE INFERIOR */}
              <div className="relative lg:hidden min-h-[420px]">
                {/* Fondo */}
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                  loading={eager ? "eager" : "lazy"}
                  fetchpriority={eager ? "high" : "auto"}
                  decoding="async"
                />
                {/* Overlay para legibilidad (más cargado abajo) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-transparent" />
                {/* CONTENIDO FIJADO ABAJO */}
                <div className="absolute bottom-0 left-0 right-0 z-10">
                  <div className="px-5 pb-[calc(20px+env(safe-area-inset-bottom))] text-white">
                    <h2 className="text-3xl font-extrabold leading-tight drop-shadow-sm">
                      {slide.title}
                    </h2>
                    {slide.subtitle && (
                      <p className="mt-2 text-base text-white/95">
                        {slide.subtitle}
                      </p>
                    )}
                    {slide.btnText && slide.btnTo && (
                      <Link
                        to={slide.btnTo}
                        className="mt-4 inline-flex items-center justify-center rounded-xl bg-white text-[#1F2A66] px-5 py-3 text-sm font-semibold shadow hover:bg-gray-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                      >
                        {slide.btnText}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Estilos flechas / puntos */}
      <style>
        {`
          .swiper-button-prev, .swiper-button-next {
            width: 36px;
            height: 36px;
            border-radius: 9999px;
            background: rgba(255,255,255,0.78);
            color: #1F2A66;
            box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          }
          .swiper-button-prev:hover, .swiper-button-next:hover {
            background: #FFFFFF;
          }
          .swiper-button-prev::after, .swiper-button-next::after {
            font-size: 16px;
            font-weight: 700;
          }

          .swiper-pagination-bullet {
            width: 8px; height: 8px; opacity: 1;
            background: rgba(31,42,102,0.24);
            border: 1px solid rgba(31,42,102,0.6);
          }
          .swiper-pagination-bullet-active {
            width: 16px; border-radius: 9999px;
            background: #1F2A66; border-color: #1F2A66;
          }

          /* Ocultar flechas en móvil (opcional) */
          @media (max-width: 1023px) {
            .swiper-button-prev, .swiper-button-next { display: none !important; }
          }
        `}
      </style>
    </section>
  );
}
