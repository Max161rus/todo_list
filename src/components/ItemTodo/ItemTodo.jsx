import { useState } from 'react';
import { ListItem, ListWrapper, Img, ListText, ListTodo, ListClear } from './ItemTodo.styled';
import completed from './images/completed.svg';
import noCompleted from './images/no_completed.svg';

const ItemTodo = ({ data, deleteTodo, savingChangesItem, switchingActivityItem, cancEditByRemovFocus }) => {

    const [editing, onEditing] = useState(false);

    const [text, onText] = useState(data.todoText);

    return (
        <ListItem >
            <ListWrapper >
                {data.activityFlag ? <Img onClick={() => switchingActivityItem(data.id)} src={noCompleted} alt="not pressed" /> :
                    <Img onClick={() => switchingActivityItem(data.id)} src={completed} alt="pressed" />}

                {editing ? <ListText onChange={e => onText(e.target.value)} onBlur={() => cancEditByRemovFocus(data.id, onEditing, onText)} onKeyDown={(e) => savingChangesItem(e, data.id, text, onEditing, onText)} value={text} id="main__list-text" /> :
                    <ListTodo onDoubleClick={() => onEditing(true)} complited={!data.activityFlag ? 'true' : null}
                        htmlFor="main__list-text">{text}</ListTodo>}

                <ListClear onClick={() => deleteTodo(data.id)}>×</ListClear>
            </ListWrapper>
        </ListItem>
    );
}

export default ItemTodo;