import { render, screen } from "@testing-library/react";

import { Counter } from "./Counter";
import user from "@testing-library/user-event";

let skills = null;

beforeEach(() => {
  console.log("before each");
  skills = ["html", "css", "js"];
});

afterEach(() => {
  console.log("after each");
});

describe("Counter component", () => {
  test("renders properly", () => {
    console.log("test case 1", skills.pop());
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", {
      name: "increment",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders zero by default", () => {
    console.log("test case 2", skills);
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("render 1 after clicking increment button", () => {
    console.log("test case 3");
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "increment",
    });
    user.click(buttonElement);
    user.click(buttonElement);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });
});
