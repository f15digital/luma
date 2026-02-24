import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page" style={{ backgroundColor: 'var(--primary)', color: 'black' }}>
            {/* Hero Section */}
            <section style={{
                paddingTop: '160px',
                paddingBottom: '5rem',
                backgroundColor: 'var(--primary)'
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
                    >
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>Quem Somos</h1>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(0,0,0,0.8)' }}>
                            A Luma nasceu da necessidade de entregar estabilidade e alta qualidade em serviços terceirizados, com foco total em capital humano especializado.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section style={{ backgroundColor: 'var(--primary)', paddingBottom: '6rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>Nossa Filosofia</h2>
                            <p style={{ marginBottom: '1.5rem', color: 'rgba(0,0,0,0.8)' }}>
                                Acreditamos que o "RH do Futuro" é estratégico para o desenvolvimento dos negócios. Priorizamos a retenção de talentos e a integração entre excelência operacional e segurança.
                            </p>
                            <p style={{ color: 'rgba(0,0,0,0.8)' }}>
                                Nossa abordagem combina tecnologia de ponta com um olhar humano rigoroso, garantindo que cada colaborador esteja alinhado com a cultura e as necessidades de nossos clientes.
                            </p>
                        </div>
                        <div style={{ padding: '3rem', backgroundColor: 'white', borderRadius: '30px', color: 'var(--secondary)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', gap: '1.5rem' }}>
                                    <Target style={{ color: 'var(--accent)' }} size={40} />
                                    <div>
                                        <h3 style={{ marginBottom: '0.5rem' }}>Missão</h3>
                                        <p style={{ fontSize: '0.9rem', color: '#444' }}>Desenvolver soluções de facilities que impulsionem o sucesso de nossos clientes.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem' }}>
                                    <Eye style={{ color: 'var(--accent)' }} size={40} />
                                    <div>
                                        <h3 style={{ marginBottom: '0.5rem' }}>Visão</h3>
                                        <p style={{ fontSize: '0.9rem', color: '#444' }}>Ser referência nacional em gestão estratégica de pessoas e serviços operacionais.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem' }}>
                                    <Heart style={{ color: 'var(--accent)' }} size={40} />
                                    <div>
                                        <h3 style={{ marginBottom: '0.5rem' }}>Valores</h3>
                                        <p style={{ fontSize: '0.9rem', color: '#444' }}>Segurança, Transparência, Valorização Humana e Excelência Técnica.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Logos Section */}
            <section style={{ backgroundColor: 'white', padding: '4rem 0', marginTop: '0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '3rem', color: '#666', fontWeight: 600 }}>Parcerias de Sucesso</h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '3rem',
                        opacity: 0.7
                    }}>
                        {[
                            'braga-150x150-1.jpg', 'integrat-150x150-1.jpg', 'jbs-150x150-1.jpg',
                            'kynetex-150x150-1.jpg', 'marson-150x150-1.jpg', 'mct-150x150-1.jpg',
                            'montrel-150x150-1.jpg', 'msp-150x150-1.jpg', 'multivac-150x150-1.jpg',
                            'ns-150x150-1.jpg', 'olimpo-150x150-1.jpg', 'phoron-150x150-1.jpg',
                            'texas-150x150-1.jpg', 'wtm-150x150-1.jpg'
                        ].map((logo, i) => (
                            <img
                                key={i}
                                src={`/logos/${logo}`}
                                alt="Client Logo"
                                style={{
                                    height: '60px',
                                    width: 'auto',
                                    filter: 'grayscale(100%)',
                                    transition: 'filter 0.3s ease'
                                }}
                                onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%)'}
                                onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%)'}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
