import React from 'react'
import { Spinner, LockBody, Picture, ReleaseBody } from './style/loading'

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />

    </Spinner>
  )
}

Loading.ReleaseBody = function A() {
  return <ReleaseBody />
};
