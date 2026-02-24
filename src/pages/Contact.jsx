import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="contact-page">
            <section style={{ paddingTop: '160px', backgroundColor: 'var(--primary)', paddingBottom: '6rem' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ textAlign: 'center', marginBottom: '5rem' }}
                    >
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'black' }}>Entre em Contato</h1>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(0,0,0,0.8)' }}>Estamos prontos para atender as necessidades da sua empresa.</p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ padding: '2rem', display: 'flex', gap: '1.5rem', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255, 94, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Phone style={{ color: 'var(--accent)' }} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem', color: 'black' }}>Telefone</h4>
                                    <p style={{ color: '#666' }}>(19) 3113-3737</p>
                                </div>
                            </div>

                            <div style={{ padding: '2rem', display: 'flex', gap: '1.5rem', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255, 94, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <MessageCircle style={{ color: 'var(--accent)' }} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem', color: 'black' }}>WhatsApp</h4>
                                    <p style={{ color: '#666' }}>(19) 98882-0950</p>
                                </div>
                            </div>

                            <div style={{ padding: '2rem', display: 'flex', gap: '1.5rem', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255, 94, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Mail style={{ color: 'var(--accent)' }} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem', color: 'black' }}>E-mail</h4>
                                    <p style={{ color: '#666' }}>comercial@lumaterceirizacao.com.br</p>
                                </div>
                            </div>

                            <div style={{ padding: '2rem', display: 'flex', gap: '1.5rem', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255, 94, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Clock style={{ color: 'var(--accent)' }} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem', color: 'black' }}>Horário</h4>
                                    <p style={{ color: '#666' }}>Seg - Sex: 08h às 18h</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ gridColumn: 'span 2' }}>
                            <div style={{ padding: '3rem', height: '100%', backgroundColor: 'white', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', color: 'black' }}>Envie uma Mensagem</h2>
                                <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <input placeholder="Seu Nome" style={{ padding: '1rem', borderRadius: '10px', background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)', color: 'black' }} />
                                    <input placeholder="Seu E-mail" style={{ padding: '1rem', borderRadius: '10px', background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)', color: 'black' }} />
                                    <input placeholder="Empresa" style={{ padding: '1rem', borderRadius: '10px', background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)', color: 'black' }} />
                                    <input placeholder="Assunto" style={{ padding: '1rem', borderRadius: '10px', background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)', color: 'black' }} />
                                    <textarea placeholder="Sua Mensagem" style={{ gridColumn: 'span 2', padding: '1rem', borderRadius: '10px', background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)', color: 'black', minHeight: '150px' }}></textarea>
                                    <button className="btn btn-primary" style={{ gridColumn: 'span 2', backgroundColor: 'var(--accent)' }}>Enviar Mensagem</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '4rem', borderRadius: '30px', overflow: 'hidden', height: '400px', border: '1px solid rgba(0,0,0,0.1)' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.5776106263544!2d-47.0390176!3d-22.8920496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf4249a9a3b7%3A0x6b3068e1a662ad7!2sAv.%20Selma%20Parada%2C%20201%20-%20Campinas%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
