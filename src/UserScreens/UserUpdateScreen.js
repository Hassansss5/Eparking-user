// // import React from 'react';
// // import { StyleSheet, Text, Image, View, Alert, TouchableOpacity, KeyboardAvoidingView, TextInput  } from 'react-native';
// // import FontAwesome from 'react-native-vector-icons/FontAwesome';
// // import Feather from 'react-native-vector-icons/Feather';
// // import * as Animatable from 'react-native-animatable';

// // export default class UserUpdateScreen extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       check_textInputChange: false,
// //       check_firstName: false,
// //       password: '',
// //       secureTextEntry: true
// //     }
// //   }

// //   textInputChange(value) {
// //     if (value.length !== 0) {
// //       this.setState({
// //         check_textInputChange: true

// //       })
// //     }
// //     else {
// //       this.setState({
// //         check_textInputChange: false
// //       })
// //     }
// //   }


// //   firstName(value) {
// //     if (value.length !== 0) {
// //       this.setState({
// //         check_firstName: true
        
// //       })
// //     }
// //     else {
// //       this.setState({
// //         check_firstName: false
// //       })
// //     }
// //   }

// //   secureTextEntry() {
// //     this.setState({
// //       secureTextEntry: !this.state.secureTextEntry
// //     })
// //   }


// //   render() {
// //     return (
// //       <KeyboardAvoidingView behavior='position' style={styles.container}>
// //         <Animatable.View  animation='fadeInUpBig'  >
// //           <Text style={styles.text_footer}>FIRST NAME</Text>
// //           <View style={styles.action} >
// //             <FontAwesome
// //               name='user-o'
// //               color='#006F9C'
// //               size={22}
// //             />
// //             <TextInput
// //               placeholder='Your First Name'
// //               style={styles.firstName}
// //               onChangeText={(text) => this.firstName(text)}
// //             />
// //             {this.state.check_firstName ?
// //             <Animatable.View  animation='bounceIn'>
// //               <Feather
// //                 name='check-circle'
// //                 color='green'
// //                 size={22}
// //               />
// //               </Animatable.View>
// //               : null}
              
// //           </View>
// //           <Text style={styles.text_footer}>LAST NAME</Text>
// //           <View style={styles.action} >
// //             <FontAwesome
// //               name='user-o'
// //               color='#006F9C'
// //               size={22}
// //             />
// //             <TextInput
// //               placeholder='Your Last Name'
// //               style={styles.textInput}
// //               onChangeText={(text) => this.textInputChange(text)}
// //             />
// //             {this.state.check_textInputChange ?
// //             <Animatable.View  animation='bounceIn'>
// //               <Feather
// //                 name='check-circle'
// //                 color='green'
// //                 size={22}
// //               />
// //               </Animatable.View>
// //               : null}
              
// //           </View>
// //           <Text style={styles.text_footer}>E-MAIL</Text>
// //           <View style={styles.action} >
// //             <FontAwesome
// //               name='user-o'
// //               color='#006F9C'
// //               size={22}
// //             />
// //             <TextInput
// //               placeholder='Your Email'
// //               style={styles.textInput}
// //               onChangeText={(text) => this.textInputChange(text)}
// //             />
// //             {this.state.check_textInputChange ?
// //             <Animatable.View  animation='bounceIn'>
// //               <Feather
// //                 name='check-circle'
// //                 color='green'
// //                 size={22}
// //               />
// //               </Animatable.View>
// //               : null}
              
// //           </View>
// //           <Text style={styles.text_footer}>PHONE NO</Text>
// //           <View style={styles.action} >
// //             <FontAwesome
// //               name='user-o'
// //               color='#006F9C'
// //               size={22}
// //             />
// //             <TextInput
// //               placeholder='Your Phone No'
// //               style={styles.textInput}
// //               onChangeText={(text) => this.textInputChange(text)}
// //             />
// //             {this.state.check_textInputChange ?
// //             <Animatable.View  animation='bounceIn'>
// //               <Feather
// //                 name='check-circle'
// //                 color='green'
// //                 size={22}
// //               />
// //               </Animatable.View>
// //               : null}
              
// //           </View>
// //           <Text style={[styles.text_footer, {  }]}>PASSWORD</Text>
// //           <View style={styles.action}>
// //             <Feather
// //               name='lock'
// //               color='#006F9C'
// //               size={22}
// //             />
// //             {this.state.secureTextEntry ?
// //               <TextInput
// //                 placeholder='Your Password'
// //                 secureTextEntry={true}
// //                 style={styles.textInput}
// //                 value={this.state.password}
// //                 onChangeText={(text) => this.setState({
// //                   password: text
// //                 })}
// //               />
// //               :
// //               <TextInput
// //                 placeholder='Your Password'
// //                 style={styles.textInput}
// //                 value={this.state.password}
// //                 onChangeText={(text) => this.setState({
// //                   password: text
// //                 })}
// //               />}
// //             <TouchableOpacity onPress={() => this.secureTextEntry()}>
// //               {this.state.secureTextEntry ?
// //                 <Feather
// //                   name='eye-off'
// //                   color='#006F9C'
// //                   size={22}
// //                 />
// //                 :
// //                 <Feather
// //                   name='eye'
// //                   color='#006F9C'
// //                   size={22}
// //                 />
// //               }
// //             </TouchableOpacity>
// //           </View>
// //           <TouchableOpacity style={styles.buttonlogin} onPress={() => this.props.navigation.navigate('UserProfile')}>
// //             <Text style={styles.textlogin}>
// //               Update
// //          </Text>
// //           </TouchableOpacity>
// //         </Animatable.View>
// //         </KeyboardAvoidingView>
// //     );
// //   };
// // }

// // UserProfileScreen.navigationOptions = () => {
// //   return {
// //     title: 'User Profile',
// //     headerStyle: {
// //       backgroundColor: '#FFBE59',
// //     },
// //     headerTintColor: '#fff',
// //     headerTitleStyle: {
// //       letterSpacing: 1,
// //       fontSize: 20,
// //       flex: 1,
// //       textAlign: "center",
// //     },
// //   }
// // }



// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     paddingHorizontal: 25,
// //     paddingTop:'25%'
// //   },
// //   footer: {
// //     flex: 5,
// //     backgroundColor: '#fff',
// //     borderTopRightRadius: 40,
// //     borderTopLeftRadius: 40,
// //     paddingHorizontal: 20,
// //     paddingVertical:50,
// //     borderColor:'blue',
// //     borderWidth:5,
// //   },
// //   text_header: {
// //     color: '#fff',
// //     fontSize: 40,
// //     fontWeight: "bold",
// //     letterSpacing: 1,
// //     textAlign: "center"
// //   },
// //   text_footer: {
// //     color: '#006F9C',
// //     fontSize: 17,
// //     marginBottom:10,
    
// //     paddingTop:20
// //   },
// //   action: {
// //     flexDirection: 'row',
// //     borderBottomWidth: 2,
// //     borderBottomColor: '#FFBE59',
// //     paddingBottom: 5,
// //     color: 'black',
// //   },
// //   textInput: {
// //     flex: 1,
// //     paddingLeft: 15,
// //     color: '#FF9C00',
// //   },
// //   buttonlogin: {
// //     width: '100%',
// //     height: 45,
// //     borderColor: '#006F9C',
// //     backgroundColor: '#006F9C',
// //     borderRadius: 12,
// //     paddingTop: 10,
// //     marginTop: 50
// //   },
// //   buttonSignUp: {
// //     width: '100%',
// //     height: 45,
// //     borderColor: '#006F9C',
// //     backgroundColor: '#006F9C',
// //     borderRadius: 12,
// //     paddingTop: 10,
// //     marginTop: 20
// //   },
// //   textlogin: {
// //     color: 'white',
// //     fontSize: 18,
// //     textAlign: 'center',
// //     letterSpacing: 1
// //   },
// //   LogoImage: {
// //     marginLeft: '14%',
// //     marginBottom: -60,
// //     width: 265,
// //     height: 190,
// //   },

// // });

// import React from 'react';
// import { StyleSheet, Text, Image, View, Alert, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard,AsyncStorage } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather'
// import * as Animatable from 'react-native-animatable';


// class UserUpdateScreen extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       phoneNo: '',
//       password: '',
//       firstNameErr: '',
//       lastNameErr: '',
//       emailErr: '',
//       emptyfirstName: '',
//       emptylastName: '',
//       emptyEmail: '',
//       emptyPhone: '',
//       emptyPassword: ''
//     }
//   }
//   firstNameValidator() {
//     if (this.state.firstName == "") {
//       this.setState({ emptyfirstName: 'First Name Field Should Not be Empty' })
//     }
//     else {
//       this.setState({ emptyfirstName: '' });
//     }
//   }
//   lastNameValidator() {
//     if (this.state.lastName == "") {
//       this.setState({ emptylastName: 'Last Name Field Should Not be Empty' })
//     }
//     else {
//       this.setState({ emptylastName: '' });
//     }
//   }
//   emailValidator() {
//     if (this.state.email == "") {
//       this.setState({ emptyEmail: 'Email Field Should Not be Empty' })
//     }
//     else {
//       this.setState({ emptyEmail: '' });
//     }
//   }
//   phoneValidator() {
//     if (this.state.phoneNo == "") {
//       this.setState({ emptyPhone: 'Phone No Field Should Not be Empty' })
//     }
//     else {
//       this.setState({ emptyPhone: '' });
//     }
//   }
//   passworValidator() {
//     if (this.state.password == "") {
//       this.setState({ emptyPassword: 'Password Field Should Not be Empty' })
//     }
//     else {
//       this.setState({ emptyPassword: '' });
//     }
//   }

//   submit = async () => {
//     let firstNameRjx = /^[a-zA-Z]+$/;
//     let lastNameRjx = /^[a-zA-Z]+$/;
//     let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     let passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
//     let isValidfirstName = firstNameRjx.test(this.state.firstName);
//     let isValidlastName = lastNameRjx.test(this.state.lastName);
//     let isValidemail = emailPattern.test(this.state.email);
//     let isValidpassword = passwordPattern.test(this.state.password);
//     if (!isValidfirstName) {
//       // this.setState({firstNameErr:'First Name Should be Alphabatic'});
//       alert('First Name Should be Alphabatic');
//       Keyboard.dismiss();
//     }
//     else if (!isValidlastName) {
//       // this.setState({lastNameErr:'Last Name Should be Alphabatic'});
//       alert('Last Name Should be Alphabatic');
//       Keyboard.dismiss();
//     }
//     else if (!isValidemail) {
//       // this.setState({emailErr:'Provide Valid Email'});
//       alert('Provide Valid Email. ' + ' Email Should be According to Email Format');
//       Keyboard.dismiss();
//     }
//     else if (!isValidpassword) {
//       // this.setState({emailErr:'Provide Valid Email'});
//       alert('Password Should Contain at least one number, one lowercase and one uppercase letter, Total six characters');
//       Keyboard.dismiss();
//     }
//     // else {
//     //     fetch("http://44902d79.ngrok.io/user/signup",
//     //       {
//     //         method: "POST",
//     //         headers: {
//     //           'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify({
//     //           firstName: this.state.firstName,
//     //           lastName: this.state.lastName,
//     //           email: this.state.email,
//     //           phoneNo: this.state.phoneNo,
//     //           password: this.state.password
//     //         }
//     //         )
//     //       })
//     //       .then(res => res.json())
//     //       .then(async (data) => {
//     //         try {
//     //           alert(`Name : ${this.state.firstName}  ${this.state.lastName} your Account Created successfully`);
//     //           await AsyncStorage.setItem('token', data.token);
//     //           this.props.navigation.navigate('UserLoginScreen');
//     //         } catch (e) {
//     //           console.log('Error: ', e);
//     //         }
//     //       })
//     // }
//   }

//   render() {
//     return (
//       <KeyboardAvoidingView behavior='position' style={styles.container} >
//         <Animatable.View animation='fadeInUpBig'  >
//           <Text style={styles.text_footer}>FIRST NAME</Text>
//           <View style={styles.action} >
//             <FontAwesome
//               name='user-o'
//               color='#006F9C'
//               size={22}
//             />
//             <TextInput
//               placeholder='Your First Name'
//               onBlur={() => this.firstNameValidator()}
//               style={styles.textInput}
//               onChangeText={(text) => { this.setState({ firstName: text }) }}
//             />
//           </View>
//           <Text style={{ color: 'red' }}>{this.state.firstNameErr}{this.state.emptyfirstName}</Text>
//           <Text style={styles.text_footer}>LAST NAME</Text>
//           <View style={styles.action} >
//             <FontAwesome
//               name='user-o'
//               color='#006F9C'
//               size={22}
//             />
//             <TextInput
//               placeholder='Your Last Name'
//               onBlur={() => this.lastNameValidator()}
//               style={styles.textInput}
//               onChangeText={(text) => { this.setState({ lastName: text }) }}
//             />
//           </View>
//           <Text style={{ color: 'red' }}>{this.state.lastNameErr}{this.state.emptylastName}</Text>
//           <Text style={styles.text_footer}>E-MAIL</Text>
//           <View style={styles.action} >
//             <Feather
//               name='mail'
//               color='#006F9C'
//               size={22}
//             />
//             <TextInput
//               placeholder='Your Email'
//               onBlur={() => this.emailValidator()}
//               style={styles.textInput}
//               onChangeText={(text) => { this.setState({ email: text }) }}
//             />
//           </View>
//           <Text style={{ color: 'red' }}>{this.state.emptyEmail}</Text>
//           <Text style={styles.text_footer}>PHONE NO</Text>
//           <View style={styles.action} >
//             <Feather
//               name='phone'
//               color='#006F9C'
//               size={22}
//             />
//             <TextInput
//               placeholder='Your Phone No'
//               onBlur={() => this.phoneValidator()}
//               style={styles.textInput}
//               onChangeText={(text) => { this.setState({ phoneNo: text }) }}
//               keyboardType='numeric'
//             />
//           </View>
//           <Text style={{ color: 'red' }}>{this.state.emptyPhone}</Text>
//           <Text style={[styles.text_footer,]}>PASSWORD</Text>
//           <View style={styles.action}>
//             <Feather
//               name='lock'
//               color='#006F9C'
//               size={22}
//             />
//             <TextInput
//               placeholder='Your Password'
//               onBlur={() => this.passworValidator()}
//               secureTextEntry={true}
//               style={styles.textInput}
//               onChangeText={(text) => { this.setState({ password: text }) }}
//             />
//           </View>
//           <Text style={{ color: 'red' }}>{this.state.emptyPassword}</Text>
//           <TouchableOpacity style={styles.buttonlogin} onPress={() => { this.submit() }}>
//             <Text style={styles.textlogin}>
//               Sign Up
//          </Text>
//           </TouchableOpacity>
//         </Animatable.View>
//       </KeyboardAvoidingView>
//     );
//   }
// }

// UserUpdateScreen.navigationOptions = () => {
//   return {
//     title: 'User Update',
//     headerStyle: {
//       backgroundColor: '#FFBE59',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       letterSpacing: 1,
//       fontSize: 20,
//       flex: 1,
//       textAlign: "center",
//     },
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 25,
//     paddingTop: '34%'
//   },
//   footer: {
//     flex: 5,
//     backgroundColor: '#fff',
//     borderTopRightRadius: 40,
//     borderTopLeftRadius: 40,
//     paddingHorizontal: 20,
//     paddingVertical: 50,
//     borderColor: 'blue',
//     borderWidth: 5,
//   },
//   text_header: {
//     color: '#fff',
//     fontSize: 40,
//     fontWeight: "bold",
//     letterSpacing: 1,
//     textAlign: "center"
//   },
//   text_footer: {
//     color: '#006F9C',
//     paddingBottom: 8,
//     fontSize: 17,
//     paddingTop: 10
//   },
//   action: {
//     flexDirection: 'row',
//     borderBottomWidth: 2,
//     borderBottomColor: '#FFBE59',
//     paddingBottom: 5,
//     color: 'black',
//   },
//   textInput: {
//     flex: 1,
//     paddingLeft: 15,
//     color: '#FF9C00',
//   },
//   buttonlogin: {
//     width: '100%',
//     height: 45,
//     borderColor: '#006F9C',
//     backgroundColor: '#006F9C',
//     borderRadius: 12,
//     paddingTop: 10,
//     marginTop: 25
//   },
//   buttonSignUp: {
//     width: '100%',
//     height: 45,
//     borderColor: '#006F9C',
//     backgroundColor: '#006F9C',
//     borderRadius: 12,
//     paddingTop: 10,
//     marginTop: 20
//   },
//   textlogin: {
//     color: 'white',
//     fontSize: 18,
//     textAlign: 'center',
//     letterSpacing: 1
//   },
//   LogoImage: {
//     marginLeft: '14%',
//     marginBottom: -60,
//     width: 265,
//     height: 190,
//   },

// });

// export default UserUpdateScreen;
import React from 'react';
import { StyleSheet, Text, Image, View, Alert, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard,AsyncStorage } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';
import { Ngrok_Url } from '../keys';

class UserUpdateScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNo: '',
      password: '',
      firstNameErr: '',
      lastNameErr: '',
      emailErr: '',
      emptyfirstName: '',
      emptylastName: '',
      emptyEmail: '',
      emptyPhone: '',
      emptyPassword: '',
      isLoaded:true,
      fName:'',
      lName:'',
      Email:'',
      phone:'',
      pass:'',
      id:''
    }
  }
   
  componentDidMount(){
   this.authFetch();
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
          fName:result.firstName,
          lName:result.lastName,
          Email:result.email,
          phone:result.phoneNo,
          pass:result.password,
          id:result.id
        })
        console.log(this.state.id);
      })
  }



  firstNameValidator() {
    if (this.state.fName == "") {
      this.setState({ emptyfirstName: 'First Name Field Should Not be Empty' })
    }
    else {
      this.setState({ emptyfirstName: '' });
    }
  }
  lastNameValidator() {
    if (this.state.lName == "") {
      this.setState({ emptylastName: 'Last Name Field Should Not be Empty' })
    }
    else {
      this.setState({ emptylastName: '' });
    }
  }
  emailValidator() {
    if (this.state.Email == "") {
      this.setState({ emptyEmail: 'Email Field Should Not be Empty' })
    }
    else {
      this.setState({ emptyEmail: '' });
    }
  }
  phoneValidator() {
    if (this.state.phone == "") {
      this.setState({ emptyPhone: 'Phone No Field Should Not be Empty' })
    }
    else {
      this.setState({ emptyPhone: '' });
    }
  }
  passworValidator() {
    if (this.state.pass == "") {
      this.setState({ emptyPassword: 'Password Field Should Not be Empty' })
    }
    else {
      this.setState({ emptyPassword: '' });
    }
  }

  submit =  () => {
    let firstNameRjx = /^[a-zA-Z]+$/;
    let lastNameRjx = /^[a-zA-Z]+$/;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    let isValidfirstName = firstNameRjx.test(this.state.fName);
    let isValidlastName = lastNameRjx.test(this.state.lName);
    let isValidemail = emailPattern.test(this.state.Email);
    let isValidpassword = passwordPattern.test(this.state.pass);
    if (!isValidfirstName) {
      // this.setState({firstNameErr:'First Name Should be Alphabatic'});
      alert('First Name Should be Alphabatic');
      Keyboard.dismiss();
    }
    else if (!isValidlastName) {
      // this.setState({lastNameErr:'Last Name Should be Alphabatic'});
      alert('Last Name Should be Alphabatic');
      Keyboard.dismiss();
    }
    else if (!isValidemail) {
      // this.setState({emailErr:'Provide Valid Email'});
      alert('Provide Valid Email. ' + ' Email Should be According to Email Format');
      Keyboard.dismiss();
    }
    else if (!isValidpassword) {
      // this.setState({emailErr:'Provide Valid Email'});
      alert('Password Should Contain at least one number, one lowercase and one uppercase letter, Total six characters');
      Keyboard.dismiss();
    }
    else {
        fetch(`${Ngrok_Url}/user/update/${this.state.id}`,
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: this.state.fName,
              lastName: this.state.lName,
              email: this.state.Email,
              phoneNo: this.state.phone,
              password: this.state.pass
            }
            )
          })
          .then(res => res.text())
          .then(() => {
            try {
              alert(`Name : ${this.state.fName}  ${this.state.lName} your Account Updated successfully`);
              // await AsyncStorage.setItem('token', data.token);
              this.props.navigation.navigate('UserProfile');
            } catch (e) {
              console.log('Error: ', e);
            }
          })
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='position' style={styles.container} >
        <Animatable.View animation='fadeInUpBig'  >
          <Text style={styles.text_footer}>FIRST NAME</Text>
          <View style={styles.action} >
            <FontAwesome
              name='user-o'
              color='#006F9C'
              size={22}
            />
            <TextInput
              placeholder='Your First Name'
              onBlur={() => this.firstNameValidator()}
              style={styles.textInput}
              onChangeText={(text) => { this.setState({ fName: text }) }}
              value={this.state.fName}
            />
          </View>
          <Text style={{ color: 'red' }}>{this.state.firstNameErr}{this.state.emptyfirstName}</Text>
          <Text style={styles.text_footer}>LAST NAME</Text>
          <View style={styles.action} >
            <FontAwesome
              name='user-o'
              color='#006F9C'
              size={22}
            />
            <TextInput
              placeholder='Your Last Name'
              onBlur={() => this.lastNameValidator()}
              style={styles.textInput}
              onChangeText={(text) => { this.setState({ lName: text }) }}
              value={this.state.lName}
            />
          </View>
          <Text style={{ color: 'red' }}>{this.state.lastNameErr}{this.state.emptylastName}</Text>
          <Text style={styles.text_footer}>E-MAIL</Text>
          <View style={styles.action} >
            <Feather
              name='mail'
              color='#006F9C'
              size={22}
            />
            <TextInput
              placeholder='Your Email'
              onBlur={() => this.emailValidator()}
              style={styles.textInput}
              onChangeText={(text) => { this.setState({ Email: text }) }}
              value={this.state.Email}
            />
          </View>
          <Text style={{ color: 'red' }}>{this.state.emptyEmail}</Text>
          <Text style={styles.text_footer}>PHONE NO</Text>
          <View style={styles.action} >
            <Feather
              name='phone'
              color='#006F9C'
              size={22}
            />
            <TextInput
              placeholder='Your Phone No'
              onBlur={() => this.phoneValidator()}
              style={styles.textInput}
              onChangeText={(text) => { this.setState({ phone: text }) }}
              value={this.state.phone}
              keyboardType='numeric'
            />
          </View>
          <Text style={{ color: 'red' }}>{this.state.emptyPhone}</Text>
          <Text style={[styles.text_footer,]}>PASSWORD</Text>
          <View style={styles.action}>
            <Feather
              name='lock'
              color='#006F9C'
              size={22}
            />
            <TextInput
              placeholder='Your Password'
              onBlur={() => this.passworValidator()}
              secureTextEntry={true}
              style={styles.textInput}
              onChangeText={(text) => { this.setState({ pass: text }) }}
            />
          </View>
          <Text style={{ color: 'red' }}>{this.state.emptyPassword}</Text>
          <TouchableOpacity style={styles.buttonlogin} onPress={() => { this.submit() }}>
            <Text style={styles.textlogin}>
              Update
         </Text>
          </TouchableOpacity>
        </Animatable.View>
      </KeyboardAvoidingView>
    );
  }
}

UserUpdateScreen.navigationOptions = () => {
  return {
    title: 'User Update',
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
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingTop: '34%'
  },
  footer: {
    flex: 5,
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 50,
    borderColor: 'blue',
    borderWidth: 5,
  },
  text_header: {
    color: '#fff',
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center"
  },
  text_footer: {
    color: '#006F9C',
    paddingBottom: 8,
    fontSize: 17,
    paddingTop: 10
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#FFBE59',
    paddingBottom: 5,
    color: 'black',
  },
  textInput: {
    flex: 1,
    paddingLeft: 15,
    color: '#FF9C00',
  },
  buttonlogin: {
    width: '100%',
    height: 45,
    borderColor: '#006F9C',
    backgroundColor: '#006F9C',
    borderRadius: 12,
    paddingTop: 10,
    marginTop: 25
  },
  buttonSignUp: {
    width: '100%',
    height: 45,
    borderColor: '#006F9C',
    backgroundColor: '#006F9C',
    borderRadius: 12,
    paddingTop: 10,
    marginTop: 20
  },
  textlogin: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 1
  },
  LogoImage: {
    marginLeft: '14%',
    marginBottom: -60,
    width: 265,
    height: 190,
  },

});

export default UserUpdateScreen;