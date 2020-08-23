import React from 'react';

import CardComponent from '../CardComponent';

import { Section } from './styles';

const CardsGroup: React.FC = () => {
    return (
        <Section>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
        </Section>
    )
}

export default CardsGroup;