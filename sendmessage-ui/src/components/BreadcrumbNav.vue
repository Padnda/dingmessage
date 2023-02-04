<template>
    <el-breadcrumb>
      <el-breadcrumb-item
        v-for="(item, index) in breadList"
        :key="index"
        :to="{ path: getPath(item.path) }"
      >
        {{ digestParams(item.meta.title, $route.params) }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </template>
  
  <script>
  export default {
    name: "BreadcrumbNav",
    data: function () {
      return {
        breadList: [],
      };
    },
    mounted: function () {
      this.getBreadList(this.$route);
    },
    watch: {
      $route(val) {
        this.getBreadList(val);
      },
    },
    methods: {
      getBreadList(val) {
        if (val.matched) {
          let matched = val.matched.filter(
            (item) => item.meta && item.meta.title
          );
          this.breadList = matched;
        }
      },
      getPath(path) {
        if (path === "") {
          return "/";
        }
        return this.digestParams(path, this.$route.params);
      },
      digestParams(breadcrumbName, params) {
        if (!breadcrumbName) {
          return null;
        }
        var paramsKeys = Object.keys(params).join("|");
        return breadcrumbName.replace(
          new RegExp(":(".concat(paramsKeys, ")"), "g"),
          function (replacement, key) {
            return params[key] || replacement;
          }
        );
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>