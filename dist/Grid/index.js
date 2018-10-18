'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactGridLayoutFix = require('react-grid-layout-fix');

var _Controller = require('./Widget/Controller');

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResponsiveReactGridLayout = (0, _reactGridLayoutFix.WidthProvider)(_reactGridLayoutFix.Responsive);

var styles = function styles() {
  return {};
};

var ShowcaseLayout = (_temp = _class = function (_PureComponent) {
  _inherits(ShowcaseLayout, _PureComponent);

  _createClass(ShowcaseLayout, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps) {
      return { layout: nextProps.layout };
    }
  }]);

  function ShowcaseLayout() {
    _classCallCheck(this, ShowcaseLayout);

    var _this = _possibleConstructorReturn(this, (ShowcaseLayout.__proto__ || Object.getPrototypeOf(ShowcaseLayout)).call(this));

    _this.state = {
      layout: undefined
    };

    _this.onLayoutChange = _this.onLayoutChange.bind(_this);
    _this.onDragStop = _this.onDragStop.bind(_this);
    _this.onResizeStop = _this.onResizeStop.bind(_this);
    return _this;
  }

  _createClass(ShowcaseLayout, [{
    key: 'onLayoutChange',
    value: function onLayoutChange(layout, layouts) {
      this.props.onResizeWidget(this.props.id, layout, layouts);
    }
  }, {
    key: 'onDragStop',
    value: function onDragStop(layout) {
      this.props.onResizeWidget(this.props.id, layout);
    }
  }, {
    key: 'onResizeStop',
    value: function onResizeStop(layout) {
      this.props.onResizeWidget(this.props.id, layout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          rowHeight = _props.rowHeight,
          margin = _props.margin;


      return _react2.default.createElement(
        ResponsiveReactGridLayout,
        {
          className: 'layout',
          autoSize: true,
          verticalCompact: true,
          draggableHandle: '.DragWidget',
          onDragStop: this.onDragStop,
          onResizeStop: this.onResizeStop,
          cols: {
            lg: 12, md: 12, sm: 12, xs: 12, xxs: 12
          },
          onLayoutChange: this.onLayoutChange
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          , useCSSTransforms: true,
          compactType: 'vertical',
          preventCollision: true,
          style: {
            minHeight: '12em',
            overflow: 'auto',
            margin: '3px 0px 5em 0px'
          },
          margin: margin // eslint-disable-line
          , rowHeight: rowHeight
        },
        children.map(function (item, index) {
          return _react2.default.createElement(
            'div',
            {
              key: /*eslint-disable*/index /* eslint-enable */,
              'data-grid': _this2.state.layout[index]
            },
            _react2.default.createElement(_Controller2.default, _extends({}, _this2.props, {
              id: _this2.props.id + '.' + index,
              data: item
            }))
          );
        })
      );
    }
  }]);

  return ShowcaseLayout;
}(_react.PureComponent), _class.propTypes = {
  id: _propTypes2.default.string,
  layout: _propTypes2.default.any,
  children: _propTypes2.default.array.isRequired,
  classes: _propTypes2.default.object.isRequired,
  rowHeight: _propTypes2.default.number,
  margin: _propTypes2.default.array,

  onResizeWidget: _propTypes2.default.func.isRequired
}, _class.defaultProps = {
  id: undefined,
  layout: [],
  rowHeight: 95, // eslint-disable-line
  margin: [16, 20] // eslint-disable-line
}, _temp);
exports.default = ShowcaseLayout;