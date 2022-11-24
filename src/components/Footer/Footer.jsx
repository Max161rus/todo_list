import { FooterWrapper, Count, Filter, FilterButton, BtnClear, Clear } from './Footer.styled';

const Footer = ({ data, deleteСompletedTodos, filterTodo, filter }) => {

    const activeСases = todos => {
        let counter = 0;
        todos.forEach(item => {
            if (item.activityFlag) {
                counter++;
            }
        });
        return counter;
    }

    return (
        <FooterWrapper >
            <Count >{activeСases(data)} item{activeСases(data) > 1 && "s"} left</Count>
            <Filter >
                <FilterButton onClick={(e) => filterTodo('All')} filter={filter === 'All' ? 'true' : null}>All</FilterButton>
                <FilterButton onClick={(e) => filterTodo('Active')} filter={filter === 'Active' ? 'true' : null}>Active</FilterButton>
                <FilterButton onClick={(e) => filterTodo('Completed')} filter={filter === 'Completed' ? 'true' : null}>Completed</FilterButton>
            </Filter>
            <BtnClear >
                {data.some(item => item.activityFlag === false) && <Clear onClick={deleteСompletedTodos}>Clear completed</Clear>}
            </BtnClear>
        </FooterWrapper>
    );
}

export default Footer;