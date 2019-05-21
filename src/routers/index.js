import Vue from 'vue'
import Router from 'vue-router'

const DefaultContainer = () => import('@/containers/DefaultContainer')

const Dashboard = () => import('@/views/Dashboard')

const Companys = () => import('@/views/company/Companys')
const CompanyRegister = () => import('@/views/company/Register')

const Projects = () => import('@/views/project/Projects')
const CreateProject = () => import('@/views/project/CreateProject')

const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

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
            render (c) { return c('router-view') }
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
          path: 'company',
          redirect: '/company/cards',
          name: 'Company',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'Companys',
              name: "Company's",
              component: Companys
            },
            {
              path: 'Register',
              name: 'Register',
              component: CompanyRegister
            }
          ]
        },
        {
          path: 'project',
          redirect: '/project/Projects',
          name: 'Project',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'Projects',
              name: 'All Projects',
              component: Projects
            },
            {
              path: 'CreateProject',
              name: 'Create Project',
              component: CreateProject
            }
          ]
        }
      ]
    }, 
    {
      path: '/pages',
      redirect: '/pages/login',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
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
