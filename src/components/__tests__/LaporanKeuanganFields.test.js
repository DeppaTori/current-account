import { render, screen } from "@testing-library/react";
import {
  expectRadioInTheDocument,
  expectTextBoxtInTheDocument,
} from "../../TestHelper";
import { LaporanKeuanganTahunanFields } from "../LaporanKeuanganTahunanFields";

describe("LaporanKeuanganTahunanFields", () => {
  it("renders fields", () => {
    render(<LaporanKeuanganTahunanFields />);
    expect(
      screen.getByRole("heading", {
        name: /Laporan Keuangan Tahunan/i,
      })
    ).toBeInTheDocument();
    expectTextBoxtInTheDocument("Modal Dasar Perusahaan");
    expectTextBoxtInTheDocument("Modal Disetor");
  });
});
