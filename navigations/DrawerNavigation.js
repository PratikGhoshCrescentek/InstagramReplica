import { BottomTab } from './BottomNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Search from '../screens/Search/Search';

export const Drawer = createDrawerNavigator();

export function SideDrawer(props) {
    return (
    <Drawer.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Drawer.Screen name="Instagram" component={BottomTab} />
        <Drawer.Screen name="Search" component={Search} />
    </Drawer.Navigator>);
}
