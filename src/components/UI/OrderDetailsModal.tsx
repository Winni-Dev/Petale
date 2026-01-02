import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface OrderDetailsModalProps {
  isOpen: boolean
  order: any | null
  onClose: () => void
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({ isOpen, order, onClose }) => {
  if (!order) return null

  let items = order.items
  try {
    if (typeof items === 'string') items = JSON.parse(items)
  } catch (e) {
    // keep as-is
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            className="bg-white rounded-xl shadow-xl z-50 w-full max-w-2xl mx-4 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Détails de la commande</h3>
                <p className="text-sm text-gray-600">{order.customer_name || order.whatsapp_name || 'Client WhatsApp'}</p>
                {order.whatsapp_number && <p className="text-xs text-gray-500">{order.whatsapp_number}</p>}
                {order.delivery_address && (
                  <p className="text-xs text-gray-500 mt-1">
                    📍 {order.delivery_address}
                  </p>
                )}
              </div>
              <div className="text-right text-xs text-gray-500">
                {order.created_at ? new Date(order.created_at).toLocaleString() : ''}
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden mb-4">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs text-gray-500">Produit</th>
                    <th className="px-4 py-2 text-right text-xs text-gray-500">Quantité</th>
                    <th className="px-4 py-2 text-right text-xs text-gray-500">Prix</th>
                    <th className="px-4 py-2 text-right text-xs text-gray-500">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(items) && items.length > 0 ? (
                    items.map((it: any, i: number) => (
                      <tr key={i} className="border-t">
                        <td className="px-4 py-3 text-sm text-gray-800">{it.name || it.productId || 'Article'}</td>
                        <td className="px-4 py-3 text-sm text-right text-gray-800">{it.quantity ?? it.qty ?? 1}</td>
                        <td className="px-4 py-3 text-sm text-right text-gray-800">{typeof it.price === 'number' ? it.price.toLocaleString() + ' FCFA' : it.price}</td>
                        <td className="px-4 py-3 text-sm text-right text-gray-800">{( (it.price || 0) * (it.quantity || it.qty || 1) ).toLocaleString()} FCFA</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800" colSpan={4}>Détails non disponibles</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">Total</div>
              <div className="text-lg font-bold text-primary">{typeof order.total === 'number' ? `${order.total.toLocaleString()} FCFA` : order.total}</div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default OrderDetailsModal
