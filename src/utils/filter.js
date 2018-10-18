import _ from 'lodash'
import moment from 'moment'

const FILTER = {
  '>': ({ value, item }) => item > value,
  '>=': ({ value, item }) => item >= value,
  '<': ({ value, item }) => item < value,
  '<=': ({ value, item }) => item <= value,
  '==': ({ value, item }) => item == value, // eslint-disable-line
  '!=': ({ value, item }) => item != value, // eslint-disable-line
  time: ({ value, item }) => moment(item).isBetween(value.start, value.end),
}

export function onApplyFilter(state) {
  const { initialValues, data } = state
  let BAD_LIST = []

  if (!initialValues) { return state }
  const LINKED_LIST = []
  Object.keys(initialValues).map(field => (initialValues[field] || []).forEach((el, elIndex) => {
    const NAME = el.label || `${field}.${elIndex}`
    LINKED_LIST.push(NAME)
  }))

  Object.keys(initialValues).forEach(type => {
    const isArray = initialValues && Array.isArray(initialValues[type])
    isArray && initialValues[type].forEach((item, indexItem) => {
      if (item.condition && Array.isArray(item.condition)) {
        item.condition.forEach(filter => {
          const isNotEmpty = _.get(item, `condition[${indexItem}].key`)
          if (isNotEmpty) {
            const LABEL = item.label || `${type}.${indexItem}`
            data && data.forEach((el, elIndex) => {
              if (filter && filter.key && FILTER[filter.key]) {
                const isBad = FILTER[filter.key]({ value: filter.value, item: el[LABEL] })

                if (!isBad) {
                  if (filter.linked) {
                    BAD_LIST.push(elIndex)
                  } else {
                    delete el[LABEL]
                  }
                }
              }
            })
          }
        })
      }
    })
  })

  // This need for correct delete item by slice
  // Example: array(1,2,3,4)
  // slice(0) new array(2,3,4)
  // slice(1) new array(2,4) -> don't delete '2'
  BAD_LIST = BAD_LIST.reverse()
  BAD_LIST.forEach(index => data.splice(index, 1))

  return state
}

export function onFindObject(state, limit) {
  if (state.length <= limit) { return state }

  const STEP = Math.floor(state.length / limit)
  const newState = []
  state.forEach((item, index) => {
    const LUCKY = index % STEP === 0
    if (LUCKY) { newState.push(item) }
  })

  return newState
}
