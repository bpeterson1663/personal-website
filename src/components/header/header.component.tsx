import React from 'react'
import { HeaderContainer, OptionsContainer, OptionLink } from './header.styles'

const Header = () => (
  <HeaderContainer>
    {/* <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer> */}
    <OptionsContainer>
      <OptionLink to="/contact">CONTACT</OptionLink>
      <OptionLink to="/about">ABOUT</OptionLink>
      <OptionLink to="/projects">PROJECTS</OptionLink>
      <OptionLink to="/experience">EXPERIENCE</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
)

export default Header
