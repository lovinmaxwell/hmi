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
      name: 'Project',
      url: '/project',
      icon: 'icon-menu',
      children: [
        // {
        //   name: 'Requirements',
        //   url: '/project/Requirements',
        //   icon: 'icon-cursor'
        // },
        {
          name: 'Add Requirements',
          url: '/project/AddRequirements',
          icon: 'icon-cursor'
        },
        {
          name: 'User Stories',
          url: '/project/UserStories',
          icon: 'icon-map'
        },
        {
          name: 'Charts',
          url: '/project/Charts',
          icon: 'icon-map'
        },
      ]
    }
  ]
} 