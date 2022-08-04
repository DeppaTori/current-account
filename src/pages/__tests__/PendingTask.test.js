import user from "@testing-library/user-event";
const { render, screen } = require("@testing-library/react");
const { PendingTask } = require("../PendingTask");

describe("PendingTask", () => {
  it("renders reject and approve button", () => {
    render(<PendingTask />);
    expect(screen.getByRole("button", { name: "Approve" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Reject" })).toBeInTheDocument();
  });

  it("renders popup confirmation when approve button is clicked", async () => {
    render(<PendingTask />);
    await user.click(screen.getByRole("button", { name: "Approve" }));
    expect(
      screen.getByText("Anda yakin menyetujui task ini?")
    ).toBeInTheDocument();
  });

  it("renders popup reject when reject button is clicked", async () => {
    render(<PendingTask />);
    await user.click(screen.getByRole("button", { name: "Reject" }));
    expect(
      screen.getByText("Anda yakin menolak task ini?")
    ).toBeInTheDocument();
  });
});
