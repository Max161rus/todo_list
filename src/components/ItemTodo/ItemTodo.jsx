import { useState } from 'react';
import style from './ItemTodo.module.css';
import stylesMultipleClasses from 'classnames'
import completed from './images/completed.svg';
import noCompleted from './images/no_completed.svg';

const ItemTodo = ({ data, deleteTodo, savingChangesItem, switchingActivityItem, cancEditByRemovFocus }) => {

    const [editing, onEditing] = useState(false);

    const [text, onText] = useState(data.todoText);

    return (
        <li className={style.listItem}>
            <div className={style.listWrapper}>
                {data.activityFlag ? <img onClick={() => switchingActivityItem(data.id)} className={style.iconOff} src={noCompleted} alt="not pressed" /> :
                    <img onClick={() => switchingActivityItem(data.id)} className={style.iconOn} src={completed} alt="pressed" />}

                {editing ? <input onChange={e => onText(e.target.value)} onBlur={() => cancEditByRemovFocus(data.id, onEditing, onText)} onKeyDown={(e) => savingChangesItem(e, data.id, text, onEditing, onText)} className={style.listText} value={text} id="main__list-text" /> :
                    <label onDoubleClick={() => onEditing(true)} className={data.activityFlag ? style.listTodo : stylesMultipleClasses(style.listTodo, style.completed)}
                        htmlFor="main__list-text">{text}</label>}

                <button onClick={() => deleteTodo(data.id)} className={style.listClear}>×</button>
            </div>
        </li>
    );
}

export default ItemTodo;