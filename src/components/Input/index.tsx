import React, { InputHTMLAttributes } from 'react';

import {
    Section,
    InputSection,
    LabelSpan
} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    span: string;
    width: string;
    isPrice?: string;
};

const Input: React.FC<InputProps> = ({span, isPrice, width, ...rest}) => {
    return (
        <Section className={isPrice}>
            <LabelSpan className={isPrice} id={width} >{span}</LabelSpan>
            <InputSection id={isPrice} className={width} {...rest} />
        </Section>
    );
};

export default Input;