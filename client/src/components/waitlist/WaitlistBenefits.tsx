import { motion } from 'framer-motion';
import {
  Crown,
  Gift,
  Zap,
  Users,
  Award,
  Sparkles,
  TrendingUp,
  Clock,
} from 'lucide-react';

const benefits = [
  {
    icon: Crown,
    title: 'Desconto Especial de até 40%',
    description: 'Os primeiros 100 inscritos da lista de espera terão acesso ao maior desconto já oferecido no Dox English EAD.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Gift,
    title: 'Bônus Exclusivos',
    description: 'Materiais complementares, e-books, planilhas de estudos e aulas bônus disponíveis apenas para membros da lista.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Acesso Antecipado',
    description: 'Seja notificado 48h antes do lançamento oficial e garanta sua vaga antes de todos.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Grupo VIP no WhatsApp',
    description: 'Acesso exclusivo ao grupo de alunos fundadores com suporte direto e networking.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Award,
    title: 'Certificado Premium',
    description: 'Certificado especial de conclusão com selo de membro fundador do programa.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: TrendingUp,
    title: 'Upgrade Gratuito',
    description: 'Receba gratuitamente todas as atualizações e novos módulos adicionados ao curso.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Clock,
    title: 'Conteúdo Vitalício',
    description: 'Garantia de acesso vitalício ao curso sem mensalidades ou cobranças recorrentes.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Sparkles,
    title: 'Mentoria Exclusiva',
    description: 'Sessões de mentoria em grupo com o próprio Ivo Dox para tirar dúvidas e acelerar seu aprendizado.',
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function WaitlistBenefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-red-950/5 to-black">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Benefícios Exclusivos da Lista</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Membros da lista de espera recebem vantagens únicas que não estarão disponíveis após o lançamento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="h-full bg-gradient-to-br from-red-900/20 to-black border border-red-600/30 rounded-2xl p-6 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} p-3 mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-red-900/30 via-red-800/20 to-red-900/30 border border-red-600/40 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm">
            <Sparkles className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Vagas Limitadas!
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Estamos aceitando apenas <span className="text-red-400 font-bold">500 pessoas</span> na lista de espera para garantir que todos os benefícios exclusivos possam ser entregues com a melhor qualidade possível.
            </p>
            <p className="text-gray-400">
              Quanto mais cedo você entrar, maiores serão seus benefícios. Não perca essa oportunidade!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
