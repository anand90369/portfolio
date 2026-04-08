import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="section-container">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
