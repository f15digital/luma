import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const News = () => {
    const posts = [
        {
            title: "CONTRATO LIMPEZA, MAS NÃO PARA NINGUÉM!",
            excerpt: "Entenda os desafios da retenção de talentos no setor de facilities e como a Luma soluciona o turnover.",
            date: "20 Ago, 2023",
            category: "Gestão"
        },
        {
            title: "Dengue: Áreas de Recreação em Condomínios em Perigo!",
            excerpt: "Como uma limpeza técnica e manutenção preventiva podem proteger os moradores contra a proliferação.",
            date: "15 Jul, 2023",
            category: "Saúde"
        },
        {
            title: "O impacto da tecnologia na Limpeza Industrial",
            excerpt: "Como o uso de novos equipamentos otimiza o tempo e reduz custos operacionais em grandes fábricas.",
            date: "05 Jun, 2023",
            category: "Inovação"
        }
    ];

    return (
        <div className="news-page">
            <section style={{ paddingTop: '160px', background: 'linear-gradient(to bottom, #111, #080808)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}
                    >
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Luma <span className="lime-text">Notícias</span></h1>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)' }}>Acompanhe as últimas tendências em facilities e gestão de pessoas.</p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {posts.map((post, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass"
                                style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ padding: '2rem', flex: 1 }}>
                                    <span className="lime-text" style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        {post.category}
                                    </span>
                                    <h3 style={{ margin: '1rem 0', fontSize: '1.5rem', lineHeight: '1.3' }}>{post.title}</h3>
                                    <p style={{ opacity: 0.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>{post.excerpt}</p>
                                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', opacity: 0.5 }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={14} /> {post.date}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><User size={14} /> Grupo Luma</span>
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--primary)' }}>
                                        Ler Mais <ArrowRight size={16} />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;
