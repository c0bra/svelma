import * as transitions from 'svelte/transition'

export function chooseAnimation(animation) {
  return typeof animation === 'function' ? animation : transitions[animation]
}

export function isEnterKey(e) {
  return e.keyCode && e.keyCode === 13
}

export function isEscKey(e) {
  return e.keyCode && e.keyCode === 27
}

export function omit(obj, ...keysToOmit) {
  return Object.keys(obj).reduce((acc, key) => {
    if (keysToOmit.indexOf(key) === -1) acc[key] = obj[key]
    return acc
  }, {})
}

export function typeToIcon(type) {
  switch (type) {
    case 'is-info':
      return 'info-circle'
    case 'is-success':
      return 'check-circle'
    case 'is-warning':
      return 'exclamation-triangle'
    case 'is-danger':
      return 'exclamation-circle'
    default:
      return null
  }
}
