import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';

const RouterComponent = () => {
    <Router>
        <Scene key="root">
            <Scene
                key="tabs"
                tabs={true}
                tabBarStyle={{ backgroundColor: "#FFFFFF" }}
            >
            </Scene>
        </Scene>
    </Router>
}