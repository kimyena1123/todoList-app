import { useState, useRef, useEffect} from "react";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo'
// import Header from './components/Header';
import './styles/App.scss';

function App() {
  //가상 데이터 -> back에서 가져와야 함.
  const [todoItems, setTodoItems] = useState([
    /*{
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
    */
  ]);

  //ref 선언
  const todoId = useRef(4);

  //Mount될 때만 => 최초 rendering
  useEffect(() => {
    console.log('첫 렌더링 완료!');

    const getTodos = async() => {
      ////GET localhost:PORT/todos - show all todos (READ)
      let res = await axios.get("http://localhost:8080/todos");

      console.log(res);
      console.log(res.data);

      setTodoItems(res.data);
    }

    getTodos();
  }, []);

  //AddTodo 컴포넌트는 상위 컴포넌트(App)의 todoItems에 접근 불가능
  //상위 컴포넌트(App)은 AddTodo 컴포넌트 접근 가능.
  // => App 컴포넌트에 addItem() 함수를 정의하고,
  // => 해당 함수를 AddTodo props로 넘겨야 함.
  const addItem = async (newItem) => { //addItem(todoItem); => 여기서 newItem 인자는 todoItem을 의미.
    //axios.post(url, data);
    //POST localhost: PORT/todo - create a new todo (CREATE)
    const res = await axios.post("http://localhost:8080/todo", newItem); //router.post('/todo', async(req, res) => {

    console.log('res 확인 >> ', res.data);
    //기존 아이템: ...todoItmes
    ///새로운 아이템: res.data
    setTodoItems([...todoItems, res.data]);


    //newItem - {id: ?, title: ?, done: false}
    //setTodoItems()
    /*
    newItem.id = todoId.current++; //key를 위한 id설정
    newItem.done = false; //done 초기화 하는 코드

    //기존 todoItems를 유지하고, 새로운 newItem을 추가
    setTodoItems([...todoItems, newItem]); //setTodoItems(todoItems.concat(newItem));

    console.log('합쳐진 배열 >> ', [...todoItems, newItem]);
    */

    //{title: 'xx'} <- id, done
    //setTodoItems([A,B])
    // -A : 기존배열
    // -B : newItem
  };

  
  //전체 Todo 리스트(todoItems)는 App 컴포넌트에서 관리하고 있으므로
  //deleteItem()함수는 App 컴포넌트에 작성되어야 함.
  const deleteItem = async (targetItem) => {
    console.log('click del btn');
    console.log('받은 id를 보자 >> ', targetItem.id);

    //axios.delete(url)
    //DELETE localhost:PORT/todo/:todoId - remove a specific todo (DELETE)
    const res = await axios.delete(`http://localhost:8080/todo/${targetItem.id}`);
    console.log('res', res);
    console.log('res.data', res.data);

    //사용자가 삭제하길 원하는 Item(targetItem)의 id와
    //현재 가지고 있는 todoItems의 item들(haveItem)의 id가
    //같다면 삭제하고 같지 않은 것들은 updateTodoItems에 넣어
    //setTodoItems를 통해 todoItems에 저장
    const updateTodoItems = todoItems.filter((haveItem) => haveItem.id != targetItem.id);
    console.log('delete updateTodoItems 확인 >> ', updateTodoItems);

    setTodoItems(updateTodoItems);
  }

  
  //API를 이용해서 update를 하려면 
  //(1) server/routes/todo.js API를 이용해 서버 데이터를 업데이트 한 후
  //(2) 변경된 내용을 화면에 다시 출력하는 작업
  const updateItem = async (targetItem) => {
    console.log('target >> ', targetItem);

    //axios.patch(url, data);
    ////PATCH localhost: PORT/todo/:todoId - edit a specific todo(UPDATE)
    const res = await axios.patch(`http://localhost:8080/todo/${targetItem.id}`, targetItem);
    
  }

  return (
    <div className="App">
      {/*
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      */}
      <header>🖐Yena Todo App</header>

      <AddTodo addItem={addItem}/>

      <div className="left-todos">🚀{todoItems.length} todos</div>

      {todoItems.length > 0 ? 
        (todoItems.map((item) => {
          //console.log('item >> ', item);

          return(
            <Todo key = {item.id} 
              item = {item}
              deleteItem = {deleteItem} 
              updateItem = {updateItem}
            />
          )
        })
        )  :  (<p className="empty-todos">Todo를 추가해주세요🔥</p>)
      }

    </div>
  );
}

export default App;
