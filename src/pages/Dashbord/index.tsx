import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import CardsGroup from '../../components/CardsGroup';
import AddCardDisplay from '../../components/AddCardDisplay';

import { Section } from './styles';

const Dashbord: React.FC = () => {
    const [ isAddCardOn, setAddCardOn ] = useState(false)

    return (
        <Section>
            { isAddCardOn ?
            <AddCardDisplay /> :
            ""}
            <PageHeader addNewDish={() => setAddCardOn(true)}/>
            <CardsGroup />
        </Section>
    )
}

export default Dashbord;
