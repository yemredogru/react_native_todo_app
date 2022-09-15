import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './TodoList.style.js';

const TodoList = ({todos, toggleTodo, removeTodo}) => {
    console.log(todos)
  return (
    <View>
      <TouchableOpacity
        style={todos.completed ? styles.completedTodo : styles.todo}
        onPress={() => toggleTodo(todos.id)}
        onLongPress={() => removeTodo(todos.id)}>

        <Text style={todos.isCompleted ? styles.doneTodoText : styles.todoText}>
          {todos.name}
        </Text>
        
      </TouchableOpacity>
    </View>
  );
};

export default TodoList;