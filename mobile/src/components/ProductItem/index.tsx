import { Text, Image, View } from 'react-native';
import { styles } from './styles';
import productImg from '../../../src/assets/product.png'

interface ProductData {
  name: string;
  description: string;
  price: string;
}

const ProductItem = ({name, description, price}: ProductData) => (

  <View style={styles.container}>
    <View style={styles.content}>
      {/* Image */}
      <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
        <Image
          style={styles.productImage}
          source={productImg}
        />
      </View>
      {/* Details*/}
      <View style={styles.productDetails}>
        <Text style={styles.title}>
          {name}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
        <Text style={styles.price}>
          $ {price}
        </Text>
      </View>
    </View>    
  </View>
);

export default ProductItem;