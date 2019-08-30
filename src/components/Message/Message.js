import React, { Component } from 'react';
import { View, Text, Dimensions, FlatList, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { createMessageRoom } from '../../actions';
import { Input, Button } from '../../common';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');

class Message extends Component {
    state = {
        message: '',
        inputHeigh: 50
    }

    render() {
        return (
            <KeyboardAvoidingView
            behavior="padding" 
            style={{ flex: 1, backgroundColor: '' }}>
                <View style={{ flex: 8 }}>
                    <FlatList

                        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '' }} />}
                        data={this.props.messages}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <View style={{ backgroundColor: '', padding: 20 }}>
                                <Text>{item.text}</Text>
                            </View>}
                        inverted
                        data={
                            this.props.messages.slice().sort(
                                (a, b) => a.timestamp.valueOf() - b.timestamp.valueOf())
                        }
                    />
                </View>

                <View style={{ flex: 1, backgroundColor: '', borderTopWidth: 1, borderTopColor: 'red', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                    <Input
                        inputStyl={{ width: width - 130, height: this.state.inputHeigh }}
                        value={this.state.message}
                        onChangeText={(message) => this.setState({ message })}
                        multiline={true}
                        numberOfLines={2}
                        onFocus={()=> {
                            // this.setState({ inputHeigh: 60 })
                        }}
                    />
                    <Button
                        styl={{ width: width / 4, height: 40 }}
                        text='Send'
                    />

                </View>
            </KeyboardAvoidingView>
        );
    }
}

const mapStatsToProps = ({ messageResponse }) => {
    console.log('Gelen mesaj datas: ', messageResponse.messages);

    return { messages: messageResponse.messages }
}
export default connect(mapStatsToProps, {})(Message)
