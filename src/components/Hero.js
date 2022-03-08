import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../assets/svgs/scroll-arrow.svg'
import { ReactComponent as Cross } from '../assets/svgs/crosses.svg'
import Model from '../assets/images/alte-model.png'

const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 1.5fr;
    overflow-x: hidden;
`

const HeroText = styled.div`
    margin-top: 20%;
`

const HeroTitle = styled.h1`
    font-size: 3rem;
    font-weight: 500;

    line-height: 1.3;
    margin: 0;
    color: transparent;
    -webkit-text-stroke: 1px #575757;
`

const HeroSubtitle = styled.h2`
    font-size: 3rem;
    font-weight: 500;

    line-height: 1.3;
    margin: 0;
    color: #ffffff;
`

const Icon = styled.div`
    margin-top: 3rem;
`

const HeroModel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;

`

const Img = styled.img`

`

const ModelLabel = styled.div`
    position: absolute;
    height: 45px;
    width: 75%;
    background-color: #ffffff;
    display: grid;
    place-items: center;
    margin: auto;
    color: #000000;

    &.forward {
        z-index: 3;
        top: 30%;
        font-size: .95rem;
    }

    &.behind {
        z-index: -1;
        top: 40%;
    }
`

const HeroScroll = styled.div`
    position: absolute;
    right: -5rem;
    top: 15%;
    display: flex;
    align-items: center;
    transform: rotate(90deg);
`

const ScrollText = styled.p`
    margin: 0;
    font-size: .9rem;
    color: #6a6a6a;
`

export const Hero = () => {
  return (
    <Container>
        <HeroText>
            <HeroTitle>FASHION REDEFINED</HeroTitle>
            <HeroSubtitle>
                ROCK YOUR STYLE, <br /> BEING BORING ISN'T <br /> ALLOWED HERE
            </HeroSubtitle>
            <Icon>
                <Cross />
            </Icon>
        </HeroText>

        <HeroModel>
            <Img src={Model} alt="alte model" />
            <ModelLabel className='forward'>ALTE COUTURE</ModelLabel>
            <ModelLabel className='behind'></ModelLabel>
        </HeroModel>

        <HeroScroll>
            <ScrollText>Scroll for more details</ScrollText>
            {/* code for the className arrow is in index.html file in the style tag */}
            <Arrow className='arrow' />
        </HeroScroll>
    </Container>
  )
}
