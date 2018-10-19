import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import Widget from 'Containers/Widget'
import Wrapper from '../Wrapper'
import Switch from '../Switch'
import MyDropContainer from './myDropContainer'

class Controller extends PureComponent {
  static getContainer({ id, data, ...props }) {
    return data.map((item, index) => {
      const pathById = `${id === null ? '' : `${id}.`}${index}`

      console.warn('getContainer', id)

      return (
        <Wrapper
          {...props}
          id={pathById}
          key={pathById}
        >
          <MyDropContainer
            data={item}
            id={pathById}
            {...props}
          />
        </Wrapper>
      )
    })
  }

  render() {
    return Array.isArray(this.props.data) ? (
      Controller.getContainer(this.props)
    ) : (
      <Switch
        statusDataSource={{}}
        packets={{}}
        {...this.props}
      />
    )
  }
}

Controller.propTypes = {
  data: PropTypes.any.isRequired,
}

export default Controller
