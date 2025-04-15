import { FC } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';

import RestaurantCard from './RestaurantCard';

interface Props {
  id: string;
  title: string;
  description: string;
}

const FeaturedRow: FC<Props> = (props) => {
  const { title, description } = props;

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
        <RestaurantCard
          id="1"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Jap"
          address="123 main"
          short_description="This is a test"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id="1"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Jap"
          address="123 main"
          short_description="This is a test"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id="1"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Jap"
          address="123 main"
          short_description="This is a test"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
