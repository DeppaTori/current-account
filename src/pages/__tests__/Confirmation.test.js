const { render, screen } = require("@testing-library/react");
const { confirmationLabels, confirmationData } = require("../../constants");
const {
  expectTextInTheDocument,
  expectTestIdInTheDocument,
} = require("../../TestHelper");
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

  it("renders Laporan Keuangan Tahunan section", () => {
    const { laporanKeuangan } = confirmationLabels;

    render(<Confirmation />);
    expectTextInTheDocument("Laporan Keuangan Tahunan");
    laporanKeuangan.forEach((item) => expectTextInTheDocument(item + " :"));
    for (const property in confirmationData.laporanKeuangan) {
      expectTextInTheDocument(confirmationData.laporanKeuangan[property]);
    }
  });

  it("renders Hubungan dengan Nasabah lain di Bank section", () => {
    render(<Confirmation />);
    expectTextInTheDocument("Hubungan dengan Nasabah lain di Bank");
    for (const property in confirmationData.hubunganDgnNasabahLain) {
      expectTestIdInTheDocument("HDNSLID_" + property);
      expectTextInTheDocument(
        confirmationData.hubunganDgnNasabahLain[property]
      );
    }
  });

  it("renders Hubungan dengan pihak lain di Bank section", () => {
    render(<Confirmation />);
    expectTextInTheDocument("Hubungan dengan pihak lain di Bank");
    for (const property in confirmationData.hubunganDgnPihakLain) {
      expectTestIdInTheDocument("HDNPLID_" + property);
      expectTextInTheDocument(confirmationData.hubunganDgnPihakLain[property]);
    }
  });

  it("renders Sering bertransaksi dengan section", () => {
    render(<Confirmation />);
    expectTextInTheDocument("Sering bertransaksi dengan");
    for (const property in confirmationData.seringBertransaksiDengan) {
      expectTestIdInTheDocument("SBDID_" + property);
      expectTextInTheDocument(
        confirmationData.seringBertransaksiDengan[property]
      );
    }
  });

  it("renders Alamat Elektronik section", () => {
    render(<Confirmation />);
    expectTextInTheDocument("Alamat Elektronik");
    for (const property in confirmationData.alamatElektronik) {
      expectTestIdInTheDocument("AEID_" + property);
      expectTextInTheDocument(confirmationData.alamatElektronik[property]);
    }
  });

  it("renders Fasilitas Pembayaran Tagihan dan Lainnya section", () => {
    render(<Confirmation />);
    expectTextInTheDocument("Fasilitas Pembayaran Tagihan dan Lainnya");
    for (const property in confirmationData.fasilitasPembayaranTagihan) {
      expectTestIdInTheDocument("FTLID_" + property);
      expectTextInTheDocument(
        confirmationData.fasilitasPembayaranTagihan[property]
      );
    }
  });

  it("renders headings", () => {
    render(<Confirmation />);
    expect(
      screen.getByRole("heading", { name: /konfirmasi/i })
    ).toBeInTheDocument();
  });
});
