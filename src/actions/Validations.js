import { Alert } from 'react-native';

export const registerValidation = (username, email, password, passwordConfirm) => {
    if (password.length >= 6) {
        if (validateEmail(email)) {
            if (password === passwordConfirm) {
                if (email !== '' && password !== '' && username !== '') {
                    return true
                } else {
                    Alert.alert('Please, you should fill all inputs!')
                }
            } else {
                Alert.alert('Your password not confirm!')
            }

        } else {
            Alert.alert('Please fill correct email adress!')
        }
    } else {
        Alert.alert('Your password should be minimum 6-digits!')
    }
}

export const loginValidation = (email, password) => {
    if (password.length >= 6) {
        if (validateEmail(email)) {
            if (email !== '' && password !== '') {
                return true
            } else {
                Alert.alert('Please, you should fill all inputs!')
            }
        } else {
            Alert.alert('Please fill correct email adress!')
        }
    } else {
        Alert.alert('Your password should be minimum 6-digits!')
    }
}


const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}