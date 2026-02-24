import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Clock, Zap, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

import heroImg from '../assets/hero-bg-new.png';
import corporateImg from '../assets/corporate.png';
import condoImg from '../assets/condo.png';
import industrialImg from '../assets/industrial.png';

const Home = () => {
    const images = {
        hero: heroImg,
        corporate: corporateImg,
        condo: condoImg,
        industrial: industrialImg
    };

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                backgroundImage: `linear-gradient(rgba(8, 8, 8, 0.6), rgba(8, 8, 8, 0.4)), url(${images.hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: '80px'
            }}>
                <div className="container">
                    <motion.div {...fadeIn} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
                            <span className="lime-text">Empresa Líder</span> em Terceirização de Limpeza Campinas, Valinhos e Vinhedo
                        </h1>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'rgba(255,255,255,0.8)', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
                            Soluções especializadas de limpeza para escritórios, condomínios e empresas em Campinas e Região. Reduza custos com gestão de facilities eficiente e profissionais CLT treinados.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <a href="#contato" className="btn btn-primary">
                                Solicitar Orçamento <ArrowRight size={18} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Excelência Section */}
            <section style={{ backgroundColor: 'var(--primary)', padding: '6rem 0' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass"
                        style={{
                            backgroundColor: 'white',
                            color: 'var(--secondary)',
                            padding: '4rem',
                            textAlign: 'center',
                            border: 'none',
                            maxWidth: '900px',
                            margin: '0 auto'
                        }}
                    >
                        <Shield size={48} style={{ color: 'var(--accent)', marginBottom: '1.5rem' }} />
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Excelência em Limpeza Corporativa</h2>
                        <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '2rem' }}>
                            A terceirização de limpeza para empresas exige profissionalismo absoluto. Na Luma, reduzimos seus custos operacionais fornecendo equipes 100% CLT e supervisão técnica rigorosa.
                        </p>
                        <button className="btn btn-primary" style={{ backgroundColor: 'var(--accent)' }}>
                            Falar com Consultor
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Desafios Section */}
            <section style={{ backgroundColor: 'var(--primary)', paddingTop: 0 }}>
                <div className="container">
                    <h2 className="section-title" style={{ color: 'var(--secondary)', marginBottom: '3rem' }}>
                        Superamos os Desafios da Gestão
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { icon: <Zap />, title: "Custos Elevados", desc: "Reduzimos encargos trabalhistas e burocracia desnecessária." },
                            { icon: <Users />, title: "Gestão de Pessoas", desc: "Recrutamento, treinamento e gestão completa de equipes." },
                            { icon: <Shield />, title: "Inconsistência", desc: "Garantia de padrão de qualidade em todas as suas unidades." },
                            { icon: <Clock />, title: "Riscos Trabalhistas", desc: "Gestão 100% em conformidade com as leis CLT." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '15px', color: 'var(--secondary)' }}
                            >
                                <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{item.icon}</div>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>{item.title}</h3>
                                <p style={{ opacity: 0.8 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialties B2B */}
            <section style={{ backgroundColor: 'var(--primary)', paddingTop: 0 }}>
                <div className="container">
                    <h2 className="section-title" style={{ color: 'var(--secondary)' }}>Nossas Especialidades B2B</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Limpeza Corporativa", img: images.corporate },
                            { title: "Limpeza para Condomínios", img: images.condo },
                            { title: "Limpeza Industrial", img: images.industrial }
                        ].map((specialty, i) => (
                            <div key={i} style={{ borderRadius: '20px', overflow: 'hidden', backgroundColor: 'white' }}>
                                <img src={specialty.img} alt={specialty.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div style={{ padding: '1.5rem', color: 'var(--secondary)' }}>
                                    <h3 style={{ marginBottom: '0.5rem' }}>{specialty.title}</h3>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Soluções premium para ambientes de alto desempenho.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Diferenciais Section */}
            <section>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
                        <div style={{ backgroundColor: '#111', padding: '3rem', borderRadius: '30px' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Diferenciais para o Mercado <span className="lime-text">Corporativo</span></h2>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                {[
                                    { title: "Inovação em Limpeza", desc: "Processos modernos e sustentáveis." },
                                    { title: "Equipe CLT Própria", desc: "Estabilidade e segurança jurídica." },
                                    { title: "Supervisão Rigorosa", desc: "Checklists diários e feedback real." },
                                    { title: "Compliance Total", desc: "Segurança total para sua empresa." }
                                ].map((diff, i) => (
                                    <div key={i}>
                                        <CheckCircle2 size={24} className="lime-text" style={{ marginBottom: '0.5rem' }} />
                                        <h4 style={{ marginBottom: '0.5rem' }}>{diff.title}</h4>
                                        <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>{diff.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ padding: '3rem', backgroundColor: 'white', borderRadius: '30px', color: 'var(--secondary)' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Por que escolher a Luma?</h2>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {[
                                    "Atendimento B2B Personalizado",
                                    "Gestão de Facilities com foco em redução de custos",
                                    "Cronogramas de limpeza técnica detalhados",
                                    "Reposição de faltas garantida em contrato",
                                    "Suporte operacional ágil e eficiente"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontWeight: 500 }}>
                                        <CheckCircle2 size={20} style={{ color: 'var(--primary)' }} /> {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-primary" style={{ width: '100%', marginTop: '3rem', backgroundColor: 'var(--accent)' }}>
                                <MessageSquare size={18} /> Falar com Especialista
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
