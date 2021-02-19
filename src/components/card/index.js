import React, { createContext, useContext, useState } from 'react'
import {
  Container, Group, Title, SubTitle,
  Text, Meta, Entities, Item, Image,
  Feature, FeatureTitle,
  Content,
  FeatureClose,
  Maturity,
  FeatureText,
} from './style/card';

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{
      showFeature, setItemFeature,
      itemFeature, setShowFeature,
    }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  )
}

Card.Group = function A({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
};
Card.Title = function A({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
};
Card.SubTitle = function A({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
};
Card.Text = function A({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
};
Card.Meta = function A({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>
};
Card.Feature = function A({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

  return showFeature ? (
    <Feature {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>

      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>

          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null
};
Card.Entities = function A({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>
};
Card.Item = function A({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return <Item onClick={() => {
    setItemFeature(item);
    setShowFeature(true)
  }} {...restProps}>
    {children}
  </Item>
};
Card.Image = function A({ ...restProps }) {
  return <Image {...restProps}></Image>
};

export const FeatureContext = createContext();
