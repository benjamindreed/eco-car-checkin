# Customer Check-In App

This project is a customer check-in application that integrates with Square Appointments to streamline the appointment check-in process. Employees can look up customer appointments, confirm details, and have customers sign a Terms of Service Agreement.

## Features

- **Appointment Lookup**: Employees can search for existing appointments using customer details.
- **Customer Confirmation**: Employees can confirm customer name, contact information, vehicle make and model, and size variant.
- **Terms of Service Agreement**: Customers can review and sign the Terms of Service to finalize their check-in.

## Project Structure

```
customer-checkin-app
├── src
│   ├── app.ts                # Entry point of the application
│   ├── components
│   │   ├── CheckInForm.tsx   # Component for customer check-in form
│   │   ├── AppointmentLookup.tsx # Component for looking up appointments
│   │   └── TermsOfService.tsx # Component for Terms of Service agreement
│   ├── services
│   │   └── squareApi.ts      # API service for Square Appointments
│   ├── types
│   │   └── index.ts          # TypeScript interfaces and types
│   └── utils
│       └── validation.ts      # Utility functions for input validation
├── public
│   └── index.html            # Main HTML file
├── package.json              # NPM configuration file
├── tsconfig.json             # TypeScript configuration file
├── README.md                 # Project documentation
└── .env                      # Environment variables
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd customer-checkin-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your Square Appointments API keys and other configuration settings.

5. Start the application:
   ```
   npm start
   ```

## Usage

- Employees can access the application through the main HTML file.
- Use the Appointment Lookup component to find customer appointments.
- Confirm customer details and have them sign the Terms of Service to complete the check-in process.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.