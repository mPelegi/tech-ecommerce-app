import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Product from '../../components/ProductItem/index';
import { PropsStackHome } from '../../../types';

const productData = {name: 'Apple Watch', description: 'Series 6 . Red', price: '359.00'};

const Home = ({ route, navigation }: PropsStackHome) => {
    const openOrderHistory = () => (
        navigation.navigate('OrderHistory')
    );

    return (
    <View style={styles.container}>
        <Icon name="menu" size={40} color="#000000" style={{paddingHorizontal: 50, paddingTop: 30}} />
            <View style={styles.content}>
            <Text style={styles.title}>Order online</Text>
            <Text style={styles.title}>choose the product</Text>            
            <View style={styles.itemList}>
                <View style={{width: 100}}>
                    <Text style={styles.description}>Phones</Text>
                </View>
                <TouchableOpacity onPress={openOrderHistory}>
                    <Product {...productData}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={openOrderHistory}>
                    <Product {...productData}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={openOrderHistory}>
                    <Product {...productData}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
};

export default Home;