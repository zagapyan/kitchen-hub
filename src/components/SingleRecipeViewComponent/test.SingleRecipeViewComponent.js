import React from "react";
import { shallow } from "enzyme";

import SingleRecipeViewComponent from "./SingleRecipeViewComponent";

describe("SingleRecipeViewComponent", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = shallow(<SingleRecipeViewComponent {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
