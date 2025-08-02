import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-primary flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
    >
      <motion.div
        className="text-3xl font-bold text-accent"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        Coe Moraes 🚀
      </motion.div>
    </motion.div>
  )
}