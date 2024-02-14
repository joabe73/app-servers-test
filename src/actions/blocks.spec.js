import React from 'react';
import Node from '../components/Blocks'

import {create} from 'react-test-renderer';

it('teste', () => {
  const data = {
    attributes: {
      index: 1,
      data: ''
    }
  }
  const tree = create(<Node block={data} />)
  
  const component = tree.toJSON()

  expect(component).toMatchSnapshot()

})
