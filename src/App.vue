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
    padding: 20px;
    flex: 1;
    overflow: auto;
    a {
      display: block;
      font-weight: bold;
      color: #2c3e50;
      &.router-link-active {
        color: #42b983;
      }
    }
  }
  main {
    border-left: 1px solid var(--color-border-muted);
    padding: 20px;
    overflow: auto;
    flex: 6;
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
