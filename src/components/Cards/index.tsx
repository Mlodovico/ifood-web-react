import React from 'react';

import { Container, Title, Subtitle } from "./styles";

interface CardsComponentsProps {
    title: string;
    subtitle: string;
}

export const CardsComponent = ( props: CardsComponentsProps) => {
    const { title, subtitle } = props;

    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}