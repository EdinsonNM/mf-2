import { renderHook } from "@testing-library/react-hooks";
import useLanguage from "./use-language";
import i18n from "../language/i18n";

// Mock de i18n
jest.mock("../language/i18n", () => ({
  changeLanguage: jest.fn(),
}));

describe("useLanguage hook", () => {
  it("cambia el idioma cuando se dispara el evento languageChange", () => {
    const { rerender } = renderHook(() => useLanguage());

    // Simular el evento de cambio de idioma
    const newLanguage = "es";
    const event = new CustomEvent("languageChange", { detail: newLanguage });
    window.dispatchEvent(event);

    expect(i18n.changeLanguage).toHaveBeenCalledWith(newLanguage);
    expect(i18n.changeLanguage).toHaveBeenCalledTimes(1); // Sigue siendo 1 si el listener se eliminó correctamente
  });
});
