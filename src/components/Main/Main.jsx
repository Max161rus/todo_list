import ItemTodo from '../ItemTodo/ItemTodo';
import style from './Main.module.css';

const Main = ({ data, deleteTodo, activitySwitch, filter, editItem, savingChangesItem }) => {

    const filterItems = (filterName, data) => {
        if (filterName === 'All') {
            return data.filter(item => item);
        }
        if (filterName === 'Active') {
            return data.filter(item => item.activityFlag);
        }
        if (filterName === 'Completed') {
            return data.filter(item => !item.activityFlag);
        }
    }

    return (
        <main className={style.main}>
            <ul>
                {filterItems(filter, data).map(item => {
                    return <ItemTodo dataList={data} data={item} key={item.id}
                     deleteTodo={deleteTodo} activitySwitch={activitySwitch} editItem={editItem} savingChangesItem={savingChangesItem}/>
                })}
            </ul>
        </main>
    );
}

export default Main;