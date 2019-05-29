import Dialog from './Dialog.svelte'

Dialog.alert = alert

export default Dialog

export function alert(props) {
  if (typeof props === 'string') props = { message: props }

  const dialog = new Dialog({
    target: document.body,
    props,
    intro: true,
  });

  dialog.close = () => dialog.$destroy();

  return dialog;
}