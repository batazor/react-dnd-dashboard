'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Widget = require('Containers/Widget');

var _Widget2 = _interopRequireDefault(_Widget);

var _Wrapper = require('../Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _myDropContainer = require('./myDropContainer');

var _myDropContainer2 = _interopRequireDefault(_myDropContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controller = function (_PureComponent) {
  _inherits(Controller, _PureComponent);

  function Controller() {
    _classCallCheck(this, Controller);

    return _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).apply(this, arguments));
  }

  _createClass(Controller, [{
    key: 'render',
    value: function render() {
      return Array.isArray(this.props.data) ? Controller.getContainer(this.props) : _react2.default.createElement(_Widget2.default, this.props);
    }
  }], [{
    key: 'getContainer',
    value: function getContainer(_ref) {
      var id = _ref.id,
          data = _ref.data,
          props = _objectWithoutProperties(_ref, ['id', 'data']);

      return data.map(function (item, index) {
        var pathById = '' + (id === null ? '' : id + '.') + index;

        return _react2.default.createElement(
          _Wrapper2.default,
          _extends({}, props, {
            id: pathById,
            key: pathById
          }),
          _react2.default.createElement(_myDropContainer2.default, _extends({
            data: item,
            id: pathById
          }, props))
        );
      });
    }
  }]);

  return Controller;
}(_react.PureComponent);

Controller.propTypes = {
  data: _propTypes2.default.any.isRequired
};

exports.default = Controller;