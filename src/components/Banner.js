import React from 'react'
import styled from 'styled-components'
import BannerBg from '../assets/images/banner-bg.png'

const Container = styled.div`
    position: relative;
    height: 570px;
    margin-top: 12rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h2`
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;
    color: transparent;
    -webkit-text-stroke: 1px #ffffff;
`

const SubTitle = styled.h3`
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.3;
    margin: 0;
    color: #ffffff;
    text-align: center;
`

const FeaturedCta = styled.div`
    margin-top: 3rem;
`

const Button = styled.button`
    background: transparent;
    font-size: 1rem;
    border: 1px solid #ffffff;
    color: #ffffff;
    padding: 0.9rem 2.5rem;
    width: fit-content;
    cursor: pointer;
    transition: all linear 0.3s;

    &:hover {
        background: #ffffff;
        color: #000000;
    }
`

export const Banner = () => {
  return (
    <Container style={{backgroundImage: `url(${BannerBg})`}}>
        <Title>FASHION REDEFINED.</Title>
        <SubTitle>ROCK YOUR STYLE, <br /> BEING BORING ISN’T <br /> ALLOWED HERE</SubTitle>

        <FeaturedCta>
            <Button>WE'RE HIRING</Button>
        </FeaturedCta>
    </Container>
  )
}
