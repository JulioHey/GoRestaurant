import styled from 'styled-components';
import { BsCheckBox } from 'react-icons/bs';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

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
        width: 340px;
        padding: 5px;
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
        width: 320px;
        align-items: flex-start;
    };     
`;

export const ButtonSpan = styled.span`
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background: #39B100;
    padding: 16px 24px;
    width: 100%;

    font: 600 16px Poppins;
    line-height: 26px;
    color: #FFF;
`;

export const ButtonAddNewDish = styled.button`
    margin-top: 48px;
    border-radius: 8px;
    background: #41C900;
    width: 250px;
    padding: 0;
    border: none;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;

    align-self: flex-end;

    @media(max-width: 600px) {
        margin-top: 20px;
    };
`;

export const ButtonAddNewDishImg = styled(BsCheckBox)`
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background: #41C900;
    padding: 2px 20px;
`;
