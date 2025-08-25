import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">Sígueme en mis redes sociales</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href={`mailto:arnedoaalejandro@gmail.com?subject=Consulta%20de%20seguros&body=Hola%20Alejandro,%20quiero%20hacer%20una%20consulta%20sobre...`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Gmail
          </a>
          <a
            href="https://www.instagram.com/arnedoalejandro/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/alejandro-augusto-arnedo-27a189240/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
        </div>
        <p className="mb-4">¿Necesitás ayuda? Contactame por WhatsApp</p>
        <a
          href="https://api.whatsapp.com/send?phone=5493548569580"     
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Enviar mensaje
        </a>
        <div className="mt-4">
          <p>
            &copy; {new Date().getFullYear()} Tu Asesor de Seguros. Todos los
            derechos reservados.
          </p>
        <p className="text-center text-[12px] leading-relaxed text-[#a8aab8]/60max-w-3xl">
          Las marcas mostradas son propiedad de sus titulares. Coberturas
          sujetas a condiciones generales y particulares de póliza en la
          República Argentina.
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
