import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Home from './components/home';
import Workouts from './components/workouts';
import Library from './components/library';
import Stats from './components/stats';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene
                    key="tabs"
                    tabs={true}
                    tabBarStyle={{ backgroundColor: "#FFFFFF" }}
                >
                    {/* Tab and it's scenes */}
                    <Scene key="homeView" hideNavBar>
                        <Scene
                            key="homeScene"
                            component={Home}
                            title="Home"
                        />
                    </Scene>
                    {/* Tab and it's scenes */}
                    <Scene key="workoutsView" hideNavBar>
                        <Scene
                            key="workoutsScene"
                            component={Workouts}
                            title="Workouts"
                        />
                    </Scene>
                    {/* Tab and it's scenes */}
                    <Scene key="libraryView" hideNavBar>
                        <Scene
                            key="libraryScene"
                            component={Library}
                            title="Library"
                        />
                    </Scene>
                    {/* Tab and it's scenes */}
                    <Scene key="statsView" hideNavBar>
                        <Scene
                            key="statsScene"
                            component={Stats}
                            title="Stats"
                        />
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;