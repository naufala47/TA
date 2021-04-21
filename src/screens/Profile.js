import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IcBackWhite} from '../assets';
import ProfileTabSection from '../components/ProfileTabSection';
import {API_HOST} from '../config';
import {getData, showMessage, storeData} from '../utils';
const Profile = ({navigation}) => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    navigation.addListener('focus', () => {
      updateUserProfile();
    });
  }, [navigation]);

  const updateUserProfile = () => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  };

  // const addPhoto = () => {
  //   launchImageLibrary(
  //     {
  //       quality: 0.5,
  //       maxWidth: 200,
  //       maxHeight: 200,
  //     },
  //     response => {
  //       if (response.didCancel || response.error) {
  //         showMessage('Anda tidak memilih photo');
  //       } else {
  //         const dataImage = {
  //           uri: response.uri,
  //           type: response.type,
  //           name: response.fileName,
  //         };

  //         const photoForUpload = new FormData();
  //         photoForUpload.append('file', dataImage);
  //         getData('token').then(resToken => {
  //           axios
  //             .post(`${API_HOST}/user/photo`, photoForUpload, {
  //               headers: {
  //                 Authorization: resToken.value,
  //                 'Content-Type': 'multipart/form-data',
  //               },
  //             })
  //             .then(res => {
  //               getData('userProfile').then(resUser => {
  //                 showMessage('Update Photo Berhasil', 'success');
  //                 resUser.profile_photo_url = `${API_HOST.storage}/${res.data.data[0]}`;
  //                 storeData('userProfile', resUser).then(() => {
  //                   updateUserProfile();
  //                 });
  //               });
  //             })
  //             .catch(err => {
  //               showMessage(
  //                 `${err?.response?.data?.message} on Update Photo API ` ||
  //                   'Terjadi kesalahan di API Update Photo',
  //               );
  //             });
  //         });
  //       }
  //     },
  //   );
  // };

  // const addPhotoCamera = () => {
  //   launchCamera(
  //     {
  //       quality: 0.5,
  //       maxWidth: 200,
  //       maxHeight: 200,
  //     },
  //     response => {
  //       if (response.didCancel || response.error) {
  //         showMessage('Anda tidak memilih photo');
  //       } else {
  //         const source = {uri: response.uri};
  //         const dataImage = {
  //           uri: response.uri,
  //           type: response.type,
  //           name: response.fileName,
  //         };

  //         setPhoto(source);
  //         dispatch({type: 'SET_PHOTO', value: dataImage});
  //         dispatch({type: 'SET_UPLOAD_STATUS', value: true});
  //       }
  //     },
  //   );
  // };

  // const navigation = useNavigation();
  const signOut = () => {
    // AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
    //   navigation.reset({index: 0, routes: [{name: 'LoginScreen'}]});
    // });
    AsyncStorage.clear();
    navigation.navigate('LoginScreen');
  };

  // const updatePhoto = () => {
  //   ImagePicker.launchImageLibrary(
  //     {
  //       quality: 0.7,
  //       maxWidth: 200,
  //       maxHeight: 200,
  //     },
  //     response => {
  //       if (response.didCancel || response.error) {
  //         showMessage('Anda tidak memilih photo');
  //       } else {
  //         const dataImage = {
  //           uri: response.uri,
  //           type: response.type,
  //           name: response.fileName,
  //         };

  //         const photoForUpload = new FormData();
  //         photoForUpload.append('file', dataImage);
  //         getData('token').then(resToken => {
  //           Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
  //             headers: {
  //               Authorization: resToken.value,
  //               'Content-Type': 'multipart/form-data',
  //             },
  //           })
  //             .then(res => {
  //               getData('userProfile').then(resUser => {
  //                 showMessage('Update Photo Berhasil', 'success');
  //                 resUser.profile_photo_url = `${API_HOST.storage}/${res.data.data[0]}`;
  //                 storeData('userProfile', resUser).then(() => {
  //                   updateUserProfile();
  //                 });
  //               });
  //             })
  //             .catch(err => {
  //               showMessage(
  //                 `${err?.response?.data?.message} on Update Photo API` ||
  //                   'Terjadi kesalahan di API Update Photo',
  //               );
  //             });
  //         });
  //       }
  //     },
  //   );
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <IcBackWhite />
        </TouchableOpacity>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Profile</Text>
        </View>
      </View>
      <View style={styles.userAvatarSection}>
        <View>
          <View
            style={{
              marginTop: 30,
              marginBottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Avatar.Image
              source={{uri: userProfile.profile_photo_url}}
              size={80}
            />
            <View>
              <Title
                style={[
                  styles.title,
                  {
                    justifyContent: 'center',
                    marginVertical: 20,
                    color: 'black',
                    marginBottom: 5,
                  },
                ]}>
                {userProfile.name}
              </Title>
            </View>
          </View>
        </View>
        <View>
          <View style={{marginBottom: 20}}>
            <View style={styles.row}>
              <Icon name="map-signs" color="#777777" size={20} />
              <Text style={{color: '#777777', marginLeft: 20}}>
                {userProfile.address}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#777777" size={20} />
              <Text style={{color: '#777777', marginLeft: 20}}>
                {userProfile.phoneNumber}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="envelope" color="#777777" size={20} />
              <Text style={{color: '#777777', marginLeft: 20}}>
                {userProfile.email}
              </Text>
            </View>
            <View style={styles.editButton}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('EditProfile', {userProfile})
                }>
                <View style={styles.menuItem}>
                  <Icon name="cog" color="#FF6347" size={25} />
                  <Text style={{color: '#777777', marginLeft: 20}}>
                    Settings
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* <ProfileTabSection /> */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View style={styles.logoutButton}>
            <TouchableOpacity onPress={signOut}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

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
    // width: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentTitle: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    // width: '90%',
    // marginLeft: 110,
    marginHorizontal: 130,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  userAvatarSection: {
    borderRadius: 25,
    width: 370,
    height: 525,
    marginHorizontal: 10,
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
    color: 'white',
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
    marginTop: 20,
  },
  menuText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  editButton: {
    flexDirection: 'row',

    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 15,
    // borderRadius: 10,
    // borderColor: '#FF6347',
    // backgroundColor: 'white',
    // borderWidth: 0.5,
    // marginHorizontal: 20,
    // marginTop: 40,
  },
  editText: {
    color: 'orange',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    // borderWidth: 0.5,
    marginHorizontal: 20,
    marginTop: 40,
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
// import axios from 'axios';
// import React, {useEffect, useState} from 'react';
// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import ProfileTabSection from '../components/ProfileTabSection';
// import {API_HOST} from '../config';
// import {getData, showMessage, storeData} from '../utils';

// const Profile = ({navigation}) => {
//   const [userProfile, setUserProfile] = useState({});
//   useEffect(() => {
//     navigation.addListener('focus', () => {
//       updateUserProfile();
//     });
//   }, [navigation]);

//   const updateUserProfile = () => {
//     getData('userProfile').then(res => {
//       console.log('userProfile', res);
//       setUserProfile(res);
//     });
//   };

//   const updatePhoto = () => {
//     ImagePicker.launchImageLibrary(
//       {
//         quality: 0.7,
//         maxWidth: 200,
//         maxHeight: 200,
//       },
//       response => {
//         if (response.didCancel || response.error) {
//           showMessage('Anda tidak memilih photo');
//         } else {
//           const dataImage = {
//             uri: response.uri,
//             type: response.type,
//             name: response.fileName,
//           };

//           const photoForUpload = new FormData();
//           photoForUpload.append('file', dataImage);
//           getData('token').then(resToken => {
//             axios
//               .post(`${API_HOST.url}/user/photo`, photoForUpload, {
//                 headers: {
//                   Authorization: resToken.value,
//                   'Content-Type': 'multipart/form-data',
//                 },
//               })
//               .then(res => {
//                 getData('userProfile').then(resUser => {
//                   showMessage('Update Photo Berhasil', 'success');
//                   resUser.profile_photo_url = `${API_HOST.storage}/${res.data.data[0]}`;
//                   storeData('userProfile', resUser).then(() => {
//                     updateUserProfile();
//                   });
//                 });
//               })
//               .catch(err => {
//                 showMessage(
//                   `${err?.response?.data?.message} on Update Photo API` ||
//                     'Terjadi kesalahan di API Update Photo',
//                 );
//               });
//           });
//         }
//       },
//     );
//   };

//   return (
//     <View style={styles.page}>
//       <View style={styles.profileDetail}>
//         <View style={styles.photo}>
//           <TouchableOpacity onPress={updatePhoto}>
//             <View style={styles.borderPhoto}>
//               <Image
//                 source={{uri: userProfile.profile_photo_url}}
//                 style={styles.photoContainer}
//               />
//             </View>
//           </TouchableOpacity>
//         </View>
//         <Text style={styles.name}>{userProfile.name}</Text>
//         <Text style={styles.email}>{userProfile.email}</Text>
//       </View>
//       <View style={styles.content}>
//         <ProfileTabSection />
//       </View>
//     </View>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   page: {flex: 1},
//   content: {flex: 1, marginTop: 24},
//   profileDetail: {backgroundColor: 'white', paddingBottom: 26},
//   name: {
//     fontSize: 18,
//     fontFamily: 'Poppins-Medium',
//     color: '#020202',
//     textAlign: 'center',
//   },
//   email: {
//     fontSize: 13,
//     fontFamily: 'Poppins-Light',
//     color: '#8D92A3',
//     textAlign: 'center',
//   },
//   photo: {alignItems: 'center', marginTop: 26, marginBottom: 16},
//   borderPhoto: {
//     borderWidth: 1,
//     borderColor: '#8D92A3',
//     width: 110,
//     height: 110,
//     borderRadius: 110,
//     borderStyle: 'dashed',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   photoContainer: {
//     width: 90,
//     height: 90,
//     borderRadius: 90,
//     backgroundColor: '#F0F0F0',
//     padding: 24,
//   },
// });
