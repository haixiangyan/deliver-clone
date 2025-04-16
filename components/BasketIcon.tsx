import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';

const BasketIcon = () => {
  const navigation = useNavigation();

  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className="absolute bottom-10 z-50 w-full">
      <TouchableOpacity
        className="mx-5 flex-row items-center gap-x-1 rounded-lg bg-[#00ccbb] p-4"
        onPress={() => navigation.navigate('Basket')}>
        <Text className="bg-[#01a296] px-2 py-1 text-lg font-extrabold text-white">
          {items.length}
        </Text>
        <Text className="flex-1 text-center text-lg font-extrabold text-white">View Basket</Text>
        <Text className="text-lg font-extrabold text-white">￥{basketTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
