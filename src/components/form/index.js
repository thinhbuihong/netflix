import React from 'react'
import {
  Container, Error, Title, Text,
  TextSmall, Link, Input, Submit, Base
} from './style/form';

export default function Form({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}
Form.Error = function A({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>
};

Form.Base = function A({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>
};

Form.Title = function A({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
};

Form.Text = function A({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
};

Form.TextSmall = function A({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>
};

Form.Link = function A({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
};

Form.Input = function A({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>
};

Form.Submit = function A({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>
};