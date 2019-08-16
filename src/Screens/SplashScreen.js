
// =======>>>>>>>> LIBRARIES <<<<<<<<=======

import React, { Component } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import NetInfo from "@react-native-community/netinfo";

// =======>>>>>>>> ASSETS <<<<<<<<=======

import { getLoginRequest, updateNetwork } from '../Redux/Actions'

import { SafeAreaView } from 'react-navigation';
import { Colors } from '../CommonConfig';

// =======>>>>>>>> CLASS DECLARATION <<<<<<<<=======

class SplashScreen extends Component {

    // =======>>>>>>>> STATES DECLARATION <<<<<<<<=======
    state = {
        email: '',
        showPassword: false,
        password: ''
    }

    // =======>>>>>>>> LIFE CYCLE METHODS <<<<<<<<=======

    componentDidMount() {
        console.disableYellowBox = true
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
        setTimeout(() => {
            this.navigateTo('Login')
        }, 500);       
    }
    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }

    // =======>>>>>>>> FUNCTIONS DECLARATION <<<<<<<<=======

    handleConnectivityChange = async isConnected => {
        this.props.updateNetwork(isConnected)
    }

    
    navigateTo(screen) {
        this.props.navigation.navigate(screen)
    }
    // =======>>>>>>>> RENDER INITIALIZE <<<<<<<<=======
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                
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
export default connect(mapStateToProps, { getLoginRequest, updateNetwork })(SplashScreen);