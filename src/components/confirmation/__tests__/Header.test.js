import { render, screen } from "@testing-library/react";
import { confirmationData } from "../../../constants";
import { expectTextInTheDocument } from "../../../TestHelper";
import { Header } from "../Header";
describe("Header", () => {
  it("renders date and bentuk badan usaha", () => {
    const { header } = confirmationData;
    render(<Header data={header} />);
    expectTextInTheDocument("Date :");
    expectTextInTheDocument("Bentuk Badan Usaha :");
    expectTextInTheDocument(header.date);
    expectTextInTheDocument(header.bentukBadanUsaha);
  });
});
