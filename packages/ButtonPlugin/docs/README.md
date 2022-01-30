# 按钮

> 哈哈哈哈哈哈

```html
<template>
  <div>
    <i-button @click="handleClick">自定义按钮</i-button>
  </div>
</template>
```

```js
console.log('hhh')
```

```css
.description {
  padding: 20px;
  border-radius: 3px;
  color: #666;
  word-break: break-word;
  margin: 10px;
  background: var(--color-canvas-subtle);
}
.highlight {
  margin: 10px;
}
```

:::demo 基础按钮

```html
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
```

:::