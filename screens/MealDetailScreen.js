import { useContext, useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/data";
import MealDetails from "../components/MealDetails";
import SubtitleMeals from "../components/SubtitleMeals";
import ListMeals from "../components/ListMeals";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorite";

const MealDetailScreen = ({route, navigation}) => {
  //const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  //const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);
  const mealIsFavorite = favoriteMealsIds.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if(mealIsFavorite) {
      dispatch(removeFavorite({
        id: mealId
      }));
      //favoriteMealsContext.removeFavorite(mealId);
    } else {
      dispatch(addFavorite({
        id: mealId
      }));
      //favoriteMealsContext.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton 
          onPress={changeFavoriteStatusHandler} 
          icon={mealIsFavorite ? "star" : "star-outline"}
        />
      }
    })
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{uri: selectedMeal.imageUrl}}
        style={styles.image}
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <SubtitleMeals>Ingredients</SubtitleMeals>
      <ListMeals data={selectedMeal.ingredients}/>
      <SubtitleMeals>Steps</SubtitleMeals>
      <ListMeals data={selectedMeal.steps}/>
    </ScrollView>
  )
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 22,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 8,
    textAlign: 'center',
  },
  detailText: {
    color: 'black'
  },
})