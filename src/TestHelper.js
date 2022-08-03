import { screen } from "@testing-library/react";
export const expectTextBoxtInTheDocument = (label) => {
  expect(screen.getByRole("textbox", { name: label })).toBeInTheDocument();
};

export const expectLabelInTheDocument = (label) => {
  expect(screen.getByLabelText(label)).toBeInTheDocument();
};

export const expectTextInTheDocument = (text) => {
  expect(screen.getByText(text)).toBeInTheDocument();
};