import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "../../context/ThemeContext";

import { ModalComponent } from "./index";
import { lightTheme } from "../../assets/theme";

describe("Modal Component", () => {
  it("should render Modal Component", () => {
    render(
      <ThemeProvider>
        <ModalComponent flagModal={true}>
          <div>Modal</div>
        </ModalComponent>
      </ThemeProvider>
    );
    expect(screen.getByText("Modal")).toBeInTheDocument();
  });
});

describe("Modal Children Component", () => {
  it("should render child inside Modal", () => {
    render(
      <ThemeProvider>
        <ModalComponent flagModal={true}>
          <div>
            Modal
            <h1>Write a text</h1>
            <input type="text" onChange={() => {}} />
          </div>
        </ModalComponent>
      </ThemeProvider>
    );

    expect(screen.getByText("Write a text")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});

describe("Modal Component Invisible", () => {
  it("should not render Modal Component", () => {
    render(
      <ThemeProvider>
        <ModalComponent flagModal={false}>
          <div>Modal</div>
        </ModalComponent>
      </ThemeProvider>
    );

    expect(screen.queryByText("Modal")).toBeNull();
  });
});
