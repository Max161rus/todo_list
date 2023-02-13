import { FooterWrapper, Count, Filter, FilterButton, BtnClear, Clear } from './Footer.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterButtonArr } from '../../utils/constants';
import { filteredListAndCounterOfActiveItems, todoActions } from '../../store/todoListReducer';

const Footer = () => {

  const dispach = useDispatch();
  const data = useSelector(({ data }) => data.data);
  const filter = useSelector(({ data }) => data.filter);
  const numberListItems = useSelector(({ data }) => data.data.length);
  const { countActiveTodo } = useSelector(filteredListAndCounterOfActiveItems);

  if (!numberListItems) {
    return null;
  }

  return (
    <FooterWrapper >
      <Count >{countActiveTodo} item{countActiveTodo > 1 && "s"} left</Count>

      <Filter >
        {filterButtonArr.map(item => <FilterButton
          onClick={() => dispach(todoActions.toggleFilter(item))}
          filter={filter === item ? 'true' : null}
          key={item}>{item}</FilterButton>)}
      </Filter>

      <BtnClear >
        {data.some(item => item.activityFlag === false) &&
          <Clear onClick={() => dispach(todoActions.deleteComplitedTodo())}>Clear completed</Clear>}
      </BtnClear>

    </FooterWrapper>
  );
}

export default Footer;