'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookState = require('@dump247/storybook-state');

var _reactDndSimple = require('react-dnd-simple');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = [{
  type: 'Grid',
  children: []
}];
// import { StateDecorator, Store } from "@sambego/storybook-state"


(0, _react3.storiesOf)('DashBoard', module).add('Simple', (0, _storybookState.withState)({ schema: schema })(function (_ref) {
  var store = _ref.store;
  return _react2.default.createElement(
    _reactDndSimple.Context,
    null,
    _react2.default.createElement(
      'div',
      { style: { height: '50vh' } },
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
        isOpenWidgetMenu: true,
        data: store.state.schema,
        onDnDAction: function onDnDAction(event) {
          console.warn('new state', event);
          store.set({ schema: event });
        },
        onClose: function onClose() {}
      })
    )
  );
}));