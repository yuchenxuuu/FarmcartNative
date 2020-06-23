/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Color from 'color';

// import utils
import getImgSource from '../../utils/getImgSource.js';

import ActionProductCard from '../../components/cards/ActionProductCard';
import ActionProductCardHorizontal from '../../components/cards/ActionProductCardHorizontal';
import {Heading6} from '../../components/text/CustomText';
import TouchableItem from '../../components/TouchableItem';
import ProductList from '../categories/ProductList'
// import colors
import Colors from '../../theme/colors';

// HomeA Config
const imgHolder = require('../../assets/img/imgholder.jpeg');

// HomeA Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
  },
  categoriesContainer: {
    paddingBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  titleText: {
    fontWeight: '700',
  },
  viewAllText: {
    color: Colors.primaryColor,
  },
  categoriesList: {
    paddingTop: 4,
    paddingRight: 16,
    paddingLeft: 8,
  },
  cardImg: {borderRadius: 4},
  card: {
    marginLeft: 8,
    width: 104,
    height: 72,
    resizeMode: 'cover',
  },
  cardOverlay: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: Color(Colors.overlayColor).alpha(0.2),
    overflow: 'hidden',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cardTitle: {
    padding: 12,
    fontWeight: '500',
    fontSize: 16,
    color: Colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },

  productsList: {
    paddingBottom: 16,
    // spacing = paddingHorizontal + ActionProductCard margin = 12 + 4 = 16
    paddingHorizontal: 12,
  },
  popularProductsList: {
    // spacing = paddingHorizontal + ActionProductCardHorizontal margin = 12 + 4 = 16
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  background: {
    width: '100%',
    height: '100%',
    //justifyContent: "space-around",
    alignItems: "center",
  }
});
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          key: 1,
          imageUri: require('../../assets/img/farmsImage/farm1.jpg'),
          name: 'Local Fresh Produce',
        },
        {
          key: 2,
          imageUri: require('../../assets/img/farmsImage/farm2.jpg'),
          name: 'Milk Farm',
        },
        {
          key: 3,
          imageUri: require('../../assets/img/farmsImage/farm3.jpg'),
          name: 'Apple Farm',
        }
      ],
      products: [
        {
          imageUri: require('../../assets/img/farmproductimage/apples.png'),
          name: 'Apple',
          price: 1.2,
          quantity: 0
         
        },
        {
          imageUri: require('../../assets/img/farmproductimage/blueberries.jpg'),
          name: 'Berry',
          price: 1.99,
          quantity: 0
        },
        {
          imageUri: require('../../assets/img/farmproductimage/lemons.jpg'),
          name: 'Lemon',
          price: 1.99,
          quantity: 0
        },
      ],
      popularProducts: [
        {
          imageUri: require('../../assets/img/farmproductimage/apples.png'),
          name: 'Apple',
          price: 1.2,
          quantity: 0
         
        },
        {
          imageUri: require('../../assets/img/farmproductimage/blueberries.jpg'),
          name: 'Berry',
          price: 1.99,
          quantity: 0
        },
        {
          imageUri: require('../../assets/img/farmproductimage/lemons.jpg'),
          name: 'Lemon',
          price: 1.99,
          quantity: 0
        },
        
      ],
    };
  }

  navigateTo = screen => () => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  onPressRemove = item => () => {
    let {quantity} = item;
    quantity -= 1;

    const {popularProducts} = this.state;
    const index = popularProducts.indexOf(item);

    if (quantity < 0) {
      return;
    }
    popularProducts[index].quantity = quantity;

    this.setState({
      popularProducts: [...popularProducts],
    });
  };

  onPressAdd = item => () => {
    const {quantity} = item;
    const {popularProducts} = this.state;

    const index = popularProducts.indexOf(item);
    popularProducts[index].quantity = quantity + 1;

    this.setState({
      popularProducts: [...popularProducts],
    });
  };

  keyExtractor = (item, index) => index.toString();

  renderCategoryItem = ({item, index}) => (
    <ImageBackground
      key={index}
      defaultSource={imgHolder}
      source={getImgSource(item.imageUri)}
      imageStyle={styles.cardImg}
      style={styles.card}>
      <View style={styles.cardOverlay}>
        <TouchableItem
          onPress={this.navigateTo('Product')}
          style={styles.cardContainer}
          // borderless
        >
          <Text style={styles.cardTitle}>{item.name}</Text>
        </TouchableItem>
      </View>
    </ImageBackground>
  );

  renderProductItem = ({item, index}) => (
    <ActionProductCard
      onPress={this.navigateTo('Product')}
      key={index}
      imageUri={item.imageUri}
      title={item.name}
      description={item.description}
      rating={item.rating}
      price={item.price}
      discountPercentage={item.discountPercentage}
      label={item.label}
    />
  );

  renderPopularProductItem = ({item, index}) => (
    <ActionProductCardHorizontal
      onPress={this.navigateTo('Product')}
      onPressRemove={this.onPressRemove(item)}
      onPressAdd={this.onPressAdd(item)}
      swipeoutDisabled
      key={index}
      imageUri={item.imageUri}
      title={item.name}
      description={item.description}
      rating={item.rating}
      price={item.price}
      quantity={item.quantity}
      discountPercentage={item.discountPercentage}
      label={item.label}
    />
  );

  render() {
    const {categories, products, popularProducts} = this.state;

    return (
     
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />
       

        <View style={styles.container}>
     
          <ScrollView>
            <View style={styles.categoriesContainer}>
              <View style={styles.titleContainer}>
                <Heading6 style={styles.titleText}>Categories</Heading6>
    
              </View>

              <ProductList />

            </View>

            <View style={styles.titleContainer}>
              <Heading6 style={styles.titleText}>Special Offers</Heading6>
            </View>

            <FlatList
              data={products}
              horizontal
              showsHorizontalScrollIndicator={false}
              alwaysBounceHorizontal={false}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderProductItem}
              contentContainerStyle={styles.productsList}
            />

            <View style={styles.categoriesContainer}> 
            <View style={styles.titleContainer}>
            <Heading6 style={styles.titleText}>Recommended Farms Near You</Heading6>
            </View>
            <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                alwaysBounceHorizontal={false}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderCategoryItem}
                contentContainerStyle={styles.categoriesList}
              />
              
              </View>

            <View style={styles.titleContainer}>
              <Heading6 style={styles.titleText}>Popular Products</Heading6>
            </View>

            <FlatList
              data={popularProducts}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderPopularProductItem}
              contentContainerStyle={styles.popularProductsList}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
