<template>
    <div>
        <el-container style="height: 100vh; border: 1px solid #ccc">
            <el-aside :width="sidewidth + 'px' " style="background-color: #ffffff">
                <Aside :is-collapse="isCollapse" :is-title-show="isTitleShow"/>
            </el-aside>
            <el-container>
                <el-header
                    style="border-bottom: 1px solid #ccc; height: 60px; font-size: 18px; background-color: rgb(238, 241, 246);">
                    <Header :collapse-btn-class="collapseBtnClass" :collapse="collapse"/>
                </el-header>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>

</template>

<script>
import Aside from './components/Aside.vue';
import Header from './components/Header.vue';

export default {
    components: { Aside, Header },
    name: 'Home',
    data() {
        return {
            isCollapse: false,
            isTitleShow: true,
            sidewidth: 201,
            collapseBtnClass: "iconfont icon-outdent"
        }
    },
    methods: {
        collapse() {
            this.isCollapse = !this.isCollapse;
            if (this.sidewidth === 201) {
                this.sidewidth = 65;
                this.collapseBtnClass = 'iconfont icon-indent';
                this.isTitleShow = !this.isTitleShow;
            } else {
                this.sidewidth = 201;
                this.collapseBtnClass = 'iconfont icon-outdent';
                this.isTitleShow = !this.isTitleShow;
            }
        }
    }
    
}
</script>

<style scoped>
</style>