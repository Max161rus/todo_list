import ItemTodo from '../ItemTodo/ItemTodo';
import ListWrapper from './Main.styled';
import { useSelector } from 'react-redux';
import { filteredListAndCounterOfActiveItems } from '../../store/todoListReducer';

const Main = () => {

  const { filteredTodoList } = useSelector(filteredListAndCounterOfActiveItems);

  return (
    <ListWrapper >
      <ul>
        {filteredTodoList.map(elem => <ItemTodo data={elem} key={elem.id} />)}
      </ul>
    </ListWrapper>
  );
}

export default Main;