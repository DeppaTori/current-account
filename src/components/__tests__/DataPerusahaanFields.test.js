import { render } from "@testing-library/react";
import {
  expectLabelInTheDocument,
  expectTextBoxtInTheDocument,
  expectTextInTheDocument,
} from "../../TestHelper";
import { DataPerusahaanFields } from "../DataPerusahaanFields";

describe("DataPerusahaanFields", () => {
  it("renders informasi perusahaan", () => {
    render(<DataPerusahaanFields />);
    expectTextBoxtInTheDocument("Nama Lengkap Perusahaan");
    expectTextBoxtInTheDocument("Tempat Berdiri Perusahaan");
    expectLabelInTheDocument("Tanggal Berdiri Perusahaan");
    expectLabelInTheDocument("Bidang Usaha");
  });

  it("renders error message", () => {
    const errMsg = {
      nama: "Nama kosong",
      tempat: "Tempat kosong",
      tanggal: "Tanggal kosong",
      bidang: "Bidang kosong",
    };
    render(<DataPerusahaanFields errMsg={errMsg} />);
    expectTextInTheDocument(errMsg.nama);
    expectTextInTheDocument(errMsg.tempat);
    expectTextInTheDocument(errMsg.tanggal);
    expectTextInTheDocument(errMsg.bidang);
  });
});
