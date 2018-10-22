import { cloneDeep } from 'lodash'

/**
 * @function recursiveGetNode
 * @description Get node by path
 * @memberof Node utils
 */
export function recursiveGetNode(data, path) {
  if (!path) { return data }

  const index = path.shift()
  const result = Array.isArray(data) ? data[index] : data.children[index]

  return path.length === 0 ? result : recursiveGetNode(result, path)
}

/**
 * @function getNode
 * @description Get node by id
 * @memberof Node utils
 */
export function getNode(node, id) {
  const dragPathById = id.split('.')
  return recursiveGetNode(node, dragPathById)
}

/** add new element to dashboard */
export function onDnD(state, { drag, drop }) {
  if (drop === null) {
    return state
  }

  const newDrag = cloneDeep(drag)
  const node = getNode(state, drop.id)
  node.children.push(newDrag)

  if (!Array.isArray(node.layout)) { node.layout = [] }
  node.layout.push(newDrag.layout)

  return { ...state }
}
