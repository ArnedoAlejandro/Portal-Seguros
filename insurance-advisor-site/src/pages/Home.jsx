import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
    return (
        <div className="flex flex-col items-center">
            <Hero />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ServiceCard title="Auto" description="Protegé tu vehículo con nuestras pólizas." />
                <ServiceCard title="Hogar" description="Asegura tu hogar y todo lo que amas." />
                <ServiceCard title="Vida" description="Protección para ti y tus seres queridos." />
                <ServiceCard title="Salud" description="Cobertura médica para tu tranquilidad." />
            </div>
        </div>
    );
};

export default Home;