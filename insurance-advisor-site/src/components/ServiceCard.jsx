import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 m-4 flex flex-col items-center">
            <img src={icon} alt={`${title} icon`} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    );
};

export default ServiceCard;