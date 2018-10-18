'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onApplyFilter = onApplyFilter;
exports.onFindObject = onFindObject;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FILTER = {
  '>': function _(_ref) {
    var value = _ref.value,
        item = _ref.item;
    return item > value;
  },
  '>=': function _(_ref2) {
    var value = _ref2.value,
        item = _ref2.item;
    return item >= value;
  },
  '<': function _(_ref3) {
    var value = _ref3.value,
        item = _ref3.item;
    return item < value;
  },
  '<=': function _(_ref4) {
    var value = _ref4.value,
        item = _ref4.item;
    return item <= value;
  },
  '==': function _(_ref5) {
    var value = _ref5.value,
        item = _ref5.item;
    return item == value;
  }, // eslint-disable-line
  '!=': function _(_ref6) {
    var value = _ref6.value,
        item = _ref6.item;
    return item != value;
  }, // eslint-disable-line
  time: function time(_ref7) {
    var value = _ref7.value,
        item = _ref7.item;
    return (0, _moment2.default)(item).isBetween(value.start, value.end);
  }
};

function onApplyFilter(state) {
  var initialValues = state.initialValues,
      data = state.data;

  var BAD_LIST = [];

  if (!initialValues) {
    return state;
  }
  var LINKED_LIST = [];
  Object.keys(initialValues).map(function (field) {
    return (initialValues[field] || []).forEach(function (el, elIndex) {
      var NAME = el.label || field + '.' + elIndex;
      LINKED_LIST.push(NAME);
    });
  });

  Object.keys(initialValues).forEach(function (type) {
    var isArray = initialValues && Array.isArray(initialValues[type]);
    isArray && initialValues[type].forEach(function (item, indexItem) {
      if (item.condition && Array.isArray(item.condition)) {
        item.condition.forEach(function (filter) {
          var isNotEmpty = _lodash2.default.get(item, 'condition[' + indexItem + '].key');
          if (isNotEmpty) {
            var LABEL = item.label || type + '.' + indexItem;
            data && data.forEach(function (el, elIndex) {
              if (filter && filter.key && FILTER[filter.key]) {
                var isBad = FILTER[filter.key]({ value: filter.value, item: el[LABEL] });

                if (!isBad) {
                  if (filter.linked) {
                    BAD_LIST.push(elIndex);
                  } else {
                    delete el[LABEL];
                  }
                }
              }
            });
          }
        });
      }
    });
  });

  // This need for correct delete item by slice
  // Example: array(1,2,3,4)
  // slice(0) new array(2,3,4)
  // slice(1) new array(2,4) -> don't delete '2'
  BAD_LIST = BAD_LIST.reverse();
  BAD_LIST.forEach(function (index) {
    return data.splice(index, 1);
  });

  return state;
}

function onFindObject(state, limit) {
  if (state.length <= limit) {
    return state;
  }

  var STEP = Math.floor(state.length / limit);
  var newState = [];
  state.forEach(function (item, index) {
    var LUCKY = index % STEP === 0;
    if (LUCKY) {
      newState.push(item);
    }
  });

  return newState;
}