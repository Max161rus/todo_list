import style from './TextToDo.module.css';
import completed from './images/completed.svg';
import noCompleted from './images/no_completed.svg';

const TextToDo = (props) => {

    let styleText = style.listTodo;

    let checkImg = `${style.listOn} ${style.listHide}`;

    if (!props.todo.active) {
        styleText = `${style.listTodo} ${style.completed}`;
        checkImg = style.listOn;
    }

    const toDoCompleted = (e) => {
        if(e.target.checked === true) {
            const newData = props.dataList.map(item => item);
            newData.map((item, key) => {
                if(key === props.index){
                    newData[key].active = false;
                }
            });
            props.dataChange(newData);
        } else {
            const newData = props.dataList.map(item => item);
            newData.map((item, key) => {
                if(key === props.index){
                    newData[key].active = true;
                }
            });
            props.dataChange(newData);
        }
    }

    const todoClear = () => {
        const newData = props.dataList.map(item => item);
            newData.map((item, key) => {
                if(key === props.index){
                    newData.splice(key, 1)
                }
            });
            props.dataChange(newData);
    }

    return (
        <li className={style.listItem}>
            <div className={style.listWrapper}>
                <input onClick={toDoCompleted} className={style.listCompleted} type="checkbox" id={`toggle${props.index}`} />
                <label className={checkImg} htmlFor={`toggle${props.index}`}>
                    <img className={style.iconOn} src={completed} alt="pressed" />
                </label>
                <label className={style.listOff} htmlFor={`toggle${props.index}`}>
                    <img className={style.iconOff} src={noCompleted} alt="not pressed" />
                </label>
                <label className={styleText} htmlFor="main__list-text">{props.todo.text}</label>
                <input className={style.listText} defaultValue="newToDo" id="main__list-text" desabled="true" />
                <button onClick={todoClear} className={style.listClear}>×</button>
            </div>
        </li>
    );
}

export default TextToDo;