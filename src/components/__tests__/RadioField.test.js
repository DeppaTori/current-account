import { render, screen } from "@testing-library/react";
import { RadioField } from "../RadioField";

describe("RadioField", () => {
  it("renders label input", () => {
    render(<RadioField label="Input Name" />);
    expect(screen.getByLabelText("Input Name")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(<RadioField label="Input Name" errMsg="Field Kosong" />);
    expect(screen.getByText("Field Kosong")).toBeInTheDocument();
  });
});
