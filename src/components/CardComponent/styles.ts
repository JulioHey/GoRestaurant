import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    float: left;
    background: #000;
    border-radius: 8px;
    height: 300px;
    width: 23vw;

    margin: 10px;

    @media(max-width: 1000px) {
        width: 26vw;
    }

    @media(max-width: 800px) {
        width: 41vw;
    }
`

