import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, TaskText, TaskDone, TaskDelete } from './styles';
import { View, Text, StyleSheet } from 'react-native';

// export function Task = (props) => {
//     return (
//         <Container>
//             <TaskDone>
//                 <Feather name="square" size={24} color={'black'} />
//             </TaskDone>
//             <TaskText></TaskText>
//             <TaskDelete>
//                 <Feather name="trash-2" size={24} color={'#E36565'} />
//             </TaskDelete>
//         </Container>
//     );
// }

const Task = (props) => {
    return (
        <Container>
            <TaskDone>
                <Feather name="square" size={24} color={'black'} />
            </TaskDone>
            <TaskText>{props.text}</TaskText>
            <TaskDelete>
                <Feather name="trash-2" size={24} color={'#E36565'} />
            </TaskDelete>
        </Container>
    );
};

export default Task;
