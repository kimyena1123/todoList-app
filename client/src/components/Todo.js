//1. 함수형 컴포넌트
//2. input(checkbox)와 label을 렌더링하는 컴포넌트
//3. App(부모 컴포넌트)에서 Todo(자식 컴포넌트) 1개를 렌더링
import '../styles/Todo.scss';
import { useState } from "react";

const Todo = ({item, deleteItem}) => { //<Todo todoitem = {todo}/> =>  props = todo
    
    //const {item} = props;
    const {id, title, done} = item;
    
    const [todoItem, setTodoItem] = useState(item);
    const [readOnly, setReadOnly] = useState(true);

    const onDeleteBtn = () => {
        console.log('delete tn click');
        console.log('내가 누른 todo의 id >> ', id);
        console.log('내가 누른 todo의 title >> ', title);
        console.log('내가 누른 todo의 done >> ', done);

        deleteItem(todoItem); //const deleteItem = (targetItem) => {}
    };

    const editEventHandler = (e) => {
        //rest에는 id와 done의 정보가 들어가게 된다
        // => todoItem에 id, title, done이 들어있는데
        // title과 rest로 나눈 것. 따라서 rest에는 id와 done이 담겨있는 것.
        const {title, ...rest} = todoItem; 

        setTodoItem({
            title: e.target.value,
            ...rest,
        });

    };

    const offReadOnlyMode = () => { //input클릭 시 : readonly state를 false로 변경
        setReadOnly(false);
    };

    const enterKeyEventHandler = (e) => {
        if(e.key === "Enter"){
            setReadOnly(true);
        }
    };

    const checkboxEventHandler = () => {
        todoItem.done = !todoItem.done; //!true -> false, !false->true
        setTodoItem(todoItem);
    };


    return(
        <div className="Todo">
            <input type = "checkbox" 
                    id = {`todo${id}`} 
                    name = {`todo${id}`} 
                    value = {`todo${id}`} 
                    defaultChecked = {done} //true이면 체크된 상태.
                    //checkbox 업데이트
                    //done이 true라면 false로, false였다면 true로 변경.
                    onChange = {checkboxEventHandler}
            />

            {/* <label htmlFor={`todo${id}`}>{title}</label> */}
            {/* label 대신 input 태그(text)를 사용해 클릭하면 수정이 가능하도록. */}
            <input type = "text"
                    value = {todoItem.title}
                    readOnly = {readOnly}
                    onChange = {editEventHandler}
                    //원래 기본은 readonly = "true". 
                    //하지만 사용자가 수정하기 위해 input창을 클릭하면 readOnly = "false"로.
                    onClick = {offReadOnlyMode}
                    // enter를 하면 다시 readOnly = "true"로.
                    onKeyPress = {enterKeyEventHandler}
            />

            <button onClick={onDeleteBtn}>DELETE</button>
        </div>
    )
};

export default Todo;