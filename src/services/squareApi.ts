import axios from 'axios';

const BASE_URL = 'https://connect.squareup.com/v2/appointments';

export const fetchAppointmentDetails = async (appointmentId: string, accessToken: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/${appointmentId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching appointment details:', error);
        throw error;
    }
};

export const confirmCustomerInformation = async (appointmentId: string, customerData: any, accessToken: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/${appointmentId}/confirm`, customerData, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error confirming customer information:', error);
        throw error;
    }
};