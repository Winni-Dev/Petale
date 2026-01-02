// import React, { useState, useEffect } from 'react'
// import { X, Upload, Loader2 } from 'lucide-react'
// import { Product, Category, SubCategory } from '../../types'
// import { productsService } from '../../services/supabase'
// import { Button } from '../UI/Button'
// import toast from 'react-hot-toast'

// interface ProductFormProps {
//   isOpen: boolean
//   onClose: () => void
//   onSuccess: () => void
//   product?: Product | null
// }

// export const ProductForm: React.FC<ProductFormProps> = ({
//   isOpen,
//   onClose,
//   onSuccess,
//   product
// }) => {
//   const [isLoading, setIsLoading] = useState(false)
//   const [categories, setCategories] = useState<Category[]>([])
//   const [subCategories, setSubCategories] = useState<SubCategory[]>([])
//   const [imageFile, setImageFile] = useState<File | null>(null)
//   const [imagePreview, setImagePreview] = useState<string>('')
  
//   // Données du formulaire
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category_id: '',
//     sub_category_id: '',
//     image_url: '',
//     is_active: true
//   })

//   // Charger les catégories au montage
//   useEffect(() => {
//     loadCategories()
//   }, [])

//   // Initialiser le formulaire si on édite un produit
//   useEffect(() => {
//     if (product) {
//       setFormData({
//         name: product.name,
//         description: product.description || '',
//         price: product.price.toString(),
//         category_id: product.category_id,
//         sub_category_id: product.sub_category_id,
//         image_url: product.image_url,
//         is_active: product.is_active
//       })
//       setImagePreview(product.image_url)
//     } else {
//       resetForm()
//     }
//   }, [product])

//   // Charger les sous-catégories quand une catégorie est sélectionnée
//   useEffect(() => {
//     if (formData.category_id) {
//       loadSubCategories(formData.category_id)
//     } else {
//       setSubCategories([])
//     }
//   }, [formData.category_id])

//   const loadCategories = async () => {
//     try {
//       const data = await productsService.getCategories()
//       setCategories(data)
//     } catch (error) {
//       toast.error('Erreur lors du chargement des catégories')
//     }
//   }

//   const loadSubCategories = async (categoryId: string) => {
//     try {
//       const data = await productsService.getSubCategories(categoryId)
//       setSubCategories(data)
//     } catch (error) {
//       toast.error('Erreur lors du chargement des sous-catégories')
//     }
//   }

//   const resetForm = () => {
//     setFormData({
//       name: '',
//       description: '',
//       price: '',
//       category_id: '',
//       sub_category_id: '',
//       image_url: '',
//       is_active: true
//     })
//     setImageFile(null)
//     setImagePreview('')
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, checked } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: checked
//     }))
//   }

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       // Vérifier la taille (max 5MB)
//       if (file.size > 5 * 1024 * 1024) {
//         toast.error('L\'image ne doit pas dépasser 5MB')
//         return
//       }

//       // Vérifier le type
//       if (!file.type.startsWith('image/')) {
//         toast.error('Veuillez sélectionner une image valide')
//         return
//       }

//       setImageFile(file)
      
//       // Créer un aperçu
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setImagePreview(reader.result as string)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const uploadImage = async (): Promise<string> => {
//     if (!imageFile) {
//       // Si pas de nouvelle image, retourner l'URL existante
//       return formData.image_url || 'https://via.placeholder.com/500x500?text=Petal+Product'
//     }

//     try {
//       // Pour l'instant, on simule l'upload
//       // En production, vous utiliserez Supabase Storage
//       toast.loading('Upload de l\'image...')
      
//       // Simuler un délai d'upload
//       await new Promise(resolve => setTimeout(resolve, 1000))
      
//       // En attendant Supabase Storage, on utilise un placeholder
//       const fakeImageUrl = `https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop&crop=center`
      
//       toast.dismiss()
//       toast.success('Image uploadée avec succès')
      
//       return fakeImageUrl
//     } catch (error) {
//       toast.error('Erreur lors de l\'upload de l\'image')
//       throw error
//     }
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
    
//     // Validation
//     if (!formData.name.trim()) {
//       toast.error('Le nom du produit est requis')
//       return
//     }
    
//     if (!formData.price || parseFloat(formData.price) <= 0) {
//       toast.error('Le prix doit être supérieur à 0')
//       return
//     }
    
//     if (!formData.category_id) {
//       toast.error('Veuillez sélectionner une catégorie')
//       return
//     }
    
//     if (!formData.sub_category_id) {
//       toast.error('Veuillez sélectionner une sous-catégorie')
//       return
//     }

//     try {
//       setIsLoading(true)
      
//       // Upload de l'image
//       const imageUrl = await uploadImage()
      
//       // Préparer les données du produit
//       const productData = {
//         name: formData.name.trim(),
//         description: formData.description.trim(),
//         price: parseInt(formData.price),
//         category_id: formData.category_id,
//         sub_category_id: formData.sub_category_id,
//         image_url: imageUrl,
//         is_active: formData.is_active
//       }

//       // Créer ou mettre à jour le produit
//       if (product) {
//         // Mise à jour
//         await productsService.updateProduct(product.id, productData)
//         toast.success('Produit mis à jour avec succès')
//       } else {
//         // Création
//         await productsService.createProduct(productData)
//         toast.success('Produit créé avec succès')
//       }
      
//       // Réinitialiser et fermer
//       resetForm()
//       onSuccess()
//       onClose()
      
//     } catch (error: any) {
//       console.error('Error saving product:', error)
//       toast.error(`Erreur: ${error.message}`)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-50 overflow-y-auto">
//       {/* Overlay */}
//       <div 
//         className="fixed inset-0 bg-black/50 transition-opacity"
//         onClick={onClose}
//       />
      
//       {/* Modal */}
//       <div className="flex min-h-screen items-center justify-center p-4">
//         <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
//           {/* Header */}
//           <div className="sticky top-0 z-10 bg-white border-b px-6 py-4">
//             <div className="flex items-center justify-between">
//               <h2 className="text-xl font-bold text-secondary">
//                 {product ? 'Modifier le produit' : 'Ajouter un nouveau produit'}
//               </h2>
//               <button
//                 onClick={onClose}
//                 className="p-2 hover:bg-gray-100 rounded-full transition"
//               >
//                 <X className="h-5 w-5 text-gray-500" />
//               </button>
//             </div>
//           </div>
          
//           {/* Content */}
//           <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
//             <form onSubmit={handleSubmit} className="p-6">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {/* Colonne gauche - Informations */}
//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Nom du produit *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//                       placeholder="Ex: Crème hydratante naturelle"
//                       required
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Description
//                     </label>
//                     <textarea
//                       name="description"
//                       value={formData.description}
//                       onChange={handleInputChange}
//                       rows={4}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
//                       placeholder="Décrivez votre produit..."
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Prix (FCFA) *
//                     </label>
//                     <input
//                       type="number"
//                       name="price"
//                       value={formData.price}
//                       onChange={handleInputChange}
//                       min="0"
//                       step="100"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//                       placeholder="5000"
//                       required
//                     />
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Catégorie *
//                       </label>
//                       <select
//                         name="category_id"
//                         value={formData.category_id}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//                         required
//                       >
//                         <option value="">Sélectionner une catégorie</option>
//                         {categories.map(category => (
//                           <option key={category.id} value={category.id}>
//                             {category.name}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Sous-catégorie *
//                       </label>
//                       <select
//                         name="sub_category_id"
//                         value={formData.sub_category_id}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//                         required
//                         disabled={!formData.category_id}
//                       >
//                         <option value="">
//                           {formData.category_id ? 'Sélectionner...' : 'Choisissez d\'abord une catégorie'}
//                         </option>
//                         {subCategories.map(sub => (
//                           <option key={sub.id} value={sub.id}>
//                             {sub.name}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="is_active"
//                       name="is_active"
//                       checked={formData.is_active}
//                       onChange={handleCheckboxChange}
//                       className="h-4 w-4 text-primary rounded focus:ring-primary border-gray-300"
//                     />
//                     <label htmlFor="is_active" className="ml-2 text-sm text-gray-700">
//                       Produit actif (visible dans la boutique)
//                     </label>
//                   </div>
//                 </div>
                
//                 {/* Colonne droite - Image */}
//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Image du produit *
//                     </label>
                    
//                     {/* Aperçu de l'image */}
//                     <div className="mb-4">
//                       {imagePreview ? (
//                         <div className="relative aspect-square rounded-lg overflow-hidden border">
//                           <img
//                             src={imagePreview}
//                             alt="Aperçu"
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       ) : (
//                         <div className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-8 text-center">
//                           <Upload className="h-12 w-12 text-gray-400 mb-4" />
//                           <p className="text-sm text-gray-600 mb-2">
//                             Aucune image sélectionnée
//                           </p>
//                           <p className="text-xs text-gray-500">
//                             PNG, JPG, WebP jusqu'à 5MB
//                           </p>
//                         </div>
//                       )}
//                     </div>
                    
//                     {/* Input file */}
//                     <div>
//                       <input
//                         type="file"
//                         id="image"
//                         accept="image/*"
//                         onChange={handleImageChange}
//                         className="hidden"
//                       />
//                       <label
//                         htmlFor="image"
//                         className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer text-center"
//                       >
//                         <span className="text-primary font-medium">
//                           {imagePreview ? 'Changer l\'image' : 'Choisir une image'}
//                         </span>
//                       </label>
//                     </div>
                    
//                     {/* URL de l'image (alternative) */}
//                     <div className="mt-4">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Ou coller une URL d'image
//                       </label>
//                       <input
//                         type="url"
//                         value={formData.image_url}
//                         onChange={handleInputChange}
//                         placeholder="https://example.com/image.jpg"
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
//                       />
//                       <p className="text-xs text-gray-500 mt-2">
//                         Utilisez des images carrées (1:1) pour un meilleur rendu
//                       </p>
//                     </div>
//                   </div>
                  
//                   {/* Conseils */}
//                   <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                     <h3 className="text-sm font-medium text-blue-800 mb-2">
//                       💡 Conseils pour une bonne fiche produit
//                     </h3>
//                     <ul className="text-xs text-blue-700 space-y-1">
//                       <li>• Utilisez une image nette et bien éclairée</li>
//                       <li>• Privilégiez les fonds neutres (blanc)</li>
//                       <li>• Ajoutez une description détaillée</li>
//                       <li>• Vérifiez le prix et les catégories</li>
//                       <li>• Testez l'affichage sur mobile</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Boutons */}
//               <div className="mt-8 pt-6 border-t flex justify-end space-x-3">
//                 <Button
//                   type="button"
//                   variant="outline"
//                   onClick={onClose}
//                   disabled={isLoading}
//                 >
//                   Annuler
//                 </Button>
                
//                 <Button
//                   type="submit"
//                   variant="primary"
//                   isLoading={isLoading}
//                   disabled={isLoading}
//                 >
//                   {isLoading ? (
//                     <>
//                       <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                       Enregistrement...
//                     </>
//                   ) : product ? (
//                     'Mettre à jour'
//                   ) : (
//                     'Créer le produit'
//                   )}
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// import React, { useState, useEffect } from 'react'
// import { X, Upload, Loader2, Image as ImageIcon } from 'lucide-react'
// import { Product, Category, SubCategory } from '../../types'
// import { productsService, supabase } from '../../services/supabase'
// import { Button } from '../UI/Button'
// import toast from 'react-hot-toast'

// interface ProductFormProps {
//   isOpen: boolean
//   onClose: () => void
//   onSuccess: () => void
//   product?: Product | null
// }

// export const ProductForm: React.FC<ProductFormProps> = ({
//   isOpen,
//   onClose,
//   onSuccess,
//   product
// }) => {
//   const [isLoading, setIsLoading] = useState(false)
//   const [categories, setCategories] = useState<Category[]>([])
//   const [subCategories, setSubCategories] = useState<SubCategory[]>([])
//   const [imageFile, setImageFile] = useState<File | null>(null)
//   const [imagePreview, setImagePreview] = useState<string>('')
//   const [useFileUpload, setUseFileUpload] = useState(false)
  
//   // Données du formulaire
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category_id: '',
//     sub_category_id: '',
//     image_url: '',
//     is_active: true
//   })

//   // Charger les catégories au montage
//   useEffect(() => {
//     loadCategories()
//   }, [])

//   // Initialiser le formulaire si on édite un produit
//   useEffect(() => {
//     if (product) {
//       setFormData({
//         name: product.name,
//         description: product.description || '',
//         price: product.price.toString(),
//         category_id: product.category_id,
//         sub_category_id: product.sub_category_id,
//         image_url: product.image_url,
//         is_active: product.is_active
//       })
//       setImagePreview(product.image_url)
//       setUseFileUpload(false)
//     } else {
//       resetForm()
//     }
//   }, [product])

//   // Charger les sous-catégories quand une catégorie est sélectionnée
//   useEffect(() => {
//     if (formData.category_id) {
//       loadSubCategories(formData.category_id)
//     } else {
//       setSubCategories([])
//       setFormData(prev => ({ ...prev, sub_category_id: '' }))
//     }
//   }, [formData.category_id])

//   const loadCategories = async () => {
//     try {
//       const data = await productsService.getCategories()
//       setCategories(data)
//     } catch (error) {
//       toast.error('Erreur lors du chargement des catégories')
//     }
//   }

//   const loadSubCategories = async (categoryId: string) => {
//     try {
//       const data = await productsService.getSubCategories(categoryId)
//       // Deduplicate sub-categories by id to avoid duplicate entries
//       if (!Array.isArray(data)) {
//         setSubCategories([])
//         return
//       }

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
//       toast.error('Erreur lors du chargement des sous-catégories')
//     }
//   }

//   const resetForm = () => {
//     setFormData({
//       name: '',
//       description: '',
//       price: '',
//       category_id: '',
//       sub_category_id: '',
//       image_url: '',
//       is_active: true
//     })
//     setImageFile(null)
//     setImagePreview('')
//     setUseFileUpload(false)
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))

//     // Si l'URL de l'image change, mettre à jour l'aperçu
//     if (name === 'image_url') {
//       setImagePreview(value)
//       setUseFileUpload(false)
//     }
//   }

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, checked } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: checked
//     }))
//   }

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       // Vérifier la taille (max 5MB)
//       if (file.size > 5 * 1024 * 1024) {
//         toast.error('L\'image ne doit pas dépasser 5MB')
//         return
//       }

//       // Vérifier le type
//       if (!file.type.startsWith('image/')) {
//         toast.error('Veuillez sélectionner une image valide')
//         return
//       }

//       setImageFile(file)
//       setUseFileUpload(true)
      
//       // Créer un aperçu local
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setImagePreview(reader.result as string)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleUseUrl = () => {
//     setUseFileUpload(false)
//     setImageFile(null)
//     if (formData.image_url) {
//       setImagePreview(formData.image_url)
//     }
//   }

//   const handleUseFile = () => {
//     setUseFileUpload(true)
//     setFormData(prev => ({ ...prev, image_url: '' }))
//   }

//   const uploadImageToSupabase = async (file: File): Promise<string> => {
//     const bucket = 'products'
//     const ext = file.name.split('.').pop() || 'jpg'
//     const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`
//     const filePath = `${fileName}`

//     const toastId = toast.loading('Upload de l\'image en cours...')

//     try {
//       const { data: uploadData, error: uploadError } = await supabase.storage
//         .from(bucket)
//         .upload(filePath, file, { cacheControl: '3600', upsert: false })

//       console.log('Supabase upload result:', { uploadData, uploadError })

//       if (uploadError) {
//         // Afficher message d'erreur détaillé si disponible
//         const msg = (uploadError?.message) ? uploadError.message : String(uploadError)
//         toast.dismiss(toastId)
//         toast.error(`Erreur upload: ${msg}`)
//         throw uploadError
//       }

//       const { data: publicData } = supabase.storage.from(bucket).getPublicUrl(filePath)
//       toast.dismiss(toastId)
//       console.log('Supabase public URL data:', publicData)
//       if (publicData && publicData.publicUrl) {
//         return publicData.publicUrl
//       }
//       throw new Error('URL publique introuvable')
//     } catch (err: any) {
//       toast.dismiss(toastId)
//       console.error('Erreur upload Supabase (catch):', err)
//       const msg = err?.message || String(err) || 'Erreur inconnue lors de l\'upload'
//       // Afficher message d'erreur détaillé dans un toast pour faciliter le debug
//       toast.error(`Erreur upload: ${msg}`)
//       // Remonter l'erreur avec message lisible
//       throw err
//     }
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
    
//     // Validation
//     if (!formData.name.trim()) {
//       toast.error('Le nom du produit est requis')
//       return
//     }
    
//     if (!formData.price || parseFloat(formData.price) <= 0) {
//       toast.error('Le prix doit être supérieur à 0')
//       return
//     }
    
//     if (!formData.category_id) {
//       toast.error('Veuillez sélectionner une catégorie')
//       return
//     }
    
//     if (!formData.sub_category_id) {
//       toast.error('Veuillez sélectionner une sous-catégorie')
//       return
//     }

//     // Vérifier qu'on a une image
//     if (!imagePreview) {
//       toast.error('Veuillez ajouter une image')
//       return
//     }

//     try {
//       setIsLoading(true)
      
//       let finalImageUrl = ''
      
//       if (useFileUpload && imageFile) {
//         try {
//           finalImageUrl = await uploadImageToSupabase(imageFile)
//           toast.success('Image uploadée avec succès')
//         } catch (err: any) {
//           console.error('Erreur upload:', err)
//           const msg = err?.message || String(err) || 'Impossible d\'uploader l\'image'
//           toast.error(`Impossible d\'uploader l\'image: ${msg}`)
//           // fallback to existing URL or placeholder
//           finalImageUrl = formData.image_url?.trim() || 'https://via.placeholder.com/500x500?text=Petal+Product'
//         }
//       } else if (formData.image_url.trim()) {
//         // Si on a une URL, on l'utilise directement
//         finalImageUrl = formData.image_url.trim()
//       } else {
//         // Fallback: image par défaut
//         finalImageUrl = 'https://via.placeholder.com/500x500?text=Petal+Product'
//       }
      
//       // Vérifier que l'URL est valide
//       if (!finalImageUrl.startsWith('http')) {
//         finalImageUrl = 'https://via.placeholder.com/500x500?text=Petal+Product'
//       }
      
//       // Préparer les données du produit
//       const productData = {
//         name: formData.name.trim(),
//         description: formData.description.trim(),
//         price: parseInt(formData.price),
//         category_id: formData.category_id,
//         sub_category_id: formData.sub_category_id,
//         image_url: finalImageUrl,
//         is_active: formData.is_active
//       }

//       console.log('📤 Envoi des données:', productData)

//       // Créer ou mettre à jour le produit
//       if (product) {
//         await productsService.updateProduct(product.id, productData)
//         toast.success('✅ Produit mis à jour avec succès')
//       } else {
//         await productsService.createProduct(productData)
//         toast.success('✅ Produit créé avec succès')
//       }
      
//       // Attendre un peu pour la mise à jour
//       await new Promise(resolve => setTimeout(resolve, 500))
      
//       // Réinitialiser et fermer
//       resetForm()
//       onSuccess()
//       onClose()
      
//     } catch (error: any) {
//       console.error('❌ Erreur sauvegarde:', error)
//       toast.error(`Erreur: ${error.message}`)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-50 overflow-y-auto">
//       {/* Overlay */}
//       <div 
//         className="fixed inset-0 bg-black/50 transition-opacity"
//         onClick={onClose}
//       />
      
//       {/* Modal */}
//       <div className="flex min-h-screen items-center justify-center p-4">
//         <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
//           {/* Header */}
//           <div className="sticky top-0 z-10 bg-white border-b px-6 py-4">
//             <div className="flex items-center justify-between">
//               <h2 className="text-xl font-bold text-secondary">
//                 {product ? 'Modifier le produit' : 'Ajouter un nouveau produit'}
//               </h2>
//               <button
//                 onClick={onClose}
//                 className="p-2 hover:bg-gray-100 rounded-full transition"
//                 disabled={isLoading}
//               >
//                 <X className="h-5 w-5 text-gray-500" />
//               </button>
//             </div>
//           </div>
          
//           {/* Content */}
//           <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
//             <form onSubmit={handleSubmit} className="p-6">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {/* Colonne gauche - Informations */}
//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Nom du produit *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//                       placeholder="Ex: Crème hydratante naturelle"
//                       required
//                       disabled={isLoading}
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Description
//                     </label>
//                     <textarea
//                       name="description"
//                       value={formData.description}
//                       onChange={handleInputChange}
//                       rows={4}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
//                       placeholder="Décrivez votre produit..."
//                       disabled={isLoading}
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Prix (FCFA) *
//                     </label>
//                     <input
//                       type="number"
//                       name="price"
//                       value={formData.price}
//                       onChange={handleInputChange}
//                       min="0"
//                       step="100"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//                       placeholder="5000"
//                       required
//                       disabled={isLoading}
//                     />
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Catégorie *
//                       </label>
//                       <select
//                         name="category_id"
//                         value={formData.category_id}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//                         required
//                         disabled={isLoading}
//                       >
//                         <option value="">Sélectionner une catégorie</option>
//                         {categories.map(category => (
//                           <option key={category.id} value={category.id}>
//                             {category.name}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Sous-catégorie *
//                       </label>
//                       <select
//                         name="sub_category_id"
//                         value={formData.sub_category_id}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//                         required
//                         disabled={!formData.category_id || isLoading}
//                       >
//                         <option value="">
//                           {formData.category_id ? 'Sélectionner...' : 'Choisissez d\'abord une catégorie'}
//                         </option>
//                         {subCategories.map(sub => (
//                           <option key={sub.id} value={sub.id}>
//                             {sub.name}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="is_active"
//                       name="is_active"
//                       checked={formData.is_active}
//                       onChange={handleCheckboxChange}
//                       className="h-4 w-4 text-primary rounded focus:ring-primary border-gray-300"
//                       disabled={isLoading}
//                     />
//                     <label htmlFor="is_active" className="ml-2 text-sm text-gray-700">
//                       Produit actif (visible dans la boutique)
//                     </label>
//                   </div>
//                 </div>
                
//                 {/* Colonne droite - Image */}
//                 <div className="space-y-6">
//                   <div>
//                     <div className="flex items-center justify-between mb-4">
//                       <label className="block text-sm font-medium text-gray-700">
//                         Image du produit *
//                       </label>
//                       <div className="flex space-x-2">
//                         <button
//                           type="button"
//                           onClick={handleUseFile}
//                           className={`px-3 py-1 text-sm rounded ${useFileUpload ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}
//                           disabled={isLoading}
//                         >
//                           Fichier
//                         </button>
//                         <button
//                           type="button"
//                           onClick={handleUseUrl}
//                           className={`px-3 py-1 text-sm rounded ${!useFileUpload ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}
//                           disabled={isLoading}
//                         >
//                           URL
//                         </button>
//                       </div>
//                     </div>
                    
//                     {/* Aperçu de l'image */}
//                     <div className="mb-4">
//                       {imagePreview ? (
//                         <div className="relative aspect-square rounded-lg overflow-hidden border">
//                           <img
//                             src={imagePreview}
//                             alt="Aperçu"
//                             className="w-full h-full object-cover"
//                             onError={(e) => {
//                               (e.target as HTMLImageElement).src = 'https://via.placeholder.com/500x500?text=Image+non+disponible'
//                             }}
//                           />
//                           <div className="absolute bottom-2 left-2 right-2">
//                             <div className="bg-black/70 text-white text-xs px-2 py-1 rounded text-center">
//                               APERÇU - L'image sauvegardée sera différente
//                             </div>
//                           </div>
//                         </div>
//                       ) : (
//                         <div className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-8 text-center">
//                           <ImageIcon className="h-12 w-12 text-gray-400 mb-4" />
//                           <p className="text-sm text-gray-600 mb-2">
//                             Aucune image sélectionnée
//                           </p>
//                           <p className="text-xs text-gray-500">
//                             Utilisez une URL d'image (recommandé)
//                           </p>
//                         </div>
//                       )}
//                     </div>
                    
//                     {/* Mode Fichier */}
//                     {useFileUpload ? (
//                       <div>
//                         <input
//                           type="file"
//                           id="image"
//                           accept="image/*"
//                           onChange={handleImageChange}
//                           className="hidden"
//                           disabled={isLoading}
//                         />
//                         <label
//                           htmlFor="image"
//                           className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer text-center"
//                         >
//                           <span className="text-primary font-medium">
//                             {imageFile ? 'Changer l\'image' : 'Choisir une image'}
//                           </span>
//                         </label>
//                         {imageFile && (
//                           <p className="text-xs text-gray-500 mt-2 text-center">
//                             Fichier: {imageFile.name} ({(imageFile.size / 1024 / 1024).toFixed(2)} MB)
//                           </p>
//                         )}
//                       </div>
//                     ) : (
//                       /* Mode URL */
//                       <div>
//                         <input
//                           type="url"
//                           name="image_url"
//                           value={formData.image_url}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//                           placeholder="https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500"
//                           disabled={isLoading}
//                         />
//                         <p className="text-xs text-gray-500 mt-2">
//                           Collez l'URL complète d'une image
//                         </p>
//                       </div>
//                     )}
//                   </div>
                  
//                   {/* Images d'exemple */}
//                   <div>
//                     <p className="text-sm font-medium text-gray-700 mb-2">
//                       Images d'exemple (cliquez pour utiliser) :
//                     </p>
//                     <div className="grid grid-cols-3 gap-2">
//                       {[
//                         'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop',
//                         'https://images.unsplash.com/photo-1556228578-9c360e1d8d34?w=500&h=500&fit=crop',
//                         'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
//                         'https://images.unsplash.com/photo-1570196911496-66bd58a5b7b4?w=500&h=500&fit=crop',
//                         'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&h=500&fit=crop',
//                         'https://images.unsplash.com/photo-1556228578-9c360e1d8d34?w=500&h=500&fit=crop'
//                       ].map((url, index) => (
//                         <button
//                           key={index}
//                           type="button"
//                           onClick={() => {
//                             setFormData(prev => ({ ...prev, image_url: url }))
//                             setImagePreview(url)
//                             setUseFileUpload(false)
//                           }}
//                           className="aspect-square rounded-lg overflow-hidden border hover:border-primary transition"
//                           disabled={isLoading}
//                         >
//                           <img
//                             src={url}
//                             alt={`Exemple ${index + 1}`}
//                             className="w-full h-full object-cover"
//                           />
//                         </button>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Conseils */}
//                   <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                     <h3 className="text-sm font-medium text-blue-800 mb-2">
//                       💡 Comment ajouter vos propres images ?
//                     </h3>
//                     <ol className="text-xs text-blue-700 space-y-1">
//                       <li>1. Allez sur <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">Unsplash.com</a></li>
//                       <li>2. Cherchez une image (ex: "beauty product")</li>
//                       <li>3. Cliquez sur "Download" puis "Copy image address"</li>
//                       <li>4. Collez l'URL dans le champ ci-dessus</li>
//                     </ol>
//                     <p className="text-xs text-blue-700 mt-2 font-medium">
//                       ⚠️ L'upload de fichier ne fonctionne pas encore. Utilisez une URL.
//                     </p>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Boutons */}
//               <div className="mt-8 pt-6 border-t flex justify-end space-x-3">
//                 <Button
//                   type="button"
//                   variant="outline"
//                   onClick={onClose}
//                   disabled={isLoading}
//                 >
//                   Annuler
//                 </Button>
                
//                 <Button
//                   type="submit"
//                   variant="primary"
//                   isLoading={isLoading}
//                   disabled={isLoading}
//                 >
//                   {isLoading ? (
//                     <>
//                       <Loader2 className="h-4 w-4 animate-spin mr-2" />
//                       Enregistrement...
//                     </>
//                   ) : product ? (
//                     'Mettre à jour'
//                   ) : (
//                     'Créer le produit'
//                   )}
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Upload, Loader2, Image as ImageIcon, Link, Package, Tag, DollarSign, FileText, CheckCircle, Globe, Camera } from 'lucide-react'
import { Product, Category, SubCategory } from '../../types'
import { productsService, supabase } from '../../services/supabase'
import { Button } from '../UI/Button'
import toast from 'react-hot-toast'

interface ProductFormProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  product?: Product | null
}

export const ProductForm: React.FC<ProductFormProps> = ({
  isOpen,
  onClose,
  onSuccess,
  product
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [subCategories, setSubCategories] = useState<SubCategory[]>([])
  const [imageFiles, setImageFiles] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>([])
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [useFileUpload, setUseFileUpload] = useState(false)
  
  // Données du formulaire
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category_id: '',
    sub_category_id: '',
    image_url: '', // Pour compatibilité
    is_active: true
  })

  // Charger les catégories
  useEffect(() => {
    loadCategories()
  }, [])

  // Initialiser le formulaire
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description || '',
        price: product.price.toString(),
        category_id: product.category_id,
        sub_category_id: product.sub_category_id,
        image_url: product.image_url,
        is_active: product.is_active
      })
      // Charger les images existantes
      const existingImages = product.images && product.images.length > 0 
        ? product.images 
        : [product.image_url]
      setImagePreviews(existingImages)
      setImageUrls(existingImages)
      setImageFiles([])
      setUseFileUpload(false)
    } else {
      resetForm()
    }
  }, [product])

  // Charger les sous-catégories
  useEffect(() => {
    if (formData.category_id) {
      loadSubCategories(formData.category_id)
    } else {
      setSubCategories([])
      setFormData(prev => ({ ...prev, sub_category_id: '' }))
    }
  }, [formData.category_id])

  const loadCategories = async () => {
    try {
      const data = await productsService.getCategories()
      setCategories(data)
    } catch (error) {
      toast.error('Erreur lors du chargement des catégories')
    }
  }

  const loadSubCategories = async (categoryId: string) => {
    try {
      const data = await productsService.getSubCategories(categoryId)
      // Ensure we have an array
      if (!Array.isArray(data)) {
        setSubCategories([])
        return
      }

      // Deduplicate by id first (preserve last seen), then by case-insensitive name
      const byId = Array.from(new Map(data.map((d) => [d.id, d])).values())
      const seen = new Set<string>()
      const uniqueByName: SubCategory[] = []
      for (const item of byId) {
        const nameKey = (item.name || '').trim().toLowerCase()
        if (!seen.has(nameKey)) {
          seen.add(nameKey)
          uniqueByName.push(item)
        }
      }

      // Optionally sort by name for stable ordering
      uniqueByName.sort((a, b) => (a.name || '').localeCompare(b.name || ''))

      setSubCategories(uniqueByName)
    } catch (error) {
      toast.error('Erreur lors du chargement des sous-catégories')
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      category_id: '',
      sub_category_id: '',
      image_url: '',
      is_active: true
    })
    setImageFiles([])
    setImagePreviews([])
    setImageUrls([])
    setUseFileUpload(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // image_url est géré séparément via handleAddImageUrl
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    // Valider les fichiers
    const validFiles: File[] = []
    for (const file of files) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error(`L'image "${file.name}" dépasse 5MB`)
        continue
      }
      if (!file.type.startsWith('image/')) {
        toast.error(`Le fichier "${file.name}" n'est pas une image valide`)
        continue
      }
      validFiles.push(file)
    }

    if (validFiles.length === 0) return

    // Ajouter les nouveaux fichiers
    const newFiles = [...imageFiles, ...validFiles]
    setImageFiles(newFiles)
    setUseFileUpload(true)

    // Créer les previews
    const newPreviews: string[] = [...imagePreviews]
    validFiles.forEach(file => {
      const reader = new FileReader()
      reader.onloadend = () => {
        newPreviews.push(reader.result as string)
        setImagePreviews([...newPreviews])
      }
      reader.readAsDataURL(file)
    })
  }

  const handleRemoveImage = (index: number) => {
    if (useFileUpload) {
      // Supprimer un fichier uploadé
      const newFiles = imageFiles.filter((_, i) => i !== index)
      const newPreviews = imagePreviews.filter((_, i) => i !== index)
      setImageFiles(newFiles)
      setImagePreviews(newPreviews)
    } else {
      // Supprimer une URL
      const newUrls = imageUrls.filter((_, i) => i !== index)
      const newPreviews = imagePreviews.filter((_, i) => i !== index)
      setImageUrls(newUrls)
      setImagePreviews(newPreviews)
      // Mettre à jour image_url pour compatibilité
      if (newUrls.length > 0) {
        setFormData(prev => ({ ...prev, image_url: newUrls[0] }))
      } else {
        setFormData(prev => ({ ...prev, image_url: '' }))
      }
    }
  }

  const handleAddImageUrl = () => {
    if (!formData.image_url.trim()) {
      toast.error('Veuillez entrer une URL valide')
      return
    }
    setImageUrls([...imageUrls, formData.image_url])
    setImagePreviews([...imagePreviews, formData.image_url])
    setFormData(prev => ({ ...prev, image_url: '' }))
    setUseFileUpload(false)
  }

  const handleUseFile = () => {
    setUseFileUpload(true)
    setImageUrls([])
    setFormData(prev => ({ ...prev, image_url: '' }))
  }

  const handleUseUrl = () => {
    setUseFileUpload(false)
    setImageFiles([])
  }

  const uploadImageToSupabase = async (file: File): Promise<string> => {
    const bucket = 'products'
    const ext = file.name.split('.').pop() || 'jpg'
    const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`
    const filePath = `${fileName}`

    const toastId = toast.loading('Upload de l\'image en cours...')

    try {
      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file, { cacheControl: '3600', upsert: false })

      if (uploadError) {
        const msg = uploadError?.message || String(uploadError)
        toast.dismiss(toastId)
        toast.error(`Erreur upload: ${msg}`)
        throw uploadError
      }

      const { data: publicData } = supabase.storage.from(bucket).getPublicUrl(filePath)
      toast.dismiss(toastId)
      if (publicData && publicData.publicUrl) {
        return publicData.publicUrl
      }
      throw new Error('URL publique introuvable')
    } catch (err: any) {
      toast.dismiss(toastId)
      console.error('Erreur upload Supabase:', err)
      const msg = err?.message || String(err) || 'Erreur inconnue lors de l\'upload'
      toast.error(`Erreur upload: ${msg}`)
      throw err
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim()) {
      toast.error('Le nom du produit est requis')
      return
    }
    
    if (!formData.price || parseFloat(formData.price) <= 0) {
      toast.error('Le prix doit être supérieur à 0')
      return
    }
    
    if (!formData.category_id) {
      toast.error('Veuillez sélectionner une catégorie')
      return
    }
    
    if (!formData.sub_category_id) {
      toast.error('Veuillez sélectionner une sous-catégorie')
      return
    }

    const allImages = imagePreviews.length > 0 ? imagePreviews : (formData.image_url ? [formData.image_url] : [])
    if (allImages.length === 0) {
      toast.error('Veuillez ajouter au moins une image')
      return
    }

    try {
      setIsLoading(true)
      
      let finalImages: string[] = []
      
      if (useFileUpload && imageFiles.length > 0) {
        // Uploader tous les fichiers
        const uploadPromises = imageFiles.map(file => uploadImageToSupabase(file))
        try {
          finalImages = await Promise.all(uploadPromises)
          toast.success(`${finalImages.length} image(s) uploadée(s) avec succès`)
        } catch (err: any) {
          console.error('Erreur upload:', err)
          const msg = err?.message || String(err) || 'Impossible d\'uploader les images'
          toast.error(`Impossible d\'uploader les images: ${msg}`)
          // Utiliser les URLs existantes en fallback
          finalImages = imageUrls.length > 0 ? imageUrls : [formData.image_url || '']
        }
      } else if (imageUrls.length > 0) {
        // Utiliser les URLs fournies
        finalImages = imageUrls
      } else if (formData.image_url.trim()) {
        finalImages = [formData.image_url.trim()]
      } else {
        finalImages = ['https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop']
      }

      // S'assurer qu'on a au moins une image
      if (finalImages.length === 0) {
        finalImages = ['https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop']
      }

      let finalImageUrl = finalImages[0] // Pour compatibilité avec image_url
      
      if (!finalImageUrl || !finalImageUrl.startsWith('http')) {
        finalImageUrl = 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop'
        finalImages[0] = finalImageUrl
      }
      
      const productData: any = {
        name: formData.name.trim(),
        description: formData.description.trim(),
        price: parseInt(formData.price),
        category_id: formData.category_id,
        sub_category_id: formData.sub_category_id,
        image_url: finalImageUrl,
        images: finalImages, // Nouvelles images multiples
        is_active: formData.is_active
      }

      if (product) {
        await productsService.updateProduct(product.id, productData)
        toast.success('Produit mis à jour avec succès')
      } else {
        await productsService.createProduct(productData)
        toast.success('Produit créé avec succès')
      }
      
      await new Promise(resolve => setTimeout(resolve, 500))
      
      resetForm()
      onSuccess()
      onClose()
      
    } catch (error: any) {
      console.error('Erreur sauvegarde:', error)
      toast.error(`Erreur: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Overlay avec animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="flex min-h-screen items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
          >
            {/* Header élégant */}
            <div className="sticky top-0 z-10 bg-gradient-to-r from-primary/5 via-primary/10 to-secondary/5 border-b border-gray-100 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    {product ? (
                      <>
                        <Edit className="h-6 w-6 text-primary" />
                        Modifier le produit
                      </>
                    ) : (
                      <>
                        <Plus className="h-6 w-6 text-primary" />
                        Nouveau produit
                      </>
                    )}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {product ? 'Modifiez les détails de votre produit' : 'Ajoutez un nouveau produit à votre boutique'}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-xl transition"
                  disabled={isLoading}
                >
                  <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              <form onSubmit={handleSubmit} className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Colonne gauche - Informations */}
                  <div className="space-y-8">
                    {/* Nom du produit */}
                    <div className="bg-gray-50/50 p-5 rounded-xl border border-gray-200">
                      <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Package className="h-4 w-4 text-primary" />
                        Nom du produit *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                        placeholder="Ex: Crème hydratante naturelle"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    
                    {/* Description */}
                    <div className="bg-gray-50/50 p-5 rounded-xl border border-gray-200">
                      <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        Description
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none transition"
                        placeholder="Décrivez les bienfaits, les ingrédients, les utilisations..."
                        disabled={isLoading}
                      />
                    </div>
                    
                    {/* Prix */}
                    <div className="bg-gray-50/50 p-5 rounded-xl border border-gray-200">
                      <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        Prix (FCFA) *
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          min="0"
                          step="100"
                          className="w-full pl-4 pr-12 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                          placeholder="5000"
                          required
                          disabled={isLoading}
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                          FCFA
                        </div>
                      </div>
                    </div>
                    
                    {/* Catégories */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gray-50/50 p-5 rounded-xl border border-gray-200">
                        <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Tag className="h-4 w-4 text-primary" />
                          Catégorie *
                        </label>
                        <select
                          name="category_id"
                          value={formData.category_id}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                          required
                          disabled={isLoading}
                        >
                          <option value="">Sélectionner une catégorie</option>
                          {categories.map(category => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="bg-gray-50/50 p-5 rounded-xl border border-gray-200">
                        <label className="block text-sm font-semibold text-gray-900 mb-3">
                          Sous-catégorie *
                        </label>
                        <select
                          name="sub_category_id"
                          value={formData.sub_category_id}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                          required
                          disabled={!formData.category_id || isLoading}
                        >
                          <option value="">
                            {formData.category_id ? 'Sélectionner...' : 'Choisissez d\'abord une catégorie'}
                          </option>
                          {subCategories.map(sub => (
                            <option key={sub.id} value={sub.id}>
                              {sub.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    {/* Statut */}
                    <div className="flex items-center p-5 bg-gray-50/50 rounded-xl border border-gray-200">
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="is_active"
                          name="is_active"
                          checked={formData.is_active}
                          onChange={handleCheckboxChange}
                          className="sr-only peer"
                          disabled={isLoading}
                        />
                        <div className="w-12 h-6 bg-gray-300 peer-checked:bg-primary rounded-full transition-all peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                      </div>
                      <label htmlFor="is_active" className="ml-4 text-sm text-gray-700">
                        <span className="font-semibold">Produit actif</span>
                        <span className="text-gray-500 ml-2">(visible dans la boutique)</span>
                      </label>
                    </div>
                  </div>
                  
                    {/* Colonne droite - Images */}
                  <div className="space-y-8">
                    {/* Sélection des images */}
                    <div className="bg-gray-50/50 p-5 rounded-xl border border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <label className="block text-sm font-semibold text-gray-900 flex items-center gap-2">
                          <Camera className="h-4 w-4 text-primary" />
                          Images du produit * (plusieurs possibles)
                        </label>
                        <div className="flex space-x-2 bg-white p-1 rounded-lg border">
                          <button
                            type="button"
                            onClick={handleUseFile}
                            className={`px-3 py-1 text-sm rounded-lg transition ${useFileUpload ? 'bg-primary text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}
                            disabled={isLoading}
                          >
                            <Upload className="h-3 w-3 inline mr-1" />
                            Fichiers
                          </button>
                          <button
                            type="button"
                            onClick={handleUseUrl}
                            className={`px-3 py-1 text-sm rounded-lg transition ${!useFileUpload ? 'bg-primary text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}
                            disabled={isLoading}
                          >
                            <Globe className="h-3 w-3 inline mr-1" />
                            URLs
                          </button>
                        </div>
                      </div>
                      
                      {/* Galerie d'images */}
                      {imagePreviews.length > 0 ? (
                        <div className="mb-6">
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {imagePreviews.map((preview, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative aspect-square rounded-xl overflow-hidden border-2 border-gray-200 shadow-inner group"
                              >
                                <img
                                  src={preview}
                                  alt={`Image ${index + 1}`}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop'
                                  }}
                                />
                                <div className="absolute top-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded-full">
                                  {index + 1}
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveImage(index)}
                                  className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                                  disabled={isLoading}
                                >
                                  <X className="h-4 w-4" />
                                </button>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="mb-6 aspect-square rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-8 text-center hover:border-primary transition-colors">
                          <ImageIcon className="h-14 w-14 text-gray-400 mb-4" />
                          <p className="text-sm font-medium text-gray-600 mb-2">
                            Aucune image sélectionnée
                          </p>
                          <p className="text-xs text-gray-500">
                            Ajoutez une ou plusieurs images pour votre produit
                          </p>
                        </div>
                      )}
                      
                      {/* Mode Fichier */}
                      {useFileUpload ? (
                        <div>
                          <input
                            type="file"
                            id="images"
                            accept="image/*"
                            onChange={handleImageChange}
                            multiple
                            className="hidden"
                            disabled={isLoading}
                          />
                          <label
                            htmlFor="images"
                            className="block w-full px-4 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-dashed border-primary/30 rounded-lg hover:border-primary/50 cursor-pointer text-center transition-all group"
                          >
                            <span className="text-primary font-semibold group-hover:text-primary/80 transition-colors">
                              <Upload className="h-4 w-4 inline mr-2" />
                              {imageFiles.length > 0 ? `Ajouter d'autres images (${imageFiles.length} sélectionnée(s))` : 'Choisir des images'}
                            </span>
                          </label>
                          {imageFiles.length > 0 && (
                            <p className="text-xs text-gray-500 mt-3 text-center">
                              {imageFiles.length} fichier(s) sélectionné(s)
                            </p>
                          )}
                        </div>
                      ) : (
                        /* Mode URL */
                        <div>
                          <div className="relative mb-3">
                            <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="url"
                              name="image_url"
                              value={formData.image_url}
                              onChange={handleInputChange}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  e.preventDefault()
                                  handleAddImageUrl()
                                }
                              }}
                              className="w-full pl-10 pr-20 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                              placeholder="https://images.unsplash.com/photo-..."
                              disabled={isLoading}
                            />
                          </div>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={handleAddImageUrl}
                              disabled={!formData.image_url.trim() || isLoading}
                              className="flex-1 px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Ajouter l'URL
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mt-3">
                            Entrez une URL et cliquez sur "Ajouter l'URL" pour l'ajouter à la galerie
                          </p>
                          {imageUrls.length > 0 && (
                            <div className="text-xs text-gray-600 mt-2">
                              {imageUrls.length} URL(s) ajoutée(s)
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    
                    {/* Images d'exemple */}
                    <div className="bg-gray-50/50 p-5 rounded-xl border border-gray-200">
                      <p className="text-sm font-semibold text-gray-900 mb-3">
                        Images d'exemple :
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop',
                          'https://images.unsplash.com/photo-1556228578-9c360e1d8d34?w=500&h=500&fit=crop',
                          'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
                          'https://images.unsplash.com/photo-1570196911496-66bd58a5b7b4?w=500&h=500&fit=crop',
                          'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&h=500&fit=crop',
                          'https://images.unsplash.com/photo-1556228578-9c360e1d8d34?w=500&h=500&fit=crop'
                        ].map((url, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, image_url: url }))
                              if (!imagePreviews.includes(url)) {
                                setImagePreviews([...imagePreviews, url])
                                setImageUrls([...imageUrls, url])
                              }
                              setUseFileUpload(false)
                            }}
                            className="aspect-square rounded-lg overflow-hidden border border-gray-200 hover:border-primary hover:scale-105 transition-all"
                            disabled={isLoading}
                          >
                            <img
                              src={url}
                              alt={`Exemple ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Conseils */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5">
                      <h3 className="text-sm font-semibold text-blue-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        💡 Comment ajouter une image ?
                      </h3>
                      <ol className="text-xs text-blue-800 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="font-bold">1.</span>
                          <span>Visitez <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline font-medium">Unsplash.com</a></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold">2.</span>
                          <span>Cherchez "beauty product" ou "skin care"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold">3.</span>
                          <span>Cliquez sur une image puis "Copy image address"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold">4.</span>
                          <span>Collez l'URL dans le champ ci-dessus</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                
                {/* Boutons */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex justify-end space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    disabled={isLoading}
                    className="px-8 py-3 border-2"
                  >
                    Annuler
                  </Button>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    isLoading={isLoading}
                    disabled={isLoading}
                    className="px-8 py-3"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Enregistrement...
                      </>
                    ) : product ? (
                      'Mettre à jour le produit'
                    ) : (
                      'Créer le produit'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
}

// Icône Edit pour le header
const Edit = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
)

// Icône Plus pour le header
const Plus = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
)