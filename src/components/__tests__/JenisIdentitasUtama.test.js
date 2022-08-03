import { render } from "@testing-library/react";
import {
  expectLabelInTheDocument,
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
  });
});
