import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TodoList from "./TodoList";

describe("TodoList with input", () => {
   it("adds a new todo when input is filled and button clicked", () => {
    const initialTodos: string[] = [];
    render(<TodoList initialTodos={initialTodos} />);

    const input = screen.getByPlaceholderText(
      "Skriv ny todo..."
    ) as HTMLInputElement;
    const button = screen.getByRole("button", { name: /lägg till/i });

    fireEvent.change(input, { target: { value: "Städa" } });
    fireEvent.click(button);

    expect(screen.getByText("Städa")).toBeInTheDocument();
    expect(input.value).toBe("");
  });

  it("does not add empty or whitespace-only todos", () => {
    render(<TodoList initialTodos={[]} />);

    const input = screen.getByPlaceholderText(
      "Skriv ny todo..."
    ) as HTMLInputElement;
    const button = screen.getByRole("button", { name: /lägg till/i });

    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(button);

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });

  it("adds multiple todos correctly", () => {
    render(<TodoList initialTodos={[]} />);

    const input = screen.getByPlaceholderText(
      "Skriv ny todo..."
    ) as HTMLInputElement;
    const button = screen.getByRole("button", { name: /lägg till/i });

    fireEvent.change(input, { target: { value: "Todo 1" } });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: "Todo 2" } });
    fireEvent.click(button);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(2);
    expect(screen.getByText("Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Todo 2")).toBeInTheDocument();
  });

  it("renders correctly when no initialTodos prop is provided", () => {
    render(<TodoList />);
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });

  it("clears input after each added todo", () => {
    render(<TodoList initialTodos={[]} />);
    const input = screen.getByPlaceholderText(
      "Skriv ny todo..."
    ) as HTMLInputElement;
    const button = screen.getByRole("button", { name: /lägg till/i });

    fireEvent.change(input, { target: { value: "Test 1" } });
    fireEvent.click(button);
    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "Test 2" } });
    fireEvent.click(button);
    expect(input.value).toBe("");
  });

  it("displays chosen todo when RandomTodo button is clicked", () => {
    render(<TodoList initialTodos={["A"]} />);
    const button = screen.getByText("Slumpa en todo");
    fireEvent.click(button);

    const chosenText = screen.getByText(/Börja med att:/);
    expect(chosenText).toBeInTheDocument();
  });
});

describe("TodoList with checkbox", () => {
  it("allows toggling todos as done/undone", () => {
    render(<TodoList initialTodos={["Köp kaffe"]} />);

    const checkbox = screen.getByRole("checkbox");
    const text = screen.getByText("Köp kaffe");

    expect(checkbox).not.toBeChecked();
    expect(text).not.toHaveStyle("text-decoration: line-through");

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(text).toHaveStyle("text-decoration: line-through");

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(text).not.toHaveStyle("text-decoration: line-through");
  });
});
