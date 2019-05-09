<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort="{prop: 'winner_fightpower', order: 'descending'}"
  >
    <el-table-column prop="winner_fightpower" label="擂主名" sortable width="180"></el-table-column>
    <el-table-column prop="latitude" label="经度" sortable width="180"></el-table-column>
    <el-table-column prop="longtitude" label="纬度" sortable width="180"></el-table-column>
    <el-table-column prop="winner_fightpower" label="战力" sortable width="180" :formatter="formatter"></el-table-column>
    <el-table-column prop="sprite_list" label="出场"></el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    data: Array
  },
  data() {
    return {
      tableData: this.data || tableData
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    }
  }
};
</script>