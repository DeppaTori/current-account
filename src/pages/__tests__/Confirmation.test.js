const { render, screen } = require("@testing-library/react");
const { Confirmation } = require("../Confirmation");

describe("Confirmation", () => {
  it("renders submit button", () => {
    render(<Confirmation />);
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });
});
