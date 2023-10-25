import { StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryIdSelected = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryIdSelected) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryIdSelected).title;

    navigation.setOptions({
      title: categoryTitle
    });
  }, [categoryIdSelected, navigation]);

  return (
    <MealsList items={displayedMeals}/>
  )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});