import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
class Workouts extends Component {
    render() {
        const openWorkout = () => { Actions.activeWorkoutScene() };
        const createWorkout = () => { Actions.createWorkoutScene() };
        const editWorkout = () => { Actions.editWorkoutScene() }

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Workouts Screen
                </Text>

                <Button color="#841584" title="Active Workout" onPress={openWorkout} />
                <Button color="#841584" title="Create Workouts" onPress={createWorkout} />
                <Button color="#841584" title="Edit Workouts" onPress={editWorkout} />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bb44AA',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
});

export default Workouts;