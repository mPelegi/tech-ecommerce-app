import { ImageBackground } from 'react-native';
import { styles } from './styles';
import orderHistoryImg from '../../../src/assets/order_history.png'
import React from 'react';

const OrderHistory = () => (
        <ImageBackground
            source={ orderHistoryImg }
            defaultSource = { orderHistoryImg }
            style={styles.container}
        >            
        </ImageBackground >
);

export default OrderHistory;