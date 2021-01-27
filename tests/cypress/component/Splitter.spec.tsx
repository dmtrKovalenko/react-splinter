import * as React from "react";
import { mount } from "@cypress/react";
import { Index } from "../../../react-splitter/src/Index.gen";
import { Pane } from "../../../react-splitter/src/Pane.gen";

describe("<Splitter />", () => {
  it("renders component", () => {
    mount(
      <Index>
        <Pane> </Pane>
        <Pane> </Pane>
      </Index>
    );

    cy.percySnapshot()
  });
});
