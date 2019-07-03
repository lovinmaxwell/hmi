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
      name: 'Company',
      url: '/company',
      icon: 'icon-menu',
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
      icon: 'icon-menu',
      children: [
        {
          name: 'Requirements',
          url: '/project/Requirements',
          icon: 'icon-cursor'
        },
        {
          name: 'Add Requirements',
          url: '/project/AddRequirements',
          icon: 'icon-cursor'
        },
        {
          name: 'User Stories',
          url: '/project/charts',
          icon: 'icon-map'
        },
    
      ]
    }
  ]
} 