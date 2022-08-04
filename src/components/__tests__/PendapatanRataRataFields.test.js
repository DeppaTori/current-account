import { render, screen } from "@testing-library/react";
import { expectRadioInTheDocument } from "../../TestHelper";
import { PendapatanRataRataFields } from "../PendapatanRaraRataFields";

describe("PendapatanRataRataFields", () => {
  it("renders fields", () => {
    render(<PendapatanRataRataFields />);
    expect(
      screen.getByRole("heading", { name: /Pendapatan Rata-Rata per bulan/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/pendapatan operasional/i)).toBeInTheDocument();
    expectRadioInTheDocument("Rp 1.000.000.000");
    expectRadioInTheDocument("Rp 2.000.000.000");
    expectRadioInTheDocument("Rp 3.000.000.000");
    expect(screen.getByText(/pendapatan non operasional/i)).toBeInTheDocument();
    expectRadioInTheDocument("Rp 11.000.000.000");
    expectRadioInTheDocument("Rp 22.000.000.000");
    expectRadioInTheDocument("Rp 33.000.000.000");
    expect(
      screen.getByText(/tujuan berhubungan dengan bank/i)
    ).toBeInTheDocument();
    expectRadioInTheDocument("Hubungan A");
    expectRadioInTheDocument("Hubungan B");
  });
});
