import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const [message, setMessage] = useState('Olá gostaria de solicitar um orçamento');

    useEffect(() => {
        // Get UTM parameters from URL
        const params = new URLSearchParams(window.location.search);
        const utmTerm = params.get('utm_term');
        const utmSource = params.get('utm_source');

        if (utmTerm) {
            // Decode the term if it's encoded
            const decodedTerm = decodeURIComponent(utmTerm);
            setMessage(`[${decodedTerm}] Olá gostaria de solicitar um orçamento`);
        } else if (utmSource === 'google') {
            // If we know it's from Google but no specific term was passed
            setMessage('Olá gostaria de solicitar um orçamento');
        }
    }, []);

    const handleClick = () => {
        const phone = '5519988820950';
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="whatsapp-float-container">
            <div className="whatsapp-tooltip">Solicitar Orçamento</div>
            <button className="whatsapp-float-btn" onClick={handleClick} aria-label="Falar no WhatsApp">
                <MessageCircle size={32} fill="currentColor" />
                <span className="pulse-ring"></span>
            </button>
        </div>
    );
};

export default WhatsAppButton;
