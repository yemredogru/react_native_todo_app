
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  todo: {
    backgroundColor: '#7da453',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  completedTodo: {
    backgroundColor: '#37474f',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  todoText:{
    color:"white"
  },
  doneTodoText:{
      color:"#808080",
      textDecorationLine:"line-through"
  }
});