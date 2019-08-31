import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { messageSend } from '../../actions';
import { Actions } from 'react-native-router-flux';
import MessageList from './MessageList';
import { MessageStyle } from '../../styles'


class Message extends Component {
    state = {
        message: '',
    }
    render() {
        const { currentUser } = firebase.auth();
        const user = {
            userid: currentUser.uid,
            username: this.props.user.username,
            email: this.props.user.email
        }
        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={MessageStyle.container}>
                <MessageList
                    data={this.props.messages}
                    onChangeText={(message) => this.setState({ message })}
                    messageValue={this.state.message}
                    sendPress={() => {
                        this.props.messageSend(this.props.room, this.state.message, user)
                        this.setState({ message: '' });
                    }}
                />
            </KeyboardAvoidingView>
        );
    }
}

const mapStatsToProps = ({ messageResponse, authResponse }) => {
    console.log('Gelen mesaj datası: ', messageResponse.messages);

    return { messages: messageResponse.messages, user: authResponse.user }
}
export default connect(mapStatsToProps, { messageSend })(Message)
