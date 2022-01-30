<template>
  <div>
    <i-button @click="handleClick">自定义按钮</i-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    handleClick() {
      alert(this.num++);
    },
  },
};
</script>