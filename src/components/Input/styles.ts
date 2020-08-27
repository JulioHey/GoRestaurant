import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    align-items: ${props => props.className ? "flex-end" : "flex-start"};
    justify-content: center;

    flex-direction: column;
    width: 100%;

    
    @media(max-width: 600px) {
        align-items: flex-start;
    };
    @media(max-width: 360px) {
        width: 84%;
        margin-left: 20px;
    };  
`;

export const InputSection = styled.input`
    border-radius: 8px;
    background: #FFF;
    width: ${ props => props.className};

    justify-self: ${props => props.id ? "flex-end" : "initial"};
    text-align: ${props => props.id ? "right" : "initial"};
    margin-left: ${props => props.id ? "20px" : "initial"};

    border: 0;
    outline: 0;
    padding: 20px 24px;
    font: 400 16px Roboto;
    line-height: 19px;
    color: #B7B7CC;

    ::placeholder {
        font: 400 16px Roboto;
        line-height: 19px; 
        color: #B7B7CC;
    };

    @media(max-width: 600px) {
        width: 89%;
        margin-left: 0;
    };

 
`;

export const LabelSpan = styled.span`
    font: 400 14px Poppins;
    line-height: 16px;
    color: #6C6C80;
    width: ${ props => props.id};
    padding: 0 24px;
    margin-top: 24px;
    margin-bottom: 8px;
    text-align: ${props => props.className ? "left" : "initial"};

    @media(max-width: 600px) {
        width: 89%;
    };    
`;
