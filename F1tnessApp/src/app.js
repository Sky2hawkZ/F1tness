if (__DEV__) {
    import('../ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Router from './router'

class F1tnessApp extends Component {


    render() {
        const store = createStore(rootReducer, compose(middleware, Reactotron.createEnhancer()));
        return (
            <Provider store={store}>
                <Router />
            </Provider>

        );
    }
}

export default F1tnessApp;