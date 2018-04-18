import React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import {
  Actions,
} from 'react-native-router-flux'

export default class Home extends React.Component {
    state = {
      username: '',
    }
  render() {
    return(
      <View style={styles.container}>
        <Text 
          style={styles.title} >
            ENTER YOUR USERNAME : 
        </Text>
        <TextInput 
          autoFocus={true}
          style={styles.usernameInput}
          placeholder='Sandy Lam'
          onChangeText={(text) => {
            this.setState({
              username: text,
            })
          }}
          value={this.state.username}/>
        <TouchableOpacity 
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
        </TouchableOpacity>
      </View>
    )
  }
}

let styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  usernameInput: {
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
  },
  chatButton: {
    marginLeft: 20,
    borderColor: 'red',
    borderWidth: 2,
    width: 80,
  },
  chatButtonText: {
    width: 75,
    fontSize: 20,
    padding: 5,
    color: 'blue',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    fontWeight: 'bold'
  }
})