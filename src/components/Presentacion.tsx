
// import perfil from "../assets/arnedo.jpg"; // foto profesional tuya
import {  accidentePersonales } from "../assets";


export default function AboutMe() {
  return (
    <section className="bg-[#F8FAFC] py-20 px-6 sm:px-12 lg:px-20" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Imagen lateral */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-lg">
            <img
            src={accidentePersonales}
            alt="Arnedo Alejandro - Productor de Seguros"
            className="object-cover w-full h-full"
            loading="lazy"
            draggable={false}
          />
          </div>
        </div>

        {/* Texto descriptivo */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Arnedo Alejandro
          </h2>
          <p className="text-lg text-blue-700 font-semibold">
            Productor Asesor de Seguros
          </p>
          <p className=" text-gray-700 font-semibold">
            MP: 96494
          </p>
          <p className="text-gray-700 leading-relaxed">
            Con más de <span className="font-bold">7 años de experiencia </span>  
            en el rubro, trabajando con múltiples compañías y asociado a un broker, 
            brindo <span className="font-medium">soluciones integrales de seguros </span> 
            para personas y empresas.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Mi misión es ofrecer un servicio cercano, confiable y transparente, 
            ayudando a proteger tu hogar, tu auto, tu comercio y tus proyectos de vida.
          </p>
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=5493548569580"   
              target="_blank"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              Contactarme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
