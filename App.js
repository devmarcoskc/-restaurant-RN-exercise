import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';
import FavoritesContextProvier from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: 'red',
        drawerActiveBackgroundColor: null,
        drawerLabelStyle: {
          fontSize: 18,
        }
      }}
    >
      <Drawer.Screen 
        name="Meals Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons
              name="list"
              size={24}
              color={color}
            />
          )
        }}
      />
      <Drawer.Screen 
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons
              name="star"
              color={color}
              size={24}
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <Provider store={store}>
      {/*<FavoritesContextProvier>*/}
      <StatusBar style="dark"/>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: {backgroundColor: 'white'},
            headerTintColor: 'black',
          }}
        >
          <Stack.Screen 
            name="Categories" 
            component={DrawerNavigator}
            options={{
              title: "All Categories",
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen}
          />
          <Stack.Screen 
            name="MealDetail" 
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/*</FavoritesContextProvier>*/}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testContainer: {
    width: 50,
    height: 50,
    borderWidth: Platform.select({ios: 2, android: 5}),
    borderColor: 'black',
  },
});
