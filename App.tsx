import React, { useState } from 'react';
import {
    Platform,
    StatusBar,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Keyboard,
    ScrollView,
} from 'react-native';
import Task from './src/components/Task';
import { Feather } from '@expo/vector-icons';

export default function App() {
    const [task, setTask] = useState('');
    const [taskItems, setTaskItems] = useState<string[]>([]);

    const handleAddTask = () => {
        if (task.trim()) {
            setTaskItems([...taskItems, task]);
            setTask('');
            Keyboard.dismiss();
        }
    };

    const completeTask = (index: number) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === 'android' ? 30 : 10} // Espacemento de 20px para Android e 10px para iOS
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Tarefas de Hoje</Text>
            </View>

            <ScrollView style={styles.scrollView}>
                <View style={styles.taskContainer}>
                    {taskItems.map((item, index) => (
                        <Task
                            key={index}
                            text={item}
                            completeTask={() => completeTask(index)}
                        />
                    ))}
                </View>
            </ScrollView>

            <View style={styles.writeTaskWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicionar Tarefa"
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />

                <TouchableOpacity onPress={handleAddTask}>
                    <View style={styles.addWrapper}>
                        <Feather name="plus" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CDE8FF',
        justifyContent: 'space-between', // Garante que o conteúdo se ajuste adequadamente
    },
    taskWrapper: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 70,
        paddingHorizontal: 20,
        backgroundColor: '#212C33',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFFFFF',
    },
    scrollView: {
        flex: 1,
    },
    taskContainer: {
        paddingTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 16,
    },
    writeTaskWrapper: {
        position: 'relative',
        bottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        width: '75%',
    },
    addWrapper: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
