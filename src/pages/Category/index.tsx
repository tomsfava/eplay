import {
  useGetActionQuery,
  useGetSportsQuery,
  useGetSimulQuery,
  useGetFightQuery,
  useGetRpgQuery
} from '../../services/api'

import ProductsList from '../../components/ProductsList'

const Category = () => {
  const { data: gamesAction } = useGetActionQuery()
  const { data: gamesSports } = useGetSportsQuery()
  const { data: gamesSimul } = useGetSimulQuery()
  const { data: gamesFight } = useGetFightQuery()
  const { data: gamesRpg } = useGetRpgQuery()

  if (gamesAction && gamesSports && gamesSimul && gamesFight && gamesRpg) {
    return (
      <>
        <ProductsList
          id="action"
          games={gamesAction}
          title="Ação"
          background="black"
        />
        <ProductsList
          id="sports"
          games={gamesSports}
          title="Esportes"
          background="grey"
        />
        <ProductsList
          id="simul"
          games={gamesSimul}
          title="Simulação"
          background="black"
        />
        <ProductsList
          id="fight"
          games={gamesFight}
          title="Luta"
          background="grey"
        />
        <ProductsList
          id="rpg"
          games={gamesRpg}
          title="RPG"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Category
