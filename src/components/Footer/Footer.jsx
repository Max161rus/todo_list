import style from './Footer.module.css';
import stylesMultipleClasses from 'classnames'

const Footer = ({ data, deleteСompletedTodos, filterTodo, filter }) => {

    const activeButton = stylesMultipleClasses(style.filterButton && style.active);

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

    const filterItems = nameFilter => {
        filterTodo(nameFilter);
    }

    return (
        <footer className={style.footer}>
            <p className={style.count}>{activeСases(data)} item{activeСases(data) > 1 && "s"} left</p>
            <div className={style.filter}>
                <button onClick={(e) => filterItems('All')} className={filter === 'All' ? activeButton: style.filterButton}>All</button>
                <button onClick={(e) => filterItems('Active')} className={filter === 'Active' ? activeButton: style.filterButton}>Active</button>
                <button onClick={(e) => filterItems('Completed')} className={filter === 'Completed' ? activeButton: style.filterButton}>Completed</button>
            </div>
            <div className={style.btnClear}>
                {data.some(item => item.activityFlag === false) && <button onClick={() => deletedComplitedItems(data)} className={style.clear}>Clear completed</button>}
            </div>

        </footer>
    );
}

export default Footer;