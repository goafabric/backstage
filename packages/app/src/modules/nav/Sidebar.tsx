import {
  Sidebar,
  SidebarDivider,
  SidebarGroup,
  SidebarItem,
  SidebarScrollWrapper,
  SidebarSpace,
} from '@backstage/core-components';
import { compatWrapper } from '@backstage/core-compat-api';
import { NavContentBlueprint } from '@backstage/plugin-app-react';
import { SidebarLogo } from './SidebarLogo';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { SidebarSearchModal } from '@backstage/plugin-search';
import {
  Settings as SidebarSettings,
  UserSettingsSignInAvatar,
} from '@backstage/plugin-user-settings';

{
  /* import { NotificationsSidebarItem } from '@backstage/plugin-notifications';  */
}

// Page extensions that should NOT show up in the sidebar. The pages themselves
// stay enabled (routes keep working); we just never render a nav item for them.
// Since the nav is derived from page extensions, `nav-item:*: false` in app-config
// no longer hides anything - taking the item without rendering it is the way to go.
const HIDDEN_NAV_ITEMS = [
  'page:scaffolder', // Create
  'page:notifications', // Notifications
  'page:catalog-graph', // Catalog Graph
  'page:catalog-import', // Register Existing Component
  'page:user-settings', // Settings (rendered manually further below)
  'page:app-visualizer', // Visualizer
  'page:search', // search
];

export const SidebarContent = NavContentBlueprint.make({
  params: {
    component: ({ navItems }) => {
      HIDDEN_NAV_ITEMS.forEach(id => navItems.take(id));
      const nav = navItems.withComponent(item => (
        <SidebarItem
          icon={() => item.icon}
          to={item.href}
          text={item.title}
        />
      ));
      return compatWrapper(
        <Sidebar>
          <SidebarLogo />
          <SidebarGroup label="Search" icon={<SearchIcon />} to="/search">
            <SidebarSearchModal />
          </SidebarGroup>
          <SidebarDivider />
          <SidebarGroup label="Menu" icon={<MenuIcon />}>
            {nav.take('page:catalog')}
            <SidebarDivider />
            <SidebarScrollWrapper>
              {nav.rest({ sortBy: 'title' })}
            </SidebarScrollWrapper>
          </SidebarGroup>
          {/* Custom Sidebar */}
          <SidebarDivider />
          <SidebarItem icon={MenuIcon} to="docs/default/component/guidelines" text="Guidelines" />
          <SidebarItem icon={MenuIcon} to="catalog-graph?rootEntityRefs%5B%5D=component%3Adefault%2Fapi-gateway&maxDepth=%E2%88%9E&selectedKinds%5B%5D=component&unidirectional=false&mergeRelations=true&direction=LR&showFilters=true&curve=curveMonotoneX" text="Dependencies"/>

          <SidebarSpace />
          <SidebarDivider />

          {/*
          {<NotificationsSidebarItem />
          <SidebarDivider />
          */}

          <SidebarGroup
            label="Settings"
            icon={<UserSettingsSignInAvatar />}
            to="/settings"
          >
            <SidebarSettings />
          </SidebarGroup>
        </Sidebar>,
      );
    },
  },
});
