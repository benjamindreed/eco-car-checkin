import React, { useState } from 'react';
import { fetchAppointmentDetails } from '../services/squareApi';
import { Appointment } from '../types';

const AppointmentLookup: React.FC = () => {
    const [customerName, setCustomerName] = useState('');
    const [appointment, setAppointment] = useState<Appointment | null>(null);
    const [error, setError] = useState('');

    const handleLookup = async () => {
        try {
            const result = await fetchAppointmentDetails(customerName);
            if (result) {
                setAppointment(result);
                setError('');
            } else {
                setError('No appointment found for this customer.');
            }
        } catch (err) {
            setError('Error fetching appointment details. Please try again.');
        }
    };

    return (
        <div>
            <h2>Appointment Lookup</h2>
            <input
                type="text"
                placeholder="Enter Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
            />
            <button onClick={handleLookup}>Lookup Appointment</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {appointment && (
                <div>
                    <h3>Appointment Details</h3>
                    <p>Name: {appointment.customerName}</p>
                    <p>Contact: {appointment.contactInfo}</p>
                    <p>Vehicle Make: {appointment.vehicleMake}</p>
                    <p>Vehicle Model: {appointment.vehicleModel}</p>
                    <p>Size Variant: {appointment.sizeVariant}</p>
                </div>
            )}
        </div>
    );
};

export default AppointmentLookup;