import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contato" className="py-24">
      <div className="container md:mx-auto max-w-[1200px]">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="cta-box"
        >
          <div className="section-tag">Vamos começar</div>
          <h2 className="section-title">Pronto para a <span style={{ color: 'var(--color-cyan)' }}>Transformação?</span></h2>
          <p className="section-sub">Agende uma reunião gratuita de 15 minutos e descubra como a Donfim Tech pode escalar os seus resultados.</p>
          <div className="cta-actions">
            <a href="mailto:contato@donfimtech.com" className="btn-primary">
              Solicitar Orçamento Grátis
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href="https://wa.me/244900000000" className="btn-ghost">
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
