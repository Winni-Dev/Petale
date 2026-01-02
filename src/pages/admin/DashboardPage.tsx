

// // import React, { useState, useEffect } from 'react'
// // import { Link } from 'react-router-dom'
// // import { Plus, Edit, Trash2, Eye, EyeOff, LogOut, Package, Users, DollarSign, TrendingUp, AlertCircle } from 'lucide-react'
// // import { Product } from '../../types'
// // import { productsService } from '../../services/supabase'
// // import { adminAuthService } from '../../services/adminAuth'
// // import { Button } from '../../components/ui/Button'
// // import { Card, CardContent, CardHeader } from '../../components/ui/Card'
// // import { AdminHeader } from '../../components/admin/AdminHeader'
// // import { AdminRoute } from '../../components/admin/AdminRoute'
// // import toast from 'react-hot-toast'

// // const DashboardContent: React.FC = () => {
// //   const [products, setProducts] = useState<Product[]>([])
// //   const [isLoading, setIsLoading] = useState(true)
// //   const [activeTab, setActiveTab] = useState('products')
// //   const [showProductForm, setShowProductForm] = useState(false)

// //   useEffect(() => {
// //     loadProducts()
// //   }, [])

// //   const loadProducts = async () => {
// //     try {
// //       setIsLoading(true)
// //       const data = await productsService.getAll()
// //       setProducts(data)
// //     } catch (error: any) {
// //       toast.error('Erreur lors du chargement des produits: ' + error.message)
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //   const handleToggleActive = async (product: Product) => {
// //     try {
// //       await productsService.updateProduct(product.id, {
// //         is_active: !product.is_active
// //       })
// //       toast.success(`Produit ${!product.is_active ? 'activé' : 'désactivé'}`)
// //       loadProducts()
// //     } catch (error: any) {
// //       toast.error('Erreur: ' + error.message)
// //     }
// //   }

// //   const handleDelete = async (productId: string) => {
// //     if (!window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ? Cette action est irréversible.')) {
// //       return
// //     }

// //     try {
// //       await productsService.deleteProduct(productId)
// //       toast.success('Produit supprimé avec succès')
// //       loadProducts()
// //     } catch (error: any) {
// //       toast.error('Erreur: ' + error.message)
// //     }
// //   }

// //   const handleLogout = () => {
// //     if (window.confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
// //       adminAuthService.logout()
// //     }
// //   }

// //   if (isLoading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //         <div className="text-center">
// //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
// //           <p className="mt-4 text-gray-600">Chargement du tableau de bord...</p>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <AdminHeader />
      
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {/* Stats */}
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
// //           <Card>
// //             <CardContent className="p-6">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <div className="text-3xl font-bold text-primary mb-2">
// //                     {products.length}
// //                   </div>
// //                   <div className="text-gray-600">Produits</div>
// //                 </div>
// //                 <Package className="h-8 w-8 text-primary/30" />
// //               </div>
// //             </CardContent>
// //           </Card>

// //           <Card>
// //             <CardContent className="p-6">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <div className="text-3xl font-bold text-primary mb-2">
// //                     {products.filter(p => p.is_active).length}
// //                   </div>
// //                   <div className="text-gray-600">Produits actifs</div>
// //                 </div>
// //                 <Eye className="h-8 w-8 text-green-500/30" />
// //               </div>
// //             </CardContent>
// //           </Card>

// //           <Card>
// //             <CardContent className="p-6">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <div className="text-3xl font-bold text-primary mb-2">
// //                     {new Set(products.map(p => p.category_id)).size}
// //                   </div>
// //                   <div className="text-gray-600">Catégories</div>
// //                 </div>
// //                 <TrendingUp className="h-8 w-8 text-blue-500/30" />
// //               </div>
// //             </CardContent>
// //           </Card>

// //           <Card>
// //             <CardContent className="p-6">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <div className="text-3xl font-bold text-primary mb-2">
// //                     {products.reduce((sum, p) => sum + p.price, 0).toLocaleString()} FCFA
// //                   </div>
// //                   <div className="text-gray-600">Valeur totale</div>
// //                 </div>
// //                 <DollarSign className="h-8 w-8 text-yellow-500/30" />
// //               </div>
// //             </CardContent>
// //           </Card>
// //         </div>

// //         {/* Navigation */}
// //         <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
// //           <button
// //             onClick={() => setActiveTab('products')}
// //             className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
// //               activeTab === 'products'
// //                 ? 'bg-primary text-white'
// //                 : 'bg-white text-gray-700 hover:bg-gray-100'
// //             }`}
// //           >
// //             Produits
// //           </button>
// //           <button
// //             onClick={() => setActiveTab('orders')}
// //             className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
// //               activeTab === 'orders'
// //                 ? 'bg-primary text-white'
// //                 : 'bg-white text-gray-700 hover:bg-gray-100'
// //             }`}
// //           >
// //             Commandes
// //           </button>
// //           <button
// //             onClick={() => setActiveTab('settings')}
// //             className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
// //               activeTab === 'settings'
// //                 ? 'bg-primary text-white'
// //                 : 'bg-white text-gray-700 hover:bg-gray-100'
// //             }`}
// //           >
// //             Paramètres
// //           </button>
// //         </div>

// //         {/* Contenu */}
// //         {activeTab === 'products' && (
// //           <Card>
// //             <CardHeader className="flex flex-row items-center justify-between">
// //               <div>
// //                 <h2 className="text-xl font-bold text-secondary">Gestion des produits</h2>
// //                 <p className="text-gray-600">Ajoutez, modifiez ou supprimez vos produits</p>
// //               </div>
              
// //               <Button
// //                 variant="primary"
// //                 onClick={() => setShowProductForm(true)}
// //                 className="flex items-center space-x-2"
// //               >
// //                 <Plus className="h-4 w-4" />
// //                 <span>Ajouter un produit</span>
// //               </Button>
// //             </CardHeader>

// //             <CardContent>
// //               {products.length === 0 ? (
// //                 <div className="text-center py-12">
// //                   <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
// //                     <Package className="h-8 w-8 text-gray-400" />
// //                   </div>
// //                   <h3 className="text-xl font-semibold text-gray-600 mb-2">
// //                     Aucun produit
// //                   </h3>
// //                   <p className="text-gray-500 mb-6">
// //                     Commencez par ajouter votre premier produit
// //                   </p>
// //                   <Button
// //                     variant="primary"
// //                     onClick={() => setShowProductForm(true)}
// //                     className="flex items-center space-x-2 mx-auto"
// //                   >
// //                     <Plus className="h-4 w-4" />
// //                     <span>Ajouter un produit</span>
// //                   </Button>
// //                 </div>
// //               ) : (
// //                 <div className="overflow-x-auto">
// //                   <table className="min-w-full divide-y divide-gray-200">
// //                     <thead className="bg-gray-50">
// //                       <tr>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                           Produit
// //                         </th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                           Catégorie
// //                         </th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                           Prix
// //                         </th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                           Statut
// //                         </th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                           Actions
// //                         </th>
// //                       </tr>
// //                     </thead>
// //                     <tbody className="bg-white divide-y divide-gray-200">
// //                       {products.map((product) => (
// //                         <tr key={product.id} className="hover:bg-gray-50">
// //                           <td className="px-6 py-4 whitespace-nowrap">
// //                             <div className="flex items-center">
// //                               <div className="h-10 w-10 flex-shrink-0">
// //                                 <img
// //                                   className="h-10 w-10 rounded-lg object-cover"
// //                                   src={product.image_url}
// //                                   alt={product.name}
// //                                   onError={(e) => {
// //                                     (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100?text=Petal'
// //                                   }}
// //                                 />
// //                               </div>
// //                               <div className="ml-4">
// //                                 <div className="text-sm font-medium text-gray-900">
// //                                   {product.name}
// //                                 </div>
// //                                 <div className="text-sm text-gray-500 truncate max-w-xs">
// //                                   {product.description?.substring(0, 50)}...
// //                                 </div>
// //                               </div>
// //                             </div>
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap">
// //                             <div className="text-sm text-gray-900">
// //                               {product.category?.name}
// //                             </div>
// //                             <div className="text-sm text-gray-500">
// //                               {product.sub_category?.name}
// //                             </div>
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
// //                             {product.price.toLocaleString()} FCFA
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap">
// //                             <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
// //                               product.is_active
// //                                 ? 'bg-green-100 text-green-800'
// //                                 : 'bg-red-100 text-red-800'
// //                             }`}>
// //                               {product.is_active ? 'Actif' : 'Inactif'}
// //                             </span>
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// //                             <div className="flex items-center space-x-2">
// //                               <button
// //                                 onClick={() => handleToggleActive(product)}
// //                                 className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100"
// //                                 title={product.is_active ? 'Désactiver' : 'Activer'}
// //                               >
// //                                 {product.is_active ? (
// //                                   <EyeOff className="h-4 w-4" />
// //                                 ) : (
// //                                   <Eye className="h-4 w-4" />
// //                                 )}
// //                               </button>
                              
// //                               <button
// //                                 onClick={() => {/* TODO: Implement edit */}}
// //                                 className="text-primary hover:text-primary/80 p-1 rounded hover:bg-primary/10"
// //                                 title="Modifier"
// //                               >
// //                                 <Edit className="h-4 w-4" />
// //                               </button>
                              
// //                               <button
// //                                 onClick={() => handleDelete(product.id)}
// //                                 className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50"
// //                                 title="Supprimer"
// //                               >
// //                                 <Trash2 className="h-4 w-4" />
// //                               </button>
// //                             </div>
// //                           </td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               )}
// //             </CardContent>
// //           </Card>
// //         )}

// //         {activeTab === 'orders' && (
// //           <Card>
// //             <CardHeader>
// //               <h2 className="text-xl font-bold text-secondary">Commandes</h2>
// //               <p className="text-gray-600">Gérez les commandes de vos clients</p>
// //             </CardHeader>
// //             <CardContent>
// //               <div className="text-center py-12">
// //                 <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
// //                   <AlertCircle className="h-8 w-8 text-gray-400" />
// //                 </div>
// //                 <h3 className="text-xl font-semibold text-gray-600 mb-2">
// //                   Aucune commande
// //                 </h3>
// //                 <p className="text-gray-500">
// //                   Les commandes apparaîtront ici lorsqu'elles seront passées via WhatsApp
// //                 </p>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         )}

// //         {activeTab === 'settings' && (
// //           <Card>
// //             <CardHeader>
// //               <h2 className="text-xl font-bold text-secondary">Paramètres</h2>
// //               <p className="text-gray-600">Configurez votre boutique</p>
// //             </CardHeader>
// //             <CardContent className="space-y-6">
// //               <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
// //                 <div className="flex items-start">
// //                   <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
// //                   <div>
// //                     <p className="text-sm font-medium text-blue-800">Boutique Petal</p>
// //                     <p className="text-sm text-blue-700 mt-1">
// //                       Votre boutique est configurée pour recevoir des commandes via WhatsApp.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               <div>
// //                 <h3 className="text-lg font-medium text-gray-900 mb-4">Paramètres généraux</h3>
// //                 <div className="space-y-4">
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                       Nom de la boutique
// //                     </label>
// //                     <input
// //                       type="text"
// //                       defaultValue="Petal"
// //                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
// //                     />
// //                   </div>
                  
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                       Numéro WhatsApp
// //                     </label>
// //                     <input
// //                       type="text"
// //                       defaultValue="+2250701781701"
// //                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
// //                     />
// //                   </div>
                  
// //                   <Button variant="primary">
// //                     Enregistrer les modifications
// //                   </Button>
// //                 </div>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         )}
// //       </div>
// //     </div>
// //   )
// // }

// // // Wrapper avec AdminRoute
// // export const DashboardPage: React.FC = () => {
// //   return (
// //     <AdminRoute>
// //       <DashboardContent />
// //     </AdminRoute>
// //   )
// // }


// import React, { useState, useEffect } from 'react'
// import { Plus, Edit, Trash2, Eye, EyeOff, LogOut, Package, DollarSign, TrendingUp, AlertCircle } from 'lucide-react'
// import { Product } from '../../types'
// import { productsService } from '../../services/supabase'
// import { adminAuthService } from '../../services/adminAuth'
// import { Button } from '../../components/UI/Button'
// import { Card, CardContent, CardHeader } from '../../components/UI/Card'
// import { AdminHeader } from '../../components/admin/AdminHeader'
// import { AdminRoute } from '../../components/admin/AdminRoute'
// import { ProductForm } from '../../components/admin/ProductForm'
// import toast from 'react-hot-toast'

// const DashboardContent: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [activeTab, setActiveTab] = useState('products')
//   const [showProductForm, setShowProductForm] = useState(false)
//   const [editingProduct, setEditingProduct] = useState<Product | null>(null)

//   useEffect(() => {
//     loadProducts()
//   }, [])

//   const loadProducts = async () => {
//     try {
//       setIsLoading(true)
//       const data = await productsService.getAll()
//       setProducts(data)
//     } catch (error: any) {
//       toast.error('Erreur lors du chargement des produits: ' + error.message)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleToggleActive = async (product: Product) => {
//     try {
//       await productsService.updateProduct(product.id, {
//         is_active: !product.is_active
//       })
//       toast.success(`Produit ${!product.is_active ? 'activé' : 'désactivé'}`)
//       loadProducts()
//     } catch (error: any) {
//       toast.error('Erreur: ' + error.message)
//     }
//   }

//   const handleDelete = async (productId: string) => {
//     if (!window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ? Cette action est irréversible.')) {
//       return
//     }

//     try {
//       await productsService.deleteProduct(productId)
//       toast.success('Produit supprimé avec succès')
//       loadProducts()
//     } catch (error: any) {
//       toast.error('Erreur: ' + error.message)
//     }
//   }

//   const handleEditProduct = (product: Product) => {
//     setEditingProduct(product)
//     setShowProductForm(true)
//   }

//   const handleCloseForm = () => {
//     setShowProductForm(false)
//     setEditingProduct(null)
//   }

//   const handleProductSuccess = () => {
//     loadProducts()
//   }

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
//           <p className="mt-4 text-gray-600">Chargement du tableau de bord...</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <AdminHeader />
      
//       {/* Formulaire de produit */}
//       <ProductForm
//         isOpen={showProductForm}
//         onClose={handleCloseForm}
//         onSuccess={handleProductSuccess}
//         product={editingProduct}
//       />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//           <Card>
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <div className="text-3xl font-bold text-primary mb-2">
//                     {products.length}
//                   </div>
//                   <div className="text-gray-600">Produits</div>
//                 </div>
//                 <Package className="h-8 w-8 text-primary/30" />
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <div className="text-3xl font-bold text-primary mb-2">
//                     {products.filter(p => p.is_active).length}
//                   </div>
//                   <div className="text-gray-600">Produits actifs</div>
//                 </div>
//                 <Eye className="h-8 w-8 text-green-500/30" />
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <div className="text-3xl font-bold text-primary mb-2">
//                     {new Set(products.map(p => p.category_id)).size}
//                   </div>
//                   <div className="text-gray-600">Catégories</div>
//                 </div>
//                 <TrendingUp className="h-8 w-8 text-blue-500/30" />
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <div className="text-3xl font-bold text-primary mb-2">
//                     {products.reduce((sum, p) => sum + p.price, 0).toLocaleString()} FCFA
//                   </div>
//                   <div className="text-gray-600">Valeur totale</div>
//                 </div>
//                 <DollarSign className="h-8 w-8 text-yellow-500/30" />
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Navigation */}
//         <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
//           <button
//             onClick={() => setActiveTab('products')}
//             className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
//               activeTab === 'products'
//                 ? 'bg-primary text-white'
//                 : 'bg-white text-gray-700 hover:bg-gray-100'
//             }`}
//           >
//             Produits
//           </button>
//           <button
//             onClick={() => setActiveTab('orders')}
//             className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
//               activeTab === 'orders'
//                 ? 'bg-primary text-white'
//                 : 'bg-white text-gray-700 hover:bg-gray-100'
//             }`}
//           >
//             Commandes
//           </button>
//           <button
//             onClick={() => setActiveTab('settings')}
//             className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
//               activeTab === 'settings'
//                 ? 'bg-primary text-white'
//                 : 'bg-white text-gray-700 hover:bg-gray-100'
//             }`}
//           >
//             Paramètres
//           </button>
//         </div>

//         {/* Contenu */}
//         {activeTab === 'products' && (
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between">
//               <div>
//                 <h2 className="text-xl font-bold text-secondary">Gestion des produits</h2>
//                 <p className="text-gray-600">
//                   {products.length} produit{products.length > 1 ? 's' : ''} au total
//                 </p>
//               </div>
              
//               <Button
//                 variant="primary"
//                 onClick={() => {
//                   setEditingProduct(null)
//                   setShowProductForm(true)
//                 }}
//                 className="flex items-center space-x-2"
//               >
//                 <Plus className="h-4 w-4" />
//                 <span>Ajouter un produit</span>
//               </Button>
//             </CardHeader>

//             <CardContent>
//               {products.length === 0 ? (
//                 <div className="text-center py-12">
//                   <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//                     <Package className="h-8 w-8 text-gray-400" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-600 mb-2">
//                     Aucun produit
//                   </h3>
//                   <p className="text-gray-500 mb-6">
//                     Commencez par ajouter votre premier produit
//                   </p>
//                   <Button
//                     variant="primary"
//                     onClick={() => {
//                       setEditingProduct(null)
//                       setShowProductForm(true)
//                     }}
//                     className="flex items-center space-x-2 mx-auto"
//                   >
//                     <Plus className="h-4 w-4" />
//                     <span>Ajouter un produit</span>
//                   </Button>
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Produit
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Catégorie
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Prix
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Statut
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Actions
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {products.map((product) => (
//                         <tr key={product.id} className="hover:bg-gray-50 transition">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="h-12 w-12 flex-shrink-0">
//                                 <img
//                                   className="h-12 w-12 rounded-lg object-cover"
//                                   src={product.image_url}
//                                   alt={product.name}
//                                   onError={(e) => {
//                                     (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100?text=Petal'
//                                   }}
//                                 />
//                               </div>
//                               <div className="ml-4">
//                                 <div className="text-sm font-medium text-gray-900">
//                                   {product.name}
//                                 </div>
//                                 <div className="text-sm text-gray-500 truncate max-w-xs">
//                                   {product.description?.substring(0, 60) || 'Pas de description...'}
//                                 </div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-sm text-gray-900">
//                               {product.category?.name}
//                             </div>
//                             <div className="text-sm text-gray-500">
//                               {product.sub_category?.name}
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-lg font-bold text-primary">
//                               {product.price.toLocaleString()} FCFA
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
//                               product.is_active
//                                 ? 'bg-green-100 text-green-800'
//                                 : 'bg-red-100 text-red-800'
//                             }`}>
//                               {product.is_active ? (
//                                 <>
//                                   <Eye className="h-3 w-3 mr-1" />
//                                   Actif
//                                 </>
//                               ) : (
//                                 <>
//                                   <EyeOff className="h-3 w-3 mr-1" />
//                                   Inactif
//                                 </>
//                               )}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                             <div className="flex items-center space-x-2">
//                               <button
//                                 onClick={() => handleToggleActive(product)}
//                                 className="text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition"
//                                 title={product.is_active ? 'Désactiver' : 'Activer'}
//                               >
//                                 {product.is_active ? (
//                                   <EyeOff className="h-4 w-4" />
//                                 ) : (
//                                   <Eye className="h-4 w-4" />
//                                 )}
//                               </button>
                              
//                               <button
//                                 onClick={() => handleEditProduct(product)}
//                                 className="text-primary hover:text-primary/80 p-2 rounded-lg hover:bg-primary/10 transition"
//                                 title="Modifier"
//                               >
//                                 <Edit className="h-4 w-4" />
//                               </button>
                              
//                               <button
//                                 onClick={() => handleDelete(product.id)}
//                                 className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition"
//                                 title="Supprimer"
//                               >
//                                 <Trash2 className="h-4 w-4" />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         )}

//         {activeTab === 'orders' && (
//           <Card>
//             <CardHeader>
//               <h2 className="text-xl font-bold text-secondary">Commandes</h2>
//               <p className="text-gray-600">Gérez les commandes de vos clients</p>
//             </CardHeader>
//             <CardContent>
//               <div className="text-center py-12">
//                 <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//                   <AlertCircle className="h-8 w-8 text-gray-400" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-600 mb-2">
//                   Aucune commande
//                 </h3>
//                 <p className="text-gray-500">
//                   Les commandes apparaîtront ici lorsqu'elles seront passées via WhatsApp
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         {activeTab === 'settings' && (
//           <Card>
//             <CardHeader>
//               <h2 className="text-xl font-bold text-secondary">Paramètres</h2>
//               <p className="text-gray-600">Configurez votre boutique</p>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
//                 <div className="flex items-start">
//                   <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
//                   <div>
//                     <p className="text-sm font-medium text-blue-800">Boutique Petal</p>
//                     <p className="text-sm text-blue-700 mt-1">
//                       Votre boutique est configurée pour recevoir des commandes via WhatsApp.
//                     </p>
//                   </div>
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-medium text-gray-900 mb-4">Paramètres généraux</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Nom de la boutique
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue="Petal"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Numéro WhatsApp
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue="+2250701781701"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//                     />
//                   </div>
                  
//                   <Button variant="primary">
//                     Enregistrer les modifications
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         )}
//       </div>
//     </div>
//   )
// }

// // Wrapper avec AdminRoute
// export const DashboardPage: React.FC = () => {
//   return (
//     <AdminRoute>
//       <DashboardContent />
//     </AdminRoute>
//   )
// }

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  Package, 
  DollarSign, 
  AlertCircle,
  Search,
  RefreshCw,
  BarChart3,
  CheckCircle
} from 'lucide-react'
import { Product } from '../../types'
import { productsService, ordersService } from '../../services/supabase'
import { Button } from '../../components/UI/Button'
import { Card, CardContent, CardHeader } from '../../components/UI/Card'
import { AdminHeader } from '../../components/admin/AdminHeader'
import { AdminRoute } from '../../components/admin/AdminRoute'
import { ProductForm } from '../../components/admin/ProductForm'
import ConfirmModal from '../../components/UI/ConfirmModal'
import OrderDetailsModal from '../../components/UI/OrderDetailsModal'
import toast from 'react-hot-toast'

const DashboardContent: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('products')
  const [showProductForm, setShowProductForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [orders, setOrders] = useState<any[]>([])
  const [isLoadingOrders, setIsLoadingOrders] = useState(false)
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null)

  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    if (activeTab === 'orders') {
      loadOrders()
    }
  }, [activeTab])

  const loadOrders = async () => {
    try {
      setIsLoadingOrders(true)
      const data = await ordersService.getAll()
      setOrders(Array.isArray(data) ? data : [])
    } catch (err: any) {
      toast.error('Erreur lors du chargement des commandes: ' + (err?.message || String(err)))
    } finally {
      setIsLoadingOrders(false)
    }
  }

  const loadProducts = async () => {
    try {
      setIsLoading(true)
      const data = await productsService.getAll()
      setProducts(data)
    } catch (error: any) {
      toast.error('Erreur lors du chargement des produits: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleToggleActive = async (product: Product) => {
    try {
      await productsService.updateProduct(product.id, {
        is_active: !product.is_active
      })
      toast.success(`Produit ${!product.is_active ? 'activé' : 'désactivé'}`)
      loadProducts()
    } catch (error: any) {
      toast.error('Erreur: ' + error.message)
    }
  }

  const handleDelete = (productId: string) => {
    // open confirm modal
    setConfirmDeleteId(productId)
  }

  const doDelete = async () => {
    if (!confirmDeleteId) return
    try {
      setIsDeleting(true)
      await productsService.deleteProduct(confirmDeleteId)
      toast.success('Produit supprimé avec succès')
      setConfirmDeleteId(null)
      loadProducts()
    } catch (error: any) {
      toast.error('Erreur: ' + error.message)
    } finally {
      setIsDeleting(false)
    }
  }

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product)
    setShowProductForm(true)
  }

  const handleCloseForm = () => {
    setShowProductForm(false)
    setEditingProduct(null)
  }

  const handleProductSuccess = () => {
    loadProducts()
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category?.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <div className="w-12 h-12 border-3 border-primary border-t-transparent rounded-full" />
          </motion.div>
          <h3 className="text-lg font-medium text-gray-700">Chargement des données...</h3>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-x-hidden">
      <AdminHeader />
      
      <ProductForm
        isOpen={showProductForm}
        onClose={handleCloseForm}
        onSuccess={handleProductSuccess}
        product={editingProduct}
      />
      <ConfirmModal
        isOpen={!!confirmDeleteId}
        title="Supprimer le produit"
        message="Êtes-vous sûr de vouloir supprimer ce produit ? Cette action est irréversible."
        confirmText="Supprimer"
        cancelText="Annuler"
        isLoading={isDeleting}
        onCancel={() => setConfirmDeleteId(null)}
        onConfirm={doDelete}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de bord</h1>
          <p className="text-gray-600">Gérez votre boutique Petal</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Produits totaux</p>
                    <div className="text-2xl font-bold text-gray-900">
                      {products.length}
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Produits actifs</p>
                    <div className="text-2xl font-bold text-gray-900">
                      {products.filter(p => p.is_active).length}
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Catégories</p>
                    <div className="text-2xl font-bold text-gray-900">
                      {new Set(products.map(p => p.category_id)).size}
                    </div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Valeur totale</p>
                    <div className="text-2xl font-bold text-gray-900">
                      {products.reduce((sum, p) => sum + p.price, 0).toLocaleString()} FCFA
                    </div>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <DollarSign className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex space-x-1 mb-6 bg-white p-1 rounded-xl shadow-sm">
          {['products', 'orders', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? 'bg-primary text-white shadow'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab === 'products' && 'Produits'}
              {tab === 'orders' && 'Commandes'}
              {tab === 'settings' && 'Paramètres'}
            </button>
          ))}
        </div>

        {/* Contenu */}
        {activeTab === 'products' && (
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="border-b border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Gestion des produits</h2>
                  <p className="text-gray-600 mt-1">
                    {products.length} produit{products.length > 1 ? 's' : ''} au total
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Rechercher un produit..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary w-full sm:w-64"
                    />
                  </div>
                  
                  <Button
                    variant="primary"
                    onClick={() => {
                      setEditingProduct(null)
                      setShowProductForm(true)
                    }}
                    className="flex items-center gap-2 whitespace-nowrap"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Nouveau produit</span>
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Package className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-600 mb-2">
                    {searchQuery ? 'Aucun produit trouvé' : 'Aucun produit'}
                  </h3>
                  <p className="text-gray-500 mb-6">
                    {searchQuery ? 'Essayez une autre recherche' : 'Commencez par ajouter votre premier produit'}
                  </p>
                  {!searchQuery && (
                    <Button
                      variant="primary"
                      onClick={() => {
                        setEditingProduct(null)
                        setShowProductForm(true)
                      }}
                      className="flex items-center gap-2 mx-auto"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Ajouter un produit</span>
                    </Button>
                  )}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Produit
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Catégorie
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Prix
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Statut
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredProducts.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-4">
                              <div className="h-12 w-12 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                <img
                                  className="h-full w-full object-cover"
                                  src={product.image_url}
                                  alt={product.name}
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
                                  }}
                                />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">
                                  {product.name}
                                </div>
                                <div className="text-sm text-gray-500 truncate max-w-xs">
                                  {product.description?.substring(0, 60) || 'Pas de description...'}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-1">
                              <div className="text-sm font-medium text-gray-900">
                                {product.category?.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {product.sub_category?.name}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-lg font-bold text-primary">
                              {product.price.toLocaleString()} FCFA
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              product.is_active
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {product.is_active ? (
                                <>
                                  <Eye className="h-3 w-3 mr-1" />
                                  Actif
                                </>
                              ) : (
                                <>
                                  <EyeOff className="h-3 w-3 mr-1" />
                                  Inactif
                                </>
                              )}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => handleToggleActive(product)}
                                className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition"
                                title={product.is_active ? 'Désactiver' : 'Activer'}
                              >
                                {product.is_active ? (
                                  <EyeOff className="h-4 w-4" />
                                ) : (
                                  <Eye className="h-4 w-4" />
                                )}
                              </button>
                              
                              <button
                                onClick={() => handleEditProduct(product)}
                                className="p-2 text-primary hover:text-primary/80 rounded-lg hover:bg-primary/10 transition"
                                title="Modifier"
                              >
                                <Edit className="h-4 w-4" />
                              </button>
                              
                              <button
                                onClick={() => handleDelete(product.id)}
                                className="p-2 text-red-500 hover:text-red-700 rounded-lg hover:bg-red-50 transition"
                                title="Supprimer"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {activeTab === 'orders' && (
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="border-b border-gray-200 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Commandes</h2>
                <p className="text-gray-600 mt-1">Gérez les commandes de vos clients</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={loadOrders} className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Rafraîchir
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-4">
              {isLoadingOrders ? (
                <div className="py-12 text-center">
                  <div className="animate-spin inline-block mb-4 w-10 h-10 border-3 border-primary border-t-transparent rounded-full" />
                  <p className="text-gray-600">Chargement des commandes...</p>
                </div>
              ) : orders.length === 0 ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <AlertCircle className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-600 mb-2">Aucune commande</h3>
                  <p className="text-gray-500 max-w-md mx-auto">Les commandes passées via WhatsApp apparaîtront ici.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Articles</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orders.map((order: any, idx: number) => {
                        // try to parse items if stored as JSON string
                        let items = order.items
                        try {
                          if (typeof items === 'string') items = JSON.parse(items)
                        } catch (e) {
                          // ignore
                        }

                        const itemCount = Array.isArray(items) ? items.length : (items ? 1 : 0)
                        const total = order.total ?? order.total_price ?? order.amount ?? ''

                        return (
                          <tr key={order.id || idx} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm text-gray-700">{idx + 1}</td>
                            <td className="px-6 py-4 text-sm">
                              <div className="font-medium text-gray-900">{order.customer_name || order.name || order.whatsapp_name || 'WhatsApp'}</div>
                              <div className="text-xs text-gray-500">{order.whatsapp_number || order.phone || ''}</div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">{itemCount} article{itemCount > 1 ? 's' : ''}</td>
                            <td className="px-6 py-4 text-sm font-semibold text-primary">{typeof total === 'number' ? `${total.toLocaleString()} FCFA` : total}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{order.created_at ? new Date(order.created_at).toLocaleString() : ''}</td>
                            <td className="px-6 py-4 text-sm">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={async () => {
                                    setSelectedOrder(order)
                                  }}
                                  className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm"
                                >
                                  Voir
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        <OrderDetailsModal isOpen={!!selectedOrder} order={selectedOrder} onClose={() => setSelectedOrder(null)} />

        {activeTab === 'settings' && (
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="border-b border-gray-200">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Paramètres</h2>
                <p className="text-gray-600 mt-1">Configurez votre boutique</p>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-800">Boutique Petal</p>
                      <p className="text-sm text-blue-700 mt-1">
                        Votre boutique est configurée pour recevoir des commandes via WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Paramètres généraux</h3>
                  <div className="space-y-4 max-w-md">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom de la boutique
                      </label>
                      <input
                        type="text"
                        defaultValue="Petal"
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Numéro WhatsApp
                      </label>
                      <input
                        type="text"
                        defaultValue="+2250701781701"
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    
                    <Button variant="primary">
                      Enregistrer les modifications
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export const DashboardPage: React.FC = () => {
  return (
    <AdminRoute>
      <DashboardContent />
    </AdminRoute>
  )
}