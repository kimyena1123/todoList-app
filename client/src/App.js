import './App.css';
import { useState, useRef } from "react";
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

  //ref 선언
  const todoId = useRef(4);

  //AddTodo 컴포넌트는 상위 컴포넌트(App)의 todoItems에 접근 불가능
  //상위 컴포넌트(App)은 AddTodo 컴포넌트 접근 가능.
  // => App 컴포넌트에 addItem() 함수를 정의하고,
  // => 해당 함수를 AddTodo props로 넘겨야 함.
  const addItem = (newItem) => { //addItem(todoItem); => 여기서 newItem 인자는 todoItem을 의미.
    //newItem - {id: ?, title: ?, done: false}
    //setTodoItems()
    newItem.id = todoId.current++; //key를 위한 id설정
    newItem.done = false; //done 초기화 하는 코드

    //기존 todoItems를 유지하고, 새로운 newItem을 추가
    setTodoItems([...todoItems, newItem]); //setTodoItems(todoItems.concat(newItem));

    console.log('합쳐진 배열 >> ', [...todoItems, newItem]);

    //{title: 'xx'} <- id, done
    //setTodoItems([A,B])
    // -A : 기존배열
    // -B : newItem
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem}/>

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
