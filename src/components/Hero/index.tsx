import * as S from './styles'
import Tag from '../Tag'
import Button from '../Button'

import { formataPreco } from '../ProductsList'
import { Game } from '../../pages/Home'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>

      <S.Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De {formataPreco(game.prices.old)}</span>
          )}
          {game.prices.current && <>Por {formataPreco(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button
            variant="primary"
            type="button"
            title="clique aqui para adicionar esse jogo ao carrinho"
          >
            Adicionar ao carrinho
          </Button>
        )}
      </S.Infos>
    </div>
  </S.Banner>
)
export default Hero
