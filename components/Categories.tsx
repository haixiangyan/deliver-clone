import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import CategoryCard from './CategoryCard';
import client, { urlFor } from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
      *[_type == 'category']
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
      horizontal>
      {categories.map((c: any) => (
        <CategoryCard key={c._id} imgUrl={urlFor(c.image).width(200).url()} title={c.title} />
      ))}
    </ScrollView>
  );
};

export default Categories;
