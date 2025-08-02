import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2000)
    return () => clearTimeout(timer)
  }, [])
  if (loaded) return null
  return (
    <motion.div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.img
        src="/logo.png"
        alt="Logo"
        className="w-20 h-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
      />
    </motion.div>
  )
}
