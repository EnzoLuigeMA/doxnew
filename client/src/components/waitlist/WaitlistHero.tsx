import { motion } from 'framer-motion';
import { Sparkles, Clock, Gift } from 'lucide-react';

export default function WaitlistHero() {
  return (
    <section className="hero-section hero-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-800 rounded-full filter blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center py-20">
          <motion.div
            className="logo-3d-container logo-glow mb-12"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="/dox-logo-transparent.png"
              alt="DOX English Logo"
              className="logo-3d h-32 md:h-40 w-auto mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-semibold">Lançamento Exclusivo em Breve</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white relative px-4 md:px-0"
            initial={{ y: 30, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text inline-block">
              Seja o Primeiro a Ter Acesso ao Dox English EAD
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto px-4 md:px-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Entre para a lista de espera e garanta condições exclusivas no lançamento do curso mais completo de inglês EAD do mercado.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 px-4 md:px-0"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="flex flex-col items-center gap-3 p-6 bg-red-900/10 border border-red-800/30 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                <Gift className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Desconto Exclusivo</h3>
              <p className="text-gray-400 text-sm text-center">
                Até 40% OFF para os primeiros inscritos
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-red-900/10 border border-red-800/30 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Bônus Especiais</h3>
              <p className="text-gray-400 text-sm text-center">
                Materiais exclusivos e aulas bônus
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-red-900/10 border border-red-800/30 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Acesso Antecipado</h3>
              <p className="text-gray-400 text-sm text-center">
                Seja notificado antes do lançamento oficial
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
