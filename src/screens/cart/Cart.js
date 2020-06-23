/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import remove from 'lodash/remove';

// import components
import ActionProductCardHorizontal from '../../components/cards/ActionProductCardHorizontal';
import Button from '../../components/buttons/Button';
import {Heading6, Subtitle1} from '../../components/text/CustomText';
import Divider from '../../components/divider/Divider';
import EmptyState from '../../components/emptystate/EmptyState';

// import colors
import Colors from '../../theme/colors';

// CartA Config
const EMPTY_STATE_ICON = 'cart-remove';

// CartA Styles
const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  titleText: {
    fontWeight: '700',
  },
  productList: {
    // spacing = paddingHorizontal + ActionProductCardHorizontal margin = 12 + 4 = 16
    paddingHorizontal: 12,
  },
  subTotalText: {
    top: -2,
    fontWeight: '500',
    color: Colors.onSurface,
  },
  subTotalPriceText: {
    fontWeight: '700',
    color: Colors.primaryColor,
  },
  bottomButtonContainer: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});

// CartA
export default class CartA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0.0,
      products: [
        {
          id: 'product1',
          imageUri: require('../../assets/img/farmproductimage/apples.png'),
          name: 'Apple',
          price: 1.2,
          quantity: 2,
         
        },
        {
          id: 'product2',
          imageUri: require('../../assets/img/farmproductimage/lemons.jpg'),
          name: 'Lemon',
          price: 2.0,
          quantity: 1,
        },
        {
          id: 'product3',
          imageUri: require('../../assets/img/farmproductimage/potatoes.jpg'),
          name: 'Potato',
          price: 0.5,
          quantity: 12,
        },
      ],
    };
  }

  componentDidMount = () => {
    this.updateTotalAmount();
  };

  navigateTo = (screen) => () => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  swipeoutOnPressRemove = (item) => () => {
    let {products} = this.state;
    const index = products.indexOf(item);

    products = remove(products, (n) => products.indexOf(n) !== index);

    this.setState(
      {
        products,
      },
      () => {
        this.updateTotalAmount();
      },
    );
  };

  onPressRemove = (item) => () => {
    let {quantity} = item;
    quantity -= 1;

    let {products} = this.state;
    const index = products.indexOf(item);

    if (quantity === 0) {
      products = remove(products, (n) => products.indexOf(n) !== index);
    } else {
      products[index].quantity = quantity;
    }

    this.setState(
      {
        products: [...products],
      },
      () => {
        this.updateTotalAmount();
      },
    );
  };

  onPressAdd = (item) => () => {
    const {quantity} = item;
    const {products} = this.state;

    const index = products.indexOf(item);
    products[index].quantity = quantity + 1;

    this.setState(
      {
        products: [...products],
      },
      () => {
        this.updateTotalAmount();
      },
    );
  };

  updateTotalAmount = () => {
    const {products} = this.state;
    let total = 0.0;

    products.forEach((product) => {
      let {price} = product;
      const {discountPercentage, quantity} = product;

      if (typeof discountPercentage !== 'undefined') {
        price -= price * discountPercentage * 0.01;
      }
      total += price * quantity;
    });

    this.setState({
      total,
    });
  };

  keyExtractor = (item) => item.id.toString();

  renderProductItem = ({item}) => (
    <ActionProductCardHorizontal
      key={item.id}
      onPress={this.navigateTo('Product')}
      onPressRemove={this.onPressRemove(item)}
      onPressAdd={this.onPressAdd(item)}
      imageUri={item.imageUri}
      title={item.name}
      description={item.description}
      rating={item.rating}
      price={item.price}
      quantity={item.quantity}
      discountPercentage={item.discountPercentage}
      label={item.label}
      swipeoutOnPressRemove={this.swipeoutOnPressRemove(item)}
    />
  );

  render() {
    const {total, products} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <View style={styles.titleContainer}>
          <Heading6 style={styles.titleText}>Cart</Heading6>
          {products.length > 0 && (
            <View style={styles.inline}>
              <Subtitle1 style={styles.subTotalText}> Subtotal: </Subtitle1>
              <Heading6 style={styles.subTotalPriceText}>
                {`$ ${parseFloat(Math.round(total * 100) / 100).toFixed(2)}`}
              </Heading6>
            </View>
          )}
        </View>

        {products.length === 0 ? (
          <EmptyState
            showIcon
            iconName={EMPTY_STATE_ICON}
            title="Your Cart is Empty"
            message="Looks like you haven't added anything to your cart yet"
          />
        ) : (
          <Fragment>
            <View style={styles.flex1}>
              <FlatList
                data={products}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderProductItem}
                contentContainerStyle={styles.productList}
              />
            </View>

            <Divider />

            <View>
              <View style={styles.bottomButtonContainer}>
                <Button
                  title="Checkout"
                />
              </View>
            </View>
          </Fragment>
        )}
      </SafeAreaView>
    );
  }
}
