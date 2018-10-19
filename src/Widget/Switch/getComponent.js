import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Drop } from 'react-dnd-simple'

// Widget
import Wrapper from '../Wrapper'
import Grid from '../../Grid'
import LineChart from '../LineChart'

class GetComponent extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  static getDropWrapper(data, props, children) {
    return (
      <Drop
        data={{ id: props.id }}
        accepts={['widgetDashBoard']}
        // isActiveClassName={s.isActiveContainer}
        // isDropClassName={s.isDropClassNameContainer}
      >
        {
          React.createElement(children, {
            ...props,
            ...data,
            api: props.data.api,
          })
        }
      </Drop>
    )
  }

  constructor(props) {
    super(props)

    this.component = {
      Grid: data => GetComponent.getDropWrapper(data, props, Grid),
      LineChart: data => <LineChart {...data} />,
    }
  }

  shouldComponentUpdate(nextProps) {
    const { fields } = nextProps.data

    // If all required fields have data
    for (const item in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, item)) {
        const field = fields[item]
        const isRequire = field.require
        const isDataSource = field.dataSource === undefined
        if (isRequire && isDataSource) { return false }
      }
    }

    return true
  }

  render() {
    // Filters
    // const { filter } = this.props.data
    const newData = this.props.data
    newData.data = _.sortBy(newData.data, 'joinBy')

    if (this.component[newData.type] !== undefined) {
      return (
        <Wrapper
          {...this.props}
          {...newData.wrapper}
        >
          {this.component[newData.type](newData)}
        </Wrapper>
      )
    }

    return null
  }
}

export default GetComponent
