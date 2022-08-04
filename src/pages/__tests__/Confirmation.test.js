const { render, screen } = require("@testing-library/react");
const { confirmationLabels, confirmationData } = require("../../constants");
const { expectTextInTheDocument } = require("../../TestHelper");
const { Confirmation } = require("../Confirmation");

describe("Confirmation", () => {
  it("renders submit button", () => {
    render(<Confirmation />);
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("renders pendapatan rata-rata per bulan section", () => {
    const { pendapatanRataPerBulan } = confirmationLabels;

    render(<Confirmation />);
    expectTextInTheDocument("Pendapatan Rata-Rata per bulan");
    pendapatanRataPerBulan.forEach((item) =>
      expectTextInTheDocument(item + " :")
    );
    for (const property in confirmationData.pendapatanRataPerBulan) {
      expectTextInTheDocument(
        confirmationData.pendapatanRataPerBulan[property]
      );
    }
  });
  it("renders rekening yang dimiliki saat ini section", () => {
    const { rekeningSaatIni } = confirmationLabels;

    render(<Confirmation />);
    expectTextInTheDocument(
      "Rekening yang dimiliki saat ini (Bank/Inst. Keuangan Lainnya)"
    );
    rekeningSaatIni.forEach((item) => expectTextInTheDocument(item + " :"));
    for (const property in confirmationData.rekeningSaatIni) {
      expectTextInTheDocument(confirmationData.rekeningSaatIni[property]);
    }
  });

  it("renders Susunan Manajemen sesuai dengan Akta Pendirian atau Perubahan section", () => {
    const { susunanManajemen } = confirmationLabels;

    render(<Confirmation />);
    expectTextInTheDocument(
      "Susunan Manajemen sesuai dengan Akta Pendirian atau Perubahan"
    );
    susunanManajemen.forEach((item) => expectTextInTheDocument(item + " :"));
    for (const property in confirmationData.susunanManajemen) {
      expectTextInTheDocument(confirmationData.susunanManajemen[property]);
    }
  });

  it("renders headings", () => {
    render(<Confirmation />);
    expect(
      screen.getByRole("heading", { name: /konfirmasi/i })
    ).toBeInTheDocument();
  });
});
