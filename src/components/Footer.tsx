import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">Síguenos en nuestras redes sociales</p>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Instagram</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
                </div>
                <p className="mb-4">¿Necesitás ayuda? Contactanos por WhatsApp</p>
                <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Enviar mensaje</a>
                <div className="mt-4">
                    <p>&copy; {new Date().getFullYear()} Tu Asesor de Seguros. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;