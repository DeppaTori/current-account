import { render, screen } from "@testing-library/react";
import {
  expectRadioInTheDocument,
  expectTextBoxtInTheDocument,
} from "../../TestHelper";
import { SusunanManajemenFields } from "../SusunanManajemenFields";

describe("SusunanManajemenFields", () => {
  it("renders fields", () => {
    render(<SusunanManajemenFields />);
    expect(
      screen.getByRole("heading", {
        name: /Susunan Manajemen sesuai dengan Akta Pendirian atau Perubahan/i,
      })
    ).toBeInTheDocument();
    expectTextBoxtInTheDocument("Direktur Utama");
    expectTextBoxtInTheDocument("Komisaris Utama");
  });
});
