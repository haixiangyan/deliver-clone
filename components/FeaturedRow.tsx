import { FC, useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';

import RestaurantCard from './RestaurantCard';
import client from '../sanity';

interface Props {
  id: string;
  title: string;
  description: string;
}

const FeaturedRow: FC<Props> = (props) => {
  const { id, title, description } = props;

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
      *[_type == 'featured' && _id == $id] {
        ...,
        restaurants[] ->{
          ...,
          dishes[] ->,
            type -> {
              name
            }
        }
      }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="px-4 text-xs text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingBottom: 8,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        {/*Card*/}
        {restaurants?.map((r: any) => (
          <RestaurantCard
            key={r._id}
            id={r._id}
            imgUrl={r.image}
            title={r.name}
            rating={r.rating}
            genre={r.type?.name}
            address={r.address}
            short_description={r.short_description}
            dishes={r.dishes}
            long={r.long}
            lat={r.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
