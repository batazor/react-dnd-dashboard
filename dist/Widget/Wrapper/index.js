'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Toolbar = require('@material-ui/core/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Delete = require('@material-ui/icons/Delete');

var _Delete2 = _interopRequireDefault(_Delete);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Tooltip = require('@material-ui/core/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Menu = require('@material-ui/core/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Settings = require('@material-ui/icons/Settings');

var _Settings2 = _interopRequireDefault(_Settings);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** Render Wrapper for DashBoard component
* @module dashboard
* */
var Wrapper = (_temp = _class = function (_PureComponent) {
  _inherits(Wrapper, _PureComponent);

  function Wrapper(props) {
    _classCallCheck(this, Wrapper);

    var _this = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props));

    _this.state = {
      anchorEl: null,
      isFocusTolbar: false
    };

    _this.onOpenOptions = _this.onOpenOptions.bind(_this);
    _this.onCloseOptions = _this.onCloseOptions.bind(_this);
    _this.onPointerMoveToolbar = _this.onPointerMoveToolbar.bind(_this);
    _this.onPointerLeaveToolbar = _this.onPointerLeaveToolbar.bind(_this);
    return _this;
  }

  _createClass(Wrapper, [{
    key: 'onOpenOptions',
    value: function onOpenOptions(event) {
      this.setState({ anchorEl: event.currentTarget });
    }
  }, {
    key: 'onCloseOptions',
    value: function onCloseOptions() {
      this.setState({ anchorEl: null });
    }
  }, {
    key: 'onPointerMoveToolbar',
    value: function onPointerMoveToolbar() {
      this.setState({ isFocusTolbar: true });
    }
  }, {
    key: 'onPointerLeaveToolbar',
    value: function onPointerLeaveToolbar() {
      this.setState({ isFocusTolbar: false });
    }
  }, {
    key: 'getI18N',
    value: function getI18N(name) {
      return this.props.getI18N ? this.props.getI18N(name) : name;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          classes = _props.classes;

      var open = Boolean(this.state.anchorEl);
      var TITLE = _lodash2.default.get(this.props, 'data.initialValues.setting[0].title', 'Widget');

      return _react2.default.createElement(
        _Paper2.default,
        {
          elevation: 12,
          className: (0, _classnames2.default)(classes.Wrapper, this.props.className),
          onPointerMove: this.onPointerMoveToolbar,
          onPointerLeave: this.onPointerLeaveToolbar
        },
        this.props.mode && _react2.default.createElement(
          _Toolbar2.default,
          { className: (0, _classnames2.default)('DragWidget', classes.DragWidget) },
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'headline', noWrap: true, color: 'inherit' },
            TITLE
          ),
          this.state.isFocusTolbar && _react2.default.createElement(
            _Tooltip2.default,
            { placement: 'bottom', title: this.getI18N('setting') },
            _react2.default.createElement(
              _IconButton2.default,
              {
                onClick: this.onOpenOptions
              },
              _react2.default.createElement(_Settings2.default, null)
            )
          ),
          _react2.default.createElement(
            _Menu2.default,
            {
              anchorEl: this.state.anchorEl,
              open: open,
              onClose: this.onCloseOptions,
              PaperProps: {
                style: {
                  width: 200
                }
              },
              elevation: 4
            },
            _react2.default.createElement(
              _MenuItem2.default,
              {
                onClick: function onClick() {
                  _this2.onCloseOptions();
                  _this2.props.onCloseDialogs(id);
                }
              },
              _react2.default.createElement(
                _Typography2.default,
                { variant: 'headline' },
                this.getI18N('setting')
              )
            ),
            _react2.default.createElement(
              _MenuItem2.default,
              {
                className: classes.button,
                onClick: function onClick() {
                  _this2.onCloseOptions();
                  _this2.props.onDeleteWidget(id);
                }
              },
              _react2.default.createElement(
                _Typography2.default,
                { variant: 'headline' },
                this.getI18N('delete')
              ),
              _react2.default.createElement(_Delete2.default, null)
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: classes.content },
          this.props.children
        )
      );
    }
  }]);

  return Wrapper;
}(_react.PureComponent), _class.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node.isRequired,
  id: _propTypes2.default.string.isRequired,
  mode: _propTypes2.default.bool,
  className: _propTypes2.default.string,

  getI18N: _propTypes2.default.func,

  onCloseDialogs: _propTypes2.default.func,
  onDeleteWidget: _propTypes2.default.func
}, _class.defaultProps = {
  mode: false,
  className: undefined,

  onCloseDialogs: function onCloseDialogs() {},
  onDeleteWidget: function onDeleteWidget() {}
}, _temp);
exports.default = (0, _styles.withStyles)(_styles3.default)(Wrapper);