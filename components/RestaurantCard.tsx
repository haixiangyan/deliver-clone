import { FC } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { StarIcon } from 'react-native-heroicons/solid';

import { urlFor } from '../sanity';

interface Props {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: string[];
  long: number;
  lat: number;
}

const RestaurantCard: FC<Props> = (props) => {
  const { imgUrl, title, rating, genre, address } = props;

  return (
    <TouchableOpacity className="mr-3 bg-white shadow">
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="pt-2 text-lg font-bold">{title}</Text>

        <View className="flex-row items-center gap-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text>· {genre}
          </Text>
        </View>

        <View className="flex-row items-center gap-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
