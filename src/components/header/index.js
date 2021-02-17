import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Background, Container, Logo } from './style/header'

function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

export default Header

Header.Frame = function A({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.Logo = function A({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps}></Logo>
    </ReactRouterLink>
  )
}