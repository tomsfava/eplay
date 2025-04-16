import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="http://placehold.co/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ab
      magnam vitae corrupti deserunt pariatur similique quo illum, doloremque
      minima autem est non laudantium itaque natus, earum enim sequi cumque.
    </Descricao>
  </Card>
)

export default Product
