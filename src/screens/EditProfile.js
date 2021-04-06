import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native'
import Logo from '../assets/logo.png'
import Icon from 'react-native-vector-icons/FontAwesome'
const EditProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Icon
              name="angle-double-left"
              size={50}
              color="black"
              // onPress={handlePress}
            />
          </TouchableOpacity>
          <View style={styles.contentTitle}>
            <Text style={styles.title}>Edit Profile</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <TouchableOpacity>
            <View
              style={{
                height: 100,
                width: 100,
                borderWidth: 0.3,
                borderColor: 'black',
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ImageBackground
                source={Logo}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
            UserName
          </Text>
          <View style={{ marginTop: 20, width: '100%' }}>
            <View style={styles.action}>
              <Icon
                name="user"
                color="black"
                size={20}
                style={{ marginBottom: 10 }}
              />
              <TextInput
                placeholder="First Name"
                placeholderTextColor="#866666"
                autoCorrect={false}
                style={styles.textInput}
              />
            </View>
            <View style={styles.action}>
              <Icon
                name="user"
                color="black"
                size={20}
                style={{ marginBottom: 10 }}
              />
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="#866666"
                autoCorrect={false}
                style={styles.textInput}
              />
            </View>
            <View style={styles.action}>
              <Icon
                name="phone"
                color="black"
                size={20}
                style={{ marginBottom: 10 }}
              />
              <TextInput
                placeholder="Phone"
                placeholderTextColor="#866666"
                autoCorrect={false}
                style={styles.textInput}
              />
            </View>
            <View style={styles.action}>
              <Icon
                name="envelope"
                color="black"
                size={20}
                style={{ marginBottom: 10 }}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#866666"
                autoCorrect={false}
                style={styles.textInput}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
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
    marginLeft: 100,
    marginHorizontal: 20,
    marginTop: -45,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: 'black',
  },
})
