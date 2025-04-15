import { ScrollView } from 'react-native';

import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
      horizontal>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 3" />
    </ScrollView>
  );
};

export default Categories;
