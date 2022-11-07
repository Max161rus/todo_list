import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import style from './App.module.css';

const App = () => {

  const [data, setData] = useState([]);

  const [id, setId] = useState(1);

  const [filter, setFilter] = useState('All');

  const settingId = () => {
    setId(id => id + 1);
    return id;
  };

  const addTodo = value => {
    const newTodo = {
      todoText: value,
      activityFlag: true,
      editingTodo: false,
      id: settingId()
    };
    setData([...data, newTodo]);
  }

  const deleteTodo = newData => {
    setData(newData);
  }

  const deleteСompletedTodos = newData => {
    setData(newData);
  }

  const activitySwitch = newData => {
    setData(newData);
  }

  const selectAllTodo = newData => {
    setData(newData);
  }

  const filterTodo = text => {
    setFilter(text);
  }

  const editItem = id => {
    const newData = [];
    data.forEach((item, index) => {
      newData[index] = item;
      if (item.id === id) {
        newData[index].editingTodo = true;
      }
    });
    setData(newData);
  }

  const savingChangesItem = (e, id) => {
    if (e.key === 'Enter') {
      const newData = [];
      data.forEach((item, index) => {
        newData[index] = item;
        if (item.id === id) {
          newData[index].todoText = e.target.value;
          newData[index].editingTodo = false;
        }
      });
      setData(newData);
    }
    if (e.key === 'Escape') {
      const newData = [];
      data.forEach((item, index) => {
        newData[index] = item;
        if (item.id === id) {
          newData[index].editingTodo = false;
        }
      });
      setData(newData);
    }
  }

  return (
    <section className={style.todoapp}>
      <Header addTodo={addTodo} data={data} selectAllTodo={selectAllTodo} />
      <Main data={data} deleteTodo={deleteTodo} activitySwitch={activitySwitch} filter={filter} editItem={editItem} savingChangesItem={savingChangesItem} />
      {data.length > 0 && <Footer data={data} deleteСompletedTodos={deleteСompletedTodos} filterTodo={filterTodo} filter={filter} />}
    </section>
  );
}

export default App;
