'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookState = require('@dump247/storybook-state');

var _reactDndSimple = require('react-dnd-simple');

var _Toolbar = require('@material-ui/core/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _AppBar = require('@material-ui/core/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Add = require('@material-ui/icons/Add');

var _Add2 = _interopRequireDefault(_Add);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { StateDecorator, Store } from "@sambego/storybook-state"
var schema = [{
  type: 'Grid',
  children: []
}];

(0, _react3.storiesOf)('DashBoard', module).add('Simple', (0, _storybookState.withState)({ schema: schema, isOpenWidgetMenu: false })(function (_ref) {
  var store = _ref.store;
  return _react2.default.createElement(
    _reactDndSimple.Context,
    null,
    _react2.default.createElement(
      'div',
      { style: { height: '70vh' } },
      _react2.default.createElement(
        _AppBar2.default,
        { position: 'static' },
        _react2.default.createElement(
          _Toolbar2.default,
          null,
          _react2.default.createElement(
            _Button2.default,
            { color: 'inherit', onClick: function onClick() {
                return store.set({ isOpenWidgetMenu: !store.state.isOpenWidgetMenu });
              } },
            _react2.default.createElement(_Add2.default, null)
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'h6', color: 'inherit' },
              'Dashboard'
            ),
            _react2.default.createElement(
              _Typography2.default,
              { color: 'inherit' },
              'description'
            )
          )
        )
      ),
      _react2.default.createElement(_index.Controller, {
        id: null,
        data: store.state.schema

        // onCloseDialogs={pathToWidget => this.setState({ nodeId: pathToWidget })}
        // onMoveDnD={this.onMoveDnD}
        // onDeleteWidget={this.onDeleteWidget}
        , onResizeWidget: function onResizeWidget(event) {
          return console.warn('onResizeWidget', event);
        }
      }),
      _react2.default.createElement(_index.WidgetMenu, {
        isOpenWidgetMenu: store.state.isOpenWidgetMenu,
        data: store.state.schema,
        onDnDAction: function onDnDAction(event) {
          return store.set({ schema: event });
        },
        onClose: function onClose() {
          return store.set({ isOpenWidgetMenu: false });
        }
      })
    )
  );
}));