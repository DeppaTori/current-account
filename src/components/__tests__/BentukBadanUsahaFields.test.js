import { render, screen } from "@testing-library/react";
import { BentukBadanUsahaFields } from "../BentukBadanUsahaFields";
import user from "@testing-library/user-event";

describe("BentukBadanUsahaField", () => {
  it("renders radio and text field", () => {
    render(<BentukBadanUsahaFields />);
    expect(
      screen.getByRole("radio", {
        name: "Badan Usaha Swasta",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("radio", {
        name: "Lainnya",
      })
    ).toBeInTheDocument();
  });

  // it("renders non disable lainnya when radio is clicked", async () => {
  //   let badanUsaha;
  //   render(<BentukBadanUsahaFields />);
  //   badanUsaha = screen.getByRole("radio", {
  //     name: "Lainnya",
  //   });
  //   expect(screen.getByRole("textbox", { name: /lainnya/i })).toBeDisabled();
  //   user.click(badanUsaha);

  //   expect(
  //     screen.getByRole("textbox", { name: /lainnya/i })
  //   ).not.toBeDisabled();
  // });
  it("renders error lainnya", () => {
    render(<BentukBadanUsahaFields errLainnya="Error lainnya" />);
    expect(screen.getByText("Error lainnya")).toBeInTheDocument();
  });
});
