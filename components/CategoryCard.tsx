import { FC } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';

interface Props {
  imgUrl: string;
  title: string;
}

const CategoryCard: FC<Props> = (props) => {
  const { imgUrl, title } = props;

  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 font-bold text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
