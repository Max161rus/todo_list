import style from './ItemTodo.module.css';
import stylesMultipleClasses from 'classnames'
import completed from './images/completed.svg';
import noCompleted from './images/no_completed.svg';

const ItemTodo = ({ data, dataList, deleteTodo, activitySwitch, editItem, savingChangesItem, cancelingSaveByClick }) => {

    const deleteItem = (data, dataList) => {
        const newData = [];
        let index = 0;
        dataList.forEach(item => {
            if (item.id !== data.id) {
                newData[index] = item;
                index++;
            }
        })
        deleteTodo(newData);
    };

    const toggleActivityFlag = (data, dataList) => {
        const newData = [];
        dataList.forEach((item, index) => {
            if (item.id === data.id) {
                item.activityFlag = !item.activityFlag;
            }
            newData[index] = item;
        })
        activitySwitch(newData);
    }

    return (
        <li className={style.listItem}>
            <div className={style.listWrapper}>
                {data.activityFlag ? <img onClick={() => toggleActivityFlag(data, dataList)} className={style.iconOff} src={noCompleted} alt="not pressed" /> :
                    <img onClick={() => toggleActivityFlag(data, dataList)} className={style.iconOn} src={completed} alt="pressed" />}

                {data.editingTodo ? <input onBlur={cancelingSaveByClick} onKeyDown={(e) => savingChangesItem(e, data.id)} className={style.listText} defaultValue={data.todoText} id="main__list-text" /> :
                    <label onDoubleClick={() => editItem(data.id)} className={data.activityFlag ? style.listTodo : stylesMultipleClasses(style.listTodo, style.completed)}
                        htmlFor="main__list-text">{data.todoText}</label>}

                <button onClick={() => deleteItem(data, dataList)} className={style.listClear}>×</button>
            </div>
        </li>
    );
}

export default ItemTodo;