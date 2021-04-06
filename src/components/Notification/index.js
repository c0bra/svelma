import Notification from './Notification.svelte'
import NotificationNotice from './NotificationNotice.svelte'

Notification.create = create

export default Notification

export function create(props) {
  if (typeof props === 'string') props = { message: props }

  const notification = new NotificationNotice({
    target: document.body,
    props,
    intro: true,
  })

  notification.$on('destroyed', notification.$destroy)

  return notification
}
