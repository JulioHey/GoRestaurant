import React from 'react';

import logo from '../../assets/icons/logo.svg'
import plus from '../../assets/icons/plus.svg'

import { FullSection, Section, LogoImg, LogoSpanDiv, LogoSpanSubtitle, LogoSpanTitle, ButtonSpan, ButtonAddNewDish, 
 ButtonAddNewDishImg } from './styles';

interface PageHeaderProps {
    addNewDish?: any,
}

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
                    <ButtonAddNewDishImg src={plus} />
                </ButtonAddNewDish>
            </Section>
        </FullSection>
    )
}

export default PageHeader;