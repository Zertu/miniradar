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
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      form: {
        longitude: "",
        latitude: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
