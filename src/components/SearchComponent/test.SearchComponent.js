import React from "react";
import { shallow } from "enzyme";

import SearchComponent from "./SearchComponent";

describe("SearchComponent", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = shallow(<SearchComponent {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
