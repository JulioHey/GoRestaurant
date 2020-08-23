import React from 'react';

import PageHeader from '../../components/PageHeader';
import CardsGroup from '../../components/CardsGroup';

import { Section } from './styles';

const Dashbord: React.FC = () => {
    return (
        <Section>
            <PageHeader />
            <CardsGroup />
        </Section>
    )
}

export default Dashbord;
