import firebase from 'firebase'

class Backend {
  uid = ''
  messagesRef = null
  // initialize backend with firebase

  constructor() {
    firebase.initializeApp({
      apiKey:'AIzaSyBLAgk7KKPFhA4M_f5L240Uh8Md-uyL50M ',
      authDomain: 'reactnativedialogflow.firebaseapp.com',
      databaseURL: 'https://reactnativedialogflow.firebaseio.com/',
      storageBucket: 'gs://reactnativedialogflow.appspot.com',
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUid(user.uid)
      } else {
        firebase.auth().signInAnonymously().catch((error) => {
          alert(error.message)
        })
      }
    })
  }
  setUid(value) {
    this.uid = value
  }
  getUid() {
    return this.uid
  }
  // retrieve messages from Backend
  loadMessages(callback) {
    this.messagesRef = firebase.database().ref('messages');
    this.messagesRef.off()
    const onReceive = (data) => {
      const message = data.val()
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user:  {
          _id: message.user._id,
          name: message.user.name,
        },
      })
    }
    this.messagesRef.limitToLast(20).on('child_added', onReceive)
  }
  // sending messages to Backend
  sendMessage(message) {
    for (let i = 0; i < message.length; i++) {
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }
  // closing the connection to Backend
  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off()
    }
  }
}

export default new Backend()