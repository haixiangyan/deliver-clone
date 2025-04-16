import { useNavigation } from '@react-navigation/native';
import { useMemo } from 'react';
import { View, Image, ScrollView, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';

import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { selectRestaurant } from '../features/restaurantSlice';
import { urlFor } from '../sanity';

const BasketScreen = () => {
  const navigation = useNavigation();

  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  const dispatch = useDispatch();

  const groupedItems: any = useMemo(() => {
    return items.reduce((results: any[], item: any) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="shadow-xs border-b border-[#00ccbb] bg-white p-5">
          <View>
            <Text className="text-center text-lg font-bold">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute right-5 top-3 rounded-full bg-gray-100">
            <XCircleIcon color="#00ccbb" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="my-5 flex-row items-center gap-x-4 bg-white px-4 py-3">
          <Image
            source={{ uri: 'https://links.papareact.com/wru' }}
            className="h-7 w-7 rounded-full bg-gray-300"
          />
          <Text className="flex-1">Delivery in 50-70 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="devide-gray-200 divide-y">
          {Object.entries(groupedItems).map(([key, items]) => (
            <View key={key} className="flex-row items-center gap-x-3 bg-white px-5 py-2">
              <Text className="text-[#00ccbb]">{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>

              <Text className="text-gray-600">￥{items[0]?.price}</Text>

              <TouchableOpacity>
                <Text
                  className="text-xs text-[#00ccbb]"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="mt-5 gap-y-4 bg-white p-5">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text>￥{basketTotal}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text>￥{5.99}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">￥{basketTotal + 5.99}</Text>
          </View>

          <TouchableOpacity className="rounded-lg bg-[#00ccbb] p-4">
            <Text className="text-center text-lg font-bold text-white">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
