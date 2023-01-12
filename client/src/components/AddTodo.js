import {useState} from "react";
//1. 함수형 컴포넌트
//2. input과 button을 가짐
//3. app.js 어디가에서 addTodo 컴포넌트 추가
// => 사용자 입력을 받음.

const AddTodo = ({addItem}) => {

    //사용자가 입력한 값(title) 저장할 객체
    // (id, title, done에 대한 정보를 저장해야 하기에 객체 형태로!)
    const [todoItem, setTodoItem] = useState({
        title: '초기값'
    });

    //험수
    const handleKeyPress = (e) =>{
        if(e.key == "Enter"){
            onButtonClick();
        }
    }

    const onButtonClick = () =>{
        //props로 받아온 addItem 함수 실행함.
        addItem(todoItem);

        //App컴포넌트에서 매개변수로 받는 newItem은 AddTodo 컴포넌트에서 todoItem임.
        //todoItem을 매개변수로 받아 App컴포넌트에서 newItem으로 쓰고 있는 것.
        //그대로 todoItemd이란 객체를 보내고 App컴포넌트의 (addItem)에서 id와 done값이 추가된다.
        //그 후 기존 배열인 todoItems에 newItem이 추가된다.

        //input창 초기화
        setTodoItem({title: ''});
    }

    return(
        <div className="AddTodo">
            <input type="text" 
                    placeholder="Add yout new Todo" 
                    value={todoItem.title}
                    onChange={(e) => {setTodoItem({title: e.target.value})}}
                    onKeyPress={handleKeyPress}
            />

            {/* button을 누르면 밑에 Todo 리스트가 추가됨 */}
            <button onClick={onButtonClick}>ADD</button>
        </div>
    )
}

export default AddTodo;