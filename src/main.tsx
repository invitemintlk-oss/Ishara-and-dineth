import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Admin } from './components/Admin';
import './index.css';

const isAdmin = /^\/admin\/?$/i.test(window.location.pathname);

createRoot(document.getElementById('root')!).render(
  <StrictMode>{isAdmin ? <Admin /> : <App />}</StrictMode>,
);
