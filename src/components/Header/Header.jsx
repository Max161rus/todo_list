import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <h1 className={style.heading}>todos</h1>
            <div className={style.newTodo}>
                <label className={style.newTodoLabel}>❯</label>
                <input className={style.newTodoText} placeholder="Что нужно сделать?" autoFocus="" />
            </div>
        </header>
    );
}

export default Header;