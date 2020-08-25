import styled from 'styled-components';
import { FiPlusSquare } from 'react-icons/fi';

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FullSection = styled(Section)`
    flex-direction: row;
    justify-content: space-between;
    background: #C72828;
    padding: 43px 10.5vw 183px;

    width: 79vw;

    @media(max-width: 600px) {
        flex-direction: column;
        padding: 20px 10.5vw;
    };
`;

export const LogoImg = styled.img`
    width: 64px;
`;

export const LogoSpanDiv = styled(Section)`
    flex-direction: column;
    margin-left: 24px;
    align-items: flex-start;
`;

export const LogoSpanTitle = styled.strong`
    font: 700 24px Inter;
    color: #FFF;
`;

export const LogoSpanSubtitle = styled.span`
    font: 400 14px Inter;
    color: #FFB1B1;
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
    border-radius: 8px;
    background: #41C900;
    width: 230px;
    padding: 0;
    border: none;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 600px) {
        margin-top: 20px;
    };
`;

export const ButtonAddNewDishImg = styled(FiPlusSquare)`
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background: #41C900;
    padding: 2px 20px;
`;

