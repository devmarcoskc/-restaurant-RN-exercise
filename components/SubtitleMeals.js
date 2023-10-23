import { View, Text, StyleSheet } from "react-native";

const SubtitleMeals = ({children}) => {
  return (
    <View>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
};

export default SubtitleMeals;

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
    },
});