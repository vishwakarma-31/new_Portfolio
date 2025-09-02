import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import ContactForm from "../components/ContactForm";

expect.extend(toHaveNoViolations);

describe("Accessibility checks", () => {
  it("ContactForm is accessible", async () => {
    const { container } = render(<ContactForm />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});