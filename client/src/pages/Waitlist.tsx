import { motion } from 'framer-motion';
import WaitlistHero from '@/components/waitlist/WaitlistHero';
import WaitlistForm from '@/components/waitlist/WaitlistForm';
import WaitlistBenefits from '@/components/waitlist/WaitlistBenefits';
import WaitlistFAQ from '@/components/waitlist/WaitlistFAQ';
import Footer from '@/components/Footer';

export default function Waitlist() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-black via-red-950/10 to-black"
    >
      <WaitlistHero />
      <WaitlistForm />
      <WaitlistBenefits />
      <WaitlistFAQ />
      <Footer />
    </motion.div>
  );
}
