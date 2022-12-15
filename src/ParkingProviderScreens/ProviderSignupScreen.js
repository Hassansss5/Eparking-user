import React from 'react';
import { StyleSheet, Text, Image, View, Alert, TouchableOpacity, KeyboardAvoidingView, TextInput  } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export default class ProviderSignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_textInputChange: false,
      check_firstName: false,
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
      <KeyboardAvoidingView behavior='position' style={styles.container} > 
        <Animatable.View  animation='fadeInUpBig'  >
          <Text style={styles.text_footer}>FIRST NAME</Text>
          <View style={styles.action} >
            <FontAwesome
              name='user-o'
              color='#006F9C'
              size={22}
            />
            <TextInput
              placeholder='Your First Name'
              style={styles.textInput}
              onChangeText={(text) => this.textInputChange(text)}
            />
            {this.state.check_textInputChange ?
            <Animatable.View  animation='bounceIn'>
              <Feather
                name='check-circle'
                color='green'
                size={22}
              />
              </Animatable.View>
              : null}
              
          </View>
          <Text style={styles.text_footer}>LAST NAME</Text>
          <View style={styles.action} >
            <FontAwesome
              name='user-o'
              color='#006F9C'
              size={22}
            />
            <TextInput
              placeholder='Your Last Name'
              style={styles.textInput}
              onChangeText={(text) => this.textInputChange(text)}
            />
            {this.state.check_textInputChange ?
            <Animatable.View  animation='bounceIn'>
              <Feather
                name='check-circle'
                color='green'
                size={22}
              />
              </Animatable.View>
              : null}
              
          </View>
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
            <Animatable.View  animation='bounceIn'>
              <Feather
                name='check-circle'
                color='green'
                size={22}
              />
              </Animatable.View>
              : null}
              
          </View>
          <Text style={styles.text_footer}>ADDRESS</Text>
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
          </View>
          <Text style={styles.text_footer}>PHONE NO</Text>
          <View style={styles.action} >
          <Feather
                name='phone'
                color='#006F9C'
                size={22}
              />
            <TextInput
              placeholder='Your Phone No'
              style={styles.textInput}
              onChangeText={(text) => this.textInputChange(text)}
            />
            {this.state.check_textInputChange ?
            <Animatable.View  animation='bounceIn'>
              <Feather
                name='check-circle'
                color='green'
                size={22}
              />
              </Animatable.View>
              : null}
              
          </View>
          <Text style={[styles.text_footer, {  }]}>PASSWORD</Text>
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
                  size={22}
                />
                :
                <Feather
                  name='eye'
                  color='#006F9C'
                  size={22}
                />
              }
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonlogin} onPress={() => this.props.navigation.navigate('ProviderLogin')}>
            <Text style={styles.textlogin}>
              Sign Up
         </Text>
          </TouchableOpacity>
        </Animatable.View>
        </KeyboardAvoidingView>
    );
  };
}

ProviderSignupScreen.navigationOptions = () => {
  return {
    title: 'Parking Provider Sign-Up',
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
    paddingTop:'5%'
  },
  footer: {
    flex: 5,
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: 20,
    paddingVertical:50,
    borderColor:'blue',
    borderWidth:5,
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
    fontSize: 17,
    marginBottom:10,
    
    paddingTop:20
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
    marginTop: 50
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
