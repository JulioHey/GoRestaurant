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

    @media(max-width: 1200px) {
        padding: 0 7.5vw;
        width: 85vw;
    };

    @media(max-width: 1000px) {
        padding: 0 5vw;
        width: 90vw;
        grid-template-columns: 1fr 1fr;
    };

    @media(max-width: 600px) {
        padding: 0 2vw;
        width: 96vw;
        margin-top: -20px;
    };

    @media(max-width: 500px) {
        display: flex;
        flex-direction: column;
        padding: 0 5vw;
        width: 90vw
    };

    @media(max-width: 500px) {
        display: flex;
        flex-direction: column;
        width: 100vw;
        padding: 0;
    };
`;