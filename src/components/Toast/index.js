import Toast from './Toast.svelte'

Toast.create = create

export default Toast

export function create(props) {
  if (typeof props === 'string') props = { message: props }

  const toast = new Toast({
    target: document.body,
    props,
    intro: true,
  });

  toast.$on('destroyed', toast.$destroy)

  return toast;
}