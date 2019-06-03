<script>
  export let type = ''
  export let pack = 'fas'
  export let icon
  export let size = ''
  export let customClass = ''
  export let customSize = ''
  export let isClickable = false
  export let isRight = false

  let newCustomSize = ''
  let newType = ''

  $: {
    if (customSize) newCustomSize = customSize
    else {
      switch (size) {
        case 'is-small':
          break
        case 'is-medium':
          newCustomSize = 'fa-2x'
          break
        case 'is-large':
          newCustomSize = 'fa-3x'
          break
        default:
          newCustomSize = 'fa-lg'
      }
    }
  }

  $: {
    if (!type) newType = ''
    let splitType = []
    if (typeof type === 'string') {
        splitType = type.split('-')
    } else {
      for (let key in type) {
        if (type[key]) {
          splitType = key.split('-')
          break
        }
      }
    }
    if (splitType.length <= 1) newType = ''

    newType = `has-text-${splitType[1]}`
  }
</script>

<span class="icon {size} {newType} {isRight && 'is-right'}"
  class:is-clickable={isClickable}
  on:click>
  <i class="{pack} fa-{icon} {customClass} {newCustomSize}" />
</span>
