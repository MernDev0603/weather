import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import SearchBar from "./SearchBar";

test("renders search input and button", () => {
  render(<SearchBar onSearch={() => {}} />);
  expect(screen.getByPlaceholderText("Enter a city...")).toBeInTheDocument();
  expect(screen.getByText("Search")).toBeInTheDocument();
});

test("calls onSearch with input value when button is clicked", () => {
  const mockSearch = vi.fn();
  render(<SearchBar onSearch={mockSearch} />);

  fireEvent.change(screen.getByPlaceholderText("Enter a city..."), {
    target: { value: "London" },
  });
  fireEvent.click(screen.getByText("Search"));

  expect(mockSearch).toHaveBeenCalledWith("London");
});
