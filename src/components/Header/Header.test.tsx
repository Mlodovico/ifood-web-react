import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { HeaderComponent } from "./index";
import { useTheme } from "../../context/ThemeContext";

jest.mock("../../context/ThemeContext", () => ({
  useTheme: jest.fn(),
}));

jest.mock("../Modal", () => ({
  ModalComponent: ({
    flagModal,
    children,
  }: {
    flagModal: boolean;
    children: React.ReactNode;
  }) => {
    return flagModal===true ? <div>{children}</div> : null;
  },
}));

describe("HeaderComponent", () => {
  const mockToggleTheme = jest.fn();

  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({ toggleTheme: mockToggleTheme });
  });

  it("should render navigation titles correctly", () => {
    render(<HeaderComponent />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Restaurants")).toBeInTheDocument();
    expect(screen.getByText("Drinks")).toBeInTheDocument();
  });

  it("should toggle login modal visibility when Logar button is clicked", () => {
    render(<HeaderComponent />);

    const loginButton = screen.getByText("Logar");
    fireEvent.click(loginButton);

    expect(screen.getByText("Login Modal")).toBeInTheDocument();

    fireEvent.click(loginButton);

    expect(screen.queryByText("Login Modal")).not.toBeInTheDocument();
  });

  it("should toggle sign up modal visibility when Criar conta button is clicked", () => {
    render(<HeaderComponent />);

    const signUpButton = screen.getByText("Criar conta");
    fireEvent.click(signUpButton);

    expect(screen.getByText("Cadastro Modal")).toBeInTheDocument();

    fireEvent.click(signUpButton);

    expect(screen.queryByText("Cadastro Modal")).not.toBeInTheDocument();
  });

  it("should call toggleTheme when Toggle Theme button is clicked", () => {
    render(<HeaderComponent />);

    const toggleThemeButton = screen.getByText("Toggle Theme");
    fireEvent.click(toggleThemeButton);

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});
