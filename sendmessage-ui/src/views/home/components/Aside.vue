<template>

  <el-menu background-color="#ffffff" style="height: 100%" :collapse="isCollapse" :collapse-transition="false" router>
    <div id="title">
      <img src="../../../assets/logo/asideLogo.jpg" style="height: 30px;position: relative;vertical-align: middle; " />
      <b v-show="isTitleShow">消息推送平台</b>
    </div>
    <el-menu-item index="/home">
      <i class="iconfont icon-layout-fill"></i>
      <span slot="title">主页</span>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="iconfont icon-appstore"></i>
        <span slot="title">系统管理</span>
      </template>
      
        <el-menu-item index="/user">
          <i class="iconfont icon-user"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
      
    </el-submenu>




  </el-menu>
</template>

<script>
export default {
  name: 'Aside',
  props: {
    isCollapse: Boolean,
    isTitleShow: Boolean
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
#title {
  line-height: 59px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  background-color: rgb(238, 241, 246);
}

.icon-layout-fill:before {
  content: "\E8CB";
  font-size: 22px;
}

.icon-user:before {
  content: "\E7CE";
  font-size: 22px;
}

.icon-appstore:before {
  content: "\E7AA";
  font-size: 22px;
}

.el-menu-item {
  font-size: 14px;
}

.el-submenu__title {
  font-size: 14px;
}

</style>