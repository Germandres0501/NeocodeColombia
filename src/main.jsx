import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './assets/css/global.css';
import './index.css'; // Puedes dejarlo si lo estás usando

import App from './App.jsx';
import { AuthProvider } from './context/AuthContext'; // ✅ importamos el proveedor

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>         {/* ✅ envolvemos la app */}
            <App />
        </AuthProvider>
    </StrictMode>
);
