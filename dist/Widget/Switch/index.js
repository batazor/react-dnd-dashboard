'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CircularProgress = require('@material-ui/core/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _ErrorBoundary = require('../ErrorBoundary');

var _ErrorBoundary2 = _interopRequireDefault(_ErrorBoundary);

var _getComponent = require('./getComponent');

var _getComponent2 = _interopRequireDefault(_getComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    ProgressBox: {
      height: '100%',
      background: theme.palette.common.white,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    ProgressColor: {
      color: theme.palette.secondary.main
    }
  };
};

var Widget = (_temp = _class = function (_PureComponent) {
  _inherits(Widget, _PureComponent);

  function Widget(props) {
    _classCallCheck(this, Widget);

    var _this = _possibleConstructorReturn(this, (Widget.__proto__ || Object.getPrototypeOf(Widget)).call(this, props));

    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(Widget, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          mode = _props.mode,
          classes = _props.classes,
          props = _objectWithoutProperties(_props, ['data', 'mode', 'classes']);

      return _react2.default.createElement(
        _ErrorBoundary2.default,
        null,
        false ? _react2.default.createElement(
          'div',
          { className: classes.ProgressBox },
          _react2.default.createElement(_CircularProgress2.default, { size: 70, classes: { root: classes.ProgressColor } })
        ) : _react2.default.createElement(_getComponent2.default, _extends({}, props, {
          key: props.id,
          mode: mode,
          data: _extends({}, data, { mode: mode, data: this.state.data })
        }))
      );
    }
  }]);

  return Widget;
}(_react.PureComponent), _class.propTypes = {
  id: _propTypes2.default.string,
  data: _propTypes2.default.object.isRequired,
  mode: _propTypes2.default.bool,
  packets: _propTypes2.default.object.isRequired,
  statusDataSource: _propTypes2.default.object.isRequired,
  classes: _propTypes2.default.object.isRequired,

  onCloseDialogs: _propTypes2.default.func,
  onDeleteWidget: _propTypes2.default.func
}, _class.defaultProps = {
  id: undefined,
  mode: true,

  onDeleteWidget: function onDeleteWidget() {},
  onCloseDialogs: function onCloseDialogs() {}
}, _temp);
exports.default = (0, _styles.withStyles)(styles)(Widget);