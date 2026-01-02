// // src/components/admin/AdminRoute.tsx
// import React, { useEffect, useState } from 'react'
// import { Navigate } from 'react-router-dom'
// import { adminAuthService } from '../../services/adminAuth'
// import { Loader2 } from 'lucide-react'

// interface AdminRouteProps {
//   children: React.ReactNode
// }

// export const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
//   const [isChecking, setIsChecking] = useState(true)
//   const [isAuthenticated, setIsAuthenticated] = useState(false)

//   useEffect(() => {
//     checkAuth()
//   }, [])

//   const checkAuth = async () => {
//     const authenticated = adminAuthService.isAuthenticated()
    
//     // Optionnel: Valider la session avec le serveur
//     // const valid = await adminAuthService.validateSession()
    
//     setIsAuthenticated(authenticated)
//     setIsChecking(false)
//   }

//   if (isChecking) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
//           <p className="text-gray-600">Vérification de l'authentification...</p>
//         </div>
//       </div>
//     )
//   }

//   if (!isAuthenticated) {
//     return <Navigate to="/admin/login" replace />
//   }

//   return <>{children}</>
// }


import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { adminAuthService } from '../../services/adminAuth'
import { Loader2, AlertTriangle } from 'lucide-react'

interface AdminRouteProps {
  children: React.ReactNode
}

export const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const [isChecking, setIsChecking] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    checkAuth()
    
    // Vérifier périodiquement l'authentification
    const interval = setInterval(() => {
      const authStatus = adminAuthService.isAuthenticated()
      if (!authStatus) {
        setIsAuthenticated(false)
      }
    }, 60000) // Vérifier toutes les minutes
    
    return () => clearInterval(interval)
  }, [location.pathname])

  const checkAuth = () => {
    try {
      const authenticated = adminAuthService.isAuthenticated()
      setIsAuthenticated(authenticated)
      
      if (!authenticated) {
        setError('Vous devez être connecté pour accéder à cette page.')
      }
    } catch (err: any) {
      console.error('Auth check error:', err)
      setError('Erreur de vérification d\'authentification')
      setIsAuthenticated(false)
    } finally {
      setIsChecking(false)
    }
  }

  const handleRetry = () => {
    setIsChecking(true)
    setError(null)
    checkAuth()
  }


  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-gray-600">Vérification de l'authentification...</p>
        </div>
      </div>
    )
  }

  if (error && !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Accès refusé</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            
            <div className="space-y-3">
              <button
                onClick={handleRetry}
                className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Réessayer
              </button>
              
              <a
                href="/admin/login"
                className="block w-full py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Page de connexion
              </a>
              
              <a
                href="/"
                className="block w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Retour à la boutique
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location.pathname }} replace />
  }

  return <>{children}</>
}