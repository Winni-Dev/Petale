// import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { ShoppingCart, Menu, X, Leaf } from 'lucide-react'
// import { useCart } from '../../contexts/CartContext'
// import { Button } from '../UI/Button'

// export const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const { totalItems } = useCart()
//   const location = useLocation()

//   const navLinks = [
//     { path: '/', label: 'Accueil' },
//     { path: '/produits', label: 'Produits' },
//     { path: '/panier', label: 'Panier' },
//   ]

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="flex items-center space-x-2">
//             <Leaf className="h-8 w-8 text-primary" />
//             <span className="text-xl font-bold text-secondary">Petal</span>
//           </Link>

//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`font-medium transition-colors ${
//                   location.pathname === link.path
//                     ? 'text-primary'
//                     : 'text-gray-700 hover:text-primary'
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link
//               to="/panier"
//               className="relative flex items-center text-gray-700 hover:text-primary"
//             >
//               <ShoppingCart className="h-6 w-6" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//           </div>

//           <div className="md:hidden flex items-center space-x-4">
//             <Link
//               to="/panier"
//               className="relative flex items-center text-gray-700"
//             >
//               <ShoppingCart className="h-6 w-6" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>
//         </div>

//         {isOpen && (
//           <div className="md:hidden py-4 border-t">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`px-3 py-2 rounded-md font-medium ${
//                     location.pathname === link.path
//                       ? 'bg-primary text-white'
//                       : 'text-gray-700 hover:bg-primary/10'
//                   }`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }


import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Menu, X, Home, Package, ChevronDown } from 'lucide-react'
import { useCart } from '../../contexts/CartContext'
import { Button } from '../UI/Button'
import logo from '../../IMAGES/logoo.png'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { 
      path: '/', 
      label: 'Accueil',
      icon: <Home className="h-4 w-4" />
    },
    { 
      path: '/produits', 
      label: 'Produits',
      icon: <Package className="h-4 w-4" />
    },
    { 
      path: '/panier', 
      label: 'Panier',
      icon: <ShoppingBag className="h-4 w-4" />
    },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-4 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className={`flex justify-between items-center h-14 lg:h-16 px-6 lg:px-8 rounded-2xl transition-all duration-300 ${
              scrolled 
                ? 'bg-white/80 backdrop-blur-xl shadow-lg border border-white/20' 
                : 'bg-white/70 backdrop-blur-lg shadow-md border border-white/30'
            }`}
            whileHover={{ scale: 1.01 }}
          >
            {/* Logo */}
            <Link 
              to="/" 
              
            >
              {/* <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              > */}
                <div className=" md:w-48 md:h-48 w-36 h-36 object-cover relative -left-10 ">
                  {/* <Leaf className="h-5 w-5 lg:h-6 lg:w-6 text-white" /> */}
                  <img src={logo} alt="" />
                </div>
              {/* </motion.div> */}
              {/* <div>
                <span className="text-xl lg:text-2xl font-extrabold text-primary tracking-tight">
                  Petal
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Sparkles className="h-3 w-3 text-amber-500 animate-pulse" />
                  <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Premium</span>
                </div>
                 <img src={logo} alt="" />
              </div> */}
             
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group relative"
                >
                  <motion.div 
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'text-primary bg-primary/5'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-base">{link.icon}</span>
                    <span className="font-semibold tracking-wide">{link.label}</span>
                  </motion.div>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                </Link>
              ))}
              
              {/* Panier avec badge animé - Petit bouton premium */}
              <Link
                to="/panier"
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="relative p-2.5 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <ShoppingBag className="h-4 w-4 text-gray-700 group-hover:text-primary transition-colors" />
                  
                  {/* Badge animé premium */}
                  <AnimatePresence>
                    {totalItems > 0 && (
                      <motion.span
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg border-2 border-white"
                      >
                        {totalItems}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>

              {/* Bouton WhatsApp Premium - Petit et élégant */}
              <a
                href="https://wa.me/+2250701781701"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group overflow-hidden"
                >
                  <div className="relative px-4 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300">
                    <span className="relative z-10 flex items-center gap-2">
                      <WhatsAppIcon className="w-4 h-4" />
                      <span className="tracking-wide">Commander</span>
                    </span>
                  </div>
                </motion.div>
              </a>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="lg:hidden flex items-center gap-4">
              {/* Panier mobile */}
              <Link
                to="/panier"
                className="relative"
              >
                <ShoppingBag className="h-6 w-6 text-gray-700" />
                  {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-4 right-4 z-50 lg:hidden w-[85vw] max-w-sm h-[calc(100vh-2rem)] bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
                <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <X className="h-6 w-6 text-gray-700" />
                </button>
              </div>
              
              {/* Menu Items */}
              <div className="px-4 py-6 space-y-2 overflow-y-auto h-[calc(100%-80px)]">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                      location.pathname === link.path
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={`p-2 rounded-lg ${
                      location.pathname === link.path
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {link.icon}
                    </div>
                    <span className="font-medium">{link.label}</span>
                    {location.pathname === link.path && (
                      <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                    )}
                  </Link>
                ))}
                
                {/* WhatsApp mobile */}
                <a
                  href="https://wa.me/+2250701781701"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white font-medium mt-4 shadow-lg hover:bg-primary/90 transition-colors"
                >
                  <WhatsAppIcon className="text-white" />
                  <span>Commander sur WhatsApp</span>
                  <ChevronDown className="h-4 w-4 ml-auto rotate-270" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

// WhatsApp Icon Component
const WhatsAppIcon = ({ className = "" }) => (
  <svg className={`w-5 h-5 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-5.46-4.45-9.91-9.91-9.91m5.15 13.46c-.25.73-1.27 1.34-1.79 1.41c-.51.08-1.18.09-2.28-.37c-1.39-.58-2.4-2.03-3.1-2.99c-.7-.96-1.48-2.67-1.48-2.67s-.72-1.44.04-1.99c.38-.28.84-.37 1.28-.37c.43 0 .87.01 1.28.06c.41.05.96.19 1.35.87c.39.67 1.34 2.31 1.46 2.48c.12.17.24.41.06.65c-.18.24-.28.37-.56.57c-.28.2-.54.28-.78.41c-.24.13-.51.28-.22.55c.29.27 1.27 1.19 2.76 1.65c1.49.46 1.49.31 1.76.26c.27-.05 1.11-.45 1.27-.89c.16-.44.16-.82.11-.89c-.05-.07-.22-.13-.47-.24z"/>
  </svg>
)