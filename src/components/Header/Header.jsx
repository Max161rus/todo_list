import style from './Header.module.css';

const Header = ({ addTodo, data }) => {

    const addTextTodo = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
            const text = e.target.value;
            e.target.value = '';
            addTodo(text);
        }
    }

    return (
        <header className={style.header}>
            <h1 className={style.heading}>todos</h1>
            <div className={style.newTodo}>
                <div className={style.newTodoWrapper}>
                    {data.length > 0 ? <label className={style.newTodoLabel}>❯</label> : null}
                </div>
                <input onKeyDown={addTextTodo} className={style.newTodoText} placeholder="Что нужно сделать?" autoFocus />
            </div>
        </header>
    );
}

export default Header;