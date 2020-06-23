/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  Text,Alert,SafeAreaView,ScrollView,StatusBar,StyleSheet,View,
} from 'react-native';

import Avatar from '../../components/avatar/Avatar';
import Divider from '../../components/divider/Divider';
import {Heading6, Subtitle1, Subtitle2} from '../../components/text/CustomText';
import TouchableItem from '../../components/TouchableItem';
import Colors from '../../theme/colors';
import Button from '../../components/buttons/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainerStyle: {
    paddingBottom: 16,
  },
  titleContainer: {
    paddingHorizontal: 16,
  },
  titleText: {
    paddingTop: 16,
    paddingBottom: 16,
    fontWeight: '700',
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  profileContainer: {
    // height: 88
    paddingVertical: 16,
  },
  leftSide: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileInfo: {
    paddingLeft: 16,
  },
  name: {
    fontWeight: '500',
    textAlign: 'left',
  },
  email: {
    paddingVertical: 2,
  },
  sectionHeader: {
    paddingTop: 16,
    paddingHorizontal: 16,
    textAlign: 'left',
  },
  sectionHeaderText: {
    textAlign: 'left',
  },
  setting: {
    height: 48,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    width: 24,
    height: 24,
  },
});

// SetingsB
export default class Porfile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  navigateTo = (screen) => () => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  logout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {text: 'Cancel', onPress: () => {}, style: 'cancel'},
        {text: 'OK', onPress: () => {}},
      ],
      {cancelable: false},
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.titleContainer}>
            <Heading6 style={styles.titleText}>My Profile</Heading6>
          </View>

          <TouchableItem useForeground onPress={this.navigateTo('EditProfile')}>
            <View style={[styles.row, styles.profileContainer]}>
              <View style={styles.leftSide}>
                <Avatar
                  imageUri={require('../../assets/img/profile_1.jpeg')}
                  size={60}
                  rounded
                />
                <View style={styles.profileInfo}>
                  <Subtitle1 style={styles.name}>User Name</Subtitle1>
                  <Subtitle2 style={styles.email}>
                    testuser@gmail.com
                  </Subtitle2>
                </View>
              </View>
            </View>
          </TouchableItem>

          <Divider />
          <Text>
            This is the place for Order History.
          </Text>
          <Divider />
          <Button
            title = "Log out"
            onPress={this.logout}
       
            setting="Log Out"
            type="logout"
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
