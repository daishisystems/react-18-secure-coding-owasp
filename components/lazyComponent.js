// src/LazyComponent.js
import React, { useState, useEffect } from 'react';

const LazyComponent = () => {
    const [patients, setPatients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch patients' data from the API when the component mounts
        fetch("/api/patients")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch patients");
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched data:", data);
                setPatients(data);
                setIsLoading(false);
            })            
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);  // Empty dependency array means this effect runs once when the component mounts

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #e0e0e0', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Patients List:</h2>
    <ul style={{ listStyleType: 'none', padding: '0' }}>
        {patients.map(patient => (
            <li key={patient.id} style={{ background: '#f7f7f7', padding: '15px', border: '1px solid #e0e0e0', borderRadius: '5px', marginBottom: '10px' }}>
                <strong style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Name:</strong> {patient.firstname} {patient.surname}<br />
                <strong style={{ color: '#777' }}>Phone:</strong> {patient.phone}
            </li>
        ))}
    </ul>
</div>

    );
}

export default LazyComponent;
