import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        { path: '/', redirect: '/home' },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {title: 'Home'}
        }
    ]
})