<template lang="md">
# Timeline

- category: Components
- chinese: 时间轴
- type: 展示

---

垂直展示的时间流信息。

## 何时使用

- 当有一系列信息需要从上至下按时间排列时；
- 需要有一条时间轴进行视觉上的串联时；

## 组件演示

<demo>
  <example title="基本用法">
    <v-timeline>
      <v-timeline-item>创建服务现场 2015-09-01</v-timeline-item>
      <v-timeline-item>初步排除网络异常 2015-09-01</v-timeline-item>
      <v-timeline-item>技术测试异常 2015-09-01</v-timeline-item>
      <v-timeline-item>网络异常正在修复 2015-09-01</v-timeline-item>
    </v-timeline>
  </example>
  <example title="圆圈颜色">
    <v-timeline>
      <v-timeline-item color="green">创建服务现场 2015-09-01</v-timeline-item>
      <v-timeline-item color="green">初步排除网络异常 2015-09-01</v-timeline-item>
      <v-timeline-item color="red">
        <p>初步排除网络异常1</p>
        <p>初步排除网络异常2</p>
        <p>初步排除网络异常3 2015-09-01</p>
      </v-timeline-item>
      <v-timeline-item>
        <p>技术测试异常1</p>
        <p>技术测试异常2</p>
        <p>技术测试异常3 2015-09-01</p>
      </v-timeline-item>
    </v-timeline>
  </example>
  <example title="最后一个">
    <v-timeline :pending="true">
      <v-timeline-item>创建服务现场 2015-09-01</v-timeline-item>
      <v-timeline-item>初步排除网络异常 2015-09-01</v-timeline-item>
      <v-timeline-item>技术测试异常 2015-09-01</v-timeline-item>
    </v-timeline>
  </example>
</demo>

## API

```
<v-timeline>
  <v-timeline-item>创建服务现场 2015-09-01</v-timeline-item>
  <v-timeline-item>初步排除网络异常 2015-09-01</v-timeline-item>
  <v-timeline-item>技术测试异常 2015-09-01</v-timeline-item>
  <v-timeline-item>网络异常正在修复 2015-09-01</v-timeline-item>
</v-timeline>
```

### Timeline

时间轴。

| 参数      | 说明                                     | 类型       |  可选值 |默认值 |
|-----------|------------------------------------------|------------|-------|--------|
|  pending  | 指定最后一个幽灵节点。 | boolean | 无 | false  |

### Timeline.Item

时间轴的每一个节点。

| 参数      | 说明                                     | 类型       |  可选值 |默认值 |
|-----------|------------------------------------------|------------|-------|--------|
|  color   | 指定圆圈颜色。 | string | blue, red, green | blue     |
</template>

<script type="text/ecmascript-6">
import vTimeline, { vTimelineItem } from '../../components/timeline'

export default {

  components: { vTimeline, vTimelineItem }

}

</script>
