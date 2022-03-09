import React from 'react'
import styled from 'styled-components'
import { lgTablet, mobile, smTablet } from '../responsive'

const FooterContainer = styled.div`
  display: grid;
  place-items: center;
  margin: 5rem 0 0;
`

const FooterText = styled.div`
  text-align: center;
  margin: 0;
  color: #6a6a6a;

  ${mobile({
    fontSize: '.9rem'
  })}

  ${smTablet({
    fontSize: '.9rem'
  })}

  ${lgTablet({
    fontSize: '.9rem'
  })}
`

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>&copy; Copyright {year}, Alte Couture</FooterText>
    </FooterContainer>
  )
}