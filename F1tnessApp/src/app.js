import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Router from './router'

class F1tnessApp extends Component {


    render() {
        return (
            <Router />
        );
    }
}

export default F1tnessApp;