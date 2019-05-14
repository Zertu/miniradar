<template>
  <div class="block">
    <el-cascader :options="ditrict" v-model="selectedDitrict" @change="handleChange"></el-cascader>
    <DataTable :loading="loading" :data="data"></DataTable>
  </div>
</template>
<script>
import ditrict from "../util/sorteddistrict.json";
import getleitai from "../service/getleitai";
import DataTable from "../components/DataTable";
export default {
  name: "AdvancedSearch",
  components: {
    DataTable
  },
  data() {
    return {
      ditrict,
      loading: false,
      selectedDitrict: [],
      data: []
    };
  },
  methods: {
    async handleChange(value) {
      this.loading = true;
      const [_, __, coordinate] = value;
      const [longitude, latitude] = coordinate.split(",");
      const result = await getleitai(
        Number(longitude * 1000000),
        Number(latitude * 1000000)
      );
      this.data = result.data;
      this.loading = false;
    }
  }
};
</script>