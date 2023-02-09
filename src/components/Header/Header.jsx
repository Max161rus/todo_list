import { useState } from 'react';
import { HeaderWrapper, Heading, NewTodo, NewTodoLabelNonActive, NewTodoLabelActive, NewTodoWrapper, NewTodoText } from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { todoSlice } from '../../store/todoListReducer';
import { v4 as uuidv4 } from 'uuid';

const Header = () => {

  const [text, onText] = useState('');

  const dispach = useDispatch();

  const action = todoSlice.actions;

  const data = useSelector(fullStore => fullStore.data.data)

  const addTodoNew = (e) => {
    if (e.key === 'Enter' && text !== '') {
      const uniqueId = uuidv4();
      const newTodo = {
        todoText: text,
        activityFlag: true,
        id: uniqueId
      };
      onText('');
      dispach(action.addTodo(newTodo));
    }
  }

  const allItemsToggle = (value) => {
    dispach(action.allItemsToggle(value));
  }

  const addLabelSelectAll = (data) => {

    if (data.length > 0 && data.every(item => !item.activityFlag)) {
      return <NewTodoLabelActive onClick={() => allItemsToggle(true)} >❯</NewTodoLabelActive>
    }

    else if (data.length > 0) {
      return <NewTodoLabelNonActive onClick={() => allItemsToggle(false)} >❯</NewTodoLabelNonActive>
    }

    else {
      return null;
    }
  }

  return (
    <HeaderWrapper >

      <Heading >todos</Heading>

      <NewTodo >

        <NewTodoWrapper >
          {addLabelSelectAll(data)}
        </NewTodoWrapper>

        <NewTodoText
          onKeyDown={(e) => addTodoNew(e)}
          onChange={e => onText(e.target.value)}
          placeholder="Что нужно сделать?"
          autoFocus
          value={text} />

      </NewTodo>
      
    </HeaderWrapper>
  );
}

export default Header;