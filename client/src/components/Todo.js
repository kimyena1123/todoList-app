//1. 함수형 컴포넌트
//2. input(checkbox)와 label을 렌더링하는 컴포넌트
//3. App(부모 컴포넌트)에서 Todo(자식 컴포넌트) 1개를 렌더링
//import { useState } from "react";

const Todo = (props) => { //<Todo todoItem = {todo}/> =>  props = todo
    const {todoItem} = props;

    return(
        <div className="Todo">
            <input type = "checkbox" id = {todoItem.id} name = {todoItem.id} value = {todoItem.id} defaultChecked = {true} />
            <label htmlFor={todoItem.id}>{todoItem.title}</label>
        </div>
    )
};

export default Todo;