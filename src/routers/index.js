import Vue from 'vue'
import Router from 'vue-router'

const DefaultContainer = () => import('@/containers/DefaultContainer')
const Dashboard = () => import('@/views/Dashboard')

const Requirements = () => import('@/views/project/Requirements')
const CreateProject = () => import('@/views/project/AddRequirements')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')
const Userstories = () => import('@/views/project/Userstories')
const Charts = () => import('@/views/project/Charts')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'users',
          meta: { label: 'Employees'},
          component: {
            render (c) { 
              return c('router-view') 
            }
          },
          children: [
            {
              path: '',
              component: Users,
            },
            {
              path: ':id',
              meta: { label: 'Employee Details'},
              name: 'Employee',
              component: User,
            },
          ]
        },
             
        {
          path: 'project',
          redirect: '/project/Requirements',
          name: 'Project',
          component: {
            render (c) { 
              return c('router-view') 
            }
          },
          children: [
            {
              path: 'Requirements',
              name: 'Requirements',
              component: Requirements
            },
            {
              path: 'UserStories',
              name: 'UserStories',
              component: Userstories
            },
            {
              path: 'AddRequirements',
              name: 'Add Requirements',
              component: CreateProject
            },
            {
              path: 'charts',
              name: 'charts',
              component: Charts
            },
          ]
        }
      ]
    }, 
      
    {
      path: '/pages',
      redirect: '/pages/login',
      name: 'Pages',
      component: {
        render (c) { 
          return c('router-view') 
        }
      },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})

