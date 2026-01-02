import { CartItem } from '../types'

interface OrderFormData {
  name: string
  phone: string
  deliveryAddress: string
}

export const useWhatsAppOrder = () => {
  const openWhatsAppOrder = (
    items: CartItem[], 
    total: number, 
    formData?: OrderFormData
  ) => {
    const phoneNumber = '+2250701781701'
    
    // Formatage professionnel du message
    let message = '🌟 *NOUVELLE COMMANDE*\n\n'
    
    // Informations client
    if (formData) {
      message += '👤 *INFORMATIONS CLIENT*\n'
      message += `📝 Nom: ${formData.name}\n`
      message += `📱 Téléphone: ${formData.phone}\n`
      message += `📍 Lieu de livraison: ${formData.deliveryAddress}\n\n`
    }
    
    // Détails de la commande
    message += '🛍️ *DÉTAILS DE LA COMMANDE*\n'
    message += '━━━━━━━━━━━━━━━━━━━━\n'
    
    items.forEach((item, index) => {
      const itemTotal = item.price * item.quantity
      message += `${index + 1}. ${item.quantity}x ${item.name}\n`
      message += `   💰 ${item.price.toLocaleString()} FCFA × ${item.quantity} = ${itemTotal.toLocaleString()} FCFA\n\n`
    })
    
    message += '━━━━━━━━━━━━━━━━━━━━\n'
    message += `💰 *TOTAL: ${total.toLocaleString()} FCFA*\n\n`
    
    // Message de fin
    message += '✅ Merci de confirmer cette commande.\n'
    message += '📦 La livraison se fera à l\'adresse indiquée.\n'
    message += '💳 Paiement à la livraison.'
    
    const encodedText = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank')
  }

  return { openWhatsAppOrder }
}
