import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const ProviderProfileScreen = ({ navigation }) => {

  const [modal, setModal] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <LinearGradient 
           colors= {['#FFBE59','#006F9C']}
           style={{height:'40%',borderBottomLeftRadius:50,borderBottomRightRadius:50}}
          />
          <View style={{alignItems:"center"}}>
            <Image style={{width:170,height:170,borderRadius:170/2,marginTop:-100}}
             source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
            />
          </View>
          <TouchableOpacity style={styles.imgbutton} onPress={() => setModal(true)}>
              <Text style={styles.textimg}>
                Upload Image</Text>
            </TouchableOpacity>
            <Modal
              animationType='slide'
              transparent={true}
              visible={modal}
              onRequestClose={() => setModal(false)}
            >
              <View style={styles.modalView}>
                <View style={styles.modelButtoView}>
                  <TouchableOpacity style={styles.modelButton} onPress={() => setModal(false)}>
                    <Text style={styles.modalTextCam}> 
                    <Feather
                      name='camera'
                      color='#fff'
                      size={22}
                    />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modelButton} onPress={() => setModal(false)}>
                    <Text style={styles.textregister}>
                    <Feather
                      name='image'
                      color='#fff'
                      size={22}
                    />
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.modelButtonCancel} onPress={() => setModal(false)}>
                  <Text style={styles.textregister}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <Card style={styles.myCard}>
              <View style={styles.cardContent}>
                <MaterialIcons name='person-outline' size={35} color='#006F9C' style={{marginLeft:15, marginRight:15, marginTop:5}} />
                <Text style={{fontSize:20, paddingTop:11, color:'#FFBE59'}}>Abc</Text>
              </View>
            </Card>
            <Card style={styles.myCard}>
              <View style={styles.cardContent}>
                <MaterialCommunityIcons name='email-outline' size={35} color='#006F9C' style={{marginLeft:15, marginRight:15, marginTop:5}} />
                <Text style={{fontSize:20, paddingTop:11, color:'#FFBE59'}}>Email</Text>
              </View>
            </Card>
        </View>

        <View style={styles.body}>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/home/win8/50/ffffff' }} />
            </View>
            <View style={styles.infoContent}>
              <TouchableOpacity style={styles.buttonupdate} onPress={() => navigation.navigate('ProviderUpdate')}>
                <Text style={styles.textregister}>
                  Update
         </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/settings/win8/50/ffffff' }} />
            </View>
            <View style={styles.infoContent}>
              <TouchableOpacity style={styles.buttonlogout} onPress={() => this.props.navigation.navigate('ProviderLogin')}>
                <Text style={styles.textregister}>
                  Logout
         </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

ProviderProfileScreen.navigationOptions = () => {
  return {
    title: 'Parking Provider Profile',
    headerStyle: {
      backgroundColor: '#FFBE59',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      letterSpacing: 1,
      fontSize: 20,
      textAlign: 'center'
    },
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center'
  },
  modalView: {
    position: 'absolute',
    bottom: 60,
    backgroundColor: '#FFBE59',
    borderRadius: 50,
    width: '90%',
    marginLeft: 20
  },
  header: {
    backgroundColor: "#fff",
    paddingBottom: 50,
    height:440
  },
  myCard:{
    margin:10,
    marginTop:15
  },
  cardContent:{
    flexDirection:"row",
    height:50,
  },
  modelButton: {
    width: '30%',
    height: 45,
    borderColor: '#006F9C',
    backgroundColor: '#006F9C',
    marginLeft: 55,
    marginTop: 50,
    borderRadius: 30,
    paddingTop: 10,
  },
  modelButtonCancel: {
    width: '60%',
    height: 40,
    borderColor: '#006F9C',
    backgroundColor: '#006F9C',
    marginLeft: '22%',
    marginTop: 30,
    borderRadius: 30,
    paddingTop: 10,
    marginBottom: 30
  },
  modalTextCam: {
    color: 'white',
    fontSize: 18,
    textAlign: "center"
  },
  headerContent: {
    alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    marginTop: 50
  },
  modelButtoView: {
    flexDirection: "row",
  },
  name: {
    fontSize: 22,
    color: "#FF9C00",
    fontWeight: '600',
    marginTop: 20
  },
  userInfo: {
    fontSize: 20,
    color: "#006F9C",
    fontWeight: '600',
    marginTop: 10
  },
  body: {
    backgroundColor: "#fff",
    height: 300,
    flexDirection:"row",
    paddingTop:150,
  },
  item: {
    flexDirection: "column",
    padding: 20
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
  },
  textregister: {
    color: 'white',
    fontSize: 18,
    textAlign: "center"
  },
  textimg: {
    color: 'white',
    fontSize: 12,
    textAlign: "center",
    letterSpacing: 1,
  },
  buttonupdate: {
    width:130,
    height: 45,
    borderColor: '#006F9C',
    backgroundColor: '#006F9C',
    borderRadius: 30,
    marginLeft:38,
    paddingTop:10
  },
  imgbutton: {
    width: '30%',
    height: 35,
    borderColor: '#006F9C',
    backgroundColor: '#006F9C',
    marginLeft: '35%',
    marginTop: 20,
    borderRadius: 30,
    paddingTop: 10
  },
  buttonlogout: {
    width: 130,
    height: 45,
    borderColor: '#006F9C',
    backgroundColor: '#006F9C',
    borderRadius: 30,
    paddingTop:10
  },
  // iconContent:{
  //   flex:1,
  //   alignItems:'flex-end',
  //   paddingRight:5,
  // },
  // icon:{
  //   width:30,
  //   height:30,
  //   marginTop:20,
  // },
  // info:{
  //   fontSize:18,
  //   marginTop:20,
  //   color: "#FFFFFF",
  // }
});


export default ProviderProfileScreen;