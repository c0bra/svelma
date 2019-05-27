import Modal from './Modal.svelte'

Modal.open = open

export default Modal

export function open(props) {
  const modal = new Modal({
    target: document.body,
    props,
    intro: true
  });

  modal.close = () => modal.$destroy();

  return modal;
}