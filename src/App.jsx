import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import CaseDetailPage from './pages/CaseDetailPage'
import CategoriesPage from './pages/CategoriesPage'
import RegionsPage from './pages/RegionsPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cases/:slug" element={<CaseDetailPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/regions" element={<RegionsPage />} />
      </Routes>
    </>
  )
}

export default App
