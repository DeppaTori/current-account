import { render } from "@testing-library/react";
import {
  expectLabelInTheDocument,
  expectRadioInTheDocument,
  expectTextBoxtInTheDocument,
  expectTextInTheDocument,
} from "../../TestHelper";
import { JenisIdentitasUtamaFields } from "../JenisIdentitasUtamaFields";

describe("JenisIdentitasUtamaFields", () => {
  it("renders all fields in jenis identitas utama", () => {
    render(<JenisIdentitasUtamaFields />);
    expectTextInTheDocument("Jenis Identitas Utama");
    expectTextBoxtInTheDocument("Nomor Akta Pendirian Perusahaan");
    expectTextBoxtInTheDocument("Tempat dikeluarkan Akta Pendirian");
    expectLabelInTheDocument("Tanggal berlaku akta pendirian");
    expectTextBoxtInTheDocument("Alamat kantor");
    expectRadioInTheDocument("Alamat Kirim Surat");
    expectTextBoxtInTheDocument("NPWP");
    expectTextBoxtInTheDocument("Tempat dikeluarkan NPWP");
    expectLabelInTheDocument("Tanggal berlaku NPWP");
    // expectLabelInTheDocument("Dokumen Lainnya");
    expectTextBoxtInTheDocument("Nomor NIB");
    expectTextBoxtInTheDocument("Tempat Dikeluarkan NIB");
    expectLabelInTheDocument("Tanggal berlaku NIB");
    expectTextBoxtInTheDocument("Nomor SIUP");
    expectTextBoxtInTheDocument("Tempat Dikeluarkan SIUP");
    expectLabelInTheDocument("Tanggal berlaku SIUP");
    expectTextBoxtInTheDocument("TDP");
    expectTextBoxtInTheDocument("Tempat Dikeluarkan TDP");
    expectLabelInTheDocument("Tanggal berlaku TDP");
  });
});
