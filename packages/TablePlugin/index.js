import iTable from './src';

export const TablePlugin = {
  install(Vue) {
    Vue.component(iTable.name, iTable);
  },
};

export { iTable }


