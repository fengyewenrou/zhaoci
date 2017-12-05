import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home/main.vue';
import login from '../views/login/main.vue';
import register from '../views/register/main.vue';
import groom from '../views/groom/main.vue'
import real from '../views/real/main.vue'
import creation from '../views/creation/main.vue'
import secret from '../views/secret/main.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
        	redirect: { name: 'home' },
		},
		{
	        path: '/login',
	        name: 'login',
	        component: login,
	    },
	    {
	        path: '/register',
	        name: 'register',
	        component: register,
	    },
	    {
	        path: '/home',
	        name: 'home',
	        component: home,
	    },
	    {
	        path: '/groom',
	        name: 'groom',
	        component: groom,
	    },
	    {
	        path: '/real',
	        name: 'real',
	        component: real,
	    },
	    {
	        path: '/creation',
	        name: 'creation',
	        component: creation,
	    },
	    {
	        path: '/secret',
	        name: 'secret',
	        component: secret,
	    },
	]
})
