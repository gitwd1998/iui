<template>
  <div id="app" class="markdown-body">
    <aside>
      <router-link
        v-for="component in components"
        :key="component.compName"
        :to="`/components/${component.compClassName}`"
        style="padding: 8px 20px"
        >{{ component.compZhName }}
      </router-link>
    </aside>
    <main>
      <keep-alive>
        <router-view style="padding: 20px"></router-view>
      </keep-alive>
    </main>
  </div>
</template>

<script>
import components from "../packages/components.json";
export default {
  data() {
    return {
      components,
    };
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  aside {
    position: fixed;
    height: 100%;
    width: 200px;
    overflow: auto;
    a {
      display: block;
      position: relative;
      font-weight: bold;
      color: #2c3e50;
      + a::before {
        content: "";
        position: absolute;
        top: 0;
        left: 20px;
        right: 0;
        height: 1px;
        transform-origin: 0 0;
        transform: scaleY(0.5);
        background: var(--color-border-muted);
      }
      &:first-of-type {
        margin-top: 12px;
      }
      &:last-of-type {
        margin-bottom: 12px;
      }
      &.router-link-active {
        color: #42b983;
      }
    }
  }
  main {
    min-height: 100%;
    margin-left: 200px;
    border-left: 1px solid var(--color-border-muted);
  }
}
</style>
<style>
.markdown-body .header-anchor {
  display: none;
}
.markdown-body h1:hover .header-anchor,
.markdown-body h2:hover .header-anchor,
.markdown-body h3:hover .header-anchor,
.markdown-body h4:hover .header-anchor,
.markdown-body h5:hover .header-anchor,
.markdown-body h6:hover .header-anchor {
  display: inline-block;
}
</style>
