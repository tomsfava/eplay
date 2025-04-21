import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Category />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
