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
      icon: 'icon-drop',
      children: [
        {
          name: 'Employee',
          url: '/theme/colors',
          icon: 'icon-cursor'
        },
        {
          name: 'New Employee',
          url: '/theme/colors',
          icon: 'icon-cursor'
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
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'All Project',
          url: '/buttons/standard-buttons',
          icon: 'icon-cursor'
        },
        {
          name: 'Create Project',
          url: '/buttons/dropdowns',
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
