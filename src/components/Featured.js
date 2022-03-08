import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ladiesWear } from '../data'

const zoomIn = keyframes`
    from {
        background-size: 100%;
    }

    to {
        background-size: 110%;
    }
`

const zoomOut = keyframes`
    from {
        background-size: 110%;
    }

    to {
        background-size: 100%;
    }
`

const Container = styled.div`
    margin-top: 4rem;
`

const TextContainer = styled.div`

`

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

const FeaturedGrid = styled.div`
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 420px);
    column-gap: 1.5rem;
    row-gap: 1.5rem;
`

const FeaturedItem = styled.div`
    text-align: center;
    color: #ffffff;
    border-radius: 2px;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    background-position: top;
    background-size: cover;
    animation: ${zoomOut} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1 forwards;

    &:hover {
        animation: ${zoomIn} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1 forwards;
    }

    &:nth-child(1) {
        grid-row: 1/3;
        align-items: center;
    }

    &:nth-child(2) {
        grid-row: 1/2;
        align-items: flex-end;
    }

    &:nth-child(3) {
        grid-row: 1/3;
        align-items: center;
    }

    &:nth-child(4) {
        grid-row: 2/3;
        align-items: flex-end;
    }
`

const ItemLabel = styled.p`
    font-size: 1.7rem;
    margin: 0;
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

export const Featured = () => {
  return (
    <Container>
        <TextContainer>
            <Title>FEATURED</Title>
            <SubTitle>Ladies Summer Collection</SubTitle>
        </TextContainer>

        <FeaturedGrid>
            {ladiesWear.map((item) => (
                <FeaturedItem 
                    item={item} 
                    key={item.name}
                    style={{backgroundImage: `url(${item.image})`}}
                >
                    <ItemLabel>{item.name}</ItemLabel>
                </FeaturedItem>
            ))}
        </FeaturedGrid>
        <FeaturedCta>
            <Button>View All</Button>
        </FeaturedCta>
    </Container>
  )
}