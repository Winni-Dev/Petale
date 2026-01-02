// // import React from 'react'

// // export const VinesDecoration: React.FC = () => {
// //   return (
// //     <div className="hidden lg:block fixed top-0 left-0 right-0 h-1/2 pointer-events-none z-0 overflow-hidden">
// //       <div className="relative w-full h-full">
// //         {/* Left vine */}
// //         <div className="absolute left-4 top-0 w-32 opacity-30">
// //           <svg
// //             viewBox="0 0 100 500"
// //             fill="none"
// //             className="w-full h-full"
// //           >
// //             <path
// //               d="M50,0 C30,50 20,150 40,250 C60,350 80,400 50,500"
// //               stroke="#85841F"
// //               strokeWidth="2"
// //               strokeLinecap="round"
// //             />
// //             {/* Leaves */}
// //             <path
// //               d="M40,100 Q60,80 70,110 Q60,120 40,100 Z"
// //               fill="#7B4B09"
// //               opacity="0.5"
// //             />
// //             <path
// //               d="M60,200 Q40,180 30,210 Q40,220 60,200 Z"
// //               fill="#7B4B09"
// //               opacity="0.5"
// //             />
// //             <path
// //               d="M30,350 Q50,330 60,360 Q50,370 30,350 Z"
// //               fill="#7B4B09"
// //               opacity="0.5"
// //             />
// //           </svg>
// //         </div>

// //         {/* Right vine */}
// //         <div className="absolute right-4 top-0 w-32 opacity-30">
// //           <svg
// //             viewBox="0 0 100 500"
// //             fill="none"
// //             className="w-full h-full"
// //           >
// //             <path
// //               d="M50,0 C70,50 80,150 60,250 C40,350 20,400 50,500"
// //               stroke="#85841F"
// //               strokeWidth="2"
// //               strokeLinecap="round"
// //             />
// //             {/* Leaves */}
// //             <path
// //               d="M60,150 Q40,130 30,160 Q40,170 60,150 Z"
// //               fill="#7B4B09"
// //               opacity="0.5"
// //             />
// //             <path
// //               d="M40,300 Q60,280 70,310 Q60,320 40,300 Z"
// //               fill="#7B4B09"
// //               opacity="0.5"
// //             />
// //           </svg>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }


import React, { useEffect, useState } from 'react'

export const VinesDecoration: React.FC = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="hidden lg:block fixed top-0 left-0 right-0 h-[60vh] pointer-events-none z-0 overflow-hidden">
      <div className="relative w-full h-full">
        
        {/* Vigne gauche - avec animation fluide */}
        <div className={`absolute left-0 top-0 w-48 opacity-40 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-40' : '-translate-y-10 opacity-0'}`}>
          <svg
            viewBox="0 0 120 600"
            fill="none"
            className="w-full h-full animate-float-slow"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="vineGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9A8B4F" />
                <stop offset="50%" stopColor="#85841F" />
                <stop offset="100%" stopColor="#6B7D2E" />
              </linearGradient>
              <filter id="glowLeft">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Tige principale avec animation */}
            <path
              d="M60,0 C40,80 30,200 45,300 C60,400 80,450 55,550 C30,650 20,580 40,600"
              stroke="url(#vineGradientLeft)"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="animate-draw-vine"
              style={{
                strokeDasharray: 1000,
                strokeDashoffset: mounted ? 0 : 1000,
                transition: 'stroke-dashoffset 2s ease-in-out'
              }}
            />
            
            {/* Feuilles avec animations décalées */}
            <g className="opacity-70">
              <path
                d="M45,120 Q65,100 75,130 Q65,140 45,120 Z"
                fill="#5A6B2E"
                className="animate-leaf-pulse"
                style={{ animationDelay: '0.2s' }}
              />
              <path
                d="M65,220 Q45,200 35,230 Q45,240 65,220 Z"
                fill="#7B4B09"
                className="animate-leaf-pulse"
                style={{ animationDelay: '0.5s' }}
              />
              <path
                d="M35,380 Q55,360 65,390 Q55,400 35,380 Z"
                fill="#5A6B2E"
                opacity="0.6"
                className="animate-leaf-pulse"
                style={{ animationDelay: '0.8s' }}
              />
              <path
                d="M55,480 Q35,460 25,490 Q35,500 55,480 Z"
                fill="#7B4B09"
                opacity="0.6"
                className="animate-leaf-pulse"
                style={{ animationDelay: '1.1s' }}
              />
            </g>
            
            {/* Petites fleurs décoratives */}
            <circle cx="50" cy="280" r="2.5" fill="#D4AF37" className="animate-pulse" />
            <circle cx="70" cy="420" r="2" fill="#B8860B" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
          </svg>
        </div>

        {/* Vigne droite - miroir avec variations */}
        <div className={`absolute right-0 top-0 w-48 opacity-40 transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-40' : '-translate-y-10 opacity-0'}`}>
          <svg
            viewBox="0 0 120 600"
            fill="none"
            className="w-full h-full animate-float-slower"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="vineGradientRight" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9A8B4F" />
                <stop offset="50%" stopColor="#6B7D2E" />
                <stop offset="100%" stopColor="#85841F" />
              </linearGradient>
            </defs>
            
            {/* Tige droite avec courbes différentes */}
            <path
              d="M60,0 C80,60 90,180 75,280 C60,380 40,430 65,520 C90,610 100,540 80,600"
              stroke="url(#vineGradientRight)"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="animate-draw-vine"
              style={{
                strokeDasharray: 1000,
                strokeDashoffset: mounted ? 0 : 1000,
                transition: 'stroke-dashoffset 2.5s ease-in-out'
              }}
            />
            
            {/* Feuilles droite */}
            <g className="opacity-70">
              <path
                d="M75,180 Q55,160 45,190 Q55,200 75,180 Z"
                fill="#6B7D2E"
                className="animate-leaf-pulse"
                style={{ animationDelay: '0.4s' }}
              />
              <path
                d="M55,320 Q75,300 85,330 Q75,340 55,320 Z"
                fill="#7B4B09"
                opacity="0.7"
                className="animate-leaf-pulse"
                style={{ animationDelay: '0.7s' }}
              />
              <path
                d="M85,440 Q65,420 55,450 Q65,460 85,440 Z"
                fill="#5A6B2E"
                className="animate-leaf-pulse"
                style={{ animationDelay: '1s' }}
              />
            </g>
            
            {/* Éléments décoratifs supplémentaires */}
            <circle cx="70" cy="90" r="2" fill="#D4AF37" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
            <circle cx="45" cy="350" r="2.5" fill="#B8860B" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
          </svg>
        </div>

        {/* Élément décoratif central subtil */}
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-8 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="#85841F" strokeWidth="0.5" fill="none" strokeDasharray="5,5" />
          </svg>
        </div>
      </div>
    </div>
  )
}


// import React, { useEffect, useRef } from 'react'

// export const VinesDecoration: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null)

//   useEffect(() => {
//     // Apply inline animation styles to each vine container to avoid any
//     // Tailwind / purge or specificity issues and to add natural randomness.
//     if (!containerRef.current) return

//     const vines = containerRef.current.querySelectorAll<HTMLElement>('[data-vine]')
//     vines.forEach((el, i) => {
//       // randomize duration between 6s and 10s
//       const duration = 6 + Math.random() * 4
//       // randomize delay between 0 and 2s
//       const delay = Math.random() * 2
//       // decide direction based on attribute
//       const dir = el.dataset.dir === 'reverse' ? 'reverse' : 'normal'
//       el.style.willChange = 'transform'
//       el.style.animation = `vine-sway ${duration}s cubic-bezier(.25,.8,.25,1) infinite ${dir}`
//       el.style.animationDelay = `${delay}s`
//     })
//   }, [])

//   return (
//     <div ref={containerRef} className="hidden lg:block fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.14]">

//       {/* 🌿 Liane gauche */}
//       <div data-vine="left-1" data-dir="normal" className="absolute left-8 top-0 w-24 h-full origin-top">
//         <svg viewBox="0 0 100 800" className="w-full h-full">
//           <path
//             d="M50,0 Q28,140 50,280 Q28,420 50,560 Q28,700 50,800"
//             className="stroke-vine"
//             strokeWidth="1"
//             fill="none"
//           />
//           <ellipse cx="32" cy="180" rx="6" ry="10" className="fill-leaf animate-leaf-float" />
//           <ellipse cx="60" cy="360" rx="5" ry="9" className="fill-leafLight animate-leaf-float delay-300" />
//           <ellipse cx="38" cy="560" rx="6" ry="10" className="fill-leaf animate-leaf-float delay-700" />
//         </svg>
//       </div>

//       {/* 🌿 Liane gauche arrière */}
//       <div data-vine="left-2" data-dir="reverse" className="absolute left-20 top-0 w-20 h-full origin-top opacity-70">
//         <svg viewBox="0 0 100 800" className="w-full h-full">
//           <path
//             d="M50,0 Q40,160 50,320 Q40,480 50,640 Q40,780 50,800"
//             className="stroke-vine"
//             strokeWidth="0.8"
//             fill="none"
//           />
//           <ellipse cx="45" cy="260" rx="4" ry="8" className="fill-leafLight animate-leaf-float delay-500" />
//           <ellipse cx="55" cy="480" rx="4" ry="8" className="fill-leaf animate-leaf-float delay-900" />
//         </svg>
//       </div>

//       {/* 🌿 Liane droite */}
//       <div data-vine="right-1" data-dir="normal" className="absolute right-8 top-0 w-24 h-full origin-top">
//         <svg viewBox="0 0 100 800" className="w-full h-full">
//           <path
//             d="M50,0 Q72,140 50,280 Q72,420 50,560 Q72,700 50,800"
//             className="stroke-vine"
//             strokeWidth="1"
//             fill="none"
//           />
//           <ellipse cx="68" cy="200" rx="6" ry="10" className="fill-leaf animate-leaf-float" />
//           <ellipse cx="40" cy="380" rx="5" ry="9" className="fill-leafLight animate-leaf-float delay-400" />
//           <ellipse cx="62" cy="580" rx="6" ry="10" className="fill-leaf animate-leaf-float delay-800" />
//         </svg>
//       </div>

//       {/* 🌿 Liane droite arrière */}
//       <div data-vine="right-2" data-dir="reverse" className="absolute right-20 top-0 w-20 h-full origin-top opacity-70">
//         <svg viewBox="0 0 100 800" className="w-full h-full">
//           <path
//             d="M50,0 Q60,160 50,320 Q60,480 50,640 Q60,780 50,800"
//             className="stroke-vine"
//             strokeWidth="0.8"
//             fill="none"
//           />
//           <ellipse cx="58" cy="280" rx="4" ry="8" className="fill-leafLight animate-leaf-float delay-600" />
//           <ellipse cx="45" cy="500" rx="4" ry="8" className="fill-leaf animate-leaf-float delay-1000" />
//         </svg>
//       </div>

//     </div>
//   )
// }
