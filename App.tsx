import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TodoProvider } from './src/context/TodoContext';
import { AuthProvider } from './src/context/AuthContext';
import LoginScreen from './src/screens/LoginScreen';
import TodoListScreen from './src/screens/TodoListScreen';
import AddTodoScreen from './src/screens/AddTodoScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <AuthProvider>
      <TodoProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#212C33',
              },
              headerTintColor: '#FFFFFF',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TodoList" component={TodoListScreen} options={{ title: 'Tarefas de Hoje' }} />
            <Stack.Screen name="AddTodo" component={AddTodoScreen} options={{ title: 'Adicionar Tarefa' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </TodoProvider>
    </AuthProvider>
  );
};

export default App;