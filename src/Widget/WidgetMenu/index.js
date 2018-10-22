/**
* @author: Login Victor <batazor>
* @project: Rightech Analytics
*/

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Drag } from 'react-dnd-simple'
import Paper from '@material-ui/core/Paper'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import widgetList from './widgetList'
import { objectListToArrayList, onDnD } from './utils'

class WidgetMenu extends PureComponent {
  static propTypes = {
    // match: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,

    getI18N: PropTypes.func.isRequired,
    // onDnDAction: PropTypes.func.isRequired,
    onAddWidgetAction: PropTypes.func.isRequired,
  }

  static initInitialValue(api) {
    const initialValues = {}

    if (Array.isArray(api)) {
      api.forEach(field => initialValues[field.name] = field.defaultValue)
      return initialValues
    }

    return initialValues
  }

  constructor(props) {
    super(props)

    this.state = {
      DnD: {
        type: 'widgetDashBoard',
      },
    }

    this.myDragComponent = this.myDragComponent.bind(this)
    this.getI18N = this.getI18N.bind(this)
    this.onDnDAdd = this.onDnDAdd.bind(this)
  }

  onDnDAdd(event) {
    const newState = onDnD(this.props.data, event)
    return this.props.onDnDAction(objectListToArrayList(newState))
  }

  myDragComponent(item, index, options, /* onAddWidgetAction */) {
    const { classes } = this.props

    return (
      <Drag
        type={options.type}
        data={{
          ...item.new,
          // currentIdDashboard: this.props.match.params.id,
          initialValues: WidgetMenu.initInitialValue(item.api),
        }}
        className={classes.WidgetCard}
        isDragClassName={classes.isDragClassName}
        onDnD={this.onDnDAdd}
      >
        <Paper
          className={classes.Card}
          elevation={0}
          // onDoubleClick={() => item.isOnDoubleClick && onAddWidgetAction(item.new, this.props.match.params.id)}
        >
          {
            // <Icon
            //   name={item.icon || 'amazon'}
            //   className={classes.IconList}
            // />
          }
          <Typography variant="headline">
            {item.title}
          </Typography>
        </Paper>
      </Drag>
    )
  }

  getI18N(name) {
    return this.props.getI18N ? this.props.getI18N(name) : name
  }

  render() {
    const { isOpenWidgetMenu, onClose } = this.props

    // iOS has a "swipe to go back" feature that mess with the discovery feature. We have to disable it.
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

    return (
      <SwipeableDrawer
        width={350}
        anchor="right"
        open={isOpenWidgetMenu}
        variant="persistent"
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: this.props.classes.wrapper }}
        onOpen={() => {}}
        onClose={onClose}
      >
        <Toolbar className={this.props.classes.Toolbar}>
          <div className={this.props.classes.BoxTitle}>
            <Typography variant="title" color="inherit">
              {this.getI18N('widget_add')}
            </Typography>

            <Typography>
              {this.getI18N('dashboard_widget_dnd')}
            </Typography>
          </div>

          <Tooltip placement="bottom" title={this.getI18N('close')}>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>

        <div className={this.props.classes.Box}>
          {
            Object.keys(widgetList).map((item, index) => this.myDragComponent(
              widgetList[item],
              index,
              this.state.DnD,
              this.props.onAddWidgetAction,
            ))
          }
        </div>
      </SwipeableDrawer>
    )
  }
}

WidgetMenu.defaultProps = {
  isOpenWidgetMenu: false,
}

WidgetMenu.propTypes = {
  isOpenWidgetMenu: PropTypes.bool,

  onClose: PropTypes.func.isRequired,
}

export default withStyles(styles)(WidgetMenu)
