import { render, screen } from "@testing-library/react";
import Comment from "../components/comment";

test("renders username and caption correctly", () => {
  const mockUsername = "Sam";
  const mockCaption = "hi how are you?";

  render(<Comment username={mockUsername} caption={mockCaption} />);

  expect(screen.getByText(mockUsername)).toBeInTheDocument();
  expect(screen.getByText(mockCaption)).toBeInTheDocument();
});
