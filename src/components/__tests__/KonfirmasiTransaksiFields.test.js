import { render, screen } from "@testing-library/react";
import { expectTextBoxtInTheDocument } from "../../TestHelper";
import { KonfirmasiTransaksiFields } from "../KonfirmasiTransaksiFields";

describe("SusunanManajemenFields", () => {
  it("renders fields", () => {
    render(<KonfirmasiTransaksiFields />);
    expect(
      screen.getByRole("heading", {
        name: /Konfirmasi Transaksi/i,
      })
    ).toBeInTheDocument();
    expectTextBoxtInTheDocument("Nama Pejabat yang dihubungi");
    expectTextBoxtInTheDocument("No. Telepon");
    expectTextBoxtInTheDocument("Jabatan");
    expectTextBoxtInTheDocument("No. KTP");
  });
});
