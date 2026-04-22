import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <button onClick={() => setIsModalOpen(true)} className="btn-primary">
              Solicitar Orçamento Grátis
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
            <a href="https://wa.me/5521991389523" target="_blank" rel="noreferrer" className="btn-ghost">
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#050810]/80 backdrop-blur-md"
          >
             <motion.div
               initial={{ scale: 0.95, opacity: 0, y: 20 }}
               animate={{ scale: 1, opacity: 1, y: 0 }}
               exit={{ scale: 0.95, opacity: 0, y: 20 }}
               className="bg-[#0A101D] border border-[#00D4FF]/20 rounded-2xl p-6 w-full max-w-md relative shadow-[0_0_40px_rgba(0,212,255,0.1)]"
             >
               <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
               </button>
               <h3 className="text-2xl font-bold text-white mb-2 font-display">Solicitar Orçamento</h3>
               <p className="text-sm text-slate-400 mb-6 font-medium">Deixe seus dados e entraremos em contato rapidamente para entender sua demanda.</p>

               <form className="flex flex-col gap-3 mb-6" onSubmit={(e) => { e.preventDefault(); alert('Solicitação recebida com sucesso! Em breve entraremos em contato.'); setIsModalOpen(false); }}>
                 <input type="text" placeholder="Como devemos chamá-lo?" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-medium" />
                 <input type="email" placeholder="Seu melhor e-mail" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-medium" />
                 <input type="tel" placeholder="Telefone ou WhatsApp" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-medium" />
                 <textarea placeholder="Fale um pouco sobre o seu desafio..." rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-medium resize-none"></textarea>
                 <button type="submit" className="w-full py-3 mt-2 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 transition-all shadow-lg shadow-cyan-500/25">
                   Enviar Mensagem Gratuita
                 </button>
               </form>

               <div className="flex items-center gap-3 mb-6">
                 <hr className="flex-1 border-white/10" />
                 <span className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold">Contato Direto</span>
                 <hr className="flex-1 border-white/10" />
               </div>

               <a
                 href={`https://wa.me/5521991389523?text=${encodeURIComponent(`Olá! Gostaria de agendar uma reunião / fazer um orçamento para alavancar a minha empresa.`)}`}
                 target="_blank"
                 rel="noreferrer"
                 className="w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-lg shadow-[#25D366]/20"
               >
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                 Chamar no WhatsApp
               </a>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
