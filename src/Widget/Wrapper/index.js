import _ from 'lodash'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import DeleteIcon from '@material-ui/icons/Delete'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import SettingIcon from '@material-ui/icons/Settings'
import classnames from 'classnames'
import styles from './styles'

/** Render Wrapper for DashBoard component
* @module dashboard
* */
class Wrapper extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    mode: PropTypes.bool,
    className: PropTypes.string,

    getI18N: PropTypes.func,

    onCloseDialogs: PropTypes.func,
    onDeleteWidget: PropTypes.func,
  }

  static defaultProps = {
    mode: false,
    className: undefined,

    onCloseDialogs: () => {},
    onDeleteWidget: () => {},
  }

  constructor(props) {
    super(props)

    this.state = {
      anchorEl: null,
      isFocusTolbar: false,
    }

    this.onOpenOptions = this.onOpenOptions.bind(this)
    this.onCloseOptions = this.onCloseOptions.bind(this)
    this.onPointerMoveToolbar = ::this.onPointerMoveToolbar
    this.onPointerLeaveToolbar = ::this.onPointerLeaveToolbar
  }

  onOpenOptions(event) { this.setState({ anchorEl: event.currentTarget }) }

  onCloseOptions() { this.setState({ anchorEl: null }) }

  onPointerMoveToolbar() { this.setState({ isFocusTolbar: true }) }

  onPointerLeaveToolbar() { this.setState({ isFocusTolbar: false }) }

  getI18N(name) {
    return this.props.getI18N(name) || name
  }

  render() {
    const { id, classes } = this.props
    const open = Boolean(this.state.anchorEl)
    const TITLE = _.get(this.props, 'data.initialValues.setting[0].title', 'Widget')

    return (
      <Paper
        elevation={12}
        className={classnames(classes.Wrapper, this.props.className)}
        onPointerMove={this.onPointerMoveToolbar}
        onPointerLeave={this.onPointerLeaveToolbar}
      >
        {
          this.props.mode && (
            <Toolbar className={classnames('DragWidget', classes.DragWidget)}>
              <Typography variant="headline" noWrap color="inherit">
                {TITLE}
              </Typography>

              {
                this.state.isFocusTolbar && (
                  <Tooltip placement="bottom" title={this.getI18N('setting')}>
                    <IconButton
                      onClick={this.onOpenOptions}
                    >
                      <SettingIcon />
                    </IconButton>
                  </Tooltip>
                )
              }

              <Menu
                anchorEl={this.state.anchorEl}
                open={open}
                onClose={this.onCloseOptions}
                PaperProps={{
                  style: {
                    width: 200,
                  },
                }}
                elevation={4}
              >
                <MenuItem
                  onClick={() => {
                    this.onCloseOptions()
                    this.props.onCloseDialogs(id)
                  }}
                >
                  <Typography variant="headline">
                    {this.getI18N('setting')}
                  </Typography>
                </MenuItem>
                <MenuItem
                  className={classes.button}
                  onClick={() => {
                    this.onCloseOptions()
                    this.props.onDeleteWidget(id)
                  }}
                >
                  <Typography variant="headline">
                    {this.getI18N('delete')}
                  </Typography>
                  <DeleteIcon />
                </MenuItem>
              </Menu>
            </Toolbar>
          )
        }

        <div className={classes.content}>
          { this.props.children }
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(Wrapper)
