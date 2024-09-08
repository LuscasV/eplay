import { Container, FooterSection, Links, Link, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <Link to="/categories#rpg">RPG</Link>
            </li>
            <li>
              <Link to="/categories#action">Ação</Link>
            </li>
            <li>
              <Link to="/categories#sports">Esportes</Link>
            </li>
            <li>
              <Link to="/categories#simulator">Simulação</Link>
            </li>
            <li>
              <Link to="/categories#fight">Luta</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <li>
              <Link to="/#on-sale">Promoções</Link>
            </li>
            <li>
              <Link to="/#on-soon">Em breve</Link>
            </li>
          </Links>
        </FooterSection>
        <div>
          <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
        </div>
      </div>
    </Container>
  )
}

export default Footer
