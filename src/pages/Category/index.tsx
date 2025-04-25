import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

const Category = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsporte, setGamesEsporte] = useState<Game[]>([])
  const [gamesSimul, setGamesSimul] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))
    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsporte(res))
    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimul(res))
    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])

  return (
    <>
      <ProductsList games={gamesAcao} title="Ação" background="black" />
      <ProductsList games={gamesEsporte} title="Esportes" background="grey" />
      <ProductsList games={gamesSimul} title="Simulação" background="black" />
      <ProductsList games={gamesLuta} title="Luta" background="grey" />
      <ProductsList games={gamesRPG} title="RPG" background="black" />
    </>
  )
}

export default Category
