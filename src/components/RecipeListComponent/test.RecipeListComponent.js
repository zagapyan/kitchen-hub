import React from "react";
import { shallow } from "enzyme";

import RecipeListComponent from "./RecipeListComponent";

describe("RecipeListComponent", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = shallow(<RecipeListComponent {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
