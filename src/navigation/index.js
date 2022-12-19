// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/


import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';


// Import Custom Sidebar
import CustomSidebarMenu from './../components/drawer';
import MainScreen from '../screen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="FirstPage"
          options={{drawerLabel: 'First page Option'}}
          component={MainScreen}
        />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;