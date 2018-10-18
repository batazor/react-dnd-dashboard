'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: 'Grid',
  isOnDoubleClick: true,
  new: {
    type: 'Grid',
    layout: {
      w: 4, h: 2, x: 0, y: 0
    },
    fields: {
      array: false,
      fields: []
    },
    children: []
  },
  api: [{
    name: 'title',
    type: 'String',
    defaultValue: 'New Grid',
    label: 'title'
  }, {
    name: 'lg',
    type: 'String',
    typeInput: 'Number',
    defaultValue: 3,
    label: 'column'
  }, {
    name: 'md',
    type: 'String',
    typeInput: 'Number',
    defaultValue: 2,
    label: 'column'
  }, {
    name: 'sm',
    type: 'String',
    typeInput: 'Number',
    defaultValue: 3,
    label: 'column'
  }, {
    name: 'xs',
    type: 'String',
    typeInput: 'Number',
    defaultValue: 1,
    label: 'column'
  }, {
    name: 'xxs',
    type: 'String',
    typeInput: 'Number',
    defaultValue: 1,
    label: 'column'
  }]
};