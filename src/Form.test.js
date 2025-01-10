import { render, screen } from "@testing-library/react";
import MyForm from "./Form";
import userEvent from "@testing-library/user-event";

test("Form is rendered", () => {
  render(<MyForm />);
  const text = screen.getByText(/Name/i);
  expect(text).toBeInTheDocument();
});

test("Text field gets updated", async () => {
  render(<MyForm />);
  const user = userEvent.setup();
  const input = screen.getByLabelText(/Name/i);
  expect(input).toBeInTheDocument();
  await user.type(input, "Debjyoti");
  expect(input).toHaveDisplayValue("Debjyoti");
});

test("Checkbox gets checked", async () => {
  render(<MyForm />);
  const chkbox = screen.getByLabelText(/Singing/i);
  const user = userEvent.setup();
  await user.click(chkbox);
  expect(chkbox).toBeChecked();
});

test("select box get updated", async () => {
  render(<MyForm />);
  const user = userEvent.setup();
  const select = screen.getByLabelText(/Cars/i);
  expect(select).toHaveDisplayValue("Saab");
  await user.selectOptions(select, ["volvo"]);
  expect(select).toHaveDisplayValue("Volvo");
});
