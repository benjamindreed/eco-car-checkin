import React, { useState } from 'react';
import { validateContactInfo, validateVehicleDetails } from '../utils/validation';
import { CustomerDetails } from '../types';

const CheckInForm: React.FC = () => {
    const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
        name: '',
        contactInfo: '',
        vehicleMake: '',
        vehicleModel: '',
        sizeVariant: '',
    });
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCustomerDetails({ ...customerDetails, [name]: value });
    };

    const handleTermsChange = () => {
        setTermsAccepted(!termsAccepted);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, contactInfo, vehicleMake, vehicleModel } = customerDetails;

        if (!validateContactInfo(contactInfo)) {
            setError('Invalid contact information.');
            return;
        }

        if (!validateVehicleDetails(vehicleMake, vehicleModel)) {
            setError('Invalid vehicle details.');
            return;
        }

        if (!termsAccepted) {
            setError('You must accept the Terms of Service.');
            return;
        }

        // Submit the customer details to the API or handle the check-in process
        console.log('Customer checked in:', customerDetails);
        setError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Customer Check-In</h2>
            {error && <p className="error">{error}</p>}
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={customerDetails.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Contact Information:</label>
                <input type="text" name="contactInfo" value={customerDetails.contactInfo} onChange={handleChange} required />
            </div>
            <div>
                <label>Vehicle Make:</label>
                <input type="text" name="vehicleMake" value={customerDetails.vehicleMake} onChange={handleChange} required />
            </div>
            <div>
                <label>Vehicle Model:</label>
                <input type="text" name="vehicleModel" value={customerDetails.vehicleModel} onChange={handleChange} required />
            </div>
            <div>
                <label>Size Variant:</label>
                <input type="text" name="sizeVariant" value={customerDetails.sizeVariant} onChange={handleChange} />
            </div>
            <div>
                <input type="checkbox" checked={termsAccepted} onChange={handleTermsChange} />
                <label>I accept the Terms of Service</label>
            </div>
            <button type="submit">Check In</button>
        </form>
    );
};

export default CheckInForm;