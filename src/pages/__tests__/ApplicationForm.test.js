import { render, screen } from "@testing-library/react";
import { ApplicationForm } from "../ApplicationForm";
import user from "@testing-library/user-event";

describe("ApplicationForm", () => {
  const setupRender = () => {
    render(<ApplicationForm />);
  };

  const checkAlphabet = (el, submitEl, errText) => {
    user.type(el, "@asd11");
    user.click(submitEl);
    expect(screen.getByText(errText)).toBeInTheDocument();
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

  it("renders error lainnya when jenis badan usaha is lainnya and lainnya textbox is empty", () => {
    let submitBtn, badanUsaha;
    setupRender();
    submitBtn = screen.getByRole("button", { name: /confirm/i });
    badanUsaha = screen.getByRole("radio", {
      name: "Lainnya",
    });
    user.click(badanUsaha);
    user.click(submitBtn);
    expect(
      screen.getByText("Badan Usaha lainnya tidak boleh kosong")
    ).toBeInTheDocument();
    user.click(
      screen.getByRole("radio", {
        name: "Badan Usaha Swasta",
      })
    );
    expect(
      screen.queryByText("Badan Usaha lainnya tidak boleh kosong")
    ).not.toBeInTheDocument();
    user.click(submitBtn);
    user.click(badanUsaha);
    checkAlphabet(
      screen.getByRole("textbox", { name: /lainnya/i }),
      submitBtn,
      "Badan usaha lainnya harus alphabet"
    );
  });
});
