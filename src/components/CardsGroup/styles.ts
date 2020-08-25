import styled from 'styled-components';

export const Section = styled.div`
    display: table;
    align-items: center;
    justify-content: center;

    padding: 0 12.5vw;

    @media(max-width: 1000px) {
        padding: 0 8vw;
        width: 86vw;
    }

    @media(max-width: 800px) {
        padding: 0 5vw;
        width: 90vw;
    }

    position: relative;
    bottom: 120px;
`