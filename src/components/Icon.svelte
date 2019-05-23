<script>
  export let type = ''
  export let pack = 'fa'
  export let icon
  export let size = ''
  export let customClass = ''
  export let customSize = ''

  let newCustomSize = ''

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
</script>

<span class="icon {size}">
  <i class="{pack} fa-{icon} {customClass} {newCustomSize}" />
</span>
