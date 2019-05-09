<template>
  <div class="hello">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="纬度">
        <el-input-number
          v-model="form.latitude"
          :precision="6"
          maxlength="9"
          :step="0.01"
          placeholder="纬度/latitude"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="经度">
        <el-input-number
          v-model="form.longitude"
          :precision="6"
          :step="0.01"
          maxlength="9"
          placeholder="经度/longitude"
        ></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <DataTable :data="data"></DataTable>
  </div>
</template>

<script>
import axios from "axios";
import DataTable from "../components/DataTable";
export default {
  name: "Home",
  components: {
    DataTable
  },
  data() {
    return {
      form: {
        longitude: 118.796471,
        latitude: 32.057381,
      },
      data: []
    };
  },
  methods: {
    async onSubmit() {
      const result = await axios.get("/api/leitai", {
        params: {
          longitude: Number(this.form.longitude * 1000000),
          latitude: Number(this.form.latitude * 1000000)
        }
      });
      this.data = result.data;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
