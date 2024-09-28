import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
        <View>
            <View>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text>{props.text}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({});
export default Task;
