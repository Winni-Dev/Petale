import React from 'react'
import { motion } from 'framer-motion'

export const PetalsDecoration: React.FC = () => {
  const petals = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 10,
    opacity: 0.2 + Math.random() * 0.4,
    rotate: Math.random() * 360,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: petal.left,
            opacity: petal.opacity,
          }}
          initial={{ y: -100, rotate: 0 }}
          animate={{
            y: '100vh',
            rotate: petal.rotate + 360,
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            className="w-8 h-8 text-pink-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}