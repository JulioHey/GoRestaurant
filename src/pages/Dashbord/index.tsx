import React, { useState, useCallback, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import AddCardDisplay from '../../components/AddCardDisplay';
import CardComponent from '../../components/CardComponent';


import { 
    Section,
    CardsSection 
} from './styles';

interface DishComponentProps {
    link: string | undefined;
    name: string | undefined;
    price: number | undefined;
    description: string | undefined;
};

interface ChangeCard {
    on: boolean;
    index: number
};

const Dashbord: React.FC = () => {
    const [ isAddCardOn, setAddCardOn ] = useState<boolean>();
    const [ isChangeCardOn, setChangeCardOn ] = useState<number>();

    const [ link, setLink ] = useState<string>();
    const [ name, setName ] = useState<string>();   
    const [ price, setPrice ] = useState<number | undefined>();
    const [ description, setDescription ] = useState<string>();

    const [ dishes, setDishes ] = useState<Array<DishComponentProps>>([
        {
            name: "Ao molho",
            link: "http://localhost:3000/static/media/molho.c296da51.png",
            price: 80.00,
            description: "Macarrão ao molho branco, fughi e cheiro verde das montanhas",
        },
        {
            name: "Ao molho 1",
            link: "http://localhost:3000/static/media/molho.c296da51.png",
            price: 80.00,
            description: "Macarrão ao molho branco, fughi e cheiro verde das montanhas",
        },
        {
            name: "Ao molho 2",
            link: "http://localhost:3000/static/media/molho.c296da51.png",
            price: 80.00,
            description: "Macarrão ao molho branco, fughi e cheiro verde das montanhas",
        },
        {
            name: "Ao molho 3",
            link: "http://localhost:3000/static/media/molho.c296da51.png",
            price: 80.00,
            description: "Macarrão ao molho branco, fughi e cheiro verde das montanhas",
        },
    ]);

    const escFunction: any = useCallback((event: React.KeyboardEvent) => {
        if(event.keyCode === 27) {
          setAddCardOn(false);
        }
    }, []);

    const handleAddNewDish = useCallback(() => {
        if(name && link && price && description) {
            const newDish: Array<DishComponentProps> = [{
                name,
                link,
                price,
                description
            }]
    
            const updatedDishes = dishes.concat(newDish)
    
            setDishes(updatedDishes);
        }
        setAddCardOn(false);
    }, [dishes, name, link, price, description]);

    const handleShowEditCard = useCallback((position: number) => {
        setChangeCardOn(position);
        setAddCardOn(true);

        setName(dishes[position].name);
        setLink(dishes[position].link);
        setPrice(dishes[position].price);
        setDescription(dishes[position].description);
    }, [dishes]);

    const handleEditDish = useCallback((position: number) => {
        const updatedDishes = dishes.map((item, index) => {
            if (index === position ) {
                return {
                    name,
                    link,
                    price,
                    description
                }
            }

            return item;
        });

        setDishes(updatedDishes);
    }, [dishes, name, link, price, description]);

    const handleRemoveDish = useCallback((position: number) => {
        let updatedDishes = dishes.slice(0, position);

        const updatedDishes2 = dishes.slice((position  + 1) ,dishes.length);
        
        updatedDishes = updatedDishes.concat(updatedDishes2);
        setDishes(updatedDishes);
    }, [dishes]);
    
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
                values={{                    
                    link,
                    name,
                    price,
                    description,
                }}

                onChangeFuncs={{
                    link:(e: any) => setLink(e.target.value), 
                    name:(e: any) => setName(e.target.value), 
                    price:(e: any) => setPrice(e.target.value), 
                    description:(e: any) => setDescription(e.target.value), 
                }}
                onAddFunc ={ isChangeCardOn ? () => handleEditDish(isChangeCardOn) : handleAddNewDish }
                
                title= { isChangeCardOn ? "Editar prato" : "Novo Prato"}
            /> :
            ""}
            <PageHeader addNewDish={() => setAddCardOn(true)}/>
            <CardsSection>
                { dishes.map((dish, index) => {
                    return (
                        <CardComponent 
                            name={dish.name}
                            price={dish.price}
                            description={dish.description}
                            link={dish.link}
                            disabled={isAddCardOn}
                            editFunc={() =>handleShowEditCard(index)}
                            removeFunc={() => handleRemoveDish(index)}
                        />
                    )
                }) }
            </CardsSection>
        </Section>
    )
};

export default Dashbord;
