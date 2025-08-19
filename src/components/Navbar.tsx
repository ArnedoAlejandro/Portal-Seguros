import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black/30 p-4  sticky top-0 z-50 backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    Asesor de Seguros
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-200">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-gray-200">Sobre Mi</Link>
                    </li>
                    <li>
                        <Link to="/services" className="text-white hover:text-gray-200">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/quote" className="text-white hover:text-gray-200">Cotización</Link>
                    </li>
                    <li>
                        <Link to="/faq" className="text-white hover:text-gray-200">Compañias</Link>
                    </li>
                    <li >
                        <Link to="/contact" className="text-white hover:text-gray-200">Contacto</Link>
                    </li>
                </ul>
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">Facebook</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">Instagram</a>
                    <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">WhatsApp</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;