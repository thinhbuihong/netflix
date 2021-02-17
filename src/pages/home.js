import React from 'react'
import FaqsContainer, { OptFormContainer } from '../containers/faqs'
import FooterContainer from '../containers/footer'
import HeaderContainer from '../containers/header'
import JumbotronContainer from '../containers/jumbotron'
import { Feature } from '../components';

export default function Home() {
  return (
    <>
      <HeaderContainer >
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptFormContainer></OptFormContainer>
        </Feature>

      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}
