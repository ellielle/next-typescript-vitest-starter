import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Home from "../pages";

describe("Home Component", () => {
  test("renders", () => {
    render(<Home />)
    const header = screen.getByText(/pages\/index\.tsx/i);
    expect(header).toBeDefined();
  })
})