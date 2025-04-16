import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#00ccbb]">
      <Animatable.Image
        source={require('../assets/loading.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="my-10 text-center text-lg font-bold text-white">
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
