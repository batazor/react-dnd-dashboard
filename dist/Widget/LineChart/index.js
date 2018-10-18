'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recharts = require('recharts');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _filter = require('../../utils/filter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** Render LineChartWidget widget
* @module dashboard
* */
var LineChartWidget = function (_PureComponent) {
  _inherits(LineChartWidget, _PureComponent);

  _createClass(LineChartWidget, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps) {
      var LIMIT = _lodash2.default.get(nextProps.initialValues, 'setting[0].limitPoints', 100) * -1; // eslint-disable-line
      var PLOT = (0, _filter.onFindObject)(nextProps.data, LIMIT);

      PLOT = PLOT.map(function (item) {
        return _extends({}, item, {
          joinBy: (0, _moment2.default)(item.joinBy).format('lll')
        });
      });

      return { PLOT: PLOT };
    }
  }, {
    key: 'tickFormatter',
    value: function tickFormatter(value) {
      return (0, _moment2.default)(value).format('DD.MM.YY, HH:mm');
    }
  }]);

  function LineChartWidget() {
    _classCallCheck(this, LineChartWidget);

    var _this = _possibleConstructorReturn(this, (LineChartWidget.__proto__ || Object.getPrototypeOf(LineChartWidget)).call(this));

    _this.state = {
      opacity: {}
    };

    _this.onClickLabel = _this.onClickLabel.bind(_this);
    return _this;
  }

  _createClass(LineChartWidget, [{
    key: 'onClickLabel',
    value: function onClickLabel(o) {
      var dataKey = o.dataKey;


      var minOpacity = 0.1;
      var currentOpacity = this.state.opacity[dataKey] === minOpacity ? 1 : minOpacity;

      this.setState(function (state) {
        return {
          opacity: _extends({}, state.opacity, _defineProperty({}, dataKey, currentOpacity))
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var initialValues = this.props.initialValues;
      var _state = this.state,
          PLOT = _state.PLOT,
          opacity = _state.opacity;


      return _react2.default.createElement(
        _recharts.ResponsiveContainer,
        { debounce: 1 },
        _react2.default.createElement(
          _recharts.LineChart,
          {
            data: PLOT,
            layout: initialValues.layout,
            style: { background: 'white' },
            syncId: _lodash2.default.get(initialValues, 'setting[0].syncId', undefined),
            margin: {
              top: 16,
              right: 32,
              bottom: 8,
              left: 0
            }
          },
          _lodash2.default.get(initialValues, 'line', []).map(function (item, index) {
            return _react2.default.createElement(_recharts.Line, {
              key: index // eslint-disable-line
              , type: 'monotone',
              dataKey: item.label,
              stroke: initialValues.line[index].color || '#8884d8',
              strokeOpacity: opacity[item.label],
              dot: !!initialValues.line[index].dot,
              connectNulls: initialValues.line[index].connectNulls
            });
          }),
          _lodash2.default.get(initialValues, 'CartesianGrid[0].enable', false) && _react2.default.createElement(_recharts.CartesianGrid, { stroke: initialValues.CartesianGrid[0].CartesianGridColor }),
          _lodash2.default.get(initialValues, 'tooltip[0].enable', false) && _react2.default.createElement(_recharts.Tooltip, { stroke: initialValues.tooltip[0].color }),
          _react2.default.createElement(_recharts.XAxis, {
            dataKey: 'joinBy',
            height: 30,
            width: 260,
            unit: _lodash2.default.get(initialValues, 'XAxis[0].unit'),
            type: _lodash2.default.get(initialValues, 'XAxis[0].type'),
            allowDecimals: true
          }),
          _react2.default.createElement(_recharts.YAxis, {
            dataKey: _lodash2.default.get(initialValues, 'YAxis[0].binding'),
            height: 60,
            width: 80,
            unit: _lodash2.default.get(initialValues, 'YAxis[0].unit'),
            allowDecimals: true
          }),
          _lodash2.default.get(initialValues, 'legend[0].enable', false) && PLOT.length && _react2.default.createElement(_recharts.Legend, { onClick: this.onClickLabel }),
          _lodash2.default.get(initialValues, 'brush[0].enable', false) && PLOT.length && _react2.default.createElement(_recharts.Brush, {
            dataKey: 'joinBy',
            stroke: _lodash2.default.get(initialValues, 'brush[0].color')
          })
        )
      );
    }
  }]);

  return LineChartWidget;
}(_react.PureComponent);

LineChartWidget.propTypes = {
  initialValues: _propTypes2.default.object.isRequired
};

exports.default = LineChartWidget;