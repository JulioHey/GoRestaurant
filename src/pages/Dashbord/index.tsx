import React, { useState, useCallback, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import AddCardDisplay from '../../components/AddCardDisplay';
import CardComponent from '../../components/CardComponent';

import { 
    Section,
    CardsSection 
} from './styles';

const Dashbord: React.FC = () => {
    const [ isAddCardOn, setAddCardOn ] = useState(false);

    const escFunction: any = useCallback((event: React.KeyboardEvent) => {
        if(event.keyCode === 27) {
          setAddCardOn(false);
        }
    }, []);
    
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);


    return (
        <Section>
            { isAddCardOn ?
            <AddCardDisplay 
            /> :
            ""}
            <PageHeader addNewDish={() => setAddCardOn(true)}/>
            <CardsSection>
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </CardsSection>
        </Section>
    )
};

export default Dashbord;
