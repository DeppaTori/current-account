import { render, screen } from "@testing-library/react";
import { Home } from "../Home";
import { MemoryRouter } from "react-router-dom";

describe("Home", () => {
  it("renders Aplikasi Pembukaaan Rekening Giro", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("button", { name: "Aplikasi Pembukaan Rekening Giro" })
    ).toBeInTheDocument();
  });
});
