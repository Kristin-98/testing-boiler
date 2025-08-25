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

  it("picks the first todo when Math.random returns 0", () => {
    const mockFn = vi.fn();
    vi.spyOn(Math, "random").mockReturnValue(0);

    render(<RandomTodo todos={["X", "Y", "Z"]} onPick={mockFn} />);
    fireEvent.click(screen.getByText("Slumpa en todo"));
    expect(mockFn).toHaveBeenCalledWith("X");

    vi.restoreAllMocks();
  });

  it("picks the second todo when Math.random returns 0.5", () => {
    const mockFn = vi.fn();
    vi.spyOn(Math, "random").mockReturnValue(0.5);

    render(<RandomTodo todos={["X", "Y", "Z"]} onPick={mockFn} />);
    fireEvent.click(screen.getByText("Slumpa en todo"));
    expect(mockFn).toHaveBeenCalledWith("Y");

    vi.restoreAllMocks();
  });

  it("picks the third todo when Math.random returns 0.99", () => {
    const mockFn = vi.fn();
    vi.spyOn(Math, "random").mockReturnValue(0.99);

    render(<RandomTodo todos={["X", "Y", "Z"]} onPick={mockFn} />);
    fireEvent.click(screen.getByText("Slumpa en todo"));
    expect(mockFn).toHaveBeenCalledWith("Z");

    vi.restoreAllMocks();
  });

  it("does nothing when todos is empty", () => {
    const mockFn = vi.fn();
    render(<RandomTodo todos={[]} onPick={mockFn} />);
    fireEvent.click(screen.getByText("Slumpa en todo"));
    expect(mockFn).not.toHaveBeenCalled();
  });
});
