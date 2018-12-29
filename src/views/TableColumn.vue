<script lang="tsx">
  import { State, Getter, Action } from 'vuex-class';
  import { Component, Vue, Prop, Watch, Model } from 'vue-property-decorator';

  const isNotIn: any = (obj: any, v: any, key: any) => v && (obj[key] = v);

  import pluginHelper from './TablePlugin';

  @Component({
    components: {},
  })
  export default class TableColumn extends Vue {

    @Prop({
      type: Object, default: () => {
      },
    })
    private column: any;

    @Prop({ type: String, default: '' })
    private pk: string;

    private render(h: any) {
      const me = this;

      function renderChild(column: any) {
        const ps: any = { attrs: {} };
        const { header, dataIndex, width, formatter, children, type, pk, slot } = pluginHelper(column, h);
        ps.attrs.key = dataIndex || (pk + type);
        isNotIn(ps.attrs, header, 'label');
        isNotIn(ps.attrs, dataIndex, 'prop');
        isNotIn(ps.attrs, width, 'width');
        isNotIn(ps.attrs, formatter, 'formatter');

        if (slot) {
          ps.scopedSlots = { default: ({ row }: { row: any }) => slot({ row, column }) };
        }

        if (column.children) {
          ps.attrs.headerAlign = 'center';
          return <el-table-column { ...ps }>
            {
              column.children.map((child: any) => {
                return renderChild(child);
              })
            }
          </el-table-column>;
        } else {
          return <el-table-column
            { ...ps }>
          </el-table-column>;
        }
      }

      if (this.column) {
        return renderChild(this.column);
      }
    }
  }
</script>

<style lang="scss">

</style>
