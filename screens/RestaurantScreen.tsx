import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowLeftIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import { StarIcon, MapPinIcon, ChevronRightIcon } from 'react-native-heroicons/solid';

import DishRow from '../components/DishRow';
import { urlFor } from '../sanity';

const RestaurantScreen = () => {
  const {
    params: { id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat },
  } = useRoute() as any;

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View className="relative">
        <Image
          resizeMode="cover"
          source={{ uri: urlFor(imgUrl).url() }}
          className="h-56 w-full bg-gray-300 p-4"
        />

        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute left-5 top-14 rounded-full bg-gray-100 p-2">
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="my-1 flex-row gap-2">
            <View className="flex-row items-center gap-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating || '-'}</Text> · {genre}
              </Text>
            </View>

            <View className="flex-row items-center gap-x-1">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">Nearby · {address}</Text>
            </View>
          </View>

          <Text className="mt-2 pb-4 text-gray-500">{short_description}</Text>
        </View>

        <TouchableOpacity className="flex-row items-center gap-x-2 border-y border-gray-300 p-4">
          <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
          <Text className="text-md flex-1 pl-2 font-bold">Have a food allergy?</Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View>
        <Text className="mb-3 px-4 pt-6 text-xl font-bold">Menu</Text>

        {dishes.map((d: any) => (
          <DishRow
            key={d._id}
            id={d._id}
            name={d.name}
            description={d.show_description}
            price={d.price}
            image={d.image}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
