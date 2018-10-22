import React from 'react'
import { storiesOf } from '@storybook/react'
// import { StateDecorator, Store } from "@sambego/storybook-state"
import { withState } from '@dump247/storybook-state'
import { Context } from 'react-dnd-simple'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import { WidgetMenu, Controller } from '../index'

const schema = [
  {
    type: 'Grid',
    children: [],
  },
]

storiesOf('DashBoard', module)
  .add('Simple', withState({ schema, isOpenWidgetMenu: false })(({ store }) => (
    <Context>
      <div style={{ height: '70vh' }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => store.set({ isOpenWidgetMenu: !store.state.isOpenWidgetMenu })}>
              <AddIcon />
            </Button>

            <div>
              <Typography variant="h6" color="inherit">
                Dashboard
              </Typography>

              <Typography color="inherit">
                description
              </Typography>
            </div>
          </Toolbar>
        </AppBar>

        <Controller
          id={null}
          data={store.state.schema}

          // onCloseDialogs={pathToWidget => this.setState({ nodeId: pathToWidget })}
          // onMoveDnD={this.onMoveDnD}
          // onDeleteWidget={this.onDeleteWidget}
          onResizeWidget={event => console.warn('onResizeWidget', event)}
        />

        <WidgetMenu
          isOpenWidgetMenu={store.state.isOpenWidgetMenu}
          data={store.state.schema}
          onDnDAction={event => store.set({ schema: event })}
          onClose={() => store.set({ isOpenWidgetMenu: false })}
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
