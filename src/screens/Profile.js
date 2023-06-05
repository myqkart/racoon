import React, { useContext } from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { Avatar, Title, Caption, Text } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';
import CustomButton from '../components/CustomButton';

const ProfileScreen = () => {

  const { setIsLoggedIn } = useContext(AuthContext);

  const logOutFn = () => {
    setIsLoggedIn(false);
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://cdn.dribbble.com/users/594109/screenshots/6266875/racoon_solo_instg.jpg?compress=1&resize=800x600&vertical=top',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>John Doe</Title>
            <Caption style={styles.caption}>john_doe@email.com</Caption>
          </View>
        </View>
        <View style={styles.userInfoBtns}>
          <CustomButton style={{width: 170, height: 58}} label={"Edit Profile"} onPress={() => {}} />
          <CustomButton style={{width: 170, height: 58, backgroundColor: '#d5deff', fontColor: '#446cfa'}} label={"Change Password"} onPress={() => {}} />
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={styles.infoBox}>
            <Title>₹140.50</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Orders</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableOpacity style={styles.menuPess} onPress={() => {}}>
          <View style={styles.menuItem}>
            {/* <Icon name="heart-outline" color="#FF6347" size={25}/> */}
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuPess} onPress={() => {}}>
          <View style={styles.menuItem}>
            {/* <Icon name="credit-card" color="#FF6347" size={25}/> */}
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuPess} onPress={() => {}}>
          <View style={styles.menuItem}>
            {/* <Icon name="account-check-outline" color="#FF6347" size={25}/> */}
            <Text style={styles.menuItemText}>Refer & Earn</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuPess} onPress={() => {}}>
          <View style={styles.menuItem}>
            {/* <Icon name="settings-outline" color="#FF6347" size={25}/> */}
            <Text style={styles.menuItemText}>Dark Mode</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuPess} onPress={() => {logOutFn()}}>
          <View style={styles.menuItem}>
            {/* <Icon name="settings-outline" color="#FF6347" size={25}/> */}
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 35,
    backgroundColor: '#dde2f0'
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    padding: 15,
    backgroundColor: 'white',
    height: 230,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  userInfoBtns: {
    top: 30, 
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    margin: 15,
    flexDirection: 'row',
    height: 100,
    width: '100%'
  },
  infoBox: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuPess: {
    margin: 5,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 15
  },
  menuItem: {
    height: 70,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    justifyContent: 'flex-start',
    alignContent: 'center'
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 26,
  },
});