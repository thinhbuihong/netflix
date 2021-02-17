import React from 'react'
import { Container, Input, Text, Button, Break } from './style/opt-form'

export default function OptForm({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

OptForm.Input = function A({ ...restProps }) {
  return <Input {...restProps} />
}

OptForm.Button = function A({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="try now" />
    </Button>
  )
}
OptForm.Text = function A({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
OptForm.Break = function A({ ...restProps }) {
  return <Break {...restProps} />
}
