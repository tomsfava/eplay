import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Tag from '../Tag'

import { Banner } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <div>
        <h2>Hogwarts Legacy</h2>
        <p>
          De R$ 250,00 <br />
          Por R$ 190,00
        </p>
        <button>Adicionar ao carrinho</button>
      </div>
    </div>
  </Banner>
)

export default Hero
