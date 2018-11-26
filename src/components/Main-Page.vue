<template>
    <div class="main-page">

        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="songlist_selflike"><img class="logo" src="../../static/images/login_bg.jpg" alt=""/></el-menu-item>
            <el-menu-item index="songlist_selflike"><h3 class="logo-info">金牌作词人后台管理系统</h3></el-menu-item>
            <el-menu-item index="add_song">新增歌曲</el-menu-item>
            <el-menu-item index="people_info">人员信息管理</el-menu-item>
            <!--<el-submenu index="3">-->
            <!--<template slot="title">我的工作台</template>-->
            <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
            <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
            <!--<el-submenu index="2-4">-->
            <!--<template slot="title">选项4</template>-->
            <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
            <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
            <!--</el-submenu>-->
            <!--</el-submenu>-->
            <!--<el-menu-item index="4" disabled>消息中心</el-menu-item>-->
            <el-menu-item index="/"  style="float: right"><a href="javascript:void(0)" target="_blank">退出</a></el-menu-item>
        </el-menu>
        <el-row class="tac">
            <el-col :span="3">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>首页管理</span>
                        </template>
                        <el-menu-item index="songlist_selflike">歌单推荐</el-menu-item>
                        <el-menu-item index="new_songs">最新歌单</el-menu-item>
                        <el-menu-item index="self_singlist">清唱榜单</el-menu-item>
                        <!--<el-submenu index="1-4">-->
                        <!--<template slot="title">选项4</template>-->
                        <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
                        <!--</el-submenu>-->
                    </el-submenu>
                    <el-menu-item index="ranking_list">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>排行榜管理</span>
                        </template>

                    </el-menu-item>
                    <el-menu-item index="author">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>作曲人管理</span>
                        </template>
                    </el-menu-item>
                    <el-submenu  index="4">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>曲目种类管理</span>
                        </template>
                        <el-menu-item index="category">分类管理</el-menu-item>
                        <el-menu-item index="all_songs">全部歌单管理</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="21">
                <router-view></router-view>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: 'Main-Page',
        data:function() {
            return {
                msg: 'Welcome to Your Vue.js App',
                activeIndex: '1',
                activeIndex2: '1'
            }
        },
        methods: {
            handleOpen:function(key, keyPath) {
                console.log(keyPath)
//                this.$router.push({path: '/'+keyPath[1]});
            },
            handleClose:function(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect:function(key, keyPath) {

                if(keyPath[0]==1||keyPath[0]==4){
                    this.$router.push({path: '/'+keyPath[1]});
                }else{
                    this.$router.push({path: '/'+keyPath[0]});
                }

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .logo{
        width: 50px;
        height: 30px;
    }
    .logo-info{
        display: inline-block;
        height: 60px;
        line-height: 60px;
    }
</style>
