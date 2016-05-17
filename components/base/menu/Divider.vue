<template>
<li :class="className + ' ' + rootPrefixCls + '-item-divider'"></li>
</template>

<script type="text/ecmascript-6">
import { defaultProps } from '../../../utils'

export default {
  props: defaultProps({
    rootPrefixCls: '',
    className: '',
    disabled: true
  })
}

</script>
