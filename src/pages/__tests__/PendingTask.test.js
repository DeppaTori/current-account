import user from "@testing-library/user-event";
import { dataPendingTask } from "../../constants";
import { expectTextInTheDocument } from "../../TestHelper";
const { render, screen } = require("@testing-library/react");
const { PendingTask } = require("../PendingTask");

describe("PendingTask", () => {
  it("renders heading", () => {
    render(<PendingTask />);
    expect(
      screen.getByRole("heading", { name: /pending task bank user/i })
    ).toBeInTheDocument();
  });
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

  it("renders fields", async () => {
    const sampleData = dataPendingTask;
    render(<PendingTask />);
    expectTextInTheDocument(/Ticket Number/i);
    expectTextInTheDocument(/Created Date/i);
    expectTextInTheDocument(/Area/i);
    expectTextInTheDocument(/Email/i);
    expectTextInTheDocument(/Application/i);
    expectTextInTheDocument(/Status/i);
    expectTextInTheDocument(sampleData.ticketNumber);
    expectTextInTheDocument(sampleData.application);
    expectTextInTheDocument(sampleData.area);
    expectTextInTheDocument(sampleData.createdDate);
    expectTextInTheDocument(sampleData.email);
    expectTextInTheDocument(sampleData.status);
  });
});
