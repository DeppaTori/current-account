import { render, screen } from "@testing-library/react";
import { confirmationData } from "../../../constants";
import { expectTextInTheDocument } from "../../../TestHelper";
import { InformasiLainnya } from "../InformasiLainnya";

describe("InformasiLainnya", () => {
  it("renders info", () => {
    const { informasiLainnya } = confirmationData;
    render(<InformasiLainnya data={informasiLainnya} />);
    expect(
      screen.getByRole("heading", { name: /informasi lainnya/i })
    ).toBeInTheDocument();
    expectTextInTheDocument("Bidang Usaha :");
    expectTextInTheDocument("Alamat Kantor :");
    expectTextInTheDocument(informasiLainnya.bidang);
    expectTextInTheDocument(informasiLainnya.alamat);
  });
});
