<template>
  <div class="demo-block">
    <div class="source" ref="source">
      <slot name="source"></slot>
    </div>
    <div class="meta" :style="{ height: show ? height : 0 }">
      <div class="description" ref="description">
        <slot></slot>
      </div>
      <div class="highlight" ref="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
    <div class="control" ref="control" @click="show = !show">&lt; &gt;</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      height: "",
    };
  },
  async created() {
    await this.$nextTick();
    this.height =
      this.$refs.description.getClientRects()[0].height +
      this.$refs.highlight.getClientRects()[0].height +
      31 +
      "px";
  },
};
</script>

<style lang="less">
.demo-block {
  border: 1px solid var(--color-border-muted);
  border-radius: 3px;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 8px 0 var(--color-border-muted),
      0 2px 4px 0 var(--color-border-muted);
  }
  .source {
    padding: 24px;
  }
  .meta {
    border-top: 1px solid var(--color-border-muted);
    transition: 0.5s;
    overflow: hidden;
    .description {
      padding: 20px;
      margin: 10px;
      border-radius: 3px;
      color: #666;
      word-break: break-word;
      background: var(--color-canvas-subtle);
    }
    .highlight {
      margin: 10px;
    }
  }
  .control {
    padding: 10px 24px;
    margin-top: -1px;
    border-top: 1px solid var(--color-border-muted);
    color: #d3dce6;
    text-align: right;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      color: #409eff;
      background: var(--color-border-muted);
    }
  }
}
</style>
