import { render, screen } from "@testing-library/react";
import { confirmationData } from "../../../constants";
import { expectTextInTheDocument } from "../../../TestHelper";
import { DataPerusahaan } from "../DataPerusahaan";

describe("Data Perusahaan", () => {
  it("renders info", () => {
    const { dataPerusahaan } = confirmationData;
    render(<DataPerusahaan data={dataPerusahaan} />);
    expect(
      screen.getByRole("heading", { name: /data perusahaan/i })
    ).toBeInTheDocument();
    expectTextInTheDocument("Nama Lengkap Perusahaan :");
    expectTextInTheDocument("Tempat Berdiri Perusahaan :");
    expectTextInTheDocument("Tanggal Berdiri Perusahaan :");
    expectTextInTheDocument("Bidang Usaha :");
    expectTextInTheDocument("Grup :");
    expectTextInTheDocument(dataPerusahaan.bidang);
    expectTextInTheDocument(dataPerusahaan.group);
    expectTextInTheDocument(dataPerusahaan.nama);
    expectTextInTheDocument(dataPerusahaan.tanggalBediri);
    expectTextInTheDocument(dataPerusahaan.tempatBerdiri);
  });
});
