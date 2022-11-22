import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Section from './App.styled';

const TODO_LIST_STORAGE_KEY = 'dataList';

const FILTER_STORAGE_KEY = 'filterName';

const getStoredTodos = () => {
  try {
    const storedItem = localStorage.getItem(TODO_LIST_STORAGE_KEY);
    const parsedItem = JSON.parse(storedItem);
    return parsedItem || [];
  } catch {
    return [];
  }
};

const getStoredFilter = () => {
  try {
    const storedFilterName = localStorage.getItem(FILTER_STORAGE_KEY);
    return storedFilterName || 'All';
  } catch {
    return 'All';
  }
}

const App = () => {

  const [data, setData] = useState(getStoredTodos);

  const [filter, setFilter] = useState(getStoredFilter);

  useEffect(() => {
    const setStoredData = JSON.stringify(data);
    localStorage.setItem(TODO_LIST_STORAGE_KEY, setStoredData);
  }, [data]);

  useEffect(() => {
    localStorage.setItem(FILTER_STORAGE_KEY, filter);
  }, [filter])

  const addTodo = (e, text, textEditor) => {
    if (e.key === 'Enter' && text !== '') {
      const uniqueId = uuidv4();
      const newTodo = {
        todoText: text,
        activityFlag: true,
        id: uniqueId
      };
      textEditor('');
      setData([...data, newTodo]);
    }
  }

  const deleteTodo = id => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  }

  const deleteСompletedTodos = () => {
    const newData = data.filter(item => item.activityFlag);
    setData(newData);
  }

  const switchingActivityItem = id => {
    const newData = [...data];
    newData.forEach(item => {
      if (item.id === id) {
        item.activityFlag = !item.activityFlag;
      }
    });
    setData(newData);
  }

  const allItemsToggle = value => {
    const newData = [...data];
    newData.forEach(item => item.activityFlag = value);
    setData(newData);
  }

  const filterTodo = text => {
    setFilter(text);
  }

  const savingChangesItem = (e, id, text, editingTodo, setInitialValueText) => {
    if (e.key === 'Enter') {
      const newData = [...data];
      newData.forEach(item => {
        if (item.id === id) {
          item.todoText = text;
        }
      });
      editingTodo(false);
      setData(newData);
    }
    if (e.key === 'Escape') {
      data.forEach(item => {
        if (item.id === id) {
          setInitialValueText(item.todoText);
        }
      });
      editingTodo(false);
    }
  }

  const cancEditByRemovFocus = (id, editingTodo, setInitialValueText) => {
    data.forEach(item => {
      if (item.id === id) {
        setInitialValueText(item.todoText);
      }
    });
    editingTodo(false);
  }

  const filterItems = () => {
    if (filter === 'All') {
      return data.filter(item => item);
    }
    if (filter === 'Active') {
      return data.filter(item => item.activityFlag);
    }
    if (filter === 'Completed') {
      return data.filter(item => !item.activityFlag);
    }
  }

  return (
    <Section >
      <Header data={data} addTodo={addTodo} allItemsToggle={allItemsToggle} />
      <Main data={filterItems()} deleteTodo={deleteTodo} switchingActivityItem={switchingActivityItem}
        filter={filter} savingChangesItem={savingChangesItem} cancEditByRemovFocus={cancEditByRemovFocus} />
      {data.length > 0 && <Footer data={data} deleteСompletedTodos={deleteСompletedTodos} filterTodo={filterTodo} filter={filter} />}
    </Section>
  );
}

export default App;

