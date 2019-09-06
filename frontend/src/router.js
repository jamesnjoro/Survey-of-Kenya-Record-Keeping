import vue from 'vue'
import Router from 'vue-router'


vue.use(Router)

export default new Router({
    routes:[  
        {
            path:'/',
            name:'login',
            component: require('@/views/login').default
        },
        {
            path: '/mr',
            name: 'mr',
            component:()=>import('./views/mr')
        },
        {
            path:'/register',
            name: 'register',
            component:()=>import('./views/register')
        },
        {
            path:'/director',
            name: 'director',
            component:()=>import('./views/director')
        },
       
       
       
        {
            path: '*',
            redirect: '/'
          }
        
    ]
})
