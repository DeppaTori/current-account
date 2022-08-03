import { render, screen } from "@testing-library/react";
import { ApplicationForm } from "../ApplicationForm";
import user from "@testing-library/user-event";

describe("ApplicationForm", () => {
  const setupRender = () => {
    render(<ApplicationForm />);
  };

  const expectRadio = (label) => {
    expect(
      screen.getByRole("radio", {
        name: label,
      })
    ).toBeInTheDocument();
  };

  it("renders Form text", () => {
    setupRender();
    expect(screen.getByText("Form")).toBeInTheDocument();
  });
  it("renders radio button metode penyerahan dokumen", () => {
    setupRender();
    expect(
      screen.getByRole("radio", { name: "Unggah Dokumen" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("radio", { name: "Diserahkan ke Cabang" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Branch Code" })
    ).toBeInTheDocument();
  });

  it("shows warning when submit form", async () => {
    let submitBtn, metodePenyerahan, branchCode;
    setupRender();
    submitBtn = screen.getByRole("button", { name: /confirm/i });
    metodePenyerahan = screen.getByRole("radio", {
      name: "Diserahkan ke Cabang",
    });
    branchCode = screen.getByRole("textbox", {
      name: "Branch Code",
    });

    user.click(metodePenyerahan);
    user.click(submitBtn);
    expect(
      screen.getByText("Kode cabang tidak boleh kosong")
    ).toBeInTheDocument();

    user.type(branchCode, "@asd");
    user.click(submitBtn);
    expect(
      screen.getByText("Kode cabang harus alfanumerik")
    ).toBeInTheDocument();
  });

  it("renders date", async () => {
    setupRender();
    expect(screen.getByText(/date/i)).toBeInTheDocument();
  });
});
