<template>
  <section>
    <accordion title="常见问题" :list="list" @on-change="handleChange"></accordion>
    <accordion title="常见问题" :list="list" :single="true" @on-change="handleChange"></accordion>
    <accordion title="常见问题" :list="list" :default-opened="[0]" @on-change="handleChange"></accordion>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: '客服电话是多少？', content: '客服热线：400-0881188  服务时间：工作日09:30-12:00 ;13:30-18:00' },
        { title: '申请的条件是什么？', content: '年龄在18-60周岁的在职员工' },
        { title: '申请借款需要哪些材料？', content: '只需要储蓄卡和身份证' }
      ]
    }
  },
  methods: {
    handleChange(values) {
      console.log(values)
    }
  }
}
</script>
