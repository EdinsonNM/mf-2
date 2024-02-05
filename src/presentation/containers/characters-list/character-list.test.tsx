import React from "react";
import CharacterList from "./character-list";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const crearTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // No reintentar en caso de fallo
      },
    },
  });

// Función de utilidad para envolver el componente en un QueryClientProvider
const renderWithClient = (ui) => {
  const testQueryClient = crearTestQueryClient();
  return {
    ...render(
      <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
    ),
    testQueryClient,
  };
};
describe("CharacterList", () => {
  // Renders a grid container with spacing of 4 and center alignment
  it("should render a grid container with spacing of 4 and center alignment", () => {
    renderWithClient(<CharacterList />);
    const gridContainer = screen.getByTestId("character-list");
    expect(gridContainer).toBeInTheDocument();
    expect(gridContainer).toHaveStyle({ justifyContent: "center" });
    expect(gridContainer).toHaveStyle({ alignContent: "center" });
  });
});
