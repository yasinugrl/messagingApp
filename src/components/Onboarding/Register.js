import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, Input } from '../../common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { register } from '../../actions';
import {RegisterStyle } from '../../styles';

class Register extends Component {
    state = {
        userName: '',
        email: '',
        password: '',
        passwordConfirm: ''
    }
    render() {
        return (
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={RegisterStyle.container}>
                <Input
                    value={this.state.userName}
                    onChangeText={(userName) => this.setState({ userName })}
                    placeholder='User Name'

                />

                <Input
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder='Email'
                    keyboardType={'email-address'}

                />
                <Input
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    secureTextEntry
                    placeholder='Password'

                />

                <Input
                    value={this.state.passwordConfirm}
                    onChangeText={(passwordConfirm) => this.setState({ passwordConfirm })}
                    secureTextEntry
                    placeholder='Password Confirm'

                />

                <Button
                    text={'Register'}
                    onPress={() => this.props.register(
                        this.state.userName, 
                        this.state.email, 
                        this.state.password,
                        this.state.passwordConfirm,
                        )
                    }
                    isLoading={this.props.loading}
                />

                <Text>You have an account? <Text style={{ fontWeight: 'bold' }} onPress={() => Actions.pop()}>Sign In!</Text></Text>

            </View>
            </ScrollView>
        );
    }
}

const mapStatsToProps = ({ authResponse }) => {
    return { loading: authResponse.loading }
}
export default connect(mapStatsToProps, { register })(Register)
