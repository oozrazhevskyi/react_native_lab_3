import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Linking } from "react-native";


function CustomDrawerContent(props: any) {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label='Сайт РТСК'
          onPress={() => Linking.openURL('https://rtrs.chdtu.edu.ua/')}
        />
      </DrawerContentScrollView>
    </>
  )
}

export default CustomDrawerContent;
