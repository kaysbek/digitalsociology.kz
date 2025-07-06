
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-700 text-white">
      <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-6">
        Digital Sociology Kazakhstan
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="text-xl text-center max-w-xl">
        A platform for research, data visualization, and insight into Kazakhstan’s digital society.
      </motion.p>
    </main>
  );
}
