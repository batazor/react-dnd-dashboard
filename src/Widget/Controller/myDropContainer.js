import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Drop } from 'react-dnd-simple'
import Grid from '../../Grid'

const styles = theme => ({
  isActiveContainer: {
    background: theme.palette.secondary.main,
  },
  isDropClassNameContainer: {
    background: '#a5d6a7',
  },
})

class MyDropContainer extends PureComponent {
  render() {
    const { data, classes, ...props } = this.props

    return (
      <Grid
        {...props}
        {...data}
      />
    )

    // return (
    //   <Drop
    //     data={{ id: props.id }}
    //     accepts={['widgetDashBoard']}
    //     isActiveClassName={classes.isActiveContainer}
    //     isDropClassName={classes.isDropClassNameContainer}
    //   >
    //     <Grid
    //       {...props}
    //       {...data}
    //     />
    //   </Drop>
    // )
  }
}

MyDropContainer.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MyDropContainer)
