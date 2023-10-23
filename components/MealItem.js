import { View, Text, Pressable, 
Image, StyleSheet, Platform, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

const MealItem = ({id, title, imageUrl, duration, complexity, affordability}) => {
  const navigation = useNavigation();

  const navigatesHandler = () => {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
        <TouchableOpacity
          onPress={navigatesHandler}
        >
          <View style={styles.innerContainer}>
            <View>
              <Image
                source={{uri: imageUrl}}
                style={styles.image}
              />
              <Text style={styles.title}>
                {title}
              </Text>
            </View>
            <MealDetails
              duration={duration}
              complexity={complexity}
              affordability={affordability}
            />
          </View>
        </TouchableOpacity>
    </View>
  )
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    gap: 10,
  }
})