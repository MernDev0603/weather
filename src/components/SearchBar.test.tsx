import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { vi } from "vitest";

describe("SearchBar Component", () => {
  test("renders input field", () => {
    render(<SearchBar onSearch={() => {}} />);
    expect(screen.getByPlaceholderText("Enter a location...")).toBeInTheDocument();
  });

  test("updates input value on change", () => {
    render(<SearchBar onSearch={() => {}} />);
    
    const input = screen.getByPlaceholderText("Enter a location...") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "New York" } });

    expect(input.value).toBe("New York");
  });

  test("submits form when Enter is pressed", () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Enter a location...") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "London" } });

    // Simulate pressing Enter using fireEvent.submit on the form
    fireEvent.submit(input.closest("form")!);

    expect(mockOnSearch).toHaveBeenCalledWith("London");
  });

  test("does not call onSearch if input is empty", () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Enter a location...") as HTMLInputElement;
    fireEvent.submit(input.closest("form")!);

    expect(mockOnSearch).not.toHaveBeenCalled();
  });
});
