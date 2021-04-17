import React from 'react'
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from 'react-native'
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'
import Logo from '../assets/logo.png'
const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Icon
            name="angle-double-left"
            size={30}
            color="white"
          // onPress={handlePress}
          />
        </TouchableOpacity>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Profile</Text>
        </View>
      </View>
      <View style={styles.userAvatarSection}>
        <View style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}>
          <View style={{ flexDirection: 'row', marginLeft: 20, marginBottom: 20 }}>
            <Avatar.Image source={Logo} size={80} />
            <View style={{ marginLeft: 20 }}>
              <Title style={[styles.title, { marginTop: 15, color: 'black', marginBottom: 5 }]}>
                UserName
            </Title>
              <Caption style={styles.caption}>UserName</Caption>
            </View>
          </View>
        </View>
        {/* </View> */}
        {/* <View style={styles.userInfoSection}> */}
        <View style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}>
          <View style={{ marginBottom: 20 }}>
            <View style={styles.row}>
              <Icon name="map-signs" color="#777777" size={20} />
              <Text style={{ color: '#777777', marginLeft: 20 }}>Indonesia</Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#777777" size={20} />
              <Text style={{ color: '#777777', marginLeft: 20 }}>+62909090</Text>
            </View>
            <View style={styles.row}>
              <Icon name="envelope" color="#777777" size={20} />
              <Text style={{ color: '#777777', marginLeft: 20 }}>
                johnwick@gmail.com
          </Text>
            </View>
          </View>
        </View>
        {/* </View> */}
        {/* <View style={styles.userInfoSectionSet}> */}
        <View style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}>
          <View style={{ marginBottom: 20 }}>
            <TouchableRipple>
              <View style={styles.menuItem}>
                <Icon name="heart" color="#ff6347" size={25} />
                <Text style={styles.menuText}>Favorite</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple>
              <View style={styles.menuItem}>
                <Icon name="cog" color="#ff6347" size={25} />
                <Text style={styles.menuText}>Settings</Text>
              </View>
            </TouchableRipple>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20
        }}>
          <View style={styles.editButton}>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
              <Text style={styles.editText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.logoutButton}>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    // marginTop: 40,
    // margin: 20,
  },
  header: {
    margin: 20,
    paddingVertical: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentTitle: {
    width: '90%',
    // marginLeft: 110,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: -25,
    // marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    // textAlign: 'center',
  },
  userAvatarSection: {
    borderRadius: 25,
    width: 370,
    height: 525,
    marginLeft: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 25,
    marginTop: -10,
    borderColor: '#9e9d89',
    shadowOpacity: 50,
    elevation: 10,
  },
  userInfoSection: {
    borderRadius: 25,
    width: 370,
    height: 100,
    marginLeft: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 25,
    marginTop: -10,
    borderColor: '#9e9d89',
    shadowOpacity: 50,
    elevation: 10,
  },
  userInfoSectionSet: {
    borderRadius: 25,
    width: 370,
    height: 100,
    marginLeft: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 25,
    marginTop: -10,
    borderColor: '#9e9d89',
    shadowOpacity: 50,
    elevation: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 50,
    marginVertical: 5,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginLeft: 20,
    marginTop: 20
  },
  menuText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    borderColor: '#FF6347',
    backgroundColor: 'white',
    borderWidth: 0.5,
    marginHorizontal: 20,
    marginTop: 40,
  },
  editText: {
    color: 'orange',
    fontSize: 18,
    fontWeight: 'bold'
  },
  logoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    borderWidth: 0.5,
    marginHorizontal: 20,
    marginTop: 40,
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
})
