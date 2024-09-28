import React, { useState } from 'react';
import { View } from 'react-native';
import { Container, TaskText, TaskDone, TaskDelete } from './styles';
import { Feather } from '@expo/vector-icons';

interface TaskProps {
    text: string;
    completeTask: () => void;
}

const Task: React.FC<TaskProps> = ({ text, completeTask }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const toggleCompletion = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <View>
            <Container>
                <TaskDone onPress={toggleCompletion}>
                    <Feather
                        name={isCompleted ? 'check-square' : 'square'}
                        size={24}
                        color="black"
                    />
                </TaskDone>
                <TaskText
                    style={
                        isCompleted
                            ? {
                                  textDecorationLine: 'line-through',
                                  color: '#A9A9A9',
                              }
                            : {}
                    }
                >
                    {text}
                </TaskText>
                <TaskDelete onPress={completeTask}>
                    <Feather name="trash-2" size={24} color="#E36565" />
                </TaskDelete>
            </Container>
        </View>
    );
};

export default Task;
