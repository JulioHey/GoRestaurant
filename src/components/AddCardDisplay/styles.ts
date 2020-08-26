import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BackgroundSection = styled(Section)`
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
`;

export const AddDishSection = styled(Section)`
    border-radius: 8px;
    padding:3.33vw 2.77vw;
    background: #EFEFF3;

    width: 46vw;
    flex-direction: column;
    align-items: flex-start;

    @media(max-width: 1000px) {
        width: 60vw;
    };

    @media(max-width: 800px) {
        width: 80vw;
    };

    @media(max-width: 360px) {
        width: 100vw;
    };  
`;

export const Title = styled.strong`
    font: 600 36px Poppins;
    line-height: 36px;
    color: #000;
    margin-bottom: 16px;

    text-align: left;
`;

export const SectionWithTwoInputs = styled(Section)`
    width: 46vw;
    @media(max-width: 1000px) {
        width: 60vw;
    };

    @media(max-width: 800px) {
        width: 80vw;
    };

    @media(max-width: 600px) {
        flex-direction: column;
    };

    @media(max-width: 360px) {
        width: 100vw;
    };     
`;
