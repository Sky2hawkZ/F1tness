import React from 'react';
import { Text } from 'react-native'
import { Router, Scene, Actions } from 'react-native-router-flux';

import Home from './components/home';

//Workout View & Sub-routes
import Workouts from './components/workouts';
import ActiveWorkout from './components/activeWorkout';
import CreateWorkout from './components/createWorkout';
import EditWorkout from './components/editWorkout';
import EditSet from './components/editSet';

import Library from './components/library';
import AddExercise from './components/addExersice';
import EditExercise from './components/editExersice';

import Stats from './components/stats';
import SettingsModal from './components/settings';

const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
    );
}

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene
                    key="tabs"
                    tabs
                    tabBarStyle={{ backgroundColor: "#FFFFFF" }}
                >
                    {/* Tab and it's scenes */}
                    <Scene key="home" title="Home" icon={TabIcon}>
                        <Scene
                            key="homeScene"
                            component={Home}
                            onRight={() => Actions.settingsModal()} rightTitle="Settings"
                        />
                    </Scene>

                    {/* Tab and it's scenes */}
                    <Scene key="workouts" title="Workouts" icon={TabIcon} hideNavBar>
                        <Scene key="workoutsScene" component={Workouts}>
                            <Scene key="activeWorkoutScene"
                                component={ActiveWorkout} />
                            <Scene key="createWorkoutScene"
                                component={CreateWorkout} />
                            <Scene key="editWorkoutScene"
                                component={EditWorkout}>
                                <Scene key="editSetView"
                                    component={EditSet} />
                            </Scene>
                        </Scene>
                    </Scene>

                    {/* Tab and it's scenes */}
                    <Scene key="libraryView" title="Library" icon={TabIcon} hideNavBar>
                        <Scene
                            key="libraryScene"
                            component={Library}
                        >
                            <Scene key="createExerciseView"
                                component={AddExercise} />
                            <Scene key="editExerciseView"
                                component={EditExercise} />
                        </Scene>
                    </Scene>

                    {/* Tab and it's scenes */}
                    <Scene key="statsView" title="Stats" icon={TabIcon} hideNavBar>
                        <Scene
                            key="statsScene"
                            component={Stats}
                        />
                    </Scene>
                </Scene>
                <Scene
                    key="settingsModal"
                    component={SettingsModal}
                    title="Settings"
                />
            </Scene>
        </Router>
    );
}

export default RouterComponent;