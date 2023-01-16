import '../styles/AddTodo.scss';
import {useState, useRef, useEffect} from "react";

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//1. 함수형 컴포넌트
//2. input과 button을 가짐
//3. app.js 어디가에서 addTodo 컴포넌트 추가
// => 사용자 입력을 받음.

const AddTodo = ({addItem}) => {

    //사용자가 입력한 값(title) 저장할 객체
    // (id, title, done에 대한 정보를 저장해야 하기에 객체 형태로!)
    const [todoItem, setTodoItem] = useState({
        title: ''
    });

    //ref 선언
    const inputFocus = useRef();

    //useEffect => Mount(최초 rendering)될 때만.
    useEffect(() => {
        inputFocus.current.focus();
    }, []);


    //험수
    const handleKeyPress = (e) =>{
        if(e.key == "Enter"){
            onButtonClick();
        }
    }

    const onButtonClick = () =>{
        //만약 양끝 공백을 제거한 input text 길이가 0이라면 -> 조건문
        //add하는 함수를 미리 끝내버리기 -> return
        if(todoItem.title.trim().length == 0){ // 공백이라면 끝내버리기
            return;
        }


        //props로 받아온 addItem 함수 실행함.
        addItem(todoItem); // {title : 'input 입력값'}

        //App컴포넌트에서 매개변수로 받는 newItem은 AddTodo 컴포넌트에서 todoItem임.
        //todoItem을 매개변수로 받아 App컴포넌트에서 newItem으로 쓰고 있는 것.
        //그대로 todoItemd이란 객체를 보내고 App컴포넌트의 (addItem)에서 id와 done값이 추가된다.
        //그 후 기존 배열인 todoItems에 newItem이 추가된다.

        //input창 초기화
        setTodoItem({title: ''}); //input 초기화
    }

    return(
        <div className="AddTodo">
            <input type="text" 
                    placeholder="Add yout new Todo" 
                    value={todoItem.title}
                    onChange={(e) => {setTodoItem({title: e.target.value})}}
                    onKeyPress={handleKeyPress}
                    ref={inputFocus}
            />

            {/* button을 누르면 밑에 Todo 리스트가 추가됨 */}
            {/* <button onClick={onButtonClick}>ADD</button> */}
            <button onClick={onButtonClick}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}

export default AddTodo;