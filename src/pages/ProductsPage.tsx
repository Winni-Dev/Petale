// // import React, { useState, useEffect } from 'react'
// // import { Product } from '../types'
// // import { ProductCard } from '../components/products/ProductCard'
// // import { ProductFilters } from '../components/products/ProductFilters'
// // import { productsService } from '../services/supabase'
// // import { Loader2 } from 'lucide-react'

// // export const ProductsPage: React.FC = () => {
// //   const [products, setProducts] = useState<Product[]>([])
// //   const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
// //   const [isLoading, setIsLoading] = useState(true)

// //   useEffect(() => {
// //     loadProducts()
// //   }, [])

// //   const loadProducts = async () => {
// //     try {
// //       setIsLoading(true)
// //       const data = await productsService.getAll()
// //       setProducts(data)
// //       setFilteredProducts(data)
// //     } catch (error) {
// //       console.error('Error loading products:', error)
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //   const handleFilterChange = async (categoryId?: string, subCategoryId?: string) => {
// //     try {
// //       setIsLoading(true)
      
// //       if (subCategoryId) {
// //         const data = await productsService.getBySubCategory(subCategoryId)
// //         setFilteredProducts(data)
// //       } else if (categoryId) {
// //         const data = await productsService.getByCategory(categoryId)
// //         setFilteredProducts(data)
// //       } else {
// //         const data = await productsService.getAll()
// //         setFilteredProducts(data)
// //       }
// //     } catch (error) {
// //       console.error('Error filtering products:', error)
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //   if (isLoading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <div className="text-center">
// //           <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
// //           <p className="text-gray-600">Chargement des produits...</p>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="min-h-screen py-8">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="mb-8">
// //           <h1 className="text-3xl font-bold text-secondary mb-2">
// //             Nos Produits
// //           </h1>
// //           <p className="text-gray-600">
// //             Découvrez notre collection de soins naturels
// //           </p>
// //         </div>

// //         <ProductFilters onFilterChange={handleFilterChange} />

// //         {filteredProducts.length === 0 ? (
// //           <div className="text-center py-12">
// //             <div className="text-gray-400 mb-4">
// //               <svg
// //                 className="h-16 w-16 mx-auto"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 stroke="currentColor"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={1}
// //                   d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
// //                 />
// //               </svg>
// //             </div>
// //             <h3 className="text-xl font-semibold text-gray-600 mb-2">
// //               Aucun produit trouvé
// //             </h3>
// //             <p className="text-gray-500">
// //               Essayez de modifier vos filtres de recherche
// //             </p>
// //           </div>
// //         ) : (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //             {filteredProducts.map((product) => (
// //               <ProductCard key={product.id} product={product} />
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   )
// // }


// // import React, { useState, useEffect } from 'react'
// // import { ProductCard } from '../components/products/ProductCard'
// // import { ProductFilters } from '../components/products/ProductFilters'
// // import { Product, Category, SubCategory } from '../types'
// // import { productsService } from '../services/supabase'
// // import { Loader2, Filter } from 'lucide-react'
// // import { useSearchParams } from 'react-router-dom'

// // export const ProductsPage: React.FC = () => {
// //   const [products, setProducts] = useState<Product[]>([])
// //   const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
// //   const [isLoading, setIsLoading] = useState(true)
// //   const [searchParams] = useSearchParams()
  
// //   // Récupérer les filtres depuis l'URL
// //   const categoryParam = searchParams.get('category')
// //   const subCategoryParam = searchParams.get('subCategory')

// //   useEffect(() => {
// //     loadProducts()
// //   }, [])

// //   // Appliquer les filtres au chargement si présents dans l'URL
// //   useEffect(() => {
// //     if (products.length > 0 && (categoryParam || subCategoryParam)) {
// //       applyFiltersFromURL()
// //     }
// //   }, [products, categoryParam, subCategoryParam])

// //   const loadProducts = async () => {
// //     try {
// //       setIsLoading(true)
// //       const data = await productsService.getAll()
// //       setProducts(data)
// //       setFilteredProducts(data)
// //       console.log('📦 Produits chargés:', data.length)
// //     } catch (error) {
// //       console.error('Error loading products:', error)
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //   const applyFiltersFromURL = async () => {
// //     try {
// //       setIsLoading(true)
// //       let data: Product[] = []
      
// //       if (subCategoryParam) {
// //         // Filtrer par sous-catégorie
// //         data = await productsService.getBySubCategory(subCategoryParam)
// //       } else if (categoryParam) {
// //         // Trouver l'ID de la catégorie depuis son slug
// //         const categories = await productsService.getCategories()
// //         const category = categories.find(c => c.slug === categoryParam)
        
// //         if (category) {
// //           data = await productsService.getByCategory(category.id)
// //         } else {
// //           data = await productsService.getAll()
// //         }
// //       }
      
// //       setFilteredProducts(data)
// //       console.log('🔍 Filtres URL appliqués:', { categoryParam, subCategoryParam, results: data.length })
// //     } catch (error) {
// //       console.error('Error applying filters from URL:', error)
// //       setFilteredProducts(products)
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //   const handleFilterChange = async (categoryId?: string, subCategoryId?: string) => {
// //     try {
// //       setIsLoading(true)
// //       console.log('🎛️ Changement de filtre:', { categoryId, subCategoryId })
      
// //       let data: Product[] = []
      
// //       if (subCategoryId) {
// //         // Filtrer par sous-catégorie
// //         data = await productsService.getBySubCategory(subCategoryId)
// //       } else if (categoryId) {
// //         // Filtrer par catégorie
// //         data = await productsService.getByCategory(categoryId)
// //       } else {
// //         // Aucun filtre - tous les produits
// //         data = await productsService.getAll()
// //       }
      
// //       setFilteredProducts(data)
// //       console.log(`✅ ${data.length} produits après filtrage`)
      
// //     } catch (error) {
// //       console.error('Error filtering products:', error)
// //       setFilteredProducts(products)
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //   const handleClearFilters = () => {
// //     setFilteredProducts(products)
// //   }

// //   if (isLoading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <div className="text-center">
// //           <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
// //           <p className="text-gray-600">Chargement des produits...</p>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="min-h-screen py-8">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="mb-8">
// //           <h1 className="text-3xl font-bold text-secondary mb-2">
// //             Nos Produits
// //           </h1>
// //           <p className="text-gray-600">
// //             Découvrez notre collection de soins naturels
// //           </p>
// //         </div>

// //         <ProductFilters onFilterChange={handleFilterChange} />

// //         {/* Info sur les filtres */}
// //         {filteredProducts.length !== products.length && (
// //           <div className="mb-6 p-4 bg-primary/10 rounded-lg flex items-center justify-between">
// //             <div className="flex items-center">
// //               <Filter className="h-5 w-5 text-primary mr-2" />
// //               <span className="text-primary font-medium">
// //                 Filtres appliqués
// //               </span>
// //             </div>
// //             <button
// //               onClick={handleClearFilters}
// //               className="text-sm text-gray-600 hover:text-primary hover:underline"
// //             >
// //               Effacer tous les filtres
// //             </button>
// //           </div>
// //         )}

// //         {filteredProducts.length === 0 ? (
// //           <div className="text-center py-12">
// //             <div className="text-gray-400 mb-4">
// //               <svg
// //                 className="h-16 w-16 mx-auto"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 stroke="currentColor"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={1}
// //                   d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
// //                 />
// //               </svg>
// //             </div>
// //             <h3 className="text-xl font-semibold text-gray-600 mb-2">
// //               Aucun produit trouvé
// //             </h3>
// //             <p className="text-gray-500 mb-4">
// //               Essayez de modifier vos filtres de recherche
// //             </p>
// //             <button
// //               onClick={handleClearFilters}
// //               className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
// //             >
// //               Voir tous les produits
// //             </button>
// //           </div>
// //         ) : (
// //           <>
// //             <div className="mb-4 text-sm text-gray-600">
// //               <span className="font-medium">{filteredProducts.length}</span> produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
// //             </div>
            
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //               {filteredProducts.map((product) => (
// //                 <ProductCard key={product.id} product={product} />
// //               ))}
// //             </div>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   )
// // }



// import React, { useState, useEffect } from 'react'
// import { ProductCard } from '../components/products/ProductCard'
// import { ProductFilters } from '../components/products/ProductFilters'
// import { Product } from '../types'
// import { productsService } from '../services/supabase'
// import { Loader2, Filter, Search, X } from 'lucide-react'
// import { useSearchParams } from 'react-router-dom'

// export const ProductsPage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([])
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [searchQuery, setSearchQuery] = useState('')
//   const [searchParams, setSearchParams] = useSearchParams()
  
//   // Récupérer les filtres depuis l'URL
//   const categoryId = searchParams.get('categoryId')
//   const subCategoryId = searchParams.get('subCategoryId')

//   useEffect(() => {
//     loadProducts()
//   }, [])

//   // Appliquer les filtres initiaux
//   useEffect(() => {
//     if (products.length > 0) {
//       applyInitialFilters()
//     }
//   }, [products])

//   const loadProducts = async () => {
//     try {
//       setIsLoading(true)
//       console.log('📦 Chargement des produits...')
//       const data = await productsService.getAll(true)
//       console.log('✅ Produits chargés:', data.length)
//       setProducts(data)
//       setFilteredProducts(data)
//     } catch (error) {
//       console.error('❌ Erreur chargement produits:', error)
//       setProducts([])
//       setFilteredProducts([])
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const applyInitialFilters = async () => {
//     try {
//       console.log('🔍 Application filtres initiaux:', { categoryId, subCategoryId })
      
//       let data: Product[] = []
      
//       if (subCategoryId) {
//         data = await productsService.getBySubCategory(subCategoryId, true)
//       } else if (categoryId) {
//         data = await productsService.getByCategory(categoryId, true)
//       } else {
//         data = products
//       }
      
//       // Filtrer par recherche si applicable
//       if (searchQuery.trim()) {
//         data = filterBySearch(data, searchQuery)
//       }
      
//       setFilteredProducts(data)
//       console.log(`✅ ${data.length} produits après filtrage initial`)
//     } catch (error) {
//       console.error('❌ Erreur filtrage initial:', error)
//       setFilteredProducts(products)
//     }
//   }

//   const handleFilterChange = async (categoryId?: string, subCategoryId?: string) => {
//     try {
//       setIsLoading(true)
//       console.log('🎛️ Changement filtre:', { categoryId, subCategoryId })
      
//       // Mettre à jour l'URL
//       const params = new URLSearchParams()
//       if (categoryId) params.set('categoryId', categoryId)
//       if (subCategoryId) params.set('subCategoryId', subCategoryId)
//       setSearchParams(params)
      
//       let data: Product[] = []
      
//       if (subCategoryId) {
//         data = await productsService.getBySubCategory(subCategoryId, true)
//       } else if (categoryId) {
//         data = await productsService.getByCategory(categoryId, true)
//       } else {
//         data = await productsService.getAll(true)
//       }
      
//       // Filtrer par recherche si applicable
//       if (searchQuery.trim()) {
//         data = filterBySearch(data, searchQuery)
//       }
      
//       setFilteredProducts(data)
//       console.log(`✅ ${data.length} produits après filtrage`)
      
//     } catch (error) {
//       console.error('❌ Erreur filtrage:', error)
//       setFilteredProducts(products)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const filterBySearch = (productsList: Product[], query: string): Product[] => {
//     const searchLower = query.toLowerCase().trim()
//     return productsList.filter(product => 
//       product.name.toLowerCase().includes(searchLower) ||
//       product.description?.toLowerCase().includes(searchLower) ||
//       product.category?.name.toLowerCase().includes(searchLower) ||
//       product.sub_category?.name.toLowerCase().includes(searchLower)
//     )
//   }

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const query = e.target.value
//     setSearchQuery(query)
    
//     if (!query.trim()) {
//       // Si recherche vide, appliquer les filtres actuels
//       applyCurrentFilters()
//     } else {
//       // Filtrer les produits actuels par recherche
//       const filtered = filterBySearch(filteredProducts, query)
//       setFilteredProducts(filtered)
//     }
//   }

//   const applyCurrentFilters = async () => {
//     try {
//       setIsLoading(true)
      
//       let data: Product[] = []
      
//       if (subCategoryId) {
//         data = await productsService.getBySubCategory(subCategoryId)
//       } else if (categoryId) {
//         data = await productsService.getByCategory(categoryId)
//       } else {
//         data = await productsService.getAll()
//       }
      
//       setFilteredProducts(data)
//     } catch (error) {
//       console.error('Erreur application filtres:', error)
//       setFilteredProducts(products)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleClearFilters = () => {
//     setSearchQuery('')
//     setSearchParams({})
//     setFilteredProducts(products)
//   }

//   const handleClearSearch = () => {
//     setSearchQuery('')
//     applyCurrentFilters()
//   }

//   // Vérifier si des filtres sont actifs
//   const hasActiveFilters = !!categoryId || !!subCategoryId || !!searchQuery.trim()

//   if (isLoading && products.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
//           <p className="text-gray-600">Chargement des produits...</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-secondary mb-2">
//             Nos Produits
//           </h1>
//           <p className="text-gray-600">
//             Découvrez notre collection de soins naturels
//           </p>
//         </div>

//         {/* Barre de recherche */}
//         <div className="mb-6 relative">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={handleSearch}
//               placeholder="Rechercher un produit..."
//               className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//             />
//             {searchQuery && (
//               <button
//                 onClick={handleClearSearch}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Filtres */}
//         <ProductFilters onFilterChange={handleFilterChange} />

//         {/* Info filtres actifs */}
//         {hasActiveFilters && (
//           <div className="mb-6 p-4 bg-primary/10 rounded-lg flex items-center justify-between">
//             <div className="flex items-center">
//               <Filter className="h-5 w-5 text-primary mr-2" />
//               <span className="text-primary font-medium">
//                 Filtres actifs
//                 {searchQuery && ` • Recherche: "${searchQuery}"`}
//               </span>
//             </div>
//             <button
//               onClick={handleClearFilters}
//               className="text-sm text-gray-600 hover:text-primary hover:underline flex items-center"
//             >
//               <X className="h-4 w-4 mr-1" />
//               Effacer tous les filtres
//             </button>
//           </div>
//         )}

//         {/* Résultats */}
//         <div className="mb-4 flex items-center justify-between">
//           <div className="text-sm text-gray-600">
//             <span className="font-medium">{filteredProducts.length}</span> produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
//           </div>
          
//           {isLoading && filteredProducts.length > 0 && (
//             <div className="flex items-center text-sm text-gray-500">
//               <Loader2 className="h-4 w-4 animate-spin mr-2" />
//               Mise à jour...
//             </div>
//           )}
//         </div>

//         {filteredProducts.length === 0 ? (
//           <div className="text-center py-12">
//             <div className="text-gray-400 mb-4">
//               <svg
//                 className="h-16 w-16 mx-auto"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1}
//                   d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
//                 />
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-600 mb-2">
//               Aucun produit trouvé
//             </h3>
//             <p className="text-gray-500 mb-4 max-w-md mx-auto">
//               {hasActiveFilters
//                 ? "Aucun produit ne correspond à vos critères de recherche."
//                 : "Aucun produit disponible pour le moment."}
//             </p>
//             {hasActiveFilters && (
//               <button
//                 onClick={handleClearFilters}
//                 className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
//               >
//                 Voir tous les produits
//               </button>
//             )}
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProductCard } from '../components/products/ProductCard'
import { ProductModal } from '../components/products/ProductModal'
import { ProductFilters } from '../components/products/ProductFilters'
import { Product } from '../types'
import { productsService } from '../services/supabase'
import { SEO } from '../components/SEO/SEO'
import { 
  Loader2, 
  Filter, 
  Search, 
  X, 
  Grid, 
  List, 
  Sparkles,
  SlidersHorizontal,
  ChevronDown,
  Star,
  TrendingUp
} from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

export const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  
  // Récupérer les filtres depuis l'URL
  const categoryId = searchParams.get('categoryId')
  const subCategoryId = searchParams.get('subCategoryId')


  useEffect(() => {
    loadProducts()
  }, [])

  // Appliquer les filtres initiaux
  useEffect(() => {
    if (products.length > 0) {
      applyInitialFilters()
    }
  }, [products])

  const loadProducts = async () => {
    try {
      setIsLoading(true)
      console.log('📦 Chargement des produits...')
      const data = await productsService.getAll(true)
      console.log('✅ Produits chargés:', data.length)
      
      // Ajouter des images Unsplash si non disponibles
      const enhancedProducts = data.map(product => ({
        ...product,
        image_url: product.image_url || getRandomProductImage()
      }))
      
      setProducts(enhancedProducts)
      setFilteredProducts(enhancedProducts)
    } catch (error) {
      console.error('❌ Erreur chargement produits:', error)
      setProducts([])
      setFilteredProducts([])
    } finally {
      setIsLoading(false)
    }
  }

  const getRandomProductImage = () => {
    const productImages = [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556228578-9c360e2d0b4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ]
    return productImages[Math.floor(Math.random() * productImages.length)]
  }

  const applyInitialFilters = async () => {
    try {
      console.log('🔍 Application filtres initiaux:', { categoryId, subCategoryId })
      
      let data: Product[] = []
      
      if (subCategoryId) {
        data = await productsService.getBySubCategory(subCategoryId, true)
      } else if (categoryId) {
        data = await productsService.getByCategory(categoryId, true)
      } else {
        data = products
      }
      
      // Filtrer par recherche si applicable
      if (searchQuery.trim()) {
        data = filterBySearch(data, searchQuery)
      }
      
      setFilteredProducts(data)
      console.log(`✅ ${data.length} produits après filtrage initial`)
    } catch (error) {
      console.error('❌ Erreur filtrage initial:', error)
      setFilteredProducts(products)
    }
  }

  const handleFilterChange = async (categoryId?: string, subCategoryId?: string) => {
    try {
      setIsLoading(true)
      console.log('🎛️ Changement filtre:', { categoryId, subCategoryId })
      
      // Mettre à jour l'URL
      const params = new URLSearchParams()
      if (categoryId) params.set('categoryId', categoryId)
      if (subCategoryId) params.set('subCategoryId', subCategoryId)
      setSearchParams(params)
      
      let data: Product[] = []
      
      if (subCategoryId) {
        data = await productsService.getBySubCategory(subCategoryId, true)
      } else if (categoryId) {
        data = await productsService.getByCategory(categoryId, true)
      } else {
        data = await productsService.getAll(true)
      }
      
      // Filtrer par recherche si applicable
      if (searchQuery.trim()) {
        data = filterBySearch(data, searchQuery)
      }
      
      setFilteredProducts(data)
      console.log(`✅ ${data.length} produits après filtrage`)
      
    } catch (error) {
      console.error('❌ Erreur filtrage:', error)
      setFilteredProducts(products)
    } finally {
      setIsLoading(false)
    }
  }

  const filterBySearch = (productsList: Product[], query: string): Product[] => {
    const searchLower = query.toLowerCase().trim()
    return productsList.filter(product => 
      product.name.toLowerCase().includes(searchLower) ||
      product.description?.toLowerCase().includes(searchLower) ||
      product.category?.name.toLowerCase().includes(searchLower) ||
      product.sub_category?.name.toLowerCase().includes(searchLower) ||
      (product.ingredients || '').toLowerCase().includes(searchLower)
    )
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    
    if (!query.trim()) {
      // Si recherche vide, appliquer les filtres actuels
      applyCurrentFilters()
    } else {
      // Filtrer les produits actuels par recherche
      const filtered = filterBySearch(products, query)
      setFilteredProducts(filtered)
    }
  }

  const applyCurrentFilters = async () => {
    try {
      setIsLoading(true)
      
      let data: Product[] = []
      
      if (subCategoryId) {
        data = await productsService.getBySubCategory(subCategoryId, true)
      } else if (categoryId) {
        data = await productsService.getByCategory(categoryId, true)
      } else {
        data = await productsService.getAll(true)
      }
      
      setFilteredProducts(data)
    } catch (error) {
      console.error('Erreur application filtres:', error)
      setFilteredProducts(products)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClearFilters = () => {
    setSearchQuery('')
    setSearchParams({})
    setFilteredProducts(products)
    setShowFilters(false)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    applyCurrentFilters()
  }

  // Obtenir les meilleures ventes (exemple)
  const bestSellers = filteredProducts.filter(p => p.is_best_seller === true).slice(0, 3)

  // Vérifier si des filtres sont actifs
  const hasActiveFilters = !!categoryId || !!subCategoryId || !!searchQuery.trim()

  if (isLoading && products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <Loader2 className="h-16 w-16 text-primary mx-auto mb-6" />
          </motion.div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Chargement de nos produits
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Préparation de notre collection exclusive pour vous...
          </p>
        </div>
      </div>
    )
  }

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const categoryName = categoryId ? products.find(p => p.category_id === categoryId)?.category?.name : ''
  const subCategoryName = subCategoryId ? products.find(p => p.sub_category_id === subCategoryId)?.sub_category?.name : ''

  return (
    <>
      <SEO
        title={`${categoryName || subCategoryName || 'Tous les produits'} - Petale | Cosmétiques bio et soins naturels`}
        description={`Découvrez notre sélection de ${categoryName || subCategoryName || 'produits cosmétiques bio'}. Des soins naturels et cosmétiques bio de qualité premium pour votre beauté. Livraison rapide en Côte d'Ivoire. ${filteredProducts.length > 0 ? `${filteredProducts.length} produit${filteredProducts.length > 1 ? 's' : ''} disponible${filteredProducts.length > 1 ? 's' : ''}.` : ''}`}
        keywords={`${categoryName || subCategoryName || 'cosmétiques bio'}, soins naturels, produits beauté, cosmétiques Côte d'Ivoire, soins visage, soins corps, produits bio, beauté naturelle`}
        url={`${baseUrl}/produits${categoryId ? `?categoryId=${categoryId}` : ''}${subCategoryId ? `&subCategoryId=${subCategoryId}` : ''}`}
      />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 py-12 lg:py-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-gray-800">
                ✨ Nouvelle collection Printemps 2024
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Notre{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  collection
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full" />
              </span>{' '}
              exclusive
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Découvrez des soins 100% naturels, formulés avec amour et expertise pour sublimer votre beauté
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Barre de contrôle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-white rounded-2xl shadow-lg p-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Barre de recherche */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Rechercher un produit, un ingrédient..."
                  className="w-full pl-12 pr-12 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-primary/20 focus:border-primary bg-gray-50/50"
                />
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Contrôles */}
            <div className="flex items-center gap-4">
              {/* Bouton filtre mobile */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition"
              >
                <SlidersHorizontal className="h-5 w-5" />
                <span>Filtres</span>
                {hasActiveFilters && (
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                )}
              </button>

              {/* Mode d'affichage */}
              <div className="hidden lg:flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 rounded-lg transition ${viewMode === 'grid' ? 'bg-white shadow' : 'hover:bg-white/50'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 rounded-lg transition ${viewMode === 'list' ? 'bg-white shadow' : 'hover:bg-white/50'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              {/* Clear filters */}
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:text-primary transition-colors"
                >
                  <X className="h-5 w-5" />
                  <span className="hidden sm:inline">Effacer</span>
                </button>
              )}
            </div>
          </div>

          {/* Filtres mobile */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-6 overflow-hidden"
              >
                <ProductFilters onFilterChange={handleFilterChange} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filtres (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/4"
          >
            <div className="hidden lg:block bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Filter className="h-5 w-5 text-primary" />
                  Filtres
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={handleClearFilters}
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Réinitialiser
                  </button>
                )}
              </div>
              
              <ProductFilters onFilterChange={handleFilterChange} />
              
              {/* Meilleures ventes */}
              {bestSellers.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Best-sellers
                  </h4>
                  <div className="space-y-3">
                    {bestSellers.map((product) => (
                      <div key={product.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                          <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm text-gray-900">{product.name}</div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-amber-400 fill-current" />
                            <span className="text-xs text-gray-500">Best-seller</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Contenu principal */}
          <div className="lg:w-3/4">
            {/* En-tête résultats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {hasActiveFilters ? 'Produits filtrés' : 'Tous nos produits'}
                  </h2>
                  <p className="text-gray-600">
                    <span className="font-semibold text-primary">{filteredProducts.length}</span> produit{filteredProducts.length > 1 ? 's' : ''} disponible{filteredProducts.length > 1 ? 's' : ''}
                  </p>
                </div>
                
                {isLoading && (
                  <div className="flex items-center text-sm text-gray-500">
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Mise à jour...
                  </div>
                )}
              </div>

              {/* Catégorie active */}
              {(categoryId || subCategoryId) && (
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <ChevronDown className="h-4 w-4" />
                  <span>
                    {categoryId ? `Catégorie: ${categoryId}` : ''}
                    {subCategoryId ? ` > Sous-catégorie: ${subCategoryId}` : ''}
                  </span>
                </div>
              )}
            </motion.div>

            {/* Liste des produits */}
            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 bg-white rounded-2xl shadow-lg"
              >
                <div className="text-gray-300 mb-6">
                  <svg className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Aucun produit trouvé
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  {hasActiveFilters
                    ? "Aucun produit ne correspond à vos critères de recherche. Essayez d'ajuster vos filtres."
                    : "Notre collection sera bientôt disponible !"}
                </p>
                {hasActiveFilters && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClearFilters}
                    className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-lg transition-all font-semibold"
                  >
                    Voir tous les produits
                  </motion.button>
                )}
              </motion.div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={viewMode + filteredProducts.length}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={viewMode === 'grid' 
                    ? "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "space-y-6"
                  }
                >
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <ProductCard 
                        product={product} 
                        viewMode={viewMode}
                        onProductClick={setSelectedProduct}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}

            {/* Bannière CTA */}
            {filteredProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center"
              >
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Besoin d'aide pour choisir ?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Nos experts sont disponibles pour vous conseiller gratuitement
                  </p>
                  <a
                    href="https://wa.me/+2250701781701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-lg transition-all font-semibold"
                  >
                    <WhatsAppIcon />
                    Discuter avec un expert
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Modal produit */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      </div>
    </>
  )
}

// WhatsApp Icon Component
const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-5.46-4.45-9.91-9.91-9.91m5.15 13.46c-.25.73-1.27 1.34-1.79 1.41c-.51.08-1.18.09-2.28-.37c-1.39-.58-2.4-2.03-3.1-2.99c-.7-.96-1.48-2.67-1.48-2.67s-.72-1.44.04-1.99c.38-.28.84-.37 1.28-.37c.43 0 .87.01 1.28.06c.41.05.96.19 1.35.87c.39.67 1.34 2.31 1.46 2.48c.12.17.24.41.06.65c-.18.24-.28.37-.56.57c-.28.2-.54.28-.78.41c-.24.13-.51.28-.22.55c.29.27 1.27 1.19 2.76 1.65c1.49.46 1.49.31 1.76.26c.27-.05 1.11-.45 1.27-.89c.16-.44.16-.82.11-.89c-.05-.07-.22-.13-.47-.24z"/>
  </svg>
)