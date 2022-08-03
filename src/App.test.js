import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import user from "@testing-library/user-event";

describe("App", () => {
  it("renders form when Aplikasi Pembukaan button is clicked", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await user.click(
      screen.getByRole("button", { name: "Aplikasi Pembukaan Rekening Giro" })
    );
    expect(screen.getByText("Form")).toBeInTheDocument();
  });
});
