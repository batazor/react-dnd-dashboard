import React from 'react'
import { storiesOf } from '@storybook/react'
import { Context } from 'react-dnd-simple'
import { WidgetMenu, Controller } from '../index'

let schema = [
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
    ],
  },
]

function onDnDAction(event) {
  console.warn('onDnDAction', event)
  schema = event
}

storiesOf('DashBoard', module)
  .add('Simple', () => (
    <Context>
      <div style={{ height: '50vh' }}>
        <Controller
          id={null}
          data={schema}

          // onCloseDialogs={pathToWidget => this.setState({ nodeId: pathToWidget })}
          // onMoveDnD={this.onMoveDnD}
          // onDeleteWidget={this.onDeleteWidget}
          onResizeWidget={event => console.warn('onResizeWidget', event)}
        />

        <WidgetMenu
          isOpenWidgetMenu
          data={schema}
          onDnDAction={onDnDAction}
          onClose={() => {}}
        />
        {
          // getI18N={this.getI18N}
          // isOpenWidgetMenu={this.state.DASHBOARD_IS_OPEN_WIDGET_MENU}
          // onClose={() => this.setState({ DASHBOARD_IS_OPEN_WIDGET_MENU: false })}
          // />
        }
      </div>
    </Context>
  ))
