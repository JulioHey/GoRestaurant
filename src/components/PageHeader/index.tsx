import React from 'react';

import logo from '../../assets/icons/logo.svg';

import { 
    FullSection,
    Section, 
    LogoImg, 
    LogoSpanDiv, 
    LogoSpanSubtitle, 
    LogoSpanTitle, 
    ButtonSpan, 
    ButtonAddNewDish, 
    ButtonAddNewDishImg 
} from './styles';

interface PageHeaderProps {
    addNewDish?: any,
};

const PageHeader: React.FC<PageHeaderProps> = ({addNewDish}) => {
    return (
        <FullSection>
            <Section>
                <LogoImg src={logo} />
                <LogoSpanDiv>
                    <LogoSpanTitle>GoRestaurant</LogoSpanTitle>
                    <LogoSpanSubtitle>Comida italiana, sim.</LogoSpanSubtitle>
                </LogoSpanDiv>
            </Section>
            <Section>
                <ButtonAddNewDish onClick={addNewDish}>
                    <ButtonSpan>Novo prato</ButtonSpan>
                    <ButtonAddNewDishImg size="50" color="#FFF"/>
                </ButtonAddNewDish>
            </Section>
        </FullSection>
    )
};

export default PageHeader;