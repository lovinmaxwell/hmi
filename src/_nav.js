export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary'
      }
    },
    {
      name: 'Employee',
      url: '/theme',
      icon: 'icon-people',
      children: [
        {
          name: 'Employee',
          url: '/theme/colors',
          icon: 'icon-people'
        },
        {
          name: 'New Employee',
          url: '/theme/colors',
          icon: 'icon-people'
        }
      ]
    },
    {
      name: 'Company',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: "Company's",
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Register',
          url: '/base/cards',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Project',
      url: '/project',
      icon: 'icon-cursor',
      children: [
        {
          name: 'All Project',
          url: '/project/projects',
          icon: 'icon-cursor'
        },
        {
          name: 'Create Project',
          url: '/project/CreateProject',
          icon: 'icon-cursor'
        }
      ]
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart'
    }
  ]
}
