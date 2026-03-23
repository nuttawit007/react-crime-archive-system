import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import CaseDetailPage from './pages/CaseDetailPage'
import CategoriesPage from './pages/CategoriesPage'
import RegionsPage from './pages/RegionsPage'

function App() {

  return (
    <>
      <div className="bg-black text-white mx-auto px-4 sm:px-8 lg:px-16 py-6 md:py-8 xl:px-30">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cases/:slug" element={<CaseDetailPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/regions" element={<RegionsPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
