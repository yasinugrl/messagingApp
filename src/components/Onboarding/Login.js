import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Button, Input } from '../../common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { SAVE_USER_INFO } from '../../actions/types'
import { LoginStyle } from '../../styles';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    componentDidMount() {
        AsyncStorage.getItem(SAVE_USER_INFO)
        .then(req => JSON.parse(req))
        .then(json => {
            if (json !== null) {
                const { email, password } = json;
                this.setState({ email, password })
                this.props.login(json.email, json.password)
            } else {

            }
        }).done();
    }

    render() {
        return (
            <View style={LoginStyle.container}>

                <Input
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder='Email'

                />
                <Input
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    secureTextEntry
                    placeholder='Password'


                />
                <Button
                    text={'Login'}
                    onPress={() => this.props.login(this.state.email, this.state.password)}
                    isLoading={this.props.loading}
                />

                <Text>Don't have an account? <Text style={LoginStyle.boldText} onPress={() => Actions.register()}>Sign Up!</Text></Text>

            </View>
        );
    }
}

const mapStatsToProps = ({ authResponse }) => {
    return { loading: authResponse.loading }
}
export default connect(mapStatsToProps, { login })(Login)
