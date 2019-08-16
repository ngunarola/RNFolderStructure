
// =======>>>>>>>> LIBRARIES <<<<<<<<=======

import React, { Component } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

// =======>>>>>>>> ASSETS <<<<<<<<=======

import { getLoginRequest } from '../../Redux/Actions'
import { AuthStyle } from './styles';
import { SafeAreaView } from 'react-navigation';
import { Colors } from '../../CommonConfig';

// =======>>>>>>>> CLASS DECLARATION <<<<<<<<=======

class LoginScreen extends Component {

    // =======>>>>>>>> STATES DECLARATION <<<<<<<<=======
    state = {
        email: '',
        showPassword: false,
        password: ''
    }

    // =======>>>>>>>> LIFE CYCLE METHODS <<<<<<<<=======
    componentWillMount() {

    }
    componentWillReceiveProps(nextProps) {

    }

    // =======>>>>>>>> FUNCTIONS DECLARATION <<<<<<<<=======
    onLogin() {
        console.log("Login Press")
    }
    navigateTo(screen) {
        this.props.navigation.navigate(screen)
    }
    // =======>>>>>>>> RENDER INITIALIZE <<<<<<<<=======
    render() {
        console.log(global.isConnected, "global.isConnected")
        return (
            <SafeAreaView style={AuthStyle.container}>
                <ScrollView contentContainerStyle={AuthStyle.container} keyboardShouldPersistTaps={'handled'}>
                    <View style={{ justifyContent: 'flex-end', borderColor: '#ccc', borderWidth: 2, alignItems: 'center' }}>
                        <TouchableOpacity style={{ shadowColor: '#ccc', elevation: 2, shadowOffset: { width: 0, height: 5 }, shadowRadius: 10, borderRadius: 5, shadowOpacity: 0.32, height: 40, justifyContent: 'center', alignItems: 'center', width: 155, backgroundColor: Colors.ORANGE, margin: 14 }} onPress={this.onLogin.bind(this)}>
                            <Text style={{ color: Colors.WHITE }}>LOGIN</Text>
                        </TouchableOpacity>
                        <View style={{ backgroundColor: Colors.WHITE, borderWidth: 3, borderColor: Colors.BLUE, height: 40, borderRadius: 20, width: 40, shadowColor: '#ccc', elevation: 2, shadowOffset: { width: 0, height: 5 }, shadowRadius: 10, shadowOpacity: 0.32 }}>

                        </View>
                        <TouchableOpacity style={{ shadowColor: '#ccc', elevation: 2, shadowOffset: { width: 0, height: 5 }, shadowRadius: 10, borderRadius: 5, shadowOpacity: 0.32, height: 40, justifyContent: 'center', alignItems: 'center', width: 155, backgroundColor: Colors.GREEN, margin: 14 }} onPress={() => this.navigateTo('SignUp')}>
                            <Text style={{ color: Colors.WHITE }}>SIGN UP</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </SafeAreaView>
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
export default connect(mapStateToProps, { getLoginRequest })(LoginScreen);