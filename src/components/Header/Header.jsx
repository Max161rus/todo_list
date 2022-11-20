import { useState } from 'react';
import style from './Header.module.css';

const Header = ({ data, addTodo, allItemsToggle }) => {

    const [text, onText] = useState('');

    const addLabelSelectAll = data => {
        if (data.length > 0 && data.every(item => !item.activityFlag)) {
            return <label onClick={() => allItemsToggle(true)} className={style.newTodoLabelActive}>❯</label>
        }
        else if (data.length > 0) {
            return <label onClick={() => allItemsToggle(false)} className={style.newTodoLabelNonActive}>❯</label>
        } else {
            return null;
        }
    }

    return (
        <header className={style.header}>
            <h1 className={style.heading}>todos</h1>
            <div className={style.newTodo}>
                <div className={style.newTodoWrapper}>
                    {addLabelSelectAll(data)}
                </div>
                <input onChange={e => onText(e.target.value)} onKeyDown={(e) => addTodo(e, text, onText)} className={style.newTodoText} placeholder="Что нужно сделать?" autoFocus value={text} />
            </div>
        </header>
    );
}

export default Header;