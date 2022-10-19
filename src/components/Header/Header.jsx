//import {useState} from 'react';
import style from './Header.module.css';

const Header = (props) => {

    let showLabel = `${style.newTodoLabel} ${style.hide}`;

    if(props.data.length > 0) {
		showLabel = `${style.newTodoLabel} ${style.halfHidden}`;
		
		if(props.data.every(item => item.active === false)){
			showLabel = style.newTodoLabel;
		}
	}

    const onEnter = e => {
        if(e.key === 'Enter' && e.target.value !== ''){
            const newData = props.data.map(item => item);
            newData.push({
                text: e.target.value,
                active: true,
                input: false
            });
            e.target.value = ''; 
            localStorage.setItem('data', newData); 
            props.dataChange(newData); 
        }
    };

    function completedAll () {
		const newData = props.data.map(item => item);
			
			if(props.data.every(item => item.active === false)){
				newData.map(item => {
					item.active = true;
				})
			} else {
				newData.map(item => {
					item.active = false;
				})
			}
			props.dataChange(newData);
	}

    return (
        <header className={style.header}>
            <h1 className={style.heading}>todos</h1>
            <div className={style.newTodo}>
                <label onClick={completedAll} className={showLabel}>❯</label>
                <input onKeyDown={onEnter} className={style.newTodoText} placeholder="Что нужно сделать?" autoFocus="" />
            </div>
        </header>
    );
}

export default Header;