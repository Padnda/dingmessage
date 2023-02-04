<template>
    <div style=" line-height: 60px;display: flex">
        <div style="flex: 1;font-size: 25px;">
            <span :class="collapseBtnClass" @click="collapse" style="cursor: pointer;"></span>
            <breadcrumb-nav style="display:inline-block; font-size: 16px; padding-left: 10px;"/>
        </div>
        <el-dropdown>
            <div style="display: inline-block">
                <el-avatar class="md_headpic">
                    <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                </el-avatar>
                <span>{{ name }}</span>
                <i class="el-icon-caret-bottom" style="margin-right: 15px"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>退出登陆</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
import BreadcrumbNav from '../../../components/BreadcrumbNav.vue';

export default {
    components: { BreadcrumbNav },
    name: 'Header',
    comments: {
        BreadcrumbNav
    },
    props: {
        collapseBtnClass: String,
        collapse: Function
    },
    data() {
        return {
            name: localStorage.getItem("username")
        }
    },
    methods: {
        toPersonal() { },
        logout() { }
    }

}
</script>

<style scoped>
.md_headpic {
    border: none;
    vertical-align: middle;
    margin-left: 10px;
}

.icon-outdent:before {
    content: "\E870";
    font-size: 25px;
}

.icon-indent:before {
    content: "\E86F";
    font-size: 25px;
}
</style>