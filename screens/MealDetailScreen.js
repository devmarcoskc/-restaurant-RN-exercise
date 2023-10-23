import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/data";
import MealDetails from "../components/MealDetails";
import SubtitleMeals from "../components/SubtitleMeals";
import ListMeals from "../components/ListMeals";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({route, navigation}) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPressHandler = () => {
    console.log("Pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={headerButtonPressHandler} icon="star"/>
      }
    })
  }, [navigation, headerButtonPressHandler]);

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