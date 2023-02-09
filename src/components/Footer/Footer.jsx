import { FooterWrapper, Count, Filter, FilterButton, BtnClear, Clear } from './Footer.styled';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { todoSlice } from '../../store/todoListReducer';

const Footer = () => {

  const data = useSelector(fullStore => fullStore.data.data);

  const filter = useSelector(fullStore => fullStore.data.filter);

  const dispach = useDispatch();

  const action = todoSlice.actions;

  const filterButtonArr = ['All', 'Active', 'Complited'];

  const activeСases = todos => {
    let counter = 0;
    todos.forEach(item => {
      if (item.activityFlag) {
        counter++;
      }
    });
    return counter;
  }

  const deleteComplitedTodo = (dataList) => {
    const activeData = dataList.filter(item => item.activityFlag);
    dispach(action.deleteComplitedTodo(activeData));
  }

  const toggleFilter = (filterName) => {
    dispach(action.toggleFilter(filterName));
  }

  return (
    <FooterWrapper >
      <Count >{activeСases(data)} item{activeСases(data) > 1 && "s"} left</Count>

      <Filter >
        {filterButtonArr.map(item => <FilterButton
          onClick={() => toggleFilter(item)}
          filter={filter === item ? 'true' : null}
          key={uuidv4()}>{item}</FilterButton>)}
      </Filter>

      <BtnClear >
        {data.some(item => item.activityFlag === false) &&
          <Clear onClick={() => deleteComplitedTodo(data)}>Clear completed</Clear>}
      </BtnClear>

    </FooterWrapper>
  );
}

export default Footer;