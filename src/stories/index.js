import React from 'react'
import { storiesOf } from '@storybook/react'
import { Controller } from '../index'

const schema = [
  {
    type: 'Grid',
    children: [
      {
        type: 'LineChart',
        initialValues: {},
      },
      {
        type: 'LineChart',
        initialValues: {},
      },
      {
        type: 'LineChart',
        initialValues: {},
      },
      {
        type: 'LineChart',
        initialValues: {},
      },
    ],
  },
]

storiesOf('DashBoard', module)
  .add('Simple', () => (
    <div style={{ height: '50vh' }}>
      <Controller
        id={null}
        data={schema}

        // onCloseDialogs={pathToWidget => this.setState({ nodeId: pathToWidget })}
        // onMoveDnD={this.onMoveDnD}
        // onDeleteWidget={this.onDeleteWidget}
        onResizeWidget={event => console.warn('onResizeWidget', event)}
      />
    </div>
  ))
