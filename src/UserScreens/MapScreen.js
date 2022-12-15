import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, FlatList, TouchableWithoutFeedback,TextInput, AsyncStorage } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Feather from 'react-native-vector-icons/Feather';
// import MapViewDirection from 'react-native-maps-directions';


///////
import Dropdown from 'react-native-modal-dropdown';
import Modal from 'react-native-modal';
import * as theme from '../theme/theme';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-ionicons'
import { CenterLocationButton } from '../UserScreens/CenterLocationButton';
import { Ngrok_Url } from '../keys';

///////
/////////
const { Marker } = MapView;

// const des = { latitude: 32.702945, longitude: 73.952968 }

const parkingsSpots = [
  {
    id: 1,
    title: 'Parking 1',
    price: 30,
    rating: 4.2,
    spots: 20,
    free: 10,
    coordinate: {
      latitude: 32.702945,
      longitude: 73.952968,
    },
    distance: 2.5,
    description: `Description about this parking lot

Open year 2022
Secure with CTV`,
  },
  {
    id: 2,
    title: 'Parking 2',
    price: 20,
    rating: 3.8,
    spots: 25,
    free: 20,
    coordinate: {
      latitude: 32.703507,
      longitude: 73.953370,
     },
    distance: 5.5,
    description: `Description about this parking lot

Open year 2022
Secure with CTV`,
  },
  //   {
  //     id: 2,
  //     title: 'Parking ',
  //     price: 20,
  //     rating: 3.8,
  //     spots: 105,
  //     free: 20,
  //     coordinate: {
  //       latitude: 74.071481,
  //       longitude: 32.568678,
  //     },
  //     distance: 5.5,
  //     description: `Description about this parking lot

  // Open year 2012
  // Secure with CTV`,
  //   },
  {
    id: 3,
    title: 'Parking abc',
    price: 70,
    rating: 4.9,
    spots: 50,
    free: 25,
    coordinate: {
      latitude: 32.568678,
      longitude: 74.071481,
    },
    distance: 1.5,
    description: `Description about this parking lot

Open year 2022
Secure with CTV`,
  },

];

const { height, width } = Dimensions.get('screen');


////////
export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    // this.getListCall= this.getListCall.bind(this);
    // GetListItem= this.GetListItem.bind(this);
    this.state = {
      region: null,
      hours: {},
      active: null,
      activeModal: null,
      data:[],
      isLoaded:true,
      pName:'',
      selectedHours:'',
      carNumber:'',
      fName:'',
      lName:'',
      phoneNo:'',
      email:'',
      spots:'',
      id:'',
    }
    this._getLocationAsync();
    const hours = {};

    // parkingsSpots.map(parking => { hours[parking.id] = 1 });

    // this.setState({ hours });
  }


  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted')
      console.log('Permission to access location was denied');

    let location = await Location.getCurrentPositionAsync({ enabledHighAccuracy: true });
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.006,
      longitudeDelta: 0.006
    }
    this.setState({ region: region });
  }

  componentDidMount(){
    this.getListCall();
    this.authFetch();
 }

 getListCall(){
  fetch(`${Ngrok_Url}/map/mark`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: false,
          data : result.data,
        })
        console.log(result);
      });
  }

  authFetch = async () => {
    const token = await AsyncStorage.getItem("token")
    fetch(`${Ngrok_Url}/user/rec/fetch`, {
      headers: new Headers({
        Authorization: "Bearer " + token
      })
    }).then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: false,
          id:result.id,
          fName:result.firstName,
          lName:result.lastName,
          email:result.email,
          phoneNo:result.phoneNo
        })
        console.log('this is fname:',this.state.fName);
        console.log('this is lname:',this.state.lName);
        console.log('this is phone:',this.state.phoneNo);
        console.log('this is email:',this.state.email);
        console.log('this is id:',this.state.id);
      })
  }

  booking(){
    fetch(`${Ngrok_Url}/user/booking/${this.state.id}`,
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              // firstName: this.state.fName,
              // lastName: this.state.lName,
              // phoneNo: this.state.phoneNo,
              // email: this.state.email,
              parkingName:this.state.pName,
              totalHours:this.state.selectedHours,
              carNo:this.state.carNumber
            }
            )
          })
          .then(res => res.json())
          .then(() => {
            try {
              alert('Your Slot Has Been Booked !!!');
              this.props.navigation.navigate("MapScreen");
              console.log(this.state.carNumber);
            } catch (e) {
              console.log('Error: ', e);
            }
          })
  }

  dec(){
    console.log('working');
  }

  /////
  // renderHeader() {
  //   return (
  //     <View style={styles.header}>
  //       <View style={styles.headerLocationInfo}>
  //         <Text style={styles.headerTitle}>Detected location</Text>
  //         <Text style={styles.headerLocation}>San Francisco, US</Text>
  //       </View>
  //     </View>
  //   )
  // }

  renderModal() {
    const { activeModal, hours } = this.state;
    if (!activeModal) return null;

    return (
      <Modal
        isVisible
        useNativeDriver
        style={styles.modalContainer}
        onBackButtonPress={() => this.setState({ activeModal: null })}
        onBackdropPress={() => this.setState({ activeModal: null })}
        onSwipeComplete={() => this.setState({ activeModal: null })}

      >
        <View style={styles.modal}>
          <View>
            <Text style={{ color: '#006F9C', fontSize: theme.SIZES.font * 1.5 }}>
              {activeModal.parkingName}
            </Text>
          </View>
          <View style={{ paddingVertical: theme.SIZES.base }}>
            <Text style={{ color: theme.COLORS.gray, fontSize: theme.SIZES.font * 1.1 }}>
              {activeModal.description}
            </Text>
          </View>
          <View style={styles.modalInfo}>
            <View style={[styles.parkingIcon, { justifyContent: 'flex-start' }]}>
              <Ionicons name='ios-pricetag' size={theme.SIZES.icon * 1.1} color='#006F9C' />
              <Text style={{ fontSize: theme.SIZES.icon * 1.15, marginLeft: 7, color: '#FF9C00' }}>Rs {activeModal.price}</Text>
            </View>
            {/* <View style={[styles.parkingIcon, { justifyContent: 'flex-start' }]}>
              <Ionicons name='ios-pin' size={theme.SIZES.icon * 1.1} color='#006F9C' />
              <Text style={{ fontSize: theme.SIZES.icon * 1.15, marginLeft: 7, color: '#FF9C00' }}> {activeModal.distance}km</Text>
            </View> */}
            <View style={[styles.parkingIcon, { justifyContent: 'flex-start' }]}>
              <Ionicons name='ios-car' size={theme.SIZES.icon * 1.3} color='#006F9C' />
              <Text style={{ fontSize: theme.SIZES.icon * 1.15, marginLeft: 7, color: '#FF9C00' }}> {activeModal.free}/{activeModal.spots}</Text>
            </View>
          </View>
          <View style={styles.modalHours}>
                <TextInput
                placeholder='Enter Hours'
                style={styles.modalInput}
                onChangeText={(text) => { this.setState({ selectedHours: text }) }}
                value={this.state.selectedHours}
                />
                <TextInput
                placeholder='Enter CarNo'
                style={styles.modalInput}
                onChangeText={(text) => { this.setState({ carNumber: text }) }}
                value={this.state.carNumber}
                />
              </View>
          <View>
            <TouchableOpacity style={styles.payBtn} onPress={() => { this.booking(), this.dec() }}>
              <Text style={styles.payText}>
                Proceed to Book
              </Text>
              <FontAwesome name='angle-right' size={theme.SIZES.icon * 1.75} color={theme.COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>

      </Modal>
    )
  }
  renderHours(item) {
    return (
      <Dropdown
        defaultIndex={this.options}
        defaultValue={this.options}
        options={['2 Hours', '4 Hours', '6 Hours', '12 hours', '1 Day']}
        style={styles.hoursDropdown}
        dropdownStyle={styles.hoursDropdownStyle}
      />
      // <View style={styles.hoursDropdown}>
      //   <Text style={styles.hoursTitle}>05:00 hrs</Text>
      // </View>
    )
  }

  renderParking(item) {
    const { hours } = this.state;
    return (
      <TouchableWithoutFeedback key={`parking-${item._id}`} onPress={() => this.setState({ active: item._id })} >
        <View style={[styles.parking, styles.shadow]}>
          <View style={styles.hours}>
            <Text style={styles.hoursTitle}>{item.parkingName}</Text>
            <Text style={styles.hoursTitle}>Avaible Spots : {item.spots}</Text>
            {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {this.renderHours()}
              <Text style={{ color: theme.COLORS.gray }}>hrs</Text>
            </View> */}
          </View>
          <View style={styles.parkingInfoContainer}>
            <View style={styles.parkingInfo}>
              {/* <View style={styles.parkingIcon}>
                <Ionicons name='ios-pricetag' size={theme.SIZES.icon} color={theme.COLORS.gray} />
                <Text>Rs {item.price}</Text>
              </View> */}
              {/* <View style={styles.parkingIcon}>
                <Ionicons name='ios-star-outline' size={20} style={{ color: '#006F9C' }} />
                <Text style={{ marginLeft: 6, color: '#006F9C', marginTop: 2 }}>{item.rating}</Text>
              </View> */}
            </View>
            <TouchableOpacity style={styles.buy} onPress={() => this.setState({ activeModal: item, pName: item.parkingName })}>
              <View style={styles.buyTotal}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {/* <FontAwesome name='dollar' size={theme.SIZES.icon * 1.25} color={theme.COLORS.white} /> */}
                  <Text style={styles.buyTotalPrice}>Rs {item.price}</Text>
                </View>
                {/* <Text style={{ color: theme.COLORS.white }}>
                  {item.price}x{hours[item.id]} hrs
                      </Text> */}
              </View>
              <View style={styles.buyButton}>
                <FontAwesome name='angle-right' size={theme.SIZES.icon * 1.75} color={theme.COLORS.white} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  renderParkings() {
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        style={styles.parkings}
        data={this.state.data}
        extraData={this.state}
        keyExtractor={(item, index) => `${item._id}`}
        renderItem={({ item }) => this.renderParking(item)}
      />
    )
  }
  /////

  centerMap() {
    const { latitude,
      longitude,
      latitudeDelta,
      longitudeDelta
    } = this.state.region;

    this.map.animateToRegion({
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta
    })
  }




  render() {
    return (
      <View style={styles.container}>
        <CenterLocationButton cb={() => { this.centerMap() }} />
        <MapView
          initialRegion={this.state.region}
          showsUserLocation={true}
          showsCompass={true}
          rotateEnabled={false}
          ref={(map) => { this.map = map }}
          style={{ flex: 1 }}> 
          {this.state.data.map(parking =>
          <Marker
            key={`marker-${parking._id}`}
            coordinate={parking.coordinate}>
            <TouchableWithoutFeedback onPress={() => this.setState({ active: parking._id })} >
              <View style={[
                styles.marker,
                styles.shadow,
                this.state.active === parking._id ? styles.active : null
              ]}>
                <Text style={styles.markerPrice}>Rs {parking.price}</Text>
                <Text style={styles.markerStatus}> ({parking.free}/{parking.spots})</Text>
              </View>
            </TouchableWithoutFeedback>
          </Marker>
        )}
        {/* <MapViewDirection
        origin={this.state.region}
        destination={des}
        apikey={'AIzaSyDokFvH7yGFDJIE62WSupWGbJKUJYMxHqk'}
        strokeWidth={3}
        strokeColor="hotpink"
        /> */}
        </MapView>
        {this.renderParkings()}
        {this.renderModal()}
      </View >
    );
  }
}



MapScreen.navigationOptions = () => {
  return {
    title: 'User Sign-Up',
    headerStyle: {
      backgroundColor: '#FFBE59',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      letterSpacing: 1,
      fontSize: 20,
      flex: 1,
      textAlign: "center",
    },
  }
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.white,
    marginTop:-25
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: theme.SIZES.base * 2,
    paddingTop: theme.SIZES.base * 2.5,
    paddingBottom: theme.SIZES.base * 1.5,
  },
  modalInput:{
    borderWidth:1,
    borderColor:'#006F9C',
     height:50,
     marginBottom:15,
     width:'50%',
     marginLeft:'20%'
     ,borderRadius:12,
     textAlign:"center",
     fontSize:20
  },
  headerTitle: {
    color: theme.COLORS.gray,
  },
  headerLocation: {
    fontSize: theme.SIZES.font,
    fontWeight: '500',
    paddingVertical: theme.SIZES.base / 3,
  },
  headerIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  headerLocationInfo: {
    flex: 1,
    justifyContent: 'center'
  },
  map: {
    flex: 3
  },
  parkings: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: theme.SIZES.base * 2,
    paddingBottom: theme.SIZES.base * 2
  },
  parking: {
    flexDirection: 'row',
    backgroundColor: theme.COLORS.white,
    borderColor: '#006F9C',
    borderWidth: 1,
    borderRadius: 6,
    padding: theme.SIZES.base,
    marginHorizontal: theme.SIZES.base * 2,
    width: width - (23 * 2),
  },
  buy: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: theme.SIZES.base * 1.5,
    paddingVertical: theme.SIZES.base,
    backgroundColor: '#FFBE59',
    borderRadius: 6,
  },
  marker: {
    flexDirection: 'row',
    backgroundColor: theme.COLORS.white,
    borderRadius: theme.SIZES.base * 2,
    paddingVertical: 12,
    paddingHorizontal: theme.SIZES.base * 2,
    borderWidth: 1,
    borderColor: theme.COLORS.white,
  },
  markerPrice: {
    color: '#FF9C00',
    fontWeight: 'bold',
  },
  markerStatus: {
    color: '#006F9C'
  },
  shadow: {
    shadowColor: theme.COLORS.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // backgroundColor : '#FFFFFF',
    // // elevation : 15
  },
  active: {
    borderColor: theme.COLORS.red,
  },
  hours: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: theme.SIZES.base / 2,
    justifyContent: 'space-evenly',
  },
  hoursTitle: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
    color: '#006F9C',
  },
  parkingInfoContainer: {
    flex: 1.5,
    flexDirection: 'row'
  },
  parkingInfo: {
    justifyContent: 'space-evenly',
    marginHorizontal: theme.SIZES.base * 1.5
  },
  parkingIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buyTotal: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  buyButton: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buyTotalPrice: {
    color: theme.COLORS.white,
    fontSize: 22,
    fontWeight: '600',
  },
  modalContainer: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modal: {
    flexDirection: 'column',
    height: height * 0.75,
    padding: theme.SIZES.base * 2,
    // width : width,
    backgroundColor: theme.COLORS.white,
    borderTopLeftRadius: theme.SIZES.base,
    borderTopRightRadius: theme.SIZES.base,
  },
  modalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: theme.SIZES.base,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: theme.COLORS.overlay,
    borderBottomColor: theme.COLORS.overlay,
  },
  modalHours: {
    paddingVertical: height * 0.15,
  },
  modalHoursDropdown: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: theme.SIZES.base,
  },
  payBtn: {
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.SIZES.base * 1.5,
    backgroundColor: '#FFBE59',
  },
  payText: {
    fontWeight: '600',
    fontSize: theme.SIZES.base * 1.5,
    color: theme.COLORS.white,
  },
  hoursDropdownStyle: {
    marginLeft: -theme.SIZES.base,
    paddingHorizontal: theme.SIZES.base / 2,
    marginVertical: -(theme.SIZES.base + 1),
  },
  hoursDropdown: {
    borderRadius: theme.SIZES.base / 2,
    borderColor: theme.COLORS.overlay,
    borderWidth: 1,
    paddingHorizontal: theme.SIZES.base,
    paddingVertical: theme.SIZES.base / 1.5,
    marginRight: theme.SIZES.base / 2,
  },
});