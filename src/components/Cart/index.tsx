import Button from '../Button'

import starWars from '../../assets/images/star_wars.png'

import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar,
} from './styles'
import Tag from '../Tag'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={starWars} />
            <div>
              <h3>nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={starWars} />
            <div>
              <h3>nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Quantity> 2 jogos no carrinho</Quantity>
        <Prices>
          total de r$ 250,00 <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
