import { render, screen } from "@testing-library/react";
import { InformasiLainnyaFields } from "../InformasiLainnyaFields";
import {
  expectRadioInTheDocument,
  expectTextBoxtInTheDocument,
} from "../../TestHelper";

describe("InformasiLainnyaFields", () => {
  it("renders fields", () => {
    render(<InformasiLainnyaFields />);
    expect(
      screen.getByRole("heading", { name: /informasi lainnya/i })
    ).toBeInTheDocument();
    expectTextBoxtInTheDocument("Bidang Usaha");
    expect(screen.getByText(/omzet usaha/i)).toBeInTheDocument();
    expectRadioInTheDocument("Rp 1.000.000.000");
    expectRadioInTheDocument("Rp 2.000.000.000");
    expectRadioInTheDocument("Rp 3.000.000.000");
  });
});
