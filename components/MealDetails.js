import { View, Text, StyleSheet } from "react-native";

const MealDetails = ({duration, complexity, affordability, style, textStyle}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={textStyle ? textStyle : null}>{duration}min</Text>
      <Text style={textStyle ? textStyle : null}>{complexity.toUpperCase()}</Text>
      <Text style={textStyle ? textStyle : null}>{affordability.toUpperCase()}</Text>
    </View>
  )
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    gap: 10,
  }
});