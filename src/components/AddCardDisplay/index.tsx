import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

import Input from '../Input';

import { 
    BackgroundSection,
    AddDishSection,
    Title,
    SectionWithTwoInputs
} from './styles';

const AddCardDisplay: React.FC = () => {
    const [ link, setLink ] = useState('');
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState<number>();
    const [ description, setDescription ] = useState('');

    return (
        <BackgroundSection>
            <AddDishSection>
                <Title>Novo Prato</Title>
                <Input
                    width="92%"
                    span="URL da imagem" 
                    value={link}
                    onChange={(e: any) => setLink(e.target.value)}
                    placeholder="Cole o link aqui"
                />
                <SectionWithTwoInputs>
                    <Input 
                        width="100%"
                        span="Nome do prato" 
                        value={name}
                        onChange={(e: any) => setName(e.target.value)}
                        placeholder="Ex: Moda Italiana"
                    />
                    <NumberFormat
                        customInput={Input} 
                        width="55%"
                        span="Preço" 
                        value={price}
                        isPrice="true"
                        onChange={(e: any) => setPrice(e.target.value)}
                    />
                </SectionWithTwoInputs>
                <Input 
                        width="92%"
                        span="Descrição do prato" 
                        value={description}
                        onChange={(e: any) => setDescription(e.target.value)}
                    />
            </AddDishSection>
        </BackgroundSection>
    )
};

export default AddCardDisplay;