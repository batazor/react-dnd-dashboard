import _ from 'lodash'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  Brush,
} from 'recharts'
import moment from 'moment'
import { onFindObject } from '../../utils/filter'

/** Render LineChartWidget widget
* @module dashboard
* */
class LineChartWidget extends PureComponent {
  static getDerivedStateFromProps(nextProps) {
    const LIMIT = _.get(nextProps.initialValues, 'setting[0].limitPoints', 100) * -1 // eslint-disable-line
    let PLOT = onFindObject(nextProps.data, LIMIT)

    PLOT = PLOT.map(item => ({
      ...item,
      joinBy: moment(item.joinBy).format('lll'),
    }))

    return ({ PLOT })
  }

  static tickFormatter(value) {
    return moment(value).format('DD.MM.YY, HH:mm')
  }

  constructor() {
    super()

    this.state = {
      opacity: {},
    }

    this.onClickLabel = this.onClickLabel.bind(this)
  }

  onClickLabel(o) {
    const { dataKey } = o

    const minOpacity = 0.1
    const currentOpacity = this.state.opacity[dataKey] === minOpacity ? 1 : minOpacity

    this.setState(state => ({
      opacity: { ...state.opacity, [dataKey]: currentOpacity },
    }))
  }

  render() {
    const { initialValues } = this.props
    const { PLOT, opacity } = this.state

    return (
      <ResponsiveContainer debounce={1}>
        <LineChart
          data={PLOT}
          layout={initialValues.layout}
          style={{ background: 'white' }}
          syncId={_.get(initialValues, 'setting[0].syncId', undefined)}
          margin={{
            top: 16,
            right: 32,
            bottom: 8,
            left: 0,
          }}
        >
          {
            _.get(initialValues, 'line', []).map((item, index) => (
              <Line
                key={index} // eslint-disable-line
                type="monotone"
                dataKey={item.label}
                stroke={initialValues.line[index].color || '#8884d8'}
                strokeOpacity={opacity[item.label]}
                dot={!!initialValues.line[index].dot}
                connectNulls={initialValues.line[index].connectNulls}
              />
            ))
          }

          {
            _.get(initialValues, 'CartesianGrid[0].enable', false) && (
              <CartesianGrid stroke={initialValues.CartesianGrid[0].CartesianGridColor} />
            )
          }

          {
            _.get(initialValues, 'tooltip[0].enable', false) && (
              <Tooltip stroke={initialValues.tooltip[0].color} />
            )
          }

          <XAxis
            dataKey="joinBy"
            height={30}
            width={260}
            unit={_.get(initialValues, 'XAxis[0].unit')}
            type={_.get(initialValues, 'XAxis[0].type')}
            allowDecimals
          />

          <YAxis
            dataKey={_.get(initialValues, 'YAxis[0].binding')}
            height={60}
            width={80}
            unit={_.get(initialValues, 'YAxis[0].unit')}
            allowDecimals
          />

          {
            _.get(initialValues, 'legend[0].enable', false) && PLOT.length && (
              <Legend onClick={this.onClickLabel} />
            )
          }

          {
            _.get(initialValues, 'brush[0].enable', false) && PLOT.length && (
              <Brush
                dataKey="joinBy"
                stroke={_.get(initialValues, 'brush[0].color')}
              />
            )
          }
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

LineChartWidget.propTypes = {
  initialValues: PropTypes.object.isRequired,
}

export default LineChartWidget
