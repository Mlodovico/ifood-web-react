import { useTheme } from "../../context/ThemeContext";
import { Container, ConfigOptionsWrapper, SubjectContainer, Button, Subject } from "./styles";

export const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <SubjectContainer>
      <Subject>Categorias</Subject>
      <Subject>Categorias</Subject>
      <Subject>Categorias</Subject>
      </SubjectContainer>
      <ConfigOptionsWrapper>
        <Button>Logar</Button>
        <Button>Criar conta</Button>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </ConfigOptionsWrapper>
    </Container>
  );
};
