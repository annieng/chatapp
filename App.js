import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import {
  Scene,
  Router,
} from 'react-native-router-flux'

import Home from './src/components/Home'
import Chat from './src/components/Chat'

import {
  Platform,
} from 'react-native'

// style-={{paddingTop: Platform.OS === 'ios ? 64 : 54}}

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <Scene key='root'>
          <Scene key='home' component={Home} title='Home'/>
          <Scene key='chat' component={Chat} title='Chat' />
        </Scene>
      </Router>
    )
  } 
}








// export default class App extends React.Component {
  
//   constructor(props) {
  //   super(props);
  //   this.state = { 
  //     text : '',
  //     conversation: [],
  //   }
  // } 

  // onSubmitInput(text) {
  //   this.setState({
  //     conversation: text.push()
  //   })
  // }

  // render() {
  //   return (


      
      // <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'steelblue' }}>
      //   <Header
      //     leftComponent={{ icon: 'menu', color: '#fff' }}
      //     centerComponent={{ text: 'CHAT WITH ME', style: { color: '#fff' } }}
      //     rightComponent={{ icon: 'home', color: '#fff' }}
      //   />

      //   <View style={{ flex: 4, backgroundColor: 'skyblue' }}>
      //     <Text> {this.state.conversation} </Text>
      //   </View>
      //   <View style={{ flex: 2, backgroundColor: 'steelblue'}}>

      //     <TextInput
      //       style={{ margin: 5, height: 180, borderColor: 'skyblue', borderWidth: 2, borderRadius: 20 }}
      //       autoFocus={true}
      //       editable={true}
      //       maxLength={240}
      //       onChangeText={(text) => this.setState({ text })}
      //       value={this.state.text}
      //       onKeyPress={this.onSubmitInput(this.props.text)}
      //       placeholder='CHAT HERE'
      //       placeholderTextColor='white'
      //       keyboardShouldPersistTaps={true}
      //     />
      //   </View>
      // </View>



      
//     );
//   }
// }

