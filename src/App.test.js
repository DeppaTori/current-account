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

  it("renders confirmation page", async () => {
    render(
      <MemoryRouter initialEntries={["/confirmation"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("renders pending task page", async () => {
    render(
      <MemoryRouter initialEntries={["/pending-task"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole("button", { name: "Approve" })).toBeInTheDocument();
  });
});
