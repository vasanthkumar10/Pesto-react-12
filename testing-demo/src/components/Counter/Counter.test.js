import { Counter } from "./Counter";
import { screen, render, act } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("Counter component", () => {
  beforeEach(() => {
    console.log("before each");
  });

  afterEach(() => {
    console.log("after each");
  });

  test("renders properly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", {
      name: "increment",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders zero by default", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("render 1 after clicking increment button", async () => {
    await act(() => render(<Counter />));
    const buttonElement = screen.getByRole("button", {
      name: "increment",
    });
    for (let i = 0; i < 5; i++) await user.click(buttonElement);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("5");
  });

  test.skip("render 100 after setting by input", async () => {
    render(<Counter />);
    const inputElement = screen.getByRole("spinbutton");
    user.type(inputElement, "100");
    expect(inputElement).toHaveValue(100);

    const setButtonElement = screen.getByRole("button", {
      name: "set",
    });
    await user.click(setButtonElement);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("100");
  });
});
