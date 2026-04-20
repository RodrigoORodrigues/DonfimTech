import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Optimized inline SVG icons for faster loading and reduced bundle size
const TrendingUp = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
const Building2 = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>;
const GraduationCap = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
const Users = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const Truck = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>;
const CheckCircle2 = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>;
const ArrowRight = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;

const systems = [
  {
    id: 'analytics',
    name: 'Don Analytics',
    icon: TrendingUp,
    description: 'Plataforma de Business Intelligence, Engenharia de Dados e Análise Preditiva para guiar suas decisões.',
    color: 'from-blue-600 to-indigo-600',
    plans: [
      {
        name: 'Dashboard Basic',
        price: 'R$ 497',
        period: '/mês',
        features: ['Integração com 1 fonte', 'Dashboards Padrão', 'Atualização Diária', 'Até 3 Usuários'],
      },
      {
        name: 'BI Pro',
        price: 'R$ 1.297',
        period: '/mês',
        popular: true,
        features: ['Até 5 fontes de dados', 'Dashboards Personalizados', 'Atualização em Tempo Real', 'Análise Preditiva Básica', 'Até 10 Usuários'],
      },
      {
        name: 'Enterprise Data',
        price: 'Consultar',
        period: '',
        features: ['Fontes Ilimitadas', 'Engenharia de Dados', 'Machine Learning', 'Consultoria em BI', 'Usuários Ilimitados'],
      }
    ]
  },
  {
    id: 'gestao',
    name: 'Don Gestão',
    icon: Building2,
    description: 'Sistema ERP completo para controle financeiro, fiscal e de estoque da sua empresa.',
    color: 'from-blue-500 to-cyan-500',
    plans: [
      {
        name: 'Starter',
        price: 'R$ 197',
        period: '/mês',
        features: ['Controle Financeiro Básico', 'Emissão de Notas Fiscais (até 50)', 'Controle de Estoque', '1 Usuário'],
      },
      {
        name: 'Pro',
        price: 'R$ 397',
        period: '/mês',
        popular: true,
        features: ['Tudo do Starter', 'Notas Fiscais Ilimitadas', 'Relatórios Avançados', 'Integração Bancária', 'Até 5 Usuários'],
      },
      {
        name: 'Enterprise',
        price: 'Personalizado',
        period: '',
        features: ['Tudo do Pro', 'Múltiplas Filiais', 'API Personalizada', 'Suporte Dedicado 24/7', 'Usuários Ilimitados'],
      }
    ]
  },
  {
    id: 'ava',
    name: 'Don AVA',
    icon: GraduationCap,
    description: 'Ambiente Virtual de Aprendizagem potente para infoprodutores, escolas e universidades corporativas.',
    color: 'from-purple-500 to-pink-500',
    plans: [
      {
        name: 'Academy',
        price: 'R$ 247',
        period: '/mês',
        features: ['Hospedagem de Vídeos (100GB)', 'Até 500 Alunos', 'Certificados Automáticos', 'Fórum de Dúvidas'],
      },
      {
        name: 'Growth',
        price: 'R$ 597',
        period: '/mês',
        popular: true,
        features: ['Hospedagem Ilimitada', 'Até 5.000 Alunos', 'Gamificação Integrada', 'Trilhas de Aprendizado', 'Módulo de Provas'],
      },
      {
        name: 'Institution',
        price: 'R$ 1.297',
        period: '/mês',
        features: ['Alunos Ilimitados', 'Múltiplos Produtores/Professores', 'Single Sign-On (SSO)', 'White Label Completo'],
      }
    ]
  },
  {
    id: 'crm',
    name: 'Don CRM',
    icon: Users,
    description: 'Plataforma de Relacionamento com Cliente para gerir leads, pipeline de vendas e pós-venda.',
    color: 'from-emerald-400 to-teal-500',
    plans: [
      {
        name: 'Basic',
        price: 'R$ 149',
        period: '/mês',
        features: ['Gestão de Leads', '1 Pipeline de Vendas', 'Histórico de Interações', 'Até 3 Vendedores'],
      },
      {
        name: 'Sales Pro',
        price: 'R$ 349',
        period: '/mês',
        popular: true,
        features: ['Pipelines Ilimitados', 'Automação de E-mails', 'Integração WhatsApp', 'Metas e Comissões', 'Até 10 Vendedores'],
      },
      {
        name: 'Marketing + Sales',
        price: 'R$ 799',
        period: '/mês',
        features: ['Tudo do Sales Pro', 'Construtor de Landing Pages', 'Pontuação de Leads (Scoring)', 'Relatórios de ROI', 'Vendedores Ilimitados'],
      }
    ]
  },
  {
    id: 'deliver',
    name: 'Don Delivery',
    icon: Truck,
    description: 'Aplicativo de Delivery próprio para restaurantes e mercados com gestão de entregadores.',
    color: 'from-orange-400 to-red-500',
    plans: [
      {
        name: 'Essencial',
        price: 'R$ 189',
        period: '/mês',
        features: ['Cardápio Digital', 'Recebimento de Pedidos (Web)', 'Integração com WhatsApp', 'Sem Taxas por Pedido'],
      },
      {
        name: 'Restaurante App',
        price: 'R$ 497',
        period: '/mês',
        popular: true,
        features: ['Tudo do Essencial', 'App Próprio na Play Store na Web', 'Gestão de Entregadores', 'Programa de Fidelidade', 'Notificações Push'],
      },
      {
        name: 'Franquia',
        price: 'R$ 997',
        period: '/mês',
        features: ['Tudo do Restaurante App', 'Múltiplas Lojas', 'Roteirização Inteligente', 'App Entregadores Dedicado', 'Totem de Autoatendimento'],
      }
    ]
  }
];

export default function Systems() {
  const [activeSystem, setActiveSystem] = useState(systems[0].id);

  const currentSystem = systems.find(s => s.id === activeSystem)!;

  return (
    <section id="sistemas" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cyan-400 font-bold tracking-wider uppercase text-sm mb-3">Nossos Sistemas Prontos</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-display">Plataformas SaaS Customizáveis</h3>
          <p className="text-slate-400 text-lg">
            Tenha a mesma tecnologia das grandes corporações. Escolha a solução ideal para o seu modelo de negócio e escale sem fricção.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {systems.map((sys) => {
            const isActive = activeSystem === sys.id;
            return (
              <button
                key={sys.id}
                onClick={() => setActiveSystem(sys.id)}
                className={`flex items-center gap-2 px-4 py-2 font-medium transition-all ${
                  isActive 
                    ? `text-white border-b-2 border-cyan-400 pb-1` 
                    : `text-slate-300 hover:text-white`
                }`}
              >
                <sys.icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : ''}`} />
                {sys.name}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSystem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <div className={`p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 mb-12 relative overflow-hidden flex-1`}>
               <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${currentSystem.color}`}></div>
               <div className="text-center max-w-2xl mx-auto">
                 <h4 className="text-3xl font-bold text-white mb-4 font-display">{currentSystem.name}</h4>
                 <p className="text-slate-400 text-lg">{currentSystem.description}</p>
               </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {currentSystem.plans.map((plan, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`p-5 rounded-2xl flex flex-col gap-2 relative overflow-hidden ${
                    plan.popular 
                      ? 'bg-indigo-500/10 border border-indigo-400/30 ring-1 ring-indigo-400/20' 
                      : 'bg-slate-900/40 border border-white/5'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-[10px] rounded font-bold uppercase tracking-wider py-0.5 px-2">
                      HOT
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-lg font-bold">{plan.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-cyan-300 mb-2">
                    <span>Planos a partir de</span>
                    <span className="font-bold">{plan.price}</span>
                  </div>
                  
                  <p className="text-xs text-slate-400 mb-4">
                    {plan.features.join(', ')}
                  </p>

                  <button className={`w-full py-2 rounded-xl font-bold transition-all text-xs flex items-center justify-center gap-2 ${
                    plan.popular 
                      ? 'bg-indigo-500 text-white' 
                      : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
                  }`}>
                    Assinar {plan.name}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
