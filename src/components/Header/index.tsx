import { useTheme } from "../../context/ThemeContext";
import { Container, ConfigOptionsWrapper, SubjectContainer, Button, Subject } from "./styles";

export const HeaderComponent = () => {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <SubjectContainer>
      <Subject>Home</Subject>
      <Subject>Restaurants</Subject>
      <Subject>Drinks</Subject>
      </SubjectContainer>
      <ConfigOptionsWrapper>
        <Button>Logar</Button>
        <Button>Criar conta</Button>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </ConfigOptionsWrapper>
    </Container>
  );
};
