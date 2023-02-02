import ItemTodo from '../ItemTodo/ItemTodo';
import ListWrapper from './Main.styled';
import { useSelector } from 'react-redux';

const Main = () => {

    const data = useSelector(fullStore => fullStore.data.data);

    const filter = useSelector(fullStore => fullStore.data.filter);

    const itemTodo = (elem) => <ItemTodo data={elem} key={elem.id} />

    return (
        <ListWrapper >
            <ul>
                {filter === 'All' && data.map(item => itemTodo(item))}
                {filter === 'Active' && data.filter(item => item.activityFlag).map(item => itemTodo(item))}
                {filter === 'Complited' && data.filter(item => !item.activityFlag).map(item => itemTodo(item))}
            </ul>
        </ListWrapper>
    );
}

export default Main;