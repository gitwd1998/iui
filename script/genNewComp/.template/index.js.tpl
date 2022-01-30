import {{ compName }} from './src';

export const {{ compName }}Plugin = {
  install(Vue) {
    Vue.component({{ compName }}.name, {{ compName }});
  },
};

export { {{ compName }} }
