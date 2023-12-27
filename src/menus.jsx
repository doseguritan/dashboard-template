// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };
const menuItems = {
    items: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'group',
            children: [
              {
                id: 'default',
                title: 'Dashboard',
                type: 'item',
                url: '/',
                icon: icons.IconDashboard,
                breadcrumbs: false
              },
              {
                id: 'default1',
                title: 'Dashboard',
                type: 'item',
                url: '/',
                icon: icons.IconDashboard,
                breadcrumbs: false
              },
              {
                id: 'sub',
                title: 'SubPages',
                type: 'collapse',
                url: '/1',
                icon: icons.IconDashboard,
                breadcrumbs: false,
                children: [
                  {
                    id: 'default2',
                    title: 'Dashboard 3',
                    type: 'item',
                    url: '/',
                    icon: icons.IconDashboard,
                    breadcrumbs: false
                  },
                  {
                    id: 'default3',
                    title: 'Dashboard 3',
                    type: 'item',
                    url: '/',
                    icon: icons.IconDashboard,
                    breadcrumbs: false
                  },
                ]
              }
            ]
        }
    ]
}

export default menuItems;