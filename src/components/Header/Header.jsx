import { useState } from 'react';
import { HeaderWrapper, Heading, NewTodo, NewTodoLabelNonActive, NewTodoLabelActive, NewTodoWrapper, NewTodoText } from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../../store/todoListReducer';
import { v4 as uuidv4 } from 'uuid';

const Header = () => {

  const [text, onText] = useState('');

  const dispach = useDispatch();

  const data = useSelector(({ data }) => data.data)

  const addTodoNew = (e) => {
    if (e.key === 'Enter' && text !== '') {
      const uniqueId = uuidv4();
      const newTodo = {
        todoText: text.trim(),
        activityFlag: true,
        id: uniqueId
      };
      onText('');
      dispach(todoActions.addTodo(newTodo));
    }
  }

  const addLabelSelectAll = (data) => {

    if (data.length > 0 && data.every(item => !item.activityFlag)) {
      return <NewTodoLabelActive onClick={() => dispach(todoActions.allItemsToggle(true))} >❯</NewTodoLabelActive>
    }

    else if (data.length > 0) {
      return <NewTodoLabelNonActive onClick={() => dispach(todoActions.allItemsToggle(false))} >❯</NewTodoLabelNonActive>
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
          onChange={(e) => onText(e.target.value)}
          placeholder="Что нужно сделать?"
          autoFocus
          value={text} />

      </NewTodo>

    </HeaderWrapper>
  );
}

export default Header;