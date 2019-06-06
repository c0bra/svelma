import Snackbar from './Snackbar.svelte'

Snackbar.create = create

export default Snackbar

export function create(props) {
  if (typeof props === 'string') props = { message: props }

  const snackbar = new Snackbar({
    target: document.body,
    props,
    intro: true,
  });

  snackbar.$on('destroyed', snackbar.$destroy)

  return snackbar;
}