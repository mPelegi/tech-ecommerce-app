import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

// Screens
import Splash from '../screens/Splash/index';
import Home from '../screens/Home/index';
import OrderHistory from '../screens/OrderHistory/index';

const { Screen, Navigator, Group } = createNativeStackNavigator<RootStackParamList>();

const StackRoutes = () => (
    <Navigator  initialRouteName="Splash"  screenOptions={ {headerShown: false}}>
        <Screen
            name='Splash'
            component={Splash}
        />

        <Screen
            name='Home'
            component={Home}
        />

        <Screen
            name='OrderHistory'
            component={OrderHistory}
        />
    </Navigator>
)

export default StackRoutes;