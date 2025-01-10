import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
import { screen, render } from "@testing-library/react";

test("component is rendered", () => {
  render(<Counter />);
  expect(screen.getByText(/Counter/)).toBeInTheDocument();
});

test("counter gets updated", async () => {
  render(<Counter />);
  expect(screen.getByText(/you clicked 0 times/i)).toBeInTheDocument();
  const user = userEvent.setup();
  const button = screen.getByText(/click me/i);
  await user.click(button);
  //   waitFor(() => {
  //     expect(screen.getByText(/you clicked 1 times/i)).toBeInTheDocument();
  //   });
  expect(await screen.findByText(/you clicked 1 times/i)).toBeInTheDocument();
});
