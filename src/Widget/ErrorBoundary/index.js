import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const style = {
  margin: '1em',
}

const box = {
  display: 'grid',
  alignItems: 'center',
}

const text = {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
}

class ErrorBoundary extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = { error: null }

    this.onReload = ::this.onReload
  }

  componentDidCatch(error, errorInfo) { // eslint-disable-line
    // Display fallback UI
    this.setState({ error })

    // if (process.env.CI_COMMIT_TAG !== 'development') {
    //   this.context.Raven.captureException(error, { extra: errorInfo })
    // }
  }

  onReload() { this.setState({ error: null }) }

  render() {
    return this.state.error ? (
      <div style={style}>
        <h1>
          Error
        </h1>

        <div style={text}>
          <div style={box}>
            <p>
              We&#39;re sorry — something&#39;s gone wrong.
            </p>

            <Button onClick={() => this.context.Raven.lastEventId() && this.context.Raven.showReportDialog()}>
              Write report
            </Button>

            <Button onClick={this.onReload}>
              Reload
            </Button>
          </div>

          {
            // <Icon name="alert" style={{ fontSize: '12em' }} />
          }
        </div>
      </div>
    ) : (this.props.children || null)
  }
}

export default ErrorBoundary
