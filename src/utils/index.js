import * as transitions from 'svelte/transition'
import { bubble, listen } from "svelte/internal";

/**
 * Chooses an animation function based on the input
 * @param {string|Function} animation - Animation name or function
 * @returns {Function} The animation function
 */
export function chooseAnimation(animation) {
  return typeof animation === 'function' ? animation : transitions[/** @type {keyof typeof transitions} */(animation)]
}

/**
 * Checks if the keyboard event is an Enter key press
 * @param {KeyboardEvent} e - Keyboard event
 * @returns {boolean} True if Enter key was pressed
 */
export function isEnterKey(e) {
  return e.key === 'Enter' || e.keyCode === 13
}

/**
 * Checks if the keyboard event is a Delete key press
 * @param {KeyboardEvent} e - Keyboard event
 * @returns {boolean} True if Delete key was pressed
 */
export function isDeleteKey(e) {
  return e.key === 'Delete' || e.keyCode === 46
}

/**
 * Checks if the keyboard event is an Escape key press
 * @param {KeyboardEvent} e - Keyboard event
 * @returns {boolean} True if Escape key was pressed
 */
export function isEscKey(e) {
  return e.key === 'Escape' || e.keyCode === 27
}

/**
 * Creates a new object with specified keys omitted
 * @param {Record<string, any>} obj - Source object
 * @param {...string} keysToOmit - Keys to omit from the result
 * @returns {Record<string, any>} New object with specified keys omitted
 */
export function omit(obj, ...keysToOmit) {
  return Object.keys(obj).reduce((acc, key) => {
    if (keysToOmit.indexOf(key) === -1) acc[key] = obj[key]
    return acc
  }, {})
}

/**
 * Maps a Bulma type to its corresponding icon name
 * @param {string} type - Bulma type class (e.g., 'is-info', 'is-success')
 * @returns {string|null} Icon name or null if type not found
 */
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

/**
 * Creates a Svelte action that forwards events from a DOM node to a component
 * @param {import('svelte').SvelteComponent} component - The Svelte component to forward events to
 * @returns {(node: HTMLElement) => { destroy: () => void }} The action function
 */
export function getEventsAction(component) {
  return (/** @type {HTMLElement} */ node) => {
    const events = Object.keys(component.$$.callbacks);
    /** @type {Array<() => void>} */
    const listeners = [];
    events.forEach(event =>
      listeners.push(listen(node, event, (/** @type {Event} */ e) => bubble(component, e)))
    );
    return {
      destroy: () => {
        listeners.forEach(listener => listener());
      }
    };
  };
}
