<template>
  <div id="app">
    <aside>
      <router-link
        v-for="component in components"
        :key="component.compName"
        :to="`/components/${component.compClassName}`"
        >{{ component.compZhName }}
      </router-link>
    </aside>
    <main class="markdown-body">
      <keep-alive>
        <router-view></router-view>
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
  min-width: 960px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  aside {
    flex: 1;
    overflow: auto;
    a {
      padding: 8px 20px;
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
        background: #2c3e50;
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
    border-left: 1px solid var(--color-border-muted);
    padding: 20px;
    overflow: auto;
    flex: 5;
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
