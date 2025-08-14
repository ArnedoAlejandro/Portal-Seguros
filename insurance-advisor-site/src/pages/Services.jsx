import React from 'react';
import ServiceCard from '../components/ServiceCard';

const services = [
    {
        title: 'Seguro de Auto',
        description: 'Protección integral para tu vehículo, con coberturas adaptadas a tus necesidades.',
    },
    {
        title: 'Seguro de Hogar',
        description: 'Cobertura para tu hogar, protegiendo tus bienes y brindando tranquilidad.',
    },
    {
        title: 'Seguro de Vida',
        description: 'Asegura el bienestar de tus seres queridos con un plan de vida adecuado.',
    },
    {
        title: 'Seguro de Salud',
        description: 'Acceso a atención médica de calidad y protección ante imprevistos de salud.',
    },
];

const Services = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Nuestros Servicios</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <ServiceCard key={index} title={service.title} description={service.description} />
                ))}
            </div>
        </div>
    );
};

export default Services;