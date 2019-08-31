import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Input, Button } from '../../common';
import MessageItem from './MessageItem';
const { width, height } = Dimensions.get('window');
import { MessageStyle } from '../../styles'

export default class MessageList extends Component {
    render() {
        const { data, sendPress, messageValue, onChangeText } = this.props
        return (
            <View style={MessageStyle.container}>
                <View style={MessageStyle.messageListContainer}>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            <MessageItem
                                item={item}
                                index={index}
                            />
                        }
                        inverted
                    />
                </View>

                <View style={MessageStyle.inputContainerStyle}>
                    <Input
                        inputStyl={MessageStyle.inputStyle}
                        value={messageValue}
                        onChangeText={onChangeText}
                        multiline={true}
                        numberOfLines={2}
                        onFocus={() => {

                        }}
                    />
                    <TouchableOpacity
                        onPress={sendPress}
                        style={{ marginBottom: 10}}
                    >
                        <Image
                            source={require('../../img/send.png')}
                            style={MessageStyle.sendButtonStyle}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
