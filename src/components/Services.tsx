import { Blocks, BrainCircuit, Code, LineChart, Globe, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Code,
    title: "Sistemas Sob Medida",
    description: "Desenvolvemos aplicações robustas e escaláveis, desenhadas exclusivamente para os fluxos e regras de negócio da sua empresa. Do frontend ao backend."
  },
  {
    icon: BrainCircuit,
    title: "Automações Inteligentes",
    description: "Eliminamos o trabalho manual e repetitivo. Integramos os seus softwares atuais para conversarem entre si, aumentando a velocidade da sua operação."
  },
  {
    icon: LineChart,
    title: "Engenharia de Dados & BI",
    description: "Transformamos o caos das planilhas em dashboards visuais avançados. Tome decisões baseadas em dados com clareza e previsibilidade."
  },
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "A sua montra digital premium. Sites velozes, seguros e totalmente optimizados para motores de busca (SEO) com resultados comprováveis."
  }
];

export default function Services() {
  return (
    <section id="servicos">
      <div className="container md:mx-auto max-w-[1200px]">
        <div className="services-header">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-tag">O que fazemos</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="section-title">
            Soluções que <span style={{ color: "var(--color-cyan)" }}>transformam</span> o seu negócio
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="section-sub center">
            Cada solução é construída sob medida para os seus objetivos. Sem templates genéricos, apenas resultados reais.
          </motion.p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="service-card"
            >
              <div className="service-num">0{index + 1}</div>
              <div className="service-icon">
                <service.icon />
              </div>
              <h3>{service.title}</h3>
              <p>
                {service.description}
              </p>
              <a href="#contato" className="service-link">
                Saiba mais <ArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
