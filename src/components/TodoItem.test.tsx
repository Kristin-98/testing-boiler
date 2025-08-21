import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  it("renders the given todo text", () => {
    render(<TodoItem text="Köp kaffe" done={false} onToggle={() => {}} />);
    expect(screen.getByText("Köp kaffe")).toBeInTheDocument();
  });

  it("renders checkbox unchecked when done = false", () => {
    render(<TodoItem text="Köp kaffe" done={false} onToggle={() => {}} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("renders checkbox checked and text strikethrough when done = true", () => {
    render(<TodoItem text="Städa" done={true} onToggle={() => {}} />);
    const checkbox = screen.getByRole("checkbox");
    const text = screen.getByText("Städa");
    expect(checkbox).toBeChecked();
    expect(text).toHaveStyle("text-decoration: line-through");
  });

  it("calls onToggle when checkbox is clicked", () => {
    const handleToggle = vi.fn();
    render(<TodoItem text="Diska" done={false} onToggle={handleToggle} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(handleToggle).toHaveBeenCalledTimes(1);
  });

  it("renders li element even with empty text", () => {
    render(<TodoItem text="" done={false} onToggle={() => {}} />);
    const li = screen.getByRole("listitem");
    expect(li).toBeInTheDocument();
    expect(li.textContent).toBe("");
  });
});
