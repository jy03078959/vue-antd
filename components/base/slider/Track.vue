<template>
<div :class="className" :style="wrapStyle"></div>
</template>

<script type="text/ecmascript-6">
import { cx } from '../../../utils'

export default {
  props: ['offset', 'length', 'included', 'className'],
  computed: {
    wrapStyle () {
      return {
        left: this.offset + '%',
        width: this.length + '%',
        visibility: this.included ? 'visible' : 'hidden'
      }
    }
  }
}

</script>
