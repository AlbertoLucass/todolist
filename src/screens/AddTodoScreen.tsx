import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTodos } from '../context/TodoContext';
import { Feather } from '@expo/vector-icons';

type RootStackParamList = {
  Login: undefined;
  TodoList: undefined;
  AddTodo: undefined;
};

type AddTodoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddTodo'>;

const AddTodoScreen: React.FC = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodos();
  const navigation = useNavigation<AddTodoScreenNavigationProp>();

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#CDE8FF',
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#212C33',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default AddTodoScreen;