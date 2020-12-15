import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile185688Navigator from '../features/UserProfile185688/navigator';
import Tutorial185687Navigator from '../features/Tutorial185687/navigator';
import NotificationList185659Navigator from '../features/NotificationList185659/navigator';
import Settings185658Navigator from '../features/Settings185658/navigator';
import Settings185650Navigator from '../features/Settings185650/navigator';
import UserProfile185648Navigator from '../features/UserProfile185648/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile185688: { screen: UserProfile185688Navigator },
Tutorial185687: { screen: Tutorial185687Navigator },
NotificationList185659: { screen: NotificationList185659Navigator },
Settings185658: { screen: Settings185658Navigator },
Settings185650: { screen: Settings185650Navigator },
UserProfile185648: { screen: UserProfile185648Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
