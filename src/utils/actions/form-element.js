export default function formElement(node, options = {}) {
  function blur() {}

  node.addEventListener('focus', blur)
  node.addEventListener('focus', focus)

  return {
    update(options) {},

    destroy() {
      node.removeEventListener('focus ', focus)
      node.removeEventListener('blur', blur)
    },
  }
}
