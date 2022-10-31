import style from './Footer.module.css';

const Footer = ({ data, deleteСompletedTodos, filterTodo }) => {

    const activeСases = todos => {
        let counter = 0;
        todos.forEach(item => {
            if (item.activityFlag) {
                counter++;
            }
        });
        return counter;
    }

    const deletedComplitedItems = data => {
        const newData = data.filter(item => item.activityFlag);
        deleteСompletedTodos(newData);
    }

    const filterItems = e => {
        filterTodo(e.target.innerText);
    }

    return (
        <footer className={style.footer}>
            <p className={style.count}>{activeСases(data)} item{activeСases(data) > 1 && "s"} left</p>
            <div className={style.filter}>
                <button onClick={(e) => filterItems(e)} className={style.filterButton && style.active}>All</button>
                <button onClick={(e) => filterItems(e)} className={style.filterButton}>Active</button>
                <button onClick={(e) => filterItems(e)} className={style.filterButton}>Completed</button>
            </div>
            <div className={style.btnClear}>
                {data.some(item => item.activityFlag === false) && <button onClick={() => deletedComplitedItems(data)} className={style.clear}>Clear completed</button>}
            </div>

        </footer>
    );
}

export default Footer;