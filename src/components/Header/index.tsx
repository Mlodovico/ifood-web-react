import { useTheme } from "../../context/ThemeContext";
import { Container, ConfigOptionsWrapper, SubjectContainer, Button } from "./styles";

export const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <SubjectContainer>
        <h1>Header</h1>
      </SubjectContainer>
      <ConfigOptionsWrapper>
        <Button>Logar</Button>
        <Button>Criar conta</Button>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </ConfigOptionsWrapper>
    </Container>
  );
};
