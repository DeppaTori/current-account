import { render, screen } from "@testing-library/react";
import { TextBoxField } from "../TextBoxField";

describe("TextBoxField", () => {
  it("renders label input", () => {
    render(<TextBoxField label="Input Name" />);
    expect(
      screen.getByRole("textbox", { name: "Input Name" })
    ).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(<TextBoxField label="Input Name" errMsg="Field Kosong" />);
    expect(screen.getByText("Field Kosong")).toBeInTheDocument();
  });
});
