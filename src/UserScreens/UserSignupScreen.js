import React from 'react';
import { StyleSheet, Text, Image, View, Alert, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard,AsyncStorage } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';
import { Ngrok_Url } from '../keys';


class UserSignupScreen extends React.Component {
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
      emptyPassword: ''
    }
  }
  firstNameValidator() {
    if (this.state.firstName == "") {
      this.setState({ emptyfirstName: 'First Name Field Should Not be Empty' })
    }
    else {
      this.setState({ emptyfirstName: '' });
    }
  }
  lastNameValidator() {
    if (this.state.lastName == "") {
      this.setState({ emptylastName: 'Last Name Field Should Not be Empty' })
    }
    else {
      this.setState({ emptylastName: '' });
    }
  }
  emailValidator() {
    if (this.state.email == "") {
      this.setState({ emptyEmail: 'Email Field Should Not be Empty' })
    }
    else {
      this.setState({ emptyEmail: '' });
    }
  }
  phoneValidator() {
    if (this.state.phoneNo == "") {
      this.setState({ emptyPhone: 'Phone No Field Should Not be Empty' })
    }
    else {
      this.setState({ emptyPhone: '' });
    }
  }
  passworValidator() {
    if (this.state.password == "") {
      this.setState({ emptyPassword: 'Password Field Should Not be Empty' })
    }
    else {
      this.setState({ emptyPassword: '' });
    }
  }

  submit = () => {
    let firstNameRjx = /^[a-zA-Z]+$/;
    let lastNameRjx = /^[a-zA-Z]+$/;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    let isValidfirstName = firstNameRjx.test(this.state.firstName);
    let isValidlastName = lastNameRjx.test(this.state.lastName);
    let isValidemail = emailPattern.test(this.state.email);
    let isValidpassword = passwordPattern.test(this.state.password);
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
        fetch(`${Ngrok_Url}/user/signup`,
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              email: this.state.email,
              phoneNo: this.state.phoneNo,
              password: this.state.password
            }
            )
          })
          .then(res => res.json())
          .then(async (data) => {
            try {
              alert(`Name : ${this.state.firstName}  ${this.state.lastName} your Account Created successfully`);
              await AsyncStorage.setItem('token', data.token);
              this.props.navigation.navigate('UserLoginScreen');
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
              onChangeText={(text) => { this.setState({ firstName: text }) }}
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
              onChangeText={(text) => { this.setState({ lastName: text }) }}
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
              onChangeText={(text) => { this.setState({ email: text }) }}
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
              onChangeText={(text) => { this.setState({ phoneNo: text }) }}
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
              onChangeText={(text) => { this.setState({ password: text }) }}
            />
          </View>
          <Text style={{ color: 'red' }}>{this.state.emptyPassword}</Text>
          <TouchableOpacity style={styles.buttonlogin} onPress={() => { this.submit() }}>
            <Text style={styles.textlogin}>
              Sign Up
         </Text>
          </TouchableOpacity>
        </Animatable.View>
      </KeyboardAvoidingView>
    );
  }
}

UserSignupScreen.navigationOptions = () => {
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

export default UserSignupScreen;