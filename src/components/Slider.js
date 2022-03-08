import React from 'react'
import styled from 'styled-components'
import { mensWear } from '../data'

const Container = styled.div`
    position: relative;
    margin-top: 6rem;
`

const TextContainer = styled.div``

const Title = styled.h2`
    font-size: 0.8rem;
    font-weight: normal;
    color: #6F6F6F;
    margin: 0;
`

const SubTitle = styled.h1`
    font-family: 'Helvetica 45 Light', sans-serif;
    font-size: 1.75rem;
    color: #FFFFFF;
    font-weight: 200;
    margin: 0.5rem 0 0;
`

const SlideShow = styled.div`
    display: flex;
    align-items: stretch;
    overflow: auto;
    margin-top: 4rem;

    &::-webkit-scrollbar {
        display: none;
    }
`

const SliderItem = styled.div`
    background-position: center;
    background-size: cover;
    padding: 1rem;
    height: 425px;
    width: 300px;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    &:not(:last-child) {
        margin-right: 1.5rem;
    }
`

const SliderLabel = styled.p`
    font-size: 1.7rem;
    margin: 0;
    color: #ffffff;
`

const FeaturedCta = styled.div`
    margin: 4rem 0 0;
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

export const Slider = () => {
  return (
    <Container>
        <TextContainer>
            <Title>FEATURED</Title>
            <SubTitle>Men Summer Collection</SubTitle>
        </TextContainer>
        <SlideShow>
            {mensWear.map((item) => (
                <SliderItem
                    item={item}
                    key={item.name}
                    style={{backgroundImage: `url(${item.image})`}}
                >
                    <SliderLabel>{item.name}</SliderLabel>
                </SliderItem>
            ))}
        </SlideShow>
        <FeaturedCta>
            <Button>View All</Button>
        </FeaturedCta>
    </Container>
  )
}
