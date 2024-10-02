import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTodos } from '../context/TodoContext';
import { useAuth } from '../context/AuthContext';
import TodoItem from '../components/Task/index';
import { Feather } from '@expo/vector-icons';

type RootStackParamList = {
  Login: undefined;
  TodoList: undefined;
  AddTodo: undefined;
};

type TodoListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TodoList'>;

const TodoListScreen: React.FC = () => {
  const { todos, toggleTodo, deleteTodo } = useTodos();
  const { logout } = useAuth();
  const navigation = useNavigation<TodoListScreenNavigationProp>();

  const handleAddTodo = () => {
    navigation.navigate('AddTodo');
  };

  const handleLogout = async () => {
    await logout();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggle={() => toggleTodo(item.id)}
            onDelete={() => deleteTodo(item.id)}
          />
        )}
        keyExtractor={item => item.id}
      />
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Feather name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDE8FF',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#E36565',
    padding: 10,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default TodoListScreen;