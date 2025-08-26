import { useState } from "react";
import emailjs from "emailjs-com";

type FormState = {
  nombre: string;
  telefono: string;
  email: string;
  consulta: string;
};

const initial: FormState = {
  nombre: "",
  telefono: "",
  email: "",
  consulta: "",
};

// Variables de entorno (Vite)
const SERVICE_ID = "service_3v41ogg";
const TEMPLATE_ID = "template_gkjdgvx";
const PUBLIC_KEY = "zOwm2XZOLOBlpnQSW";

export default function ContactForm() {
  const [data, setData] = useState<FormState>(initial);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"ok" | "error" | "">("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  const validate = () => {
    if (!data.nombre.trim()) return false;
    if (!/^\+?\d[\d\s-]{6,}$/.test(data.telefono.trim())) return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) return false;
    if (data.consulta.trim().length < 8) return false;
    return true;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setSending(true);
    setStatus("");

    // Envío con EmailJS usando objeto de parámetros
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          nombre: data.nombre,
          telefono: data.telefono,
          email: data.email,
          consulta: data.consulta,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("ok");
          setData(initial);
        },
        (err) => {
          console.error(err);
          setStatus("error");
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="bg-[#F7F9FE] py-14">
      <h2 className="text-center text-3xl font-extrabold text-[#1F2A66]">
          Contactame para asesorarte
        </h2>
      <div className="mt-10 max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Lado informativo */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-[#1F2A66]">
            ¿Hablamos de tu seguro?
          </h2>
          <p className="mt-3 text-[#1F2A66]/70">
            Dejá tus datos y te contacto para asesorarte con claridad .
          </p>
          <p className="mt-3 text-[#1F2A66]/70">Atención en todo el país.</p>

          <ul className="mt-6 space-y-2 text-sm text-[#1F2A66]/80">
            <li>• Respuesta dentro del mismo día hábil</li>
            <li>
              • Asesoramiento integral (auto, hogar, vida, PyME, comercio)
            </li>
            <li>• Trabajo con múltiples compañías líderes</li>
          </ul>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-2xl border border-[#E6ECFF] shadow-[0_8px_24px_rgba(31,42,102,0.06)] p-6 md:p-8">
          <form onSubmit={submit} className="space-y-4">
            {/* Honeypot opcional */}
            {/* <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" /> */}

            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-[#1F2A66]"
              >
                Nombre y apellido
              </label>
              <input
                id="nombre"
                name="nombre"
                value={data.nombre}
                onChange={onChange}
                autoComplete="name"
                required
                className="mt-1 w-full rounded-xl border border-[#E6ECFF] bg-[#F9FBFF]
                           px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#2647D8]"
                placeholder="Ej: Alejandro Arnedo"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-[#1F2A66]"
                >
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  value={data.telefono}
                  onChange={onChange}
                  inputMode="tel"
                  required
                  className="mt-1 w-full rounded-xl border border-[#E6ECFF] bg-[#F9FBFF]
                            px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#2647D8]"
                  placeholder="+54 9 ..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#1F2A66]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-xl border border-[#E6ECFF] bg-[#F9FBFF]
                            px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#2647D8]"
                  placeholder="tuemail@dominio.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="consulta"
                className="block text-sm font-medium text-[#1F2A66]"
              >
                Consulta
              </label>
              <textarea
                id="consulta"
                name="consulta"
                value={data.consulta}
                onChange={onChange}
                rows={5}
                required
                className="mt-1 w-full rounded-xl border border-[#E6ECFF] bg-[#F9FBFF]
                           px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#2647D8] resize-y"
                placeholder="Contame qué necesitás asegurar o qué duda tenés…"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-[#1F2A66]/60">
                Al enviar, aceptás ser contactado para avanzar con tu consulta.
              </p>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center rounded-xl bg-[#2647D8]
                           text-white px-5 py-2.5 text-sm font-semibold shadow
                           hover:bg-[#1f3dc0] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Enviando…" : "Enviar consulta"}
              </button>
            </div>

            {status === "ok" && (
              <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                ¡Mensaje enviado! Te voy a escribir a la brevedad.
              </div>
            )}
            {status === "error" && (
              <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                Revisá los datos e intentá nuevamente.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
