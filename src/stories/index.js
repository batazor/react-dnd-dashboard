import React from 'react'
import { storiesOf } from '@storybook/react'
// import { StateDecorator, Store } from "@sambego/storybook-state"
import { withState } from '@dump247/storybook-state'
import { Context } from 'react-dnd-simple'
import { WidgetMenu, Controller } from '../index'

const schema = [
  {
    type: 'Grid',
    children: [],
  },
]

storiesOf('DashBoard', module)
  .add('Simple', withState({ schema })(({ store }) => (
    <Context>
      <div style={{ height: '50vh' }}>
        <Controller
          id={null}
          data={store.state.schema}

          // onCloseDialogs={pathToWidget => this.setState({ nodeId: pathToWidget })}
          // onMoveDnD={this.onMoveDnD}
          // onDeleteWidget={this.onDeleteWidget}
          onResizeWidget={event => console.warn('onResizeWidget', event)}
        />

        <WidgetMenu
          isOpenWidgetMenu
          data={store.state.schema}
          onDnDAction={(event) => {
            console.warn('new state', event)
            store.set({ schema: event })
          }}
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
  )))
