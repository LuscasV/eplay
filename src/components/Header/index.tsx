import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, CartButton, Hamburguer } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Hamburguer>
          <span />
          <span />
          <span />
        </Hamburguer>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#novidades">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#promocoes">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>

      <CartButton onClick={openCart}>
        {items.length} <span> - produtos(s)</span>
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
