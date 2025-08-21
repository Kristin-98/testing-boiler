import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import RandomTodo from "./RandomTodo";

describe("RandomTodo", () => {
  it("calls onPick with a mocked value", () => {
    const mockFn = vi.fn();
    const mockRandom = vi.fn(() => "Mockad todo");

    render(
      <RandomTodo
        todos={["A", "B", "C"]}
        onPick={mockFn}
        getRandomTodo={mockRandom}
      />
    );

    fireEvent.click(screen.getByText("Slumpa en todo"));

    expect(mockRandom).toHaveBeenCalledWith(["A", "B", "C"]);
    expect(mockFn).toHaveBeenCalledWith("Mockad todo");
  });

  it("uses default random picker if no getRandomTodo is provided", () => {
    const mockFn = vi.fn();

    vi.spyOn(Math, "random").mockReturnValue(0);

    render(<RandomTodo todos={["X", "Y", "Z"]} onPick={mockFn} />);

    fireEvent.click(screen.getByText("Slumpa en todo"));

    expect(mockFn).toHaveBeenCalledWith("X");

    vi.restoreAllMocks();
  });
});
