/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */

{{ importPlugins }}

const iui = {
  install(Vue) {
    {{ installPlugins }}
  },
};

export default iui;

{{ exportPlugins }}