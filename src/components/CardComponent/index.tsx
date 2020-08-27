import React, { useCallback, useState } from 'react';

import { 
    FullSection,
    FirstSection,
    DishImage,
    SecondSection,
    Title,
    Description,
    Price,
    LastSection,
    EditRemoveSection,
    Button,
    EditImage,
    TrashImage,
    AvailableSection,
    AvailableSpan,
    SwitchStyled
} from './styles';

interface CardComponentProps {
    disabled: boolean | undefined;
    link: string | undefined;
    name: string | undefined;
    price: number | undefined;
    description: string | undefined;
    editFunc: any;
    removeFunc: any;
};

const CardComponent: React.FC<CardComponentProps> = ({disabled, link, name, price, description, editFunc, removeFunc}) => {
    const [ available, setAvailable ] = useState(true);
    const [ opacity, setOpacity ] = useState("");

    const handleToggleAvailable = useCallback(() => {
        if(available){
            setOpacity("True");
        } else {
            setOpacity("");
        }
        setAvailable(!available);
    }, [available]);

    return (
        <FullSection className={opacity}>
            <FirstSection>
                <DishImage src={link} />
            </FirstSection>
            <SecondSection>
                <Title>{name}</Title>
                <Description>{description}</Description>
                <Price>R$ {price}</Price>
            </SecondSection>
            <LastSection>   
                <EditRemoveSection>
                    <Button onClick={editFunc} disabled={!available}>
                        <EditImage size="20" />
                    </Button>
                    <Button onClick={removeFunc} disabled={!available}>
                        <TrashImage size="20" />
                    </Button>
                </EditRemoveSection>
                <AvailableSection>
                    <AvailableSpan>Disponível</AvailableSpan>
                    { !disabled ? 
                    <SwitchStyled 
                        checked={available} 
                        onChange={handleToggleAvailable} 
                        onColor="#39B100" 
                        offColor="#C72828" 
                        uncheckedIcon={false}
                        checkedIcon={false}
                    /> :
                    ""
                    }
                </AvailableSection>
            </LastSection>
        </FullSection>
    );
};

export default CardComponent;