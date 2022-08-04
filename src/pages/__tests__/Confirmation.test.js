const { render, screen } = require("@testing-library/react");
const { Confirmation } = require("../Confirmation");

describe("Confirmation", () => {
  it("renders submit button", () => {
    render(<Confirmation />);
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });
  it("renders headings", () => {
    render(<Confirmation />);
    expect(
      screen.getByRole("heading", { name: /konfirmasi/i })
    ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("heading", { name: /jenis identitas utama/i })
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("heading", { name: /informasi lainnya/i })
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("heading", { name: /pendapatan rata-rata per bulan/i })
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("heading", {
    //     name: "Rekening yang dimiliki saat ini (Bank/Inst. Keuangan Lainnya)",
    //   })
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("heading", {
    //     name: "Susunan Manajemen sesuai dengan Akta Pendirian atau Perubahan",
    //   })
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("heading", {
    //     name: "Susunan Manajemen sesuai dengan Akta Pendirian atau Perubahan",
    //   })
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("heading", { name: "Laporan Keuangan Tahunan" })
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("heading", {
    //     name: "Hubungan dengan Nasabah lain di Bank",
    //   })
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("heading", {
    //     name: "Hubungan dengan pihak lain di Bank",
    //   })
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("heading", { name: "Sering bertransaksi dengan" })
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("heading", { name: "Alamat Elektronik" })
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("heading", {
    //     name: "Fasilitas Pembayaran Tagihan dan Lainnya",
    //   })
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("heading", { name: "Konfirmasi Transaksi" })
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("heading", { name: "Persetujuan" })
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("heading", { name: "Unggah Dokumen" })
    // ).toBeInTheDocument();
  });
});
