import { ButtonPlugin } from './ButtonPlugin';
import { TablePlugin } from './TablePlugin';

const iui = {
  install(Vue) {
    ButtonPlugin.install?.(Vue);
    TablePlugin.install?.(Vue);
  },
};

export default iui;

export * from './ButtonPlugin';
export * from './TablePlugin';