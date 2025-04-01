const axios = require('axios');

async function fetchAppointments(accessToken) {
    try {
        const response = await axios.get('https://connect.squareup.com/v2/appointments', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data.appointments;
    } catch (error) {
        console.error('Error fetching appointments:', error.response.data);
        throw error;
    }
}

async function checkInCustomer(accessToken, appointmentId) {
    try {
        await axios.put(
            `https://connect.squareup.com/v2/appointments/${appointmentId}/checkin`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        console.log('Customer checked in successfully.');
    } catch (error) {
        console.error('Error checking in customer:', error.response.data);
        throw error;
    }
}

module.exports = { fetchAppointments, checkInCustomer };
