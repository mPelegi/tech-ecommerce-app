import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Splash: undefined,
    Home: undefined,
    OrderHistory: undefined
  };  

  export  type PropsStack= NativeStackScreenProps<RootStackParamList>
  export  type PropsStackSplash= NativeStackScreenProps<RootStackParamList, "Splash">;
  export  type PropsStackHome= NativeStackScreenProps<RootStackParamList, "Home">;
  export  type PropsStackOrderHistory= NativeStackScreenProps<RootStackParamList, "OrderHistory">;