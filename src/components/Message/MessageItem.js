import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');
import { MessageStyle } from '../../styles';

class MessageItem extends Component {
    render() {
        const { text, cretedAt, user, _id } = this.props.item;
        const user_first_letter = user.name.charAt(0);
        const isMe = this.props.user.username === user.name;
        
        return (
            <View style={[MessageStyle.messageItemContainer, {justifyContent: isMe ? 'flex-end' : 'flex-start'}]}>
            { isMe ?
                null :
                <View style={MessageStyle.profileCircle}>
                    <Text style={{ color: 'black' }}>{user_first_letter}</Text>
                </View>
            }
                <View style={[{ backgroundColor: isMe ? '#1da1f2' : '#cc8931', width: text.length > 40 ? width - 100:  null }, MessageStyle.bubleStyle]}>
                    <Text style={{ color: 'white' }}>{text}</Text>
                </View>

            </View>
            
        );
    }
}

const mapStatsToProps = ({ authResponse }) => {
    return { user: authResponse.user }
}
export default connect(mapStatsToProps, {})(MessageItem)
