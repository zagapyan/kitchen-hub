import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router';

import HeaderComponent from "./HeaderComponent";

storiesOf('HeaderComponent', module).add('Example 1', () =>
  <MemoryRouter>
    <HeaderComponent />
  </MemoryRouter>
)
