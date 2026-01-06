import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ShoppingBag, Star, Package, Tag, MessageCircle } from 'lucide-react'
import { Product } from '../../types'
import { useCart } from '../../contexts/CartContext'
import { useWhatsAppOrder } from '../../hooks/useWhatsAppOrder'
import { Button } from '../UI/Button'

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart()
  const { openWhatsAppOrder } = useWhatsAppOrder()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Récupérer toutes les images du produit (combiner image_url et images)
  const productImages = React.useMemo(() => {
    if (!product) return []
    
    const allImages: string[] = []
    
    // Ajouter image_url s'il existe et n'est pas vide
    if (product.image_url && product.image_url.trim()) {
      allImages.push(product.image_url.trim())
    }
    
    // Ajouter les images du tableau images
    if (product.images) {
      // Gérer le cas où images est un JSONB (string) ou un array
      let imagesArray: string[] = []
      
      if (Array.isArray(product.images)) {
        imagesArray = product.images
      } else if (typeof product.images === 'string') {
        try {
          // Si c'est une string JSON, parser
          imagesArray = JSON.parse(product.images)
        } catch {
          // Si ce n'est pas du JSON valide, traiter comme une seule URL
          imagesArray = [product.images]
        }
      }
      
      // Ajouter chaque image unique
      imagesArray.forEach((img: string) => {
        const trimmedImg = img?.trim()
        if (trimmedImg && !allImages.includes(trimmedImg)) {
          allImages.push(trimmedImg)
        }
      })
    }
    
    // S'assurer qu'on a au moins une image
    if (allImages.length === 0 && product.image_url) {
      allImages.push(product.image_url)
    }
    
    return allImages
  }, [product])

  useEffect(() => {
    if (isOpen && product) {
      setCurrentImageIndex(0)
      // Empêcher le scroll du body quand la modal est ouverte
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, product])

  // Navigation clavier
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        handlePrevious()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentImageIndex, productImages.length])

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? productImages.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === productImages.length - 1 ? 0 : prev + 1
    )
  }

  // Gestion du swipe tactile
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      handleNext()
    } else if (isRightSwipe) {
      handlePrevious()
    }
  }

  const handleAddToCart = () => {
    if (!product || !product.is_active) return
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: productImages[0],
    })
    onClose()
  }

  const handleWhatsAppOrder = () => {
    if (!product || !product.is_active) return
    
    const items = [{
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: productImages[0],
      quantity: 1
    }]
    
    const total = product.price
    
    openWhatsAppOrder(items, total)
  }

  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 sm:inset-8 md:inset-12 lg:inset-16 z-[101] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full h-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
              {/* Header avec bouton fermer */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 truncate pr-4">
                  {product.name}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                  aria-label="Fermer"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              {/* Contenu scrollable */}
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 sm:p-6">
                  {/* Section images avec swipe */}
                  <div className="relative">
                    <div
                      className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100"
                      onTouchStart={onTouchStart}
                      onTouchMove={onTouchMove}
                      onTouchEnd={onTouchEnd}
                    >
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          src={productImages[currentImageIndex]}
                          alt={`${product.name} - Image ${currentImageIndex + 1}`}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop'
                          }}
                        />
                      </AnimatePresence>

                      {/* Boutons navigation si plusieurs images */}
                      {productImages.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors z-10"
                            aria-label="Image précédente"
                          >
                            <ChevronLeft className="h-5 w-5 text-gray-700" />
                          </button>
                          <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors z-10"
                            aria-label="Image suivante"
                          >
                            <ChevronRight className="h-5 w-5 text-gray-700" />
                          </button>

                          {/* Indicateurs d'images */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {productImages.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`h-2 rounded-full transition-all ${
                                  index === currentImageIndex
                                    ? 'w-8 bg-white'
                                    : 'w-2 bg-white/50 hover:bg-white/75'
                                }`}
                                aria-label={`Aller à l'image ${index + 1}`}
                              />
                            ))}
                          </div>

                          {/* Compteur d'images */}
                          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10">
                            {currentImageIndex + 1} / {productImages.length}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Miniatures si plusieurs images */}
                    {productImages.length > 1 && (
                      <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                        {productImages.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                              index === currentImageIndex
                                ? 'border-primary scale-105'
                                : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={image}
                              alt={`Miniature ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Section détails */}
                  <div className="flex flex-col space-y-6">
                    {/* Catégories et badges */}
                    <div className="flex flex-wrap items-center gap-3">
                      {product.category && (
                        <span className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                          <Tag className="h-3 w-3 mr-1.5" />
                          {product.category.name}
                        </span>
                      )}
                      {product.sub_category && (
                        <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                          {product.sub_category.name}
                        </span>
                      )}
                      {product.is_best_seller && (
                        <span className="inline-flex items-center px-3 py-1.5 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full">
                          <Star className="h-3 w-3 mr-1.5 fill-current" />
                          Best-seller
                        </span>
                      )}
                    </div>

                    {/* Prix */}
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">
                        {product.price.toLocaleString()} FCFA
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-2">
                        <Package className="h-4 w-4" />
                       commander maintenant
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {product.description || 'Aucune description disponible.'}
                      </p>
                    </div>

                    {/* Ingrédients si disponibles */}
                    {product.ingredients && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Ingrédients</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {product.ingredients}
                        </p>
                      </div>
                    )}

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-amber-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">(5.0) - Excellent produit</span>
                    </div>

                    {/* Boutons d'action */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                      <Button
                        variant="primary"
                        onClick={handleAddToCart}
                        disabled={!product.is_active}
                        className="flex-1 flex items-center justify-center gap-2 py-4 text-base font-semibold"
                      >
                        <ShoppingBag className="h-5 w-5" />
                        {product.is_active ? 'Ajouter au panier' : 'Indisponible'}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleWhatsAppOrder}
                        disabled={!product.is_active}
                        className="flex-1 flex items-center justify-center gap-2 py-4 text-base font-semibold border-2"
                      >
                        <MessageCircle className="h-5 w-5" />
                        Commander sur WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

