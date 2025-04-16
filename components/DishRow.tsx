import { FC, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';

import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../features/basketSlice';
import { urlFor } from '../sanity';

interface Props {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const DishRow: FC<Props> = (props) => {
  const { id, name, description, price, image } = props;

  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const [isPressed, setIsPressed] = useState(false);

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (items.length === 0) {
      return;
    }
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        className={`border border-gray-200 bg-white p-4 ${isPressed && 'border-b-0'}`}
        onPress={() => setIsPressed(!isPressed)}>
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="mb-1 text-lg">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="mt-2 text-gray-400">￥{price}</Text>
          </View>

          <View>
            <Image
              style={{ borderWidth: 1, borderColor: '#F3F3F4' }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center gap-x-2 pb-3">
            <TouchableOpacity disabled={items.length === 0} onPress={removeItemFromBasket}>
              <MinusCircleIcon color={items.length > 0 ? '#00CCBB' : 'gray'} size={40} />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
