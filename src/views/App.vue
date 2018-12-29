<template>
  <div>
    app
    <el-table
      :data="list"
    >
      <table-col
        v-for="column in tableConfig.columns"
        :column="column"
      >
      </table-col>
    </el-table>
  </div>
</template>

<script lang="tsx">
  import { State, Getter, Action } from 'vuex-class';
  import { Component, Vue, Prop, Watch, Model } from 'vue-property-decorator';

  import TableColumn from './TableColumn.vue';

  @Component({
    components: {
      TableColumn,
    },
  })
  export default class App extends Vue {
    private list: any[] = [
      { a: 123, b: 456, c: 789, sale_price: 99999},
    ];

    private tableConfig: any = {
      defaultSort: {},
      data: [],
      columns: [
        {
          label: '售价',
          prop: 'sale_price',
          sortable: 'custom',
          width: 130,
          _checked: true,
          _disabled: true,
          render: (h: any) => (data: any) => {
            return <div>
            </div>;
          },
        },
      ],
    };
  }
</script>

<style lang="scss">

</style>
