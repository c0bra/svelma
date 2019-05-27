import * as transitions from 'svelte/transition'

export function chooseAnimation(animation) {
  return typeof animation === 'function' ? animation : transitions[animation]
}

export function isEscKey(e) {
  return e.keyCode && e.keyCode === 27;
}