import React from 'react'
import styled from 'styled-components'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.div`
    font-size: 1rem;
    color: #ffffff;
    font-family: 'Marsek', sans-serif;
    ${mobile({ fontSize: '.8rem' })}
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
`

const ListItem = styled.li`
    margin-right: 1rem;
`

const NavLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 1.2rem;
    gap: 6rem;
    text-decoration: none;
    font-family: 'Marsek', sans-serif;
    transition: color ease-in 0.2s;

    ${mobile({ fontSize: '1rem' })}

    &:hover {
        color: #6a6a6a;
    }
`

export const Header = () => {
    return (
        <Container>
            <Logo>ALTE COUTURE</Logo>

            <NavContainer>
                <NavList>
                    <ListItem>
                        <NavLink
                            href='https://twitter.com/reyokeke'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            <FaTwitter />
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink
                            href='https://github.com/invisiblemask/alte-couture'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            <FaGithub style={{ marginLeft: '2rem' }} />
                        </NavLink>
                    </ListItem>
                </NavList>
            </NavContainer>
        </Container>
    )
}
