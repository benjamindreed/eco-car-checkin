import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [currentDate] = useState(new Date().toISOString().split('T')[0]); // Get current date in YYYY-MM-DD format

    useEffect(() => {
        // Fetch logged-in user info
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/user'); // Replace with your API endpoint
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        // Fetch appointments for the logged-in employee and current day
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('/api/appointments', {
                    params: {
                        employeeId: user?.id, // Pass the logged-in employee's ID
                        date: currentDate, // Filter by the current date
                    },
                });
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        if (user) {
            fetchAppointments();
        } else {
            fetchUser();
        }
    }, [user, currentDate]);

    const handleCheckIn = (appointmentId) => {
        // Kick off the check-in workflow
        console.log(`Check-in started for appointment ID: ${appointmentId}`);
        // Add your check-in logic here
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Dashboard</h1>
            {user ? (
                <div>
                    <h2>Welcome, {user.name}!</h2>
                </div>
            ) : (
                <p>Loading user information...</p>
            )}

            <h3>Today's Appointments</h3>
            {appointments.length > 0 ? (
                <ul>
                    {appointments.map((appointment) => (
                        <li key={appointment.id} style={{ marginBottom: '10px' }}>
                            <div>
                                <strong>{appointment.serviceName}</strong> - {appointment.date} at {appointment.time}
                            </div>
                            <button onClick={() => handleCheckIn(appointment.id)}>Check In</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No appointments for today.</p>
            )}
        </div>
    );
};

export default Dashboard;