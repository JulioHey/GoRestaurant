import React from 'react';
import NumberFormat from 'react-number-format';

import Input from '../Input';

import { 
    BackgroundSection,
    AddDishSection,
    Title,
    SectionWithTwoInputs,
    ButtonAddNewDish,
    ButtonSpan,
    ButtonAddNewDishImg
} from './styles';

interface AddDishProps {
    values: {
        link: string | undefined;
        name: string | undefined;
        price: number | undefined;
        description: string | undefined;
    };
    onChangeFuncs: {
        link(e: React.ChangeEvent<HTMLInputElement>): void;
        name(e: React.ChangeEvent<HTMLInputElement>): void;
        price(e: React.ChangeEvent<HTMLInputElement>): void;
        description(e: React.ChangeEvent<HTMLInputElement>): void;
    };
    onAddFunc(): void;
    title?: string;
};

const AddCardDisplay: React.FC<AddDishProps> = ({values, onChangeFuncs, onAddFunc, title}) => {
    return (
        <BackgroundSection>
            <AddDishSection>
                <Title>{ title ? title : "Novo Prato"}</Title>
                <Input
                    width="92%"
                    span="URL da imagem" 
                    value={values.link}
                    onChange={onChangeFuncs.link}
                    placeholder="Cole o link aqui"
                />
                <SectionWithTwoInputs>
                    <Input 
                        width="100%"
                        span="Nome do prato" 
                        value={values.name}
                        onChange={onChangeFuncs.name}
                        placeholder="Ex: Moda Italiana"
                    />
                    <NumberFormat
                        customInput={Input} 
                        width="55%"
                        span="Preço" 
                        value={values.price}
                        isPrice="true"
                        onChange={onChangeFuncs.price}
                    />
                </SectionWithTwoInputs>
                <Input 
                    width="92%"
                    span="Descrição do prato" 
                    value={values.description}
                    onChange={onChangeFuncs.description}
                />
                <ButtonAddNewDish onClick={onAddFunc}>
                    <ButtonSpan>Adicionar Prato</ButtonSpan>
                    <ButtonAddNewDishImg size="50" color="#FFF"/>
                </ButtonAddNewDish>
            </AddDishSection>
        </BackgroundSection>
    )
};

export default AddCardDisplay;