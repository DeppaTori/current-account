const { render, screen } = require("@testing-library/react");
const { PendingTask } = require("../PendingTask");

describe("PendingTask", () => {
  it("renders reject and approve button", () => {
    render(<PendingTask />);
    expect(screen.getByRole("button", { name: "Approve" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Reject" })).toBeInTheDocument();
  });
});
