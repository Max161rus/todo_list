import style from './TextToDo.module.css';
import completed from './images/completed.svg';
import noCompleted from './images/no_completed.svg';

const TextToDo = () => {
    return (
        <li className={style.listItem}>
            <div className={style.listWrapper}>
                <input className={style.listCompleted} type="checkbox" id="toggle" />
                <label className={style.listOn} htmlFor="toggle">
                    <img className={style.iconOn} src={completed} alt="pressed" />
                </label>
                <label className={style.listOff} htmlFor="toggle">
                    <img className={style.iconOff} src={noCompleted} alt="not pressed" />
                </label>
                <label className={style.listTodo} htmlFor="main__list-text">newToDoList</label>
                <input className={style.listText} defaultValue="newToDo" id="main__list-text" desabled="true" />
                <button className={style.listClear}>×</button>
            </div>
        </li>
    );
}

export default TextToDo;