import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 90%;
    height: 52px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
`;

export const TaskText = styled.Text`
    width: 69%;
    color: #1a1a1a;
    font-size: 14px;
    font-weight: 500;
`;

export const TaskDone = styled.TouchableOpacity`
    width: 52px;
    height: 52px;
    justify-content: center;
    align-items: center;
`;

export const TaskDelete = styled.TouchableOpacity`
    width: 52px;
    height: 52px;
    justify-content: center;
    align-items: center;
`;
