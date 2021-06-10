import React from "react";

// render: Jest creates simulated DOM in a Node.js environment to approximate DOM (no component is actually visibly rendered)
// cleanup: remove components from the DOM to prevent memory leaking, and variable or data collisions between tests that could corrupt test results
import { render, cleanup } from "@testing-library/react";

// offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';

import About from "..";

// after each test, won't have leftover memory data that could give us false results
afterEach(cleanup);

// declare component we're testing
describe("About component", () => {
    // First test to verify component is rendering
    // string declares what is being tested, callback fx run test
    // "test" can also be used interchangably with "it" to create a test
    it("renders", () => {
        render(<About />);
    });

    // Second test to compare snapshot (serialized version of DOM node structure enabled by Jest)
    // index.test.js.snap file in __snapshots__ is a serialized version of the component's node structure
    // elements, attributes, and text content, base model of the component's structure
    // compared against new snapshots created by asFragment function
    it("matches snapshot DOM node structure", () => {
        // render About
        const { asFragment } = render(<About />);
        // test and compare
        expect(asFragment()).toMatchSnapshot();

        // changes made to a component's element causes stored snapshot to become stale
        // A new snapshot can be written at command line containing instance of test runner by typing u to update/rewrite a new snapshot.
    })
})