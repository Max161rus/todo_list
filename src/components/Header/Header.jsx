import { useState } from 'react';
import {HeaderWrapper, Heading, NewTodo, NewTodoLabelNonActive, NewTodoLabelActive, NewTodoWrapper, NewTodoText} from './Header.styled';


const Header = ({ data, addTodo, allItemsToggle }) => {

    const [text, onText] = useState('');

    const addLabelSelectAll = data => {
        if (data.length > 0 && data.every(item => !item.activityFlag)) {
            return <NewTodoLabelActive onClick={() => allItemsToggle(true)} >❯</NewTodoLabelActive>
        }
        else if (data.length > 0) {
            return <NewTodoLabelNonActive onClick={() => allItemsToggle(false)} >❯</NewTodoLabelNonActive>
        } else {
            return null;
        }
    }

    return (
        <HeaderWrapper >
            <Heading >todos</Heading>
            <NewTodo >
                <NewTodoWrapper >
                    {addLabelSelectAll(data)}
                </NewTodoWrapper>
                <NewTodoText onChange={e => onText(e.target.value)} onKeyDown={(e) => addTodo(e, text, onText)} placeholder="Что нужно сделать?" autoFocus value={text} />
            </NewTodo>
        </HeaderWrapper>
    );
}

export default Header;