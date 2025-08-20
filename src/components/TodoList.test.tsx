import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TodoList from "./TodoList";

describe("TodoList with input", () => {
  it("renders initial todos and allows adding new todos", () => {
    const initialTodos = ["köp 1", "köp 2"];
    render(<TodoList initialTodos={initialTodos} />);

    initialTodos.forEach((todo) => {
      expect(screen.getByText(todo)).toBeInTheDocument();
    });

    const input = screen.getByPlaceholderText(
      "Skriv ny todo..."
    ) as HTMLInputElement;
    const button = screen.getByText("Lägg till");

    fireEvent.change(input, { target: { value: "Städa" } });
    fireEvent.click(button);

    expect(screen.getByText("Städa")).toBeInTheDocument();

    expect(input.value).toBe("");
  });
});
