import TextToDo from '../TextToDo/TextToDo';
import style from './Main.module.css';

const Main = (props) => {

    return (
        <main className={style.main}>
            <ul>
                {props.data.map((item, key) => {
                    if (props.filter === 'all') {
                        return (
                            <TextToDo dataChange={props.dataChange} todo={item} dataList={props.data} index={key} key={key} />
                        )
                    }
                    if (props.filter === 'active' && item.active === true) {
                        return (
                            <TextToDo dataChange={props.dataChange} todo={item} dataList={props.data} index={key} key={key} />
                        )
                    }
                    if (props.filter === 'completed' && item.active === false) {
                        return (
                            <TextToDo dataChange={props.dataChange} todo={item} dataList={props.data} index={key} key={key} />
                        )
                    }
                })}
            </ul>
        </main>
    );
}

export default Main;