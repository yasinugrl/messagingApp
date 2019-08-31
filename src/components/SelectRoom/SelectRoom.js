import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { createMessageRoom } from '../../actions';
import { Input, Button } from '../../common';
import { Actions } from 'react-native-router-flux';
import { ROOM_INFO, SAVE_USER_INFO } from '../../actions/types';
import { SelectRoomStyle } from '../../styles';

class SelectRoom extends Component {
    state = {
        room: ''
    }
    joinChat() {
        const { currentUser } = firebase.auth();
        const user = {
            userid: currentUser.uid,
            username: this.props.user.username,
            email: this.props.user.email
        }
        this.props.createMessageRoom(this.state.room, user)
    }
    componentWillMount() {
        AsyncStorage.getItem(ROOM_INFO).then(room => {
            this.setState({ room })
        })
    }
    render() {
        return (
            <View style={SelectRoomStyle.container}>
                <Input
                    value={this.state.room}
                    onChangeText={(room) => this.setState({ room })}
                    placeholder='Enter Chat Room Name...'
                />
                <Button
                    text={'Join Chat'}
                    onPress={() => this.joinChat()}
                    isLoading={this.props.loading}
                />
                <Text style={SelectRoomStyle.logoutText} onPress={() => {
                    AsyncStorage.setItem(SAVE_USER_INFO, JSON.stringify(null))
                    Actions.onboarding({ type: 'reset' });
                }}>Logout</Text>
            </View>
        );
    }
}

const mapStatsToProps = ({ messageResponse, authResponse }) => {
    return { loading: messageResponse.loading, user: authResponse.user }
}
export default connect(mapStatsToProps, { createMessageRoom })(SelectRoom)
