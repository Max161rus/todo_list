import ItemTodo from '../ItemTodo/ItemTodo';
import style from './Main.module.css';

const Main = ({ data, deleteTodo, activitySwitch, filter }) => {

    return (
        <main className={style.main}>
            <ul>
                {data.map(item => {
                   return <ItemTodo dataList={data} data={item} key={item.id} deleteTodo={deleteTodo} activitySwitch={activitySwitch}/>
                })}
            </ul>
        </main>
    );
}

export default Main;