/**
 * Created by Administrator on 2018/11/14.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "../components/Main-Page"
import Login from "../login/Login"
import SongList_SelfLike from "../first_page/SongList-SelfLike"
import Self_SingList from "../first_page/Self-SingList"
import New_Songs from "../first_page/New-Songs"
import Author_Manager from "../author_manager/Author-Manager"
import All_Songs from "../category_manager/All-Songs"
import Category_Info from "../category_manager/Category-Info"
import Ranking_List from "../ranking_list/Ranking-List"
import Add_Song from "../addsong/Add-Song"
import People_Manager from "../peoplemanager/People-Manager"


Vue.use(VueRouter)

const routes = [
    //第一层路由
    {path: '/', component:Login},
    {
        path: '/main', component:MainPage,
        children:[//子路由
            {path: '/songlist_selflike', component:SongList_SelfLike},
            { path: '/self_singlist', component:Self_SingList},
            { path: '/new_songs', component:New_Songs},
            {path: '/author', component:Author_Manager},
            {path: '/all_songs', component:All_Songs},
            {path: '/category', component:Category_Info},
            {path: '/ranking_list', component:Ranking_List},
            {path: '/add_song', component:Add_Song},
            {path: '/people_info', component:People_Manager},
        ] ,
        //redirect: '/main/songlist_selflike'
    },
    //{path: '/songlist_selflike', component:SongList_SelfLike},
    //{ path: '/self_singlist', component:Self_SingList},
    //{ path: '/new_songs', component:New_Songs},
    //{path: '/author', component:Author_Manager},
    //{path: '/all_songs', component:All_Songs},
    //{path: '/category', component:Category_Info},
    //{path: '/ranking_list', component:Ranking_List},
]

const router = new VueRouter({
    routes ,// routes: routes 的简写
    mode: 'history',
    linkActiveClass:"active"
})

export default router;
