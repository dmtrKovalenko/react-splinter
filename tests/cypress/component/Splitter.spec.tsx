import * as React from "react";
import { mount } from "@cypress/react";
import { Splinter } from "../../../react-splitter/src/Splinter.gen";
import { Pane } from "../../../react-splitter/src/Pane.gen";

describe("<Splitter />", () => {
  it("renders component", () => {
    mount(
      <Splinter split="Vertical">
        <Pane initialSize={20}> pane 1 </Pane>
        <Pane> pane 2 </Pane>
      </Splinter>
    );

    cy.percySnapshot();
  });

  it("resizes", () => {
    mount(
      <Splinter split="Vertical">
        <Pane initialSize={20}> pane 1 </Pane>
        <Pane> pane 2 </Pane>
      </Splinter>
    );

    cy.percySnapshot();
  });
});
