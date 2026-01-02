// import React, { useState, useEffect } from 'react'
// import { ChevronDown } from 'lucide-react'
// import { productsService } from '../../services/supabase'
// import { Category, SubCategory } from '../../types'

// interface ProductFiltersProps {
//   onFilterChange: (categoryId?: string, subCategoryId?: string) => void
// }

// export const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilterChange }) => {
//   const [categories, setCategories] = useState<Category[]>([])
//   const [subCategories, setSubCategories] = useState<SubCategory[]>([])
//   const [selectedCategory, setSelectedCategory] = useState<string>('')
//   const [selectedSubCategory, setSelectedSubCategory] = useState<string>('')

//   useEffect(() => {
//     loadCategories()
//   }, [])

//   useEffect(() => {
//     if (selectedCategory) {
//       loadSubCategories(selectedCategory)
//       setSelectedSubCategory('')
//     } else {
//       setSubCategories([])
//     }
//   }, [selectedCategory])

//   const loadCategories = async () => {
//     try {
//       const data = await productsService.getCategories()
//       setCategories(data)
//     } catch (error) {
//       console.error('Error loading categories:', error)
//     }
//   }

//   const loadSubCategories = async (categoryId: string) => {
//     try {
//       const data = await productsService.getSubCategories(categoryId)
//       setSubCategories(data)
//     } catch (error) {
//       console.error('Error loading sub-categories:', error)
//     }
//   }

//   const handleCategoryChange = (categoryId: string) => {
//     setSelectedCategory(categoryId)
//     onFilterChange(categoryId, undefined)
//   }

//   const handleSubCategoryChange = (subCategoryId: string) => {
//     setSelectedSubCategory(subCategoryId)
//     onFilterChange(selectedCategory, subCategoryId)
//   }

//   const clearFilters = () => {
//     setSelectedCategory('')
//     setSelectedSubCategory('')
//     onFilterChange()
//   }

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md mb-6">
//       <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
//         <div className="flex-1">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Catégorie
//           </label>
//           <div className="relative">
//             <select
//               value={selectedCategory}
//               onChange={(e) => handleCategoryChange(e.target.value)}
//               className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//             >
//               <option value="">Toutes les catégories</option>
//               {categories.map((category) => (
//                 <option key={category.id} value={category.id}>
//                   {category.name}
//                 </option>
//               ))}
//             </select>
//             <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//           </div>
//         </div>

//         {subCategories.length > 0 && (
//           <div className="flex-1">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Sous-catégorie
//             </label>
//             <div className="relative">
//               <select
//                 value={selectedSubCategory}
//                 onChange={(e) => handleSubCategoryChange(e.target.value)}
//                 className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//               >
//                 <option value="">Toutes les sous-catégories</option>
//                 {subCategories.map((sub) => (
//                   <option key={sub.id} value={sub.id}>
//                     {sub.name}
//                   </option>
//                 ))}
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//             </div>
//           </div>
//         )}

//         {(selectedCategory || selectedSubCategory) && (
//           <div className="flex items-end">
//             <button
//               onClick={clearFilters}
//               className="px-4 py-2 text-sm text-gray-600 hover:text-primary hover:underline"
//             >
//               Effacer les filtres
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }



// import React, { useState, useEffect } from 'react'
// import { ChevronDown, Filter } from 'lucide-react'
// import { productsService } from '../../services/supabase'
// import { Category, SubCategory } from '../../types'

// interface ProductFiltersProps {
//   onFilterChange: (categoryId?: string, subCategoryId?: string) => void
// }

// export const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilterChange }) => {
//   const [categories, setCategories] = useState<Category[]>([])
//   const [subCategories, setSubCategories] = useState<SubCategory[]>([])
//   const [selectedCategory, setSelectedCategory] = useState<string>('')
//   const [selectedSubCategory, setSelectedSubCategory] = useState<string>('')
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     loadCategories()
//   }, [])

//   useEffect(() => {
//     if (selectedCategory) {
//       loadSubCategories(selectedCategory)
//     } else {
//       setSubCategories([])
//       setSelectedSubCategory('')
//     }
//   }, [selectedCategory])

//   const loadCategories = async () => {
//     try {
//       setIsLoading(true)
//       const data = await productsService.getCategories()
//       setCategories(data)
//     } catch (error) {
//       console.error('❌ Erreur chargement catégories:', error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const loadSubCategories = async (categoryId: string) => {
//     try {
//       setIsLoading(true)
//       const data = await productsService.getSubCategories(categoryId)
//       // Deduplicate sub-categories by id in case of duplicates in the response
//       if (!Array.isArray(data)) {
//         setSubCategories([])
//         return
//       }

//       // First dedupe by id to keep unique rows, then dedupe by name (case-insensitive)
//       const byId = Array.from(new Map(data.map((d) => [d.id, d])).values())
//       const seen = new Set<string>()
//       const uniqueByName = [] as SubCategory[]
//       for (const item of byId) {
//         const nameKey = (item.name || '').trim().toLowerCase()
//         if (!seen.has(nameKey)) {
//           seen.add(nameKey)
//           uniqueByName.push(item)
//         }
//       }

//       setSubCategories(uniqueByName)
//     } catch (error) {
//       console.error('❌ Erreur chargement sous-catégories:', error)
//       setSubCategories([])
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const categoryId = e.target.value
//     setSelectedCategory(categoryId)
//     setSelectedSubCategory('')
    
//     if (categoryId) {
//       onFilterChange(categoryId, undefined)
//     } else {
//       onFilterChange()
//     }
//   }

//   const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const subCategoryId = e.target.value
//     setSelectedSubCategory(subCategoryId)
    
//     if (subCategoryId) {
//       onFilterChange(selectedCategory, subCategoryId)
//     } else if (selectedCategory) {
//       onFilterChange(selectedCategory, undefined)
//     } else {
//       onFilterChange()
//     }
//   }

//   const clearFilters = () => {
//     setSelectedCategory('')
//     setSelectedSubCategory('')
//     setSubCategories([])
//     onFilterChange()
//   }

//   const hasFilters = selectedCategory || selectedSubCategory

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center">
//           <Filter className="h-5 w-5 text-primary mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Filtres</h3>
//         </div>
        
//         {hasFilters && (
//           <button
//             onClick={clearFilters}
//             className="text-sm text-gray-600 hover:text-primary hover:underline"
//           >
//             Effacer les filtres
//           </button>
//         )}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Catégorie */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Catégorie
//           </label>
//           <div className="relative">
//             <select
//               value={selectedCategory}
//               onChange={handleCategoryChange}
//               disabled={isLoading}
//               className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-100 disabled:cursor-not-allowed"
//             >
//               <option value="">Toutes les catégories</option>
//               {categories.map((category) => (
//                 <option key={category.id} value={category.id}>
//                   {category.name}
//                 </option>
//               ))}
//             </select>
//             <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
//           </div>
//         </div>

//         {/* Sous-catégorie */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Sous-catégorie
//           </label>
//           <div className="relative">
//             <select
//               value={selectedSubCategory}
//               onChange={handleSubCategoryChange}
//               disabled={!selectedCategory || isLoading || subCategories.length === 0}
//               className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-100 disabled:cursor-not-allowed"
//             >
//               <option value="">
//                 {!selectedCategory 
//                   ? 'Sélectionnez d\'abord une catégorie' 
//                   : subCategories.length === 0
//                     ? 'Aucune sous-catégorie disponible'
//                     : 'Toutes les sous-catégories'
//                 }
//               </option>
//               {subCategories.map((sub) => (
//                 <option key={sub.id} value={sub.id}>
//                   {sub.name}
//                 </option>
//               ))}
//             </select>
//             <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
//           </div>
//         </div>
//       </div>

//       {/* État des filtres */}
//       {hasFilters && (
//         <div className="mt-4 pt-4 border-t border-gray-200">
//           <div className="text-sm text-gray-600">
//             Filtres actifs:
//             {selectedCategory && (
//               <span className="ml-2 px-2 py-1 bg-primary/10 text-primary rounded text-xs">
//                 Catégorie: {categories.find(c => c.id === selectedCategory)?.name}
//               </span>
//             )}
//             {selectedSubCategory && (
//               <span className="ml-2 px-2 py-1 bg-secondary/10 text-secondary rounded text-xs">
//                 Sous-catégorie: {subCategories.find(s => s.id === selectedSubCategory)?.name}
//               </span>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown, 
  Filter, 
  X, 
  Tag, 
  Layers,
  Sparkles,
  Loader2
} from 'lucide-react'
import { productsService } from '../../services/supabase'
import { Category, SubCategory } from '../../types'

interface ProductFiltersProps {
  onFilterChange: (categoryId?: string, subCategoryId?: string) => void
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilterChange }) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [subCategories, setSubCategories] = useState<SubCategory[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    loadCategories()
  }, [])

  useEffect(() => {
    if (selectedCategory) {
      loadSubCategories(selectedCategory)
    } else {
      setSubCategories([])
      setSelectedSubCategory('')
    }
  }, [selectedCategory])

  const loadCategories = async () => {
    try {
      setIsLoading(true)
      const data = await productsService.getCategories()
      setCategories(data)
    } catch (error) {
      console.error('❌ Erreur chargement catégories:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const loadSubCategories = async (categoryId: string) => {
    try {
      setIsLoading(true)
      const data = await productsService.getSubCategories(categoryId)
      
      if (!Array.isArray(data)) {
        setSubCategories([])
        return
      }

      const byId = Array.from(new Map(data.map((d) => [d.id, d])).values())
      const seen = new Set<string>()
      const uniqueByName = [] as SubCategory[]
      for (const item of byId) {
        const nameKey = (item.name || '').trim().toLowerCase()
        if (!seen.has(nameKey)) {
          seen.add(nameKey)
          uniqueByName.push(item)
        }
      }

      setSubCategories(uniqueByName)
    } catch (error) {
      console.error('❌ Erreur chargement sous-catégories:', error)
      setSubCategories([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedSubCategory('')
    
    if (categoryId) {
      onFilterChange(categoryId, undefined)
    } else {
      onFilterChange()
    }
  }

  const handleSubCategoryChange = (subCategoryId: string) => {
    setSelectedSubCategory(subCategoryId)
    
    if (subCategoryId) {
      onFilterChange(selectedCategory, subCategoryId)
    } else if (selectedCategory) {
      onFilterChange(selectedCategory, undefined)
    } else {
      onFilterChange()
    }
  }

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedSubCategory('')
    setSubCategories([])
    onFilterChange()
    setIsOpen(false)
  }

  const hasFilters = !!(selectedCategory || selectedSubCategory)

  // Trouver les noms pour l'affichage
  const selectedCategoryName = categories.find(c => c.id === selectedCategory)?.name
  const selectedSubCategoryName = subCategories.find(s => s.id === selectedSubCategory)?.name

  return (
    <>
      {/* Bouton filtre mobile */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl hover:shadow-lg transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
              <Filter className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Filtres</div>
              <div className="text-sm text-gray-600">
                {hasFilters ? 'Filtres actifs' : 'Filtrer les produits'}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {hasFilters && (
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">Actif</span>
              </div>
            )}
            <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>

        {/* Filtres mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <FiltersContent
                  categories={categories}
                  subCategories={subCategories}
                  selectedCategory={selectedCategory}
                  selectedSubCategory={selectedSubCategory}
                  selectedCategoryName={selectedCategoryName}
                  selectedSubCategoryName={selectedSubCategoryName}
                  isLoading={isLoading}
                  hasFilters={hasFilters}
                  onCategoryChange={handleCategoryChange}
                  onSubCategoryChange={handleSubCategoryChange}
                  onClearFilters={clearFilters}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Filtres desktop */}
      <div className="hidden lg:block">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6"
        >
          <FiltersContent
            categories={categories}
            subCategories={subCategories}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            selectedCategoryName={selectedCategoryName}
            selectedSubCategoryName={selectedSubCategoryName}
            isLoading={isLoading}
            hasFilters={hasFilters}
            onCategoryChange={handleCategoryChange}
            onSubCategoryChange={handleSubCategoryChange}
            onClearFilters={clearFilters}
          />
        </motion.div>
      </div>
    </>
  )
}

// Composant interne pour le contenu des filtres
interface FiltersContentProps {
  categories: Category[]
  subCategories: SubCategory[]
  selectedCategory: string
  selectedSubCategory: string
  selectedCategoryName?: string
  selectedSubCategoryName?: string
  isLoading: boolean
  hasFilters: boolean
  onCategoryChange: (id: string) => void
  onSubCategoryChange: (id: string) => void
  onClearFilters: () => void
}

const FiltersContent: React.FC<FiltersContentProps> = ({
  categories,
  subCategories,
  selectedCategory,
  selectedSubCategory,
  selectedCategoryName,
  selectedSubCategoryName,
  isLoading,
  hasFilters,
  onCategoryChange,
  onSubCategoryChange,
  onClearFilters
}) => {
  return (
    <>
      {/* En-tête */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
            <Filter className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Filtrer les produits</h3>
            <p className="text-gray-600 text-sm mt-1">Affinez votre recherche</p>
          </div>
        </div>
        
        {hasFilters && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClearFilters}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
          >
            <X className="h-4 w-4" />
            Effacer tout
          </motion.button>
        )}
      </div>

      {/* Filtres actifs */}
      <AnimatePresence>
        {hasFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/20"
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Filtres appliqués</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedCategory && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-primary/20 rounded-full text-sm font-medium text-primary">
                  <Tag className="h-3 w-3" />
                  {selectedCategoryName}
                </span>
              )}
              {selectedSubCategory && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-secondary/20 rounded-full text-sm font-medium text-secondary">
                  <Layers className="h-3 w-3" />
                  {selectedSubCategoryName}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grille des filtres */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Catégorie */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Tag className="h-4 w-4 text-primary" />
            Catégorie
          </label>
          <div className="relative">
            {isLoading && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Loader2 className="h-4 w-4 text-gray-400 animate-spin" />
              </div>
            )}
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              disabled={isLoading}
              className="w-full appearance-none bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3.5 pr-12 focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/20 transition-all cursor-pointer hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="" className="text-gray-500">Toutes les catégories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id} className="py-2">
                  {category.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Sous-catégorie */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Layers className="h-4 w-4 text-primary" />
            Sous-catégorie
          </label>
          <div className="relative">
            {isLoading && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Loader2 className="h-4 w-4 text-gray-400 animate-spin" />
              </div>
            )}
            <select
              value={selectedSubCategory}
              onChange={(e) => onSubCategoryChange(e.target.value)}
              disabled={!selectedCategory || isLoading || subCategories.length === 0}
              className="w-full appearance-none bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3.5 pr-12 focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/20 transition-all cursor-pointer hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="" className="text-gray-500">
                {!selectedCategory 
                  ? 'Choisissez une catégorie d\'abord' 
                  : subCategories.length === 0
                    ? 'Aucune sous-catégorie'
                    : 'Toutes les sous-catégories'
                }
              </option>
              {subCategories.map((sub) => (
                <option key={sub.id} value={sub.id} className="py-2">
                  {sub.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Compteur et info */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-600">
            <span className="font-medium text-gray-900">{categories.length}</span> catégories disponibles
          </div>
          {selectedCategory && (
            <div className="text-primary font-medium">
              <span className="text-gray-900">{subCategories.length}</span> sous-catégories
            </div>
          )}
        </div>
      </div>
    </>
  )
}