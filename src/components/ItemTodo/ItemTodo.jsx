import { useState } from 'react';
import { ListItem, ListWrapper, Img, ListText, ListTodo, ListClear } from './ItemTodo.styled';
import completed from './images/completed.svg';
import noCompleted from './images/no_completed.svg';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/todoListReducer';
import { useSelector } from 'react-redux';

const ItemTodo = ({ data }) => {

  const [editing, onEditing] = useState(false);

  const [text, onText] = useState(data.todoText);

  const dispach = useDispatch();

  const dataList = useSelector(({ data }) => data.data);

  const savingChangesItem = (e, id) => {

    if (e.key === 'Enter') {

      const data = JSON.parse(JSON.stringify(dataList));

      data.forEach(item => {
        if (item.id === id) {
          item.todoText = text;
        }
      });
      onEditing(false);
      dispach(todoActions.savingChangesItem(data));

    }
    if (e.key === 'Escape') {
      dataList.forEach(item => {
        if (item.id === id) {
          onText(item.todoText);
        }
      });
      onEditing(false);
    }
  }

  const cancEditByRemovFocus = (id) => {
    dataList.forEach(item => {
      if (item.id === id) {
        onText(item.todoText);
      }
    });
    onEditing(false);
  }

  return (
    <ListItem >
      <ListWrapper >
        {data.activityFlag ? <Img
          onClick={() => dispach(todoActions.switchingActivityItem(data.id))}
          src={noCompleted} alt="not pressed" /> :

          <Img onClick={() => dispach(todoActions.switchingActivityItem(data.id))}
            src={completed} alt="pressed" />}

        {editing ? <ListText
          onChange={(e) => onText(e.target.value)}
          onKeyDown={(e) => savingChangesItem(e, data.id)}
          onBlur={() => cancEditByRemovFocus(data.id)}
          value={text} id="main__list-text" autoFocus /> :

          <ListTodo
            onDoubleClick={() => onEditing(true)}
            complited={!data.activityFlag ? 'true' : null}
            htmlFor="main__list-text">{text}</ListTodo>}

        <ListClear onClick={() => dispach(todoActions.deleteTodo(data.id))}>×</ListClear>
      </ListWrapper>
    </ListItem>
  );
}

export default ItemTodo;