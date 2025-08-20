import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  it("renders todo text", () => {
    render(<TodoItem text="köp 1" />);
    expect(screen.getByText("köp 1")).toBeInTheDocument();
  });
});
