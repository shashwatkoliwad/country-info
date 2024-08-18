import React, { useState } from 'react';

const CountryCard = ({ country }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div
                className="bg-white shadow-md rounded-lg p-4 mt-4 cursor-pointer"
                onClick={() => setShowModal(true)}
            >
                <h2 className="text-xl font-bold mb-2">{country.name.common}</h2>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">{country.name.common}</h2>
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                        <p><strong>Capital:</strong> {country.capital?.[0]}</p>
                        <p><strong>Currency:</strong> {Object.keys(country.currencies).join(', ')}</p>
                        <button
                            className="mt-4 p-2 bg-indigo-600 text-white rounded-md"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default CountryCard;
