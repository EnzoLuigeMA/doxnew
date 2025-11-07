import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest_level: string;
  referral_source: string;
  message: string;
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interest_level: 'médio',
    referral_source: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const response = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        if (response.status === 409) {
          toast.error('Este email já está cadastrado na lista de espera!');
        } else {
          throw new Error('Erro ao cadastrar');
        }
        setIsSubmitting(false);
        return;
      }

      setIsSuccess(true);
      toast.success('Cadastro realizado com sucesso! Você receberá novidades em breve.');

      setFormData({
        name: '',
        email: '',
        phone: '',
        interest_level: 'médio',
        referral_source: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Erro ao realizar cadastro. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-20 bg-black/50" id="cadastro">
        <div className="container">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-red-900/30 to-black border border-red-600/30 rounded-2xl p-12 backdrop-blur-sm">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Bem-vindo à Lista de Espera!
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Seu cadastro foi realizado com sucesso.
              </p>
              <p className="text-gray-400 mb-8">
                Em breve você receberá um email com todas as informações sobre o lançamento e seus benefícios exclusivos como membro da lista de espera.
              </p>
              <Button
                onClick={() => setIsSuccess(false)}
                className="btn-gradient text-white font-semibold px-8 py-6 text-lg"
              >
                Cadastrar Outra Pessoa
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-black/50" id="cadastro">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="gradient-text">Garanta Sua Vaga</span>
            </h2>
            <p className="text-lg text-gray-300">
              Preencha o formulário abaixo e seja um dos primeiros a ter acesso ao Dox English EAD
            </p>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gradient-to-br from-red-900/20 to-black border border-red-600/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white text-lg">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black/50 border-red-800/50 text-white placeholder:text-gray-500 focus:border-red-600 h-12 text-lg"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-lg">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black/50 border-red-800/50 text-white placeholder:text-gray-500 focus:border-red-600 h-12 text-lg"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white text-lg">
                  Telefone/WhatsApp
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-black/50 border-red-800/50 text-white placeholder:text-gray-500 focus:border-red-600 h-12 text-lg"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest_level" className="text-white text-lg">
                  Nível de Interesse
                </Label>
                <Select
                  value={formData.interest_level}
                  onValueChange={(value) => handleSelectChange('interest_level', value)}
                >
                  <SelectTrigger className="bg-black/50 border-red-800/50 text-white h-12 text-lg">
                    <SelectValue placeholder="Selecione seu nível de interesse" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-red-800/50">
                    <SelectItem value="baixo" className="text-white">Baixo - Apenas curioso</SelectItem>
                    <SelectItem value="médio" className="text-white">Médio - Interessado</SelectItem>
                    <SelectItem value="alto" className="text-white">Alto - Muito interessado</SelectItem>
                    <SelectItem value="urgente" className="text-white">Urgente - Preciso começar logo!</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="referral_source" className="text-white text-lg">
                  Como conheceu o Dox English?
                </Label>
                <Select
                  value={formData.referral_source}
                  onValueChange={(value) => handleSelectChange('referral_source', value)}
                >
                  <SelectTrigger className="bg-black/50 border-red-800/50 text-white h-12 text-lg">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-red-800/50">
                    <SelectItem value="instagram" className="text-white">Instagram</SelectItem>
                    <SelectItem value="facebook" className="text-white">Facebook</SelectItem>
                    <SelectItem value="youtube" className="text-white">YouTube</SelectItem>
                    <SelectItem value="google" className="text-white">Google</SelectItem>
                    <SelectItem value="indicacao" className="text-white">Indicação de amigo/conhecido</SelectItem>
                    <SelectItem value="outro" className="text-white">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white text-lg">
                  Mensagem (Opcional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-black/50 border-red-800/50 text-white placeholder:text-gray-500 focus:border-red-600 min-h-[120px] text-lg"
                  placeholder="Conte-nos um pouco sobre seus objetivos com o inglês..."
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gradient text-white font-semibold py-6 text-xl h-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Cadastrando...
                    </>
                  ) : (
                    <>
                      Entrar na Lista de Espera
                    </>
                  )}
                </Button>
              </div>

              <p className="text-sm text-gray-400 text-center pt-2">
                Ao se cadastrar, você concorda em receber emails sobre o lançamento do Dox English EAD.
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex items-start gap-3 bg-blue-900/20 border border-blue-600/30 rounded-xl p-6"
          >
            <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-semibold mb-2">Seus dados estão seguros</h4>
              <p className="text-gray-300 text-sm">
                Utilizamos criptografia de ponta e respeitamos sua privacidade. Seus dados nunca serão compartilhados com terceiros.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
