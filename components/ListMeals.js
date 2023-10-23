import { View, Text, StyleSheet } from "react-native";

const ListMeals = ({data}) => {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text>
       - {dataPoint}
      </Text>
    </View>
  ))
};

export default ListMeals;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 2,
    marginHorizontal: 12,
  },
});