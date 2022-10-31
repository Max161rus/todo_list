import style from './Footer.module.css';

const Footer = ({ data, deleteСompletedTodos }) => {

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
        const newData = [];
        let index = 0;
        data.forEach(item => {
            if (item.activityFlag) {
                newData[index] = item;
                index++;
            }
        });
        deleteСompletedTodos(newData);
    }

    return (
        <footer className={style.footer}>
            <p className={style.count}>{activeСases(data)} item{activeСases(data) > 1 ? "s" : null} left</p>
            <div className={style.filter}>
                <button className={style.filterButton && style.active}>All</button>
                <button className={style.filterButton}>Active</button>
                <button className={style.filterButton}>Completed</button>
            </div>
            <div className={style.btnClear}>
                {data.some(item => item.activityFlag === false) ? <button onClick={() => deletedComplitedItems(data)} className={style.clear}>Clear completed</button> : null}
            </div>

        </footer>
    );
}

export default Footer;