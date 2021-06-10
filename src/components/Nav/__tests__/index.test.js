import React from "react";
// render: Jest creates simulated DOM in a Node.js environment to approximate DOM (no component is actually visibly rendered)
// cleanup: remove components from the DOM to prevent memory leaking, and variable or data collisions between tests that could corrupt test results
import { render, cleanup } from "@testing-library/react";
// offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
    // baseline test
    it("renders", () => {
        render(<Nav />);
    });

    // snapshot test
    it("matches snapshot", () => {
        const { asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe("emoji is visible", () => {
    it("inserts emoji into the h2", () => {
        // Arrange, return element containing emoji
        const { getByLabelText } = render(<Nav />);

        // Assert, test emoji's accessibility by querying element by aria-label
        expect(getByLabelText("camera")).toHaveTextContent("📸");
    });
})

describe("links are visible", () => {
    it("inserts text into the links", () => {
        // Arrange, gets data-testid value in <a>, "link" and "about"
        const { getByTestId } = render(<Nav />);

        // Assert
        expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
        expect(getByTestId("about")).toHaveTextContent("About me");
    });
})