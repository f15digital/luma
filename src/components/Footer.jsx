import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#050505', padding: '5rem 0 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
                    <div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <img src={logo} alt="Grupo Luma" style={{ height: '60px', objectFit: 'contain' }} />
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', maxWidth: '300px' }}>
                            Líder em terceirização de limpeza e gestão de facilities. Tecnologia e pessoas conectadas para o seu sucesso.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: 'white' }}><Instagram size={20} /></a>
                            <a href="#" style={{ color: 'white' }}><Linkedin size={20} /></a>
                            <a href="#" style={{ color: 'white' }}><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem', color: 'white' }}>Links Rápidos</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><Link to="/quem-somos" style={{ color: 'rgba(255,255,255,0.6)' }}>Quem Somos</Link></li>
                            <li><Link to="/noticias" style={{ color: 'rgba(255,255,255,0.6)' }}>Notícias</Link></li>
                            <li><Link to="/trabalhe-conosco" style={{ color: 'rgba(255,255,255,0.6)' }}>Trabalhe Conosco</Link></li>
                            <li><Link to="/contato" style={{ color: 'rgba(255,255,255,0.6)' }}>Contato</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem', color: 'white' }}>Contato</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                                <MapPin size={20} className="lime-text" />
                                <span>Av. Selma Parada, 201 - Campinas, SP</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                                <Phone size={20} className="lime-text" />
                                <span>(19) 3113-3737</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                                <Mail size={20} className="lime-text" />
                                <span>comercial@lumaterceirizacao.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                    <p>&copy; {new Date().getFullYear()} Luma Terceirização. Todos os direitos reservados. Criado por: F15 Digital - <a href="https://f15digital.com.br" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>agência de marketing digital</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
