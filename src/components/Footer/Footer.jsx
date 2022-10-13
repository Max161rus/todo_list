import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <p className={style.count}>item 0</p>
            <div className={style.filter}>
                <button className={style.filterAll && style.active}>All</button>
                <button className={style.filterActive}>Active</button>
                <button className={style.filterCompleted}>Completed</button>
            </div>
            <button className={style.clear}>Clear completed</button>
        </footer>
    );
}

export default Footer;