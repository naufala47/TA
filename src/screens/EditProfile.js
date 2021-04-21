import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import TextInput from '../components/TextInput';
import Logo from '../assets/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IcBack} from '../assets';
import Gap from '../components/Gap';
import axios from 'axios';
import {API_HOST} from '../config';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {getData, showMessage, storeData, useForm} from '../utils';
const EditProfile = ({navigation, route}) => {
  const data = route.params.userProfile;
  const [form, setForm] = useForm({
    name: data.name,
    email: data.email,
    address: data.address,
    city: data.city,
    houseNumber: data.houseNumber,
    phoneNumber: data.phoneNumber,
    profile_photo_url: data.profile_photo_url,
  });

  bs = React.createRef();
  fall = new Animated.Value(1);

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={addPhotoCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={addPhoto}>
        <Text style={styles.panelButtonTitle}>Choose From Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const addPhoto = () => {
    launchImageLibrary(
      {
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200,
      },
      response => {
        if (response.didCancel || response.error) {
          showMessage('Anda tidak memilih photo');
        } else {
          const source = {uri: response.uri};
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };

          setPhoto(source);
          dispatch({type: 'SET_PHOTO', value: dataImage});
          dispatch({type: 'SET_UPLOAD_STATUS', value: true});
        }
      },
    );
  };

  const addPhotoCamera = () => {
    launchCamera(
      {
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200,
      },
      response => {
        if (response.didCancel || response.error) {
          showMessage('Anda tidak memilih photo');
        } else {
          const source = {uri: response.uri};
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };

          setPhoto(source);
          dispatch({type: 'SET_PHOTO', value: dataImage});
          dispatch({type: 'SET_UPLOAD_STATUS', value: true});
        }
      },
    );
  };

  const onSubmit = () => {
    let resultObj = {};
    Object.keys(form).map(obj => {
      if (form[obj]) {
        resultObj[obj] = form[obj];
      }
    });
    getData('token').then(resToken => {
      axios
        .post(`${API_HOST.url}/user`, resultObj, {
          headers: {
            Authorization: resToken.value,
          },
        })
        .then(res => {
          showMessage('Update Success', 'success');
          storeData('userProfile', res.data.data).then(() => {
            navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
          });
        })
        .catch(err => {
          showMessage(
            `${err?.response?.data?.message} on Update Profile API` ||
              'Terjadi kesalahan di API Update Profile',
          );
        });
    });
  };

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View>
        <View style={{margin: 20}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <IcBack />
            </TouchableOpacity>
            <View style={styles.contentTitle}>
              <Text style={styles.title}>Edit Profile</Text>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 40}}>
            <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
              <View style={styles.imageBg}>
                <ImageBackground
                  source={{uri: form.profile_photo_url}}
                  style={{height: 100, width: 100}}
                  imageStyle={{borderRadius: 15}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
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
            <View style={{marginTop: 20, width: '100%'}}>
              <TextInput
                placeholder="Name"
                placeholderTextColor="#866666"
                autoCorrect={false}
                value={form.name}
                onChangeText={value => setForm('name', value)}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#866666"
                autoCorrect={false}
                value={form.email}
                onChangeText={value => setForm('email', value)}
              />
              <TextInput
                placeholder="Alamat"
                placeholderTextColor="#866666"
                autoCorrect={false}
                value={form.address}
                onChangeText={value => setForm('address', value)}
              />
              <TextInput
                placeholder="No. Telp"
                placeholderTextColor="#866666"
                autoCorrect={false}
                value={form.email}
                onChangeText={value => setForm('phoneNumber', value)}
              />
            </View>
          </View>
          <Gap height={20} />
          <TouchableOpacity style={styles.commandButton} onPress={onSubmit}>
            <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default EditProfile;

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
  imageBg: {
    height: 100,
    width: 100,
    borderWidth: 0.3,
    borderColor: 'black',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
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
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
    marginTop: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
});
