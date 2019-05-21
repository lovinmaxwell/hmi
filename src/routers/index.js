import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Employee = () => import('@/views/employee/Employee')

const Charts = () => import('@/views/Charts')

// Views - Components
const Companys = () => import('@/views/company/Companys')
const CompanyRegister = () => import('@/views/company/Register')

// Views - Buttons
const Projects = () => import('@/views/project/Projects')
const CreateProject = () => import('@/views/project/CreateProject')



// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
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
          path: 'employee',
          redirect: '/employee/Employee',
          name: 'Employee',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'Employee',
              name: 'Employee',
              component: Employee
            },
            {
              path: 'Employee',
              name: 'Employee',
              component: Employee
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
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
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
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
