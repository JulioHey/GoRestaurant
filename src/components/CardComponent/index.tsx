import React, { useCallback } from 'react';

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

import dish from '../../assets/imagens/molho.png';

interface CardComponentProps {
    isDisabled?: boolean;
};

const CardComponent: React.FC<CardComponentProps> = ({isDisabled}) => {

    const handleAvailable = useCallback(() => {
        console.log("Dale");        
    }, []);

    return (
        <FullSection>
            <FirstSection>
                <DishImage src={dish} />
            </FirstSection>
            <SecondSection>
                <Title>Ao Molho</Title>
                <Description>Macarrão ao molho branco, fughi e cheiro verde das montanhas</Description>
                <Price>R$ 19,90</Price>
            </SecondSection>
            <LastSection>   
                <EditRemoveSection>
                    <Button>
                        <EditImage size="20" />
                    </Button>
                    <Button>
                        <TrashImage size="20" />
                    </Button>
                </EditRemoveSection>
                <AvailableSection>
                    <AvailableSpan>Disponível</AvailableSpan>
                    { !isDisabled ? 
                    <SwitchStyled 
                        checked={true} 
                        onChange={handleAvailable} 
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