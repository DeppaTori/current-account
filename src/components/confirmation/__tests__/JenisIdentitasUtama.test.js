import { render, screen } from "@testing-library/react";
import { confirmationData } from "../../../constants";
import { expectTextInTheDocument } from "../../../TestHelper";
import { JenisIdentitasUtama } from "../JenisIdentitasUtama";

describe("JenisIdentitasUtama", () => {
  it("renders info", () => {
    const { jenisIdentitasUtama } = confirmationData;
    const { aktaPendirian, npwp, nib, siup, tdp, nomor } = jenisIdentitasUtama;
    render(<JenisIdentitasUtama dataJIU={jenisIdentitasUtama} />);
    expect(
      screen.getByRole("heading", { name: /jenis identitas utama/i })
    ).toBeInTheDocument();
    expectTextInTheDocument("Akta Pendirian :");

    expectTextInTheDocument("Alamat Kantor :");
    expectTextInTheDocument("Provinsi :");
    expectTextInTheDocument("Kabupaten/Kota :");
    expectTextInTheDocument("Area :");
    expectTextInTheDocument("Alamat Pabrik :");
    expectTextInTheDocument("Alamat Proyek :");
    expectTextInTheDocument("Alamat Kirim Surat :");
    expectTextInTheDocument("NPWP :");

    expectTextInTheDocument("Dokumen Lainnya :");
    expect(screen.getAllByText("Berlaku Hingga :")).toHaveLength(6);
    expect(screen.getAllByText("Tempat Dikeluarkan Identitas :")).toHaveLength(
      6
    );
    expectTextInTheDocument("Nomor NIB :");
    expectTextInTheDocument("SIUP :");

    expectTextInTheDocument("TDP :");
    expectTextInTheDocument("Lainnya :");
    expectTextInTheDocument("Nomor :");

    expectTextInTheDocument(aktaPendirian.nomor);
    expectTextInTheDocument(aktaPendirian.berlaku);
    expectTextInTheDocument(aktaPendirian.tempat);

    expectTextInTheDocument(jenisIdentitasUtama.alamatKantor);
    expectTextInTheDocument(jenisIdentitasUtama.provinsi);
    expectTextInTheDocument(jenisIdentitasUtama.kabupatenkota);
    expectTextInTheDocument(jenisIdentitasUtama.area);
    expectTextInTheDocument(jenisIdentitasUtama.alamatPabrik);
    expectTextInTheDocument(jenisIdentitasUtama.alamatProyek);
    expectTextInTheDocument(jenisIdentitasUtama.alamatKirimSurat);

    expectTextInTheDocument(npwp.nomor);
    expectTextInTheDocument(npwp.berlaku);
    expectTextInTheDocument(npwp.tempat);

    expectTextInTheDocument(nib.nomor);
    expectTextInTheDocument(nib.berlaku);
    expectTextInTheDocument(nib.tempat);

    expectTextInTheDocument(siup.nomor);
    expectTextInTheDocument(siup.berlaku);
    expectTextInTheDocument(siup.tempat);

    expectTextInTheDocument(tdp.nomor);
    expectTextInTheDocument(tdp.berlaku);
    expectTextInTheDocument(tdp.tempat);

    expectTextInTheDocument(nomor.nomor);
    expectTextInTheDocument(nomor.berlaku);
    expectTextInTheDocument(nomor.tempat);
  });
});
