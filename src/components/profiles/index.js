import { Container, Title, List, Item, Picture, Name } from './style/profiles'
import React from 'react'

export default function Profiles({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

Profiles.Title = function A({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
};
Profiles.List = function A({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>
};
Profiles.User = function A({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
};
Profiles.Picture = function A({ src, ...restProps }) {
  return <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}></Picture>
};
Profiles.Name = function A({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>
};
