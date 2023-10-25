import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import MealsList from "../components/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/data";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);

  // const favoriteMealsContext = useContext(FavoritesContext);
  // const favoriteMeals = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal.id));
  const favoriteMeals = MEALS.filter((meal) => favoriteMealsIds.includes(meal.id));

  if(favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
          You have no favorite meals yet
        </Text>
      </View>
    )
  }
  return (
    <MealsList items={favoriteMeals}/>
  )
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    }
});