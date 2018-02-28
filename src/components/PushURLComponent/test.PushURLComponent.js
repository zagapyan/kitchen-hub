import React from "react";
import { shallow } from "enzyme";

import PushURLComponent from "./PushURLComponent";

describe("PushURLComponent", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = shallow(<PushURLComponent {...props} />);
  });

  it("should", () => {
    expect(component).toMatchSnapshot();
  });
});
