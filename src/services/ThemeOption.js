import sideBar6 from '../assets/utils/images/sidebar/city1.jpg';

class ThemeOptionSerivce {
    static themeOption() {
        const option = {
            backgroundColor: 'bg-royal sidebar-text-light',
            headerBackgroundColor: 'bg-strong-bliss header-text-light',
            enableMobileMenuSmall: '',
            enableBackgroundImage: true,
            enableClosedSidebar: false,
            enableFixedHeader: true,
            enableHeaderShadow: true,
            enableSidebarShadow: true,
            enableFixedFooter: true,
            enableFixedSidebar: true,
            colorScheme: 'white',
            backgroundImage: sideBar6,
            backgroundImageOpacity: 'opacity-06',
            enablePageTitleIcon: true,
            enablePageTitleSubheading: true,
            enablePageTabsAlt: false,
        }
        return option;
    }
}

export default ThemeOptionSerivce;