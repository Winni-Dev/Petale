// src/components/admin/AdminHeader.tsx
import React, { useState } from 'react'
import { LogOut, User, ChevronDown } from 'lucide-react'
import { adminAuthService } from '../../services/adminAuth'
import toast from 'react-hot-toast'
import ConfirmModal from '../UI/ConfirmModal'

export const AdminHeader: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  const session = adminAuthService.getSession()

  const handleLogout = () => {
    // open modal instead
    setShowConfirm(true)
  }

  const [showConfirm, setShowConfirm] = useState(false)

  const doLogout = async () => {
    try {
      adminAuthService.logout()
      toast.success('Déconnexion réussie')
    } catch (err: any) {
      toast.error('Erreur lors de la déconnexion')
    } finally {
      setShowConfirm(false)
    }
  }

  return (
    <>
      <header className="bg-white shadow-md overflow-visible relative z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 overflow-visible">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-shrink-0 min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold text-secondary truncate">Administration Petal</h1>
            <p className="text-sm sm:text-base text-gray-600">Gestion de la boutique</p>
          </div>
          
          <div className="relative w-full sm:w-auto flex-shrink-0 z-[100]">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-100 transition w-full sm:w-auto justify-between sm:justify-start relative z-[100]"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <p className="font-medium text-gray-900 text-sm sm:text-base truncate max-w-[150px] sm:max-w-none">{session?.email}</p>
                  <p className="text-xs sm:text-sm text-gray-500">Administrateur</p>
                </div>
              </div>
              <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 text-gray-400 transition flex-shrink-0 ${showMenu ? 'rotate-180' : ''}`} />
            </button>
            
            {showMenu && (
              <>
                <div
                  className="fixed inset-0 z-[90]"
                  onClick={() => setShowMenu(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-full sm:w-56 bg-white rounded-lg shadow-2xl z-[100] border-2 border-gray-300" style={{ position: 'absolute' }}>
                  <div className="p-4 border-b border-gray-200">
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Connecté en tant que</p>
                    <p className="text-xs sm:text-sm text-gray-500 break-words sm:truncate mt-1">{session?.email}</p>
                  </div>
                  
                  <div className="p-2">
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded transition-colors"
                    >
                      <LogOut className="h-4 w-4 mr-2 flex-shrink-0" />
                      Déconnexion
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      </header>
      <ConfirmModal
        isOpen={showConfirm}
        title="Déconnexion"
        message="Voulez-vous vraiment vous déconnecter ?"
        confirmText="Se déconnecter"
        cancelText="Annuler"
        onCancel={() => setShowConfirm(false)}
        onConfirm={doLogout}
      />
    </>
  )
}