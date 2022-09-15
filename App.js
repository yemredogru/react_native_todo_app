import React, { useEffect, useState } from 'react';
import { StyleSheet,SafeAreaView,FlatList, Dimensions ,Text,Button, View,TextInput } from 'react-native';
import TodoList from './src/todoList'
export default function App() {
  const [text,setText]=useState('');
  const [todos,setTodos]=useState('');
  
  const renderTodos = ({item}) => (
    <TodoList
      todos={item}
      toggleTodo={toggleTodo}
      removeTodo={removeTodo}
    />
  );

  const addTodo=()=>{
    if(todos.length>0){
      const newTodo={
        id:(todos[todos.length-1].id)+1,
        title:text,
        completed:false
      }
      setTodos([...todos,newTodo]);
      setText('');
    }
    else{
      const newTodo={
        id:1,
        title:text,
        completed:false
      }
      setTodos([...todos,newTodo]);
      setText('');
    }
  }
  const toggleTodo = (id) => {
    const newTodos = todos.map(todo => {
        if(todo.id === id){
            todo.completed = !todo.completed;
        }
        return todo;
    });
    setTodos(newTodos);
}
  const removeTodo=(id)=>{
    const newTodos=todos.filter(todo=>todo.id!==id);
    setTodos(newTodos);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop:40,marginLeft:10,flexDirection:'row'}}>
      <Text style={{fontSize:24,color:'orange'}}>Yapılacaklar </Text>
      <Text style={{fontSize:24,color:'orange'}}>{todos.length}</Text>
      </View>
      <View >
      <FlatList
       data={todos}
       renderItem={renderTodos}
       keyExtractor={item=>item.id}
       />
      <View style={styles.input_view}>
      <TextInput style={styles.text_input}
       placeholder="Yapılacak..."
       value={text}
       onChangeText={(text)=>setText(text)}
       />
       
       <View style={styles.seperator}></View>
       <Button style={styles.button_border}
       title="Kaydet"
       color={'gray'}
       onPress={addTodo}
       
       />
      </View>
      

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'gray',
    height:Dimensions.get('window').height,
  },
  input_view:{
    backgroundColor: "#2f4f4f",
    flex:1,
    position:'absolute',
    padding:14,
    margin:10,
    borderRadius:10,
    marginTop:Dimensions.get('window').height- Dimensions.get('window').height/4,
    right:10,
    left:10,
  },
  text_input:{
    marginLeft:10,
    
  },
  seperator:{
    margin:5,
    borderWidth:0.5,
    borderColor:'yellow',
  },
  button_border:{
    borderRadius:10,
  },
  if_completed:{
    backgroundColor:'gray',
    margin:10,
    
    padding:15,
    borderRadius:10,
  },
  if_not_completed:{
    backgroundColor:'green',
    margin:10,
    
    padding:15,
    borderRadius:10,
  },
  
});
