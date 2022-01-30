<template>
  <div>
    <i-table :datas="table.datas" :columns="table.columns" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      table: {
        columns: [
          {
            prop: "name",
            lable: "姓名",
            width: "20%",
            style: {
              "text-align": "left",
            },
          },
          {
            prop: "sex",
            lable: "性别",
            width: "50px",
            style: {
              "text-align": "center",
            },
          },
          {
            prop: "age",
            lable: "年龄",
            width: "10%",
            style: {
              "text-align": "right",
            },
          },
          {
            prop: "work",
            lable: "工作",
            style: {
              "text-align": "left",
            },
          },
        ],
        datas: [
          { name: "张三", age: 18, sex: "男", work: "哈哈哈哈哈哈哈哈哈哈" },
          { name: "里斯", age: 19, sex: "男", work: "哈哈哈哈哈哈哈哈哈哈" },
          { name: "王武", age: 20, sex: "男", work: "哈哈哈哈哈哈哈哈哈哈" },
          { name: "小吕", age: 18, sex: "女", work: "哈哈哈哈哈哈哈哈哈哈" },
        ],
      },
    };
  },
};
</script>