import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import index from './components/game/index'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.NODE_ENV === 'production' ? 'makepuzz/' : '',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {title: 'Home'}
        },
        {
            path: '/index',
            name: 'index',
            component: index,
            meta: {title: 'index'}
        }
    ]
})
