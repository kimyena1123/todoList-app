//1. 함수형 컴포넌트
//2. input(checkbox)와 label을 렌더링하는 컴포넌트
//3. App(부모 컴포넌트)에서 Todo(자식 컴포넌트) 1개를 렌더링
import { useState } from "react";

const Todo = ({item, deleteItem}) => { //<Todo todoitem = {todo}/> =>  props = todo
    
    //const {item} = props;
    const {id, title, done} = item;
    
    const [todoItem, setTodoItems] = useState(item);
    

    const onDeleteBtn = () => {
        console.log('delete tn click');
        console.log('내가 누른 todo의 id >> ', id);
        console.log('내가 누른 todo의 title >> ', title);
        console.log('내가 누른 todo의 done >> ', done);

        deleteItem(todoItem); //const deleteItem = (targetItem) => {}
    }

    return(
        <div className="Todo">
            <input type = "checkbox" id = {`todo${id}`} name = {`todo${id}`} value = {`todo${id}`} defaultChecked = {done} />
            <label htmlFor={`todo${id}`}>{title}</label>
            <button onClick={()=> onDeleteBtn()}>DELETE</button>
        </div>
    )
};

export default Todo;