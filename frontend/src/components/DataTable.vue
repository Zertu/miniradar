<template>
  <el-table
    :data="data"
    style="width: 100%"
    :default-sort="{prop: 'sprite_list', order: 'ascending'}"
  >
    <el-table-column prop="winner_name" label="擂主名" sortable width="180"></el-table-column>
    <el-table-column prop="latitude" label="纬度" sortable width="180" :formatter="formatter"></el-table-column>
    <el-table-column prop="longtitude" label="经度" sortable width="180" :formatter="formatter"></el-table-column>
    <el-table-column prop="winner_fightpower" label="擂主战力" sortable width="180"></el-table-column>
    <el-table-column label="上场妖灵">
      <template slot-scope="sprite">
        <div v-for="elm of formatpet(data[sprite.$index].sprite_list)" v-bind:key="elm.fightpower">
          <img height="50px" :src="getsrc(elm.SmallImgPath)">
          <span>{{elm.Name}}等级:{{elm.level}}战斗力:{{elm.fightpower}}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="sprite_list"
      label="上场妖灵战力"
      sortable
      width="180"
      :formatter="formatsprite"
    ></el-table-column>
  </el-table>
</template>

<script>
import serach from "../util/serach";
export default {
  props: {
    data: Array
  },
  methods: {
    formatter(_, __, cellValue) {
      return cellValue / 10e5;
    },
    getsrc(src) {
      const url =
        localStorage.getItem("peturl") || "http://hy.gwgo.qq.com/sync/pet/";
      return url + src;
    },
    formatsprite(_, __, cellValue) {
      return cellValue
        .map(_ => _.fightpower)
        .reduce((sum, current) => {
          return sum + current;
        });
    },
    formatpet(cellValue) {
      return cellValue.map(val => {
        return {
          ...val,
          ...serach(val.spriteid)
        };
      });
    }
  }
};
</script>