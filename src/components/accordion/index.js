import React, { createContext, useContext, useState } from 'react'
import { Container, Inner, Frame, Title, Item, Header, Body } from './style/accordion'

const ToggleContext = createContext();

function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}
Accordion.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
Accordion.Frame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>
}
Accordion.Item = function A({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false)

  return <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
    <Item {...restProps}>{children}</Item>
  </ToggleContext.Provider>
}
Accordion.Header = function A({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return <Header onClick={() => setToggleShow(prev => !prev)}
    {...restProps}>
    {children}
    {toggleShow ?
      (<img src="/images/icons/close-slim.png" alt="close" />) :
      (<img src="/images/icons/add.png" alt="open" />)}
  </Header>
}
Accordion.Body = function A({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow && <Body {...restProps}>{children}</Body>;
}

export default Accordion
