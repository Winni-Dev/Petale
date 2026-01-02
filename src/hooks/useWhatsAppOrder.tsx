import { CartItem } from '../types'

export const useWhatsAppOrder = () => {
  const openWhatsAppOrder = (items: CartItem[], total: number) => {
    const phoneNumber = '+2250701781701'
    const lines = items.map(i => `${i.quantity}x ${i.name} - ${i.price.toLocaleString()} FCFA`)
    const text = encodeURIComponent(`Bonjour, je souhaite commander:\n${lines.join('\n')}\nTotal: ${total.toLocaleString()} FCFA`)
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank')
  }

  return { openWhatsAppOrder }
}
