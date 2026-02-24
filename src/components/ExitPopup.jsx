import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, AlertTriangle } from 'lucide-react';
import './ExitPopup.css';

const ExitPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e) => {
            // Trigger when mouse leaves the top of the window
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [hasShown]);

    const [message, setMessage] = useState('Olá gostaria de solicitar um orçamento corporativo');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const utmTerm = params.get('utm_term');
        if (utmTerm) {
            const decodedTerm = decodeURIComponent(utmTerm);
            setMessage(`[${decodedTerm}] Olá gostaria de solicitar um orçamento`);
        }
    }, []);

    const closePopup = () => {
        setIsVisible(false);
    };

    const handleWhatsAppClick = () => {
        const phone = '5519988820950';
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
        closePopup();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="exit-popup-overlay">
                    <motion.div
                        className="exit-popup-container"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        <div className="exit-popup-header">
                            <div className="header-content">
                                <h2 className="header-title">Luma Terceirização</h2>
                                <p className="header-subtitle">Selecione como podemos ajudar sua empresa hoje.</p>
                            </div>
                            <button className="close-btn" onClick={closePopup}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className="exit-popup-body">
                            <button className="whatsapp-corporate-btn" onClick={handleWhatsAppClick}>
                                <div className="whatsapp-icon-wrapper">
                                    <MessageCircle size={32} fill="currentColor" />
                                </div>
                                <div className="btn-text-content">
                                    <span className="main-text">Solicitar Orçamento Corporativo</span>
                                    <span className="sub-text">Falar com Consultor de Facilities</span>
                                </div>
                            </button>

                            <div className="warning-box">
                                <AlertTriangle size={20} className="warning-icon" />
                                <p className="warning-text">
                                    <strong>Atenção:</strong> Currículos enviados pelo botão verde serão descartados automaticamente.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ExitPopup;
