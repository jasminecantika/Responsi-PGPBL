import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Petalokasi from './Petalokasiobjek'
import Welcome
 from '../Welcome';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Petalokasi" component={Petalokasi} />
    </Stack.Navigator>
  );
}

export default MyStack