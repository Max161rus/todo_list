import ItemTodo from '../ItemTodo/ItemTodo';
import style from './Main.module.css';

const Main = ({ data, deleteTodo, savingChangesItem, switchingActivityItem, cancEditByRemovFocus }) => {

    return (
        <main className={style.main}>
            <ul>
                {data.map(item => {
                    return <ItemTodo data={item} key={item.id}
                        deleteTodo={deleteTodo} switchingActivityItem={switchingActivityItem}
                        savingChangesItem={savingChangesItem} cancEditByRemovFocus={cancEditByRemovFocus} />
                })}
            </ul>
        </main>
    );
}

export default Main;