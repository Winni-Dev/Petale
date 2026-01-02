// import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import { Toaster } from 'react-hot-toast'
// import { Navbar } from './components/Layout/Navbar'
// import { WhatsAppButton } from './components/Layout/WhatsAppButton'
// import { CartProvider } from './contexts/CartContext'
// import { HomePage } from './pages/HomePage'
// import { ProductsPage } from './pages/ProductsPage'
// import { CartPage } from './pages/CartPage'
// import { LoginPage } from './pages/admin/LoginPage'
// import { DashboardPage } from './pages/admin/DashboardPage'

// const App: React.FC = () => {
//   return (
//     <CartProvider>
//       <Router>
//         <div className="min-h-screen bg-background">
//           <Navbar />
          
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/produits" element={<ProductsPage />} />
//             <Route path="/panier" element={<CartPage />} />
//             <Route path="/admin/login" element={<LoginPage />} />
//             <Route path="/admin" element={<DashboardPage />} />
//           </Routes>
          
//           <WhatsAppButton />
//           <Toaster position="bottom-right" />
//         </div>
//       </Router>
//     </CartProvider>
//   )
// }

// export default App



import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Navbar } from './components/Layout/Navbar'
import { WhatsAppButton } from './components/Layout/WhatsAppButton'
import { CartProvider } from './contexts/CartContext'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { CartPage } from './pages/CartPage'
import { LoginPage } from './pages/admin/LoginPage'
import { DashboardPage } from './pages/admin/DashboardPage'

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produits" element={<ProductsPage />} />
            <Route path="/panier" element={<CartPage />} />
            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/admin" element={<DashboardPage />} />
          </Routes>
          
          <WhatsAppButton />
          <Toaster 
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#85841F',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#7B4B09',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 4000,
                style: {
                  background: '#ef4444',
                },
              },
            }}
          />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App