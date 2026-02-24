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
            <section style={{ paddingTop: '160px', backgroundColor: 'var(--primary)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ textAlign: 'center', marginBottom: '5rem' }}
                    >
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'black' }}>Trabalhe Conosco</h1>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(0,0,0,0.8)', maxWidth: '700px', margin: '0 auto' }}>
                            Junte-se a uma empresa que valoriza o capital humano e oferece oportunidades reais de crescimento.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', color: 'black' }}>Vagas Abertas</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {jobs.map((job, i) => (
                                    <div key={i} style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                        <div>
                                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: 'black' }}>{job.title}</h3>
                                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: '#666' }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><MapPin size={14} /> {job.location}</span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Briefcase size={14} /> {job.type}</span>
                                            </div>
                                        </div>
                                        <button className="btn btn-outline" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem', borderColor: 'var(--accent)', color: 'var(--accent)' }}>Ver Detalhes</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div style={{ padding: '3rem', backgroundColor: 'white', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'black' }}>Envie seu Currículo</h2>
                                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', color: '#444' }}>Nome Completo</label>
                                        <input type="text" style={{ padding: '1rem', borderRadius: '10px', background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)', color: 'black' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', color: '#444' }}>E-mail</label>
                                        <input type="email" style={{ padding: '1rem', borderRadius: '10px', background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)', color: 'black' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', color: '#444' }}>Telefone</label>
                                        <input type="tel" style={{ padding: '1rem', borderRadius: '10px', background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)', color: 'black' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', color: '#444' }}>Vaga de Interesse</label>
                                        <select style={{ padding: '1rem', borderRadius: '10px', background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)', color: 'black' }}>
                                            <option>Selecione uma vaga</option>
                                            {jobs.map(j => <option key={j.title}>{j.title}</option>)}
                                            <option>Banco de Talentos</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', backgroundColor: 'var(--accent)' }}>
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
