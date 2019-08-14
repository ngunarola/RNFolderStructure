
// =======>>>>>>>> LIBRARIES <<<<<<<<=======

import React, { Component } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

// =======>>>>>>>> ASSETS <<<<<<<<=======

import { getLoginRequest } from '../../Redux/Actions'
import { AuthStyle } from './styles';

// =======>>>>>>>> CLASS DECLARATION <<<<<<<<=======

class SignUpScreen extends Component {

    // =======>>>>>>>> STATES DECLARATION <<<<<<<<=======
    state = {

    }

    // =======>>>>>>>> LIFE CYCLE METHODS <<<<<<<<=======
    componentWillMount() {

    }
    componentWillReceiveProps(nextProps) {

    }

    // =======>>>>>>>> FUNCTIONS DECLARATION <<<<<<<<=======
    onLogin() {
        console.log("Login Press", this.props)
        this.props.navigation.navigate('Login')
    }

    // =======>>>>>>>> RENDER INITIALIZE <<<<<<<<=======
    render() {
        return (
            <ScrollView contentContainerStyle={AuthStyle.container} keyboardShouldPersistTaps={'handled'}>
                <TouchableOpacity style={{ shadowColor: '#ccc', elevation: 5, shadowOffset: { width: 0, height: 12 }, shadowRadius: 15, borderRadius: 5, shadowOpacity: 0.52, height: 40, justifyContent: 'center', alignItems: 'center', width: 155, backgroundColor: '#FFFE', margin: 14 }} onPress={this.onLogin.bind(this)}>
                    <Text>LOGIN</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

// =======>>>>>>>> PROPS CONNECTION <<<<<<<<=======
const mapStateToProps = (res) => {
    return {
        Auth: res.Auth
    };
}

// =======>>>>>>>> REDUX CONNECTION <<<<<<<<=======
export default connect(mapStateToProps, { getLoginRequest })(SignUpScreen);