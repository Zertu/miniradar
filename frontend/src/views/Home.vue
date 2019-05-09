<template>
  <div class="hello">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="纬度">
        <el-input v-model="form.latitude" maxlength="9" placeholder="纬度/latitude"></el-input>
      </el-form-item>
      <el-form-item label="经度">
        <el-input v-model="form.longitude" value="123" maxlength="9" placeholder="经度/longitude"></el-input>
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
        longitude: "",
        latitude: ""
      },
      data: []
    };
  },
  methods: {
    async onSubmit() {
      const result = await axios.get("/api/leitai", {
        params: {
          ...this.form
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
