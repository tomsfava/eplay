import zelda from '../../assets/images/zelda.png'
import { Items, Item } from './styles'

const Gallery = () => (
  <Items>
    <Item>
      <img src={zelda} alt="imagem do link" />
    </Item>
    <Item>
      <img src={zelda} alt="imagem do link" />
    </Item>
    <Item>
      <img src={zelda} alt="imagem do link" />
    </Item>
    <Item>
      <img src={zelda} alt="imagem do link" />
    </Item>
  </Items>
)

export default Gallery
