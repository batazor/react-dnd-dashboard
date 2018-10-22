'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

// Widget


var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDndSimple = require('react-dnd-simple');

var _Wrapper = require('../Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _Grid2 = require('../../Grid');

var _Grid3 = _interopRequireDefault(_Grid2);

var _LineChart2 = require('../LineChart');

var _LineChart3 = _interopRequireDefault(_LineChart2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GetComponent = (_temp = _class = function (_Component) {
  _inherits(GetComponent, _Component);

  _createClass(GetComponent, null, [{
    key: 'getDropWrapper',
    value: function getDropWrapper(data, props, children) {
      return _react2.default.createElement(
        _reactDndSimple.Drop,
        {
          data: { id: props.id },
          accepts: ['widgetDashBoard']
          // isActiveClassName={s.isActiveContainer}
          // isDropClassName={s.isDropClassNameContainer}
        },
        _react2.default.createElement(children, _extends({}, props, data, {
          api: props.data.api
        }))
      );
    }
  }]);

  function GetComponent(props) {
    _classCallCheck(this, GetComponent);

    var _this = _possibleConstructorReturn(this, (GetComponent.__proto__ || Object.getPrototypeOf(GetComponent)).call(this, props));

    _this.component = {
      Grid: function Grid(data) {
        return GetComponent.getDropWrapper(data, props, _Grid3.default);
      },
      LineChart: function LineChart(data) {
        return _react2.default.createElement(_LineChart3.default, data);
      }
    };
    return _this;
  }

  _createClass(GetComponent, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var fields = nextProps.data.fields;

      // If all required fields have data

      for (var item in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, item)) {
          var field = fields[item];
          var isRequire = field.require;
          var isDataSource = field.dataSource === undefined;
          if (isRequire && isDataSource) {
            return false;
          }
        }
      }

      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      // Filters
      // const { filter } = this.props.data
      var newData = this.props.data;
      newData.data = _lodash2.default.sortBy(newData.data, 'joinBy');

      if (this.component[newData.type] !== undefined) {
        return _react2.default.createElement(
          _Wrapper2.default,
          _extends({}, this.props, newData.wrapper),
          this.component[newData.type](newData)
        );
      }

      return null;
    }
  }]);

  return GetComponent;
}(_react.Component), _class.propTypes = {
  data: _propTypes2.default.object.isRequired
}, _temp);
exports.default = GetComponent;