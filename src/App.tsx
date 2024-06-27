import React from 'react';
import { HomeScreen } from './screens/home';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div style={theme}>
      <HomeScreen />
    </div>
  );
}

export default App;
