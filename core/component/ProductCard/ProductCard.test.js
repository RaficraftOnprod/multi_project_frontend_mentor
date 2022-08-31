import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard.tsx";
import { card_data_mocks } from "../../../__mocks__/card/data_mocks";

describe("Product card component and items is rendered", () => {
  test("Product card should be rendered", () => {
    const { container } = render(
      <ProductCard {...card_data_mocks}></ProductCard>
    );
    expect(container).toBeInTheDocument();
  });

  test("Product card text should be rendered", async () => {
    const { getByText } = render(
      <ProductCard {...card_data_mocks}></ProductCard>
    );
    expect(getByText(/^perfum$/i)).toBeInTheDocument();
    expect(getByText(/essence/i)).toBeInTheDocument();
    expect(getByText(/floral/i)).toBeInTheDocument();
  });

  test("Product card button should be rendered", () => {
    const { getByText, getByTitle } = render(<ProductCard></ProductCard>);
    expect(getByTitle(/Icon/i)).toBeInTheDocument();
    expect(getByText(/Add to cart/i)).toBeInTheDocument();
  });

  test("should click button fire event is launch", () => {
    global.alert = jest.fn();
    render(<ProductCard></ProductCard>);
    const btn = screen.getByText(/^add to cart$/i);
    fireEvent.click(btn);
  });
});
