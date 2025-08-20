import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TodoList from "./TodoList";

describe("TodoList", () => {
  it("renders all todos", () => {
    const todos = ["köp 1", "köp 2"];

    render(<TodoList todos={todos} />);

    todos.forEach((todo) => {
      expect(screen.getByText(todo)).toBeInTheDocument();
    });
  });
});
