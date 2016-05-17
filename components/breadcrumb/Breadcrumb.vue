<template>
<div :class="prefixCls">
  <slot></slot>
</div>
</template>

<script type="text/ecmascript-6">
import { defaultProps } from '../../utils'

export default {
  props: defaultProps({
    prefixCls: 'ant-breadcrumb'
  })
}

</script>
