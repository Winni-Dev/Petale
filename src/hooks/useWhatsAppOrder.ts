// import { CartItem } from '../types'

// interface OrderFormData {
//   name: string
//   phone: string
//   deliveryAddress: string
// }

// export const useWhatsAppOrder = () => {
//   const openWhatsAppOrder = (
//     items: CartItem[], 
//     total: number, 
//     formData?: OrderFormData
//   ) => {
//     const phoneNumber = '+2250701781701'
    
//     // Formatage professionnel du message
//     let message = '🌟 *NOUVELLE COMMANDE*\n\n'
    
//     // Informations client
//     if (formData) {
//       message += '👤 *INFORMATIONS CLIENT*\n'
//       message += `📝 Nom: ${formData.name}\n`
//       message += `📱 Téléphone: ${formData.phone}\n`
//       message += `📍 Lieu de livraison: ${formData.deliveryAddress}\n\n`
//     }
    
//     // Détails de la commande
//     message += '🛍️ *DÉTAILS DE LA COMMANDE*\n'
//     message += '━━━━━━━━━━━━━━━━━━━━\n'
    
//     items.forEach((item, index) => {
//       const itemTotal = item.price * item.quantity
//       message += `${index + 1}. ${item.quantity}x ${item.name}\n`
//       message += `   💰 ${item.price.toLocaleString()} FCFA × ${item.quantity} = ${itemTotal.toLocaleString()} FCFA\n\n`
//     })
    
//     message += '━━━━━━━━━━━━━━━━━━━━\n'
//     message += `💰 *TOTAL: ${total.toLocaleString()} FCFA*\n\n`
    
//     // Message de fin
//     message += '✅ Merci de confirmer cette commande.\n'
//     message += '📦 La livraison se fera à l\'adresse indiquée.\n'
//     message += '💳 Paiement à la livraison.'
    
//     const encodedText = encodeURIComponent(message)
//     window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank')
//   }

//   return { openWhatsAppOrder }
// }



// hooks/useWhatsAppOrder.ts - Version alternative
import { CartItem } from '../types'

interface OrderFormData {
  name: string
  phone: string
  deliveryAddress: string
}

export const useWhatsAppOrder = () => {
  const formatOrderMessage = (
    items: CartItem[], 
    total: number, 
    formData?: OrderFormData
  ): string => {
    let message = '🌟 *NOUVELLE COMMANDE*\n\n'
    
    if (formData) {
      message += '👤 *INFORMATIONS CLIENT*\n'
      message += `📝 Nom: ${formData.name}\n`
      message += `📱 Téléphone: ${formData.phone}\n`
      message += `📍 Lieu de livraison: ${formData.deliveryAddress}\n\n`
    }
    
    message += '🛍️ *DÉTAILS DE LA COMMANDE*\n'
    message += '━━━━━━━━━━━━━━━━━━━━\n'
    
    items.forEach((item, index) => {
      const itemTotal = item.price * item.quantity
      message += `${index + 1}. ${item.quantity}x ${item.name}\n`
      message += `   💰 ${item.price.toLocaleString()} FCFA × ${item.quantity} = ${itemTotal.toLocaleString()} FCFA\n\n`
    })
    
    message += '━━━━━━━━━━━━━━━━━━━━\n'
    message += `💰 *TOTAL: ${total.toLocaleString()} FCFA*\n\n`
    message += '✅ Merci de confirmer cette commande.\n'
    message += '📦 La livraison se fera à l\'adresse indiquée.\n'
    message += '💳 Paiement à la livraison.'
    
    return message
  }

  const createWhatsAppUrl = (message: string): string => {
    const phoneNumber = '2250701781701' // Sans le + pour wa.me
    const encodedText = encodeURIComponent(message)
    return `https://wa.me/${phoneNumber}?text=${encodedText}`
  }

  const openWhatsAppLink = (url: string): boolean => {
    // Essayer plusieurs méthodes successivement
    const methods = [
      () => {
        // Méthode 1: Lien temporaire (le plus fiable)
        const link = document.createElement('a')
        link.href = url
        link.target = '_blank'
        link.rel = 'noopener noreferrer'
        link.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;'
        document.body.appendChild(link)
        link.click()
        setTimeout(() => document.body.removeChild(link), 1000)
        return true
      },
      () => {
        // Méthode 2: window.open avec timeout
        const newWindow = window.open(url, '_blank')
        if (newWindow) {
          setTimeout(() => {
            if (newWindow.closed) {
              console.log('WhatsApp ouvert avec succès')
            }
          }, 1000)
          return true
        }
        return false
      },
      () => {
        // Méthode 3: Redirection directe (dernier recours)
        window.location.href = url
        return true
      }
    ]
    
    for (const method of methods) {
      try {
        if (method()) {
          return true
        }
      } catch (error) {
        console.warn('Méthode WhatsApp échouée:', error)
        continue
      }
    }
    
    return false
  }

  const openWhatsAppOrder = (
    items: CartItem[], 
    total: number, 
    formData?: OrderFormData
  ) => {
    const message = formatOrderMessage(items, total, formData)
    const whatsappUrl = createWhatsAppUrl(message)
    
    // Vérifier si on est sur mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    if (isMobile) {
      // Sur mobile, on donne plus de temps pour les animations
      setTimeout(() => {
        openWhatsAppLink(whatsappUrl)
      }, 100)
    } else {
      // Sur desktop, ouvrir immédiatement
      openWhatsAppLink(whatsappUrl)
    }
  }

  return { 
    openWhatsAppOrder,
    formatOrderMessage,
    createWhatsAppUrl
  }
}