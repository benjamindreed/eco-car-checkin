import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CheckInForm from './components/CheckInForm';
import AppointmentLookup from './components/AppointmentLookup';
import TermsOfService from './components/TermsOfService';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={AppointmentLookup} />
                <Route path="/checkin" component={CheckInForm} />
                <Route path="/terms" component={TermsOfService} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));