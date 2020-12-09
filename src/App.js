import './App.css';
import React, { useRef, useState } from 'react';
import { Header, Footer, Content } from './components';

function App() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(0);

  const [inputValue, setInputValue] = useState('');
  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  // footerButton click 되었을 때 Content Text에 inputValue값을 집어 넣고 inputValue초기화
  const onClick = () => {
    setTodos(
      todos.concat({
        id: nextId.current,
        text: inputValue,
        checked: false,
      }),
    );
    setInputValue('');
    nextId.current += 1;
  };

  // input enter key event
  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      onClick();
    }
  };

  // trash-icon click 되었을 때 filter함수 사용해서 고유 아이디 값 확인 후 해당 아이디제외한 친구들 모아서
  // todos 다시 셋팅할거야
  const onTrashClick = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // click toggle 기능 추가.
  // 해당하는 아이디인 친구의 checked를 반대로 바꿔 준다.
  const onToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      }),
    );
  };

  return (
    <div className="TodoList">
      <Header todos={todos} />
      <Content todos={todos} onTrashClick={onTrashClick} onToggle={onToggle} />
      <Footer
        inputValue={inputValue}
        onKeyPress={onKeyPress}
        onChange={onChange}
        onClick={onClick}
      />
    </div>
  );
}

export default App;
