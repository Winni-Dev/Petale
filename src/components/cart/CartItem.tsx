// import React from 'react'
// import { Trash2, Plus, Minus } from 'lucide-react'
// import { CartItem as CartItemType } from '../../types'
// import { useCart } from '../../contexts/CartContext'

// interface CartItemProps {
//   item: CartItemType
// }

// export const CartItem: React.FC<CartItemProps> = ({ item }) => {
//   const { updateQuantity, removeFromCart } = useCart()

//   const handleIncrement = () => {
//     updateQuantity(item.id, item.quantity + 1)
//   }

//   const handleDecrement = () => {
//     if (item.quantity > 1) {
//       updateQuantity(item.id, item.quantity - 1)
//     } else {
//       removeFromCart(item.id)
//     }
//   }

//   const subtotal = item.price * item.quantity

//   return (
//     <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border">
//       <div className="flex-shrink-0">
//         <img
//           src={item.image_url}
//           alt={item.name}
//           className="w-20 h-20 object-cover rounded-lg"
//         />
//       </div>
      
//       <div className="flex-1">
//         <h3 className="font-medium text-gray-800">{item.name}</h3>
//         <p className="text-primary font-semibold">
//           {item.price.toLocaleString()} FCFA
//         </p>
//       </div>
      
//       <div className="flex items-center space-x-3">
//         <div className="flex items-center space-x-2">
//           <button
//             onClick={handleDecrement}
//             className="p-1 rounded-full hover:bg-gray-100"
//             aria-label="Diminuer la quantité"
//           >
//             <Minus className="h-4 w-4" />
//           </button>
          
//           <span className="w-8 text-center font-medium">
//             {item.quantity}
//           </span>
          
//           <button
//             onClick={handleIncrement}
//             className="p-1 rounded-full hover:bg-gray-100"
//             aria-label="Augmenter la quantité"
//           >
//             <Plus className="h-4 w-4" />
//           </button>
//         </div>
        
//         <span className="font-bold text-secondary min-w-24 text-right">
//           {subtotal.toLocaleString()} FCFA
//         </span>
        
//         <button
//           onClick={() => removeFromCart(item.id)}
//           className="p-2 text-red-500 hover:bg-red-50 rounded-full"
//           aria-label="Supprimer l'article"
//         >
//           <Trash2 className="h-5 w-5" />
//         </button>
//       </div>
//     </div>
//   )
// }


import React from 'react'
import { motion } from 'framer-motion'
import { Trash2, Plus, Minus, Sparkles } from 'lucide-react'
import { CartItem as CartItemType } from '../../types'
import { useCart } from '../../contexts/CartContext'

interface CartItemProps {
  item: CartItemType
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart()

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1)
  }

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1)
    } else {
      removeFromCart(item.id)
    }
  }

  const subtotal = item.price * item.quantity

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all overflow-hidden"
    >
      <div className="p-4">
        {/* Première ligne : Image et infos produit */}
        <div className="flex items-start gap-4 mb-4">
          {/* Image du produit */}
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
              <img
                src={item.image_url}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                }}
              />
            </div>
            {item.category === 'coffrets' && (
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
                <div className="p-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
              </div>
            )}
          </div>
          
          {/* Informations du produit */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight group-hover:text-primary transition-colors">
              {item.name}
            </h3>
            
            {item.category && (
              <div className="inline-flex items-center px-2 py-1 mt-2 bg-gray-100 rounded-lg">
                <span className="text-xs font-medium text-gray-600">
                  {item.category}
                </span>
              </div>
            )}
            
            <div className="mt-3">
              <span className="text-base sm:text-lg font-bold text-primary">
                {item.price.toLocaleString()} FCFA
              </span>
              <span className="text-xs sm:text-sm text-gray-500 ml-2">
                l'unité
              </span>
            </div>
          </div>
        </div>

        {/* Deuxième ligne : Contrôle de quantité */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 font-medium">Quantité :</span>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handleDecrement}
                className="p-2 sm:p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors"
                aria-label="Diminuer la quantité"
              >
                <Minus className="h-3 w-3 sm:h-4 sm:w-4 text-gray-700" />
              </button>
              
              <div className="min-w-10 sm:min-w-12 text-center">
                <span className="text-lg sm:text-xl font-bold text-gray-900">
                  {item.quantity}
                </span>
                <div className="hidden sm:block text-xs text-gray-500 mt-1">
                  {item.quantity > 1 ? 'articles' : 'article'}
                </div>
              </div>
              
              <button
                onClick={handleIncrement}
                className="p-2 sm:p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 active:bg-primary/30 transition-colors"
                aria-label="Augmenter la quantité"
              >
                <Plus className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              </button>
            </div>
          </div>
          
          {/* Bouton suppression visible sur mobile */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="sm:hidden p-2 text-red-500 hover:bg-red-50 active:bg-red-100 rounded-xl transition-all"
            aria-label="Supprimer l'article"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>

        {/* Troisième ligne : Sous-total et actions desktop */}
        <div className="flex items-center justify-between">
          <div className="text-left">
            <div className="text-xs sm:text-sm text-gray-500 mb-1">Sous-total</div>
            <div className="text-lg sm:text-xl font-bold text-gray-900">
              {subtotal.toLocaleString()} FCFA
            </div>
          </div>
          
          {/* Bouton suppression desktop */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 text-red-600 hover:text-red-700 hover:bg-red-50 active:bg-red-100 rounded-xl transition-all group/delete"
            aria-label="Supprimer l'article"
          >
            <Trash2 className="h-4 w-4 group-hover/delete:scale-110 transition-transform" />
            <span className="font-medium">Supprimer</span>
          </button>
          
          {/* Bouton suppression mobile (version texte) */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="sm:hidden text-red-600 hover:text-red-700 text-sm font-medium py-2 px-3 hover:bg-red-50 rounded-lg transition-colors"
            aria-label="Supprimer l'article"
          >
            Supprimer
          </button>
        </div>
      </div>
    </motion.div>
  )
}