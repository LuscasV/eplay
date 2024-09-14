import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const HeaderBar = styled.header`
  display: flex;
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 40px;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  > div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex: 1;
    justify-content: space-between;

    ${Links} {
      display: none;
    }
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;
`
export const CartButton = styled.a`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${cores.branca};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
