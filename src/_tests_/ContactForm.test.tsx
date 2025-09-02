import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../components/ContactForm";

describe("ContactForm", () => {
  it("renders form inputs", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText("Your Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("shows validation errors for empty fields", async () => {
    render(<ContactForm />);
    await userEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(await screen.findAllByText(/required/i)).toHaveLength(3);
  });
});