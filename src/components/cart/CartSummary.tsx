// import React, { useState } from 'react'
// import { useCart } from '../../contexts/CartContext'
// import { useWhatsAppOrder } from '../../hooks/useWhatsAppOrder'
// import { Button } from '../UI/Button'
// import { CartItem as CartItemType } from '../../types'
// import toast from 'react-hot-toast'
// import { createOrder } from '../../services/supabase'
// import { OrderFormModal } from './OrderFormModal'

// export const CartSummary: React.FC = () => {
//   const { items, totalPrice, clearCart } = useCart()
//   const { openWhatsAppOrder } = useWhatsAppOrder()
//   const [isFormOpen, setIsFormOpen] = useState(false)

//   const handleOrderClick = () => {
//     setIsFormOpen(true)
//   }

//   const handleFormConfirm = async (formData: { name: string; phone: string; deliveryAddress: string }) => {
//     try {
//       // First, persist the order in Supabase so it appears in the admin dashboard
//       const payload = {
//         items: items.map(i => ({ productId: i.id, name: i.name, price: i.price, quantity: i.quantity })),
//         total: totalPrice,
//         whatsapp_number: formData.phone,
//         customer_name: formData.name,
//         delivery_address: formData.deliveryAddress
//       }

//       await createOrder(payload)
//       toast.success('✅ Commande enregistrée')

//       // Open WhatsApp with formatted message
//       openWhatsAppOrder(items, totalPrice, formData)
      
//       // Close modal
//       setIsFormOpen(false)
      
//       // Optionally clear the cart after opening WhatsApp
//       // clearCart()
//     } catch (err: any) {
//       console.error('Erreur enregistrement commande:', err)
//       toast.error('Impossible d\'enregistrer la commande (la conversation WhatsApp sera néanmoins ouverte)')
      
//       // Open WhatsApp anyway
//       openWhatsAppOrder(items, totalPrice, formData)
//       setIsFormOpen(false)
//     }
//   }

//   if (items.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <h3 className="text-xl font-semibold text-gray-600 mb-4">
//           Votre panier est vide
//         </h3>
//         <p className="text-gray-500">
//           Ajoutez des produits pour commencer vos achats
//         </p>
//       </div>
//     )
//   }

//   return (
//     <div className="bg-white rounded-xl shadow-lg p-6">
//       <h2 className="text-xl font-bold text-secondary mb-6">
//         Récapitulatif de la commande
//       </h2>
      
//       <div className="space-y-4 mb-6">
//         <div className="flex justify-between">
//           <span className="text-gray-600">Articles</span>
//           <span className="font-medium">
//             {items.reduce((sum: number, item: CartItemType) => sum + item.quantity, 0)}
//           </span>
//         </div>
        
//         <div className="flex justify-between">
//           <span className="text-gray-600">Sous-total</span>
//           <span className="font-medium">
//             {totalPrice.toLocaleString()} FCFA
//           </span>
//         </div>
        
//         <div className="border-t pt-4">
//           <div className="flex justify-between text-lg font-bold">
//             <span>Total</span>
//             <span className="text-primary">
//               {totalPrice.toLocaleString()} FCFA
//             </span>
//           </div>
//         </div>
//       </div>
      
//       <div className="space-y-3">
//         <Button
//           variant="primary"
//           size="lg"
//           className="w-full"
//           onClick={handleOrderClick}
//         >
//           Commander sur WhatsApp
//         </Button>
        
//         <Button
//           variant="outline"
//           size="lg"
//           className="w-full"
//           onClick={clearCart}
//         >
//           Vider le panier
//         </Button>
//       </div>
      
//       <div className="mt-6 text-sm text-gray-500">
//         <p className="text-center">
//           Votre commande sera traitée via WhatsApp. Le paiement se fait à la livraison.
//         </p>
//       </div>

//       {/* Order Form Modal */}
//       <OrderFormModal
//         isOpen={isFormOpen}
//         onClose={() => setIsFormOpen(false)}
//         onConfirm={handleFormConfirm}
//         items={items}
//         totalPrice={totalPrice}
//       />
//     </div>
//   )
// }

// components/cart/CartSummary.tsx
import React, { useState } from 'react'
import { useCart } from '../../contexts/CartContext'
import { useWhatsAppOrder } from '../../hooks/useWhatsAppOrder'
import { Button } from '../UI/Button'
import { CartItem as CartItemType } from '../../types'
import toast from 'react-hot-toast'
import { createOrder } from '../../services/supabase'
import { OrderFormModal } from './OrderFormModal'

export const CartSummary: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart()
  const { openWhatsAppOrder } = useWhatsAppOrder()
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleOrderClick = () => {
    setIsFormOpen(true)
  }

  const handleFormConfirm = async (formData: { name: string; phone: string; deliveryAddress: string }) => {
    try {
      // First, persist the order in Supabase so it appears in the admin dashboard
      const payload = {
        items: items.map(i => ({ productId: i.id, name: i.name, price: i.price, quantity: i.quantity })),
        total: totalPrice,
        whatsapp_number: formData.phone,
        customer_name: formData.name,
        delivery_address: formData.deliveryAddress
      }

      await createOrder(payload)
      toast.success('✅ Commande enregistrée')

      // Fermer le modal d'abord
      setIsFormOpen(false)
      
      // Attendre que le modal soit complètement fermé avant d'ouvrir WhatsApp
      setTimeout(() => {
        openWhatsAppOrder(items, totalPrice, formData)
      }, 400)
      
      // Optionally clear the cart after opening WhatsApp
      // clearCart()
    } catch (err: any) {
      console.error('Erreur enregistrement commande:', err)
      toast.error('Impossible d\'enregistrer la commande (la conversation WhatsApp sera néanmoins ouverte)')
      
      setIsFormOpen(false)
      setTimeout(() => {
        openWhatsAppOrder(items, totalPrice, formData)
      }, 400)
    }
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-600 mb-4">
          Votre panier est vide
        </h3>
        <p className="text-gray-500">
          Ajoutez des produits pour commencer vos achats
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-secondary mb-6">
        Récapitulatif de la commande
      </h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Articles</span>
          <span className="font-medium">
            {items.reduce((sum: number, item: CartItemType) => sum + item.quantity, 0)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Sous-total</span>
          <span className="font-medium">
            {totalPrice.toLocaleString()} FCFA
          </span>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-primary">
              {totalPrice.toLocaleString()} FCFA
            </span>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={handleOrderClick}
        >
          Commander sur WhatsApp
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className="w-full"
          onClick={clearCart}
        >
          Vider le panier
        </Button>
      </div>
      
      <div className="mt-6 text-sm text-gray-500">
        <p className="text-center">
          Votre commande sera traitée via WhatsApp. Le paiement se fait à la livraison.
        </p>
      </div>

      {/* Order Form Modal */}
      <OrderFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onConfirm={handleFormConfirm}
        items={items}
        totalPrice={totalPrice}
      />
    </div>
  )
}

// Export par défaut aussi pour compatibilité
export default CartSummary