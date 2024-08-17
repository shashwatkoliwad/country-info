import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';

const CountryList = ({ searchQuery }) => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching countries:", error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setFilteredCountries(
            countries.filter(country =>
                country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery, countries]);

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
            {filteredCountries.map(country => (
                <CountryCard key={country.cca3} country={country} />
            ))}
        </div>
    );
};

export default CountryList;
