import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
export const ButtonStyle = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    letterSpacing: 5

  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    height: 50,
    width: width - 50,
    borderRadius: 25,
    marginBottom: 20,
  }
};

export const InputStyle = {
  inputStyle: {
    color: 'black',
    padding: Platform.OS === 'ios' ? 10 : 5,
    fontSize: 14,
    backgroundColor: 'white',
    width: width - 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
}

export const SpinnerStyle = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export const SelectRoomStyle = {
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
}

export const MessageStyle = {
  container: { flex: 1 },
  inputContainerStyle : { 
    flex: 1, 
    borderTopWidth: 1, 
    borderTopColor: 'black', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: 20 },
    messageListContainer: { flex: 8, backgroundColor: 'white' },
    inputStyle: { width: width - 110, height: 50 },
    sendButtonStyle: { width: width / 7, height: width / 7 },
    messageItemContainer: { padding: 10, flexDirection: 'row' },
    profileCircle: { height: 40, width: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: 'black' },
    bubleStyle: { marginLeft: 20, padding: 10, borderRadius: 10 }
}

export const LoginStyle = {
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    boldText: { fontWeight: 'bold'}
};

export const RegisterStyle = {
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  boldText: { fontWeight: 'bold'}
};