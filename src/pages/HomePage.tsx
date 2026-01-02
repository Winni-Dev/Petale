// // import React from 'react'
// // import { motion } from 'framer-motion'
// // import { Leaf, Sparkles, Package } from 'lucide-react'
// // import { Link } from 'react-router-dom'
// // import { Button } from '../components/UI/Button'
// // import { PetalsDecoration } from '../components/Layout/PetalsDecoration'
// // import { VinesDecoration } from '../components/Layout/VinesDecoration'

// // export const HomePage: React.FC = () => {
// //   const categories = [
// //     {
// //       name: 'Visage',
// //       description: 'Lotions, masques, gommages et sérums',
// //       icon: Sparkles,
// //       path: '/produits?category=visage'
// //     },
// //     {
// //       name: 'Corps',
// //       description: 'Savons solides, gels douche, crèmes et huiles',
// //       icon: Leaf,
// //       path: '/produits?category=corps'
// //     },
// //     {
// //       name: 'Soins Ciblés',
// //       description: 'Anti-taches, éclat, clarifiant et hydratants',
// //       icon: Sparkles,
// //       path: '/produits?category=soins-cibles'
// //     },
// //     {
// //       name: 'Coffrets',
// //       description: 'Kits, gammes premium et cadeaux',
// //       icon: Package,
// //       path: '/produits?category=coffrets'
// //     }
// //   ]

// //   return (
// //     <div className="relative min-h-screen">
// //       <PetalsDecoration />
// //       <VinesDecoration />
      
// //       {/* Hero Section */}
// //       <section className="relative pt-20 pb-32 overflow-hidden">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="text-center"
// //           >
// //             <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
// //               <Leaf className="h-10 w-10 text-primary" />
// //             </div>
            
// //             <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
// //               Bienvenue chez <span className="text-primary">Petal</span>
// //             </h1>
            
// //             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
// //               Découvrez notre collection de soins naturels et bio pour une peau 
// //               rayonnante et un bien-être optimal. Commandez facilement via WhatsApp !
// //             </p>
            
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <Link to="/produits">
// //                 <Button variant="primary" size="lg">
// //                   Voir nos produits
// //                 </Button>
// //               </Link>
              
// //               <a
// //                 href="https://wa.me/+2250701781701"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //               >
// //                 <Button variant="secondary" size="lg">
// //                   Nous contacter
// //                 </Button>
// //               </a>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Categories Section */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl font-bold text-secondary mb-4">
// //               Nos Gammes de Produits
// //             </h2>
// //             <p className="text-gray-600 max-w-2xl mx-auto">
// //               Explorez nos différentes catégories de soins naturels adaptés à tous vos besoins
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {categories.map((category, index) => (
// //               <motion.div
// //                 key={category.name}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5, delay: index * 0.1 }}
// //                 whileHover={{ y: -5 }}
// //               >
// //                 <Link
// //                   to={category.path}
// //                   className="block group"
// //                 >
// //                   <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
// //                     <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
// //                       <category.icon className="h-6 w-6 text-primary" />
// //                     </div>
                    
// //                     <h3 className="text-xl font-semibold text-secondary mb-2">
// //                       {category.name}
// //                     </h3>
                    
// //                     <p className="text-gray-600 mb-4">
// //                       {category.description}
// //                     </p>
                    
// //                     <span className="inline-flex items-center text-primary font-medium group-hover:underline">
// //                       Découvrir
// //                       <svg
// //                         className="ml-2 h-4 w-4"
// //                         fill="none"
// //                         viewBox="0 0 24 24"
// //                         stroke="currentColor"
// //                       >
// //                         <path
// //                           strokeLinecap="round"
// //                           strokeLinejoin="round"
// //                           strokeWidth={2}
// //                           d="M14 5l7 7m0 0l-7 7m7-7H3"
// //                         />
// //                       </svg>
// //                     </span>
// //                   </div>
// //                 </Link>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section className="py-20">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //             <div className="text-center">
// //               <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
// //                 <svg
// //                   className="h-8 w-8 text-primary"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M13 10V3L4 14h7v7l9-11h-7z"
// //                   />
// //                 </svg>
// //               </div>
// //               <h3 className="text-xl font-semibold text-secondary mb-3">
// //                 Rapide & Facile
// //               </h3>
// //               <p className="text-gray-600">
// //                 Commandez en 2 clics via WhatsApp, sans paiement en ligne compliqué
// //               </p>
// //             </div>

// //             <div className="text-center">
// //               <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
// //                 <Leaf className="h-8 w-8 text-primary" />
// //               </div>
// //               <h3 className="text-xl font-semibold text-secondary mb-3">
// //                 100% Naturel
// //               </h3>
// //               <p className="text-gray-600">
// //                 Des produits bio et naturels pour prendre soin de vous
// //               </p>
// //             </div>

// //             <div className="text-center">
// //               <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
// //                 <svg
// //                   className="h-8 w-8 text-primary"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
// //                   />
// //                 </svg>
// //               </div>
// //               <h3 className="text-xl font-semibold text-secondary mb-3">
// //                 Sécurisé
// //               </h3>
// //               <p className="text-gray-600">
// //                 Paiement à la livraison pour plus de tranquillité d'esprit
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   )
// // }


// import React from 'react'
// import { motion } from 'framer-motion'
// import { 
//   Leaf, 
//   Sparkles, 
//   Package, 
//   Zap, 
//   Shield, 
//   Truck, 
//   Heart, 
//   Star,
//   ChevronRight,
//   CheckCircle,
//   Users,
//   Award
// } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import { Button } from '../components/UI/Button'
// import { PetalsDecoration } from '../components/Layout/PetalsDecoration'
// import { VinesDecoration } from '../components/Layout/VinesDecoration'

// export const HomePage: React.FC = () => {
//   const categories = [
//     {
//       name: 'Visage',
//       description: 'Lotions, masques, gommages et sérums',
//       icon: Sparkles,
//       path: '/produits?category=visage',
//       color: 'from-pink-50 to-rose-50',
//       highlight: 'bg-gradient-to-r from-pink-400 to-rose-400'
//     },
//     {
//       name: 'Corps',
//       description: 'Savons solides, gels douche, crèmes et huiles',
//       icon: Leaf,
//       path: '/produits?category=corps',
//       color: 'from-emerald-50 to-teal-50',
//       highlight: 'bg-gradient-to-r from-emerald-400 to-teal-400'
//     },
//     {
//       name: 'Soins Ciblés',
//       description: 'Anti-taches, éclat, clarifiant et hydratants',
//       icon: Zap,
//       path: '/produits?category=soins-cibles',
//       color: 'from-amber-50 to-orange-50',
//       highlight: 'bg-gradient-to-r from-amber-400 to-orange-400'
//     },
//     {
//       name: 'Coffrets',
//       description: 'Kits, gammes premium et cadeaux',
//       icon: Package,
//       path: '/produits?category=coffrets',
//       color: 'from-purple-50 to-indigo-50',
//       highlight: 'bg-gradient-to-r from-purple-400 to-indigo-400'
//     }
//   ]

//   const features = [
//     {
//       icon: Truck,
//       title: "Livraison Rapide",
//       description: "Expédition sous 24h dans toute la Côte d'Ivoire",
//       stat: "24h"
//     },
//     {
//       icon: Users,
//       title: "Communauté",
//       description: "Plus de 10 000 clients satisfaits",
//       stat: "10k+"
//     },
//     {
//       icon: Award,
//       title: "Qualité Certifiée",
//       description: "Produits certifiés bio et éthiques",
//       stat: "100%"
//     },
//     {
//       icon: Heart,
//       title: "Engagement Éco",
//       description: "Emballages biodégradables et recyclables",
//       stat: "♻️"
//     }
//   ]

//   const testimonials = [
//     {
//       name: "Amina K.",
//       role: "Cliente fidèle",
//       content: "Les produits Petal ont transformé ma routine skincare. Ma peau n'a jamais été aussi radieuse !",
//       rating: 5,
//       avatar: "AK"
//     },
//     {
//       name: "Sophie T.",
//       role: "Nouvelle cliente",
//       content: "Commande via WhatsApp ultra simple et livraison rapide. Je recommande vivement !",
//       rating: 5,
//       avatar: "ST"
//     },
//     {
//       name: "Émilie D.",
//       role: "Influenceuse beauté",
//       content: "La qualité des ingrédients naturels est exceptionnelle. Une marque que j'adore soutenir.",
//       rating: 5,
//       avatar: "ED"
//     }
//   ]

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-br from-rose-50/20 via-white to-emerald-50/20" />
//       <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
//       <PetalsDecoration />
//       <VinesDecoration />
      
//       {/* Hero Section */}
//       <section className="relative pt-24 pb-40 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="relative z-10"
//             >
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
//                 <Sparkles className="h-4 w-4 text-primary" />
//                 <span className="text-sm font-medium text-primary">Nouvelle collection disponible</span>
//               </div>
              
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//                 La beauté{' '}
//                 <span className="relative inline-block">
//                   <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
//                     naturelle
//                   </span>
//                   <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full" />
//                 </span>
//                 {' '}à portée de main
//               </h1>
              
//               <p className="text-xl text-gray-600 mb-10 max-w-2xl">
//                 Découvrez notre collection exclusive de soins bio 100% naturels. 
//                 Commandez facilement via WhatsApp et recevez vos produits en 24h.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link to="/produits">
//                   <Button 
//                     variant="primary" 
//                     size="lg"
//                     className="group relative overflow-hidden"
//                   >
//                     <span className="relative z-10 flex items-center gap-2">
//                       Explorer la boutique
//                       <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                     </span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </Button>
//                 </Link>
                
//                 <a
//                   href="https://wa.me/+2250701781701"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Button 
//                     variant="outline" 
//                     size="lg"
//                     className="border-2"
//                   >
//                     <WhatsAppLogo className="h-5 w-5 mr-2" />
//                     Commander sur WhatsApp
//                   </Button>
//                 </a>
//               </div>

//               {/* Stats */}
//               <div className="flex flex-wrap gap-8 mt-12">
//                 {features.map((feature, index) => (
//                   <div key={index} className="flex items-center gap-3">
//                     <div className="text-2xl font-bold text-primary">{feature.stat}</div>
//                     <div className="text-sm text-gray-600">{feature.title}</div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
//                 {/* Product showcase */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
//                 <div className="absolute top-8 right-8 w-48 h-48 bg-white/10 backdrop-blur-sm rounded-3xl rotate-12" />
//                 <div className="absolute bottom-8 left-8 w-64 h-64 bg-white/10 backdrop-blur-sm rounded-3xl -rotate-6" />
                
//                 {/* Floating products */}
//                 <motion.div
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{ duration: 3, repeat: Infinity }}
//                   className="absolute top-16 left-16 w-32 h-32 bg-white rounded-2xl shadow-xl p-4"
//                 >
//                   <div className="w-full h-full bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl" />
//                 </motion.div>
                
//                 <motion.div
//                   animate={{ y: [0, 10, 0] }}
//                   transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
//                   className="absolute bottom-24 right-20 w-40 h-40 bg-white rounded-2xl shadow-xl p-4"
//                 >
//                   <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl" />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="py-20 relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="inline-block"
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                 Explorez nos{' '}
//                 <span className="relative">
//                   <span className="relative z-10">univers</span>
//                   <div className="absolute -bottom-1 left-0 right-0 h-2 bg-primary/20 rounded-full" />
//                 </span>
//               </h2>
//               <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//                 Des soins naturels soigneusement formulés pour chaque besoin spécifique
//               </p>
//             </motion.div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {categories.map((category, index) => (
//               <motion.div
//                 key={category.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ y: -8 }}
//                 className="relative group"
//               >
//                 <Link to={category.path}>
//                   <div className={`absolute inset-0 ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
//                   <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 group-hover:border-transparent">
//                     <div className="relative">
//                       <div className={`absolute -top-2 -left-2 w-12 h-12 ${category.highlight} rounded-xl blur-lg opacity-60`} />
//                       <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md mb-6">
//                         <category.icon className="h-8 w-8 text-gray-700" />
//                       </div>
//                     </div>
                    
//                     <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                       {category.name}
//                     </h3>
                    
//                     <p className="text-gray-600 mb-6">
//                       {category.description}
//                     </p>
                    
//                     <div className="flex items-center justify-between">
//                       <span className="inline-flex items-center text-primary font-semibold group-hover:underline">
//                         Découvrir
//                         <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                       </span>
//                       <div className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
//                         +15 produits
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Ils{' '}
//               <span className="relative">
//                 <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
//                   adorent
//                 </span>
//                 <div className="absolute -bottom-1 left-0 right-0 h-2 bg-primary/20 rounded-full" />
//               </span>{' '}
//               Petal
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Découvrez les retours de notre communauté de clients satisfaits
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 className="relative"
//               >
//                 <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
//                   <div className="flex items-center gap-4 mb-6">
//                     <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-lg font-bold text-primary">
//                       {testimonial.avatar}
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
//                       <p className="text-sm text-gray-600">{testimonial.role}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
//                     ))}
//                   </div>
                  
//                   <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
                  
//                   <div className="flex items-center justify-between pt-6 border-t border-gray-100">
//                     <span className="text-sm text-gray-500">Avis vérifié</span>
//                     <CheckCircle className="h-5 w-5 text-emerald-500" />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-3xl p-12 shadow-2xl text-center"
//           >
//             <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-8">
//               <Sparkles className="h-10 w-10 text-white" />
//             </div>
            
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Prêt à transformer votre routine beauté ?
//             </h2>
            
//             <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
//               Rejoignez notre communauté et bénéficiez de 10% de réduction sur votre première commande
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="https://wa.me/+2250701781701"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button 
//                   variant="primary" 
//                   size="lg"
//                   className="px-8 py-4 text-lg"
//                 >
//                   <WhatsAppLogo className="h-6 w-6 mr-3" />
//                   Commander maintenant
//                 </Button>
//               </a>
              
//               <Link to="/produits">
//                 <Button 
//                   variant="outline" 
//                   size="lg"
//                   className="px-8 py-4 text-lg border-2"
//                 >
//                   Voir tous les produits
//                 </Button>
//               </Link>
//             </div>
            
//             <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
//               <div className="flex items-center gap-2">
//                 <Shield className="h-4 w-4" />
//                 <span>Paiement sécurisé</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Truck className="h-4 w-4" />
//                 <span>Livraison 24h</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Leaf className="h-4 w-4" />
//                 <span>100% naturel</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }

// // Component WhatsAppLogo
// const WhatsAppLogo = ({ className }: { className?: string }) => (
//   <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
//   </svg>
// )




// import React from 'react'
// import { motion } from 'framer-motion'
// import { 
//   Leaf, 
//   Sparkles, 
//   Package, 
//   Zap, 
//   Shield, 
//   Truck, 
//   Heart, 
//   Star,
//   ChevronRight,
//   CheckCircle,
//   Users,
//   Award,
//   Clock,
//   ShieldCheck,
//   Droplets,
//   Gem,
//   ShoppingBag
// } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import { Button } from '../components/UI/Button'
// import Lianed from "../IMAGES/OIP.png"
// import Lianeg from "../IMAGES/OIPL.png"
// import hero from "../IMAGES/heros.jpeg"
// import product1 from "../IMAGES/product1.jpeg"
// import product2 from "../IMAGES/product2.jpeg"

// export const HomePage: React.FC = () => {
//   // Images d'Unsplash - libres de droits et professionnelles
//   const images = {
//     hero: hero,
//     faceCare: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     bodyCare: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     targetedCare: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     giftSet: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     naturalIngredients: 'https://images.unsplash.com/photo-1553787762-9624c5f3117c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     happyCustomer: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     product1: product1,
//     product2: product2,
//     ingredients: 'https://images.unsplash.com/photo-1556228578-9c360e2d0b4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//   }

//   const categories = [
//     {
//       name: 'Soins Visage',
//       description: 'Sérums, crèmes et masques pour une peau radieuse',
//       icon: Sparkles,
//       path: '/produits?category=visage',
//       color: 'from-primary to-secondary',
//       bgColor: 'bg-gradient-to-br from-primary/10 to-secondary/10',
//       image: images.faceCare,
//       stats: '12 produits'
//     },
//     {
//       name: 'Soins Corps',
//       description: 'Huiles, laits et exfoliants pour le corps',
//       icon: Droplets,
//       path: '/produits?category=corps',
//       color: 'from-emerald-500 to-teal-500',
//       bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
//       image: images.bodyCare,
//       stats: '8 produits'
//     },
//     {
//       name: 'Soins Spécialisés',
//       description: 'Solutions ciblées pour besoins spécifiques',
//       icon: Zap,
//       path: '/produits?category=soins-cibles',
//       color: 'from-amber-500 to-orange-500',
//       bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
//       image: images.targetedCare,
//       stats: '6 produits'
//     },
//     {
//       name: 'Coffrets Cadeaux',
//       description: 'Ensembles premium pour offrir ou se faire plaisir',
//       icon: Gem,
//       path: '/produits?category=coffrets',
//       color: 'from-purple-500 to-indigo-500',
//       bgColor: 'bg-gradient-to-br from-purple-50 to-indigo-50',
//       image: images.giftSet,
//       stats: '5 coffrets'
//     }
//   ]

//   const features = [
//     {
//       icon: ShieldCheck,
//       title: "100% Naturel & Bio",
//       description: "Ingrédients certifiés bio sans produits chimiques",
//       color: "text-emerald-600 bg-emerald-50"
//     },
//     {
//       icon: Truck,
//       title: "Livraison Express",
//       description: "Recevez vos produits sous 24h à 48h",
//       color: "text-blue-600 bg-blue-50"
//     },
//     {
//       icon: Shield,
//       title: "Paiement Sécurisé",
//       description: "Paiement à la livraison ou via WhatsApp",
//       color: "text-violet-600 bg-violet-50"
//     },
//     {
//       icon: Users,
//       title: "Conseils Personnalisés",
//       description: "Accompagnement personnalisé par nos experts",
//       color: "text-primary bg-primary/10"
//     }
//   ]

//   const testimonials = [
//     {
//       name: "Marie K.",
//       location: "Abidjan",
//       content: "Les sérums Petal ont transformé ma peau. Finies les imperfections, bonjour l'éclat naturel !",
//       rating: 5,
//       image: images.happyCustomer
//     },
//     {
//       name: "Fatou D.",
//       location: "Yamoussoukro",
//       content: "Commande ultra facile sur WhatsApp. Livraison rapide et produits de qualité exceptionnelle.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       name: "Aïcha B.",
//       location: "Bouaké",
//       content: "Enfin des produits naturels adaptés à notre climat. Ma peau respire et rayonne !",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     }
//   ]

//   const stats = [
//     { value: "98%", label: "Clients satisfaits", icon: Heart },
//     { value: "24h", label: "Livraison moyenne", icon: Clock },
//     { value: "50+", label: "Produits naturels", icon: Leaf },
//     { value: "10k+", label: "Commandes traitées", icon: Award }
//   ]

//   const bestSellers = [
//     {
//       name: "Sérum Éclat",
//       category: "Visage",
//       price: "29,99€",
//       image: images.product1,
//       rating: 4.9
//     },
//     {
//       name: "Huile Corporelle",
//       category: "Corps",
//       price: "24,99€",
//       image: images.product2,
//       rating: 4.8
//     }
//   ]

//   return (
//     <div className="relative min-h-screen bg-white overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent" />
//       <div className="absolute top-40 right-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-20" />
//       <div className="absolute bottom-40 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-20" />

//       {/* Hero Section */}
//       <section className="relative pt-16 lg:pt-24 pb-20 lg:pb-32">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             {/* Text Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="relative z-10"
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="inline-flex items-center gap-3 px-4 py-2.5 bg-white rounded-full shadow-lg mb-8"
//               >
//                 <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
//                 <span className="text-sm font-semibold text-gray-800">
//                   🎉 Offre spéciale : -15% sur la première commande
//                 </span>
//               </motion.div>

//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//                 Beauté{' '}
//                 <span className="relative inline-block">
//                   <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
//                     naturelle
//                   </span>
//                   <motion.div
//                     initial={{ width: 0 }}
//                     animate={{ width: "100%" }}
//                     transition={{ duration: 1, delay: 0.5 }}
//                     className="absolute -bottom-2 left-0 h-3 bg-gradient-to-r from-primary/20 to-emerald-200 rounded-full"
//                   />
//                 </span>
//                 , résultats{' '}
//                 <span className="text-primary">exceptionnels</span>
//               </h1>

//               <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl leading-relaxed">
//                 Découvrez des soins peau et corps 100% naturels, formulés avec des ingrédients 
//                 actifs d'origine végétale. Une beauté responsable qui prend soin de vous et de la planète.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 mb-12">
//                 <Link to="/produits">
//                   <Button 
//                     variant="primary" 
//                     size="xl"
//                     className="group relative overflow-hidden px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl"
//                   >
//                     <span className="relative z-10 flex items-center gap-3">
//                       <ShoppingBag className="h-5 w-5" />
//                       Découvrir la boutique
//                       <ChevronRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
//                     </span>
//                     <motion.div
//                       whileHover={{ scale: 1.1 }}
//                       className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
//                     />
//                   </Button>
//                 </Link>

//                 <a
//                   href="https://wa.me/+2250701781701"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group"
//                 >
//                   <Button 
//                     variant="outline" 
//                     size="xl"
//                     className="border-2 border-gray-300 hover:border-emerald-500 px-8 py-4 text-lg font-semibold"
//                   >
//                     <div className="flex items-center gap-3">
//                       <WhatsAppIcon />
//                       Commander sur WhatsApp
//                     </div>
//                   </Button>
//                 </a>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//                 {stats.map((stat, index) => (
//                   <motion.div
//                     key={stat.label}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
//                     className="text-center"
//                   >
//                     <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
//                       {stat.value}
//                     </div>
//                     <div className="text-sm text-gray-600">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Hero Image */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative lg:pl-10"
//             >
//               <div className="relative">
//                 {/* Main image container */}
//                 <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//                   <img
//                     src={images.hero}
//                     alt="Produits de beauté naturels Petal"
//                     className="w-full h-[500px] object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
//                   {/* Floating elements */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 1 }}
//                     className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
//                         <Leaf className="h-6 w-6 text-white" />
//                       </div>
//                       <div>
//                         {/* <div className="font-bold text-gray-900">100% Vegan</div>
//                         <div className="text-sm text-gray-600">Sans cruauté</div> */}
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* Best seller tag */}
//                   <div className="absolute bottom-6 right-6">
//                     <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
//                       <div className="flex items-center gap-2">
//                         <Star className="h-4 w-4 text-amber-400 fill-current" />
//                         <span className="font-semibold text-gray-900">Best-seller</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating product cards */}
//                 <motion.div
//                   animate={{ y: [0, -15, 0] }}
//                   transition={{ duration: 3, repeat: Infinity }}
//                   className="absolute -bottom-6 -left-6 w-40 h-40 bg-white rounded-2xl shadow-2xl p-3 hidden lg:block"
//                 >
//                   <div className="relative w-full h-full rounded-xl overflow-hidden">
//                     <img
//                       src={images.product1}
//                       alt="Sérum Éclat"
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
//                       <div className="text-white font-semibold text-sm">Sérum Éclat</div>
//                     </div>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   animate={{ y: [0, 10, 0] }}
//                   transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
//                   className="absolute -top-6 -right-6 w-32 h-32 bg-white rounded-2xl shadow-2xl p-3 hidden lg:block"
//                 >
//                   <div className="relative w-full h-full rounded-xl overflow-hidden">
//                     <img
//                       src={images.product2}
//                       alt="Huile Corporelle"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16  relative lg:py-24 bg-gray-50/50">
//       {/* <img src={Lianeg} alt="" className=' absolute z-10 hidden w-72   lg:block left-[-75px] animate-float delay-1000 pointer-events-none top-[-120px] ' /> */}
//       <img src={Lianed} alt="" className=' absolute z-10 hidden w-72 rotate-6 lg:block right-[-75px] animate-float delay-1000 pointer-events-none top-[-120px] ' />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//               Pourquoi choisir{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
//                 Petal
//               </span>
//               ?
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Notre engagement pour votre bien-être et celui de la planète
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="relative group"
//               >
//                 <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
//                   <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.color} mb-6`}>
//                     <feature.icon className="h-7 w-7" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600">
//                     {feature.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="py-16 lg:py-28 relative">
//         {/* <img src="/src/IMAGES/OIPL.png" alt="" className=' absolute z-10 hidden w-72   lg:block left-[-75px] animate-float delay-1000 pointer-events-none top-[120px] ' /> */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-block mb-4">
//               <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold">
//                 <div className="w-2 h-2 bg-emerald-500 rounded-full" />
//                 Nos Univers
//               </div>
//             </div>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//               Des soins pour{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
//                 chaque besoin
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Découvrez nos collections spécialement formulées pour prendre soin de vous
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {categories.map((category, index) => (
//               <motion.div
//                 key={category.name}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="group relative"
//               >
//                 <Link to={category.path} className="block">
//                   <div className={`relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ${category.bgColor}`}>
//                     <div className="relative h-64 md:h-72">
//                       <img
//                         src={category.image}
//                         alt={category.name}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                      
//                       {/* Content overlay */}
//                       <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
//                         <div className="flex items-center justify-between mb-4">
//                           <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
//                             <category.icon className="h-6 w-6 text-white" />
//                           </div>
//                           <span className="text-sm font-semibold text-white px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full">
//                             {category.stats}
//                           </span>
//                         </div>
                        
//                         <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
//                           {category.name}
//                         </h3>
                        
//                         <p className="text-white/90 mb-4">
//                           {category.description}
//                         </p>
                        
//                         <div className="flex items-center text-white font-semibold">
//                           Explorer
//                           <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Best Sellers Preview */}
//       <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//               Nos{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
//                 best-sellers
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Les produits préférés de notre communauté
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {bestSellers.map((product, index) => (
//               <motion.div
//                 key={product.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow overflow-hidden"
//               >
//                 <div className="relative h-48 md:h-56">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
//                     <div className="flex items-center gap-1">
//                       <Star className="h-4 w-4 text-amber-400 fill-current" />
//                       <span className="font-semibold text-gray-900">{product.rating}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="text-sm text-emerald-600 font-semibold mb-2">
//                     {product.category}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     {product.name}
//                   </h3>
//                   <div className="flex items-center justify-between">
//                     <div className="text-2xl font-bold text-primary">
//                       {product.price}
//                     </div>
//                     <Button variant="primary" size="sm">
//                       <ShoppingBag className="h-4 w-4 mr-2" />
//                       Acheter
//                     </Button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16 lg:py-28">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//               Ils nous{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
//                 font confiance
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Les avis de notre communauté de clients satisfaits
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 className="relative"
//               >
//                 <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow h-full">
//                   {/* Rating */}
//                   <div className="flex mb-6">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star 
//                         key={i} 
//                         className="h-5 w-5 text-amber-400 fill-current" 
//                       />
//                     ))}
//                   </div>
                  
//                   {/* Testimonial text */}
//                   <p className="text-gray-700 text-lg mb-8 leading-relaxed">
//                     "{testimonial.content}"
//                   </p>
                  
//                   {/* Author */}
//                   <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
//                     <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
//                       {testimonial.image && (
//                         <img
//                           src={testimonial.image}
//                           alt={testimonial.name}
//                           className="w-full h-full object-cover"
//                         />
//                       )}
//                     </div>
//                     <div>
//                       <div className="font-bold text-gray-900">{testimonial.name}</div>
//                       <div className="text-sm text-gray-600">{testimonial.location}</div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="py-16 lg:py-28 bg-gradient-to-r from-primary/5 to-emerald-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//           >
//             <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-emerald-600 rounded-full mb-8">
//               <Sparkles className="h-10 w-10 text-white" />
//             </div>
            
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//               Prêt(e) à commencer votre voyage vers une peau plus saine ?
//             </h2>
            
//             <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
//               Rejoignez nos milliers de clients satisfaits et découvrez la différence 
//               des soins 100% naturels Petal.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="https://wa.me/+2250701781701"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button 
//                   variant="primary" 
//                   size="xl"
//                   className="px-8 py-4 text-lg font-semibold shadow-lg"
//                 >
//                   <WhatsAppIcon />
//                   Commander sur WhatsApp
//                 </Button>
//               </a>
              
//               <Link to="/produits">
//                 <Button 
//                   variant="outline" 
//                   size="xl"
//                   className="px-8 py-4 text-lg font-semibold border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
//                 >
//                   Voir tous les produits
//                 </Button>
//               </Link>
//             </div>
            
//             <div className="mt-12 pt-8 border-t border-gray-200/50">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                 <div className="flex flex-col items-center">
//                   <CheckCircle className="h-6 w-6 text-emerald-600 mb-2" />
//                   <span className="text-sm font-medium text-gray-700">Paiement sécurisé</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <Truck className="h-6 w-6 text-emerald-600 mb-2" />
//                   <span className="text-sm font-medium text-gray-700">Livraison 24/48h</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <Shield className="h-6 w-6 text-emerald-600 mb-2" />
//                   <span className="text-sm font-medium text-gray-700">Satisfait ou remboursé</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <Leaf className="h-6 w-6 text-emerald-600 mb-2" />
//                   <span className="text-sm font-medium text-gray-700">100% naturel</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }

// // WhatsApp Icon Component
// const WhatsAppIcon = () => (
//   <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-5.46-4.45-9.91-9.91-9.91m5.15 13.46c-.25.73-1.27 1.34-1.79 1.41c-.51.08-1.18.09-2.28-.37c-1.39-.58-2.4-2.03-3.1-2.99c-.7-.96-1.48-2.67-1.48-2.67s-.72-1.44.04-1.99c.38-.28.84-.37 1.28-.37c.43 0 .87.01 1.28.06c.41.05.96.19 1.35.87c.39.67 1.34 2.31 1.46 2.48c.12.17.24.41.06.65c-.18.24-.28.37-.56.57c-.28.2-.54.28-.78.41c-.24.13-.51.28-.22.55c.29.27 1.27 1.19 2.76 1.65c1.49.46 1.49.31 1.76.26c.27-.05 1.11-.45 1.27-.89c.16-.44.16-.82.11-.89c-.05-.07-.22-.13-.47-.24z"/>
//   </svg>
// )


// import React from 'react'
// import { motion } from 'framer-motion'
// import { 
//   Leaf, 
//   Sparkles, 
//   Zap, 
//   Shield, 
//   Truck, 
//   Heart, 
//   Star,
//   ChevronRight,
//   CheckCircle,
//   Users,
//   Award,
//   Clock,
//   ShieldCheck,
//   Droplets,
//   Gem,
//   ShoppingBag,
//   ArrowRight,
//   Flower,
//   Sparkle,
//   Package,
//   TrendingUp,
//   Target,
//   Globe,
//   RefreshCw,
//   Phone,
//   MessageCircle,
//   CreditCard,
//   Truck as TruckIcon,
//   Shield as ShieldIcon,
//   Zap as ZapIcon,
//   Droplet,
//   Scissors,
//   Brush,
//   UserCheck,
//   ThumbsUp,
//   Award as AwardIcon,
//   Gift
// } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import { Button } from '../components/UI/Button'

// export const HomePage: React.FC = () => {
//   // Images optimisées pour le chargement
//   const images = {
//     hero: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1887&q=80",
//     faceCare: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     bodyCare: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     targetedCare: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     giftSet: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     naturalIngredients: 'https://images.unsplash.com/photo-1553787762-9624c5f3117c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     happyCustomer: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     product1: 'https://images.unsplash.com/photo-1556228578-9c360e2d0b4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     product2: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     product3: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     process: 'https://images.unsplash.com/photo-1556228578-9c360e2d0b4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     ingredients: 'https://images.unsplash.com/photo-1544365558-35aa4afcf11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     team: 'https://images.unsplash.com/photo-1551836026-d5c2c0b4d5f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     sustainability: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//   }

//   // Nouvelle section: Valeurs
//   const values = [
//     {
//       icon: Leaf,
//       title: "Écoresponsabilité",
//       description: "Emballages recyclables et approvisionnement durable",
//       color: "from-emerald-500 to-teal-500",
//       bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50"
//     },
//     {
//       icon: ShieldCheck,
//       title: "Transparence Totale",
//       description: "Liste complète des ingrédients, sans secrets",
//       color: "from-blue-500 to-cyan-500",
//       bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
//     },
//     {
//       icon: Users,
//       title: "Communauté",
//       description: "Échange et partage d'expériences entre clientes",
//       color: "from-pink-500 to-rose-500",
//       bgColor: "bg-gradient-to-br from-pink-50 to-rose-50"
//     },
//     {
//       icon: Award,
//       title: "Excellence",
//       description: "Formules testées et approuvées en laboratoire",
//       color: "from-amber-500 to-orange-500",
//       bgColor: "bg-gradient-to-br from-amber-50 to-orange-50"
//     }
//   ]

//   // Section: Processus de fabrication
//   const processSteps = [
//     {
//       step: "01",
//       title: "Sélection des ingrédients",
//       description: "Nous sélectionnons rigoureusement les meilleurs ingrédients naturels",
//       icon: Target
//     },
//     {
//       step: "02",
//       title: "Formulation scientifique",
//       description: "Nos experts créent des formules efficaces et stables",
//       icon: Zap
//     },
//     {
//       step: "03",
//       title: "Tests rigoureux",
//       description: "Tous nos produits sont testés dermatologiquement",
//       icon: ShieldCheck
//     },
//     {
//       step: "04",
//       title: "Production éthique",
//       description: "Fabrication respectueuse de l'environnement",
//       icon: Globe
//     }
//   ]

//   // Section: Produits phares améliorée
//   const featuredProducts = [
//     {
//       id: 1,
//       name: "Sérum Éclat Radieux",
//       category: "Visage",
//       price: "29,99€",
//       originalPrice: "35,99€",
//       rating: 4.9,
//       reviews: 128,
//       image: images.product1,
//       badges: ["Best-seller", "Bio"],
//       features: ["Anti-âge", "Hydratant intense", "Éclat immédiat"],
//       color: "from-pink-400 to-rose-500"
//     },
//     {
//       id: 2,
//       name: "Huile Corporelle Nourrissante",
//       category: "Corps",
//       price: "24,99€",
//       originalPrice: "29,99€",
//       rating: 4.8,
//       reviews: 96,
//       image: images.product2,
//       badges: ["Nouveau", "Vegan"],
//       features: ["Peau douce", "Longue tenue", "Odeur naturelle"],
//       color: "from-amber-400 to-orange-500"
//     },
//     {
//       id: 3,
//       name: "Masque Détox Purifiant",
//       category: "Visage",
//       price: "19,99€",
//       originalPrice: "24,99€",
//       rating: 4.7,
//       reviews: 74,
//       image: images.product3,
//       badges: ["Détox", "Purifiant"],
//       features: ["Pores resserrés", "Peau nette", "Effet frais"],
//       color: "from-emerald-400 to-teal-500"
//     }
//   ]

//   // Section: Abonnement
//   const subscriptionBenefits = [
//     "Livraison gratuite",
//     "-20% sur tous les produits",
//     "Échantillons exclusifs",
//     "Conseils personnalisés",
//     "Accès anticipé aux nouveautés"
//   ]

//   // Nouvelle section: Blog preview
//   const blogPosts = [
//     {
//       title: "Les bienfaits des huiles essentielles",
//       excerpt: "Découvrez comment les huiles essentielles peuvent transformer votre routine beauté...",
//       image: images.ingredients,
//       category: "Conseils",
//       readTime: "5 min"
//     },
//     {
//       title: "Notre engagement écologique",
//       excerpt: "Comment nous réduisons notre impact environnemental à chaque étape...",
//       image: images.sustainability,
//       category: "Écoresponsabilité",
//       readTime: "4 min"
//     },
//     {
//       title: "Rencontrez notre équipe d'experts",
//       excerpt: "Découvrez les passionnés derrière la formulation de nos produits...",
//       image: images.team,
//       category: "Équipe",
//       readTime: "3 min"
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       {/* Hero Section - Design épuré et élégant */}
//       <section className="relative min-h-screen flex items-center">
//         {/* Background simple avec overlay */}
//         <div className="absolute inset-0">
//           <img 
//             src={images.hero}
//             alt="Femme rayonnante avec des produits de beauté naturels"
//             className="w-full h-full object-cover"
//             loading="eager"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//         </div>

//         {/* Contenu Hero */}
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-2xl"
//           >
//             {/* Badge élégant */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20"
//             >
//               <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
//               <span className="text-white font-medium">
//                 🎉 Offre exclusive : -20% avec le code BIENVENUE
//               </span>
//             </motion.div>

//             {/* Titre principal */}
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//               La Beauté{' '}
//               <span className="relative inline-block">
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-400 to-rose-400">
//                   Réinventée
//                 </span>
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: "100%" }}
//                   transition={{ delay: 0.5, duration: 1 }}
//                   className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-pink-400 to-rose-400 rounded-full"
//                 />
//               </span>
//             </h1>

//             <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
//               Des soins d'exception, 100% naturels, formulés pour révéler 
//               votre éclat naturel. Parce que votre beauté mérite le meilleur.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-16">
//               <Link to="/produits">
//                 <Button
//                   size="xl"
//                   className="group bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white px-10 py-5 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
//                 >
//                   <span className="flex items-center gap-3">
//                     <ShoppingBag className="h-6 w-6" />
//                     Explorer la collection
//                     <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
//                   </span>
//                 </Button>
//               </Link>

//               <a href="https://wa.me/+2250701781701" target="_blank" rel="noopener noreferrer">
//                 <Button
//                   variant="outline"
//                   size="xl"
//                   className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/40 text-white px-10 py-5 text-lg font-semibold rounded-xl"
//                 >
//                   <div className="flex items-center gap-3">
//                     <MessageCircle className="h-6 w-6" />
//                     Commander sur WhatsApp
//                   </div>
//                 </Button>
//               </a>
//             </div>

//             {/* Stats élégantes */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {[
//                 { value: "98%", label: "Satisfaction", icon: Heart },
//                 { value: "24h", label: "Livraison", icon: Truck },
//                 { value: "50+", label: "Produits", icon: Leaf },
//                 { value: "10k+", label: "Clientes", icon: Users }
//               ].map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.8 + index * 0.1 }}
//                   className="text-center"
//                 >
//                   <div className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
//                     <stat.icon className="h-6 w-6 text-primary" />
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-white/70 font-medium">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
//           </div>
//         </motion.div>
//       </section>

//       {/* Section: Nos Valeurs */}
//       <section className="py-24 bg-gradient-to-b from-white to-gray-50/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 text-primary mb-4">
//               <Sparkle className="h-5 w-5" />
//               <span className="font-semibold">Notre Philosophie</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Plus qu'une marque,{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
//                 un engagement
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Nous croyons en une beauté responsable, transparente et efficace
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <motion.div
//                 key={value.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group relative"
//               >
//                 <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-gray-100">
//                   {/* Icon background */}
//                   <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center shadow-lg`}>
//                     <value.icon className="h-10 w-10 text-white" />
//                   </div>
                  
//                   <div className="pt-10">
//                     <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
//                       {value.title}
//                     </h3>
//                     <p className="text-gray-600 text-center">
//                       {value.description}
//                     </p>
//                   </div>
                  
//                   {/* Hover effect */}
//                   <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-500" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section: Processus de Fabrication */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Un processus{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
//                 rigoureux
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               De la sélection des ingrédients à votre porte, chaque étape compte
//             </p>
//           </div>

//           <div className="relative">
//             {/* Timeline */}
//             <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-pink-400 to-emerald-400" />
            
//             <div className="space-y-20">
//               {processSteps.map((step, index) => (
//                 <motion.div
//                   key={step.step}
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   className={`flex flex-col lg:flex-row items-center gap-8 ${
//                     index % 2 === 0 ? 'lg:flex-row-reverse' : ''
//                   }`}
//                 >
//                   {/* Step number */}
//                   <div className="relative">
//                     <div className="w-24 h-24 bg-gradient-to-r from-primary to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
//                       <span className="text-3xl font-bold text-white">{step.step}</span>
//                     </div>
//                     <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping" />
//                   </div>

//                   {/* Content */}
//                   <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
//                     <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
//                       <div className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
//                         <div className="p-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
//                           <step.icon className="h-6 w-6 text-emerald-600" />
//                         </div>
//                         <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
//                       </div>
//                       <p className="text-gray-600">{step.description}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section: Collections - Cartes améliorées */}
//       <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center gap-2 text-primary mb-4">
//               <Flower className="h-5 w-5" />
//               <span className="font-semibold">Nos Univers</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Des soins{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
//                 sur mesure
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Découvrez nos collections spécialement conçues pour vos besoins
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 name: 'Soins Visage',
//                 description: 'Sérums, crèmes et masques pour une peau radieuse',
//                 icon: Sparkles,
//                 products: 12,
//                 image: images.faceCare,
//                 color: 'from-pink-500 to-rose-500',
//                 gradient: 'bg-gradient-to-br from-pink-50 to-rose-50'
//               },
//               {
//                 name: 'Soins Corps',
//                 description: 'Huiles, laits et exfoliants pour le corps',
//                 icon: Droplets,
//                 products: 8,
//                 image: images.bodyCare,
//                 color: 'from-emerald-500 to-teal-500',
//                 gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50'
//               },
//               {
//                 name: 'Spécialisés',
//                 description: 'Solutions ciblées pour besoins spécifiques',
//                 icon: Zap,
//                 products: 6,
//                 image: images.targetedCare,
//                 color: 'from-amber-500 to-orange-500',
//                 gradient: 'bg-gradient-to-br from-amber-50 to-orange-50'
//               },
//               {
//                 name: 'Coffrets',
//                 description: 'Ensembles premium pour offrir ou se faire plaisir',
//                 icon: Gift,
//                 products: 5,
//                 image: images.giftSet,
//                 color: 'from-purple-500 to-indigo-500',
//                 gradient: 'bg-gradient-to-br from-purple-50 to-indigo-50'
//               }
//             ].map((category, index) => (
//               <motion.div
//                 key={category.name}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group relative"
//               >
//                 <Link to={`/produits?category=${category.name.toLowerCase().replace(' ', '-')}`}>
//                   <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
//                     {/* Image avec overlay */}
//                     <div className="relative h-64 overflow-hidden">
//                       <img
//                         src={category.image}
//                         alt={category.name}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                      
//                       {/* Badge produits */}
//                       <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
//                         <span className="text-sm font-semibold text-gray-900">
//                           {category.products} produits
//                         </span>
//                       </div>
                      
//                       {/* Icon */}
//                       <div className={`absolute top-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
//                         <category.icon className="h-7 w-7 text-white" />
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className={`relative p-6 ${category.gradient}`}>
//                       <h3 className="text-xl font-bold text-gray-900 mb-3">
//                         {category.name}
//                       </h3>
//                       <p className="text-gray-600 text-sm mb-6">
//                         {category.description}
//                       </p>
                      
//                       {/* CTA avec effet */}
//                       <div className="flex items-center justify-between">
//                         <span className="text-primary font-semibold text-sm">
//                           Découvrir →
//                         </span>
//                         <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-white transition-colors">
//                           <ArrowRight className="h-4 w-4" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section: Produits Phares - Cartes premium */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
//               <Star className="h-5 w-5 fill-current" />
//               <span className="font-semibold">Les Préférés</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Nos{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
//                 Best-Sellers
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Les produits que nos clientes adorent et recommandent
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuredProducts.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group relative"
//               >
//                 <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
//                   {/* Badges */}
//                   <div className="absolute top-4 left-4 z-10 flex gap-2">
//                     {product.badges.map((badge, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900"
//                       >
//                         {badge}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Image avec effet */}
//                   <div className="relative h-64 overflow-hidden">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
//                     {/* Rating */}
//                     <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
//                       <div className="flex items-center gap-1">
//                         <Star className="h-4 w-4 text-amber-400 fill-current" />
//                         <span className="font-bold text-gray-900">{product.rating}</span>
//                         <span className="text-xs text-gray-600">({product.reviews})</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     <div className="text-sm text-primary font-semibold mb-2">
//                       {product.category}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">
//                       {product.name}
//                     </h3>
                    
//                     {/* Features */}
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {product.features.map((feature, i) => (
//                         <span
//                           key={i}
//                           className="px-3 py-1 bg-gray-50 rounded-full text-xs text-gray-600"
//                         >
//                           {feature}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Price & CTA */}
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="text-2xl font-bold text-gray-900">
//                           {product.price}
//                         </div>
//                         <div className="text-sm text-gray-500 line-through">
//                           {product.originalPrice}
//                         </div>
//                       </div>
//                       <Button
//                         variant="primary"
//                         className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90"
//                       >
//                         <ShoppingBag className="h-4 w-4 mr-2" />
//                         Ajouter
//                       </Button>
//                     </div>
//                   </div>

//                   {/* Hover effect */}
//                   <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-all duration-300" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* View all products */}
//           <div className="text-center mt-12">
//             <Link to="/produits">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8"
//               >
//                 Voir tous les produits
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Section: Abonnement Premium */}
//       <section className="py-24 bg-gradient-to-r from-primary/5 via-pink-50/30 to-emerald-50/30">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100"
//           >
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-pink-500 rounded-full mb-8 shadow-lg">
//                 <CrownIcon className="h-10 w-10 text-white" />
//               </div>
              
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Rejoignez le Club{' '}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
//                   Petal Privilège
//                 </span>
//               </h2>
              
//               <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
//                 Profitez d'avantages exclusifs et faites des économies sur tous vos achats
//               </p>
              
//               {/* Benefits grid */}
//               <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
//                 {subscriptionBenefits.map((benefit, index) => (
//                   <div key={index} className="flex flex-col items-center">
//                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
//                       <CheckCircle className="h-6 w-6 text-primary" />
//                     </div>
//                     <span className="text-sm font-medium text-gray-700 text-center">
//                       {benefit}
//                     </span>
//                   </div>
//                 ))}
//               </div>
              
//               <Button
//                 size="xl"
//                 className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 px-12 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl"
//               >
//                 Découvrir le club privilège
//                 <ArrowRight className="ml-3 h-5 w-5" />
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Section: Blog Preview */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Notre{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
//                 Magazine
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Conseils, actualités et inspirations beauté
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {blogPosts.map((post, index) => (
//               <motion.div
//                 key={post.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group"
//               >
//                 <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
//                   {/* Image */}
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={post.image}
//                       alt={post.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute top-4 left-4">
//                       <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary">
//                         {post.category}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     <div className="flex items-center text-sm text-gray-500 mb-3">
//                       <Clock className="h-4 w-4 mr-1" />
//                       {post.readTime} de lecture
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
//                       {post.title}
//                     </h3>
//                     <p className="text-gray-600 mb-6">
//                       {post.excerpt}
//                     </p>
//                     <div className="flex items-center text-primary font-semibold">
//                       Lire l'article
//                       <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
//                     </div>
//                   </div>
//                 </article>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section: CTA Final avec garanties */}
//       <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
//               Prête à révéler{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-400">
//                 votre éclat
//               </span>
//               {' '}?
//             </h2>
            
//             <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
//               Rejoignez des milliers de femmes qui ont déjà fait le choix 
//               d'une beauté naturelle et efficace
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
//               <Link to="/produits">
//                 <Button
//                   size="xl"
//                   className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white px-12 py-6 text-lg font-semibold rounded-xl shadow-2xl"
//                 >
//                   <ShoppingBag className="h-6 w-6 mr-3" />
//                   Commencer mes achats
//                 </Button>
//               </Link>
              
//               <a href="https://wa.me/+2250701781701" target="_blank" rel="noopener noreferrer">
//                 <Button
//                   variant="outline"
//                   size="xl"
//                   className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-12 py-6 text-lg font-semibold rounded-xl"
//                 >
//                   <MessageCircle className="h-6 w-6 mr-3" />
//                   Discuter avec un expert
//                 </Button>
//               </a>
//             </div>
            
//             {/* Garanties */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/10">
//               {[
//                 { icon: ShieldCheck, text: "Satisfait ou remboursé 30 jours", color: "text-emerald-400" },
//                 { icon: Truck, text: "Livraison offerte dès 50€", color: "text-blue-400" },
//                 { icon: CreditCard, text: "Paiement 100% sécurisé", color: "text-purple-400" },
//                 { icon: Phone, text: "Support client 7j/7", color: "text-pink-400" }
//               ].map((guarantee, index) => (
//                 <div key={index} className="flex flex-col items-center">
//                   <guarantee.icon className={`h-8 w-8 mb-4 ${guarantee.color}`} />
//                   <span className="text-sm text-white/70 text-center">{guarantee.text}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }

// // Icon Components
// const CrownIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
//   </svg>
// )

// const WhatsAppIcon = () => (
//   <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-5.46-4.45-9.91-9.91-9.91m5.15 13.46c-.25.73-1.27 1.34-1.79 1.41c-.51.08-1.18.09-2.28-.37c-1.39-.58-2.4-2.03-3.1-2.99c-.7-.96-1.48-2.67-1.48-2.67s-.72-1.44.04-1.99c.38-.28.84-.37 1.28-.37c.43 0 .87.01 1.28.06c.41.05.96.19 1.35.87c.39.67 1.34 2.31 1.46 2.48c.12.17.24.41.06.65c-.18.24-.28.37-.56.57c-.28.2-.54.28-.78.41c-.24.13-.51.28-.22.55c.29.27 1.27 1.19 2.76 1.65c1.49.46 1.49.31 1.76.26c.27-.05 1.11-.45 1.27-.89c.16-.44.16-.82.11-.89c-.05-.07-.22-.13-.47-.24z"/>
//   </svg>
// )






// import React from 'react'
// import { motion } from 'framer-motion'
// import { 
//   Leaf, 
//   Sparkles, 
//   Zap, 
//   Shield, 
//   Truck, 
//   Heart, 
//   Star,
//   ChevronRight,
//   CheckCircle,
//   Users,
//   Award,
//   Clock,
//   ShieldCheck,
//   Droplets,
//   Gem,
//   ShoppingBag,
//   ArrowRight,
//   Flower,
//   Sparkle,
//   Target,
//   Globe,
//   Beaker,
//   TestTube,
//   Filter,
//   ThumbsUp,
//   Award as AwardIcon,
//   TrendingUp,
//   UserCheck,
//   MessageCircle,
//   Crown
// } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import { Button } from '../components/UI/Button'
// import hero from '../IMAGES/front-view-confident-woman-posing-while-wearing-body-shaper.jpg'
// import process2 from '../IMAGES/portrait-woman-interacting-with-fruits.jpg'
// export const HomePage: React.FC = () => {
//   // Images optimisées
//   const images = {
//     // hero: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1887&q=80",
//     hero: hero,
//     faceCare: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     bodyCare: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     targetedCare: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     giftSet: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     product1: 'https://images.unsplash.com/photo-1556228578-9c360e2d0b4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     product2: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     product3: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     process1: 'https://images.unsplash.com/photo-1556228578-9c360e2d0b4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     process2: process2,
//     process3: 'https://images.unsplash.com/photo-1556228578-9c360e2d0b4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     process4: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
//   }

//   // Processus de fabrication
//   const processSteps = [
//     {
//       step: "01",
//       title: "Sélection Ingredients",
//       description: "Nous sélectionnons rigoureusement les meilleurs ingrédients naturels provenant de sources durables et certifiées bio.",
//       icon: Target,
//       image: images.process1,
//       features: ["Bio certifié", "Traçabilité totale", "Qualité premium"],
//       color: "from-emerald-500 to-teal-500",
//       bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50"
//     },
//     {
//       step: "02",
//       title: "Formulation Scientifique",
//       description: "Nos experts en cosmétologie développent des formules innovantes qui combinent efficacité prouvée et respect de la peau.",
//       icon: Beaker,
//       image: images.process2,
//       features: ["Recherche approfondie", "Tests en laboratoire", "Formules brevetées"],
//       color: "from-blue-500 to-cyan-500",
//       bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
//     },
//     {
//       step: "03",
//       title: "Tests Rigoureux",
//       description: "Chaque produit subit des tests dermatologiques et des contrôles qualité stricts pour garantir sécurité et performance.",
//       icon: TestTube,
//       image: images.process3,
//       features: ["Tests dermatologiques", "Contrôles qualité", "Sans allergènes"],
//       color: "from-purple-500 to-pink-500",
//       bgColor: "bg-gradient-to-br from-purple-50 to-pink-50"
//     },
//     {
//       step: "04",
//       title: "Production Éthique",
//       description: "Notre fabrication respecte l'environnement avec des procédés écoresponsables et une empreinte carbone réduite.",
//       icon: Globe,
//       image: images.process4,
//       features: ["Production locale", "Emballages recyclables", "Éthique garantie"],
//       color: "from-amber-500 to-orange-500",
//       bgColor: "bg-gradient-to-br from-amber-50 to-orange-50"
//     }
//   ]

//   // Catégories de produits
//   const categories = [
//     {
//       name: 'Soins Visage',
//       description: 'Sérums, crèmes et masques pour une peau radieuse et éclatante',
//       icon: Sparkles,
//       path: '/produits?category=visage',
//       products: 12,
//       image: images.faceCare,
//       color: 'from-pink-500 to-rose-500',
//       features: ['Anti-âge', 'Hydratation', 'Éclat', 'Purification']
//     },
//     {
//       name: 'Soins Corps',
//       description: 'Huiles, laits et exfoliants pour un corps nourri et sublimé',
//       icon: Droplets,
//       path: '/produits?category=corps',
//       products: 8,
//       image: images.bodyCare,
//       color: 'from-emerald-500 to-teal-500',
//       features: ['Nourrissant', 'Fermeté', 'Douceur', 'Tonus']
//     },
//     {
//       name: 'Soins Spécialisés',
//       description: 'Solutions ciblées pour répondre à vos besoins spécifiques',
//       icon: Zap,
//       path: '/produits?category=soins-cibles',
//       products: 6,
//       image: images.targetedCare,
//       color: 'from-amber-500 to-orange-500',
//       features: ['Ciblé', 'Intensif', 'Résultats rapides', 'Expert']
//     },
//     {
//       name: 'Coffrets Cadeaux',
//       description: 'Ensembles premium pour offrir ou se faire plaisir',
//       icon: Gem,
//       path: '/produits?category=coffrets',
//       products: 5,
//       image: images.giftSet,
//       color: 'from-purple-500 to-indigo-500',
//       features: ['Élégant', 'Complet', 'Personnalisable', 'Prestige']
//     }
//   ]

//   // Features
//   const features = [
//     {
//       icon: ShieldCheck,
//       title: "100% Naturel & Bio",
//       description: "Ingrédients certifiés bio sans produits chimiques",
//       color: "text-emerald-600 bg-emerald-50"
//     },
//     {
//       icon: Truck,
//       title: "Livraison Express",
//       description: "Recevez vos produits sous 24h à 48h",
//       color: "text-blue-600 bg-blue-50"
//     },
//     {
//       icon: Shield,
//       title: "Paiement Sécurisé",
//       description: "Paiement à la livraison ou via WhatsApp",
//       color: "text-primary bg-primary/10"
//     },
//     {
//       icon: Users,
//       title: "Conseils Personnalisés",
//       description: "Accompagnement personnalisé par nos experts",
//       color: "text-pink-600 bg-pink-50"
//     }
//   ]

//   // Produits phares
//   const featuredProducts = [
//     {
//       id: 1,
//       name: "Sérum Éclat Radieux",
//       category: "Visage",
//       price: "29,99€",
//       originalPrice: "35,99€",
//       rating: 4.9,
//       reviews: 128,
//       image: images.product1,
//       badges: ["Best-seller", "Bio"],
//       features: ["Anti-âge", "Hydratant intense", "Éclat immédiat"],
//       color: "from-pink-400 to-rose-500"
//     },
//     {
//       id: 2,
//       name: "Huile Corporelle Nourrissante",
//       category: "Corps",
//       price: "24,99€",
//       originalPrice: "29,99€",
//       rating: 4.8,
//       reviews: 96,
//       image: images.product2,
//       badges: ["Nouveau", "Vegan"],
//       features: ["Peau douce", "Longue tenue", "Odeur naturelle"],
//       color: "from-amber-400 to-orange-500"
//     },
//     {
//       id: 3,
//       name: "Masque Détox Purifiant",
//       category: "Visage",
//       price: "19,99€",
//       originalPrice: "24,99€",
//       rating: 4.7,
//       reviews: 74,
//       image: images.product3,
//       badges: ["Détox", "Purifiant"],
//       features: ["Pores resserrés", "Peau nette", "Effet frais"],
//       color: "from-emerald-400 to-teal-500"
//     }
//   ]

//   // Témoignages
//   const testimonials = [
//     {
//       name: "Marie K.",
//       role: "Cliente",
//       content: "Les sérums Petal ont transformé ma peau. Finies les imperfections, bonjour l'éclat naturel !",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       name: "Fatou D.",
//       role: "Cliente",
//       content: "Commande ultra facile sur WhatsApp. Livraison rapide et produits de qualité exceptionnelle.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       name: "Aïcha B.",
//       role: "Cliente",
//       content: "Enfin des produits naturels adaptés à notre climat. Ma peau respire et rayonne !",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center">
//         {/* Background */}
//         <div className="absolute inset-0">
//           <img 
//             src={images.hero}
//             alt="Femme rayonnante avec des produits de beauté naturels"
//             className="w-full h-full object-cover"
//             loading="eager"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//         </div>

//         {/* Contenu Hero */}
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-2xl"
//           >
//             {/* Badge */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20"
//             >
//               <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
//               <span className="text-white font-medium">
//                 🎉 Offre exclusive : -20% avec le code BIENVENUE
//               </span>
//             </motion.div>

//             {/* Titre */}
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//               La Beauté{' '}
//               <span className="relative inline-block">
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-400 to-rose-400">
//                   Réinventée
//                 </span>
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: "100%" }}
//                   transition={{ delay: 0.5, duration: 1 }}
//                   className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-pink-400 to-rose-400 rounded-full"
//                 />
//               </span>
//             </h1>

//             <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
//               Des soins d'exception, 100% naturels, formulés pour révéler 
//               votre éclat naturel. Parce que votre beauté mérite le meilleur.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-16">
//               <Link to="/produits">
//                 <Button
//                   size="xl"
//                   className="group bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white px-10 py-5 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
//                 >
//                   <span className="flex items-center gap-3">
//                     <ShoppingBag className="h-6 w-6" />
//                     Explorer la collection
//                     <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
//                   </span>
//                 </Button>
//               </Link>

//               <a href="https://wa.me/+2250701781701" target="_blank" rel="noopener noreferrer">
//                 <Button
//                   variant="outline"
//                   size="xl"
//                   className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/40 text-white px-10 py-5 text-lg font-semibold rounded-xl"
//                 >
//                   <div className="flex items-center gap-3">
//                     <MessageCircle className="h-6 w-6" />
//                     Commander sur WhatsApp
//                   </div>
//                 </Button>
//               </a>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {[
//                 { value: "98%", label: "Satisfaction", icon: Heart },
//                 { value: "24h", label: "Livraison", icon: Truck },
//                 { value: "50+", label: "Produits", icon: Leaf },
//                 { value: "10k+", label: "Clientes", icon: Users }
//               ].map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.8 + index * 0.1 }}
//                   className="text-center"
//                 >
//                   <div className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
//                     <stat.icon className="h-6 w-6 text-primary" />
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-white/70 font-medium">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
//           </div>
//         </motion.div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-gradient-to-b from-white to-gray-50/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Pourquoi choisir{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
//                 Petal
//               </span>
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Notre engagement pour votre bien-être
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group relative"
//               >
//                 <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
//                   <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.color} mb-6`}>
//                     <feature.icon className="h-7 w-7" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600">
//                     {feature.description}
//                   </p>
//                   <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
//                     <ChevronRight className="h-5 w-5 text-gray-400" />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section: Processus Rigoureux */}
//       <section className="py-24 bg-gradient-to-b from-white to-gray-50/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <div className="inline-flex items-center gap-2 text-primary mb-4">
//               <AwardIcon className="h-5 w-5" />
//               <span className="font-semibold text-sm uppercase tracking-wider">Excellence</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Un processus{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
//                 d'excellence
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               De la sélection à la formulation, chaque étape reflète notre engagement qualité
//             </p>
//           </motion.div>

//           {/* Timeline */}
//           <div className="relative">
//             <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-gray-300/50 to-transparent" />

//             <div className="space-y-32">
//               {processSteps.map((step, index) => (
//                 <motion.div
//                   key={step.step}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   className={`relative flex flex-col lg:flex-row items-center gap-12 ${
//                     index % 2 === 0 ? 'lg:flex-row-reverse' : ''
//                   }`}
//                 >
//                   {/* Contenu texte */}
//                   <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
//                     <div className="max-w-lg mx-auto lg:mx-0">
//                       <div className="flex items-center gap-4 mb-8">
//                         <div className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-xl`}>
//                           <span className="text-2xl font-bold text-white">{step.step}</span>
//                           <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse" />
//                         </div>
//                         <div className="h-px flex-1 bg-gradient-to-r from-gray-300/50 to-transparent" />
//                       </div>

//                       <div className="mb-8">
//                         <div className="flex items-center gap-3 mb-4">
//                           <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} bg-opacity-10`}>
//                             <step.icon className={`h-6 w-6 ${step.color.replace('from-', 'text-').split(' ')[0]}`} />
//                           </div>
//                           <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
//                             {step.title}
//                           </h3>
//                         </div>
//                         <p className="text-gray-600 leading-relaxed">
//                           {step.description}
//                         </p>
//                       </div>

//                       <div className="space-y-3">
//                         {step.features.map((feature, i) => (
//                           <div key={i} className="flex items-center gap-3">
//                             <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} />
//                             <span className="text-gray-700 font-medium">{feature}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Image */}
//                   <div className="flex-1 relative">
//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       transition={{ duration: 0.3 }}
//                       className="relative group"
//                     >
//                       <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${step.color} opacity-10 blur-xl group-hover:opacity-20 transition-opacity`} />
//                       <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//                         <img
//                           src={step.image}
//                           alt={step.title}
//                           className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        
//                         <div className="absolute bottom-0 left-0 right-0 p-8">
//                           <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                             <div className="flex items-center justify-between">
//                               <span className="text-sm font-semibold text-gray-900">
//                                 Étape {step.step}
//                               </span>
//                               <div className="flex items-center gap-2">
//                                 {[...Array(3)].map((_, i) => (
//                                   <div key={i} className="w-2 h-2 rounded-full bg-gray-300" />
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Stats de qualité */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-24 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-12 border border-gray-100 shadow-lg"
//           >
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {[
//                 { value: "100%", label: "Naturel", icon: Leaf, color: "text-emerald-600" },
//                 { value: "72h", label: "Tests qualité", icon: ShieldCheck, color: "text-blue-600" },
//                 { value: "0%", label: "Parabènes", icon: Filter, color: "text-purple-600" },
//                 { value: "100%", label: "Satisfaction", icon: ThumbsUp, color: "text-primary" }
//               ].map((stat, index) => (
//                 <div key={stat.label} className="text-center">
//                   <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
//                     {stat.value}
//                   </div>
//                   <div className="flex items-center justify-center gap-2 text-gray-700">
//                     <stat.icon className="h-4 w-4" />
//                     <span className="font-medium">{stat.label}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Section: Soins sur Mesure */}
//       <section className="py-24 relative overflow-hidden">
//         {/* Fond gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-emerald-50/30" />
        
//         {/* Éléments décoratifs */}
//         <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-gray-200">
//               <Flower className="h-5 w-5 text-primary" />
//               <span className="font-semibold text-gray-900">Collections Exclusives</span>
//             </div>
            
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
//               Des soins{' '}
//               <span className="relative inline-block">
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
//                   sur mesure
//                 </span>
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "100%" }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 1, delay: 0.3 }}
//                   className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-pink-500 rounded-full"
//                 />
//               </span>
//             </h2>
            
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Découvrez nos collections spécialement formulées pour répondre 
//               aux besoins spécifiques de chaque type de peau
//             </p>
//           </motion.div>

//           {/* Grid des catégories */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {categories.map((category, index) => (
//               <motion.div
//                 key={category.name}
//                 initial={{ opacity: 0, y: 40, scale: 0.95 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="group relative"
//               >
//                 <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
//                   {/* Badge de quantité */}
//                   <div className="absolute top-4 left-4 z-20">
//                     <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
//                       <span className="text-sm font-bold text-gray-900">
//                         {category.products} produits
//                       </span>
//                     </div>
//                   </div>

//                   {/* Image */}
//                   <div className="relative h-72 overflow-hidden">
//                     <img
//                       src={category.image}
//                       alt={category.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       loading="lazy"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                    
//                     {/* Icon */}
//                     <div className={`absolute bottom-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-2xl`}>
//                       <category.icon className="h-8 w-8 text-white" />
//                     </div>
//                   </div>

//                   {/* Contenu */}
//                   <div className="p-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
//                       {category.name}
//                     </h3>
                    
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {category.description}
//                     </p>

//                     {/* Features list */}
//                     <div className="mb-8">
//                       <div className="flex flex-wrap gap-2">
//                         {category.features.map((feature, i) => (
//                           <span
//                             key={i}
//                             className="px-3 py-1.5 bg-gray-50 rounded-full text-xs font-medium text-gray-700 border border-gray-200"
//                           >
//                             {feature}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* CTA */}
//                     <Link to={category.path}>
//                       <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl group-hover:from-primary/5 group-hover:to-primary/5 transition-all duration-300 border border-gray-200 group-hover:border-primary/20">
//                         <div>
//                           <div className="text-sm text-gray-600 mb-1">Découvrir</div>
//                           <div className="text-lg font-bold text-gray-900">
//                             {category.name}
//                           </div>
//                         </div>
//                         <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-white transition-colors duration-300">
//                           <ArrowRight className="h-5 w-5" />
//                         </div>
//                       </div>
//                     </Link>
//                   </div>

//                   {/* Effet hover */}
//                   <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-2xl transition-all duration-500 pointer-events-none" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* CTA de section */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.5 }}
//             className="mt-20 text-center"
//           >
//             <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 border border-gray-200 shadow-lg">
//               <div className="text-left">
//                 <div className="text-sm text-gray-600 mb-1">Besoin d'aide pour choisir ?</div>
//                 <div className="text-xl font-bold text-gray-900">
//                   Nos experts vous accompagnent
//                 </div>
//               </div>
//               <Link to="/conseils">
//                 <Button
//                   variant="primary"
//                   className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 px-8 py-3"
//                 >
//                   <UserCheck className="h-5 w-5 mr-2" />
//                   Obtenir un conseil
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Section: Best Sellers */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
//               <Star className="h-5 w-5 fill-current" />
//               <span className="font-semibold">Les Préférés</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Nos{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
//                 Best-Sellers
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Les produits que nos clientes adorent et recommandent
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuredProducts.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group relative"
//               >
//                 <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
//                   {/* Badges */}
//                   <div className="absolute top-4 left-4 z-10 flex gap-2">
//                     {product.badges.map((badge, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900"
//                       >
//                         {badge}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Image */}
//                   <div className="relative h-64 overflow-hidden">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
//                     {/* Rating */}
//                     <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
//                       <div className="flex items-center gap-1">
//                         <Star className="h-4 w-4 text-amber-400 fill-current" />
//                         <span className="font-bold text-gray-900">{product.rating}</span>
//                         <span className="text-xs text-gray-600">({product.reviews})</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     <div className="text-sm text-primary font-semibold mb-2">
//                       {product.category}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">
//                       {product.name}
//                     </h3>
                    
//                     {/* Features */}
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {product.features.map((feature, i) => (
//                         <span
//                           key={i}
//                           className="px-3 py-1 bg-gray-50 rounded-full text-xs text-gray-600"
//                         >
//                           {feature}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Price & CTA */}
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="text-2xl font-bold text-gray-900">
//                           {product.price}
//                         </div>
//                         <div className="text-sm text-gray-500 line-through">
//                           {product.originalPrice}
//                         </div>
//                       </div>
//                       <Button
//                         variant="primary"
//                         className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90"
//                       >
//                         <ShoppingBag className="h-4 w-4 mr-2" />
//                         Ajouter
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* View all products */}
//           <div className="text-center mt-12">
//             <Link to="/produits">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8"
//               >
//                 Voir tous les produits
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Section: Testimonials */}
//       <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Ils{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
//                 Recommandent
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Les avis de notre communauté de clientes satisfaites
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="relative"
//               >
//                 <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
//                   {/* Quote icon */}
//                   <div className="text-primary/20 mb-6">
//                     <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
//                     </svg>
//                   </div>
                  
//                   {/* Rating */}
//                   <div className="flex mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-4 w-4 text-amber-400 fill-current mr-1" />
//                     ))}
//                   </div>
                  
//                   {/* Content */}
//                   <p className="text-gray-700 mb-8 italic">
//                     "{testimonial.content}"
//                   </p>
                  
//                   {/* Author */}
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-primary to-pink-400 p-0.5">
//                       <div className="w-full h-full rounded-full bg-white">
//                         <img
//                           src={testimonial.avatar}
//                           alt={testimonial.name}
//                           className="w-full h-full object-cover rounded-full"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <div className="font-bold text-gray-900">{testimonial.name}</div>
//                       <div className="text-sm text-gray-600">{testimonial.role}</div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section: CTA Final */}
//       <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
//               Prête à révéler{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-400">
//                 votre éclat
//               </span>
//               {' '}?
//             </h2>
            
//             <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
//               Rejoignez des milliers de femmes qui ont déjà fait le choix 
//               d'une beauté naturelle et efficace
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
//               <Link to="/produits">
//                 <Button
//                   size="xl"
//                   className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white px-12 py-6 text-lg font-semibold rounded-xl shadow-2xl"
//                 >
//                   <ShoppingBag className="h-6 w-6 mr-3" />
//                   Commencer mes achats
//                 </Button>
//               </Link>
              
//               <a href="https://wa.me/+2250701781701" target="_blank" rel="noopener noreferrer">
//                 <Button
//                   variant="outline"
//                   size="xl"
//                   className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-12 py-6 text-lg font-semibold rounded-xl"
//                 >
//                   <MessageCircle className="h-6 w-6 mr-3" />
//                   Discuter avec un expert
//                 </Button>
//               </a>
//             </div>
            
//             {/* Garanties */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/10">
//               {[
//                 { icon: ShieldCheck, text: "Satisfait ou remboursé 30 jours", color: "text-emerald-400" },
//                 { icon: Truck, text: "Livraison offerte dès 50€", color: "text-blue-400" },
//                 { icon: Shield, text: "Paiement 100% sécurisé", color: "text-purple-400" },
//                 { icon: Users, text: "Support client 7j/7", color: "text-pink-400" }
//               ].map((guarantee, index) => (
//                 <div key={index} className="flex flex-col items-center">
//                   <guarantee.icon className={`h-8 w-8 mb-4 ${guarantee.color}`} />
//                   <span className="text-sm text-white/70 text-center">{guarantee.text}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }



// import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import { 
//   Leaf, 
//   Sparkles, 
//   Zap, 
//   Shield, 
//   Truck, 
//   Heart, 
//   Star,
//   ChevronRight,
//   CheckCircle,
//   Users,
//   Award,
//   Clock,
//   ShieldCheck,
//   Droplets,
//   Gem,
//   ShoppingBag,
//   ArrowRight,
//   Flower,
//   Sparkle,
//   Target,
//   Globe,
//   Beaker,
//   TestTube,
//   Filter,
//   ThumbsUp,
//   Award as AwardIcon,
//   TrendingUp,
//   UserCheck,
//   MessageCircle,
//   Crown,
//   ChevronLeft,
//   ChevronRight as ChevronRightIcon,
//   X
// } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import { Button } from '../components/UI/Button'

// // Images locales
// import hero from '../IMAGES/front-view-confident-woman-posing-while-wearing-body-shaper.jpg'
// import process2 from '../IMAGES/portrait-woman-interacting-with-fruits.jpg'

// // Images pour le carrousel
// import carousel1 from '../IMAGES/carou1.jpeg'
// import carousel2 from '../IMAGES/carou2.jpeg'
// import carousel3 from '../IMAGES/carou4.jpeg'

// // Images pour les features
// import naturalImg from '../IMAGES/front-view-confident-woman-posing-while-wearing-body-shaper.jpg'
// import deliveryImg from '../IMAGES/product2.jpeg'
// import secureImg from '../IMAGES/portrait-woman-interacting-with-fruits.jpg'
// import adviceImg from '../IMAGES/heros.jpeg'

// export const HomePage: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [activeFeature, setActiveFeature] = useState<number | null>(null)

//   // Images pour le carrousel automatique
//   const carouselImages = [
//     {
//       id: 1,
//       image: carousel1,
//       title: "L'Excellence Naturelle",
//       subtitle: "Des formulations premium 100% bio pour sublimer votre beauté authentique",
//       color: "from-gray-900/90 to-gray-800/90",
//       cta: "Découvrir la collection"
//     },
//     {
//       id: 2,
//       image: carousel2,
//       title: "Éclat Radieux Garanti",
//       subtitle: "Des actifs puissants pour une peau visiblement transformée",
//       color: "from-gray-900/90 to-gray-700/90",
//       cta: "Voir nos best-sellers"
//     },
//     {
//       id: 3,
//       image: carousel3,
//       title: "Soins Sur Mesure",
//       subtitle: "Des programmes personnalisés adaptés à vos besoins spécifiques",
//       color: "from-gray-900/90 to-gray-600/90",
//       cta: "Obtenir un diagnostic"
//     }
//   ]

//   // Images optimisées
//   const images = {
//     hero: hero,
//     faceCare: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     bodyCare: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     targetedCare: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     giftSet: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     product1: 'https://images.unsplash.com/photo-1556228578-9c360e2d0b4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     product2: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     product3: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     process1: 'https://images.unsplash.com/photo-1556228578-9c360e2d0b4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     process2: process2,
//     process3: 'https://images.unsplash.com/photo-1556228578-9c360e2d0b4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     process4: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
//   }

//   // Carrousel automatique
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [carouselImages.length])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
//   }

//   // Processus de fabrication
//   const processSteps = [
//     {
//       step: "01",
//       title: "Sélection Ingredients",
//       description: "Nous sélectionnons rigoureusement les meilleurs ingrédients naturels provenant de sources durables et certifiées bio.",
//       icon: Target,
//       image: images.process1,
//       features: ["Bio certifié", "Traçabilité totale", "Qualité premium"],
//       color: "from-emerald-600 to-emerald-800",
//       bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100"
//     },
//     {
//       step: "02",
//       title: "Formulation Scientifique",
//       description: "Nos experts en cosmétologie développent des formules innovantes qui combinent efficacité prouvée et respect de la peau.",
//       icon: Beaker,
//       image: images.process2,
//       features: ["Recherche approfondie", "Tests en laboratoire", "Formules brevetées"],
//       color: "from-blue-600 to-blue-800",
//       bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
//     },
//     {
//       step: "03",
//       title: "Tests Rigoureux",
//       description: "Chaque produit subit des tests dermatologiques et des contrôles qualité stricts pour garantir sécurité et performance.",
//       icon: TestTube,
//       image: images.process3,
//       features: ["Tests dermatologiques", "Contrôles qualité", "Sans allergènes"],
//       color: "from-purple-600 to-purple-800",
//       bgColor: "bg-gradient-to-br from-purple-50 to-purple-100"
//     },
//     {
//       step: "04",
//       title: "Production Éthique",
//       description: "Notre fabrication respecte l'environnement avec des procédés écoresponsables et une empreinte carbone réduite.",
//       icon: Globe,
//       image: images.process4,
//       features: ["Production locale", "Emballages recyclables", "Éthique garantie"],
//       color: "from-amber-600 to-amber-800",
//       bgColor: "bg-gradient-to-br from-amber-50 to-amber-100"
//     }
//   ]

//   // Catégories de produits
//   const categories = [
//     {
//       name: 'Soins Visage',
//       description: 'Sérums, crèmes et masques premium pour une peau radieuse et éclatante',
//       icon: Sparkles,
//       path: '/produits?category=visage',
//       products: 12,
//       image: images.faceCare,
//       color: 'from-rose-600 to-pink-700',
//       features: ['Anti-âge', 'Hydratation', 'Éclat', 'Purification']
//     },
//     {
//       name: 'Soins Corps',
//       description: 'Huiles, laits et exfoliants luxueux pour un corps nourri et sublimé',
//       icon: Droplets,
//       path: '/produits?category=corps',
//       products: 8,
//       image: images.bodyCare,
//       color: 'from-emerald-600 to-teal-700',
//       features: ['Nourrissant', 'Fermeté', 'Douceur', 'Tonus']
//     },
//     {
//       name: 'Soins Spécialisés',
//       description: 'Solutions ciblées professionnelles pour des besoins spécifiques',
//       icon: Zap,
//       path: '/produits?category=soins-cibles',
//       products: 6,
//       image: images.targetedCare,
//       color: 'from-amber-600 to-orange-700',
//       features: ['Ciblé', 'Intensif', 'Résultats rapides', 'Expert']
//     },
//     {
//       name: 'Coffrets Cadeaux',
//       description: 'Ensembles élégants et prestigieux pour offrir ou se faire plaisir',
//       icon: Gem,
//       path: '/produits?category=coffrets',
//       products: 5,
//       image: images.giftSet,
//       color: 'from-purple-600 to-indigo-700',
//       features: ['Élégant', 'Complet', 'Personnalisable', 'Prestige']
//     }
//   ]

//   // Features avec images
//   const features = [
//     {
//       icon: ShieldCheck,
//       title: "100% Naturel & Bio",
//       description: "Ingrédients certifiés bio sans produits chimiques nocifs pour une beauté pure et authentique",
//       color: "text-emerald-600",
//       bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
//       image: naturalImg,
//       details: [
//         "Certifications bio européennes strictes",
//         "Sans parabènes, silicones ou PEG",
//         "Ingrédients 100% biodégradables",
//         "Formules vegan-friendly et cruelty-free"
//       ]
//     },
//     {
//       icon: Truck,
//       title: "Livraison Premium",
//       description: "Service express avec suivi en temps réel pour recevoir vos produits rapidement",
//       color: "text-blue-600",
//       bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
//       image: deliveryImg,
//       details: [
//         "Livraison offerte dès 50€ d'achat",
//         "Suivi premium en temps réel",
//         "Emballages écologiques luxueux",
//         "Points relais premium disponibles"
//       ]
//     },
//     {
//       icon: Shield,
//       title: "Paiement Sécurisé",
//       description: "Transactions cryptées avec options flexibles pour votre tranquillité d'esprit",
//       color: "text-gray-800",
//       bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
//       image: secureImg,
//       details: [
//         "Paiement sécurisé à la livraison",
//         "Cryptage SSL 256 bits bancaire",
//         "Options de paiement multiples",
//         "Garantie satisfait ou remboursé 30 jours"
//       ]
//     },
//     {
//       icon: Users,
//       title: "Conseils Experts",
//       description: "Accompagnement personnalisé par nos experts beauté certifiés",
//       color: "text-rose-600",
//       bgColor: "bg-gradient-to-br from-rose-50 to-rose-100",
//       image: adviceImg,
//       details: [
//         "Diagnostic peau personnalisé gratuit",
//         "Programme beauté sur mesure",
//         "Suivi mensuel par nos experts",
//         "Ateliers virtuels exclusifs"
//       ]
//     }
//   ]

//   // Produits phares
//   const featuredProducts = [
//     {
//       id: 1,
//       name: "Sérum Éclat Radieux",
//       category: "Soin Visage Premium",
//       price: "89,99€",
//       originalPrice: "109,99€",
//       rating: 4.9,
//       reviews: 428,
//       image: images.product1,
//       badges: ["Best-seller", "Bio", "Premium"],
//       features: ["Anti-âge intense", "Hydratation 72h", "Éclat immédiat"],
//       color: "from-rose-500 to-pink-600"
//     },
//     {
//       id: 2,
//       name: "Huile Corporelle Nourrissante",
//       category: "Soin Corps Luxe",
//       price: "74,99€",
//       originalPrice: "89,99€",
//       rating: 4.8,
//       reviews: 296,
//       image: images.product2,
//       badges: ["Nouveau", "Vegan", "Luxe"],
//       features: ["Texture soyeuse", "Longue tenue 24h", "Parfum signature"],
//       color: "from-amber-500 to-orange-600"
//     },
//     {
//       id: 3,
//       name: "Masque Détox Purifiant",
//       category: "Soin Visage Expert",
//       price: "59,99€",
//       originalPrice: "74,99€",
//       rating: 4.7,
//       reviews: 374,
//       image: images.product3,
//       badges: ["Détox", "Purifiant", "Expert"],
//       features: ["Pores resserrés", "Peau nette", "Effet frais immédiat"],
//       color: "from-emerald-500 to-teal-600"
//     }
//   ]

//   // Témoignages
//   const testimonials = [
//     {
//       name: "Marie K.",
//       role: "Cliente Premium depuis 2 ans",
//       content: "La qualité exceptionnelle des sérums Petal a transformé ma peau. Finies les imperfections, je rayonne naturellement ! Une expérience beauté véritablement luxueuse.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       name: "Fatou D.",
//       role: "Cliente Fidèle",
//       content: "Le service premium Petal est incomparable. Commande simplifiée sur WhatsApp, livraison express et produits d'une qualité exceptionnelle. Une marque qui comprend le vrai luxe.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       name: "Aïcha B.",
//       role: "Cliente Connaisseuse",
//       content: "Enfin des produits naturels adaptés à notre climat tropical. Ma peau respire, rayonne et je retrouve une confiance absolue. Petal redéfinit l'excellence en cosmétique naturelle.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     }
//   ]

//   // Modal pour afficher les détails des features
//   const FeatureModal = ({ feature, onClose }: { feature: typeof features[0], onClose: () => void }) => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.9 }}
//         className="relative bg-gray-900 text-white rounded-2xl max-w-2xl w-full overflow-hidden max-h-[90vh] overflow-y-auto border border-gray-700"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg transition-colors"
//         >
//           <X className="h-5 w-5 text-gray-300" />
//         </button>

//         <div className="h-64 overflow-hidden">
//           <img
//             src={feature.image}
//             alt={feature.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
//           <div className="absolute bottom-6 left-6">
//             <div className={`p-3 rounded-xl ${feature.bgColor} backdrop-blur-sm border border-white/10`}>
//               <feature.icon className={`h-8 w-8 ${feature.color}`} />
//             </div>
//           </div>
//         </div>

//         <div className="p-8">
//           <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
//           <p className="text-gray-300 mb-8 text-lg leading-relaxed">{feature.description}</p>

//           <div className="space-y-6">
//             <div>
//               <h4 className="font-semibold text-white mb-4 text-lg">Avantages Premium :</h4>
//               <div className="space-y-3">
//                 {feature.details.map((detail, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
//                     <span className="text-gray-200">{detail}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="pt-6 border-t border-gray-700">
//               <h4 className="font-semibold text-white mb-3">Notre Engagement :</h4>
//               <p className="text-gray-300">
//                 Chez Petal, nous redéfinissons l'excellence en cosmétique naturelle avec une attention particulière aux détails, garantissant une expérience premium à chaque étape.
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-4 mt-8">
//             <Button 
//               variant="outline" 
//               className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
//               onClick={onClose}
//             >
//               Fermer
//             </Button>
//             <Link to="/contact" className="flex-1">
//               <Button variant="primary" className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600">
//                 Contact Premium
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   )

//   return (
//     <div className="min-h-screen bg-gray-50 overflow-hidden">
//       {/* Carrousel Header */}
//       <section className="relative h-screen overflow-hidden">
//         {/* Carrousel */}
//         <div className="relative h-full">
//           {carouselImages.map((slide, index) => (
//             <motion.div
//               key={slide.id}
//               initial={{ opacity: 0 }}
//               animate={{
//                 opacity: currentSlide === index ? 1 : 0,
//                 scale: currentSlide === index ? 1 : 1.05
//               }}
//               transition={{ duration: 1.2, ease: "easeInOut" }}
//               className={`absolute inset-0 ${
//                 currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
//               }`}
//             >
//               {/* Image de fond */}
//               <div className="absolute inset-0">
//                 <img
//                   src={slide.image}
//                   alt={slide.title}
//                   className="w-full h-full object-cover"
//                   loading="eager"
//                 />
//                 <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} mix-blend-multiply`} />
//                 <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
//               </div>

//               {/* Contenu */}
//               <div className="relative h-full flex items-center">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//                   <motion.div
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4, duration: 0.8 }}
//                     className="max-w-2xl ml-auto"
//                   >
//                     {/* Badge Premium */}
//                     <motion.div
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.6 }}
//                       className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20 ml-auto"
//                     >
//                       <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
//                       <span className="text-white font-medium text-sm">
//                         🏆 Collection Premium -20% avec le code LUXE
//                       </span>
//                     </motion.div>

//                     {/* Titre */}
//                     <motion.h1
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.8 }}
//                       className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-right"
//                     >
//                       {slide.title}
//                     </motion.h1>

//                     <motion.p
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 1.0 }}
//                       className="text-lg text-white/90 mb-10 leading-relaxed max-w-xl ml-auto text-right"
//                     >
//                       {slide.subtitle}
//                     </motion.p>

//                     {/* CTA Buttons Premium */}
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 1.2 }}
//                       className="flex flex-col sm:flex-row gap-4 mb-16 justify-end"
//                     >
//                       <Link to="/produits">
//                         <Button
//                           size="lg"
//                           className="group bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-8 py-4 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600"
//                         >
//                           <span className="flex items-center gap-2">
//                             <Sparkle className="h-5 w-5" />
//                             {slide.cta}
//                             <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                           </span>
//                         </Button>
//                       </Link>

//                       <a href="https://wa.me/+2250701781701" target="_blank" rel="noopener noreferrer">
//                         <Button
//                           variant="outline"
//                           size="lg"
//                           className="bg-transparent backdrop-blur-sm border border-white/30 hover:bg-white/10 text-white px-8 py-4 font-medium rounded-lg"
//                         >
//                           <div className="flex items-center gap-2">
//                             <MessageCircle className="h-5 w-5" />
//                             <span className="hidden sm:inline">Commander sur WhatsApp</span>
//                             <span className="sm:hidden">WhatsApp</span>
//                           </div>
//                         </Button>
//                       </a>
//                     </motion.div>
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Contrôles du carrousel sur les côtés */}
//         <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
//           <button
//             onClick={prevSlide}
//             className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all hover:scale-110 pointer-events-auto"
//             aria-label="Précédent"
//           >
//             <ChevronLeft className="h-6 w-6 text-white" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all hover:scale-110 pointer-events-auto"
//             aria-label="Suivant"
//           >
//             <ChevronRightIcon className="h-6 w-6 text-white" />
//           </button>
//         </div>

//         {/* Indicateurs centrés en bas */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-10">
//           {carouselImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`h-1.5 rounded-full transition-all duration-300 ${
//                 currentSlide === index 
//                   ? 'w-8 bg-white' 
//                   : 'w-2 bg-white/40 hover:bg-white/60'
//               }`}
//               aria-label={`Aller au slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Features Section avec images */}
//       <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="inline-flex items-center gap-2 text-emerald-400 mb-4">
//                 <Crown className="h-5 w-5" />
//                 <span className="font-semibold text-sm uppercase tracking-wider">Excellence Petal</span>
//               </div>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//                 L'Art de la{' '}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
//                   Beauté Naturelle
//                 </span>
//               </h2>
//               <p className="text-gray-300 max-w-2xl mx-auto text-lg">
//                 Découvrez notre engagement premium pour votre beauté et bien-être
//               </p>
//             </motion.div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1, duration: 0.6 }}
//                 className="group relative"
//               >
//                 <div 
//                   className="relative bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-700 cursor-pointer h-full transform hover:-translate-y-1"
//                   onClick={() => setActiveFeature(index)}
//                 >
//                   {/* Image */}
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={feature.image}
//                       alt={feature.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       loading="lazy"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                    
//                     {/* Icon overlay */}
//                     <div className={`absolute top-4 left-4 p-3 rounded-xl ${feature.bgColor} backdrop-blur-sm border border-white/10`}>
//                       <feature.icon className={`h-6 w-6 ${feature.color}`} />
//                     </div>

//                     {/* Effet hover sur image */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>

//                   {/* Contenu */}
//                   <div className="p-6">
//                     <div className="flex items-start justify-between mb-4">
//                       <div className="flex-1">
//                         <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
//                           {feature.title}
//                         </h3>
//                         <p className="text-gray-400 text-sm">
//                           {feature.description}
//                         </p>
//                       </div>
//                       <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-emerald-400 transition-colors mt-1 flex-shrink-0" />
//                     </div>

//                     {/* Détails */}
//                     <div className="space-y-3">
//                       {feature.details.slice(0, 2).map((detail, i) => (
//                         <div key={i} className="flex items-center gap-3">
//                           <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
//                           <span className="text-sm text-gray-300">{detail}</span>
//                         </div>
//                       ))}
//                       <div className="pt-3">
//                         <span className="text-sm font-medium text-emerald-400 inline-flex items-center gap-1">
//                           En savoir plus
//                           <ArrowRight className="h-3 w-3" />
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Effet hover border */}
//                   <div className="absolute inset-0 border border-transparent group-hover:border-emerald-400/30 rounded-xl transition-all duration-500 pointer-events-none" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Stats Premium */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
//           >
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {[
//                 { value: "99%", label: "Satisfaction client", icon: Heart, color: "text-rose-400" },
//                 { value: "24h", label: "Livraison express", icon: Truck, color: "text-blue-400" },
//                 { value: "50+", label: "Produits premium", icon: Leaf, color: "text-emerald-400" },
//                 { value: "15k+", label: "Clientes ravis", icon: Users, color: "text-purple-400" }
//               ].map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="text-center group"
//                 >
//                   <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2 flex items-center justify-center gap-2`}>
//                     <stat.icon className="h-6 w-6" />
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Section: Processus Rigoureux */}
//       <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <div className="inline-flex items-center gap-2 text-emerald-400 mb-4">
//               <AwardIcon className="h-5 w-5" />
//               <span className="font-semibold text-sm uppercase tracking-wider">Artisanat d'Excellence</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Un processus{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
//                 d'excellence
//               </span>
//             </h2>
//             <p className="text-gray-300 max-w-2xl mx-auto">
//               Chaque étape de création reflète notre engagement pour une qualité irréprochable
//             </p>
//           </motion.div>

//           {/* Timeline */}
//           <div className="relative">
//             <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent" />

//             <div className="space-y-24">
//               {processSteps.map((step, index) => (
//                 <motion.div
//                   key={step.step}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   className={`relative flex flex-col lg:flex-row items-center gap-12 ${
//                     index % 2 === 0 ? 'lg:flex-row-reverse' : ''
//                   }`}
//                 >
//                   {/* Contenu texte */}
//                   <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
//                     <div className="max-w-lg mx-auto lg:mx-0">
//                       <div className="flex items-center gap-4 mb-8">
//                         <div className={`relative w-14 h-14 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-xl`}>
//                           <span className="text-xl font-bold text-white">{step.step}</span>
//                           <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse" />
//                         </div>
//                         <div className="h-px flex-1 bg-gradient-to-r from-gray-600/50 to-transparent" />
//                       </div>

//                       <div className="mb-8">
//                         <div className="flex items-center gap-3 mb-4">
//                           <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} bg-opacity-10 border border-white/10`}>
//                             <step.icon className={`h-6 w-6 ${step.color.replace('from-', 'text-').split(' ')[0]}`} />
//                           </div>
//                           <h3 className="text-2xl font-bold text-white">
//                             {step.title}
//                           </h3>
//                         </div>
//                         <p className="text-gray-300 leading-relaxed">
//                           {step.description}
//                         </p>
//                       </div>

//                       <div className="space-y-3">
//                         {step.features.map((feature, i) => (
//                           <div key={i} className="flex items-center gap-3">
//                             <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} />
//                             <span className="text-gray-200 font-medium">{feature}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Image */}
//                   <div className="flex-1 relative">
//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       transition={{ duration: 0.3 }}
//                       className="relative group"
//                     >
//                       <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${step.color} opacity-10 blur-xl group-hover:opacity-20 transition-opacity`} />
//                       <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-700">
//                         <img
//                           src={step.image}
//                           alt={step.title}
//                           className="w-full h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
//                       </div>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section: Soins sur Mesure */}
//       <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
//         {/* Éléments décoratifs */}
//         <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-gray-700">
//               <Flower className="h-5 w-5 text-emerald-400" />
//               <span className="font-semibold text-gray-200">Collections Exclusives</span>
//             </div>
            
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
//               Des soins{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
//                 sur mesure
//               </span>
//             </h2>
            
//             <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
//               Découvrez nos collections spécialement formulées pour répondre 
//               aux besoins spécifiques de chaque type de peau
//             </p>
//           </motion.div>

//           {/* Grid des catégories */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {categories.map((category, index) => (
//               <motion.div
//                 key={category.name}
//                 initial={{ opacity: 0, y: 40, scale: 0.95 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="group relative"
//               >
//                 <div className="relative h-full bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-700">
//                   {/* Badge de quantité */}
//                   <div className="absolute top-4 left-4 z-20">
//                     <div className="bg-gray-900/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-700">
//                       <span className="text-sm font-bold text-white">
//                         {category.products} produits
//                       </span>
//                     </div>
//                   </div>

//                   {/* Image */}
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src={category.image}
//                       alt={category.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       loading="lazy"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-900/20 to-transparent" />
                    
//                     {/* Icon */}
//                     <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-2xl`}>
//                       <category.icon className="h-6 w-6 text-white" />
//                     </div>
//                   </div>

//                   {/* Contenu */}
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
//                       {category.name}
//                     </h3>
                    
//                     <p className="text-gray-400 mb-6 leading-relaxed text-sm">
//                       {category.description}
//                     </p>

//                     {/* Features list */}
//                     <div className="mb-6">
//                       <div className="flex flex-wrap gap-2">
//                         {category.features.map((feature, i) => (
//                           <span
//                             key={i}
//                             className="px-3 py-1 bg-gray-900/50 rounded-full text-xs font-medium text-gray-300 border border-gray-700"
//                           >
//                             {feature}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* CTA */}
//                     <Link to={category.path}>
//                       <div className="flex items-center justify-between p-4 bg-gray-900/30 rounded-lg group-hover:bg-emerald-500/10 transition-all duration-300 border border-gray-700 group-hover:border-emerald-400/30">
//                         <div>
//                           <div className="text-sm text-gray-400 mb-1">Découvrir</div>
//                           <div className="text-base font-bold text-white">
//                             {category.name}
//                           </div>
//                         </div>
//                         <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shadow-md group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
//                           <ArrowRight className="h-4 w-4" />
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section: Best Sellers */}
//       <section className="py-20 bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 text-amber-400 mb-4">
//               <Star className="h-5 w-5 fill-current" />
//               <span className="font-semibold">Les Préférés</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Nos{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
//                 Best-Sellers
//               </span>
//             </h2>
//             <p className="text-gray-300 max-w-2xl mx-auto">
//               Les produits que nos clientes adorent et recommandent
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {featuredProducts.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group relative"
//               >
//                 <div className="relative bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-700">
//                   {/* Badges */}
//                   <div className="absolute top-4 left-4 z-10 flex gap-2">
//                     {product.badges.map((badge, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-gray-700"
//                       >
//                         {badge}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Image */}
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
                    
//                     {/* Rating */}
//                     <div className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 border border-gray-700">
//                       <div className="flex items-center gap-1">
//                         <Star className="h-4 w-4 text-amber-400 fill-current" />
//                         <span className="font-bold text-white">{product.rating}</span>
//                         <span className="text-xs text-gray-400">({product.reviews})</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     <div className="text-sm text-emerald-400 font-semibold mb-2">
//                       {product.category}
//                     </div>
//                     <h3 className="text-lg font-bold text-white mb-3">
//                       {product.name}
//                     </h3>
                    
//                     {/* Features */}
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {product.features.map((feature, i) => (
//                         <span
//                           key={i}
//                           className="px-3 py-1 bg-gray-900/50 rounded-full text-xs text-gray-300 border border-gray-700"
//                         >
//                           {feature}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Price & CTA */}
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="text-xl font-bold text-white">
//                           {product.price}
//                         </div>
//                         <div className="text-sm text-gray-400 line-through">
//                           {product.originalPrice}
//                         </div>
//                       </div>
//                       <Button
//                         variant="primary"
//                         className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-sm px-4 py-2"
//                       >
//                         <ShoppingBag className="h-4 w-4 mr-2" />
//                         Ajouter
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* View all products */}
//           <div className="text-center mt-12">
//             <Link to="/produits">
//               <Button
//                 variant="outline"
//                 className="border border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 px-6 py-3"
//               >
//                 Voir tous les produits
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Section: Testimonials */}
//       <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Ils{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
//                 Recommandent
//               </span>
//             </h2>
//             <p className="text-gray-300 max-w-2xl mx-auto">
//               Les témoignages de notre communauté de clientes satisfaites
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="relative"
//               >
//                 <div className="bg-gray-800 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-700 h-full">
//                   {/* Quote icon */}
//                   <div className="text-emerald-400/20 mb-6">
//                     <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
//                     </svg>
//                   </div>
                  
//                   {/* Rating */}
//                   <div className="flex mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-4 w-4 text-amber-400 fill-current mr-1" />
//                     ))}
//                   </div>
                  
//                   {/* Content */}
//                   <p className="text-gray-300 mb-6 italic">
//                     "{testimonial.content}"
//                   </p>
                  
//                   {/* Author */}
//                   <div className="flex items-center gap-4">
//                     <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 p-0.5">
//                       <div className="w-full h-full rounded-full bg-gray-800">
//                         <img
//                           src={testimonial.avatar}
//                           alt={testimonial.name}
//                           className="w-full h-full object-cover rounded-full"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <div className="font-bold text-white">{testimonial.name}</div>
//                       <div className="text-sm text-gray-400">{testimonial.role}</div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section: CTA Final */}
//       <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-950">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
//               Prête à révéler{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
//                 votre éclat
//               </span>
//               {' '}?
//             </h2>
            
//             <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
//               Rejoignez des milliers de femmes qui ont déjà fait le choix 
//               d'une beauté naturelle d'exception
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//               <Link to="/produits">
//                 <Button
//                   className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-8 py-4 font-medium rounded-lg"
//                 >
//                   <ShoppingBag className="h-5 w-5 mr-2" />
//                   Découvrir la collection
//                 </Button>
//               </Link>
              
//               <a href="https://wa.me/+2250701781701" target="_blank" rel="noopener noreferrer">
//                 <Button
//                   variant="outline"
//                   className="border border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 px-8 py-4 font-medium rounded-lg"
//                 >
//                   <MessageCircle className="h-5 w-5 mr-2" />
//                   Discuter avec un expert
//                 </Button>
//               </a>
//             </div>
            
//             {/* Garanties */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12 border-t border-gray-800">
//               {[
//                 { icon: ShieldCheck, text: "Satisfait ou remboursé 30 jours", color: "text-emerald-400" },
//                 { icon: Truck, text: "Livraison offerte dès 50€", color: "text-blue-400" },
//                 { icon: Shield, text: "Paiement 100% sécurisé", color: "text-purple-400" },
//                 { icon: Users, text: "Support premium 7j/7", color: "text-rose-400" }
//               ].map((guarantee, index) => (
//                 <div key={index} className="flex flex-col items-center">
//                   <guarantee.icon className={`h-6 w-6 mb-3 ${guarantee.color}`} />
//                   <span className="text-sm text-gray-400 text-center">{guarantee.text}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Modal pour les features */}
//       {activeFeature !== null && (
//         <FeatureModal 
//           feature={features[activeFeature]}
//           onClose={() => setActiveFeature(null)}
//         />
//       )}
//     </div>
//   )
// }





// import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import { 
//   Leaf, 
//   Sparkles, 
//   Zap, 
//   Shield, 
//   Truck, 
//   Heart, 
//   Star,
//   ChevronRight,
//   CheckCircle,
//   Users,
//   Award,
//   Clock,
//   ShieldCheck,
//   Droplets,
//   Gem,
//   ShoppingBag,
//   ArrowRight,
//   Flower,
//   Sparkle,
//   Target,
//   Globe,
//   Beaker,
//   TestTube,
//   Filter,
//   ThumbsUp,
//   Award as AwardIcon,
//   TrendingUp,
//   UserCheck,
//   MessageCircle,
//   Crown,
//   ChevronLeft,
//   ChevronRight as ChevronRightIcon,
//   X
// } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import { Button } from '../components/UI/Button'
// import { useCart } from '../contexts/CartContext'
// import { useWhatsAppOrder } from '../hooks/useWhatsAppOrder'

// // Images locales
// import hero from '../IMAGES/front-view-confident-woman-posing-while-wearing-body-shaper.jpg'
// import  process1 from '../IMAGES/carou4.jpeg'
// import process2 from '../IMAGES/science.jpeg'
// import process3 from '../IMAGES/laver.jpeg'
// import process4 from '../IMAGES/ethi.jpeg'
// // Images pour le carrousel
// import carousel1 from '../IMAGES/baniere.jpeg'
// // import carousel1 from '../IMAGES/mobile2.jpeg'
// import carousel2 from '../IMAGES/banier2.jpeg'
// // import carousel2 from '../IMAGES/main.jpeg' je veux que sur mobile les deux premiers images de la carousel sois changer respectivement par  import carousel1 from '../IMAGES/mobile2.jpeg' et import carousel2 from '../IMAGES/main.jpeg' avec ecris respectivement "comprendre , aimer et traiter" et "DES SOINS DOUX , à  BASE D'INGREDIENTS NATURELS " tout en grand caractère avec une animation d'ecriture pour les text avec un contraste noir de fond pour que les texte sois visible de manière élégante et pros seulement sur mobil 
// import carousel3 from '../IMAGES/C3.jpeg'

// // Images pour les features
// import naturalImg from '../IMAGES/carou2.jpeg'
// import deliveryImg from '../IMAGES/livraison.webp'
// import secureImg from '../IMAGES/payementS.jpg'
// import adviceImg from '../IMAGES/C4.jpeg'


// export const HomePage: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [activeFeature, setActiveFeature] = useState<number | null>(null)
//   const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0)
//   const scrollContainerRef = React.useRef<HTMLDivElement>(null)
//   const { addToCart } = useCart()
//   const { openWhatsAppOrder } = useWhatsAppOrder()

//   // Images pour le carrousel automatique
//   const carouselImages = [
//     // {
//     //   id: 1,
//     //   image: carousel1,
//     //   title: "L'Excellence Naturelle",
//     //   subtitle: "Des formulations premium 100% bio pour sublimer votre beauté authentique",
//     //   color: "bg-black/70",
//     //   cta: "Découvrir la collection"
//     // },
//     // {
//     //   id: 2,
//     //   image: carousel2,
//     //   title: "Éclat Radieux Garanti",
//     //   subtitle: "Des actifs puissants pour une peau visiblement transformée",
//     //   color: "bg-black/70",
//     //   cta: "Voir nos best-sellers"
//     // },

//     {
//       id: 1,
//       image: carousel1,
//       title: "",
//       subtitle: "",
//       color: "bg-black/70",
//       cta: "Découvrir la collection"
//     },
//     {
//       id: 2,
//       image: carousel2,
//       title: "",
//       subtitle: "",
//       color: "bg-black/70",
//       cta: "Voir nos best-sellers"
//     },
//     {
//       id: 3,
//       image: carousel3,
//       title: "Soins Sur Mesure",
//       subtitle: "Des programmes personnalisés adaptés à vos besoins spécifiques",
//       color: "bg-black/50",
//       cta: "Obtenir un diagnostic"
//     }
//   ]

//   // Images optimisées
//   const images = {
//     hero: hero,
//     faceCare: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     bodyCare: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     targetedCare: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     giftSet: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     product1: 'https://images.unsplash.com/photo-1556228578-9c360e2d0b4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     product2: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     product3: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
//     process1: process1,
//     process2: process2,
//     process3: process3,
//     process4: process4
//   }

//   // Carrousel automatique
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [carouselImages.length])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
//   }

//   // Processus de fabrication
//   const processSteps = [
//     {
//       step: "01",
//       title: "Sélection Ingredients",
//       description: "Nous sélectionnons rigoureusement les meilleurs ingrédients naturels provenant de sources durables et certifiées bio.",
//       icon: Target,
//       image: images.process1,
//       features: ["Bio certifié", "Traçabilité totale", "Qualité premium"],
//       color: "from-emerald-500 to-teal-500",
//       bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50"
//     },
//     {
//       step: "02",
//       title: "Formulation Scientifique",
//       description: "Nos experts en cosmétologie développent des formules innovantes qui combinent efficacité prouvée et respect de la peau.",
//       icon: Beaker,
//       image: images.process2,
//       features: ["Recherche approfondie", "Tests en laboratoire", "Formules brevetées"],
//       color: "from-blue-500 to-cyan-500",
//       bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
//     },
//     {
//       step: "03",
//       title: "Tests Rigoureux",
//       description: "Chaque produit subit des tests dermatologiques et des contrôles qualité stricts pour garantir sécurité et performance.",
//       icon: TestTube,
//       image: images.process3,
//       features: ["Tests dermatologiques", "Contrôles qualité", "Sans allergènes"],
//       color: "from-purple-500 to-pink-500",
//       bgColor: "bg-gradient-to-br from-purple-50 to-pink-50"
//     },
//     {
//       step: "04",
//       title: "Production Éthique",
//       description: "Notre fabrication respecte l'environnement avec des procédés écoresponsables et une empreinte carbone réduite.",
//       icon: Globe,
//       image: images.process4,
//       features: ["Production locale", "Emballages recyclables", "Éthique garantie"],
//       color: "from-amber-500 to-orange-500",
//       bgColor: "bg-gradient-to-br from-amber-50 to-orange-50"
//     }
//   ]

//   // Catégories de produits
//   const categories = [
//     {
//       name: 'Soins Visage',
//       description: 'Sérums, crèmes et masques premium pour une peau radieuse et éclatante',
//       icon: Sparkles,
//       path: '/produits?category=visage',
//       products: 12,
//       image: images.faceCare,
//       color: 'from-rose-500 to-pink-500',
//       features: ['Anti-âge', 'Hydratation', 'Éclat', 'Purification']
//     },
//     {
//       name: 'Soins Corps',
//       description: 'Huiles, laits et exfoliants luxueux pour un corps nourri et sublimé',
//       icon: Droplets,
//       path: '/produits?category=corps',
//       products: 8,
//       image: images.bodyCare,
//       color: 'from-emerald-500 to-teal-500',
//       features: ['Nourrissant', 'Fermeté', 'Douceur', 'Tonus']
//     },
//     {
//       name: 'Soins Spécialisés',
//       description: 'Solutions ciblées professionnelles pour des besoins spécifiques',
//       icon: Zap,
//       path: '/produits?category=soins-cibles',
//       products: 6,
//       image: images.targetedCare,
//       color: 'from-amber-500 to-orange-500',
//       features: ['Ciblé', 'Intensif', 'Résultats rapides', 'Expert']
//     },
//     {
//       name: 'Coffrets Cadeaux',
//       description: 'Ensembles élégants et prestigieux pour offrir ou se faire plaisir',
//       icon: Gem,
//       path: '/produits?category=coffrets',
//       products: 5,
//       image: images.giftSet,
//       color: 'from-purple-500 to-indigo-500',
//       features: ['Élégant', 'Complet', 'Personnalisable', 'Prestige']
//     }
//   ]

//   // Features avec images
//   const features = [
//     {
//       icon: ShieldCheck,
//       title: "100% Naturel & Bio",
//       description: "Ingrédients certifiés bio sans produits chimiques nocifs pour une beauté pure et authentique",
//       color: "text-emerald-600",
//       bgColor: "bg-emerald-50",
//       image: naturalImg,
//       details: [
//         "Certifications bio européennes strictes",
//         "Sans parabènes, silicones ou PEG",
//         "Ingrédients 100% biodégradables",
//         "Formules vegan-friendly et cruelty-free"
//       ]
//     },
//     {
//       icon: Truck,
//       title: "Livraison Premium",
//       description: "Service express avec suivi en temps réel pour recevoir vos produits rapidement",
//       color: "text-blue-600",
//       bgColor: "bg-blue-50",
//       image: deliveryImg,
//       details: [
//         "Livraison offerte dès 50€ d'achat",
//         "Suivi premium en temps réel",
//         "Emballages écologiques luxueux",
//         "Points relais premium disponibles"
//       ]
//     },
//     {
//       icon: Shield,
//       title: "Paiement Sécurisé",
//       description: "Transactions cryptées avec options flexibles pour votre tranquillité d'esprit",
//       color: "text-primary",
//       bgColor: "bg-primary/10",
//       image: secureImg,
//       details: [
//         "Paiement sécurisé à la livraison",
//         "Cryptage SSL 256 bits bancaire",
//         "Options de paiement multiples",
//         "Garantie satisfait ou remboursé 30 jours"
//       ]
//     },
//     {
//       icon: Users,
//       title: "Conseils Experts",
//       description: "Accompagnement personnalisé par nos experts beauté certifiés",
//       color: "text-pink-600",
//       bgColor: "bg-pink-50",
//       image: adviceImg,
//       details: [
//         "Diagnostic peau personnalisé gratuit",
//         "Programme beauté sur mesure",
//         "Suivi mensuel par nos experts",
//         "Ateliers virtuels exclusifs"
//       ]
//     }
//   ]

//   // Auto-scroll horizontal pour les features
//   useEffect(() => {
//     if (!scrollContainerRef.current) return

//     const scrollToFeature = (index: number) => {
//       if (!scrollContainerRef.current) return
//       const cardWidth = scrollContainerRef.current.querySelector('.feature-card')?.clientWidth || 0
//       const gap = 24 // gap-6 = 1.5rem = 24px
//       const scrollPosition = index * (cardWidth + gap)
      
//       scrollContainerRef.current.scrollTo({
//         left: scrollPosition,
//         behavior: 'smooth'
//       })
//       setCurrentFeatureIndex(index)
//     }

//     const interval = setInterval(() => {
//       const nextIndex = (currentFeatureIndex + 1) % features.length
//       scrollToFeature(nextIndex)
//     }, 3000)

//     return () => clearInterval(interval)
//   }, [currentFeatureIndex, features.length])

//   // Produits phares
//   const featuredProducts = [
//     {
//       id: "best-seller-1",
//       name: "Sérum Éclat Radieux",
//       category: "Soin Visage Premium",
//       price: 89990, // Prix en FCFA
//       originalPrice: 109990,
//       rating: 4.9,
//       reviews: 428,
//       image: images.product1,
//       badges: ["Best-seller", "Bio", "Premium"],
//       features: ["Anti-âge intense", "Hydratation 72h", "Éclat immédiat"],
//       color: "from-rose-400 to-pink-500"
//     },
//     {
//       id: "best-seller-2",
//       name: "Huile Corporelle Nourrissante",
//       category: "Soin Corps Luxe",
//       price: 74990,
//       originalPrice: 89990,
//       rating: 4.8,
//       reviews: 296,
//       image: images.product2,
//       badges: ["Nouveau", "Vegan", "Luxe"],
//       features: ["Texture soyeuse", "Longue tenue 24h", "Parfum signature"],
//       color: "from-amber-400 to-orange-500"
//     },
//     {
//       id: "best-seller-3",
//       name: "Masque Détox Purifiant",
//       category: "Soin Visage Expert",
//       price: 59990,
//       originalPrice: 74990,
//       rating: 4.7,
//       reviews: 374,
//       image: images.product3,
//       badges: ["Détox", "Purifiant", "Expert"],
//       features: ["Pores resserrés", "Peau nette", "Effet frais immédiat"],
//       color: "from-emerald-400 to-teal-500"
//     }
//   ]

//   const handleAddToCart = (product: typeof featuredProducts[0]) => {
//     addToCart({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image_url: product.image,
//     })
//   }

//   const handleWhatsAppOrder = (product: typeof featuredProducts[0]) => {
//     const items = [{
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       quantity: 1,
//       image_url: product.image
//     }]
//     openWhatsAppOrder(items, product.price)
//   }

//   // Témoignages
//   const testimonials = [
//     {
//       name: "Marie K.",
//       role: "Cliente Premium depuis 2 ans",
//       content: "La qualité exceptionnelle des sérums Petal a transformé ma peau. Finies les imperfections, je rayonne naturellement ! Une expérience beauté véritablement luxueuse.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       name: "Fatou D.",
//       role: "Cliente Fidèle",
//       content: "Le service premium Petal est incomparable. Commande simplifiée sur WhatsApp, livraison express et produits d'une qualité exceptionnelle. Une marque qui comprend le vrai luxe.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       name: "Aïcha B.",
//       role: "Cliente Connaisseuse",
//       content: "Enfin des produits naturels adaptés à notre climat tropical. Ma peau respire, rayonne et je retrouve une confiance absolue. Petal redéfinit l'excellence en cosmétique naturelle.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     }
//   ]

//   // Modal pour afficher les détails des features
//   const FeatureModal = ({ feature, onClose }: { feature: typeof features[0], onClose: () => void }) => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.95 }}
//         className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white hover:bg-gray-50 shadow-lg transition-colors border border-gray-200"
//         >
//           <X className="h-5 w-5 text-gray-700" />
//         </button>

//         <div className="h-64 overflow-hidden">
//           <img
//             src={feature.image}
//             alt={feature.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//           <div className="absolute bottom-6 left-6">
//             <div className={`p-3 rounded-xl ${feature.bgColor} backdrop-blur-sm border border-white/20`}>
//               <feature.icon className={`h-8 w-8 ${feature.color}`} />
//             </div>
//           </div>
//         </div>

//         <div className="p-8">
//           <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//           <p className="text-gray-600 mb-8 text-lg leading-relaxed">{feature.description}</p>

//           <div className="space-y-6">
//             <div>
//               <h4 className="font-semibold text-gray-900 mb-4 text-lg">Avantages Premium :</h4>
//               <div className="space-y-3">
//                 {feature.details.map((detail, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
//                     <span className="text-gray-700">{detail}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="pt-6 border-t border-gray-200">
//               <h4 className="font-semibold text-gray-900 mb-3">Notre Engagement :</h4>
//               <p className="text-gray-600">
//                 Chez Petal, nous redéfinissons l'excellence en cosmétique naturelle avec une attention particulière aux détails, garantissant une expérience premium à chaque étape.
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-4 mt-8">
//             <Button 
//               variant="outline" 
//               className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
//               onClick={onClose}
//             >
//               Fermer
//             </Button>
//             <Link to="/contact" className="flex-1">
//               <Button variant="primary" className="w-full bg-primary hover:bg-primary/90">
//                 Nous contacter
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   )

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       {/* Carrousel Header */}
//       <section className="relative h-screen overflow-hidden">
//         {/* Carrousel */}
//         <div className="relative h-full">
//           {carouselImages.map((slide, index) => (
//             <motion.div
//               key={slide.id}
//               initial={{ opacity: 0 }}
//               animate={{
//                 opacity: currentSlide === index ? 1 : 0,
//                 scale: currentSlide === index ? 1 : 1.03
//               }}
//               transition={{ duration: 1, ease: "easeInOut" }}
//               className={`absolute inset-0 ${
//                 currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
//               }`}
//             >
//               {/* Image de fond */}
//               <div className="absolute inset-0 overflow-hidden">
//                 <img
//                   src={slide.image}
//                   alt={slide.title}
//                   className="w-full h-full object-cover"
//                   style={{ objectPosition: 'center center' }}
//                   loading="eager"
//                 />
//                 {/* Overlay sombre moderne pour la lisibilité - Uniquement sur la 3ème image */}
//                 {index === 2 && (
//                   <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 sm:from-black/70 sm:via-black/75 sm:to-black/85" />
//                 )}
//               </div>

//               {/* Contenu */}
//               <div className="relative h-full flex items-center">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//                   <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3, duration: 0.7 }}
//                     className="max-w-2xl mt-16 sm:mt-0"
//                   >
//                     {/* Badge Premium Élégant */}
//                     {/* <motion.div
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.5 }}
//                       className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/30 shadow-lg"
//                     >
//                       <div className="relative">
//                         <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full animate-pulse" />
//                         <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-75" />
//                       </div>
//                       <span className="text-gray-800 font-semibold text-xs uppercase tracking-wider">
//                         Collection Premium
//                       </span>
//                       <span className="px-2.5 py-0.5 bg-primary text-white text-[10px] font-bold rounded-full">
//                         -20%
//                       </span>
//                     </motion.div> */}

//                     {/* Titre Premium avec effet élégant */}
//                     <motion.h1
//                       initial={{ opacity: 0, y: 25 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.7 }}
//                       className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight"
//                     >
//                       <span className="block mb-2 text-white drop-shadow-lg sm:drop-shadow-2xl">
//                         {slide.title}
//                       </span>
//                       {index === 2 && (
//                         <motion.div
//                           initial={{ width: 0 }}
//                           animate={{ width: "100%" }}
//                           transition={{ delay: 1, duration: 0.8 }}
//                           className="h-0.5 sm:h-1 bg-primary rounded-full mt-2 sm:mt-3"
//                         />
//                       )}
//                     </motion.h1>

//                     <motion.p
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.9 }}
//                       className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 sm:text-white/95 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-xl font-light"
//                     >
//                       {slide.subtitle}
//                     </motion.p>

//                     {/* CTA Buttons Premium - Petits et Élégants - Positionnés en bas */}
//                     <motion.div
//                       initial={{ opacity: 0, y: 15 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 1.1 }}
//                       className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 right-0 flex flex-col sm:flex-row gap-2.5 sm:gap-3"
//                     >
//                       <Link to="/produits">
//                         <motion.div
//                           whileHover={{ scale: 1.05, y: -2 }}
//                           whileTap={{ scale: 0.95 }}
//                           className="group relative overflow-hidden"
//                         >
//                           <div className="relative px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5 bg-primary text-white font-medium sm:font-semibold text-xs sm:text-sm rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 hover:bg-primary/90">
//                             <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-2.5">
//                               <Sparkle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
//                               <span className="tracking-wide">{slide.cta}</span>
//                               <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-1 transition-transform" />
//                             </span>
//                           </div>
//                         </motion.div>
//                       </Link>

//                       <a href="https://wa.me/+2250701781701" target="_blank" rel="noopener noreferrer">
//                         <motion.div
//                           whileHover={{ scale: 1.05, y: -2 }}
//                           whileTap={{ scale: 0.95 }}
//                           className="group"
//                         >
//                           <div className="px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5 bg-white/95 backdrop-blur-md border border-white/30 hover:bg-white text-gray-800 font-medium sm:font-semibold text-xs sm:text-sm rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300">
//                             <div className="flex items-center justify-center gap-2 sm:gap-2.5">
//                               <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
//                               <span className="hidden sm:inline tracking-wide">WhatsApp</span>
//                               <span className="sm:hidden">WA</span>
//                             </div>
//                           </div>
//                         </motion.div>
//                       </a>
//                     </motion.div>
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Contrôles du carrousel sur les côtés - Petits boutons premium */}
//         <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
//           <motion.button
//             onClick={prevSlide}
//             whileHover={{ scale: 1.1, x: -2 }}
//             whileTap={{ scale: 0.9 }}
//             className="p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/30 hover:border-primary/30 hover:shadow-xl transition-all pointer-events-auto group"
//             aria-label="Précédent"
//           >
//             <ChevronLeft className="h-4 w-4 text-gray-700 group-hover:text-primary transition-colors" />
//           </motion.button>

//           <motion.button
//             onClick={nextSlide}
//             whileHover={{ scale: 1.1, x: 2 }}
//             whileTap={{ scale: 0.9 }}
//             className="p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/30 hover:border-primary/30 hover:shadow-xl transition-all pointer-events-auto group"
//             aria-label="Suivant"
//           >
//             <ChevronRightIcon className="h-4 w-4 text-gray-700 group-hover:text-primary transition-colors" />
//           </motion.button>
//         </div>

//         {/* Indicateurs centrés en bas - Style premium */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2.5 z-10">
//           {carouselImages.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               className={`rounded-full transition-all duration-300 ${
//                 currentSlide === index 
//                   ? 'w-10 h-1.5 bg-primary shadow-lg' 
//                   : 'w-2 h-2 bg-white/60 hover:bg-white/80 backdrop-blur-sm'
//               }`}
//               aria-label={`Aller au slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Section: Best Sellers */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <motion.div 
//               className="inline-flex items-center gap-2.5 bg-primary/10 rounded-full px-5 py-2 mb-6 border border-primary/20"
//               whileHover={{ scale: 1.05 }}
//             >
//               <Star className="h-4 w-4 text-amber-500 fill-current" />
//               <span className="font-bold text-xs uppercase tracking-wider text-amber-700">Les Préférés</span>
//             </motion.div>
//             <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
//               <span className="block mb-2">Nos</span>
//               <span className="block text-primary">
//                 Best-Sellers
//               </span>
//             </h2>
//             <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
//             <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
//               Les produits que nos clientes adorent et recommandent
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {featuredProducts.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group relative"
//               >
//                 <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200">
//                   {/* Badges */}
//                   <div className="absolute top-4 left-4 z-10 flex gap-2">
//                     {product.badges.map((badge, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 border border-gray-200"
//                       >
//                         {badge}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Image */}
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    
//                     {/* Rating */}
//                     <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 border border-gray-200">
//                       <div className="flex items-center gap-1">
//                         <Star className="h-4 w-4 text-amber-400 fill-current" />
//                         <span className="font-bold text-gray-900">{product.rating}</span>
//                         <span className="text-xs text-gray-600">({product.reviews})</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     <div className="text-sm text-primary font-semibold mb-2">
//                       {product.category}
//                     </div>
//                     <h3 className="text-lg font-bold text-gray-900 mb-3">
//                       {product.name}
//                     </h3>
                    
//                     {/* Features */}
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {product.features.map((feature, i) => (
//                         <span
//                           key={i}
//                           className="px-3 py-1 bg-gray-50 rounded-full text-xs text-gray-600 border border-gray-200"
//                         >
//                           {feature}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Price & CTA */}
//                     <div className="space-y-3">
//                       <div>
//                         <div className="text-xl font-bold text-gray-900">
//                           {product.price.toLocaleString()} FCFA
//                         </div>
//                         <div className="text-sm text-gray-500 line-through">
//                           {product.originalPrice.toLocaleString()} FCFA
//                         </div>
//                       </div>
//                       <div className="flex gap-2">
//                         <motion.div
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           className="flex-1"
//                         >
//                           <Button
//                             variant="primary"
//                             onClick={() => handleAddToCart(product)}
//                             className="w-full bg-primary hover:bg-primary/90 text-xs px-3 py-2.5 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
//                           >
//                             <ShoppingBag className="h-3.5 w-3.5 mr-1.5" />
//                             Panier
//                           </Button>
//                         </motion.div>
//                         <motion.div
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           className="flex-1"
//                         >
//                           <Button
//                             variant="outline"
//                             onClick={() => handleWhatsAppOrder(product)}
//                             className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white text-xs px-3 py-2.5 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
//                           >
//                             <MessageCircle className="h-3.5 w-3.5 mr-1.5" />
//                             WhatsApp
//                           </Button>
//                         </motion.div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* View all products */}
//           <div className="text-center mt-12">
//             <Link to="/produits">
//               <motion.div
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button
//                   variant="outline"
//                   className="border-2 border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-primary/30 px-6 py-3 font-semibold rounded-xl shadow-sm hover:shadow-md transition-all"
//                 >
//                   <span className="flex items-center gap-2">
//                     Voir tous les produits
//                     <ArrowRight className="h-4 w-4" />
//                   </span>
//                 </Button>
//               </motion.div>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Section: Processus Rigoureux */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <motion.div 
//               className="inline-flex items-center gap-2.5 bg-primary/10 rounded-full px-5 py-2 mb-6 border border-primary/20"
//               whileHover={{ scale: 1.05 }}
//             >
//               <AwardIcon className="h-4 w-4 text-primary" />
//               <span className="font-bold text-xs uppercase tracking-wider text-primary">Artisanat d'Excellence</span>
//             </motion.div>
//             <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
//               <span className="block mb-2">Un processus</span>
//               <span className="block text-primary">
//                 d'excellence
//               </span>
//             </h2>
//             <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
//             <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
//               Chaque étape de création reflète notre engagement pour une qualité irréprochable
//             </p>
//           </motion.div>

//           {/* Timeline */}
//           <div className="relative">
//             <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300" />

//             <div className="space-y-24">
//               {processSteps.map((step, index) => (
//                 <motion.div
//                   key={step.step}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   className={`relative flex flex-col lg:flex-row items-center gap-12 ${
//                     index % 2 === 0 ? 'lg:flex-row-reverse' : ''
//                   }`}
//                 >
//                   {/* Contenu texte */}
//                   <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
//                     <div className="max-w-lg mx-auto lg:mx-0">
//                       <div className="flex items-center gap-4 mb-8">
//                         <div className={`relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg`}>
//                           <span className="text-xl font-bold text-white">{step.step}</span>
//                           <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse" />
//                         </div>
//                         <div className="h-px flex-1 bg-gray-300" />
//                       </div>

//                       <div className="mb-8">
//                         <div className="flex items-center gap-3 mb-4">
//                           <div className={`p-3 rounded-xl bg-primary/10 border border-gray-200`}>
//                             <step.icon className={`h-6 w-6 text-primary`} />
//                           </div>
//                           <h3 className="text-2xl font-bold text-gray-900">
//                             {step.title}
//                           </h3>
//                         </div>
//                         <p className="text-gray-600 leading-relaxed">
//                           {step.description}
//                         </p>
//                       </div>

//                       <div className="space-y-3">
//                         {step.features.map((feature, i) => (
//                           <div key={i} className="flex items-center gap-3">
//                             <div className={`w-2 h-2 rounded-full bg-primary`} />
//                             <span className="text-gray-700 font-medium">{feature}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Image */}
//                   <div className="flex-1 relative">
//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       transition={{ duration: 0.3 }}
//                       className="relative group"
//                     >
//                       <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${step.color} opacity-10 blur-xl group-hover:opacity-20 transition-opacity`} />
//                       <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200">
//                         <img
//                           src={step.image}
//                           alt={step.title}
//                           className="w-full h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
//                       </div>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section: Soins sur Mesure */}
//       <section className="py-20 relative overflow-hidden bg-white">
//         {/* Éléments décoratifs */}
//         <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <motion.div 
//               className="inline-flex items-center gap-2.5 bg-primary/10 rounded-full px-5 py-2 mb-6 border border-primary/20"
//               whileHover={{ scale: 1.05 }}
//             >
//               <Flower className="h-4 w-4 text-primary" />
//               <span className="font-bold text-xs uppercase tracking-wider text-primary">Collections Exclusives</span>
//             </motion.div>
            
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
//               <span className="block mb-2">Des soins</span>
//               <span className="block text-primary">
//                 sur mesure
//               </span>
//             </h2>
//             <div className="w-24 h-0.5 bg-primary mx-auto mb-6" />
            
//             <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed font-light text-lg">
//               Découvrez nos collections spécialement formulées pour répondre 
//               aux besoins spécifiques de chaque type de peau
//             </p>
//           </motion.div>

//           {/* Grid des catégories */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {categories.map((category, index) => (
//               <motion.div
//                 key={category.name}
//                 initial={{ opacity: 0, y: 40, scale: 0.95 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="group relative"
//               >
//                 <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
//                   {/* Image */}
//                   <div className="relative h-64 overflow-hidden">
//                     <img
//                       src={category.image}
//                       alt={category.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       loading="lazy"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                    
//                     {/* Icon moderne */}
//                     <div className="absolute bottom-6 left-6 w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
//                       <category.icon className="h-7 w-7 text-primary" />
//                     </div>
//                   </div>

//                   {/* Contenu */}
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
//                       {category.name}
//                     </h3>
                    
//                     <p className="text-gray-600 mb-5 leading-relaxed text-sm">
//                       {category.description}
//                     </p>

//                     {/* Features list - design moderne */}
//                     <div className="mb-6">
//                       <div className="flex flex-wrap gap-2">
//                         {category.features.map((feature, i) => (
//                           <span
//                             key={i}
//                             className="px-3 py-1.5 bg-primary/5 rounded-lg text-xs font-medium text-gray-700 border border-primary/10"
//                           >
//                             {feature}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* CTA moderne */}
//                     <Link to={category.path}>
//                       <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300 border border-primary/10 group-hover:border-primary/30">
//                         <div>
//                           <div className="text-sm font-semibold text-primary mb-1">Découvrir</div>
//                           <div className="text-sm text-gray-600">
//                             Voir la collection
//                           </div>
//                         </div>
//                         <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
//                           <ArrowRight className="h-4 w-4" />
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section avec images */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <motion.div 
//                 className="inline-flex items-center gap-2.5 bg-primary/10 rounded-full px-5 py-2 mb-6 border border-primary/20"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Crown className="h-4 w-4 text-primary" />
//                 <span className="font-bold text-xs uppercase tracking-widest text-primary">Excellence Premium</span>
//               </motion.div>
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
//                 <span className="block mb-2">L'Art de la</span>
//                 <span className="block text-primary">
//                   Beauté Naturelle
//                 </span>
//               </h2>
//               <div className="w-24 h-0.5 bg-primary mx-auto mb-6" />
//               <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
//                 Découvrez notre engagement premium pour votre beauté et bien-être
//               </p>
//             </motion.div>
//           </div>

//           {/* Scroll horizontal moderne et élégant */}
//           <div className="relative">
//             <div 
//               ref={scrollContainerRef}
//               className="overflow-x-auto overflow-y-visible scrollbar-hide pb-4 -mx-4 px-4 scroll-smooth"
//               onScroll={(e) => {
//                 const container = e.currentTarget
//                 const cardWidth = container.querySelector('.feature-card')?.clientWidth || 0
//                 const gap = 24
//                 const scrollLeft = container.scrollLeft
//                 const currentIndex = Math.round(scrollLeft / (cardWidth + gap))
//                 if (currentIndex !== currentFeatureIndex && currentIndex < features.length) {
//                   setCurrentFeatureIndex(currentIndex)
//                 }
//               }}
//             >
//               <div className="flex gap-6 min-w-max">
//                 {features.map((feature, index) => (
//                   <motion.div
//                     key={feature.title}
//                     initial={{ opacity: 0, x: 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1, duration: 0.6 }}
//                     className="group relative flex-shrink-0 feature-card w-[85vw] sm:w-[380px] lg:w-[420px]"
//                   >
//                     <div 
//                       className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer h-full transform hover:-translate-y-2"
//                       onClick={() => setActiveFeature(index)}
//                     >
//                       {/* Image */}
//                       <div className="relative h-48 overflow-hidden">
//                         <img
//                           src={feature.image}
//                           alt={feature.title}
//                           className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
//                           loading="lazy"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                        
//                         {/* Icon overlay */}
//                         <div className={`absolute top-4 left-4 p-3 rounded-xl ${feature.bgColor} backdrop-blur-sm border border-white/20 shadow-lg`}>
//                           <feature.icon className={`h-6 w-6 ${feature.color}`} />
//                         </div>

//                         {/* Effet hover sur image */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                       </div>

//                       {/* Contenu */}
//                       <div className="p-5">
//                         <div className="flex items-start justify-between mb-3">
//                           <div className="flex-1">
//                             <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
//                               {feature.title}
//                             </h3>
//                             <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
//                               {feature.description}
//                             </p>
//                           </div>
//                           <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
//                         </div>

//                         {/* Détails */}
//                         <div className="space-y-2">
//                           {feature.details.slice(0, 2).map((detail, i) => (
//                             <div key={i} className="flex items-center gap-2">
//                               <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
//                               <span className="text-xs text-gray-600 line-clamp-1">{detail}</span>
//                             </div>
//                           ))}
//                           <div className="pt-2">
//                             <span className="text-xs font-medium text-primary inline-flex items-center gap-1">
//                               En savoir plus
//                               <ArrowRight className="h-3 w-3" />
//                             </span>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Effet hover border */}
//                       <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 rounded-2xl transition-all duration-500 pointer-events-none" />
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Indicateur de scroll élégant avec slide actif */}
//             <div className="flex justify-center gap-2 mt-6">
//               {features.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     if (!scrollContainerRef.current) return
//                     const cardWidth = scrollContainerRef.current.querySelector('.feature-card')?.clientWidth || 0
//                     const gap = 24
//                     const scrollPosition = index * (cardWidth + gap)
//                     scrollContainerRef.current.scrollTo({
//                       left: scrollPosition,
//                       behavior: 'smooth'
//                     })
//                     setCurrentFeatureIndex(index)
//                   }}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     currentFeatureIndex === index 
//                       ? 'bg-primary w-8' 
//                       : 'bg-gray-200 w-2 hover:bg-gray-300'
//                   }`}
//                   aria-label={`Aller à la carte ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Stats Premium */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-16 bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
//           >
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {[
//                 { value: "99%", label: "Satisfaction client", icon: Heart, color: "text-pink-500" },
//                 { value: "24h", label: "Livraison express", icon: Truck, color: "text-blue-500" },
//                 { value: "50+", label: "Produits premium", icon: Leaf, color: "text-emerald-500" },
//                 { value: "15k+", label: "Clientes ravis", icon: Users, color: "text-purple-500" }
//               ].map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="text-center group"
//                 >
//                   <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2 flex items-center justify-center gap-2`}>
//                     <stat.icon className="h-6 w-6" />
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Section: Testimonials */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <motion.div
//               className="inline-flex items-center gap-2.5 bg-primary/10 rounded-full px-5 py-2 mb-6 border border-primary/20"
//               whileHover={{ scale: 1.05 }}
//             >
//               <Heart className="h-4 w-4 text-primary fill-current" />
//               <span className="font-bold text-xs uppercase tracking-wider text-primary">Témoignages</span>
//             </motion.div>
//             <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
//               <span className="block mb-2">Ils</span>
//               <span className="block text-primary">
//                 Recommandent
//               </span>
//             </h2>
//             <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
//             <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
//               Les témoignages de notre communauté de clientes satisfaites
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="relative"
//               >
//                 <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
//                   {/* Quote icon */}
//                   <div className="text-primary/20 mb-6">
//                     <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
//                     </svg>
//                   </div>
                  
//                   {/* Rating */}
//                   <div className="flex mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-4 w-4 text-amber-400 fill-current mr-1" />
//                     ))}
//                   </div>
                  
//                   {/* Content */}
//                   <p className="text-gray-700 mb-6 italic">
//                     "{testimonial.content}"
//                   </p>
                  
//                     {/* Author */}
//                   <div className="flex items-center gap-4">
//                     <div className="w-10 h-10 rounded-full overflow-hidden bg-primary p-0.5">
//                       <div className="w-full h-full rounded-full bg-white">
//                         <img
//                           src={testimonial.avatar}
//                           alt={testimonial.name}
//                           className="w-full h-full object-cover rounded-full"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <div className="font-bold text-gray-900">{testimonial.name}</div>
//                       <div className="text-sm text-gray-600">{testimonial.role}</div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section: CTA Final */}
//       <section className="py-20 bg-gray-900">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <motion.div 
//                 className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/20"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Sparkle className="h-4 w-4 text-white" />
//                 <span className="font-bold text-xs uppercase tracking-wider text-white">Rejoignez-nous</span>
//               </motion.div>
//               <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight tracking-tight">
//                 <span className="block mb-2">Prête à révéler</span>
//                 <span className="block text-white">
//                   votre éclat
//                 </span>
//                 <span className="block mt-2">?</span>
//               </h2>
//               <div className="w-24 h-0.5 bg-white/50 mx-auto mb-8" />
//               <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
//                 Rejoignez des milliers de femmes qui ont déjà fait le choix 
//                 d'une beauté naturelle d'exception
//               </p>
//             </motion.div>
            
//             <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
//               <Link to="/produits">
//                 <motion.div
//                   whileHover={{ scale: 1.05, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-semibold text-sm rounded-xl shadow-xl hover:shadow-2xl transition-all"
//                   >
//                     <span className="flex items-center gap-2">
//                       <ShoppingBag className="h-4 w-4" />
//                       Découvrir la collection
//                     </span>
//                   </Button>
//                 </motion.div>
//               </Link>
              
//               <a href="https://wa.me/+2250701781701" target="_blank" rel="noopener noreferrer">
//                 <motion.div
//                   whileHover={{ scale: 1.05, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     variant="outline"
//                     className="border-2 border-gray-600 text-white hover:bg-gray-800/50 hover:border-gray-400 px-6 py-3 font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all"
//                   >
//                     <span className="flex items-center gap-2">
//                       <MessageCircle className="h-4 w-4" />
//                       Discuter avec un expert
//                     </span>
//                   </Button>
//                 </motion.div>
//               </a>
//             </div>
            
//             {/* Garanties */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12 border-t border-gray-800">
//               {[
//                 { icon: ShieldCheck, text: "Satisfait ou remboursé 30 jours", color: "text-emerald-400" },
//                 { icon: Truck, text: "Livraison offerte dès 50€", color: "text-blue-400" },
//                 { icon: Shield, text: "Paiement 100% sécurisé", color: "text-purple-400" },
//                 { icon: Users, text: "Support premium 7j/7", color: "text-pink-400" }
//               ].map((guarantee, index) => (
//                 <div key={index} className="flex flex-col items-center">
//                   <guarantee.icon className={`h-6 w-6 mb-3 ${guarantee.color}`} />
//                   <span className="text-sm text-gray-400 text-center">{guarantee.text}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Modal pour les features */}
//       {activeFeature !== null && (
//         <FeatureModal 
//           feature={features[activeFeature]}
//           onClose={() => setActiveFeature(null)}
//         />
//       )}
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SEO } from '../components/SEO/SEO'
import { 
  Leaf, 
  Sparkles, 
  Zap, 
  Shield, 
  Truck, 
  Heart, 
  Star,
  ChevronRight,
  CheckCircle,
  Users,
  ShieldCheck,
  Droplets,
  Gem,
  ShoppingBag,
  ArrowRight,
  Flower,
  Sparkle,
  Target,
  Globe,
  Beaker,
  TestTube,
  Award as AwardIcon,
  MessageCircle,
  Crown,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  X,
  Image as ImageIcon,
  ZoomIn
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI/Button'
import { useCart } from '../contexts/CartContext'
import { useWhatsAppOrder } from '../hooks/useWhatsAppOrder'

// Images locales
import hero from '../IMAGES/front-view-confident-woman-posing-while-wearing-body-shaper.jpg'
import process1 from '../IMAGES/carou4.jpeg'
import process2 from '../IMAGES/science.jpeg'
import process3 from '../IMAGES/laver.jpeg'
import process4 from '../IMAGES/ethi.jpeg'

// Images pour le carrousel
import carousel1 from '../IMAGES/baniere.jpeg'
import carousel2 from '../IMAGES/banier2.jpeg'
import carousel3 from '../IMAGES/C3.jpeg'

// Images mobiles spécifiques
import mobileCarousel1 from '../IMAGES/mobile2.jpeg'
import mobileCarousel2 from '../IMAGES/main.jpeg'

// Images pour les features
import naturalImg from '../IMAGES/carou2.jpeg'
import deliveryImg from '../IMAGES/livraison.webp'
import secureImg from '../IMAGES/payemen.jpeg'
import adviceImg from '../IMAGES/C4.jpeg'
import best1 from '../IMAGES/best 1.jpeg'
import best2 from '../IMAGES/best 2.jpeg'
import best3 from '../IMAGES/best33.jpeg'
import best333 from '../IMAGES/best3.jpeg'
import corp from '../IMAGES/corp.jpeg'
import special from '../IMAGES/special.jpeg'
import kdo from '../IMAGES/kdo.jpeg'
import avant from '../IMAGES/avant.jpeg'
import apres from '../IMAGES/apres.jpeg'
import galery from '../IMAGES/galery.jpeg'
import galery1 from '../IMAGES/galery1.jpeg'
import galery3 from '../IMAGES/galery3.jpeg'
import galery2 from '../IMAGES/galery2.mp4'
// Custom hook pour détecter mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

// Composant d'animation d'écriture
const WritingAnimation: React.FC<{ text: string; delay?: number; className?: string }> = ({ text, delay = 0, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 50)
      
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <motion.span 
      className={`${className} font-bold`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay + (text.length * 0.05) }}
    >
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-0.5"
        >
          |
        </motion.span>
      )}
    </motion.span>
  )
}

// Composant Lightbox pour la galerie (images + vidéos)
const Lightbox: React.FC<{ 
  media: Array<{ src: string, type: "image" | "video" }>, 
  currentIndex: number, 
  onClose: () => void,
  onNext: () => void,
  onPrev: () => void
}> = ({ media, currentIndex, onClose, onNext, onPrev }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = React.useRef<HTMLVideoElement>(null)
  
  const currentMedia = media[currentIndex]
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  
  // Arrêter la vidéo quand on change de média
  useEffect(() => {
    if (videoRef.current && currentMedia?.type !== "video") {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }, [currentIndex, currentMedia])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      onNext()
    }
    if (isRightSwipe) {
      onPrev()
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, onNext, onPrev])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative max-w-7xl mx-auto px-4 w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 backdrop-blur-sm rounded-full transition-all shadow-xl border-2 border-white/20 hover:scale-110 active:scale-95"
          aria-label="Fermer"
        >
          <X className="h-6 w-6 text-white drop-shadow-lg" />
        </button>

        {/* Média principal (image ou vidéo) */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {currentMedia?.type === "video" ? (
            <motion.div
              key={`video-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-full max-h-[90vh]"
            >
              <video
                ref={videoRef}
                src={currentMedia.src}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                controls
                autoPlay
                loop
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            </motion.div>
          ) : (
            <motion.img
              key={`image-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={currentMedia?.src}
              alt={`Gallery image ${currentIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          )}
        </div>

        {/* Boutons navigation */}
        {media.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 backdrop-blur-sm rounded-full transition-all z-10 shadow-2xl border-2 border-white/20 hover:scale-110 active:scale-95"
              aria-label="Image précédente"
            >
              <ChevronLeft className="h-7 w-7 text-white drop-shadow-lg" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 backdrop-blur-sm rounded-full transition-all z-10 shadow-2xl border-2 border-white/20 hover:scale-110 active:scale-95"
              aria-label="Image suivante"
            >
              <ChevronRightIcon className="h-7 w-7 text-white drop-shadow-lg" />
            </button>
          </>
        )}

        {/* Indicateur */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {media.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                // Navigation directe vers le média
                if (videoRef.current && isPlaying) {
                  videoRef.current.pause()
                }
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
              aria-label={`Aller au média ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0)
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)
  const { addToCart } = useCart()
  const { openWhatsAppOrder } = useWhatsAppOrder()
  const isMobile = useIsMobile()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // SEO pour la page d'accueil
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  
  // Tableau des médias de la galerie (images + vidéo)
  const galleryMedia: Array<{ src: string, type: "image" | "video" }> = [
    { src: avant, type: "image" as const },
    { src: apres, type: "image" as const },
    { src: galery, type: "image" as const },
    { src: galery1, type: "image" as const },
    { src: galery2, type: "video" as const },
    { src: galery3, type: "image" as const },
  ]

  // Images pour le carrousel automatique
  // const carouselImages = [
  //   {
  //     id: 1,
  //     image: isMobile ? mobileCarousel1 : carousel1,
  //     title: "L'Excellence Naturelle",
  //     subtitle: "Des formulations premium 100% bio pour sublimer votre beauté authentique",
  //     mobileTitle: "comprendre, aimer et traiter",
  //     mobileSubtitle: "",
  //     color: "bg-black/70",
  //     cta: "Découvrir la collection",
  //     showMobileOverlay: false // Pas d'overlay pour les images mobiles
  //   },
  //   {
  //     id: 2,
  //     image: isMobile ? mobileCarousel2 : carousel2,
  //     title: "Éclat Radieux Garanti",
  //     subtitle: "Des actifs puissants pour une peau visiblement transformée",
  //     mobileTitle: isMobile ?  "DES SOINS DOUX, À BASE D'INGRÉDIENTS NATURELS" : "",
  //     mobileSubtitle: "",
  //     color: "bg-black/70",
  //     cta: "Voir nos best-sellers",
  //     showMobileOverlay: false // Pas d'overlay pour les images mobiles
  //   },
  //   {
  //     id: 3,
  //     image: carousel3,
  //     title: "Soins Sur Mesure",
  //     subtitle: "Des programmes personnalisés adaptés à vos besoins spécifiques",
  //     mobileTitle: "Soins Sur Mesure",
  //     mobileSubtitle: "Des programmes personnalisés adaptés à vos besoins spécifiques",
  //     color: "bg-black/50",
  //     cta: "Obtenir un diagnostic",
  //     showMobileOverlay: true // Overlay pour la 3ème image sur mobile
  //   }
  // ]


  const carouselImages = [
    {
      id: 1,
      image: isMobile ? mobileCarousel1 : carousel1,
      title: "L'Excellence Naturelle",
      subtitle: "Des formulations premium 100% bio pour sublimer votre beauté authentique",
      mobileTitle: "comprendre, aimer et traiter",
      mobileSubtitle: "",
      color: "bg-black/70",
      cta: "Découvrir la collection",
      showMobileOverlay: false,
      hideTextOnDesktop: true // Première slide: texte caché sur desktop
    },
    {
      id: 2,
      image: isMobile ? mobileCarousel2 : carousel2,
      title: "Éclat Radieux Garanti",
      subtitle: "Des actifs puissants pour une peau visiblement transformée",
      mobileTitle: "DES SOINS DOUX, À BASE D'INGRÉDIENTS NATURELS",
      mobileSubtitle: "",
      color: "bg-black/70",
      cta: "Voir nos best-sellers",
      showMobileOverlay: false,
      hideTextOnDesktop: true // Deuxième slide: texte caché sur desktop
    },
    {
      id: 3,
      image: carousel3,
      title: "Soins Sur Mesure",
      subtitle: "Des programmes personnalisés adaptés à vos besoins spécifiques",
      mobileTitle: "Soins Sur Mesure",
      mobileSubtitle: "Des programmes personnalisés adaptés à vos besoins spécifiques",
      color: "bg-black/50",
      cta: "Obtenir un diagnostic",
      showMobileOverlay: true,
      hideTextOnDesktop: false // Troisième slide: texte visible sur desktop
    }
  ]

  // Images optimisées
  const images = {
    hero: hero,
    faceCare: best333,
    bodyCare: corp,
    targetedCare: special,
    giftSet:kdo,
    product1: best1,
    product2: best2,
    product3: best3,
    process1: process1,
    process2: process2,
    process3: process3,
    process4: process4
  }

  // Carrousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [carouselImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  // Processus de fabrication
  const processSteps = [
    {
      step: "01",
      title: "Sélection Ingredients",
      description: "Nous sélectionnons rigoureusement les meilleurs ingrédients naturels provenant de sources durables et certifiées bio.",
      icon: Target,
      image: images.process1,
      features: ["Bio certifié", "Traçabilité totale", "Qualité premium"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50"
    },
    {
      step: "02",
      title: "Formulation Scientifique",
      description: "Nos experts en cosmétologie développent des formules innovantes qui combinent efficacité prouvée et respect de la peau.",
      icon: Beaker,
      image: images.process2,
      features: ["Recherche approfondie", "Tests en laboratoire", "Formules brevetées"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      step: "03",
      title: "Tests Rigoureux",
      description: "Chaque produit subit des tests dermatologiques et des contrôles qualité stricts pour garantir sécurité et performance.",
      icon: TestTube,
      image: images.process3,
      features: ["Tests dermatologiques", "Contrôles qualité", "Sans allergènes"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50"
    },
    {
      step: "04",
      title: "Production Éthique",
      description: "Notre fabrication respecte l'environnement avec des procédés écoresponsables et une empreinte carbone réduite.",
      icon: Globe,
      image: images.process4,
      features: ["Production locale", "Emballages recyclables", "Éthique garantie"],
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50"
    }
  ]

  // Catégories de produits
  const categories = [
    {
      name: 'Soins Visage',
      description: 'Sérums, crèmes et masques premium pour une peau radieuse et éclatante',
      icon: Sparkles,
      path: '/produits?category=visage',
      products: 12,
      image: images.faceCare,
      color: 'from-rose-500 to-pink-500',
      features: ['Anti-âge', 'Hydratation', 'Éclat', 'Purification']
    },
    {
      name: 'Soins Corps',
      description: 'Huiles, laits et exfoliants luxueux pour un corps nourri et sublimé',
      icon: Droplets,
      path: '/produits?category=corps',
      products: 8,
      image: images.bodyCare,
      color: 'from-emerald-500 to-teal-500',
      features: ['Nourrissant', 'Fermeté', 'Douceur', 'Tonus']
    },
    {
      name: 'Soins Spécialisés',
      description: 'Solutions ciblées professionnelles pour des besoins spécifiques',
      icon: Zap,
      path: '/produits?category=soins-cibles',
      products: 6,
      image: images.targetedCare,
      color: 'from-amber-500 to-orange-500',
      features: ['Ciblé', 'Intensif', 'Résultats rapides', 'Expert']
    },
    {
      name: 'Coffrets Cadeaux',
      description: 'Ensembles élégants et prestigieux pour offrir ou se faire plaisir',
      icon: Gem,
      path: '/produits?category=coffrets',
      products: 5,
      image: images.giftSet,
      color: 'from-purple-500 to-indigo-500',
      features: ['Élégant', 'Complet', 'Personnalisable', 'Prestige']
    }
  ]

  // Features avec images
  const features = [
    {
      icon: ShieldCheck,
      title: "100% Naturel & Bio",
      description: "Ingrédients certifiés bio sans produits chimiques nocifs pour une beauté pure et authentique",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      image: naturalImg,
      details: [
        "Certifications bio européennes strictes",
        "Sans parabènes, silicones ou PEG",
        "Ingrédients 100% biodégradables",
        "Formules vegan-friendly et cruelty-free"
      ]
    },
    {
      icon: Truck,
      title: "Livraison Premium",
      description: "Service express avec suivi en temps réel pour recevoir vos produits rapidement",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      image: deliveryImg,
      details: [
        "Livraison offerte dès 50€ d'achat",
        "Suivi premium en temps réel",
        "Emballages écologiques luxueux",
        "Points relais premium disponibles"
      ]
    },
    {
      icon: Shield,
      title: "Paiement Sécurisé",
      description: "Transactions cryptées avec options flexibles pour votre tranquillité d'esprit",
      color: "text-primary",
      bgColor: "bg-primary/10",
      image: secureImg,
      details: [
        "Paiement sécurisé à la livraison",
        "Cryptage SSL 256 bits bancaire",
        "Options de paiement multiples",
        "Garantie satisfait ou remboursé 30 jours"
      ]
    },
    {
      icon: Users,
      title: "Conseils Experts",
      description: "Accompagnement personnalisé par nos experts beauté certifiés",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      image: adviceImg,
      details: [
        "Diagnostic peau personnalisé gratuit",
        "Programme beauté sur mesure",
        "Suivi mensuel par nos experts",
        "Ateliers virtuels exclusifs"
      ]
    }
  ]

  // Auto-scroll horizontal pour les features
  useEffect(() => {
    if (!scrollContainerRef.current) return

    const scrollToFeature = (index: number) => {
      if (!scrollContainerRef.current) return
      const cardWidth = scrollContainerRef.current.querySelector('.feature-card')?.clientWidth || 0
      const gap = 24 // gap-6 = 1.5rem = 24px
      const scrollPosition = index * (cardWidth + gap)
      
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
      setCurrentFeatureIndex(index)
    }

    const interval = setInterval(() => {
      const nextIndex = (currentFeatureIndex + 1) % features.length
      scrollToFeature(nextIndex)
    }, 3000)

    return () => clearInterval(interval)
  }, [currentFeatureIndex, features.length])

  // Produits phares
  const featuredProducts = [
    {
      id: "best-seller-1",
      name: "Sérum vitamine C pure",
      category: "Soin Visage Premium",
      price: 10000, // Prix en FCFA Sérum visage éclat anti tache 
      originalPrice: 15500,
      rating: 4.9,
      reviews: 428,
      image: images.product1,
      badges: ["Best-seller", "Bio", "Premium"],
      features: ["anti tache ", "Hydratation", "Éclat immédiat"],
      color: "from-rose-400 to-pink-500"
    },
    {
      id: "best-seller-2",
      name: "Elixir de papaye précieuse ",
      category: "Soin Corps Luxe",
      price: 9000,
      originalPrice: 13500,
      rating: 4.8,
      reviews: 296,
      image: images.product2,
      badges: ["Nouveau", "Luxe"],
      features: ["éclat", "anti tache"],
      color: "from-amber-400 to-orange-500"
    },
    {
      id: "best-seller-3",
      name: "Duo hibiscus(bissap)",
      category: "Soin corp Expert",
      price: 15000 ,
      originalPrice: 22000,
      rating: 4.7,
      reviews: 374,
      image: images.product3,
      badges: [, "Purifiant", "Expert"],
      features: ["Eclaircissant ", "Effet frais immédiat"],
      color: "from-emerald-400 to-teal-500"
    }
  ]

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image,
    })
  }

  const handleWhatsAppOrder = (product: typeof featuredProducts[0]) => {
    const items = [{
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image_url: product.image
    }]
    openWhatsAppOrder(items, product.price)
  }

  // Témoignages
  const testimonials = [
    {
      name: "Marie K.",
      role: "Cliente Premium depuis 2 ans",
      content: "La qualité exceptionnelle des sérums Petal a transformé ma peau. Finies les imperfections, je rayonne naturellement ! Une expérience beauté véritablement luxueuse.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Fatou D.",
      role: "Cliente Fidèle",
      content: "Le service premium Petal est incomparable. Commande simplifiée sur WhatsApp, livraison express et produits d'une qualité exceptionnelle. Une marque qui comprend le vrai luxe.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Aïcha B.",
      role: "Cliente Connaisseuse",
      content: "Enfin des produits naturels adaptés à notre climat tropical. Ma peau respire, rayonne et je retrouve une confiance absolue. Petal redéfinit l'excellence en cosmétique naturelle.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ]

  // Modal pour afficher les détails des features
  const FeatureModal = ({ feature, onClose }: { feature: typeof features[0], onClose: () => void }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white hover:bg-gray-50 shadow-lg transition-colors border border-gray-200"
        >
          <X className="h-5 w-5 text-gray-700" />
        </button>

        <div className="h-64 overflow-hidden">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <div className={`p-3 rounded-xl ${feature.bgColor} backdrop-blur-sm border border-white/20`}>
              <feature.icon className={`h-8 w-8 ${feature.color}`} />
            </div>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">{feature.description}</p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">Avantages Premium :</h4>
              <div className="space-y-3">
                {feature.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Notre Engagement :</h4>
              <p className="text-gray-600">
                Chez Petal, nous redéfinissons l'excellence en cosmétique naturelle avec une attention particulière aux détails, garantissant une expérience premium à chaque étape.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Button 
              variant="outline" 
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
              onClick={onClose}
            >
              Fermer
            </Button>
            <Link to="/contact" className="flex-1">
              <Button variant="primary" className="w-full bg-primary hover:bg-primary/90">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <>
      <SEO
        title="Petale - Soins de beauté naturels et cosmétiques bio | Accueil"
        description="Découvrez Petale, votre destination premium pour des soins de beauté naturels et cosmétiques bio. Des formulations 100% naturelles pour sublimer votre beauté authentique. Livraison rapide en Côte d'Ivoire. Commandez vos produits cosmétiques bio dès maintenant."
        keywords="cosmétiques bio, soins naturels, beauté naturelle, produits cosmétiques Côte d'Ivoire, soins visage bio, soins corps naturels, cosmétiques premium, produits beauté bio, soins éclat, crèmes hydratantes naturelles"
        url={`${baseUrl}/`}
      />
      <div className="min-h-screen bg-white overflow-hidden">
        {/* Carrousel Header */}
        <section className="relative h-screen overflow-hidden">
        {/* Carrousel */}

        <div className="relative h-full">
  {carouselImages.map((slide, index) => (
    <motion.div
      key={slide.id}
      initial={{ opacity: 0 }}
      animate={{
        opacity: currentSlide === index ? 1 : 0,
        scale: currentSlide === index ? 1 : 1.03
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`absolute inset-0 ${
        currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Image de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
          loading="eager"
        />
        {/* Overlay sombre - seulement pour la 3ème image sur mobile */}
        {(isMobile && slide.showMobileOverlay) && (
          <div className="absolute inset-0 bg-black/50" />
        )}
        {/* Overlay pour desktop - seulement pour la 3ème image */}
        {!isMobile && index === 2 && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
        )}
      </div>

      {/* Contenu */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className={`${isMobile ? 'w-full px-4' : 'max-w-2xl'} mt-16 sm:mt-0`}
          >
            {/* Affichage mobile seulement pour les 2 premières slides */}
            {isMobile && index < 2 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                {/* Conteneur texte avec fond noir pour contraste */}
                <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                  <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight text-center"
                  >
                    {index === 0 ? (
                      <div className="space-y-2">
                        <div className="text-3xl sm:text-4xl">
                          <WritingAnimation 
                            text="comprendre"
                            delay={0.5}
                            className="text-white block mb-2"
                          />
                        </div>
                        <div className="text-2xl sm:text-3xl">
                          <WritingAnimation 
                            text="aimer"
                            delay={1.5}
                            className="text-white block mb-2"
                          />
                        </div>
                        <div className="text-xl sm:text-2xl">
                          <WritingAnimation 
                            text="et traiter"
                            delay={2.5}
                            className="text-white"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="text-xl sm:text-2xl md:text-3xl leading-relaxed">
                        <WritingAnimation 
                          text="DES SOINS DOUX,"
                          delay={0.5}
                          className="text-white block mb-3"
                        />
                        <WritingAnimation 
                          text="À BASE D'INGRÉDIENTS"
                          delay={2}
                          className="text-white block mb-3"
                        />
                        <WritingAnimation 
                          text="NATURELS"
                          delay={3.5}
                          className="text-white"
                        />
                      </div>
                    )}
                  </motion.h1>
                  
                  {/* Ligne décorative */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 4, duration: 0.8 }}
                    className="h-0.5 bg-primary rounded-full mt-4 sm:mt-6 mx-auto max-w-xs"
                  />
                </div>
              </motion.div>
            ) : isMobile && index === 2 ? (
              // Affichage mobile pour la 3ème image
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                {/* Conteneur texte avec fond noir pour contraste */}
                <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                  <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight tracking-tight text-center"
                  >
                    <WritingAnimation 
                      text="Soins Sur Mesure"
                      delay={0.5}
                      className="text-white block mb-4"
                    />
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="text-white/90 text-sm sm:text-base text-center mb-6 leading-relaxed"
                  >
                    <WritingAnimation 
                      text="Des programmes personnalisés adaptés à vos besoins spécifiques"
                      delay={1.5}
                      className="text-white/90"
                    />
                  </motion.p>
                  
                  {/* Ligne décorative */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 3, duration: 0.8 }}
                    className="h-0.5 bg-primary rounded-full mt-4 sm:mt-6 mx-auto max-w-xs"
                  />
                </div>
              </motion.div>
            ) : !isMobile && index === 2 ? (
              // Affichage desktop SEULEMENT pour la 3ème slide
              <>
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight"
                >
                  <span className="block mb-2 text-white drop-shadow-lg sm:drop-shadow-2xl">
                    {slide.title}
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="h-0.5 sm:h-1 bg-primary rounded-full mt-2 sm:mt-3"
                  />
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 sm:text-white/95 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-xl font-light"
                >
                  {slide.subtitle}
                </motion.p>
              </>
            ) : null}

            {/* CTA Buttons Premium - Positionnés en bas */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: isMobile && index < 2 ? 4.5 : 
                       isMobile && index === 2 ? 3.5 : 
                       1.1 
              }}
              className={`absolute ${isMobile ? 'bottom-6' : 'bottom-8 sm:bottom-12 md:bottom-16'} left-0 right-0 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center`}
            >
              <Link to="/produits">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden"
                >
                  <div className="relative px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5 bg-primary text-white font-medium sm:font-semibold text-xs sm:text-sm rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 hover:bg-primary/90">
                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-2.5">
                      <Sparkle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span className="tracking-wide">{slide.cta}</span>
                      <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              </Link>

              <a href="https://wa.me/+2250701781701" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <div className="px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5 bg-white/95 backdrop-blur-md border border-white/30 hover:bg-white text-gray-800 font-medium sm:font-semibold text-xs sm:text-sm rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-center gap-2 sm:gap-2.5">
                      <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline tracking-wide">WhatsApp</span>
                      <span className="sm:hidden">WA</span>
                    </div>
                  </div>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  ))}
</div>


        {/* Contrôles du carrousel sur les côtés - Petits boutons premium */}
        <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/30 hover:border-primary/30 hover:shadow-xl transition-all pointer-events-auto group"
            aria-label="Précédent"
          >
            <ChevronLeft className="h-4 w-4 text-gray-700 group-hover:text-primary transition-colors" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/30 hover:border-primary/30 hover:shadow-xl transition-all pointer-events-auto group"
            aria-label="Suivant"
          >
            <ChevronRightIcon className="h-4 w-4 text-gray-700 group-hover:text-primary transition-colors" />
          </motion.button>
        </div>

        {/* Indicateurs centrés en bas - Style premium */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2.5 z-10">
          {carouselImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-10 h-1.5 bg-primary shadow-lg' 
                  : 'w-2 h-2 bg-white/60 hover:bg-white/80 backdrop-blur-sm'
              }`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Section: Best Sellers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2.5 bg-primary/10 rounded-full px-5 py-2 mb-6 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="h-4 w-4 text-amber-500 fill-current" />
              <span className="font-bold text-xs uppercase tracking-wider text-amber-700">Les Préférés</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              <span className="block mb-2">Nos</span>
              <span className="block text-primary">
                Best-Sellers
              </span>
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Les produits que nos clientes adorent et recommandent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200">
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    {product.badges.map((badge, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 border border-gray-200"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Image */}
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    
                    {/* Rating */}
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 border border-gray-200">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-amber-400 fill-current" />
                        <span className="font-bold text-gray-900">{product.rating}</span>
                        <span className="text-xs text-gray-600">({product.reviews})</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">
                      {product.category}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-50 rounded-full text-xs text-gray-600 border border-gray-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="space-y-3">
                      <div>
                        <div className="text-xl font-bold text-gray-900">
                          {product.price.toLocaleString()} FCFA
                        </div>
                        <div className="text-sm text-gray-500 line-through">
                          {product.originalPrice.toLocaleString()} FCFA
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1"
                        >
                          <Button
                            variant="primary"
                            onClick={() => handleAddToCart(product)}
                            className="w-full bg-primary hover:bg-primary/90 text-xs px-3 py-2.5 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                          >
                            <ShoppingBag className="h-3.5 w-3.5 mr-1.5" />
                            Panier
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1"
                        >
                          <Button
                            variant="outline"
                            onClick={() => handleWhatsAppOrder(product)}
                            className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white text-xs px-3 py-2.5 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                          >
                            <MessageCircle className="h-3.5 w-3.5 mr-1.5" />
                            WhatsApp
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View all products */}
          <div className="text-center mt-12">
            <Link to="/produits">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-primary/30 px-6 py-3 font-semibold rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <span className="flex items-center gap-2">
                    Voir tous les produits
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Processus Rigoureux */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-flex items-center gap-2.5 bg-primary/10 rounded-full px-5 py-2 mb-6 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <AwardIcon className="h-4 w-4 text-primary" />
              <span className="font-bold text-xs uppercase tracking-wider text-primary">Artisanat d'Excellence</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              <span className="block mb-2">Un processus</span>
              <span className="block text-primary">
                d'excellence
              </span>
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Chaque étape de création reflète notre engagement pour une qualité irréprochable
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300" />

            <div className="space-y-24">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Contenu texte */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="max-w-lg mx-auto lg:mx-0">
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg`}>
                          <span className="text-xl font-bold text-white">{step.step}</span>
                          <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse" />
                        </div>
                        <div className="h-px flex-1 bg-gray-300" />
                      </div>

                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-3 rounded-xl bg-primary/10 border border-gray-200`}>
                            <step.icon className={`h-6 w-6 text-primary`} />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {step.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full bg-primary`} />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1 relative">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                    >
                      <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${step.color} opacity-10 blur-xl group-hover:opacity-20 transition-opacity`} />
                      <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Soins sur Mesure */}
      <section className="py-20 relative overflow-hidden bg-white">
        {/* Éléments décoratifs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-flex items-center gap-2.5 bg-primary/10 rounded-full px-5 py-2 mb-6 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <Flower className="h-4 w-4 text-primary" />
              <span className="font-bold text-xs uppercase tracking-wider text-primary">Collections Exclusives</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
              <span className="block mb-2">Des soins</span>
              <span className="block text-primary">
                sur mesure
              </span>
            </h2>
            <div className="w-24 h-0.5 bg-primary mx-auto mb-6" />
            
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed font-light text-lg">
              Découvrez nos collections spécialement formulées pour répondre 
              aux besoins spécifiques de chaque type de peau
            </p>
          </motion.div>

          {/* Grid des catégories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                    
                    {/* Icon moderne */}
                    <div className="absolute bottom-6 left-6 w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                      {category.description}
                    </p>

                    {/* Features list - design moderne */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {category.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-primary/5 rounded-lg text-xs font-medium text-gray-700 border border-primary/10"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA moderne */}
                    <Link to={category.path}>
                      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300 border border-primary/10 group-hover:border-primary/30">
                        <div>
                          <div className="text-sm font-semibold text-primary mb-1">Découvrir</div>
                          <div className="text-sm text-gray-600">
                            Voir la collection
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section avec images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-flex items-center gap-2.5 bg-primary/10 rounded-full px-5 py-2 mb-6 border border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                <Crown className="h-4 w-4 text-primary" />
                <span className="font-bold text-xs uppercase tracking-widest text-primary">Excellence Premium</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                <span className="block mb-2">L'Art de la</span>
                <span className="block text-primary">
                  Beauté Naturelle
                </span>
              </h2>
              <div className="w-24 h-0.5 bg-primary mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                Découvrez notre engagement premium pour votre beauté et bien-être
              </p>
            </motion.div>
          </div>

          {/* Scroll horizontal moderne et élégant */}
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto overflow-y-visible scrollbar-hide pb-4 -mx-4 px-4 scroll-smooth"
              onScroll={(e) => {
                const container = e.currentTarget
                const cardWidth = container.querySelector('.feature-card')?.clientWidth || 0
                const gap = 24
                const scrollLeft = container.scrollLeft
                const currentIndex = Math.round(scrollLeft / (cardWidth + gap))
                if (currentIndex !== currentFeatureIndex && currentIndex < features.length) {
                  setCurrentFeatureIndex(currentIndex)
                }
              }}
            >
              <div className="flex gap-6 min-w-max">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group relative flex-shrink-0 feature-card w-[85vw] sm:w-[380px] lg:w-[420px]"
                  >
                    <div 
                      className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer h-full transform hover:-translate-y-2"
                      onClick={() => setActiveFeature(index)}
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                        
                        {/* Icon overlay */}
                        <div className={`absolute top-4 left-4 p-3 rounded-xl ${feature.bgColor} backdrop-blur-sm border border-white/20 shadow-lg`}>
                          <feature.icon className={`h-6 w-6 ${feature.color}`} />
                        </div>

                        {/* Effet hover sur image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Contenu */}
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                              {feature.title}
                            </h3>
                            <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                              {feature.description}
                            </p>
                          </div>
                          <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
                        </div>

                        {/* Détails */}
                        <div className="space-y-2">
                          {feature.details.slice(0, 2).map((detail, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span className="text-xs text-gray-600 line-clamp-1">{detail}</span>
                            </div>
                          ))}
                          <div className="pt-2">
                            <span className="text-xs font-medium text-primary inline-flex items-center gap-1">
                              En savoir plus
                              <ArrowRight className="h-3 w-3" />
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Effet hover border */}
                      <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 rounded-2xl transition-all duration-500 pointer-events-none" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Indicateur de scroll élégant avec slide actif */}
            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!scrollContainerRef.current) return
                    const cardWidth = scrollContainerRef.current.querySelector('.feature-card')?.clientWidth || 0
                    const gap = 24
                    const scrollPosition = index * (cardWidth + gap)
                    scrollContainerRef.current.scrollTo({
                      left: scrollPosition,
                      behavior: 'smooth'
                    })
                    setCurrentFeatureIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentFeatureIndex === index 
                      ? 'bg-primary w-8' 
                      : 'bg-gray-200 w-2 hover:bg-gray-300'
                  }`}
                  aria-label={`Aller à la carte ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats Premium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "99%", label: "Satisfaction client", icon: Heart, color: "text-pink-500" },
                { value: "24h", label: "Livraison express", icon: Truck, color: "text-blue-500" },
                { value: "50+", label: "Produits premium", icon: Leaf, color: "text-emerald-500" },
                { value: "15k+", label: "Clientes ravis", icon: Users, color: "text-purple-500" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2 flex items-center justify-center gap-2`}>
                    <stat.icon className="h-6 w-6" />
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section: Clients Satisfaits - Galerie */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-flex items-center gap-2.5 bg-primary/10 rounded-full px-5 py-2 mb-6 border border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                <ImageIcon className="h-4 w-4 text-primary" />
                <span className="font-bold text-xs uppercase tracking-wider text-primary">Galerie</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                <span className="block mb-2">Nos Clients</span>
                <span className="block text-primary">
                  Satisfaits
                </span>
              </h2>
              <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Découvrez les résultats authentiques de nos produits naturels
              </p>
            </motion.div>
          </div>

          {/* Galerie d'images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { id: 1, src: avant, alt: "Avant", type: "image" },
              { id: 2, src: apres, alt: "Après", type: "image" },
              { id: 3, src: galery, alt: "Galerie client", type: "image" },
              { id: 4, src: galery1, alt: "Galerie client 1", type: "image" },
              { id: 5, src: galery2, alt: "Vidéo témoignage", type: "video" },
              { id: 6, src: galery3, alt: "Galerie client 3", type: "image" },
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                onClick={() => {
                  setLightboxIndex(index)
                  setLightboxOpen(true)
                }}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full"
                  >
                    <ZoomIn className="h-5 w-5 text-gray-900" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && galleryMedia[lightboxIndex] && (
          <Lightbox
            media={galleryMedia}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
            onNext={() => setLightboxIndex((prev) => (prev + 1) % galleryMedia.length)}
            onPrev={() => setLightboxIndex((prev) => (prev - 1 + galleryMedia.length) % galleryMedia.length)}
          />
        )}
      </AnimatePresence>

      {/* Section: Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2.5 bg-primary/10 rounded-full px-5 py-2 mb-6 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="h-4 w-4 text-primary fill-current" />
              <span className="font-bold text-xs uppercase tracking-wider text-primary">Témoignages</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              <span className="block mb-2">Ils</span>
              <span className="block text-primary">
                Recommandent
              </span>
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Les témoignages de notre communauté de clientes satisfaites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                  {/* Quote icon */}
                  <div className="text-primary/20 mb-6">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-current mr-1" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                    {/* Author */}
                  <div className="flex items-center gap-4">
                    {/* <div className="w-10 h-10 rounded-full overflow-hidden bg-primary p-0.5">
                      <div className="w-full h-full rounded-full bg-white">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div> */}
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: CTA Final */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkle className="h-4 w-4 text-white" />
                <span className="font-bold text-xs uppercase tracking-wider text-white">Rejoignez-nous</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                <span className="block mb-2">Prête à révéler</span>
                <span className="block text-white">
                  votre éclat
                </span>
                <span className="block mt-2">?</span>
              </h2>
              <div className="w-24 h-0.5 bg-white/50 mx-auto mb-8" />
              <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Rejoignez des milliers de femmes qui ont déjà fait le choix 
                d'une beauté naturelle d'exception
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <Link to="/produits">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-semibold text-sm rounded-xl shadow-xl hover:shadow-2xl transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4" />
                      Découvrir la collection
                    </span>
                  </Button>
                </motion.div>
              </Link>
              
              <a href="https://wa.me/+2250701781701" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="border-2 border-gray-600 text-white hover:bg-gray-800/50 hover:border-gray-400 px-6 py-3 font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Discuter avec un expert
                    </span>
                  </Button>
                </motion.div>
              </a>
            </div>
            
            {/* Garanties */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12 border-t border-gray-800">
              {[
                { icon: ShieldCheck, text: "Satisfait ou remboursé 30 jours", color: "text-emerald-400" },
                { icon: Truck, text: "Livraison offerte dès 60000 FCFA", color: "text-blue-400" },
                { icon: Shield, text: "Paiement 100% sécurisé", color: "text-purple-400" },
                { icon: Users, text: "Support premium 7j/7", color: "text-pink-400" }
              ].map((guarantee, index) => (
                <div key={index} className="flex flex-col items-center">
                  <guarantee.icon className={`h-6 w-6 mb-3 ${guarantee.color}`} />
                  <span className="text-sm text-gray-400 text-center">{guarantee.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal pour les features */}
      {activeFeature !== null && (
        <FeatureModal 
          feature={features[activeFeature]}
          onClose={() => setActiveFeature(null)}
        />
      )}
      </div>
    </>
  )
}