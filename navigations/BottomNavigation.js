import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Search from '../screens/Search/Search';
const Tab = createBottomTabNavigator();

export function BottomTab(props) {
    return (
    <Tab.Navigator  screenOptions={({ route }) => ({
        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
    
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Search") {
            iconName = 'search';
          } else if (route.name === "Profile") {
            iconName = 'user';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false}} />
        <Tab.Screen name="Search" component={Search} options={{ headerShown: false}} />
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false}} />
    </Tab.Navigator>);
}
