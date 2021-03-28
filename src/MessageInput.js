import React from 'react';
import { TextInput } from 'react-native';

class MessageInput extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <TextInput 
      multiline={true}
      value={this.props.value}
      onChangeText={}
    />
  }
}