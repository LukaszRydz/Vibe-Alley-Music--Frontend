import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import { Navbar } from './components/Navbar/Navbar';
import { LoadingPage } from './pages/LoadingPage';
import { UserProvider } from './context/User/User';
import { HomePage } from './pages/HomePage';
import { Footer } from './components/Footer/Footer';

import { ResponseHandler } from './components/ResponseHandler/ResponseHandler';
import { Chat } from './components/Chat/Chat';

const CartPage = React.lazy(() => import('./pages/CartPage'));
const CatalogPage = React.lazy(() => import('./pages/CatalogPage'));
const ProductPage = React.lazy(() => import('./pages/ProductPage'));
const AuthPage = React.lazy(() => import('./pages/AuthPage'));
const SettingsPage = React.lazy(() => import('./pages/SettingsPage'));
const PolicyPage = React.lazy(() => import('./pages/PolicyPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const OrderedPage = React.lazy(() => import('./pages/OrderedPage'));

// Styles
import "./App.scss";

export const App = () => {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'dark');
    document.documentElement.setAttribute('animations', localStorage.getItem('animations') || 'on');
    document.documentElement.setAttribute('auto-read', localStorage.getItem('auto-read') || 'off');

    return (
        <UserProvider>
            <Router>
                <div className="app">
                    <ResponseHandler />
                    <Navbar />
                    <div className='app_content'>
                        <Suspense fallback={<LoadingPage />}>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/auth" element={<AuthPage />} />
                                <Route path="/cart" element={<CartPage />} />
                                <Route path="/catalog" element={<CatalogPage />} />
                                <Route path="/product/:id" element={<ProductPage />} />
                                <Route path="/settings" element={<SettingsPage />} />
                                <Route path="/policy" element={<PolicyPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/ordered/:state" element={<OrderedPage />} />
                            </Routes>
                        </Suspense>
                    </div>
                </div>
                <Chat />
                <Footer />
            </Router>
        </UserProvider>
    );
}

export default App;