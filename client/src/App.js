import './App.css';
import { useState } from "react";
import Todo from './components/Todo';
import AddTodo from './components/AddTodo'

function App() {
  //가상 데이터 -> back에서 가져와야 함.
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'My Todo1',
      done: false,
    },
    {
      id: 2,
      title: 'My Todo2',
      done: false,
    },
    {
      id: 3,
      title: 'My Todo3',
      done: true,
    },
    // + newItem
  ]);


  return (
    <div className="App">
      <AddTodo />

      {todoItems.map((item) => {
        console.log('item >> ', item);

        return(
          <Todo key = {item.id} item = {item} />
        )
      })
      }
    </div>
  );
}

export default App;
