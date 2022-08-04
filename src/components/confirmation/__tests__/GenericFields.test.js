import { render, screen } from "@testing-library/react";
import { GenericFields } from "../GenericFields";

describe("GenericFields", () => {
  const data = [{ label: "Field 1", value: "Value 1" }];

  it("renders heading", () => {
    render(<GenericFields title="Title" fields={data} />);
    expect(screen.getByRole("heading", { name: /title/i })).toBeInTheDocument();
  });

  it("renders fields", () => {
    render(<GenericFields title="Title" fields={data} />);
    expect(screen.getByText(data[0].label + " :")).toBeInTheDocument();
    expect(screen.getByText(data[0].value)).toBeInTheDocument();
  });
});
