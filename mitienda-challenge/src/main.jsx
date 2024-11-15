import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MiTiendaApp } from './MiTiendaApp.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MiTiendaApp />
  </StrictMode>
);
