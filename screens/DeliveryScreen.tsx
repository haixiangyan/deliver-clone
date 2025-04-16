import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/solid';
import MapView, { Marker } from 'react-native-maps';
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';

import { selectRestaurant } from '../features/restaurantSlice';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="flex-1 bg-[#00ccbb]">
      <SafeAreaView className="z-50">
        <View className="flex-row items-center justify-between p-5">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>

          <Text className="text-lg font-light text-white">Order Help</Text>
        </View>

        <View className="z-50 mx-5 my-2 rounded-md bg-white p-6 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>

            <Image source={{ uri: 'https://links.papareact.com/fls' }} className="h-20 w-20" />
          </View>

          <Progress.Bar height={6} color="#00ccbb" indeterminate />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat || 22.540829,
          longitude: restaurant.long || 114.061499,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={{ flex: 1, marginTop: -40, zIndex: 0 }}
        mapType="mutedStandard">
        <Marker
          coordinate={{
            latitude: restaurant.lat || 22.540829,
            longitude: restaurant.long || 114.061499,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00ccbb"
        />
      </MapView>

      <SafeAreaView className="h-28 flex-row items-center gap-x-5 bg-white">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="ml-5 h-12 w-12 rounded-full bg-gray-300"
        />
        <View className="flex-1">
          <Text className="text-lg">Sonny Sangha</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>

        <Text className="mr-5 text-lg font-bold text-[#00ccbb]">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
