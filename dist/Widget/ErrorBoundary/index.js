'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  margin: '1em'
};

var box = {
  display: 'grid',
  alignItems: 'center'
};

var text = {
  display: 'grid',
  gridTemplateColumns: '1fr auto'
};

var ErrorBoundary = (_temp = _class = function (_PureComponent) {
  _inherits(ErrorBoundary, _PureComponent);

  function ErrorBoundary(props) {
    _classCallCheck(this, ErrorBoundary);

    var _this = _possibleConstructorReturn(this, (ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call(this, props));

    _this.state = { error: null };

    _this.onReload = _this.onReload.bind(_this);
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: 'componentDidCatch',
    value: function componentDidCatch(error, errorInfo) {
      // eslint-disable-line
      // Display fallback UI
      this.setState({ error: error });

      // if (process.env.CI_COMMIT_TAG !== 'development') {
      //   this.context.Raven.captureException(error, { extra: errorInfo })
      // }
    }
  }, {
    key: 'onReload',
    value: function onReload() {
      this.setState({ error: null });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return this.state.error ? _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
          'h1',
          null,
          'Error'
        ),
        _react2.default.createElement(
          'div',
          { style: text },
          _react2.default.createElement(
            'div',
            { style: box },
            _react2.default.createElement(
              'p',
              null,
              'We\'re sorry \u2014 something\'s gone wrong.'
            ),
            _react2.default.createElement(
              _Button2.default,
              { onClick: function onClick() {
                  return _this2.context.Raven.lastEventId() && _this2.context.Raven.showReportDialog();
                } },
              'Write report'
            ),
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.onReload },
              'Reload'
            )
          )
        )
      ) : this.props.children || null;
    }
  }]);

  return ErrorBoundary;
}(_react.PureComponent), _class.propTypes = {
  children: _propTypes2.default.node.isRequired
}, _temp);
exports.default = ErrorBoundary;