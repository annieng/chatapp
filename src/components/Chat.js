import React from 'react'
import {
  View,
  Text,
  TextInput
} from 'react-native'

import {GiftedChat} from 'react-native-gifted-chat'
import Backend from '../Backend'

export default class Chat extends React.Component {
  state = {
    messages: [],
  };
  componentWillMount() {

  }
  render() {
    return (
      <GiftedChat
        style= {styles.chatContainer}
        messages={this.state.messages}
        onSend={(message) => {
          Backend.sendMessage(message);
        }}
        user={{
          _id: Backend.getUid(),
          name: this.props.name,
        }}
      />
    );
  }
  componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
}

Chat.defaultProps = {
  name: 'SANDY LAM',
};

let styles = {
  chatContainer: {
    backgroundColor: '#ffffff',
    
  },

}
