import iButton from './src';

export const ButtonPlugin = {
  install(Vue) {
    Vue.component(iButton.name, iButton);
  },
};

export { iButton }


