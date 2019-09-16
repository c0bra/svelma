// Thanks @antony for this code! https://svelte.dev/repl/54d159b954d9412c8247807125d9fe1b?version=3.12.1

import { writable } from 'svelte/store'

export default function (...validators) {
  const { subscribe, set } = writable({ dirty: false, valid: false, message: null })

  function action (node) {
    function validate (dirty = true) {
      if (!validators || validators.length === 0) {
        set({ dirty, valid: true })
        return
      }

      const failing = validators.find(v => v(node.value) !== true)

      set({
        dirty,
        valid: !failing,
        message: failing && failing(node.value)
      })
    }

    node.addEventListener('input', validate)

    validate(false)

    return {
      destroy: () => {
        node.removeEventListener('input', validate)
      }
    }
  }

  return [ { subscribe }, action ]
}

export function validity() {
  function action(node) {

  }

  function checkHtml5Validity(el) {
    // Get element
    if (!el.checkValidity()) {
      setInvalid()
    }
  }

  return [
    {
      checkHtml5Validity,
    },

    action
  ]
}