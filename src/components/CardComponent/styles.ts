import styled from 'styled-components';
import { FiEdit3, FiTrash } from 'react-icons/fi';

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FullSection = styled(Section)`
    flex-direction: column;

    background: #000;
    border-radius: 8px;
    width: 23vw;

    margin: 10px;

    @media(max-width: 1200px) {
        width: 27vw;
    };

    @media(max-width: 1000px) {
        width: 41vw;
    };

    @media(max-width: 600px) {
        width: 44vw;
    };

    @media(max-width: 500px) {
        width: 85vw;
    };
`;

export const FirstSection = styled(Section)`
    align-items: flex-end;

    width: 100%;
    height: 15vw;

    @media(max-width: 1000px) {
        height: 20vw;
    };

    @media(max-width: 500px) {
        height: 40vw;
    };

    background: #FFB84C;
    border-top-left-radius: 8px; 
    border-top-right-radius: 8px;
`;

export const DishImage = styled.img`
    width: 80%;

    @media(max-width: 1000px) {
        width: 60%;
    };

    @media(max-width: 500px) {
        width: 60%;
    };
`;

export const SecondSection = styled(Section)`
    flex-direction: column;
    background: #F0F0F5;
    width: 100%;
    padding: 32px 0;
    align-items: flex-start;

    @media(max-width: 750px) {
        padding: 20px 0;
    };
`;

export const Title = styled.strong`
    font: 600 28px Poppins;
    line-height: 32px;
    color: #3D3D4D;
    padding-left: 30px;

    text-align: left;

`;

export const Description = styled.span`
    margin-top: 26px;
    font: 400 16px12oboto;
    line-height: 26px;
    color: #3D3D4D;
    padding-left: 30px;

    max-width: 80%;

    text-align: left;
`;

export const Price = styled.span`
    margin-top: 16px;
    font: 700 24px Roboto;
    line-height: 34px;
    color: #39B100;
    padding-left: 30px;

    text-align: left;
`;

export const LastSection = styled(Section)`
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
    background: #E4E4EB;
    
    border-bottom-left-radius: 8px; 
    border-bottom-right-radius: 8px;
`;

export const EditRemoveSection = styled(Section)`
    margin-left: 32px;
`;

export const Button = styled.button`
    outline: 0;
    border: 0;
    background: none;
    margin: 0;
    padding: 0;
`

export const EditImage = styled(FiEdit3)`
    padding: 10px;
    border-radius: 8px;
    background: #FFF;
`;

export const TrashImage = styled(FiTrash)`
    padding: 10px;
    border-radius: 8px;
    background: #FFF;

    margin-left: 6px;
`;

export const AvailableSection = styled(Section)`
    margin-right: 32px;

    @media(max-width: 750px) {
        flex-direction: column;
    };

    @media(max-width: 500px) {
        flex-direction: row;
    };
`;

export const AvailableSpan = styled.span`
    font: 400 12px Roboto;
    line-height: 12px;
    color: #3D3D4D;

    margin-right: 10px;
    @media(max-width: 750px) {
        margin-bottom: 10px;
    };
`;
