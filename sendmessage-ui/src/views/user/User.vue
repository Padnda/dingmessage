<template>
    <div>
        <el-input id="suername" v-model="username" prefix-icon="iconfont icon-user" placeholder="请输入用户名"
            clearable></el-input>
        <el-input id="phone" v-model="phone" prefix-icon="iconfont icon-mobile" placeholder="请输入手机号"
            clearable></el-input>
        <el-button type="primary" icon="iconfont icon-search" click="">搜索</el-button>
        <el-button type="success" icon="iconfont icon-reload" click="">重置</el-button>

        <el-table :data="userList"  border style="width: 100%; height: auto; margin-top: 15px;">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
export default {
    name: 'User',
    data() {
        return {
            username: "",
            phone: "",
            userList: [
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                {
                    "date": "2023-02-04",
                    "name": "詹诚",
                    "address": "湖北武汉"
                },
                
            ]
        }
    }
}
</script>

<style scoped>
.el-input {
    width: 200px;
}

.el-button {
    padding: 10px;
}
</style>