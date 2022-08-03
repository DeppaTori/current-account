import { render, screen } from "@testing-library/react";
import { DateField } from "../DateField";

describe("DateField", () => {
  it("renders label input", () => {
    render(<DateField label="Input Name" />);
    expect(screen.getByLabelText("Input Name")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(<DateField label="Input Name" errMsg="Field Kosong" />);
    expect(screen.getByText("Field Kosong")).toBeInTheDocument();
  });
});
