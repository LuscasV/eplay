import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <HeaderBar>
      <div>
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

      <LinkCart href="#">
        0 - produtos(s)
        <img src={carrinho} alt="Carrinho" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
