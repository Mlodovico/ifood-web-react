import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ModalComponent } from "./index";

describe("Modal Component", () => {
  it("should render Modal Component", () => {
    render(
      <ModalComponent flagModal={true}>
        <div>Modal</div>
      </ModalComponent>
    );
    expect(screen.getByText("Modal")).toBeInTheDocument();
  });
});

describe("Modal Children Component", () => {
  it("should render child inside Modal", () => {
    render(
      <ModalComponent flagModal={true}>
        <div>
          Modal
          <h1>Write a text</h1>
          <input type="text" onChange={() => {}} />
        </div>
      </ModalComponent>
    );

    expect(screen.getByText("Write a text")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});

describe("Modal Component Invisible", () => {
  it("should not render Modal Component", () => {
    render(
      <ModalComponent flagModal={false}>
        <div>Modal</div>
      </ModalComponent>
    );

    expect(screen.queryByText("Modal")).toBeNull();
  });
});
