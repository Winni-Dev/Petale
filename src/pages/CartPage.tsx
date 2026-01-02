import React from 'react'
import { CartItem } from '../components/cart/CartItem'
import { CartSummary } from '../components/cart/CartSummary'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO/SEO'

export const CartPage: React.FC = () => {
  const { items } = useCart()
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''

  return (
    <>
      <SEO
        title="Mon Panier - Petale | Cosmétiques bio"
        description="Vérifiez votre panier et finalisez votre commande de produits cosmétiques bio. Livraison rapide en Côte d'Ivoire. Paiement à la livraison."
        keywords="panier, commande cosmétiques, produits bio, livraison Côte d'Ivoire, paiement livraison"
        url={`${baseUrl}/panier`}
      />
      <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary mb-2">
            Mon Panier
          </h1>
          <p className="text-gray-600">
            Vérifiez vos articles avant de commander
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <svg
                  className="h-16 w-16 text-gray-300 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-600 mb-4">
                  Votre panier est vide
                </h3>
                <p className="text-gray-500 mb-6">
                  Commencez vos achats en parcourant notre catalogue
                </p>
                <Link
                  to="/produits"
                  className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Découvrir les produits
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>

          <div>
            <CartSummary />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}