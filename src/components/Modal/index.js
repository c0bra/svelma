import Modal from './Modal.svelte'
import ModalCard from './ModalCard.svelte'

Modal.open = open
ModalCard.open = open

export default Modal
export { ModalCard }

export function open(props) {
  const modal = new Modal({
    target: document.body,
    props,
    intro: true
  });

  modal.close = () => modal.$destroy();

  return modal;
}