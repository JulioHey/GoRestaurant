import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
`;

export const CardsSection = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;

    padding: 0 12.5vw;
    grid-template-columns: 1fr 1fr 1fr;

    margin-top: -120px;

    @media(max-width: 1000px) {
        padding: 0 8vw;
        width: 86vw;
        grid-template-columns: 1fr 1fr 1fr;
    };

    @media(max-width: 800px) {
        padding: 0 5vw;
        width: 90vw;
        grid-template-columns: 1fr 1fr;
    };

    @media(max-width: 500px) {
        grid-template-columns: 1fr;
        margin-top: -20px;
    };
`;