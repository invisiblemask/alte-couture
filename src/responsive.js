import { css } from 'styled-components'

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 380px) {
            ${props}
        }
    `;
}

export const smTablet = (props) => {
    return css`
        @media only screen and (max-width: 560px) {
            ${props}
        }
    `;
}

export const lgTablet = (props) => {
    return css`
        @media only screen and (max-width: 720px) {
            ${props}
        }
    `;
}

export const desktop = (props) => {
    return css`
        @media only screen and (max-width: 720px) {
            ${props}
        }
    `;
}