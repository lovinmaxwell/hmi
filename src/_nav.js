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
    // {
    //   name: 'Employee',
    //   url: '/employee',
    //   icon: 'icon-people',
    //   children: [
    //     {
    //       name: 'Employee',
    //       url: '/employee/Employee',
    //       icon: 'icon-people'
    //     },
    //     {
    //       name: 'New Employee',
    //       url: '/employee/Employee',
    //       icon: 'icon-people'
    //     }
    //   ]
    // },
    {
      name: 'Company',
      url: '/company',
      icon: 'icon-puzzle',
      children: [
        {
          name: "Company's",
          url: '/company/companys',
          icon: 'icon-puzzle'
        },
        {
          name: 'Register',
          url: '/company/Register',
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
