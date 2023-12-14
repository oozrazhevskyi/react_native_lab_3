import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "@app/navigation/CustomDrawerContent/CustomDrawerContent";
import TabNavigation from "@app/navigation/TabNavigation/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='Info'
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name='Info'
            component={TabNavigation}
            options={{
              drawerLabel: 'Інфо',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Navigation;
