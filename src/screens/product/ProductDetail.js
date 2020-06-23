/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component, Fragment} from 'react';
import {
  ImageBackground,
  Platform,
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

// import components
import Button from '../../components/buttons/Button';
import {Caption, Heading5, SmallText} from '../../components/text/CustomText';
import GradientContainer from '../../components/gradientcontainer/GradientContainer';
import Icon from '../../components/icon/Icon';
import TouchableItem from '../../components/TouchableItem';

// import colors
import Colors from '../../theme/colors';

// ProductB Config
const IOS = Platform.OS === 'ios';
const MINUS_ICON = IOS ? 'ios-remove' : 'md-remove';
const PLUS_ICON = IOS ? 'ios-add' : 'md-add';
const FAVORITE_ICON = IOS ? 'ios-heart' : 'md-heart';
const CLOSE_ICON = IOS ? 'ios-close' : 'md-close';


// ProductB Styles
const styles = StyleSheet.create({
  topArea: {flex: 0, backgroundColor: Colors.primaryColor},
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    width: '100%',
    height: 236,
  },
  productImg: {
    width: '100%',
    height: 236,
    resizeMode: 'cover',
  },
  bottomOverlay: {flex: 1},
  topButton: {
    position: 'absolute',
    top: 16,
    borderRadius: 18,
    backgroundColor: Colors.background,
  },
  left: {left: 16},
  right: {right: 16},
  buttonIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
  },
  favorite: {
    backgroundColor: Colors.secondaryColor,
  },
  productDescription: {
    marginTop: -22,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 16,
    backgroundColor: Colors.surface,
  },
  productTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 10,
  },
  productTitle: {
    fontWeight: '700',
  },
  priceText: {
    fontWeight: '700',
    fontSize: 18,
    color: Colors.black,
  },
  shortDescription: {
    paddingVertical: 8,
    textAlign: 'left',
  },
  caption: {
    padding: 16,
    fontWeight: '700',
    textAlign: 'left',
  },
  dishContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    height: 56,
  },
  indicator: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  emptyIndicator: {
    marginRight: 24,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Color(Colors.black).alpha(0.4),
    backgroundColor: Colors.background,
  },
  filledIndicator: {
    marginRight: 24,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Color(Colors.black).alpha(0.4),
  },
  dishName: {
    top: -1,
    lineHeight: 22,
  },
  dishPrice: {
    color: Colors.secondaryText,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  quantity: {
    top: -1,
    paddingHorizontal: 18,
    fontSize: 18,
    color: Colors.black,
    textAlign: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Color(Colors.primaryColor).alpha(0.88),
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    width: '100%',
    padding: 16,
    backgroundColor: '#efefef',
  },
  bottomArea: {flex: 0, backgroundColor: '#efefef'},
});

// ProductB
export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        imageUri: require('../../assets/img/farmproductimage/apples.png'),
        name: 'Apple',
        description:
          'Apple .....',
        price: 1.2,
        singleProductPrice: 1.2,
        quantity: 1,
        sideDish: 20,
        total: 1.2,
      }
      
    };
  }

  navigateTo = (screen) => () => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };


  onPressIncreaseAmount = () => {
    const {product} = this.state;
    let {quantity} = product;

    quantity += 1;
    product.quantity = quantity;

    const total = quantity * product.singleProductPrice;
    product.total = total;

    this.setState({
      product,
    });
  };

  onPressDecreaseAmount = () => {
    const {product} = this.state;
    let {quantity} = product;

    quantity -= 1;
    quantity = quantity < 1 ? 1 : quantity;
    product.quantity = quantity;

    const total = quantity * product.singleProductPrice;
    product.total = total;

    this.setState({
      product,
    });
  };

  render() {
    const {product} = this.state;
    const {price, description, quantity, total} = product;

    return (
      <View>
        <Text>
           Details of the product info
        </Text>
        <Button  
        onPress={this.navigateTo('HomeNavigator')}
         title = "Back" />
      </View>
    );
  }
}
