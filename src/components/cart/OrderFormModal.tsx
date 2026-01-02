import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, User, Phone, MapPin } from 'lucide-react'
import { Input } from '../UI/Input'
import { Button } from '../UI/Button'
import { CartItem } from '../../types'

interface OrderFormModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (data: { name: string; phone: string; deliveryAddress: string }) => void
  items: CartItem[]
  totalPrice: number
}

export const OrderFormModal: React.FC<OrderFormModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  items,
  totalPrice
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    deliveryAddress: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    deliveryAddress: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      deliveryAddress: ''
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le numéro de téléphone est requis'
    } else if (!/^(\+225|0)?[0-9]{9,10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Veuillez entrer un numéro valide'
    }

    if (!formData.deliveryAddress.trim()) {
      newErrors.deliveryAddress = 'Le lieu de livraison est requis'
    }

    setErrors(newErrors)
    return !newErrors.name && !newErrors.phone && !newErrors.deliveryAddress
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      onConfirm(formData)
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-t-2xl flex items-center justify-between">
              <h2 className="text-2xl font-bold">Informations de livraison</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Récapitulatif de la commande */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-800 mb-3">Récapitulatif</h3>
                <div className="space-y-2 text-sm">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-gray-600">
                      <span>{item.quantity}x {item.name}</span>
                      <span className="font-medium">{(item.price * item.quantity).toLocaleString()} FCFA</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 mt-2 flex justify-between font-bold text-primary">
                    <span>Total</span>
                    <span>{totalPrice.toLocaleString()} FCFA</span>
                  </div>
                </div>
              </div>

              {/* Nom */}
              <Input
                label="Nom complet"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                error={errors.name}
                icon={<User className="h-4 w-4" />}
                placeholder="Votre nom complet"
                required
              />

              {/* Téléphone */}
              <Input
                label="Numéro de téléphone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                error={errors.phone}
                icon={<Phone className="h-4 w-4" />}
                placeholder="+225 XX XX XX XX XX ou 0X XX XX XX XX"
                required
              />

              {/* Lieu de livraison */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Lieu de livraison
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <textarea
                    value={formData.deliveryAddress}
                    onChange={(e) => handleChange('deliveryAddress', e.target.value)}
                    className={`w-full rounded-lg border ${
                      errors.deliveryAddress ? 'border-red-500' : 'border-gray-300'
                    } bg-white px-3 py-2 pl-10 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                    placeholder="Adresse complète de livraison"
                    rows={3}
                    required
                  />
                </div>
                {errors.deliveryAddress && (
                  <p className="text-sm text-red-600">{errors.deliveryAddress}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Annuler
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  className="flex-1"
                  isLoading={isSubmitting}
                >
                  Confirmer la commande
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

