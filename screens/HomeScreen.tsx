import { useNavigation } from '@react-navigation/native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, TextInput, ScrollView } from 'react-native';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  UserIcon,
} from 'react-native-heroicons/outline';

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../sanity';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `
      *[_type == 'featured'] {
        ...,
        restaurants[] ->{
          ...,
          dishes[] ->
        }
      }
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  console.log('feature', featuredCategories);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row items-center gap-2 px-4 pb-3">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="h-7 w-7 rounded-full bg-gray-300"
        />

        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-400">Deliver Now!</Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-xl font-bold">Current Location</Text>
            <ChevronDownIcon size={20} color="#00ccBB" />
          </View>
        </View>

        <UserIcon size={25} color="#00CCBB" />
      </View>

      {/*Search*/}
      <View className="flex-row items-center gap-2 px-4 pb-2">
        <View className="flex-1 flex-row gap-2 rounded-md bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />

          <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
        </View>

        <View>
          <AdjustmentsVerticalIcon color="#00ccBB" />
        </View>
      </View>

      {/*Body*/}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Categories />

        {/*Featured Rows*/}
        {featuredCategories?.map((category: any) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
