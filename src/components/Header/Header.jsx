//import {useState} from 'react';
import style from './Header.module.css';

const Header = (props) => {

    const onEnter = e => {
        if(e.key === 'Enter' && e.target.value !== ''){
            const newData = props.data.map(item => item);
            newData.push({
                text: e.target.value,
                active: true,
            });
            e.target.value = '';  
            props.dataChange(newData); 
        }
    };

    return (
        <header className={style.header}>
            <h1 className={style.heading}>todos</h1>
            <div className={style.newTodo}>
                <label className={style.newTodoLabel}>❯</label>
                <input onKeyDown={onEnter} className={style.newTodoText} placeholder="Что нужно сделать?" autoFocus="" />
            </div>
        </header>
    );
}

export default Header;