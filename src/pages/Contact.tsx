import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Contacto</h1>
            <p className="text-center mb-4">Si tenés alguna consulta, no dudes en contactarnos. Completa el formulario y te responderemos a la brevedad.</p>
            <ContactForm />
        </div>
    );
};

export default Contact;