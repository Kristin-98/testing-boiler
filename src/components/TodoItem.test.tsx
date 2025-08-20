import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  it("renders the given todo text", () => {
    render(<TodoItem text="Köp kaffe" />);
    expect(screen.getByText("Köp kaffe")).toBeInTheDocument();
  });

  it("renders li element even with empty text", () => {
    render(<TodoItem text="" />);
    
    const li = screen.getByRole("listitem");
    expect(li).toBeInTheDocument();
    expect(li.textContent).toBe("");
  });
});
