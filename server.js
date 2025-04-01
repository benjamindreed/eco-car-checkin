const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const SQUARE_CLIENT_ID = 'sandbox-sq0idb-kHRposSOkF6rxesms3vMGA';
const SQUARE_CLIENT_SECRET = 'EAAAl3oDtubo5PZDN0UEiwizG27_8ImE0wwZU5rC7zUquUZHBniBKzGX7qQCqfsD';
const REDIRECT_URI = 'YOUR_REDIRECT_URI';

// Initialize SQLite database
const db = new sqlite3.Database('./tokens.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        db.run(
            `CREATE TABLE IF NOT EXISTS tokens (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                access_token TEXT NOT NULL
            )`,
            (err) => {
                if (err) {
                    console.error('Error creating table:', err.message);
                }
            }
        );
    }
});

app.get('/oauth/callback', async (req, res) => {
    const { code } = req.query;

    try {
        const response = await axios.post('https://connect.squareup.com/oauth2/token', {
            client_id: SQUARE_CLIENT_ID,
            client_secret: SQUARE_CLIENT_SECRET,
            code,
            grant_type: 'authorization_code',
            redirect_uri: REDIRECT_URI,
        });

        const { access_token } = response.data;

        // Store the access token securely in the database
        db.run(
            `INSERT INTO tokens (access_token) VALUES (?)`,
            [access_token],
            (err) => {
                if (err) {
                    console.error('Error storing access token:', err.message);
                    res.status(500).send('Failed to store access token.');
                } else {
                    res.send('Authentication successful! You can now check in customers.');
                }
            }
        );
    } catch (error) {
        console.error('Error exchanging authorization code:', error.response.data);
        res.status(500).send('Authentication failed.');
    }
});

app.get('/tokens', (req, res) => {
    // Endpoint to retrieve stored tokens (for debugging or admin purposes)
    db.all(`SELECT * FROM tokens`, [], (err, rows) => {
        if (err) {
            console.error('Error retrieving tokens:', err.message);
            res.status(500).send('Failed to retrieve tokens.');
        } else {
            res.json(rows);
        }
    });
});

// Mock data for appointments
const appointments = [
    { id: 1, name: 'John Doe', time: '10:00 AM' },
    { id: 2, name: 'Jane Smith', time: '10:30 AM' },
    { id: 3, name: 'Alice Johnson', time: '11:00 AM' },
];

// Endpoint to get upcoming appointments
app.get('/api/appointments', (req, res) => {
    res.json(appointments);
});

// Endpoint to handle check-in
app.post('/api/checkin/:id', (req, res) => {
    const appointmentId = parseInt(req.params.id, 10);
    const appointment = appointments.find(a => a.id === appointmentId);

    if (appointment) {
        // Simulate check-in logic
        console.log(`Checked in appointment ID: ${appointmentId}`);
        res.status(200).send('Check-in successful');
    } else {
        res.status(404).send('Appointment not found');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
