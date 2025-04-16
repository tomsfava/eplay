import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  titulo: string
  background: 'grey' | 'black'
}

const ProductsList = ({ background, titulo }: Props) => (
  <Container>
    <div className="container">
      <h2>{titulo}</h2>
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </Container>
)

export default ProductsList
