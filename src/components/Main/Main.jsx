import TextToDo from '../TextToDo/TextToDo';
import style from './Main.module.css';

const Main = () => {
    return (
        <main className={style.main}>
            <ul>
                <TextToDo />
            </ul>
        </main>
    );
}

export default Main;