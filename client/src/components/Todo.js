//1. 함수형 컴포넌트
//2. input(checkbox)와 label을 렌더링하는 컴포넌트
//3. App(부모 컴포넌트)에서 Todo(자식 컴포넌트) 1개를 렌더링
//import { useState } from "react";

const Todo = (props) => { //<Todo todoitem = {todo}/> =>  props = todo
    
    const {item} = props;

    return(
        <div className="Todo">
            <input type = "checkbox" id = {item.id} name = {item.id} value = {item.id} defaultChecked = {true} />
            <label htmlFor={item.id}>{item.title}</label>
        </div>
    )
};

export default Todo;