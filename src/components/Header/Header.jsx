import style from './Header.module.css';

const Header = ({ addTodo, data, selectAllTodoActive, selectAllTodoComplite }) => {

    const addTextTodo = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
            const text = e.target.value;
            e.target.value = '';
            addTodo(text);
        }
    }

    const allCasesActive = data => {
        const newData = [...data];
        newData.forEach((item, index) => {
            item.activityFlag = true;
        });
        selectAllTodoActive(newData);
    }

    const allCasesComplite = data => {
        const newData = [...data];
        newData.forEach((item, index) => {
            item.activityFlag = false;
        });
        selectAllTodoComplite(newData);
    }

    const addLabelSelectAll = (data) => {
        if (data.length > 0 && data.every(item => !item.activityFlag)) {
            return <label onClick={() => allCasesActive(data)} className={style.newTodoLabelActive}>❯</label>
        }
        else if (data.length > 0) {
            return <label onClick={() => allCasesComplite(data)} className={style.newTodoLabelNonActive}>❯</label>
        } else {
            return null;
        }
    }

    return (
        <header className={style.header}>
            <h1 className={style.heading}>todos</h1>
            <div className={style.newTodo}>
                <div className={style.newTodoWrapper}>
                    {addLabelSelectAll(data)}
                </div>
                <input onKeyDown={addTextTodo} className={style.newTodoText} placeholder="Что нужно сделать?" autoFocus />
            </div>
        </header>
    );
}

export default Header;