import { Text, View, FlatList } from 'react-native'
import { CATEGORIES } from '../data/data';
import CategoryGridTitle from '../components/CategoryGridTitle';

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const onPressNavigateHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }
  
    return (
      <CategoryGridTitle 
        title={itemData.item.title}
        color={itemData.item.color}
        onPressNavigate={onPressNavigateHandler}
      />
    )
  }

  return (
    <FlatList
      key={'somekey'}
      data={CATEGORIES}
      keyExtractor={(item) => 'somekey' + item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
};

export default CategoriesScreen;