// import React from 'react'
// import { ShoppingCart } from 'lucide-react'
// import { Product } from '../../types'
// import { useCart } from '../../contexts/CartContext'
// import { Button } from '../UI/Button'

// interface ProductCardProps {
//   product: Product
// }

// export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const { addToCart } = useCart()

//   const handleAddToCart = () => {
//     if (!product.is_active) {
//       // Prevent adding disabled products
//       return
//     }

//     addToCart({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image_url: product.image_url,
//     })
//   }

//   return (
//     <div className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
//       <div className="aspect-square overflow-hidden">
//         <img
//           src={product.image_url}
//           alt={product.name}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           loading="lazy"
//         />
//       </div>
      
//       <div className="p-4">
//         {!product.is_active && (
//           <div className="absolute inset-0 bg-white/70 z-10 flex items-center justify-center pointer-events-none">
//             <span className="text-sm font-semibold text-gray-600">Désactivé</span>
//           </div>
//         )}
//         <div className="mb-2">
//           <span className="inline-block px-2 py-1 text-xs font-semibold text-secondary bg-secondary/10 rounded">
//             {product.category?.name}
//           </span>
//         </div>
        
//         <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
//           {product.name}
//         </h3>
        
//         <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//           {product.description}
//         </p>
        
//         <div className="flex items-center justify-between">
//           <span className="text-xl font-bold text-primary">
//             {product.price.toLocaleString()} FCFA
//           </span>
          
//           <Button
//             variant={product.is_active ? "primary" : "outline"}
//             size="sm"
//             onClick={handleAddToCart}
//             className="flex items-center space-x-2"
//             disabled={!product.is_active}
//           >
//             <ShoppingCart className="h-4 w-4" />
//             <span>{product.is_active ? 'Ajouter' : 'Indisponible'}</span>
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }


import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Sparkles, Tag, EyeOff, Star } from 'lucide-react'
import { Product } from '../../types'
import { useCart } from '../../contexts/CartContext'
import { Button } from '../UI/Button'

interface ProductCardProps {
  product: Product
  viewMode?: 'grid' | 'list'
  onProductClick?: (product: Product) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid', onProductClick }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    if (!product.is_active) return
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
    })
  }

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="group flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
      >
        {/* Image du produit */}
        <div className="relative flex-shrink-0">
          <div className="w-32 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop'
              }}
            />
          </div>
          {!product.is_active && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <div className="text-center">
                <EyeOff className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <span className="text-sm font-semibold text-gray-600">Indisponible</span>
              </div>
            </div>
          )}
        </div>

        {/* Contenu */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold rounded-full">
                  <Tag className="h-3 w-3 mr-1" />
                  {product.category?.name}
                </span>
                {product.sub_category && (
                  <span className="text-sm text-gray-500">
                    {product.sub_category.name}
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3">
                {product.name}
              </h3>
              
              <p className="text-gray-600 line-clamp-2 mb-4">
                {product.description || 'Produit de qualité Petal'}
              </p>
            </div>
            
            <div className="text-right flex-shrink-0">
              <div className="text-2xl font-bold text-primary mb-4">
                {product.price.toLocaleString()} FCFA
              </div>
              
              <Button
                variant={product.is_active ? "primary" : "outline"}
                onClick={handleAddToCart}
                className="group/btn relative overflow-hidden"
                disabled={!product.is_active}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  {product.is_active ? 'Ajouter au panier' : 'Indisponible'}
                </span>
                {product.is_active && (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                      />
                    )}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Mode grille (par défaut)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
      onClick={() => onProductClick?.(product)}
    >
      {/* Badges */}
        <div className="absolute top-4 left-4 z-10 space-y-2">
        {!product.is_active && (
          <div className="inline-flex items-center px-3 py-1.5 bg-gray-800/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
            <EyeOff className="h-3 w-3 mr-1" />
            Indisponible
          </div>
        )}
        <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold rounded-full shadow-lg">
          <Tag className="h-3 w-3 mr-1" />
          {product.category?.name}
        </div>
      </div>

      {/* Image du produit */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.img
          src={product.images && product.images.length > 0 ? product.images[0] : product.image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop'
          }}
        />
        
        {/* Overlay au survol */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Bouton quick view */}
        {product.is_active && (
          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-2.5 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:bg-white transition-colors">
              <Sparkles className="h-4 w-4 text-gray-700" />
            </button>
          </div>
        )}
      </div>
      
      {/* Contenu */}
      <div className="p-3 sm:p-5">
        {/* Titre et description */}
        <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        {/* Description - visible sur mobile avec taille réduite */}
        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4 line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]">
          {product.description || 'Découvrez ce produit naturel de qualité'}
        </p>
        
        {/* Sous-catégorie et rating - visibles sur mobile mais compacts */}
        <div className="flex items-center justify-between mb-2 sm:mb-4">
          {product.sub_category && (
            <span className="text-[10px] sm:text-xs font-medium text-gray-500 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 rounded sm:rounded-lg">
              {product.sub_category.name}
            </span>
          )}
          
          {/* Rating - visible sur mobile mais simplifié */}
          <div className="flex items-center gap-0.5 sm:gap-1">
            <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-400 fill-current" />
            <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-400 fill-current" />
            <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-400 fill-current" />
            <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-400 fill-current" />
            <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-400 fill-current" />
            <span className="text-[10px] sm:text-xs text-gray-500 ml-0.5 sm:ml-1">(5.0)</span>
          </div>
        </div>
        
        {/* Prix et bouton */}
        <div className="flex items-center justify-between pt-2 sm:pt-4 border-t border-gray-100">
          <div className="flex-1 min-w-0">
            <div className="text-base sm:text-2xl font-bold text-primary">
              {product.price.toLocaleString()} FCFA
            </div>
            {/* Livraison incluse - visible sur mobile avec texte petit */}
            <div className="text-[10px] sm:text-xs text-gray-500">commander maintenant</div>
          </div>
          
          <Button
            variant={product.is_active ? "primary" : "outline"}
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              handleAddToCart()
            }}
            className="group/btn relative overflow-hidden px-2.5 sm:px-5 py-1.5 sm:py-2.5 text-[10px] sm:text-sm ml-2 flex-shrink-0"
            disabled={!product.is_active}
          >
            <span className="relative z-10 flex items-center gap-1 sm:gap-2">
              <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="font-semibold text-[10px] sm:text-sm">
                {product.is_active ? 'Ajouter' : 'Indisponible'}
              </span>
            </span>
            {product.is_active && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
              />
            )}
          </Button>
        </div>
      </div>

      {/* Effet de bordure au survol */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl pointer-events-none transition-colors duration-300" />
    </motion.div>
  )
}
