import React from 'react';
import styled from 'styled-components';
import Header from '../../Header';
import ExplorePart from '../part/ExplorePart';

export default function MainPage(){
    return (
        <>
            <Header/>
            <Wrap>  
                <ExplorePart paddingTop={10} />
                <ExplorePart paddingTop={10} />
                <ExplorePart paddingTop={10} />
                <ExplorePart paddingTop={10} />
                <ExplorePart paddingTop={10} />
            </Wrap>
        </>
    )
}

const Wrap = styled.div`

`;
