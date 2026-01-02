// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { authService } from '../../services/supabase'
// import { Button } from '../../components/ui/Button'
// import { Card, CardContent, CardHeader } from '../../components/ui/Card'
// import toast from 'react-hot-toast'

// export const LoginPage: React.FC = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const navigate = useNavigate()

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
    
//     try {
//       setIsLoading(true)
//       await authService.signIn(email, password)
//       toast.success('Connexion réussie')
//       navigate('/admin')
//     } catch (error: any) {
//       toast.error(error.message || 'Erreur de connexion')
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-secondary">
//             Administration Petal
//           </h2>
//           <p className="mt-2 text-gray-600">
//             Connectez-vous pour gérer votre boutique
//           </p>
//         </div>

//         <Card>
//           <CardHeader>
//             <h3 className="text-xl font-semibold text-gray-900">
//               Connexion
//             </h3>
//           </CardHeader>
          
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//                   placeholder="admin@example.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                   Mot de passe
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//                   placeholder="••••••••"
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 variant="primary"
//                 size="lg"
//                 isLoading={isLoading}
//                 className="w-full"
//               >
//                 Se connecter
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }



// src/pages/admin/LoginPage.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Eye, EyeOff } from 'lucide-react'
import { adminAuthService } from '../../services/adminAuth'
import { Button } from '../../components/UI/Button'
import { Card, CardContent, CardHeader } from '../../components/UI/Card'
import toast from 'react-hot-toast'

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !password) {
      toast.error('Veuillez remplir tous les champs')
      return
    }

    try {
      setIsLoading(true)
      
      const result = await adminAuthService.login(email, password)
      
      if (result.success) {
        toast.success('Connexion réussie')
        navigate('/admin')
      } else {
        toast.error(result.message)
      }
    } catch (error: any) {
      toast.error('Erreur de connexion')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-md w-full space-y-8 p-4">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="text-3xl font-bold text-secondary">
            Administration Petal
          </h2>
          <p className="mt-2 text-gray-600">
            Accès réservé à l'administrateur
          </p>
        </div>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Authentification
            </h3>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email administrateur
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  placeholder="admin@votre-boutique.com"
                  autoComplete="username"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition pr-12"
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isLoading}
                className="w-full py-3"
              >
                {isLoading ? 'Connexion...' : 'Se connecter'}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  En cas de problème de connexion, contactez le support technique.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <a
            href="/"
            className="text-primary hover:text-primary/80 text-sm font-medium"
          >
            ← Retour à la boutique
          </a>
        </div>
      </div>
    </div>
  )
}