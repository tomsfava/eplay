import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import Banner from './components/Banner'
import { GlobalCss } from './styles'
import ProductsList from './components/ProductsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList titulo="Promoções" background="grey" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
