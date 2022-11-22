import ItemTodo from '../ItemTodo/ItemTodo';
import ListWrapper from './Main.styled';

const Main = ({ data, deleteTodo, savingChangesItem, switchingActivityItem, cancEditByRemovFocus }) => {

    return (
        <ListWrapper >
            <ul>
                {data.map(item => {
                    return <ItemTodo data={item} key={item.id}
                        deleteTodo={deleteTodo} switchingActivityItem={switchingActivityItem}
                        savingChangesItem={savingChangesItem} cancEditByRemovFocus={cancEditByRemovFocus} />
                })}
            </ul>
        </ListWrapper>
    );
}

export default Main;