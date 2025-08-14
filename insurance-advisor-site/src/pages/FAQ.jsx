import React from 'react';

const FAQ = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h1>
            <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="font-semibold">¿Qué tipos de seguros ofrecen?</h2>
                    <p>Ofrecemos seguros de auto, hogar, vida y salud, adaptados a tus necesidades.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="font-semibold">¿Cómo puedo solicitar un presupuesto?</h2>
                    <p>Puedes solicitar un presupuesto a través de nuestra página de Cotización o contactándonos directamente.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="font-semibold">¿Qué información necesito para contratar un seguro?</h2>
                    <p>Generalmente, necesitarás tu información personal, detalles del bien a asegurar y cualquier otra documentación relevante.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="font-semibold">¿Tienen atención al cliente?</h2>
                    <p>Sí, contamos con un equipo de atención al cliente disponible para resolver tus dudas y asistirte en el proceso.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="font-semibold">¿Puedo modificar mi póliza después de contratarla?</h2>
                    <p>Sí, puedes modificar tu póliza en cualquier momento. Te recomendamos contactarnos para realizar los cambios necesarios.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;