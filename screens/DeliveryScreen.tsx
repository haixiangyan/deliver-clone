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
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat || 22.61447,
          longitude: restaurant.long || 113.887842,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={{ flex: 1, marginTop: -10, zIndex: 0 }}
        mapType="mutedStandard">
        <Marker
          coordinate={{
            latitude: restaurant.lat || 22.61447,
            longitude: restaurant.long || 113.887842,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00ccbb"
        />
      </MapView>
    </View>
  );
};

export default DeliveryScreen;
