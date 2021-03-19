import React from 'react'
import styled from 'styled-components'
import ConcertOne from 'typeface-roboto'

const H1 = styled.h1`
    font-size: 250%;
    font-size:48px;
    color: teal;
    font: Concert-One;
    text-align: center;
`;

export const Heading = () => {
    return (
        <div style={{fontFamily: "Concert One"}}>
            <H1>pictioNation</H1>
        </div>
    )
}
