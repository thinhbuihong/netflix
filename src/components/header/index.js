import React, { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import {
  Profile, Picture, Dropdown, Link, Feature,
  Group, FeatureCallOut, Text, Background,
  Container, Logo, ButtonLink,
  Search, SearchIcon, SearchInput,
  PlayButton,
} from './style/header'

function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

export default Header
Header.Picture = function A({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`}></Picture>
};
Header.Profile = function A({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>
};
Header.Dropdown = function A({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>
};
Header.Search = function A({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);

  return <Search {...restProps}>
    <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)} >
      <img src="/images/icons/search.png" alt="Search" />
    </SearchIcon>
    <SearchInput value={searchTerm}
      onChange={({ target }) => setSearchTerm(target.value)}
      placeholder="Search films and series"
      active={searchActive}
    />
  </Search>
};
Header.Feature = function A({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>
};
Header.Text = function A({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
};
Header.TextLink = function A({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
};
Header.FeatureCallOut = function A({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
};

Header.Group = function A({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
};
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
Header.ButtonLink = function A({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
};

Header.PlayButton = function A({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>
};