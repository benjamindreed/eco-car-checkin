export const validateContactInfo = (name: string, contact: string): boolean => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const contactRegex = /^[0-9]{10}$/; // Assuming a 10-digit phone number

    return nameRegex.test(name) && contactRegex.test(contact);
};

export const validateVehicleDetails = (make: string, model: string, sizeVariant: string): boolean => {
    const makeRegex = /^[a-zA-Z0-9\s]+$/;
    const modelRegex = /^[a-zA-Z0-9\s]+$/;
    const sizeVariantRegex = /^(Compact|Sedan|SUV|Truck)$/; // Example size variants

    return makeRegex.test(make) && modelRegex.test(model) && sizeVariantRegex.test(sizeVariant);
};

export const validateTermsAcceptance = (isAccepted: boolean): boolean => {
    return isAccepted;
};