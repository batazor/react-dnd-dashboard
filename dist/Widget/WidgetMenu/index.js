'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /**
                   * @author: Login Victor <batazor>
                   * @project: Rightech Analytics
                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDndSimple = require('react-dnd-simple');

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _SwipeableDrawer = require('@material-ui/core/SwipeableDrawer');

var _SwipeableDrawer2 = _interopRequireDefault(_SwipeableDrawer);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Toolbar = require('@material-ui/core/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Tooltip = require('@material-ui/core/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _styles = require('@material-ui/core/styles');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

var _widgetList = require('./widgetList');

var _widgetList2 = _interopRequireDefault(_widgetList);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WidgetMenu = (_temp = _class = function (_PureComponent) {
  _inherits(WidgetMenu, _PureComponent);

  _createClass(WidgetMenu, null, [{
    key: 'initInitialValue',
    value: function initInitialValue(api) {
      var initialValues = {};

      if (Array.isArray(api)) {
        api.forEach(function (field) {
          return initialValues[field.name] = field.defaultValue;
        });
        return initialValues;
      }

      return initialValues;
    }
  }]);

  function WidgetMenu(props) {
    _classCallCheck(this, WidgetMenu);

    var _this = _possibleConstructorReturn(this, (WidgetMenu.__proto__ || Object.getPrototypeOf(WidgetMenu)).call(this, props));

    _this.state = {
      DnD: {
        type: 'widgetDashBoard'
      }
    };

    _this.myDragComponent = _this.myDragComponent.bind(_this);
    _this.getI18N = _this.getI18N.bind(_this);
    _this.onDnDAdd = _this.onDnDAdd.bind(_this);
    return _this;
  }

  _createClass(WidgetMenu, [{
    key: 'onDnDAdd',
    value: function onDnDAdd(event) {
      var newState = (0, _utils.onDnD)(this.props.data, event);
      return this.props.onDnDAction((0, _utils.objectListToArrayList)(newState));
    }
  }, {
    key: 'myDragComponent',
    value: function myDragComponent(item, index, options) /* onAddWidgetAction */{
      var classes = this.props.classes;


      return _react2.default.createElement(
        _reactDndSimple.Drag,
        {
          type: options.type,
          data: _extends({}, item.new, {
            // currentIdDashboard: this.props.match.params.id,
            initialValues: WidgetMenu.initInitialValue(item.api)
          }),
          className: classes.WidgetCard,
          isDragClassName: classes.isDragClassName,
          onDnD: this.onDnDAdd
        },
        _react2.default.createElement(
          _Paper2.default,
          {
            className: classes.Card,
            elevation: 0
            // onDoubleClick={() => item.isOnDoubleClick && onAddWidgetAction(item.new, this.props.match.params.id)}
          },
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'headline' },
            item.title
          )
        )
      );
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
          isOpenWidgetMenu = _props.isOpenWidgetMenu,
          onClose = _props.onClose;

      // iOS has a "swipe to go back" feature that mess with the discovery feature. We have to disable it.

      var iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

      return _react2.default.createElement(
        _SwipeableDrawer2.default,
        {
          width: 350,
          anchor: 'right',
          open: isOpenWidgetMenu,
          variant: 'persistent',
          disableBackdropTransition: !iOS,
          disableDiscovery: iOS,
          classes: { paper: this.props.classes.wrapper },
          onOpen: function onOpen() {},
          onClose: onClose
        },
        _react2.default.createElement(
          _Toolbar2.default,
          { className: this.props.classes.Toolbar },
          _react2.default.createElement(
            'div',
            { className: this.props.classes.BoxTitle },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'title', color: 'inherit' },
              this.getI18N('widget_add')
            ),
            _react2.default.createElement(
              _Typography2.default,
              null,
              this.getI18N('dashboard_widget_dnd')
            )
          ),
          _react2.default.createElement(
            _Tooltip2.default,
            { placement: 'bottom', title: this.getI18N('close') },
            _react2.default.createElement(
              _IconButton2.default,
              { onClick: onClose },
              _react2.default.createElement(_Close2.default, null)
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: this.props.classes.Box },
          Object.keys(_widgetList2.default).map(function (item, index) {
            return _this2.myDragComponent(_widgetList2.default[item], index, _this2.state.DnD, _this2.props.onAddWidgetAction);
          })
        )
      );
    }
  }]);

  return WidgetMenu;
}(_react.PureComponent), _class.propTypes = {
  // match: PropTypes.object.isRequired,
  classes: _propTypes2.default.object.isRequired,

  getI18N: _propTypes2.default.func.isRequired,
  // onDnDAction: PropTypes.func.isRequired,
  onAddWidgetAction: _propTypes2.default.func.isRequired
}, _temp);


WidgetMenu.defaultProps = {
  isOpenWidgetMenu: false
};

WidgetMenu.propTypes = {
  isOpenWidgetMenu: _propTypes2.default.bool,

  onClose: _propTypes2.default.func.isRequired
};

exports.default = (0, _styles.withStyles)(_styles3.default)(WidgetMenu);