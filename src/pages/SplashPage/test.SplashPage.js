import React from 'react'
import { shallow } from 'enzyme'

import SplashPage from './SplashPage'

describe('SplashPage', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<SplashPage {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})