import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Responsive, WidthProvider } from 'react-grid-layout-fix'
import Controller from './Widget/Controller'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

const styles = () => ({})

class ShowcaseLayout extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    layout: PropTypes.any,
    children: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
    rowHeight: PropTypes.number,
    margin: PropTypes.array,

    onResizeWidget: PropTypes.func.isRequired,
  };

  static defaultProps = {
    id: undefined,
    layout: [],
    rowHeight: 95, // eslint-disable-line
    margin: [16, 20], // eslint-disable-line
  };

  static getDerivedStateFromProps(nextProps) {
    return ({ layout: nextProps.layout })
  }

  constructor() {
    super()

    this.state = {
      layout: undefined,
    }

    this.onLayoutChange = this.onLayoutChange.bind(this)
    this.onDragStop = this.onDragStop.bind(this)
    this.onResizeStop = this.onResizeStop.bind(this)
  }

  onLayoutChange(layout, layouts) { this.props.onResizeWidget(this.props.id, layout, layouts) }

  onDragStop(layout) { this.props.onResizeWidget(this.props.id, layout) }

  onResizeStop(layout) { this.props.onResizeWidget(this.props.id, layout) }

  render() {
    const {
      children, rowHeight, margin,
    } = this.props

    return (
      <ResponsiveReactGridLayout
        className="layout"
        autoSize
        verticalCompact
        draggableHandle=".DragWidget"
        onDragStop={this.onDragStop}
        onResizeStop={this.onResizeStop}
        cols={{
          lg: 12, md: 12, sm: 12, xs: 12, xxs: 12,
        }}
        onLayoutChange={this.onLayoutChange}
        // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
        // and set `measureBeforeMount={true}`.
        useCSSTransforms
        compactType="vertical"
        preventCollision
        style={{
          minHeight: '12em',
          overflow: 'auto',
          margin: '3px 0px 5em 0px',
        }}
        margin={margin} // eslint-disable-line
        rowHeight={rowHeight}
      >
        {
          children.map((item, index) => (
            <div
              key={/*eslint-disable*/index/* eslint-enable */}
              data-grid={this.state.layout[index]}
            >
              <Controller
                {...this.props}
                id={`${this.props.id}.${index}`}
                data={item}
              />
            </div>
          ))
        }
      </ResponsiveReactGridLayout>
    )
  }
}

export default ShowcaseLayout
