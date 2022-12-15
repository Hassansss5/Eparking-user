import * as React from 'react';
// import { DataTable } from 'react-native-paper';
import { View, StyleSheet, Text, FlatList, AsyncStorage} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Ngrok_Url } from '../keys';

export default class UserBookingDetailsScreen extends React.Component {
    constructor() 
    {
        super();
        this.state = {
            Data: [
                {
                    key: '1',
                    ParkingName: 'Parking 1',
                    Hours:'1',
                    CarNumber:'abc-123',
                    Date: '02-01-2020',
                },
                {
                    key: '2',
                    ParkingName: 'Parking 2',
                    Hours:'7',
                    CarNumber:'jkl-123',
                    Date: '01-08-2020',
                },
                {
                    key: '3',
                    ParkingName: 'Parking 3',
                    Hours:'3',
                    CarNumber:'qwe-890',
                    Date: '02-01-2019',
                },
                {
                    key: '4',
                    ParkingName: 'Parking 4',
                    Hours:'2',
                    CarNumber:'abc-123',
                    Date: '02-01-2020',
                }
            ],
            data:[],
            isLoaded:true,
        }
    }
    // componentDidMount(){
    //     this.authFetch();
    //  }

    // authFetch = async () => {
    //     const token = await AsyncStorage.getItem("token")
    //     fetch(`http://9465540cc15c.ngrok.io/user/booking/details/${this.state.id}`, {
    //       headers: new Headers({
    //         Authorization: "Bearer " + token
    //       })
    //     }).then(res => res.json())
    //       .then(result => {
    //         this.setState({
    //           isLoaded: false,
    //           data: result
    //         })
    //         // console.log('this is fname:',this.state.fName);
    //         // console.log('this is lname:',this.state.lName);
    //         // console.log('this is phone:',this.state.phoneNo);
    //         // console.log('this is email:',this.state.email);
    //         // console.log('this is id:',this.state.id);
    //         console.log('from booking screen',this.state.data);
    //       })
    //   }
    
    render() {
        return (
            <View style={{flex:1,marginTop:40, backgroundColor:'#fff'}}>
                <Text style={{fontSize:35, textAlign:"center", letterSpacing:1, color: '#FFBE59'  }}>Booking Details</Text>
                <FlatList
                keyExtractor={this.state.Data.key}
                    data={this.state.Data}
                    renderItem={({ item }) => {
                        return (
                            <View style={{flex:1, borderWidth:1, borderBottomColor:'#FF9C00', borderTopColor:'#fff', borderRightColor:'#fff', borderLeftColor:'#fff'}}>
                                <View style={{ marginBottom: 20, marginTop: 20, marginLeft:15 }}>
                                <View>
                                    <Text style={style.textTitle}>Parking Place Name:</Text>
                                    <Text style={style.text}>{item.ParkingName}</Text>
                                </View>
                                <View>
                                <Text style={style.textTitle}>Hours:</Text>
                                <Text style={style.text}>{item.Hours}</Text>
                                </View> 
                                <View>
                                <Text style={style.textTitle}>CarNumber:</Text>
                                <Text style={style.text}>{item.CarNumber}</Text>
                                </View>
                                <View>
                                <Text style={style.textTitle}>Date:</Text>
                                <Text style={style.text}>{item.Date}</Text>
                                </View>
                                </View>
                            </View>
                        )
                    }}
                ></FlatList>
            </View>
        );
    }
}

// UserBookingDetailsScreen.navigationOptions = () => {
//     return {
//         tabBarLabel: 'Details', 
//         tabBarIcon: ({ tintColor }) => (
//             // <Ionicons name="ios-home" color={tintColor} size={25} />
//             <Feather
//                 name='info'
//                 color={tintColor}
//                 size={25}
//               />
//         ),
//         tabBarOptions: {
//             activeTintColor: '#006F9C',
//             labelStyle: {
//               fontSize: 12,
//             },
//             style: {
//               backgroundColor: '#fff',
//             },
//           }
//     }
//   }


const style = StyleSheet.create({
    text: {
        paddingBottom:6,
        letterSpacing:1,
        fontSize:18,
        color: '#006F9C'
    },
    textTitle: {
        paddingBottom:6,
        letterSpacing:1,
        fontSize:21,
        color: '#006F9C',
        fontWeight: "bold"
    }
});