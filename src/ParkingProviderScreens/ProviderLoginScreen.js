import React from 'react';
import { StyleSheet, Text, Image, View, Alert, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export default class ProviderLoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_textInputChange: false,
      password: '',
      secureTextEntry: true
    }
  }

  textInputChange(value) {
    if (value.length !== 0) {
      this.setState({
        check_textInputChange: true
      })
    }
    else {
      this.setState({
        check_textInputChange: false
      })
    }
  }

  secureTextEntry() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.LogoImage} source={require('../images/epar.png')} />
        </View>
        <Animatable.View animation='fadeInUpBig' style={styles.footer}>
          <Text style={styles.text_footer}>E-MAIL</Text>
          <View style={styles.action} >
            <Feather
              name='mail'
              color='#006F9C'
              size={22}
            />
            <TextInput
              placeholder='Your Email'
              style={styles.textInput}
              onChangeText={(text) => this.textInputChange(text)}
            />
            {this.state.check_textInputChange ?
              <Animatable.View animation='bounceIn'>
                <Feather
                  name='check-circle'
                  color='green'
                  size={22}
                />
              </Animatable.View>
              : null}
          </View>
          <Text style={[styles.text_footer, { marginTop: 40 }]}>PASSWORD</Text>
          <View style={styles.action}>
            <Feather
              name='lock'
              color='#006F9C'
              size={22}
            />
            {this.state.secureTextEntry ?
              <TextInput
                placeholder='Your Password'
                secureTextEntry={true}
                style={styles.textInput}
                value={this.state.password}
                onChangeText={(text) => this.setState({
                  password: text
                })}
              />
              :
              <TextInput
                placeholder='Your Password'
                style={styles.textInput}
                value={this.state.password}
                onChangeText={(text) => this.setState({
                  password: text
                })}
              />}
            <TouchableOpacity onPress={() => this.secureTextEntry()}>
              {this.state.secureTextEntry ?
                <Feather
                  name='eye-off'
                  color='#006F9C'
                  size={25}
                />
                :
                <Feather
                  name='eye'
                  color='#006F9C'
                  size={25}
                />
              }
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ProviderSignupScreen')}>
            <Text style={{ marginTop: 25, fontSize: 14, letterSpacing: 1, color: '#006F9C' }}>Create Account ?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonlogin} onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.textlogin}>
              Sign In
         </Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  };
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBE59',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center"
  },
  text_footer: {
    marginTop: 35,
    color: '#006F9C',
    fontSize: 17,
    marginBottom: 6
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FFBE59',
    paddingBottom: 5,
    color: 'black'
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
    marginTop: 40
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
