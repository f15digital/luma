import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Send } from 'lucide-react';

const Careers = () => {
    const jobs = [
        { title: "Assistente Financeiro", location: "Jaguariúna, SP", type: "Presencial" },
        { title: "Cozinheiro(a) Líder", location: "Jaguariúna, SP", type: "Presencial" },
        { title: "Nutricionista", location: "Jaguariúna, SP", type: "Presencial" }
    ];

    return (
        <div className="careers-page">
            <section style={{ paddingTop: '160px', background: 'linear-gradient(to bottom, #111, #080808)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ textAlign: 'center', marginBottom: '5rem' }}
                    >
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Trabalhe <span className="lime-text">Conosco</span></h1>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto' }}>
                            Junte-se a uma empresa que valoriza o capital humano e oferece oportunidades reais de crescimento.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>Vagas <span className="lime-text">Abertas</span></h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {jobs.map((job, i) => (
                                    <div key={i} className="glass" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div>
                                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>{job.title}</h3>
                                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', opacity: 0.6 }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><MapPin size={14} /> {job.location}</span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Briefcase size={14} /> {job.type}</span>
                                            </div>
                                        </div>
                                        <button className="btn btn-outline" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>Ver Detalhes</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="glass" style={{ padding: '3rem', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Envie seu <span className="lime-text">Currículo</span></h2>
                                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Nome Completo</label>
                                        <input type="text" style={{ padding: '1rem', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>E-mail</label>
                                        <input type="email" style={{ padding: '1rem', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Telefone</label>
                                        <input type="tel" style={{ padding: '1rem', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Vaga de Interesse</label>
                                        <select style={{ padding: '1rem', borderRadius: '10px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>
                                            <option>Selecione uma vaga</option>
                                            {jobs.map(j => <option key={j.title}>{j.title}</option>)}
                                            <option>Banco de Talentos</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                                        Enviar Candidatura <Send size={18} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
