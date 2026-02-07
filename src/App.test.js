import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders EduShop header", () => {
  render(<App />);
  const headerElement = screen.getByText(/EduShop/i);
  expect(headerElement).toBeInTheDocument();
});
