import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import salyImg from '../../../src/assets/saly.png'
import { PropsStackSplash } from '../../../types';



const Splash = ({ route, navigation }: PropsStackSplash) => {
    const openHome = () => (
        navigation.navigate('Home')
    )
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Find your Gadget</Text>
            <Image
                source={salyImg}
                defaultSource={salyImg}
                style={styles.image} />
            <TouchableOpacity style={styles.btnPrimay} onPress={openHome}>
                <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Splash;