import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section style={{
                paddingTop: '160px',
                paddingBottom: '5rem',
                background: 'linear-gradient(to bottom, #111, #080808)'
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
                    >
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Quem <span className="lime-text">Somos</span></h1>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)' }}>
                            A Luma nasceu da necessidade de entregar estabilidade e alta qualidade em serviços terceirizados, com foco total em capital humano especializado.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Nossa <span className="lime-text">Filosofia</span></h2>
                            <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>
                                Acreditamos que o "RH do Futuro" é estratégico para o desenvolvimento dos negócios. Priorizamos a retenção de talentos e a integração entre excelência operacional e segurança.
                            </p>
                            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                                Nossa abordagem combina tecnologia de ponta com um olhar humano rigoroso, garantindo que cada colaborador esteja alinhado com a cultura e as necessidades de nossos clientes.
                            </p>
                        </div>
                        <div className="glass" style={{ padding: '3rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', gap: '1.5rem' }}>
                                    <Target className="lime-text" size={40} />
                                    <div>
                                        <h3 style={{ marginBottom: '0.5rem' }}>Missão</h3>
                                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Desenvolver soluções de facilities que impulsionem o sucesso de nossos clientes.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem' }}>
                                    <Eye className="lime-text" size={40} />
                                    <div>
                                        <h3 style={{ marginBottom: '0.5rem' }}>Visão</h3>
                                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Ser referência nacional em gestão estratégica de pessoas e serviços operacionais.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem' }}>
                                    <Heart className="lime-text" size={40} />
                                    <div>
                                        <h3 style={{ marginBottom: '0.5rem' }}>Valores</h3>
                                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Segurança, Transparência, Valorização Humana e Excelência Técnica.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
