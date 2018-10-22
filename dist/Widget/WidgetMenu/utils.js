'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.recursiveGetNode = recursiveGetNode;
exports.getNode = getNode;
exports.onDnD = onDnD;
exports.objectListToArrayList = objectListToArrayList;
exports.arrayListToObjectArray = arrayListToObjectArray;

var _lodash = require('lodash');

/**
 * @function recursiveGetNode
 * @description Get node by path
 * @memberof Node utils
 */
function recursiveGetNode(data, path) {
  if (!path) {
    return data;
  }

  var index = path.shift();
  var result = Array.isArray(data) ? data[index] : data.children[index];

  return path.length === 0 ? result : recursiveGetNode(result, path);
}

/**
 * @function getNode
 * @description Get node by id
 * @memberof Node utils
 */
function getNode(node, id) {
  var dragPathById = id.split('.');
  return recursiveGetNode(node, dragPathById);
}

/** add new element to dashboard */
function onDnD(state, _ref) {
  var drag = _ref.drag,
      drop = _ref.drop;

  if (drop === null) {
    return state;
  }

  var newDrag = (0, _lodash.cloneDeep)(drag);
  var node = getNode(state, drop.id);
  node.children.push(newDrag);

  if (!Array.isArray(node.layout)) {
    node.layout = [];
  }
  node.layout.push(newDrag.layout);

  return _extends({}, state);
}

function objectListToArrayList(list) {
  return Object.keys(list).map(function (item) {
    return list[item];
  });
}

function arrayListToObjectArray(list) {
  var newList = {};
  list.forEach(function (item) {
    return newList[item.item._id] = item.item;
  });
  return newList;
}