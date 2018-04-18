import React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'

import {
  Actions,
} from 'react-native-router-flux'

import { Button } from 'react-native-elements'

export default class Home extends React.Component {
    state = {
      username: '',
    }
  render() {
    return(
      <View style={styles.container}>
        <ImageBackground
          style={{
            flex: 1,
          }}
          source={{ uri: 'https://images.unsplash.com/photo-1520865968438-dd8f6dbe79f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=644da8acfa04265e5e0a98446643d254&auto=format&fit=crop&w=2734&q=80' }}
        >
          <Text
            style={styles.title} >
            ENTER YOUR USERNAME :
        </Text>
          <TextInput
            autoFocus={true}
            style={styles.usernameInput}
            placeholder=' S A N D Y   L A M'
            onChangeText={(text) => {
              this.setState({
                username: text,
              })
            }}
            value={this.state.username}
             />
          
            <Button 
              style={styles.chatButtonText}
              raised
              small
              title='C H A T'
              onPress={() => {
                Actions.chat({
                  username: this.state.username
                })
              }}
              >
            </Button>
        </ImageBackground>
      </View>
    )
  }
}

let styles = StyleSheet.create ({
  container: {
    flex: 1,
    //backgroundColor: '#ffffff',
  },
  title: {
    marginTop: 100,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  usernameInput: {
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    fontSize: 20,
    letterSpacing: 2,
    paddingLeft: 5
  },
  chatButton: {
    marginLeft: 20,
    borderColor: 'red',
    borderWidth: 2,
    width: 80,
  },
  chatButtonText: {
    color: 'black',
    marginLeft: 2,
    width: 80,
    fontSize: 20,
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    letterSpacing: 4
  }
})

{/* <TouchableOpacity
            style={styles.chatButton}
            onPress={() => {
              // navigate to second screen and pass username
              console.log(this.state.username)
              Actions.chat({
                username: this.state.username
              })
            }}
          >
            <Text style={styles.chatButtonText}>
              CHAT
            </Text> 

</TouchableOpacity> */}