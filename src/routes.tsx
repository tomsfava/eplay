import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Category from './pages/Category'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Category />} />
  </Routes>
)

export default Rotas
