import React, { useContext } from 'react';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { useTheme } from '../../context/ThemeContext';

export const HomeScreen = () => {
    return (
        <Container>
            <Header />
            <h1>Home</h1>
        </Container>
    );
}