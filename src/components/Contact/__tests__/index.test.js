import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Contact from "..";

afterEach(cleanup);

describe("Contact component renders", () => {
    it("renders", () => {
        render(<Contact />);
    });

    it("matches snapshot DOM node structure", () => {
        // render Contact
        const { asFragment } = render(<Contact />);
        // test and compare
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders and matches ContactForm", () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId("h1tag")).toHaveTextContent("Contact Me")
    });

    it("renders and matches Submit", () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId("button")).toHaveTextContent("Submit")
    })
})