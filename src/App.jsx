import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import CaseDetailPage from './pages/CaseDetailPage'
import CategoriesPage from './pages/CategoriesPage'
import RegionsPage from './pages/RegionsPage'
import ProvincePage from './pages/ProvincePage'
import SharePage from './pages/SharePage'
import ScrollToTop from './layouts/ScrollToTop'

function App() {

  return (
    <>
      <ScrollToTop />
      <div className="bg-black text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cases" element={<SharePage />} />
          <Route path="/cases/:slug" element={<CaseDetailPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:id" element={<CategoriesPage />} />
          <Route path="/regions" element={<RegionsPage />} />
          <Route path="/province/:code" element={<ProvincePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
