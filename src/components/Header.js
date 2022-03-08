import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.div`
    font-size: 1rem;
    color: #ffffff;
    font-family: 'Marsek', sans-serif;
`

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`

const NavList = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;

    &.menu--hidden {
        opacity: 0;
        transform: translateX(200%);
    }
`

const ListItem = styled.li`
    margin-right: 1rem;
`

const NavLink = styled.a`
    color: #ffffff;
    font-size: 0.9rem;
    text-decoration: wavy;
    font-family: 'Marsek', sans-serif;
    transition: color ease-in 0.2s;

    &:hover {
        color: #6a6a6a;
    }
`

const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    height: fit-content;
    background-color: #171616;
    border: none;
    width: 40px;
`

const Span = styled.div`
    width: 30px;
    height: 2px;
    background-color: #ffffff;
    margin: 0.3rem 0;
    transition: all ease-in 0.2s;
`

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
        setShowMenu(!showMenu)
    }

  return (
    <Container>
        <Logo>ALTE COUTURE</Logo>

        <NavContainer>
            <NavList className={showMenu ? NavLink : 'menu--hidden'}>
                <ListItem>
                    <NavLink
                        href='https://twitter.com/reyokeke'
                        target='_blank'
                        rel='noreferrer noopener'
                    >
                        TWITTER
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink
                        href='https://github.com/reyokeke/alte-couture'
                        target='_blank'
                        rel='noreferrer noopener'
                        >
                            GITHUB
                        </NavLink>
                    </ListItem>
            </NavList>

            <Button 
                onClick={handleClick}
                clicked={click}
            >
                <Span></Span>
                <Span></Span>
            </Button>
        </NavContainer>
    </Container>
  )
}
