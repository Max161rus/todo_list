import style from './Footer.module.css';

const Footer = (props) => {

    let footerHide = `${style.footer} ${style.hide}`;

    let clearHide = `${style.clear} ${style.clearHide}`;

    let counterItemLeft = 0;

    let filterAll = style.filterAll;

    let filterActive = style.filterActive;

    let filterCompleted = style.filterCompleted;

    if(props.filter === 'all'){
        filterAll = style.filterAll && style.active;
    }

    if(props.filter === 'active'){
        filterActive = style.filterActive && style.active;
    }

    if(props.filter === 'completed'){
        filterCompleted = style.filterCompleted && style.active;
    }

    if (props.data.length > 0) {
        footerHide = style.footer;
    }

    props.data.map(item => {
        if (item.active === false) {
            clearHide = style.clear;
        } else {
            counterItemLeft++;
        }
    });

    const filterChandge = e => {
        props.dataFilter(e.target.name);
    }

    function todoClearCompleted () {
        let counter = 0;
        const newData = [];
            for (let i = 0; i < props.data.length; i++){
                if(props.data[i].active === true){
                    newData[counter] = props.data[i]
                    counter++;
                }
            }
            props.dataChange(newData);		
    }

    return (
        <footer className={footerHide}>
            <p className={style.count}>{counterItemLeft} item left</p>
            <div className={style.filter}>
                <button onClick={filterChandge} className={filterAll} name='all'>All</button>
                <button onClick={filterChandge} className={filterActive} name='active'>Active</button>
                <button onClick={filterChandge} className={filterCompleted} name='completed'>Completed</button>
            </div>
            <button onClick={todoClearCompleted} className={clearHide}>Clear completed</button>
        </footer>
    );
}

export default Footer;