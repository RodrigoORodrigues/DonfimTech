import { useState } from 'react';
import { motion } from 'motion/react';

const faqs = [
  {
    q: "A Donfim Tech desenvolve sistemas do zero ou usa plataformas prontas?",
    a: "Trabalhamos de forma híbrida. Construímos sistemas totalmente personalizados sob medida, mas também utilizamos as melhores tecnologias de automação do mercado para garantir rapidez e eficiência na entrega."
  },
  {
    q: "Quanto tempo demora a criação de uma Landing Page ou Site?",
    a: "O prazo médio para Landing Pages de alta conversão é de 7 a 10 dias úteis. Para sites institucionais ou sistemas complexos, fazemos um cronograma rigoroso e personalizado após o briefing inicial."
  },
  {
    q: "Eu já tenho um site — a Donfim Tech pode apenas automatizar os meus processos?",
    a: "Sim! Somos especialistas em integração. Podemos conectar o seu site atual a CRMs, planilhas ou sistemas de e-mail marketing para que tudo funcione sem intervenção manual."
  },
  {
    q: "Oferecem suporte após a entrega do projeto?",
    a: "Claro! Cada projeto inclui um período de suporte pós-entrega. Para clientes que desejam acompanhamento contínuo, oferecemos planos de manutenção e crescimento mensal personalizados."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="container md:mx-auto max-w-[1200px]">
        <div className="faq-header">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-tag">FAQ</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="section-title">
            Perguntas Frequentes
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="section-sub center">
            Tudo o que precisa saber sobre como trabalhamos.
          </motion.p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-btn" 
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                {faq.q}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body">
                <p>{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
