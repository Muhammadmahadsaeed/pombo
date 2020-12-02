import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';

class ProductCategoryDetailTittle extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearTextGradient
          style={styles.welcome}
          locations={[0.1, 0.5, 0.9]}
          colors={['#e9ba00', '#fdf963','#e9ba00']}
          start={{x: 1, y:1 }}
          end={{x: 1, y: 0}}>
          <Text >CATEGORY OF GROCERY</Text>
        </LinearTextGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontFamily: 'GothamBold',
    fontSize: 16,
  },
});
export default ProductCategoryDetailTittle;
