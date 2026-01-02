import React from 'react'
import { MessageCircle } from 'lucide-react'

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '+2250701781701'
  const message = encodeURIComponent('Bonjour, je souhaite des informations sur vos produits.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-105"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  )
}