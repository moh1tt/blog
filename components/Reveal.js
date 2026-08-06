import { motion } from 'framer-motion'

const Reveal = ({ children, delay = 0, y = 24, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, ease: 'easeOut', delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export default Reveal
