import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import ErrorBoundary from '../ErrorBoundary'
import GetComponent from './getComponent'

const styles = theme => ({
  ProgressBox: {
    height: '100%',
    background: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProgressColor: {
    color: theme.palette.secondary.main,
  },
})

class Widget extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    data: PropTypes.object.isRequired,
    mode: PropTypes.bool,
    packets: PropTypes.object.isRequired,
    statusDataSource: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,

    onCloseDialogs: PropTypes.func,
    onDeleteWidget: PropTypes.func,
  }

  static defaultProps = {
    id: undefined,
    mode: true,

    onDeleteWidget: () => {},
    onCloseDialogs: () => {},
  }

  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
  }

  render() {
    const {
      data, mode, classes, ...props
    } = this.props

    return (
      <ErrorBoundary>
        {
          false ? (
            <div className={classes.ProgressBox}>
              <CircularProgress size={70} classes={{ root: classes.ProgressColor }} />
            </div>
          ) : (
            <GetComponent
              {...props}
              key={props.id}
              mode={mode}
              data={{ ...data, mode, data: this.state.data }}
            />
          )
        }
      </ErrorBoundary>
    )
  }
}

export default withStyles(styles)(Widget)
