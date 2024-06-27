import React, { useContext } from 'react';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { useTheme } from '../../context/ThemeContext';

export const HomeScreen = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Container>
            <Header />
            <h1>Home</h1>
            <div>

            <button onClick={() => toggleTheme()} />
            </div>
        </Container>
    );
}