import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import './all.min.css';
import UserProvider from './Pages/Context';
import EmailProvider from './Pages/email';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <EmailProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </EmailProvider>
    </React.StrictMode>
  </Router>
);

reportWebVitals();