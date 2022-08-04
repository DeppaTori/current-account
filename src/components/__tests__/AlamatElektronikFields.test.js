import { render, screen } from "@testing-library/react";
import {
  expectRadioInTheDocument,
  expectTextBoxtInTheDocument,
} from "../../TestHelper";
import { AlamatElektronikFields } from "../AlamatElektronikFields";

describe("AlamatElektronikFields", () => {
  it("renders fields", () => {
    render(<AlamatElektronikFields />);
    expect(
      screen.getByRole("heading", {
        name: /Alamat Elektronik/i,
      })
    ).toBeInTheDocument();
    expectTextBoxtInTheDocument("Email");
    expect(screen.getByText(/jenis rekening/i)).toBeInTheDocument();
    expectRadioInTheDocument("Giro Rupiah");
    expectRadioInTheDocument("Giro Valas");
    // expectRadioInTheDocument("Others");
    // expectTextBoxtInTheDocument("Others");
    expect(screen.getByText(/jenis valuta/i)).toBeInTheDocument();
    expectRadioInTheDocument("IDR");
    expectRadioInTheDocument("USD");
    expectTextBoxtInTheDocument("Lain-Lain");
  });
});
