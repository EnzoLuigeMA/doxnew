import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'O que é a lista de espera do Dox English EAD?',
    answer: 'A lista de espera é um grupo exclusivo de pessoas que serão as primeiras a ter acesso ao Dox English EAD quando ele for lançado. Membros da lista recebem benefícios especiais, descontos e acesso antecipado ao curso.',
  },
  {
    question: 'Quando o curso será lançado?',
    answer: 'O lançamento oficial está previsto para as próximas semanas. Todos os membros da lista de espera serão notificados por email 48 horas antes do lançamento público, garantindo tempo suficiente para aproveitar os benefícios exclusivos.',
  },
  {
    question: 'Quais são os benefícios de entrar na lista agora?',
    answer: 'Membros da lista receberão: desconto de até 40% no valor do curso, acesso antecipado, bônus exclusivos (e-books, materiais complementares), grupo VIP no WhatsApp, certificado premium, e upgrades gratuitos de conteúdo.',
  },
  {
    question: 'Preciso pagar alguma coisa para entrar na lista?',
    answer: 'Não! A inscrição na lista de espera é 100% gratuita e sem compromisso. Você só pagará se decidir adquirir o curso quando ele for lançado.',
  },
  {
    question: 'Vou receber muitos emails?',
    answer: 'Não, respeitamos sua caixa de entrada! Você receberá apenas emails importantes sobre o lançamento, benefícios exclusivos e informações relevantes sobre o curso. Você pode cancelar a inscrição a qualquer momento.',
  },
  {
    question: 'O desconto é garantido para todos da lista?',
    answer: 'Sim! Todos os membros da lista de espera terão acesso ao desconto especial, sendo que os primeiros 100 inscritos receberão o maior desconto de até 40% OFF.',
  },
  {
    question: 'Qual é a metodologia do Dox English EAD?',
    answer: 'O curso utiliza a metodologia exclusiva Subliminal Grammar™, desenvolvida por Ivo Dox, que ensina você a pensar em inglês de forma natural e autônoma, sem depender de traduções ou decoreba.',
  },
  {
    question: 'O curso é adequado para iniciantes?',
    answer: 'Sim! O Dox English EAD foi desenvolvido para atender alunos de todos os níveis, desde iniciantes absolutos até intermediários que desejam alcançar a fluência. O conteúdo é progressivo e adaptável ao seu ritmo.',
  },
  {
    question: 'Terei acesso a suporte durante o curso?',
    answer: 'Sim! Membros da lista de espera terão acesso ao grupo VIP no WhatsApp com suporte direto, além de sessões de mentoria em grupo com o próprio Ivo Dox.',
  },
  {
    question: 'Como funciona o acesso ao curso?',
    answer: 'O Dox English EAD é 100% online e você terá acesso vitalício a todo o conteúdo. São mais de 70 horas de aulas práticas que você pode assistir no seu ritmo, quando e onde quiser.',
  },
];

export default function WaitlistFAQ() {
  return (
    <section className="py-20 bg-black">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Perguntas Frequentes</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Tire suas dúvidas sobre a lista de espera e o Dox English EAD
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-red-900/10 to-black border border-red-600/30 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-red-800/30 bg-black/30 rounded-xl px-6 data-[state=open]:bg-red-900/10"
                >
                  <AccordionTrigger className="text-left text-white hover:text-red-400 transition-colors py-5 text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-5 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">
              Ainda tem dúvidas?
            </p>
            <a
              href="#cadastro"
              className="text-red-400 hover:text-red-300 font-semibold transition-colors underline underline-offset-4"
            >
              Entre na lista agora e receba todas as informações por email
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
